// Bentley in the scene: binds the pure movement core to three.js, drives
// the character rig animation (ears, tail, legs, squash & stretch).

import * as THREE from 'three';
import { makeBentley, type BentleyRig } from './art/kit';
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
  /** set for one frame on events, for FX/SFX hooks */
  events: { jumped: boolean; landed: boolean; pounced: boolean } = { jumped: false, landed: false, pounced: false };

  constructor() {
    this.rig = makeBentley();
  }

  spawnAt(x: number, y: number, z: number, yaw = 0): void {
    this.pos.set(x, y, z);
    this.state.vx = this.state.vy = this.state.vz = 0;
    this.state.facingX = Math.sin(yaw);
    this.state.facingZ = Math.cos(yaw);
    this.rig.group.position.copy(this.pos);
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

    const groundY = world.groundAt(this.pos.x, this.pos.z, this.pos.y + 0.3);
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
      landed: this.state.justLanded,
      pounced: this.state.justPounced,
    };

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
    // pounce: lean forward
    this.rig.body.rotation.x = this.state.pouncing > 0 ? -0.35 : damp(this.rig.body.rotation.x, 0, 10, dt);
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
