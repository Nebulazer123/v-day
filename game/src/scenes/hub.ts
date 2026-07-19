// The hub scene: walk Bentley around the parked C6, hop in (E), drive the
// midnight highway between chapter exits, discover the diner by reversing.

import * as THREE from 'three';
import { hubDef, EXITS, DINER_Z, ROAD_HALF } from '../levels/hub';
import { World } from '../world';
import { Player } from '../player';
import { Car } from '../car';
import { Sky } from '../art/sky';
import { makeStreetlight, makeGuardrail, makeSign, makePine } from '../art/kit';
import { PAL } from '../art/palette';
import { makeDuck, makeHeartPiece } from '../art/kit';
import { Fx } from '../fx';
import { Cutscene } from '../cutscene';
import type { GameContext, Scene } from '../main';

const CAR_SEAT = new THREE.Vector3(0, 0.6, -0.2);

export class HubScene implements Scene {
  readonly scene = new THREE.Scene();
  private world: World;
  private player: Player;
  private car: Car;
  private sky: Sky;
  private mode: 'walk' | 'drive' = 'walk';
  private exitCooldown = 0;
  private reverseTime = 0;
  private dinerFound = false;
  private sun: THREE.DirectionalLight;
  private fx: Fx;
  private cutscene: Cutscene | null = null;
  private heroDone = false;

  constructor(private ctx: GameContext) {
    const def = hubDef();
    this.world = new World(def);
    this.scene.add(this.world.group);
    this.scene.fog = new THREE.FogExp2(PAL.midnight, def.fogDensity ?? 0.011);

    this.sky = new Sky();
    this.sky.set({ top: PAL.midnight, horizon: PAL.horizonGlow, glow: def.skyGlow });
    this.scene.add(this.sky.group);

    // lighting
    const hemi = new THREE.HemisphereLight(0x7d8fd0, 0x141a38, 1.15);
    this.scene.add(hemi);
    this.sun = new THREE.DirectionalLight(0xa8b8ff, 1.5);
    this.sun.position.set(20, 40, -20);
    if (ctx.tier === 'ultra') {
      this.sun.castShadow = true;
      this.sun.shadow.mapSize.set(2048, 2048);
      this.sun.shadow.camera.left = -50;
      this.sun.shadow.camera.right = 50;
      this.sun.shadow.camera.top = 60;
      this.sun.shadow.camera.bottom = -60;
      this.sun.shadow.camera.far = 140;
      this.sun.shadow.bias = -0.0008;
    }
    this.scene.add(this.sun);

    // dressing: streetlights + guardrails + treeline
    for (let z = -70; z < 245; z += 22) {
      const l1 = makeStreetlight();
      l1.position.set(-(ROAD_HALF + 2.4), 0, z);
      l1.rotation.y = Math.PI / 2;
      this.scene.add(l1);
      const l2 = makeStreetlight();
      l2.position.set(ROAD_HALF + 2.4, 0, z + 11);
      l2.rotation.y = -Math.PI / 2;
      this.scene.add(l2);
      if (this.ctx.tier === 'ultra' && z % 44 === 0) {
        const glow = new THREE.PointLight(PAL.ramenGold, 30, 16, 1.8);
        glow.position.set(-(ROAD_HALF + 1.4), 5, z + 1.3);
        this.scene.add(glow);
      }
    }
    for (const s of [-1, 1]) {
      for (let z = -60; z < 240; z += 24) {
        // leave gaps at exits on the right side
        if (s === 1 && EXITS.some((e) => Math.abs(e.z - z) < 12)) continue;
        const rail = makeGuardrail(22);
        rail.position.set((ROAD_HALF + 3) * s, 0, z + 11);
        this.scene.add(rail);
      }
    }
    const rng = mulberry(7);
    for (let i = 0; i < 60; i++) {
      const side = rng() > 0.5 ? 1 : -1;
      const tree = makePine(3 + rng() * 4);
      tree.position.set(side * (ROAD_HALF + 10 + rng() * 22), 0, -80 + rng() * 330);
      this.scene.add(tree);
    }

    // exit signage
    for (const e of EXITS) {
      const unlocked = this.isUnlocked(e.id);
      const sign = makeSign(
        [`EXIT ${e.id.slice(2)}`, e.name],
        unlocked ? {} : { fg: '#5b6070' }
      );
      sign.position.set(ROAD_HALF + 8.4, 0, e.z);
      sign.rotation.y = -Math.PI / 2;
      this.scene.add(sign);
    }
    // diner signage (dark until found)
    const dinerSign = makeSign(["GRANDMA'S", 'DINER'], { fg: '#CBB7E8', glow: PAL.grandmaLilac });
    dinerSign.position.set(-(ROAD_HALF + 8), 0, DINER_Z + 9);
    dinerSign.rotation.y = Math.PI / 2;
    this.scene.add(dinerSign);

    // the car + the dog
    this.car = new Car();
    this.car.place(2.4, 6, 0);
    this.car.setHeadlights(false);
    this.scene.add(this.car.rig.group);

    this.player = new Player();
    this.player.spawnAt(-2, 0, 2, Math.PI / 2);
    this.scene.add(this.player.rig.group);

    ctx.camera.configure([], { x: 0, y: 5.2, z: -7.5 });
    ctx.camera.snapTo(this.player.pos);
    this.fx = new Fx(this.scene);

    if (!ctx.save.data.secrets.introSeen) {
      this.playHeist();
    } else {
      ctx.hud.chapterCard('THE HIGHWAY', 'the ducks stole the letter. drive.');
    }
  }

