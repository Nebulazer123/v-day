// Interactables: carriables (dumbbells, blocks, coins, keys, mirror
// shields), pressure plates, doors, lifts. Play scenes own one manager.

import * as THREE from 'three';
import type { EntityDef } from './types';
import { PAL } from './art/palette';
import { mat, emissiveMat } from './art/toon';
import { canvasTexture } from './art/kit';
import { plateSatisfied } from './puzzles';
import type { World, Collider } from './world';
import type { Player } from './player';

export class Carriable {
  readonly obj: THREE.Object3D;
  carried = false;
  readonly home: THREE.Vector3;
  constructor(
    readonly id: string,
    readonly kind: 'dumbbell' | 'block' | 'mirrorShield' | 'coin' | 'key',
    readonly weight: number,
    readonly value: number,
    pos: THREE.Vector3
  ) {
    this.obj = makeCarriable(kind, weight);
    this.obj.position.copy(pos);
    this.home = pos.clone();
  }
  get pos(): THREE.Vector3 {
    return this.obj.position;
  }
}

export interface PlateSlot {
  x: number;
  z: number;
}

/** Stable plate-local locations prevent a valid multi-weight solution from overlapping itself. */
export function plateSlotOffsets(count: number): PlateSlot[] {
  if (count <= 0) return [];
  if (count === 1) return [{ x: 0, z: 0 }];
  const radius = count === 2 ? 0.46 : 0.54;
  return Array.from({ length: count }, (_, index) => {
    const angle = -Math.PI / 2 + (index * Math.PI * 2) / count;
    return { x: Math.cos(angle) * radius, z: Math.sin(angle) * radius };
  });
}

/** The explanation displayed above an exact scale, e.g. `1 + 2 = 3`. */
export function weightSummary(weights: readonly number[]): string {
  if (weights.length === 0) return '0';
  const ordered = [...weights].sort((a, b) => a - b);
  if (ordered.length === 1) return String(ordered[0]);
  return `${ordered.join(' + ')} = ${ordered.reduce((total, weight) => total + weight, 0)}`;
}

function dumbbellColor(weight: number): number {
  if (weight <= 1) return PAL.crtGreen;
  if (weight === 2) return PAL.taroPurple;
  return PAL.ramenGold;
}

function makeCarriable(kind: Carriable['kind'], weight: number): THREE.Object3D {
  const g = new THREE.Group();
  if (kind === 'dumbbell') {
    const s = 0.16 + weight * 0.08;
    const color = dumbbellColor(weight);
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.7, 8), mat(0xc8cdd6, { gloss: 0.4, flatShading: false }));
    bar.rotation.z = Math.PI / 2;
    bar.position.y = s;
    g.add(bar);
    for (const side of [-0.3, 0.3]) {
      const plate = new THREE.Mesh(new THREE.CylinderGeometry(s, s, 0.12, 12), mat(color, { emissive: color, emissiveIntensity: 0.18, gloss: 0.35, flatShading: false }));
      plate.rotation.z = Math.PI / 2;
      plate.position.set(side, s, 0);
      g.add(plate);
    }
    // A top-facing numeral reads from the authored high-angle Gym camera.
    const tagTexture = canvasTexture(128, 128, (ctx) => {
      ctx.clearRect(0, 0, 128, 128);
      ctx.fillStyle = '#0b1026';
      ctx.beginPath();
      ctx.arc(64, 64, 54, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = `#${color.toString(16).padStart(6, '0')}`;
      ctx.lineWidth = 8;
      ctx.stroke();
      ctx.fillStyle = '#ffffff';
      ctx.font = '800 72px "Space Grotesk", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(String(weight), 64, 68);
    });
    const tag = new THREE.Mesh(
      new THREE.PlaneGeometry(Math.max(0.38, s * 1.35), Math.max(0.38, s * 1.35)),
      new THREE.MeshBasicMaterial({ map: tagTexture, transparent: true, side: THREE.DoubleSide })
    );
    tag.rotation.x = -Math.PI / 2;
    tag.position.set(0, s * 2 + 0.035, 0);
    g.add(tag);
    (g as THREE.Group & { weightScale?: number }).weightScale = s;
  } else if (kind === 'block') {
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), mat(0x8a6f4d));
    b.position.y = 0.4;
    b.castShadow = true;
    g.add(b);
  } else if (kind === 'coin') {
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.06, 14), emissiveMat(PAL.ramenGold, 1.2));
    c.position.y = 0.35;
    g.add(c);
  } else if (kind === 'key') {
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.5, 8), emissiveMat(PAL.crtGreen, 1.1));
    stem.rotation.x = Math.PI / 2;
    stem.position.y = 0.4;
    g.add(stem);
    const bow = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.05, 8, 12), emissiveMat(PAL.crtGreen, 1.1));
    bow.position.set(0, 0.4, -0.3);
    g.add(bow);
  } else {
    // mirrorShield
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.2, 0.08), mat(0xdde7f0, { gloss: 0.9, rim: 0.5, flatShading: false }));
    m.position.y = 0.6;
    g.add(m);
  }
  g.traverse((o) => { o.castShadow = true; });
  return g;
}

