// The four weapons. Each is a puzzle key as much as a gun:
//   ball    — arcing tennis ball, hits switch targets, bonks ducks
//   boba    — sticky pearls; on marked walls they become platforms
//   whistle — summons an ally duck that fetches pickups / sits on plates
//   ankh    — held aura: reveals hidden geometry, stuns sparkle-wisps

import * as THREE from 'three';
import { PAL } from './art/palette';
import { mat, emissiveMat } from './art/toon';
import type { WeaponId } from './types';
import type { Player } from './player';
import type { World } from './world';
import type { Enemy } from './enemies';

export const WEAPON_NAMES: Record<WeaponId, string> = {
  ball: 'BALL LAUNCHER',
  boba: 'BOBA BLASTER',
  whistle: 'DUCK WHISTLE',
  ankh: 'THE ANKH',
};

interface Ball {
  obj: THREE.Mesh;
  vel: THREE.Vector3;
  life: number;
  active: boolean;
  kind: 'ball' | 'boba';
}

export interface SwitchTarget {
  id: string;
  obj: THREE.Object3D;
  hit: boolean;
}

export interface BobaPlatformSpot {
  pos: THREE.Vector3;
  filled: boolean;
}

export class Weapons {
  owned: WeaponId[] = [];
  tiers: Partial<Record<WeaponId, 1 | 2>> = {};
  equipped: WeaponId | null = null;
  private pool: Ball[] = [];
  private group = new THREE.Group();
  switchTargets: SwitchTarget[] = [];
  bobaSpots: BobaPlatformSpot[] = [];
  private whistleCd = 0;
  allyDuck: THREE.Object3D | null = null;
  private allyTarget: THREE.Vector3 | null = null;
  ankhActive = false;
  private ankhLight: THREE.PointLight;

  onHitTarget: ((id: string) => void) | null = null;
  onBonk: (() => void) | null = null;
  onBobaPlatform: ((spot: BobaPlatformSpot) => void) | null = null;

