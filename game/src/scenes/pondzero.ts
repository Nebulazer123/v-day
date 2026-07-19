// POND ZERO — the true-ending stinger. You are a duck. It explains nothing.

import * as THREE from 'three';
import type { GameContext, Scene } from '../main';
import { Sky } from '../art/sky';
import { PAL } from '../art/palette';
import { mat } from '../art/toon';
import { makeDuck, type DuckRig } from '../art/kit';
import { Cutscene } from '../cutscene';
import { Fx } from '../fx';

export class PondZeroScene implements Scene {
  readonly scene = new THREE.Scene();
  private duck: DuckRig;
  private sky: Sky;
  private fx: Fx;
  private cutscene: Cutscene | null = null;
  private t = 0;
  private saluted = false;

  constructor(private ctx: GameContext) {
    this.sky = new Sky();
    this.sky.set({ top: 0x1a2848, horizon: 0x8a5a4a, glow: PAL.duck, glowStrength: 0.3 });
    this.sky.setSunrise(0.45);
    this.scene.add(this.sky.group);
    this.scene.fog = new THREE.FogExp2(0x2a2438, 0.02);
    this.scene.add(new THREE.HemisphereLight(0xd0b49a, 0x2a2848, 1.7));

    // the pond
    const water = new THREE.Mesh(new THREE.CircleGeometry(20, 28), mat(PAL.dockWater, { gloss: 0.6, flatShading: false, emissive: 0x1a3050, emissiveIntensity: 0.5 }));
    water.rotation.x = -Math.PI / 2;
    this.scene.add(water);
    const shore = new THREE.Mesh(new THREE.RingGeometry(20, 34, 28), mat(PAL.grass));
    shore.rotation.x = -Math.PI / 2;
    shore.position.y = 0.02;
    this.scene.add(shore);
    // reeds
    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * Math.PI * 2;
      const reed = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.06, 1.6 + Math.random(), 5), mat(0x2d4a35));
      reed.position.set(Math.cos(a) * (19 + Math.random() * 2), 0.8, Math.sin(a) * (19 + Math.random() * 2));
      this.scene.add(reed);
    }

    this.duck = makeDuck();
    this.duck.group.position.set(0, 0.05, -14);
    this.scene.add(this.duck.group);

    this.fx = new Fx(this.scene);
    ctx.camera.configure([], { x: 0, y: 3, z: -5 });
    ctx.camera.snapTo(this.duck.group.position);
    ctx.hud.chapterCard('POND ZERO', 'it explains nothing. on purpose.');
    void ctx.audio.play('quack', 0.5);
  }

  update(dt: number): void {
    this.t += dt;
    this.fx.update(dt);
    this.sky.update(dt);
    if (this.cutscene && !this.cutscene.done) {
      this.cutscene.update(dt);
      return;
    }
    const intents = this.ctx.input.poll();
    this.ctx.camera.control(dt, intents.rotate, intents.zoom);
    // you waddle. that's the whole game here.
    const cos = Math.cos(this.ctx.camera.yaw);
    const sin = Math.sin(this.ctx.camera.yaw);
    const wx = intents.moveX * cos - intents.moveY * sin;
    const wz = -intents.moveX * sin - intents.moveY * cos;
    this.duck.group.position.x += wx * 3 * dt;
    this.duck.group.position.z += wz * 3 * dt;
    this.duck.group.position.y = 0.05 + Math.abs(Math.sin(this.t * 8)) * 0.04;
    if (Math.hypot(wx, wz) > 0.1) this.duck.group.rotation.y = Math.atan2(wx, wz);
    this.duck.group.rotation.z = Math.sin(this.t * 8) * 0.08;
    if (intents.jump) void 0; // ducks do not jump. ducks transcend.
    if (intents.fire || intents.pounce) void this.ctx.audio.play('quack', 0.6, 0.9 + Math.random() * 0.3);

    const center = Math.hypot(this.duck.group.position.x, this.duck.group.position.z);
    this.ctx.hud.prompt(center < 2.5 && !this.saluted ? '[ENTER] ...?' : null);
    if (center < 2.5 && intents.interact && !this.saluted) {
      this.saluted = true;
      this.playStinger();
    }
    this.ctx.camera.update(dt, this.duck.group.position, new THREE.Vector3(wx, 0, wz), intents.camNudge);
    if (intents.pause) this.ctx.togglePause();
  }

  private playStinger(): void {
    const d = this.duck.group.position.clone();
    this.cutscene = new Cutscene([
      { t: 0, cam: { pos: d.clone().add(new THREE.Vector3(0, 0.8, 3.4)), look: d.clone().setY(0.4), fov: 40 } },
      {
        t: 1.2,
        do: (): void => {
          // the duck turns to camera and salutes
          this.duck.group.rotation.y = Math.PI;
          this.duck.wingR.rotation.z = -2.4;
          void this.ctx.audio.play('quack', 0.8, 0.7);
        },
      },
      {
        t: 3.0,
        flash: 0.8,
        do: (): void => {
          this.ctx.hud.toast('IT WAS ALWAYS THE DUCKS.', 4);
          void this.ctx.audio.play('taskdone', 0.7);
          this.ctx.save.patch((s) => { s.secrets.pondzeroDone = true; s.pearls += 300; });
          this.fx.burst(d.clone().setY(1), 200, { colors: [PAL.duck, PAL.ramenGold], speed: 5, up: 4, life: 2 });
        },
      },
    ], 6.5, this.ctx.camera, this.ctx.cinema, () => {
      this.ctx.go('hub');
    });
  }

  dispose(): void {
    this.ctx.hud.prompt(null);
  }
}
