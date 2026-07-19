// Chapter 5 runtime: live beam tracing off the mirror rotors, darkness that
// lifts as the beam grows, constellation payoff when the telescope lights.

import * as THREE from 'three';
import { PlayScene } from './play';
import type { GameContext } from '../main';
import { ch5, ch5Mirrors, CH5_SOLUTION, CH5_STAR, CH5_TELESCOPE } from '../levels/ch5';
import { traceBeam, BeamRenderer } from '../beams';
import { Cutscene } from '../cutscene';
import { PAL } from '../art/palette';
import { emissiveMat } from '../art/toon';

export class DockScene extends PlayScene {
  private beam = new BeamRenderer(1.1);
  private solved = false;
  private constellation: THREE.Group | null = null;
  private goalBlocker: import('../world').Collider;

  constructor(ctx: GameContext, mods: string[] = []) {
    super(ctx, ch5(), mods);
    this.scene.add(this.beam.group);
    // invisible wall before the telescope stand until solved
    this.goalBlocker = this.world.addCollider({
      kind: 'box',
      center: new THREE.Vector3(10.2, 1, 14),
      half: new THREE.Vector3(0.4, 2, 2.6),
      yaw: 0,
      enabled: true,
    });
  }

  protected override onUpdate(dt: number): void {
    void dt;
    const states: Record<string, number> = {};
    for (const r of this.rotors) states[r.id] = r.state;
    const path = traceBeam(CH5_STAR, 'pz', ch5Mirrors(states), CH5_TELESCOPE);
    this.beam.render(path);

    if (path.hitTarget && !this.solved) {
      this.solved = true;
      this.goalBlocker.enabled = false;
      const correct = Object.keys(CH5_SOLUTION).every((id) => states[id] === CH5_SOLUTION[id]);
      this.playIgnition(path, correct);
    }
  }

  /** the payoff: crane from the telescope up the beam into the igniting sky */
  private playIgnition(path: import('../beams').BeamPath, canonical: boolean): void {
    void this.ctx.audio.play('sparkle', 0.8);
    const scope = new THREE.Vector3(CH5_TELESCOPE.x, 1.4, CH5_TELESCOPE.z);
    const skyLook = new THREE.Vector3(0, 20, 40);
    this.igniteConstellation();
    if (this.constellation) {
      // stars ignite sequentially during the crane
      this.constellation.children.forEach((star, i) => {
        star.visible = false;
        setTimeout(() => {
          star.visible = true;
          if (i % 5 === 0) void this.ctx.audio.play('ding', 0.3, 1 + i * 0.02);
        }, 1400 + i * 90);
      });
    }
    // beam relay pings along the path
    path.points.forEach((pt, i) => {
      setTimeout(() => {
        this.fx.burst(new THREE.Vector3(pt.x, 1.2, pt.z), 30, { colors: [0xfff6d8, 0x9db8ff], speed: 2.4, up: 2, life: 0.8 });
        void this.ctx.audio.play('pop', 0.4, 1 + i * 0.08);
      }, 250 * i);
    });
    this.cutscene = new Cutscene([
      { t: 0, cam: { pos: scope.clone().add(new THREE.Vector3(-3, 1.2, -4)), look: scope, fov: 46 } },
      { t: 0.8, cam: { pos: new THREE.Vector3(0, 6, -4), look: skyLook, fov: 60 }, glide: 2.4 },
      {
        t: 3.4,
        do: (): void => {
          this.ctx.hud.toast(canonical ? 'THE SKY REMEMBERS.' : 'AN UNCONVENTIONAL ROUTING. RESPECT.', 3);
          void this.ctx.audio.play('win', 0.6);
        },
      },
    ], 5.6, this.ctx.camera, this.ctx.cinema, () => {
      this.cutscene = null;
      this.ctx.camera.snapTo(this.player.pos);
    });
  }

  private igniteConstellation(): void {
    if (this.constellation) return;
    this.constellation = new THREE.Group();
    // a big heart of stars over the water
    const heart = (t: number): [number, number] => {
      const x = 16 * Math.sin(t) ** 3;
      const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
      return [x, y];
    };
    for (let i = 0; i < 26; i++) {
      const [hx, hy] = heart((i / 26) * Math.PI * 2);
      const star = new THREE.Mesh(new THREE.SphereGeometry(0.28, 8, 6), emissiveMat(PAL.star, 3));
      star.position.set(hx * 0.9, 18 + hy * 0.9, 40);
      this.constellation.add(star);
    }
    const glow = new THREE.PointLight(PAL.heartNeon, 300, 80, 1.4);
    glow.position.set(0, 18, 38);
    this.constellation.add(glow);
    this.scene.add(this.constellation);
  }
}
