// CHAPTER 7 — SUNRISE POINT. The scripted ending: assemble the letter on
// the easel, then the sunrise drive. Lowercase means it's really him.

import * as THREE from 'three';
import type { GameContext, Scene } from '../main';
import type { LevelDef } from '../types';
import { World } from '../world';
import { Player } from '../player';
import { Car } from '../car';
import { Sky } from '../art/sky';
import { PAL } from '../art/palette';
import { mat, emissiveMat } from '../art/toon';
import { makeSign, makeDuck, makeHeartPiece } from '../art/kit';
import { Fx } from '../fx';
import { Cutscene } from '../cutscene';

const LETTER_LINES = [
  'ok. ducks handled. letter recovered.',
  'lainie —',
  'from the gym to the dock to whatever this game is,',
  'you are my favorite person,',
  'and i love you more than the ducks.',
  '(the ducks demanded a recount.)',
  '— corbin',
];

function overlookDef(): LevelDef {
  return {
    id: 'ch7',
    name: 'SUNRISE POINT',
    tagline: 'one more stop.',
    skyGlow: 0xff9a52,
    fogDensity: 0.012,
    prims: [
      // the overlook: a road ending at a cliff-edge viewpoint
      { kind: 'box', pos: { x: 0, y: -0.25, z: 0 }, size: { x: 14, y: 0.5, z: 60 }, color: PAL.asphalt },
      { kind: 'box', pos: { x: 0, y: -0.25, z: 34 }, size: { x: 26, y: 0.5, z: 14 }, color: PAL.concrete },
      // low stone wall at the edge
      { kind: 'box', pos: { x: 0, y: 0.4, z: 40.6 }, size: { x: 26, y: 0.8, z: 0.8 }, color: 0x3a4468 },
      { kind: 'box', pos: { x: -12.6, y: 0.4, z: 34 }, size: { x: 0.8, y: 0.8, z: 14 }, color: 0x3a4468 },
      { kind: 'box', pos: { x: 12.6, y: 0.4, z: 34 }, size: { x: 0.8, y: 0.8, z: 14 }, color: 0x3a4468 },
    ],
    entities: [{ type: 'spawn', pos: { x: -2, y: 0, z: 6 }, yaw: 0 }],
    cameraZones: [],
    cameraOffset: { x: 0, y: 5.6, z: -8 },
    parSeconds: 0,
    bounds: { min: { x: -30, y: -8, z: -30 }, max: { x: 30, y: 40, z: 60 } },
    logic: [],
  };
}

/** tiny procedural Lainie: blonde ponytail, glasses, determined brows */
function makeLainie(): THREE.Group {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.62, 0.3), mat(PAL.heartNeon, { flatShading: false }));
  body.position.y = 0.85;
  g.add(body);
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.34, 0.32), mat(0xf0c8a8, { flatShading: false }));
  head.position.y = 1.35;
  g.add(head);
  const hair = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.16, 0.36), mat(0xf5d76e, { flatShading: false }));
  hair.position.y = 1.53;
  g.add(hair);
  const pony = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.4, 0.12), mat(0xf5d76e, { flatShading: false }));
  pony.position.set(0, 1.38, -0.24);
  pony.rotation.x = 0.3;
  g.add(pony);
  for (const s of [-1, 1]) {
    const lens = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.012, 6, 10), mat(0x2a3352, { gloss: 0.6, flatShading: false }));
    lens.position.set(0.08 * s, 1.37, 0.17);
    g.add(lens);
  }
  return g;
}

export class FinaleScene implements Scene {
  readonly scene = new THREE.Scene();
  private world: World;
  private player: Player;
  private car: Car;
  private sky: Sky;
  private fx: Fx;
  private cutscene: Cutscene | null = null;
  private easel: THREE.Group;
  private easelPos = new THREE.Vector3(0, 0, 36);
  private assembled = false;
  private sunrise = 0;
  private sunriseTarget = 0;
  private lainie: THREE.Group;

