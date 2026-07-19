// Keyframed cutscene timeline. Steps fire once when their time arrives;
// tween camera/actors between steps; tap/E/Space skips the whole scene.

import * as THREE from 'three';
import type { GameCamera } from './camera';
import type { Cinema } from './cinema';

export interface CamKey {
  pos: THREE.Vector3;
  look: THREE.Vector3;
  fov?: number;
}

export interface CutsceneStep {
  t: number;
  cam?: CamKey;
  /** camera glides to this key over the given seconds (default: snap-damp) */
  glide?: number;
  do?: () => void;
  slowmo?: number;   // set timeScale
  flash?: number;
}

export class Cutscene {
  private time = 0;
  private fired = new Set<number>();
  private curKey: CamKey | null = null;
  private prevKey: CamKey | null = null;
  private keyStart = 0;
  private glide = 0;
  done = false;

  constructor(
    private steps: CutsceneStep[],
    private duration: number,
    private camera: GameCamera,
    private cinema: Cinema,
    private onDone: () => void
  ) {
    cinema.setCinematic(true);
    camera.cinematicControl = true;
    // skip on click/tap or Escape only — movement keys must never skip
    const skip = (e: Event): void => {
      if (e instanceof KeyboardEvent && e.code !== 'Escape') return;
      e.stopPropagation();
      this.finish();
    };
    this.skipHandler = skip;
    setTimeout(() => {
      addEventListener('pointerdown', skip);
      addEventListener('keydown', skip);
    }, 350);
  }
  private skipHandler: (e: Event) => void;

  update(dt: number): void {
    if (this.done) return;
    this.time += dt;
    this.steps.forEach((s, i) => {
      if (this.time >= s.t && !this.fired.has(i)) {
        this.fired.add(i);
        if (s.cam) {
          this.prevKey = this.curKey ?? s.cam;
          this.curKey = s.cam;
          this.keyStart = this.time;
          this.glide = s.glide ?? 0;
        }
        if (s.slowmo !== undefined) this.cinema.timeScale = s.slowmo;
        if (s.flash) this.cinema.flashWhite(s.flash);
        s.do?.();
      }
    });
    // camera drive
    if (this.curKey) {
      const cam = this.camera.cam;
      if (this.glide > 0 && this.prevKey) {
        const k = Math.min(1, (this.time - this.keyStart) / this.glide);
        const e = k * k * (3 - 2 * k);
        cam.position.lerpVectors(this.prevKey.pos, this.curKey.pos, e);
        const look = this.prevKey.look.clone().lerp(this.curKey.look, e);
        cam.lookAt(look);
        const f0 = this.prevKey.fov ?? 55;
        const f1 = this.curKey.fov ?? 55;
        if (Math.abs(cam.fov - (f0 + (f1 - f0) * e)) > 0.01) {
          cam.fov = f0 + (f1 - f0) * e;
          cam.updateProjectionMatrix();
        }
      } else {
        cam.position.copy(this.curKey.pos);
        cam.lookAt(this.curKey.look);
        if (this.curKey.fov && Math.abs(cam.fov - this.curKey.fov) > 0.01) {
          cam.fov = this.curKey.fov;
          cam.updateProjectionMatrix();
        }
      }
    }
    if (this.time >= this.duration) this.finish();
  }

  finish(): void {
    if (this.done) return;
    this.done = true;
    removeEventListener('pointerdown', this.skipHandler);
    removeEventListener('keydown', this.skipHandler);
    this.cinema.setCinematic(false);
    this.cinema.timeScale = 1;
    this.camera.cinematicControl = false;
    this.onDone();
  }
}
