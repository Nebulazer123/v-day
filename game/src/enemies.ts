// Enemies: patrol ducks (bonk-able, comedic), crabs, sparkle wisps, and
// Hayden's coin-collecting drone. Damage lands through a hurt callback so
// the health system stays in one place (the play scene).

import * as THREE from 'three';
import { makeDuck, type DuckRig } from './art/kit';
import { PAL } from './art/palette';
import { mat, emissiveMat } from './art/toon';
import type { Player } from './player';

export interface Enemy {
  obj: THREE.Object3D;
  alive: boolean;
  update(dt: number, player: Player, hurt: (kind: string) => void): void;
  /** hit by pounce or projectile */
  bonk(dir: THREE.Vector3): boolean;
}

export class PatrolDuck implements Enemy {
  readonly rig: DuckRig;
  readonly obj: THREE.Object3D;
  alive = true;
  private idx = 0;
  private t = Math.random() * 10;
  private stunned = 0;
  private knock = new THREE.Vector3();

  constructor(private waypoints: THREE.Vector3[], private speed = 2.2) {
    this.rig = makeDuck();
    this.obj = this.rig.group;
    this.obj.position.copy(waypoints[0]);
  }

  bonk(dir: THREE.Vector3): boolean {
    if (this.stunned > 0) return false;
    this.stunned = 2.2;
    this.knock.copy(dir).setY(0).normalize().multiplyScalar(6);
    return true;
  }

  update(dt: number, player: Player, hurt: (kind: string) => void): void {
    this.t += dt;
    if (this.stunned > 0) {
      this.stunned -= dt;
      this.obj.position.addScaledVector(this.knock, dt);
      this.knock.multiplyScalar(1 - 4 * dt);
      this.obj.rotation.z = Math.sin(this.t * 30) * 0.3 * Math.min(1, this.stunned);
      return;
    }
    this.obj.rotation.z = 0;
    const target = this.waypoints[this.idx];
    const to = target.clone().sub(this.obj.position).setY(0);
    if (to.length() < 0.4) {
      this.idx = (this.idx + 1) % this.waypoints.length;
    } else {
      to.normalize();
      this.obj.position.addScaledVector(to, this.speed * dt);
      this.obj.rotation.y = Math.atan2(to.x, to.z);
    }
    // waddle
    this.obj.rotation.z = Math.sin(this.t * 9) * 0.12;
    this.rig.wingL.rotation.z = 0.3 + Math.sin(this.t * 9) * 0.15;
    this.rig.wingR.rotation.z = -0.3 - Math.sin(this.t * 9) * 0.15;

    // contact hurts (i-frames handled by the health system)
    if (this.obj.position.distanceTo(player.pos) < 0.85) hurt('duck');
  }
}

export class Crab implements Enemy {
  readonly obj: THREE.Group;
  alive = true;
  private t = Math.random() * 7;
  private origin: THREE.Vector3;

  constructor(pos: THREE.Vector3, private range = 3) {
    this.origin = pos.clone();
    this.obj = new THREE.Group();
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), mat(0xd4552a, { gloss: 0.3, flatShading: false }));
    body.scale.set(1.4, 0.7, 1);
    body.position.y = 0.25;
    body.castShadow = true;
    this.obj.add(body);
    for (const s of [-1, 1]) {
      const claw = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6), mat(0xd4552a, { flatShading: false }));
      claw.position.set(0.45 * s, 0.22, 0.25);
      this.obj.add(claw);
    }
    this.obj.position.copy(pos);
  }

  bonk(): boolean {
    return false; // armored: pouncing a crab is a mistake
  }

  update(dt: number, player: Player, hurt: (kind: string) => void): void {
    this.t += dt;
    this.obj.position.x = this.origin.x + Math.sin(this.t * 1.6) * this.range;
    this.obj.rotation.y = Math.cos(this.t * 1.6) > 0 ? Math.PI / 2 : -Math.PI / 2;
    if (this.obj.position.distanceTo(player.pos) < 0.8) hurt('crab');
  }
}

export class Wisp implements Enemy {
  readonly obj: THREE.Group;
  alive = true;
  private t = Math.random() * 9;
  private origin: THREE.Vector3;
  stunned = 0;

  constructor(pos: THREE.Vector3, private radius = 2.4) {
    this.origin = pos.clone();
    this.obj = new THREE.Group();
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), emissiveMat(PAL.edwardPale, 2.2));
    this.obj.add(core);
    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 10, 8),
      new THREE.MeshBasicMaterial({ color: PAL.edwardPale, transparent: true, opacity: 0.22 })
    );
    this.obj.add(halo);
    this.obj.position.copy(pos);
  }

  bonk(): boolean {
    return false; // only the Ankh stuns wisps
  }

  update(dt: number, player: Player, hurt: (kind: string) => void): void {
    this.t += dt;
    if (this.stunned > 0) {
      this.stunned -= dt;
      this.obj.position.y = this.origin.y + Math.sin(this.t * 40) * 0.05;
      return;
    }
    this.obj.position.set(
      this.origin.x + Math.cos(this.t * 1.1) * this.radius,
      this.origin.y + Math.sin(this.t * 2.3) * 0.5,
      this.origin.z + Math.sin(this.t * 1.1) * this.radius
    );
    if (this.obj.position.distanceTo(player.pos) < 0.7) hurt('sparkle');
  }
}

export class Drone implements Enemy {
  readonly obj: THREE.Group;
  alive = true;
  private t = 0;
  target: THREE.Vector3 | null = null;
  onSteal: (() => void) | null = null;

  constructor(pos: THREE.Vector3) {
    this.obj = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.2, 0.5), mat(0x3a4468, { gloss: 0.4, flatShading: false }));
    this.obj.add(body);
    for (const [x, z] of [[-0.3, -0.3], [0.3, -0.3], [-0.3, 0.3], [0.3, 0.3]] as const) {
      const rotor = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.02, 8), mat(0x59617f));
      rotor.position.set(x, 0.14, z);
      this.obj.add(rotor);
    }
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), emissiveMat(PAL.ramenGold, 2));
    eye.position.set(0, -0.05, 0.26);
    this.obj.add(eye);
    this.obj.position.copy(pos);
    this.obj.position.y += 2.4;
  }

  bonk(): boolean {
    return false;
  }

  update(dt: number, _player: Player, _hurt: (kind: string) => void): void {
    this.t += dt;
    this.obj.position.y += Math.sin(this.t * 3) * 0.004;
    this.obj.rotation.y += dt * 0.8;
    if (this.target) {
      const to = this.target.clone().sub(this.obj.position);
      to.y = 0;
      if (to.length() < 0.6) {
        this.onSteal?.();
        this.target = null;
      } else {
        this.obj.position.addScaledVector(to.normalize(), 3.4 * dt);
      }
    }
  }
}