  /** Cold open: ducks shred the letter over the C6 and scatter. */
  private playHeist(): void {
    const carP = this.car.rig.group.position.clone();
    const heistDucks: THREE.Group[] = [];
    const letter = makeHeartPiece();
    letter.position.set(carP.x, 4.2, carP.z);
    letter.visible = false;
    this.scene.add(letter);

    const V = (x: number, y: number, z: number): THREE.Vector3 => new THREE.Vector3(x, y, z);
    this.cutscene = new Cutscene([
      { t: 0, cam: { pos: V(carP.x, 14, carP.z - 1), look: carP, fov: 40 } },
      { t: 0.2, cam: { pos: V(carP.x - 3, 1.2, carP.z - 6), look: V(carP.x, 0.8, carP.z), fov: 44 }, glide: 2.6 },
      {
        t: 2.2,
        do: (): void => {
          letter.visible = true;
          for (let i = 0; i < 4; i++) {
            const d = makeDuck();
            d.group.position.set(carP.x + Math.cos(i * 1.6) * 2.4, 7 + i, carP.z + Math.sin(i * 1.6) * 2.4);
            this.scene.add(d.group);
            heistDucks.push(d.group);
          }
          void this.ctx.audio.play('quack', 0.7);
        },
      },
      {
        t: 2.4,
        cam: { pos: V(carP.x + 4, 3.4, carP.z - 4), look: V(carP.x, 4, carP.z), fov: 50 },
        glide: 1.4,
        slowmo: 0.35,
        do: (): void => {
          for (const d of heistDucks) d.position.y = 5.2;
        },
      },
      {
        t: 3.9,
        flash: 0.5,
        slowmo: 1,
        do: (): void => {
          letter.visible = false;
          this.fx.burst(letter.position, 260, { colors: [0xf5f2e8, PAL.heartNeon, PAL.duck], speed: 6, up: 4, gravity: 3, life: 2 });
          void this.ctx.audio.play('impact', 0.6);
          void this.ctx.audio.play('quack', 0.8, 0.8);
        },
      },
      {
        t: 4.5,
        cam: { pos: V(carP.x, 2.2, carP.z - 9), look: V(carP.x, 8, carP.z + 30), fov: 62 },
        glide: 1.8,
        do: (): void => {
          // ducks scatter toward the horizon with the pieces
          for (const [i, d] of heistDucks.entries()) {
            const dir = V((i - 1.5) * 3, 4 + i, 24);
            const from = d.position.clone();
            const t0 = performance.now();
            const fly = (): void => {
              const k = (performance.now() - t0) / 1600;
              if (k > 1 || !d.parent) { d.removeFromParent(); return; }
              d.position.lerpVectors(from, from.clone().add(dir), k * k);
              requestAnimationFrame(fly);
            };
            fly();
          }
          void this.ctx.audio.play('whoosh', 0.5);
        },
      },
      {
        t: 6.4,
        do: (): void => {
          this.ctx.hud.chapterCard('THE DUCK JOB', 'the ducks stole the letter. send the dog.');
          void this.ctx.audio.play('howl', 0.4, 1.3);
        },
      },
    ], 8.2, this.ctx.camera, this.ctx.cinema, () => {
      this.cutscene = null;
      this.ctx.save.patch((d) => { d.secrets.introSeen = true; });
      this.ctx.camera.snapTo(this.player.pos);
      this.ctx.hud.chapterCard('THE HIGHWAY', 'the ducks stole the letter. drive.');
    });
  }