export class Plate {
  readonly group = new THREE.Group();
  readonly obj: THREE.Mesh;
  private label: THREE.Mesh;
  private lastShown = '';
  satisfied = false;
  restingWeight = 0;
  /** generous placement radius so dropping "on" the plate always registers */
  readonly snapR = 1.6;
  constructor(readonly id: string, readonly pos: THREE.Vector3, readonly needWeight: number, readonly exact: boolean) {
    this.obj = new THREE.Mesh(
      new THREE.CylinderGeometry(1, 1.1, 0.12, 20),
      mat(0x232c4e, { emissive: PAL.heartNeon, emissiveIntensity: 0.2 })
    );
    this.obj.position.y = 0.06;
    this.obj.receiveShadow = true;
    this.group.add(this.obj);
    // a soft ring on the floor showing the target zone
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(1.05, 1.35, 24),
      new THREE.MeshBasicMaterial({ color: PAL.heartNeon, transparent: true, opacity: 0.28, side: THREE.DoubleSide })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.02;
    this.group.add(ring);
    // floating "n / need" counter
    this.label = new THREE.Mesh(
      new THREE.PlaneGeometry(1.1, 0.55),
      new THREE.MeshBasicMaterial({ transparent: true })
    );
    this.label.position.set(0, 1.5, 0);
    this.group.add(this.label);
    this.group.position.copy(pos);
    this.setLabel(0, []);
  }

