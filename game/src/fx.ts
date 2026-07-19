// Particle bursts: one pooled Points system per scene handles confetti,
// feathers, dust, sparkles, tire smoke, heart showers.

import * as THREE from 'three';
import { PAL } from './art/palette';

const MAX = 2600;

interface Particle {
  life: number;
  maxLife: number;
  vel: THREE.Vector3;
  gravity: number;
  drag: number;
}

export class Fx {
  readonly points: THREE.Points;
  private geo: THREE.BufferGeometry;
  private pos: Float32Array;
  private col: Float32Array;
  private parts: Particle[] = [];
  private cursor = 0;

  constructor(scene: THREE.Scene) {
    this.geo = new THREE.BufferGeometry();
    this.pos = new Float32Array(MAX * 3);
    this.col = new Float32Array(MAX * 3);
    for (let i = 0; i < MAX; i++) {
      this.pos[i * 3 + 1] = -1000;
      this.parts.push({ life: 0, maxLife: 1, vel: new THREE.Vector3(), gravity: 0, drag: 0 });
    }
    this.geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    this.geo.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    const mat = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.points = new THREE.Points(this.geo, mat);
    this.points.frustumCulled = false;
    scene.add(this.points);
  }

  burst(
    at: THREE.Vector3,
    count: number,
    opts: {
      colors?: number[];
      speed?: number;
      up?: number;
      gravity?: number;
      life?: number;
      drag?: number;
      spread?: number;
    } = {}
  ): void {
    const colors = (opts.colors ?? [PAL.heartNeon, PAL.ramenGold, PAL.star]).map((c) => new THREE.Color(c));
    for (let n = 0; n < count; n++) {
      const i = this.cursor;
      this.cursor = (this.cursor + 1) % MAX;
      const p = this.parts[i];
      p.maxLife = p.life = (opts.life ?? 1.2) * (0.6 + Math.random() * 0.8);
      p.gravity = opts.gravity ?? 6;
      p.drag = opts.drag ?? 1.2;
      const sp = (opts.speed ?? 4) * (0.4 + Math.random());
      const a = Math.random() * Math.PI * 2;
      const el = (Math.random() - 0.3) * (opts.spread ?? 1.2);
      p.vel.set(Math.cos(a) * sp * Math.cos(el), Math.sin(el) * sp + (opts.up ?? 2.5), Math.sin(a) * sp * Math.cos(el));
      this.pos[i * 3] = at.x + (Math.random() - 0.5) * 0.3;
      this.pos[i * 3 + 1] = at.y + (Math.random() - 0.5) * 0.3;
      this.pos[i * 3 + 2] = at.z + (Math.random() - 0.5) * 0.3;
      const c = colors[(Math.random() * colors.length) | 0];
      this.col[i * 3] = c.r;
      this.col[i * 3 + 1] = c.g;
      this.col[i * 3 + 2] = c.b;
    }
  }

  update(dt: number): void {
    for (let i = 0; i < MAX; i++) {
      const p = this.parts[i];
      if (p.life <= 0) continue;
      p.life -= dt;
      if (p.life <= 0) {
        this.pos[i * 3 + 1] = -1000;
        continue;
      }
      p.vel.y -= p.gravity * dt;
      p.vel.multiplyScalar(Math.max(0, 1 - p.drag * dt));
      this.pos[i * 3] += p.vel.x * dt;
      this.pos[i * 3 + 1] += p.vel.y * dt;
      this.pos[i * 3 + 2] += p.vel.z * dt;
      const fade = Math.min(1, p.life / (p.maxLife * 0.4));
      this.col[i * 3] *= 0.999;
      void fade;
    }
    (this.geo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (this.geo.attributes.color as THREE.BufferAttribute).needsUpdate = true;
  }
}
