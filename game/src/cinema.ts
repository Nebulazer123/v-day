// Cinema mode: post-processing chain (bloom + vignette/grain), letterbox
// bars, white-flash, slow-motion, and authored camera overrides. On ULTRA
// the composer runs during gameplay too; cinema mode turns everything up.

import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null },
    uVignette: { value: 0.55 },
    uGrain: { value: 0.035 },
    uTime: { value: 0 },
    uFlash: { value: 0 },
    uWarm: { value: 0 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uVignette;
    uniform float uGrain;
    uniform float uTime;
    uniform float uFlash;
    uniform float uWarm;
    varying vec2 vUv;
    float rand(vec2 co) { return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      // warm grade lerp (sunrise scenes)
      c.rgb = mix(c.rgb, c.rgb * vec3(1.12, 0.98, 0.85) + vec3(0.03, 0.012, 0.0), uWarm);
      // vignette
      float d = distance(vUv, vec2(0.5));
      c.rgb *= 1.0 - uVignette * smoothstep(0.42, 0.86, d);
      // grain
      c.rgb += (rand(vUv * uTime) - 0.5) * uGrain;
      // flash
      c.rgb = mix(c.rgb, vec3(1.0), uFlash);
      gl_FragColor = c;
    }
  `,
};

export class Cinema {
  private composer: EffectComposer;
  private renderPass: RenderPass;
  private bloom: UnrealBloomPass;
  private grade: ShaderPass;
  private barsTop: HTMLDivElement;
  private barsBottom: HTMLDivElement;
  active = false;
  timeScale = 1;
  private flash = 0;
  private t = 0;
  private enabled: boolean;

  constructor(private renderer: THREE.WebGLRenderer, tier: 'ultra' | 'mobile', parent: HTMLElement) {
    this.enabled = tier === 'ultra';
    this.composer = new EffectComposer(renderer);
    this.renderPass = new RenderPass(new THREE.Scene(), new THREE.PerspectiveCamera());
    this.composer.addPass(this.renderPass);
    this.bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.45, 0.55, 0.82);
    this.composer.addPass(this.bloom);
    this.grade = new ShaderPass(GradeShader);
    this.composer.addPass(this.grade);

    const mkBar = (top: boolean): HTMLDivElement => {
      const b = document.createElement('div');
      b.style.cssText = `position:fixed;left:0;right:0;${top ? 'top' : 'bottom'}:0;height:0;background:#000;z-index:40;transition:height 0.6s cubic-bezier(0.4,0,0.2,1);pointer-events:none;`;
      parent.appendChild(b);
      return b;
    };
    this.barsTop = mkBar(true);
    this.barsBottom = mkBar(false);
  }

  resize(): void {
    this.composer.setSize(innerWidth, innerHeight);
  }

  /** enter/exit cinema mode (letterbox + heavier bloom) */
  setCinematic(on: boolean): void {
    this.active = on;
    const h = on ? Math.max(0, (innerHeight - innerWidth / 2.39) / 2) : 0;
    this.barsTop.style.height = `${Math.min(h, innerHeight * 0.16)}px`;
    this.barsBottom.style.height = this.barsTop.style.height;
    this.bloom.strength = on ? 0.85 : 0.45;
    if (!on) {
      this.timeScale = 1;
      this.grade.uniforms.uWarm.value = 0;
    }
  }

  flashWhite(amount = 1): void {
    this.flash = amount;
  }

  setWarm(v: number): void {
    this.grade.uniforms.uWarm.value = v;
  }

  /** toggle the neon glow (bloom) post-processing pass */
  setBloom(on: boolean): void {
    this.bloom.enabled = on;
  }

  render(scene: THREE.Scene, camera: THREE.Camera, dt: number): void {
    this.t += dt;
    this.flash = Math.max(0, this.flash - dt * 1.6);
    if (!this.enabled && !this.active) {
      // mobile gameplay path: raw render
      this.renderer.render(scene, camera);
      return;
    }
    this.renderPass.scene = scene;
    this.renderPass.camera = camera;
    this.grade.uniforms.uTime.value = this.t;
    this.grade.uniforms.uFlash.value = this.flash;
    this.grade.uniforms.uVignette.value = this.active ? 0.7 : 0.5;
    this.grade.uniforms.uGrain.value = this.active ? 0.05 : 0.03;
    this.composer.render();
  }
}