  private setLabel(w: number, weights: readonly number[]): void {
    const shown = `${w}:${weightSummary(weights)}`;
    if (shown === this.lastShown) return;
    this.lastShown = shown;
    const ok = this.exact ? w === this.needWeight : w >= this.needWeight;
    const tex = canvasTexture(240, 120, (ctx) => {
      ctx.clearRect(0, 0, 240, 120);
      ctx.fillStyle = 'rgba(11,16,38,0.82)';
      ctx.beginPath();
      // rounded pill
      const r = 22;
      ctx.moveTo(r, 4); ctx.arcTo(236, 4, 236, 116, r); ctx.arcTo(236, 116, 4, 116, r);
      ctx.arcTo(4, 116, 4, 4, r); ctx.arcTo(4, 4, 236, 4, r); ctx.fill();
      ctx.fillStyle = ok ? '#33FF88' : '#FFB627';
      ctx.font = `700 ${weights.length > 1 ? 31 : 40}px "Space Grotesk", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(weightSummary(weights), 120, 42);
      ctx.font = '700 27px "Space Grotesk", sans-serif';
      ctx.fillText(`TARGET ${this.needWeight}`, 120, 87);
    });
    const m = this.label.material as THREE.MeshBasicMaterial;
    m.map?.dispose();
    m.map = tex;
    m.needsUpdate = true;
  }

  /** billboard the label toward the camera */
  faceCamera(cam: THREE.Camera): void {
    this.label.quaternion.copy(cam.quaternion);
  }

  update(w: number, weights: readonly number[] = []): void {
    this.restingWeight = w;
    this.setLabel(w, weights);
    const s = plateSatisfied(w, this.needWeight, this.exact);
    if (s !== this.satisfied) {
      this.satisfied = s;
      const m = this.obj.material as THREE.MeshLambertMaterial;
      m.emissive.setHex(s ? PAL.crtGreen : PAL.heartNeon);
      m.emissiveIntensity = s ? 1.1 : 0.2;
    }
  }
}

export class Gate {
  readonly obj: THREE.Mesh;
  readonly collider: Collider;
  open = false;
  private closedY: number;
  private openY: number;
  constructor(readonly id: string, pos: THREE.Vector3, size: THREE.Vector3, color: number, readonly needsKey: boolean, world: World, readonly isLift = false, liftTo?: THREE.Vector3) {
    this.obj = new THREE.Mesh(new THREE.BoxGeometry(size.x, size.y, size.z), mat(color, { emissive: color, emissiveIntensity: 0.14 }));
    this.obj.position.copy(pos);
    this.obj.castShadow = true;
    this.closedY = pos.y;
    this.openY = isLift && liftTo ? liftTo.y : pos.y - size.y - 0.2;
    this.collider = world.addCollider({
      kind: 'box',
      center: this.obj.position,
      half: new THREE.Vector3(size.x / 2, size.y / 2, size.z / 2),
      yaw: 0,
      enabled: true,
    });
  }
  update(dt: number, rider?: Player): void {
    const startY = this.obj.position.y;
    const topY = startY + this.collider.half.y;
    const carriesRider = this.isLift && !!rider && rider.state.grounded &&
      Math.abs(rider.pos.y - topY) < 0.12 &&
      Math.abs(rider.pos.x - this.obj.position.x) <= this.collider.half.x &&
      Math.abs(rider.pos.z - this.obj.position.z) <= this.collider.half.z;
    const target = this.open ? this.openY : this.closedY;
    this.obj.position.y = THREE.MathUtils.damp(this.obj.position.y, target, 3, dt);
    this.collider.center.copy(this.obj.position);
    if (carriesRider && rider) rider.ridePlatform(this.obj.position.y - startY);
  }
}

export class InteractManager {
  carriables: Carriable[] = [];
  plates: Plate[] = [];
  gates: Gate[] = [];
  carrying: Carriable | null = null;

  add(def: EntityDef, world: World, parent: THREE.Object3D): void {
    if (def.type === 'carry') {
      const c = new Carriable(
        def.id, def.kind, def.weight ?? 1, def.value ?? 0,
        new THREE.Vector3(def.pos.x, def.pos.y, def.pos.z)
      );
      this.carriables.push(c);
      parent.add(c.obj);
    } else if (def.type === 'plate') {
      const p = new Plate(def.id, new THREE.Vector3(def.pos.x, def.pos.y, def.pos.z), def.needWeight ?? 1, def.exactWeight ?? false);
      this.plates.push(p);
      parent.add(p.group);
    } else if (def.type === 'door' || def.type === 'lift') {
      const g = new Gate(
        def.id,
        new THREE.Vector3(def.pos.x, def.pos.y, def.pos.z),
        new THREE.Vector3(def.size.x, def.size.y, def.size.z),
        def.color ?? PAL.dockWater,
        def.type === 'door' ? (def.needsKey ?? false) : false,
        world,
        def.type === 'lift',
        def.type === 'lift' ? new THREE.Vector3(def.to.x, def.to.y, def.to.z) : undefined
      );
      this.gates.push(g);
      parent.add(g.obj);
    }
  }

  /** nearest interactable within reach of the player, for the prompt/E. */
  nearest(player: Player): Carriable | null {
    let best: Carriable | null = null;
    let bd = 2.1;
    for (const c of this.carriables) {
      if (c.carried) continue;
      const d = c.pos.distanceTo(player.pos);
      if (d < bd) { bd = d; best = c; }
    }
    return best;
  }

  interact(player: Player): 'picked' | 'dropped' | null {
    if (this.carrying) {
      // drop at feet, snapped in front
      const c = this.carrying;
      c.carried = false;
      c.pos.set(
        player.pos.x + player.state.facingX * 0.9,
        player.pos.y,
        player.pos.z + player.state.facingZ * 0.9
      );
      this.carrying = null;
      return 'dropped';
    }
    const near = this.nearest(player);
    if (near) {
      near.carried = true;
      this.carrying = near;
      return 'picked';
    }
    return null;
  }

  update(dt: number, player: Player, world: World, cam?: THREE.Camera): void {
    // carried object floats above Bentley's back
    if (this.carrying) {
      this.carrying.pos.set(player.pos.x, player.pos.y + 1.25, player.pos.z);
      this.carrying.obj.rotation.y += dt * 1.5;
    }
    // Settle uncarried carriables onto ground, then group them by the nearby
    // plate. A group is laid out into stable local slots below, so a 1+2
    // solution stays visible as two weights instead of becoming one blob.
    const onPlate = new Map<Plate, Carriable[]>();
    for (const c of this.carriables) {
      if (c.carried) continue;
      const g = world.groundAt(c.pos.x, c.pos.z, c.pos.y + 0.4);
      if (g > -Infinity && Math.abs(c.pos.y - g) > 0.01) {
        c.pos.y = THREE.MathUtils.damp(c.pos.y, g, 10, dt);
      }
      // magnetise toward the nearest plate within its snap radius — this is
      // what makes "put the weight on the scale" actually feel like it worked
      let best: Plate | null = null;
      let bd = Infinity;
      for (const p of this.plates) {
        const d = Math.hypot(c.pos.x - p.pos.x, c.pos.z - p.pos.z);
        if (d < p.snapR && d < bd) { bd = d; best = p; }
      }
      if (best) {
        const group = onPlate.get(best) ?? [];
        group.push(c);
        onPlate.set(best, group);
      }
    }

    for (const [plate, group] of onPlate) {
      group.sort((a, b) => a.id.localeCompare(b.id));
      const slots = plateSlotOffsets(group.length);
      for (let index = 0; index < group.length; index++) {
        const c = group[index];
        const slot = slots[index];
        c.pos.x = THREE.MathUtils.damp(c.pos.x, plate.pos.x + slot.x, 12, dt);
        c.pos.z = THREE.MathUtils.damp(c.pos.z, plate.pos.z + slot.z, 12, dt);
      }
    }

    // plates: sum resting carriable weight. Player standing only counts on
    // NON-exact plates (on exact "balance" plates it was a hidden trap).
    for (const p of this.plates) {
      const weights = (onPlate.get(p) ?? [])
        .filter((c) => Math.abs(c.pos.y - p.pos.y) < 0.7)
        .map((c) => c.weight);
      let w = weights.reduce((total, weight) => total + weight, 0);
      if (!p.exact) {
        const pdx = player.pos.x - p.pos.x;
        const pdz = player.pos.z - p.pos.z;
        if (pdx * pdx + pdz * pdz < 1.2 && Math.abs(player.pos.y - p.pos.y) < 0.7) {
          // Non-exact plates count Bentley too, so their visible arithmetic
          // must include him rather than showing a misleading lower total.
          w += 1;
          weights.push(1);
        }
      }
      p.update(w, weights);
      if (cam) p.faceCamera(cam);
    }

    for (const g of this.gates) {
      g.update(dt, player);
    }
  }
}
