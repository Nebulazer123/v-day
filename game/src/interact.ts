// Interactables: carriables (dumbbells, blocks, coins, keys, mirror
// shields), pressure plates, doors, lifts. Play scenes own one manager.

import * as THREE from 'three';
import type { EntityDef } from './types';
import { PAL } from './art/palette';
import { mat, emissiveMat } from './art/toon';
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

function makeCarriable(kind: Carriable['kind'], weight: number): THREE.Object3D {
  const g = new THREE.Group();
  if (kind === 'dumbbell') {
    const s = 0.16 + weight * 0.08;
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.7, 8), mat(0xc8cdd6, { gloss: 0.4, flatShading: false }));
    bar.rotation.z = Math.PI / 2;
    bar.position.y = s;
    g.add(bar);
    for (const side of [-0.3, 0.3]) {
      const plate = new THREE.Mesh(new THREE.CylinderGeometry(s, s, 0.12, 12), mat(0x2f3856, { gloss: 0.3, flatShading: false }));
      plate.rotation.z = Math.PI / 2;
      plate.position.set(side, s, 0);
      g.add(plate);
    }
    // weight label
    const tag = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 0.02), emissiveMat(PAL.ramenGold, 0.8));
    tag.position.set(0, s + 0.16, 0);
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
  readonly obj: THREE.Mesh;
  satisfied = false;
  restingWeight = 0;
  constructor(readonly id: string, readonly pos: THREE.Vector3, readonly needWeight: number, readonly exact: boolean) {
    this.obj = new THREE.Mesh(
      new THREE.CylinderGeometry(0.9, 1, 0.12, 16),
      mat(0x232c4e, { emissive: PAL.heartNeon, emissiveIntensity: 0.12 })
    );
    this.obj.position.copy(pos);
    this.obj.position.y += 0.06;
    this.obj.receiveShadow = true;
  }
  setSatisfied(s: boolean): void {
    if (s === this.satisfied) return;
    this.satisfied = s;
    const m = this.obj.material as THREE.MeshLambertMaterial;
    m.emissive.setHex(s ? PAL.crtGreen : PAL.heartNeon);
    m.emissiveIntensity = s ? 0.9 : 0.12;
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
  update(dt: number): void {
    const target = this.open ? this.openY : this.closedY;
    this.obj.position.y = THREE.MathUtils.damp(this.obj.position.y, target, 3, dt);
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
      parent.add(p.obj);
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

  update(dt: number, player: Player, world: World): void {
    // carried object floats above Bentley's back
    if (this.carrying) {
      this.carrying.pos.set(player.pos.x, player.pos.y + 1.25, player.pos.z);
      this.carrying.obj.rotation.y += dt * 1.5;
    } else {
      // settle uncarried carriables onto ground
      for (const c of this.carriables) {
        if (c.carried) continue;
        const g = world.groundAt(c.pos.x, c.pos.z, c.pos.y + 0.4);
        if (g > -Infinity && Math.abs(c.pos.y - g) > 0.01) {
          c.pos.y = THREE.MathUtils.damp(c.pos.y, g, 10, dt);
        }
      }
    }

    // plates: sum resting carriable weight + player standing on it
    for (const p of this.plates) {
      let w = 0;
      for (const c of this.carriables) {
        if (c.carried) continue;
        const dx = c.pos.x - p.pos.x;
        const dz = c.pos.z - p.pos.z;
        if (dx * dx + dz * dz < 1.0 && Math.abs(c.pos.y - p.pos.y) < 0.6) w += c.weight;
      }
      const pdx = player.pos.x - p.pos.x;
      const pdz = player.pos.z - p.pos.z;
      if (pdx * pdx + pdz * pdz < 1.0 && Math.abs(player.pos.y - p.pos.y) < 0.7) w += 1;
      p.restingWeight = w;
      p.setSatisfied(plateSatisfied(w, p.needWeight, p.exact));
    }

    for (const g of this.gates) {
      g.update(dt);
      // collider follows door position
      g.collider.center.copy(g.obj.position);
    }
  }
}