  /** First time in the driver's seat: the 270° hero orbit. */
  private playHeroReveal(): void {
    const c = this.car.rig.group.position.clone();
    const orbit = (a: number, r: number, y: number): THREE.Vector3 =>
      new THREE.Vector3(c.x + Math.sin(a) * r, y, c.z + Math.cos(a) * r);
    this.cutscene = new Cutscene([
      { t: 0, cam: { pos: orbit(Math.PI, 5, 0.7), look: new THREE.Vector3(c.x, 0.7, c.z), fov: 38 } },
      { t: 0.1, cam: { pos: orbit(Math.PI * 0.5, 5.4, 0.9), look: new THREE.Vector3(c.x, 0.6, c.z), fov: 38 }, glide: 1.9 },
      { t: 2.0, cam: { pos: orbit(Math.PI * 0.08, 6, 1.4), look: new THREE.Vector3(c.x, 0.7, c.z), fov: 42 }, glide: 1.8 },
      {
        t: 3.8,
        flash: 0.35,
        do: (): void => {
          this.car.setHeadlights(true);
          void this.ctx.audio.play('boing', 0.3, 0.5);
        },
        cam: { pos: orbit(0, 7.5, 0.8), look: new THREE.Vector3(c.x, 0.8, c.z), fov: 48 },
        glide: 1.2,
      },
      { t: 5.0, do: (): void => this.ctx.hud.toast('BENTLEY CAN DRIVE. DO NOT ASK.', 2.5) },
    ], 5.8, this.ctx.camera, this.ctx.cinema, () => {
      this.cutscene = null;
      this.ctx.camera.snapTo(this.car.rig.group.position);
    });
  }

  private isUnlocked(id: string): boolean {
    if (id === 'ch1') return true;
    const idx = Number(id.slice(2));
    return this.ctx.save.data.chaptersDone.includes(`ch${idx - 1}`);
  }