  constructor(private scene: THREE.Scene) {
    scene.add(this.group);
    for (let i = 0; i < 12; i++) {
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), emissiveMat(PAL.crtGreen, 0.9));
      b.visible = false;
      this.group.add(b);
      this.pool.push({ obj: b, vel: new THREE.Vector3(), life: 0, active: false, kind: 'ball' });
    }
    this.ankhLight = new THREE.PointLight(PAL.grandmaLilac, 0, 9, 1.6);
    scene.add(this.ankhLight);
  }

  setLoadout(owned: WeaponId[], tiers: Partial<Record<WeaponId, 1 | 2>>): void {
    this.owned = [...owned];
    this.tiers = { ...tiers };
    if (!this.equipped && this.owned.length) this.equipped = this.owned[0];
  }

  cycle(dir: number): void {
    if (!this.owned.length) return;
    const i = this.equipped ? this.owned.indexOf(this.equipped) : 0;
    this.equipped = this.owned[(i + dir + this.owned.length) % this.owned.length];
  }

  fire(player: Player, aim?: THREE.Vector3 | null): WeaponId | null {
    if (!this.equipped) return null;
    const w = this.equipped;
    if (w === 'ball' || w === 'boba') {
      const b = this.pool.find((x) => !x.active);
      if (!b) return null;
      b.active = true;
      b.kind = w;
      b.life = 2.6;
      (b.obj.material as THREE.MeshLambertMaterial).color.setHex(w === 'ball' ? PAL.crtGreen : PAL.taroPurple);
      (b.obj.material as THREE.MeshLambertMaterial).emissive.setHex(w === 'ball' ? PAL.crtGreen : PAL.taroPurple);
      b.obj.visible = true;
      b.obj.position.set(player.pos.x, player.pos.y + 0.8, player.pos.z);
      const x = aim?.x ?? player.state.facingX;
      const z = aim?.z ?? player.state.facingZ;
      b.vel.set(x, 0.42, z).normalize().multiplyScalar(13.5);
      return w;
    }
    if (w === 'whistle') {
      if (this.whistleCd > 0) return null;
      this.whistleCd = this.tiers.whistle === 2 ? 4 : 8;
      this.summonAlly(player);
      return w;
    }
    if (w === 'ankh') {
      this.ankhActive = !this.ankhActive;
      return w;
    }
    return null;
  }

  equipSlot(index: number): WeaponId | null {
    const weapon = this.owned[index];
    if (!weapon) return null;
    this.equipped = weapon;
    return weapon;
  }

  private summonAlly(player: Player): void {
    if (!this.allyDuck) {
      // lazy import avoided: tiny inline duck
      const g = new THREE.Group();
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), mat(PAL.duck, { flatShading: false }));
      body.position.y = 0.2;
      g.add(body);
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), mat(PAL.duck, { flatShading: false }));
      head.position.set(0, 0.44, 0.1);
      g.add(head);
      const bill = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.04, 0.12), mat(PAL.duckBill));
      bill.position.set(0, 0.42, 0.22);
      g.add(bill);
      this.scene.add(g);
      this.allyDuck = g;
    }
    this.allyDuck.visible = true;
    this.allyDuck.position.set(player.pos.x + 1, player.pos.y + 2, player.pos.z);
    this.allyTarget = null;
  }

  /** Send the ally duck to a world position (fetch/perch). */
  sendAlly(target: THREE.Vector3): void {
    if (this.allyDuck?.visible) this.allyTarget = target.clone();
  }

  addSwitchTarget(id: string, pos: THREE.Vector3): void {
    const g = new THREE.Group();
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.07, 8, 16), emissiveMat(PAL.ramenGold, 1.4));
    g.add(ring);
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), emissiveMat(PAL.heartNeon, 1.2));
    g.add(core);
    g.position.copy(pos);
    this.group.add(g);
    this.switchTargets.push({ id, obj: g, hit: false });
  }

  addBobaSpot(pos: THREE.Vector3): BobaPlatformSpot {
    const marker = new THREE.Mesh(
      new THREE.CircleGeometry(0.45, 12),
      new THREE.MeshBasicMaterial({ color: PAL.taroPurple, transparent: true, opacity: 0.35, side: THREE.DoubleSide })
    );
    marker.position.copy(pos);
    marker.rotation.x = -Math.PI / 2;
    this.group.add(marker);
    const spot: BobaPlatformSpot = { pos: pos.clone(), filled: false };
    this.bobaSpots.push(spot);
    return spot;
  }

  update(dt: number, player: Player, world: World, enemies: Enemy[]): void {
    this.whistleCd = Math.max(0, this.whistleCd - dt);

    // projectiles
    for (const b of this.pool) {
      if (!b.active) continue;
      b.life -= dt;
      b.vel.y -= 14 * dt;
      b.obj.position.addScaledVector(b.vel, dt);
      const ricochet = this.tiers.ball === 2 && b.kind === 'ball';
      const ground = world.groundAt(b.obj.position.x, b.obj.position.z, b.obj.position.y + 0.2);
      if (b.obj.position.y < ground + 0.14) {
        if (ricochet && b.life > 0.4) {
          b.obj.position.y = ground + 0.14;
          b.vel.y = Math.abs(b.vel.y) * 0.72;
        } else {
          b.life = 0;
        }
      }
      // switch targets
      for (const t of this.switchTargets) {
        if (!t.hit && b.obj.position.distanceTo(t.obj.position) < 0.55) {
          t.hit = true;
          (t.obj.children[1] as THREE.Mesh).scale.setScalar(1.6);
          this.onHitTarget?.(t.id);
          b.life = 0;
        }
      }
      // boba platform spots
      if (b.kind === 'boba') {
        for (const s of this.bobaSpots) {
          if (!s.filled && b.obj.position.distanceTo(s.pos) < 0.8) {
            s.filled = true;
            const plat = new THREE.Mesh(
              new THREE.CylinderGeometry(0.7, 0.62, 0.3, 12),
              mat(PAL.taroPurple, { emissive: PAL.taroPurple, emissiveIntensity: 0.5, flatShading: false })
            );
            plat.position.copy(s.pos);
            this.group.add(plat);
            world.addCollider({
              kind: 'box',
              center: plat.position,
              half: new THREE.Vector3(0.65, 0.15, 0.65),
              yaw: 0,
              enabled: true,
            });
            this.onBobaPlatform?.(s);
            b.life = 0;
          }
        }
      }
      // enemies
      for (const e of enemies) {
        if (e.alive && b.obj.position.distanceTo(e.obj.position) < 0.7) {
          if (e.bonk(b.vel)) {
            this.onBonk?.();
            b.life = 0;
          }
        }
      }
      if (b.life <= 0) {
        b.active = false;
        b.obj.visible = false;
      }
    }

    // ally duck
    if (this.allyDuck?.visible && this.allyTarget) {
      const to = this.allyTarget.clone().sub(this.allyDuck.position);
      if (to.length() > 0.3) {
        this.allyDuck.position.addScaledVector(to.normalize(), 4.5 * dt);
        this.allyDuck.rotation.y = Math.atan2(to.x, to.z);
      }
    }

    // ankh aura
    if (this.ankhActive && this.equipped === 'ankh') {
      this.ankhLight.intensity = 26;
      this.ankhLight.position.set(player.pos.x, player.pos.y + 1.4, player.pos.z);
      const radius = this.tiers.ankh === 2 ? 10 : 6;
      for (const e of enemies) {
        const w = e as Enemy & { stunned?: number };
        if (typeof w.stunned === 'number' && e.obj.position.distanceTo(player.pos) < radius) {
          w.stunned = Math.max(w.stunned, 1.5);
        }
      }
    } else {
      this.ankhLight.intensity = 0;
    }
  }
}
