// THE DUCK JOB — boot, renderer, quality tiers, fixed-timestep loop, scene
// management, pause, and the gated debug handle.

import * as THREE from 'three';
import { Input } from './input';
import { AudioBus } from './audio';
import { Save } from './save';
import { Hud } from './hud';
import { GameCamera } from './camera';
import { Cinema } from './cinema';
import { HubScene } from './scenes/hub';
import { LEVELS } from './levels/index';

export interface Scene {
  scene: THREE.Scene;
  update(dt: number): void;
  dispose(): void;
}

export interface GameContext {
  renderer: THREE.WebGLRenderer;
  camera: GameCamera;
  cinema: Cinema;
  input: Input;
  audio: AudioBus;
  save: Save;
  hud: Hud;
  tier: 'ultra' | 'mobile';
  go(scene: SceneName, params?: Record<string, unknown>): void;
  togglePause(): void;
}

export type SceneName = 'hub' | 'play' | 'finale' | 'pondzero';

const FIXED_STEP = 1 / 120;
const MAX_FRAME = 0.1;

class Game {
  private ctx: GameContext;
  private current: Scene | null = null;
  private currentName = '';
  private accumulator = 0;
  private lastTime = performance.now();
  private paused = false;
  private pauseOverlay: HTMLDivElement | null = null;

  constructor() {
    const app = document.getElementById('app')!;
    const canvas = document.createElement('canvas');
    canvas.className = 'game';
    app.appendChild(canvas);

    const save = new Save();
    const isTouch = matchMedia('(pointer: coarse)').matches;
    const tier: 'ultra' | 'mobile' = save.data.tier ?? (isTouch ? 'mobile' : 'ultra');

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    if (tier === 'ultra') {
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.setPixelRatio(Math.min(devicePixelRatio, 3));
    } else {
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    }
    renderer.setSize(innerWidth, innerHeight);

    const camera = new GameCamera(innerWidth / innerHeight);
    const cinema = new Cinema(renderer, tier, app);
    const input = new Input(canvas);
    const audio = new AudioBus(save.data.muted, (m) => save.patch((d) => { d.muted = m; }));
    const hud = new Hud(
      app,
      () => audio.setMuted(!audio.muted),
      () => this.togglePause()
    );
    hud.buildTouchControls(input);
    hud.setPearls(save.data.pearls);
    hud.setPieces(save.data.pieces.length);

    this.ctx = {
      renderer, camera, cinema, input, audio, save, hud, tier,
      go: (name, params) => this.go(name, params),
      togglePause: () => this.togglePause(),
    };

    addEventListener('resize', () => this.onResize());
    visualViewport?.addEventListener('resize', () => this.onResize());
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && !this.paused) this.togglePause();
    });
    canvas.addEventListener('webglcontextlost', (e) => e.preventDefault());

    // gated debug handle for the Playwright harness
    if (new URLSearchParams(location.search).has('debug')) {
      (window as unknown as Record<string, unknown>).__dj = {
        go: (n: SceneName, p?: Record<string, unknown>) => this.go(n, p),
        state: () => ({
          scene: this.currentName,
          paused: this.paused,
          save: this.ctx.save.data,
        }),
        ctx: this.ctx,
      };
    }

    this.go('hub');
    requestAnimationFrame((t) => this.frame(t));
  }

  private go(name: SceneName, params?: Record<string, unknown>): void {
    this.ctx.hud.fade(true);
    const build = (): void => {
      this.current?.dispose();
      // a scene change mid-cutscene must not leak cinema state
      this.ctx.cinema.setCinematic(false);
      this.ctx.cinema.timeScale = 1;
      this.ctx.cinema.setWarm(0);
      this.ctx.camera.cinematicControl = false;
      const levelId = typeof params?.id === 'string' ? params.id : null;
      if (name === 'play' && levelId && LEVELS[levelId]) {
        const mods = Array.isArray(params?.mods) ? (params!.mods as string[]) : [];
        this.current = LEVELS[levelId](this.ctx, mods);
        this.currentName = `play:${levelId}`;
      } else {
        this.current = new HubScene(this.ctx);
        this.currentName = 'hub';
      }
      this.ctx.hud.fade(false);
    };
    if (this.current) setTimeout(build, 420);
    else build();
  }

  private onResize(): void {
    this.ctx.renderer.setSize(innerWidth, innerHeight);
    this.ctx.cinema.resize();
    this.ctx.camera.cam.aspect = innerWidth / innerHeight;
    this.ctx.camera.cam.updateProjectionMatrix();
  }

  togglePause(): void {
    this.paused = !this.paused;
    if (this.paused) {
      const o = this.ctx.hud.overlay();
      o.innerHTML = `
        <h1>PAUSED</h1>
        <button class="dj-btn" data-a="resume">RESUME</button>
        <button class="dj-btn" data-a="tier">QUALITY: ${this.ctx.tier.toUpperCase()}</button>
        <button class="dj-btn" data-a="mute">${this.ctx.audio.muted ? 'UNMUTE' : 'MUTE'} MUSIC</button>
      `;
      o.querySelector('[data-a="resume"]')!.addEventListener('click', () => this.togglePause());
      o.querySelector('[data-a="tier"]')!.addEventListener('click', () => {
        const next = this.ctx.tier === 'ultra' ? 'mobile' : 'ultra';
        this.ctx.save.patch((d) => { d.tier = next; });
        location.reload();
      });
      o.querySelector('[data-a="mute"]')!.addEventListener('click', () => {
        this.ctx.audio.setMuted(!this.ctx.audio.muted);
        this.togglePause();
      });
      this.pauseOverlay = o;
    } else {
      this.pauseOverlay?.remove();
      this.pauseOverlay = null;
      this.lastTime = performance.now();
    }
  }

  private frame(now: number): void {
    requestAnimationFrame((t) => this.frame(t));
    const dt = Math.min(MAX_FRAME, (now - this.lastTime) / 1000);
    this.lastTime = now;
    if (this.paused || !this.current) return;

    this.accumulator += dt * this.ctx.cinema.timeScale;
    let steps = 0;
    while (this.accumulator >= FIXED_STEP && steps < 12) {
      this.current.update(FIXED_STEP);
      this.accumulator -= FIXED_STEP;
      steps++;
    }
    this.ctx.hud.update(dt);
    this.ctx.cinema.render(this.current.scene, this.ctx.camera.cam, dt);
  }
}

new Game();
