// The C6 on the hub highway: auto-speed spline-ish drive with steering
// offset. The highway is a straight strip along +Z; exits are Z ranges.

import * as THREE from 'three';
import { makeC6, type C6Rig } from './art/kit';
import { DEFAULT_DRIVE, stepDrive, type DriveStep } from './vehicle';

export interface CarState {
  z: number;        // distance along the highway
  x: number;        // lane offset
  speed: number;
  steering: number;
  gear: number;
  driving: boolean;
}

export class Car {
  readonly rig: C6Rig;
  readonly state: CarState = { z: 0, x: 0, speed: 0, steering: 0, gear: 1, driving: false };
  maxSpeed = DEFAULT_DRIVE.maxForwardSpeed;
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

  /** steer/throttle in [-1,1]. Reverse first brakes; handbrake gives a quick stop. */
  update(dt: number, steer: number, throttle: number, handbrake = false): DriveStep {
    const s = this.state;
    const tuning = {
      ...DEFAULT_DRIVE,
      maxForwardSpeed: this.maxSpeed * this.speedMultiplier,
    };
    const step = stepDrive(s, { throttle, steer, handbrake }, tuning, dt);
    s.z += step.distance;
    s.x += step.lateral;
    s.x = THREE.MathUtils.clamp(s.x, -this.laneHalf, this.laneHalf);

    const g = this.rig.group;
    g.position.set(s.x, 0, s.z);
    g.rotation.y = s.steering * -0.15 * Math.sign(s.speed || 1);
    // wheel spin
    const spin = s.speed * dt / 0.38;
    for (const w of this.rig.wheels) w.rotation.x += spin;
    for (const pivot of this.rig.frontWheelPivots) {
      pivot.rotation.y = THREE.MathUtils.damp(pivot.rotation.y, s.steering * -0.42, 10, dt);
    }
    for (const light of this.rig.taillights) {
      const material = light.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = step.braking ? 4.2 : 1.25;
    }
    // body lean
    g.rotation.z = THREE.MathUtils.damp(g.rotation.z, s.steering * -0.045, 7, dt);
    g.position.y = Math.sin(s.z * 2.1) * Math.min(0.012, Math.abs(s.speed) * 0.00055);
    return step;
  }
}
