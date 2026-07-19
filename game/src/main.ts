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
    renderer.toneMappingExposure = save.data.settings.brightness;
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
    cinema.setBloom(save.data.settings.bloom);
    const input = new Input(canvas);
    const audio = new AudioBus(save.data.muted, (m) => save.patch((d) => { d.muted = m; }));
    audio.musicVolume(save.data.settings.musicVolume);
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
        scene: () => this.current,
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
      const s = this.ctx.save.data.settings;
      const row = 'display:flex;flex-direction:column;gap:6px';
      const head = 'display:flex;justify-content:space-between;font-family:\'Space Grotesk\',sans-serif;font-weight:700;font-size:13px;letter-spacing:1px';
      const slider = 'accent-color:#FF4D8D;width:100%;height:22px;cursor:pointer';
      o.innerHTML = `
        <h1>PAUSED</h1>
        <div class="dj-card" style="display:flex;flex-direction:column;gap:16px;min-width:min(340px,86vw);padding:20px 24px">
          <div style="font-family:'Space Grotesk';letter-spacing:2px;color:#CBB7E8;font-size:12px">SETTINGS</div>
          <label style="${row}">
            <span style="${head}"><span>☀ BRIGHTNESS</span><span data-r="bval">${Math.round(s.brightness * 100)}%</span></span>
            <input type="range" data-a="brightness" min="0.7" max="2.4" step="0.05" value="${s.brightness}" style="${slider}" />
          </label>
          <label style="${row}">
            <span style="${head}"><span>♪ MUSIC</span><span data-r="mval">${Math.round(s.musicVolume * 100)}%</span></span>
            <input type="range" data-a="music" min="0" max="1" step="0.05" value="${s.musicVolume}" style="${slider}" />
          </label>
          <button class="dj-btn" data-a="bloom">GLOW (BLOOM): ${s.bloom ? 'ON' : 'OFF'}</button>
          <button class="dj-btn" data-a="tier">GRAPHICS: ${this.ctx.tier.toUpperCase()} — TAP TO SWITCH</button>
          <button class="dj-btn" data-a="mute">MUSIC: ${this.ctx.audio.muted ? 'MUTED' : 'ON'}</button>
          <div style="font-size:11px;opacity:0.6;text-align:center">graphics change reloads · everything else is live</div>
        </div>
        <button class="dj-btn" data-a="resume" style="font-size:15px;padding:12px 28px">RESUME</button>
      `;
      const q = <T extends HTMLElement>(sel: string): T => o.querySelector(sel) as T;

      const bright = q<HTMLInputElement>('[data-a="brightness"]');
      bright.addEventListener('input', () => {
        const v = Number(bright.value);
        this.ctx.renderer.toneMappingExposure = v;
        q('[data-r="bval"]').textContent = `${Math.round(v * 100)}%`;
        this.ctx.save.patch((d) => { d.settings.brightness = v; });
      });

      const music = q<HTMLInputElement>('[data-a="music"]');
      music.addEventListener('input', () => {
        const v = Number(music.value);
        this.ctx.audio.musicVolume(v);
        if (this.ctx.audio.muted && v > 0) this.ctx.audio.setMuted(false);
        q('[data-r="mval"]').textContent = `${Math.round(v * 100)}%`;
        this.ctx.save.patch((d) => { d.settings.musicVolume = v; });
      });

      q<HTMLButtonElement>('[data-a="bloom"]').addEventListener('click', (e) => {
        const next = !this.ctx.save.data.settings.bloom;
        this.ctx.cinema.setBloom(next);
        this.ctx.save.patch((d) => { d.settings.bloom = next; });
        (e.currentTarget as HTMLElement).textContent = `GLOW (BLOOM): ${next ? 'ON' : 'OFF'}`;
      });

      q<HTMLButtonElement>('[data-a="tier"]').addEventListener('click', () => {
        const next = this.ctx.tier === 'ultra' ? 'mobile' : 'ultra';
        this.ctx.save.patch((d) => { d.tier = next; });
        location.reload();
      });

      q<HTMLButtonElement>('[data-a="mute"]').addEventListener('click', (e) => {
        this.ctx.audio.setMuted(!this.ctx.audio.muted);
        (e.currentTarget as HTMLElement).textContent = `MUSIC: ${this.ctx.audio.muted ? 'MUTED' : 'ON'}`;
      });

      q<HTMLButtonElement>('[data-a="resume"]').addEventListener('click', () => this.togglePause());
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
