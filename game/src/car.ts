// The C6 on the hub highway: auto-speed spline-ish drive with steering
// offset. The highway is a straight strip along +Z; exits are Z ranges.

import * as THREE from 'three';
import { makeC6, type C6Rig } from './art/kit';

export interface CarState {
  z: number;        // distance along the highway
  x: number;        // lane offset
  speed: number;
  driving: boolean;
}

export class Car {
  readonly rig: C6Rig;
  readonly state: CarState = { z: 0, x: 0, speed: 0, driving: false };
  maxSpeed = 26;
  laneHalf = 5.4;
  speedMultiplier = 1;

  constructor() {
    this.rig = makeC6();
  }

  place(x: number, z: number, yaw = 0): void {
    this.state.x = x;
    this.state.z = z;
    this.rig.group.position.set(x, 0, z);
    this.rig.group.rotation.y = yaw;
  }

  setHeadlights(on: boolean): void {
    for (const h of this.rig.headlights) h.intensity = on ? 260 : 0;
  }

  /** steer in [-1,1]; forward in [-1,1] (negative = reverse for the diner secret). */
  update(dt: number, steer: number, forward: number): void {
    const s = this.state;
    const target = forward * this.maxSpeed * this.speedMultiplier;
    s.speed = THREE.MathUtils.damp(s.speed, target, 1.6, dt);
    s.z += s.speed * dt;
    s.x += steer * 9 * dt * Math.min(1, Math.abs(s.speed) / 6 + 0.2);
    s.x = THREE.MathUtils.clamp(s.x, -this.laneHalf, this.laneHalf);

    const g = this.rig.group;
    g.position.set(s.x, 0, s.z);
    g.rotation.y = steer * -0.18 * Math.sign(s.speed || 1);
    // wheel spin
    const spin = s.speed * dt * 2.6;
    for (const w of this.rig.wheels) w.rotation.x += spin;
    // body lean
    g.rotation.z = THREE.MathUtils.damp(g.rotation.z, steer * -0.06, 6, dt);
  }
}