  update(dt: number): void {
    this.fx.update(dt);
    if (this.cutscene && !this.cutscene.done) {
      this.cutscene.update(dt);
      this.sky.update(dt);
      return;
    }
    const intents = this.ctx.input.poll();
    this.sky.update(dt);
    this.exitCooldown = Math.max(0, this.exitCooldown - dt);

    if (this.mode === 'walk') {
      this.player.update(dt, intents, this.world, this.ctx.camera.yaw);
      if (this.player.events.jumped) void this.ctx.audio.play('jump', 0.35);
      if (this.player.events.landed) void this.ctx.audio.play('land', 0.25);
      if (this.player.events.pounced) {
        void this.ctx.audio.play('whoosh', 0.4);
        this.ctx.camera.kick(0.18);
        this.fx.burst(this.player.pos, 14, { colors: [0x8a93b8], speed: 2, up: 1, life: 0.5 });
      }
      if (this.player.events.landed) {
        this.fx.burst(this.player.pos, 10, { colors: [0x8a93b8], speed: 1.6, up: 0.8, life: 0.4 });
      }

      // enter car?
      const distToCar = this.player.pos.distanceTo(this.car.rig.group.position);
      this.ctx.hud.prompt(distToCar < 3.2 ? '[E] TAKE THE CORVETTE' : null);
      if (distToCar < 3.2 && intents.interact) {
        this.mode = 'drive';
        this.player.rig.group.visible = false;
        this.car.setHeadlights(true);
        this.ctx.audio.engine(true, 0);
        void this.ctx.audio.play('click', 0.5);
        this.ctx.camera.configure([], { x: 0, y: 4.6, z: -9.5 });
        if (!this.heroDone) {
          this.heroDone = true;
          this.playHeroReveal();
        }
      }

      this.ctx.camera.update(
        dt,
        this.player.pos,
        new THREE.Vector3(this.player.state.vx, 0, this.player.state.vz),
        intents.camNudge
      );
    } else {
      // driving
      const steer = intents.moveX;
      const forward = intents.moveY;
      this.car.update(dt, steer, forward);
      this.ctx.audio.engine(true, Math.abs(this.car.state.speed) / this.car.maxSpeed);

      // seat Bentley silhouette in the car (ears out the window, later pass)
      this.player.pos.copy(this.car.rig.group.position).add(CAR_SEAT);

      // reverse discovery: the diner
      if (this.car.state.speed < -3) this.reverseTime += dt;
      else this.reverseTime = 0;
      if (!this.dinerFound && (this.reverseTime > 4 || this.car.state.z < DINER_Z + 20)) {
        this.dinerFound = true;
        this.ctx.save.patch((d) => { d.secrets.diner = true; });
        this.ctx.hud.toast("GRANDMA'S DINER FOUND. SHE SAYS SPEAK UP.", 3.5);
        void this.ctx.audio.play('ding', 0.6);
      }

      // get out
      this.ctx.hud.prompt(Math.abs(this.car.state.speed) < 1.5 ? '[E] HOP OUT' : null);
      if (intents.interact && Math.abs(this.car.state.speed) < 1.5) {
        this.mode = 'walk';
        this.player.rig.group.visible = true;
        this.player.spawnAt(this.car.state.x - 2.2, 0, this.car.state.z, 0);
        this.car.setHeadlights(false);
        this.ctx.audio.engine(false);
        this.ctx.camera.configure([], { x: 0, y: 5.2, z: -7.5 });
      }

      // exits
      if (this.exitCooldown <= 0) {
        for (const e of EXITS) {
          if (Math.abs(this.car.state.z - e.z) < 4 && this.car.state.x > ROAD_HALF - 2.2) {
            if (this.isUnlocked(e.id)) {
              this.exitCooldown = 99;
              this.ctx.audio.engine(false);
              void this.ctx.audio.play('insertcoin', 0.6);
              this.ctx.go('play', { id: e.id });
              return;
            } else {
              this.ctx.hud.toast('EXIT LOCKED. FINISH THE PREVIOUS CHAPTER.', 2.2);
              void this.ctx.audio.play('wrong', 0.4);
            }
            this.exitCooldown = 3;
          }
        }
      }

      // clamp to highway
      this.car.state.z = THREE.MathUtils.clamp(this.car.state.z, -85, 245);

      this.ctx.camera.update(
        dt,
        this.car.rig.group.position,
        new THREE.Vector3(0, 0, this.car.state.speed * 0.4),
        intents.camNudge
      );
    }

    if (intents.pause) this.ctx.togglePause();
  }

  dispose(): void {
    this.ctx.audio.engine(false);
  }
}

function mulberry(seed: number): () => number {
  let a = seed;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
