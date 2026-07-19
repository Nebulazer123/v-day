// Authored camera: per-level zones with smooth blending, follow damping,
// player-driven yaw nudge, and a shake channel for game-feel kicks.

import * as THREE from 'three';
import type { CameraZone } from './types';

export class GameCamera {
  readonly cam: THREE.PerspectiveCamera;
  private zones: CameraZone[] = [];
  private defaultOffset = new THREE.Vector3(0, 6, -8);
  private curOffset = new THREE.Vector3(0, 6, -8);
  private curFov = 55;
  private nudgeYaw = 0;
  private shakeAmp = 0;
  private shakeT = 0;
  private lookTarget = new THREE.Vector3();

  constructor(aspect: number) {
    this.cam = new THREE.PerspectiveCamera(55, aspect, 0.1, 900);
  }

  configure(zones: CameraZone[], offset: { x: number; y: number; z: number }): void {
    this.zones = zones;
    this.defaultOffset.set(offset.x, offset.y, offset.z);
    this.curOffset.copy(this.defaultOffset);
  }

  kick(amp = 0.25): void {
    this.shakeAmp = Math.max(this.shakeAmp, amp);
  }

  snapTo(target: THREE.Vector3): void {
    this.cam.position.copy(target).add(this.curOffset);
    this.lookTarget.copy(target);
  }

  update(dt: number, target: THREE.Vector3, vel: THREE.Vector3, nudge: number): void {
    // active zone
    let offset = this.defaultOffset;
    let fov = 55;
    let lookAhead = 0.35;
    for (const z of this.zones) {
      if (
        target.x >= z.min.x && target.x <= z.max.x &&
        target.y >= z.min.y && target.y <= z.max.y &&
        target.z >= z.min.z && target.z <= z.max.z
      ) {
        offset = new THREE.Vector3(z.offset.x, z.offset.y, z.offset.z);
        fov = z.fov ?? 55;
        lookAhead = z.lookAhead ?? 0.35;
        break;
      }
    }

    this.curOffset.x = THREE.MathUtils.damp(this.curOffset.x, offset.x, 2.5, dt);
    this.curOffset.y = THREE.MathUtils.damp(this.curOffset.y, offset.y, 2.5, dt);
    this.curOffset.z = THREE.MathUtils.damp(this.curOffset.z, offset.z, 2.5, dt);
    this.curFov = THREE.MathUtils.damp(this.curFov, fov, 2.5, dt);
    if (Math.abs(this.cam.fov - this.curFov) > 0.05) {
      this.cam.fov = this.curFov;
      this.cam.updateProjectionMatrix();
    }

    this.nudgeYaw = THREE.MathUtils.damp(this.nudgeYaw, nudge * 0.5, 4, dt);

    const look = new THREE.Vector3(
      target.x + vel.x * lookAhead,
      target.y + 0.6,
      target.z + vel.z * lookAhead
    );
    this.lookTarget.x = THREE.MathUtils.damp(this.lookTarget.x, look.x, 6, dt);
    this.lookTarget.y = THREE.MathUtils.damp(this.lookTarget.y, look.y, 6, dt);
    this.lookTarget.z = THREE.MathUtils.damp(this.lookTarget.z, look.z, 6, dt);

    const rotated = this.curOffset.clone().applyAxisAngle(UP, this.nudgeYaw);
    const desired = target.clone().add(rotated);
    this.cam.position.x = THREE.MathUtils.damp(this.cam.position.x, desired.x, 5, dt);
    this.cam.position.y = THREE.MathUtils.damp(this.cam.position.y, desired.y, 5, dt);
    this.cam.position.z = THREE.MathUtils.damp(this.cam.position.z, desired.z, 5, dt);

    // shake
    if (this.shakeAmp > 0.001) {
      this.shakeT += dt * 40;
      this.cam.position.x += Math.sin(this.shakeT * 1.1) * this.shakeAmp * 0.12;
      this.cam.position.y += Math.cos(this.shakeT * 1.7) * this.shakeAmp * 0.1;
      this.shakeAmp = THREE.MathUtils.damp(this.shakeAmp, 0, 7, dt);
    }

    this.cam.lookAt(this.lookTarget);
  }

  /** yaw of the camera around Y — used to make input screen-relative. */
  get yaw(): number {
    const d = new THREE.Vector3();
    this.cam.getWorldDirection(d);
    return Math.atan2(-d.x, -d.z);
  }
}

const UP = new THREE.Vector3(0, 1, 0);
