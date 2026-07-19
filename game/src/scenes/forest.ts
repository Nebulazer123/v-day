// Chapter 6 runtime: Edward's sweeping sparkle beam, shield sockets the
// Ankh reveals, three reflections → the yeet. Dense fog, low camera.

import * as THREE from 'three';
import { PlayScene } from './play';
import type { GameContext } from '../main';
import { ch6, CH6_EDWARD, CH6_SOCKETS } from '../levels/ch6';
import { PAL } from '../art/palette';
import { mat, emissiveMat } from '../art/toon';
import { makePine } from '../art/kit';
import { Cutscene } from '../cutscene';

export class ForestScene extends PlayScene {
  private edward: THREE.Group;
  private beamArm: THREE.Mesh;
  private sweepAngle = 0;
  private reflections = 0;
  private reflectedThisPass = new Set<string>();
  private lastSector = 0;
  private sockets: { id: string; pos: THREE.Vector3; ring: THREE.Mesh; filled: boolean }[] = [];
  private yeeted = false;
  private goalBlocker: import('../world').Collider;

  constructor(ctx: GameContext, mods: string[] = []) {
    super(ctx, ch6(), mods);

    // pines everywhere (visual density; big ones get colliders via rocks already)
    const rng = ((): (() => number) => { let a = 11; return () => ((a = (a * 16807) % 2147483647) / 2147483647); })();
    for (let i = 0; i < 40; i++) {
      const p = makePine(2.5 + rng() * 3.5, 0x1d3a35);
      const x = -21 + rng() * 42;
      const z = -18 + rng() * 40;
      if (Math.hypot(x - CH6_EDWARD.x, z - CH6_EDWARD.z) < 7 || Math.abs(x) + Math.abs(z) < 6) continue;
      p.position.set(x, 0, z);
      this.scene.add(p);
    }

    // Edward: pale, glittering, smug
    this.edward = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.5, 0.4), mat(0x2a2f45, { flatShading: false }));
    body.position.y = 3.15;
    this.edward.add(body);
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.45, 0.4), mat(PAL.edwardPale, { gloss: 0.9, rim: 0.6, flatShading: false }));
    head.position.y = 4.1;
    this.edward.add(head);
    const hair = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.18, 0.44), mat(0x6b5533));
    hair.position.y = 4.38;
    this.edward.add(hair);
    this.edward.position.set(CH6_EDWARD.x, 0, CH6_EDWARD.z);
    this.scene.add(this.edward);

    // the sweep beam: a long emissive arm pivoting on Edward
    this.beamArm = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.24, 30), emissiveMat(PAL.edwardPale, 2));
    this.beamArm.position.set(CH6_EDWARD.x, 1.2, CH6_EDWARD.z);
    this.scene.add(this.beamArm);

    // shield sockets (faint rings; Ankh makes them scream)
    for (const s of CH6_SOCKETS) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.8, 0.09, 8, 18),
        new THREE.MeshBasicMaterial({ color: PAL.grandmaLilac, transparent: true, opacity: 0.16 })
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.set(s.x, 0.12, s.z);
      this.scene.add(ring);
      this.sockets.push({ id: s.id, pos: new THREE.Vector3(s.x, 0, s.z), ring, filled: false });
    }

    // block the exit ridge until the yeet
    this.goalBlocker = this.world.addCollider({
      kind: 'box',
      center: new THREE.Vector3(0, 1.5, 21.4),
      half: new THREE.Vector3(5, 2.5, 0.5),
      yaw: 0,
      enabled: true,
    });
  }

  protected override onUpdate(dt: number): void {
    if (this.yeeted) return;

    // sockets glow with the Ankh; shields snap into empty sockets
    const reveal = this.weapons.ankhActive && this.weapons.equipped === 'ankh';
    for (const s of this.sockets) {
      (s.ring.material as THREE.MeshBasicMaterial).opacity = s.filled ? 0.9 : reveal ? 0.85 : 0.16;
      if (!s.filled) {
        const shield = this.im.carriables.find(
          (c) => c.kind === 'mirrorShield' && !c.carried && c.pos.distanceTo(s.pos) < 1.2
        );
        if (shield) {
          s.filled = true;
          shield.pos.set(s.pos.x, 0, s.pos.z);
          void this.ctx.audio.play('correct', 0.6);
          this.ctx.hud.toast(`SHIELD SET. ${this.sockets.filter((k) => k.filled).length}/3`, 1.8);
        }
      }
    }

    // the sweep
    this.sweepAngle += dt * 0.85;
    const dir = new THREE.Vector3(Math.sin(this.sweepAngle), 0, Math.cos(this.sweepAngle));
    this.beamArm.position.set(CH6_EDWARD.x + dir.x * 15, 1.2, CH6_EDWARD.z + dir.z * 15);
    this.beamArm.rotation.y = Math.atan2(dir.x, dir.z);

    // new sweep pass bookkeeping (each full turn resets which shields reflected)
    const sector = Math.floor(this.sweepAngle / (Math.PI * 2));
    if (sector !== this.lastSector) {
      this.lastSector = sector;
      this.reflectedThisPass.clear();
    }

    // beam vs player: distance from the beam ray (origin Edward, direction dir)
    const toPlayer = this.player.pos.clone().sub(this.edward.position).setY(0);
    const along = toPlayer.dot(dir);
    if (along > 1 && along < 30) {
      const perp = Math.abs(toPlayer.x * dir.z - toPlayer.z * dir.x);
      // rocks give cover: skip if a rock collider sits between (cheap: player near a rock)
      const covered = this.world.groundAt(this.player.pos.x, this.player.pos.z, this.player.pos.y + 2.5) > this.player.pos.y + 0.5;
      if (perp < 0.9 && !covered && this.player.pos.y < 2.5) {
        this.hurt('sparkle');
      }
      // beam vs socketed shields
      for (const s of this.sockets) {
        if (!s.filled || this.reflectedThisPass.has(s.id)) continue;
        const toS = s.pos.clone().sub(this.edward.position).setY(0);
        const alongS = toS.dot(dir);
        const perpS = Math.abs(toS.x * dir.z - toS.z * dir.x);
        if (alongS > 1 && alongS < 30 && perpS < 1.1) {
          this.reflectedThisPass.add(s.id);
          this.reflections++;
          void this.ctx.audio.play('sparkle', 0.8, 0.8);
          this.ctx.camera.kick(0.35);
          this.ctx.hud.toast(`REFLECTED. ${this.reflections}/3`, 1.6);
          if (this.reflections >= 3) this.yeet();
        }
      }
    }
  }

  private yeet(): void {
    this.yeeted = true;
    this.goalBlocker.enabled = false;
    const start = this.edward.position.clone();
    const eLook = start.clone().setY(3.4);
    this.cutscene = new Cutscene([
      // slow push-in on Edward, slow-mo
      { t: 0, cam: { pos: start.clone().add(new THREE.Vector3(0, 2.2, -8)), look: eLook, fov: 44 }, slowmo: 0.2 },
      { t: 0.1, cam: { pos: start.clone().add(new THREE.Vector3(-2, 2.6, -5)), look: eLook, fov: 38 }, glide: 1.2 },
      {
        t: 1.3,
        flash: 1,
        slowmo: 1,
        do: (): void => {
          this.beamArm.visible = false;
          void this.ctx.audio.play('impact', 0.7);
          this.fx.burst(eLook, 220, { colors: [0xdde7f0, 0xffffff], speed: 7, up: 6, gravity: 2, life: 1.6 });
          // the launch arc, Team-Rocket style
          const t0 = performance.now();
          const launch = (): void => {
            const t = (performance.now() - t0) / 1000;
            if (t > 2.6 || !this.edward.parent) return;
            this.edward.position.set(start.x + t * 9, t * 15 - 2.4 * t * t, start.z + t * 16);
            this.edward.rotation.z += 0.14;
            requestAnimationFrame(launch);
          };
          launch();
        },
      },
      // wide shot tracking him over the treeline
      { t: 1.45, cam: { pos: start.clone().add(new THREE.Vector3(-9, 3, -10)), look: start.clone().add(new THREE.Vector3(12, 16, 20)), fov: 58 }, glide: 1.6 },
      {
        t: 2.6,
        do: (): void => {
          void this.ctx.audio.play('howl', 0.8);
          this.fx.burst(start.clone().add(new THREE.Vector3(20, 22, 34)), 40, { colors: [0xffffff], speed: 2, up: 0, gravity: 0.5, life: 1 });
          this.ctx.hud.toast('EDWARD HAS LEFT THE TREELINE.', 3);
        },
      },
    ], 4.4, this.ctx.camera, this.ctx.cinema, () => {
      this.cutscene = null;
      this.ctx.camera.snapTo(this.player.pos);
    });
  }
}
