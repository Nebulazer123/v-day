// Chapter 4 runtime: the tide. Extends the generic chapter with a water
// plane driven by the tide valve; driftwood blocks float on it; the tidal
// flat drowns at mid/high tide; the rescue beat gives the Duck Whistle.

import * as THREE from 'three';
import { PlayScene } from './play';
import type { GameContext } from '../main';
import { ch4, CH4_WATER } from '../levels/ch4';
import { PAL } from '../art/palette';

const TIDE_LEVELS = [CH4_WATER.low, CH4_WATER.mid, CH4_WATER.high];

export class BeachScene extends PlayScene {
  private water: THREE.Mesh;
  private waterY = CH4_WATER.low;
  private announced = -1;

  constructor(ctx: GameContext) {
    super(ctx, ch4());
    this.water = new THREE.Mesh(
      new THREE.PlaneGeometry(60, 40),
      new THREE.MeshLambertMaterial({
        color: PAL.dockWater,
        transparent: true,
        opacity: 0.78,
        emissive: 0x1a3a6e,
        emissiveIntensity: 0.5,
      })
    );
    this.water.rotation.x = -Math.PI / 2;
    this.water.position.set(0, this.waterY, 2);
    this.scene.add(this.water);

    this.onZone = (id) => {
      if (id === 'rescue') {
        this.ctx.hud.toast('THE DUCK IS FINE. THE DUCK IS GRATEFUL.', 2.6);
        void this.ctx.audio.play('quack', 0.8, 1.2);
      }
    };
  }

  protected override onUpdate(dt: number): void {
    const valve = this.valves.find((v) => v.id === 'tide');
    if (!valve) return;
    const target = TIDE_LEVELS[valve.state];
    if (valve.state !== this.announced) {
      this.announced = valve.state;
      this.ctx.hud.toast(['TIDE: LOW', 'TIDE: MID', 'TIDE: HIGH'][valve.state], 1.6);
    }
    this.waterY = THREE.MathUtils.damp(this.waterY, target, 1.2, dt);
    this.water.position.y = this.waterY;
    // gentle swell
    this.water.position.y += Math.sin(this.runTime * 1.4) * 0.05;

    // driftwood floats: uncarried blocks ride the surface when it's above ground
    for (const c of this.im.carriables) {
      if (c.kind !== 'block' || c.carried) continue;
      const surface = this.water.position.y;
      if (surface > c.pos.y) c.pos.y = surface;
    }

    // Bentley can't swim (tragic): submerged on the flat = splash + respawn
    if (this.player.pos.y < this.water.position.y - 0.35) {
      void this.ctx.audio.play('splash', 0.6);
      this.hurt('water');
      this.respawn();
    }
  }
}
