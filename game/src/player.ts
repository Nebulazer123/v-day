// Bentley in the scene: binds the pure movement core to three.js, drives
// the character rig animation (ears, tail, legs, squash & stretch).

import * as THREE from 'three';
import { makeBentley, type BentleyRig } from './art/kit';
import { mat } from './art/toon';
import { PAL } from './art/palette';
import { DEFAULT_MOVE, initialMoveState, stepMove, type MoveConfig, type MoveState } from './movement';
import type { World } from './world';
import type { Intents } from './input';

export class Player {
  readonly rig: BentleyRig;
  readonly pos = new THREE.Vector3();
  readonly state: MoveState = initialMoveState();
  cfg: MoveConfig = { ...DEFAULT_MOVE };
  radius = 0.34;
  height = 0.9;
  private squash = 0;
  private t = 0;
  private airSpinT: number | null = null;
  private readonly airSpinDuration = 0.4;
  /** set for one frame on events, for FX/SFX hooks */
  events: { jumped: boolean; airJumped: boolean; landed: boolean; pounced: boolean } =
    { jumped: false, airJumped: false, landed: false, pounced: false };

  constructor() {
    this.rig = makeBentley();
  }

  /** All owned cosmetics are worn at once. This is intentional and funny. */
  applyCosmetics(owned: string[], halo: boolean): void {
    const head = this.rig.head;
    if (owned.includes('cap')) {
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.28, 0.14, 10), mat(PAL.victoryRed, { flatShading: false }));
      cap.position.set(0, 0.26, -0.02);
      const brim = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.04, 0.24), mat(PAL.victoryRed, { flatShading: false }));
      brim.position.set(0, 0.22, -0.3); // backwards. obviously.
      head.add(cap, brim);
    }
    if (owned.includes('sunglasses')) {
      const shades = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.09, 0.05), mat(0x090a12, { gloss: 0.9, flatShading: false }));
      shades.position.set(0, 0.08, 0.24);
      head.add(shades);
    }
    if (owned.includes('glasses')) {
      for (const s of [-1, 1]) {
        const lens = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.015, 6, 12), mat(0xc8cdd6, { gloss: 0.6, flatShading: false }));
        lens.position.set(0.12 * s, 0.08, 0.25);
        head.add(lens);
      }
    }
    if (owned.includes('bandana')) {
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.34, 0.16, 8), mat(PAL.taroPurple, { flatShading: false }));
      b.position.set(0, -0.22, 0);
      head.add(b);
    }
    if (owned.includes('crown')) {
      const c = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.24, 0.18, 8), mat(PAL.ramenGold, { emissive: PAL.ramenGold, emissiveIntensity: 0.6, gloss: 0.9, flatShading: false }));
      c.position.set(0, 0.32, 0);
      head.add(c);
    }
    if (halo) {
      const h = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.03, 8, 18), mat(PAL.star, { emissive: PAL.star, emissiveIntensity: 1.6 }));
      h.rotation.x = Math.PI / 2;
      h.position.set(0, 0.48, 0);
      head.add(h);
    }
    this.trail = owned.includes('trailHearts') ? PAL.heartNeon : owned.includes('trailStars') ? PAL.star : null;
  }
  trail: number | null = null;

  spawnAt(x: number, y: number, z: number, yaw = 0): void {
    this.pos.set(x, y, z);
    this.state.vx = this.state.vy = this.state.vz = 0;
    this.state.facingX = Math.sin(yaw);
    this.state.facingZ = Math.cos(yaw);
    this.rig.group.position.copy(this.pos);
  }

  /** Keep Bentley planted on an authored moving platform instead of relying on a loose ground snap. */
  ridePlatform(deltaY: number): void {
    if (Math.abs(deltaY) < 0.00001) return;
    this.pos.y += deltaY;
    this.state.vy = 0;
    this.state.grounded = true;
    this.rig.group.position.y = this.pos.y;
  }

  /** Point Bentley and the held launcher at a horizontal world direction. */
  faceDirection(x: number, z: number): void {
    const length = Math.hypot(x, z);
    if (length < 0.0001) return;
    this.state.facingX = x / length;
    this.state.facingZ = z / length;
    this.rig.group.rotation.y = Math.atan2(this.state.facingX, this.state.facingZ);
  }

  /**
   * camYaw rotates screen-relative input into world space.
   */
  update(dt: number, intents: Intents, world: World, camYaw: number): void {
    // rotate input by camera yaw
    const cos = Math.cos(camYaw);
    const sin = Math.sin(camYaw);
    const wx = intents.moveX * cos - intents.moveY * sin;
    const wz = -intents.moveX * sin - intents.moveY * cos;

    // A small lip can be stepped over; a real platform needs a jump. Moving
    // lifts carry their rider explicitly rather than abusing this tolerance.
    const groundY = world.groundAt(this.pos.x, this.pos.z, this.pos.y + 0.2);
    const step = stepMove(
      this.state,
      { x: wx, y: wz, jumpPressed: intents.jumpPressed, jumpHeld: intents.jump, pounce: intents.pounce },
      this.cfg,
      dt,
      this.pos.y,
      groundY
    );
    this.pos.x += step.dx;
    this.pos.y += step.dy;
    this.pos.z += step.dz;
    world.resolveWalls(this.pos, this.radius, this.height);

    this.events = {
      jumped: this.state.justJumped,
      airJumped: this.state.justAirJumped,
      landed: this.state.justLanded,
      pounced: this.state.justPounced,
    };
    if (this.state.justAirJumped) this.airSpinT = 0;
    if (this.airSpinT !== null) {
      this.airSpinT += dt;
      if (this.airSpinT >= this.airSpinDuration) this.airSpinT = null;
    }

    // ------- animation
    this.t += dt;
    const g = this.rig.group;
    g.position.copy(this.pos);
    const speed = Math.hypot(this.state.vx, this.state.vz);
    if (speed > 0.4) {
      const targetYaw = Math.atan2(this.state.facingX, this.state.facingZ);
      g.rotation.y = dampAngle(g.rotation.y, targetYaw, 14, dt);
    }

    // squash & stretch
    if (this.state.justLanded) this.squash = 1;
    if (this.state.justJumped || this.state.justPounced) this.squash = -0.7;
    this.squash = damp(this.squash, 0, 9, dt);
    const sy = 1 - this.squash * 0.25;
    const sxz = 1 + this.squash * 0.18;
    this.rig.body.scale.set(sxz, sy, sxz);

    // run gait: legs scissor, ears flop with vertical velocity + gait
    const gait = Math.min(1, speed / this.cfg.walkSpeed);
    const cycle = this.t * 13;
    this.rig.legs.forEach((leg, i) => {
      const phase = i % 2 === 0 ? 0 : Math.PI;
      leg.rotation.x = Math.sin(cycle + phase) * 0.7 * gait;
    });
    const earFlap = -this.state.vy * 0.05 + Math.sin(cycle) * 0.12 * gait;
    this.rig.earL.rotation.z = 0.5 + earFlap;
    this.rig.earR.rotation.z = -0.5 - earFlap;
    this.rig.earL.rotation.x = this.state.grounded ? 0 : -0.6;
    this.rig.earR.rotation.x = this.state.grounded ? 0 : -0.6;
    this.rig.tail.rotation.x = -0.7 + Math.sin(this.t * 8) * 0.25 * (0.4 + gait);
    // pounce: lean forward. double jump: a quick comedic front-flip.
    if (this.airSpinT !== null) {
      this.rig.body.rotation.x = (this.airSpinT / this.airSpinDuration) * Math.PI * 2;
    } else {
      this.rig.body.rotation.x = this.state.pouncing > 0 ? -0.35 : damp(this.rig.body.rotation.x, 0, 10, dt);
    }
  }
}

function damp(v: number, target: number, lambda: number, dt: number): number {
  return THREE.MathUtils.damp(v, target, lambda, dt);
}

function dampAngle(a: number, b: number, lambda: number, dt: number): number {
  let d = (b - a) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * (1 - Math.exp(-lambda * dt));
}