  constructor(private ctx: GameContext) {
    const def = overlookDef();
    this.world = new World(def);
    this.scene.add(this.world.group);
    this.scene.fog = new THREE.FogExp2(PAL.midnight, def.fogDensity);

    this.sky = new Sky();
    this.sky.set({ top: PAL.midnight, horizon: PAL.horizonGlow, glow: def.skyGlow });
    this.scene.add(this.sky.group);
    this.scene.add(new THREE.HemisphereLight(0x9aa8dd, 0x2a2038, 1.7));
    const sun = new THREE.DirectionalLight(0xffc9a0, 1.8);
    sun.position.set(0, 20, 60);
    this.scene.add(sun);
    // pre-dawn lamps along the overlook wall
    for (const x of [-8, 0, 8]) {
      const lamp = new THREE.PointLight(PAL.ramenGold, 30, 14, 1.6);
      lamp.position.set(x, 2.4, 39);
      this.scene.add(lamp);
    }

    this.car = new Car();
    this.car.place(3, 24, 0);
    this.scene.add(this.car.rig.group);

    this.lainie = makeLainie();
    this.lainie.position.set(6, 0, 30);
    this.scene.add(this.lainie);

    this.player = new Player();
    this.player.applyCosmetics(ctx.save.data.gear.owned, !!ctx.save.data.secrets.halo);
    this.player.spawnAt(-2, 0, 6, 0);
    this.scene.add(this.player.rig.group);

    // the easel with seven slots
    this.easel = new THREE.Group();
    const legL = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2, 6), mat(0x4a3b28));
    legL.position.set(-0.5, 1, 0.2);
    legL.rotation.z = 0.2;
    const legR = legL.clone();
    legR.position.x = 0.5;
    legR.rotation.z = -0.2;
    const board = new THREE.Mesh(new THREE.BoxGeometry(1.7, 1.3, 0.08), mat(0xf5f2e8, { rim: 0.1 }));
    board.position.set(0, 1.5, 0);
    this.easel.add(legL, legR, board);
    this.easel.position.copy(this.easelPos);
    this.easel.rotation.y = Math.PI;
    this.scene.add(this.easel);

    const sign = makeSign(['SUNRISE POINT', 'almost there.'], { fg: '#FF9A52' });
    sign.position.set(5, 0, 8);
    sign.rotation.y = Math.PI;
    this.scene.add(sign);

    this.fx = new Fx(this.scene);
    ctx.camera.configure(def.cameraZones, def.cameraOffset);
    ctx.camera.snapTo(this.player.pos);
    ctx.hud.chapterCard('SUNRISE POINT', 'one more stop.');
    void ctx.audio.play('levelstart', 0.5);
    if (new URLSearchParams(location.search).has('debug')) {
      (window as unknown as Record<string, unknown>).__fin = (): Record<string, unknown> => ({
        pos: { x: this.player.pos.x, y: this.player.pos.y, z: this.player.pos.z },
        assembled: this.assembled,
        cutscene: !!this.cutscene,
        cutsceneDone: this.cutscene?.done ?? null,
        letterShown: this.letterShown,
      });
    }
  }

  update(dt: number): void {
    this.fx.update(dt);
    this.sky.update(dt);
    // sunrise easing
    if (this.sunrise !== this.sunriseTarget) {
      this.sunrise = THREE.MathUtils.damp(this.sunrise, this.sunriseTarget, 0.35, dt);
      this.sky.setSunrise(this.sunrise);
      this.ctx.cinema.setWarm(this.sunrise * 0.85);
      (this.scene.fog as THREE.FogExp2).color.lerpColors(
        new THREE.Color(PAL.midnight), new THREE.Color(0x8a4a3a), this.sunrise
      );
    }
    if (this.cutscene && !this.cutscene.done) {
      this.cutscene.update(dt);
      return;
    }
    if (this.assembled) return;

    const intents = this.ctx.input.poll();
    this.ctx.camera.control(dt, intents.rotate, intents.zoom);
    this.player.update(dt, intents, this.world, this.ctx.camera.yaw);
    if (this.player.events.jumped) void this.ctx.audio.play('jump', 0.3);

    const nearEasel = this.player.pos.z > 30 && this.player.pos.distanceTo(this.easelPos) < 9;
    const pieces = this.ctx.save.data.pieces.length;
    this.ctx.hud.prompt(nearEasel ? `[ENTER] ASSEMBLE THE LETTER (${pieces}/7 PIECES)` : null);
    if (nearEasel && intents.interact) {
      if (pieces < 6) {
        this.ctx.hud.toast(`SOME PIECES ARE STILL HIDING. (${pieces}/7 — check the chapters)`, 3.2);
        void this.ctx.audio.play('wrong', 0.5);
      } else {
        this.assembled = true;
        this.playFinale(pieces);
      }
    }

    this.ctx.camera.update(dt, this.player.pos, new THREE.Vector3(this.player.state.vx, 0, this.player.state.vz), intents.camNudge);
    if (intents.pause) this.ctx.togglePause();
  }

  private playFinale(pieces: number): void {
    this.ctx.hud.prompt(null);
    const e = this.easelPos.clone();
    const V = (x: number, y: number, z: number): THREE.Vector3 => new THREE.Vector3(x, y, z);

    // pieces fly in and snap to the board one by one
    const flyPieces = (): void => {
      for (let i = 0; i < 7; i++) {
        const piece = makeHeartPiece();
        const has = i < pieces;
        piece.scale.setScalar(0.55);
        piece.position.set((Math.random() - 0.5) * 30, 8 + i * 2, e.z - 20 - i * 4);
        this.scene.add(piece);
        const target = V(e.x - 0.5 + (i % 3) * 0.5, 1.25 + Math.floor(i / 3) * 0.42, e.z - 0.08);
        const from = piece.position.clone();
        const t0 = performance.now() + i * 420;
        const fly = (): void => {
          const k = (performance.now() - t0) / 700;
          if (k < 0) { requestAnimationFrame(fly); return; }
          if (k >= 1) {
            piece.position.copy(target);
            piece.rotation.set(Math.PI / 2, 0, 0);
            if (!has) piece.visible = false;
            this.fx.burst(target, 12, { colors: [PAL.heartNeon], speed: 1.4, up: 1, life: 0.6 });
            void this.ctx.audio.play('pop', 0.4, 1 + i * 0.06);
            return;
          }
          piece.position.lerpVectors(from, target, k * k);
          piece.rotation.x += 0.1;
          requestAnimationFrame(fly);
        };
        fly();
      }
    };

    // duck V-formation flypast
    const flypast = (): void => {
      for (let i = 0; i < 30; i++) {
        const d = makeDuck();
        const row = Math.floor(i / 2);
        const side = i % 2 === 0 ? 1 : -1;
        d.group.position.set(side * row * 1.4, 10 + row * 0.3, e.z - 60);
        this.scene.add(d.group);
        const t0 = performance.now();
        const fly = (): void => {
          const t = (performance.now() - t0) / 1000;
          if (t > 7) { d.group.removeFromParent(); return; }
          d.group.position.z += 0.35;
          d.wingL.rotation.z = 0.6 + Math.sin(t * 14 + i) * 0.5;
          d.wingR.rotation.z = -0.6 - Math.sin(t * 14 + i) * 0.5;
          requestAnimationFrame(fly);
        };
        fly();
      }
      void this.ctx.audio.play('quack', 0.6, 1.1);
    };

    this.ctx.audio.musicVolume(0.45);
    this.cutscene = new Cutscene([
      // macro on the easel as pieces snap in
      { t: 0, cam: { pos: V(e.x - 1.6, 1.6, e.z - 2.4), look: V(e.x, 1.5, e.z), fov: 42 }, do: flyPieces },
      // Bentley + Lainie walk to the car (teleport them seated, cheat with the cut)
      {
        t: 4.6,
        cam: { pos: V(3, 1.4, 16), look: V(3, 0.8, 24), fov: 46 },
        glide: 0.01,
        do: (): void => {
          this.player.rig.group.position.set(3.4, 0.75, 23.4); // back seat ears out
          this.player.rig.group.rotation.y = 0;
          this.lainie.position.set(2.4, 0.5, 23.6);
          this.lainie.rotation.y = 0;
          this.car.setHeadlights(true);
          this.ctx.audio.engine(true, 0.3);
        },
      },
      // the sunrise drive: car rolls toward the edge as the sky warms
      {
        t: 6.2,
        cam: { pos: V(-4, 2.2, 30), look: V(3, 1, 38), fov: 50 },
        glide: 2.2,
        do: (): void => {
          this.sunriseTarget = 1;
          const t0 = performance.now();
          const roll = (): void => {
            const t = (performance.now() - t0) / 1000;
            if (t > 5) { this.ctx.audio.engine(false); return; }
            const z = 24 + Math.min(10, t * 2.6);
            this.car.rig.group.position.z = z;
            this.player.rig.group.position.z = z - 0.6;
            this.lainie.position.z = z - 0.4;
            for (const w of this.car.rig.wheels) w.rotation.x += 0.08;
            requestAnimationFrame(roll);
          };
          roll();
        },
      },
      // push past them into the sun
      { t: 10.5, cam: { pos: V(0, 1.6, 30), look: V(0, 6, 80), fov: 58 }, glide: 3.4 },
      {
        t: 12.5,
        do: (): void => {
          void this.ctx.audio.play('fanfare', 0.7);
          this.fx.burst(V(0, 6, 40), 500, { colors: [PAL.heartNeon, PAL.ramenGold, 0xffffff], speed: 8, up: 6, gravity: 2.4, life: 2.6 });
          flypast();
        },
      },
      { t: 14.5, do: (): void => this.showLetter() },
    ], 60, this.ctx.camera, this.ctx.cinema, () => {
      // skipping the drive still lands on the letter — the point is the point
      this.showLetter();
    });
  }

  private letterShown = false;

  /** the lowercase letter + the real photo + the buttons */
  private showLetter(): void {
    if (this.letterShown) return;
    this.letterShown = true;
    this.ctx.save.patch((d) => {
      if (!d.chaptersDone.includes('ch7')) d.chaptersDone.push('ch7');
      d.secrets.finaleSeen = true;
      d.pearls += 200;
    });
    const o = this.ctx.hud.overlay();
    o.style.background = 'rgba(6,9,24,0.35)';
    const photo = new URL('../../assets/photos/couple_beach.jpeg', document.baseURI).href;
    o.innerHTML = `
      <div style="max-width:min(560px,92vw);text-align:center;display:flex;flex-direction:column;align-items:center;gap:14px">
        <div data-r="letter" style="font-family:'Nunito';font-size:17px;line-height:1.9;text-align:left;min-height:240px;text-transform:lowercase"></div>
        <img src="${photo}" alt="us" style="width:min(300px,70vw);border:10px solid #f5f2e8;border-radius:4px;transform:rotate(-2deg);opacity:0;transition:opacity 2.4s" data-r="photo" />
        <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;opacity:0;transition:opacity 1s" data-r="btns">
          <button class="dj-btn" data-a="hub">BACK TO THE HIGHWAY</button>
          <button class="dj-btn" data-a="site">BACK TO LAINIE.EXE 💌</button>
        </div>
      </div>`;
    const letterEl = o.querySelector('[data-r="letter"]') as HTMLElement;
    let line = 0;
    let ch = 0;
    const type = (): void => {
      if (line >= LETTER_LINES.length) {
        (o.querySelector('[data-r="photo"]') as HTMLElement).style.opacity = '1';
        setTimeout(() => {
          (o.querySelector('[data-r="btns"]') as HTMLElement).style.opacity = '1';
        }, 1600);
        return;
      }
      const text = LETTER_LINES[line];
      ch++;
      if (ch % 2 === 0) void this.ctx.audio.play('type', 0.12, 1 + Math.random() * 0.2);
      letterEl.innerHTML = LETTER_LINES.slice(0, line).map((l) => `<div>${l}</div>`).join('') + `<div>${text.slice(0, ch)}<span style="opacity:0.5">▌</span></div>`;
      if (ch >= text.length) {
        line++;
        ch = 0;
        setTimeout(type, 460);
      } else {
        setTimeout(type, 34);
      }
    };
    type();
    o.querySelector('[data-a="hub"]')!.addEventListener('click', () => {
      o.remove();
      this.ctx.cinema.setWarm(0);
      this.ctx.go('hub');
    });
    o.querySelector('[data-a="site"]')!.addEventListener('click', () => {
      location.href = new URL('../../index.html', document.baseURI).href;
    });
  }

  dispose(): void {
    this.ctx.audio.engine(false);
    this.ctx.audio.musicVolume(this.ctx.save.data.settings.musicVolume);
    this.ctx.cinema.setWarm(0);
    this.ctx.hud.prompt(null);
  }
}

// re-export for the registry: emissiveMat kept referenced (tree-shaken otherwise)
void emissiveMat;
