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

const CHAPTERS: [string, string][] = [
  ['ch1', 'THE GYM'],
  ['ch2', 'LINCOLN AFTER DARK'],
  ['ch3', "HAYDEN'S TOLL BRIDGE"],
  ['ch4', 'THE BEACH'],
  ['ch5', 'THE DOCK & STARS'],
  ['ch6', 'TWILIGHT FOREST'],
  ['ch7', 'SUNRISE POINT'],
];

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
      this.pauseOverlay = this.ctx.hud.overlay();
      this.renderPause('menu');
    } else {
      this.pauseOverlay?.remove();
      this.pauseOverlay = null;
      this.lastTime = performance.now();
    }
  }

  /** leave the pause menu and change scene */
  private leaveTo(name: SceneName, params?: Record<string, unknown>): void {
    this.pauseOverlay?.remove();
    this.pauseOverlay = null;
    this.paused = false;
    this.lastTime = performance.now();
    this.go(name, params);
  }

  private renderPause(page: 'menu' | 'settings' | 'levels' | 'howto'): void {
    const o = this.pauseOverlay;
    if (!o) return;
    o.style.justifyContent = page === 'levels' || page === 'settings' ? 'flex-start' : 'center';
    o.style.overflowY = 'auto';
    o.style.padding = '28px 16px';
    if (page === 'menu') this.pageMenu(o);
    else if (page === 'settings') this.pageSettings(o);
    else if (page === 'levels') this.pageLevels(o);
    else this.pageHowTo(o);
  }

  private pageMenu(o: HTMLDivElement): void {
    const levelId = this.currentName.startsWith('play:') ? this.currentName.slice(5) : null;
    o.innerHTML = `
      <h1>PAUSED</h1>
      <div style="display:flex;flex-direction:column;gap:10px;min-width:min(300px,86vw)">
        <button class="dj-btn" data-a="resume" style="font-size:15px;padding:13px">▶ RESUME</button>
        ${levelId ? '<button class="dj-btn" data-a="restart">↻ RESTART LEVEL</button>' : ''}
        <button class="dj-btn" data-a="levels">▦ LEVEL SELECT</button>
        <button class="dj-btn" data-a="settings">⚙ SETTINGS</button>
        <button class="dj-btn" data-a="howto">? HOW TO PLAY</button>
        ${levelId ? '<button class="dj-btn" data-a="hub">◀ BACK TO THE HIGHWAY</button>' : ''}
      </div>`;
    const on = (a: string, fn: () => void): void => o.querySelector(`[data-a="${a}"]`)?.addEventListener('click', fn);
    on('resume', () => this.togglePause());
    on('restart', () => this.leaveTo('play', { id: levelId }));
    on('levels', () => this.renderPause('levels'));
    on('settings', () => this.renderPause('settings'));
    on('howto', () => this.renderPause('howto'));
    on('hub', () => this.leaveTo('hub'));
  }

  private pageSettings(o: HTMLDivElement): void {
    const s = this.ctx.save.data.settings;
    const row = 'display:flex;flex-direction:column;gap:6px';
    const head = "display:flex;justify-content:space-between;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:13px;letter-spacing:1px";
    const slider = 'accent-color:#FF4D8D;width:100%;height:24px;cursor:pointer';
    o.innerHTML = `
      <h1 style="font-size:26px">SETTINGS</h1>
      <div class="dj-card" style="display:flex;flex-direction:column;gap:16px;min-width:min(340px,86vw);padding:20px 24px">
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
      <button class="dj-btn" data-a="back" style="margin-bottom:24px">◀ BACK</button>`;
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
    q<HTMLButtonElement>('[data-a="back"]').addEventListener('click', () => this.renderPause('menu'));
  }

  private pageLevels(o: HTMLDivElement): void {
    const save = this.ctx.save.data;
    const medalColor: Record<string, string> = { C: '#8a93b8', B: '#c8cdd6', GOLD: '#FFB627', S: '#FF4D8D' };
    const cards = CHAPTERS.map(([id, name], i) => {
      const g = save.grades[id];
      const done = save.chaptersDone.includes(id);
      const reached = i === 0 || save.chaptersDone.includes(CHAPTERS[i - 1][0]);
      const badge = g ? `<span style="color:${medalColor[g.medal]};font-weight:800">${g.medal}</span>` : done ? '✓' : reached ? '' : '<span style="opacity:0.5">not reached</span>';
      return `<button class="dj-btn" data-go="${id}" style="display:flex;justify-content:space-between;gap:14px;width:100%;text-align:left">
        <span><b style="color:#8a93b8">${i + 1}.</b> ${name}</span><span>${badge}</span></button>`;
    }).join('');
    const pond = save.secrets.pondzero || save.ducks.length >= 21
      ? '<button class="dj-btn" data-go="pondzero" style="color:#FFD23F">🦆 POND ZERO</button>' : '';
    o.innerHTML = `
      <h1 style="font-size:26px">LEVEL SELECT</h1>
      <div style="display:flex;flex-direction:column;gap:8px;min-width:min(380px,90vw);max-width:440px">
        ${cards}
        <button class="dj-btn" data-go="__hub" style="color:#B388EB">◆ THE HIGHWAY (hub)</button>
        ${pond}
      </div>
      <button class="dj-btn" data-a="back" style="margin:14px 0 24px">◀ BACK</button>`;
    o.querySelectorAll('[data-go]').forEach((b) => {
      b.addEventListener('click', () => {
        const id = (b as HTMLElement).dataset.go!;
        if (id === '__hub') this.leaveTo('hub');
        else this.leaveTo('play', { id });
      });
    });
    o.querySelector('[data-a="back"]')!.addEventListener('click', () => this.renderPause('menu'));
  }

  private pageHowTo(o: HTMLDivElement): void {
    const rowsMove = [
      ['← ↑ ↓ →', 'move Bentley'],
      ['A / D', 'rotate the camera 90°'],
      ['W / S', 'zoom in / out'],
      ['SPACE', 'jump'],
      ['SHIFT', 'pounce / dash-attack'],
      ['ENTER', 'interact · pick up · place'],
      ['CLICK / F', 'fire equipped weapon'],
      ['1–4 / scroll', 'switch weapon'],
      ['ESC', 'this menu'],
    ];
    const tips = [
      'Balance puzzles: carry items onto the glowing scales — the counter turns green when a side is right.',
      'Weapons hide in SECRET ROOMS — walk into walls that look a little off.',
      'Falling or water costs a heart, then respawns you. Grandma’s Diner (reverse past the start) sells gear.',
    ];
    o.innerHTML = `
      <h1 style="font-size:26px">HOW TO PLAY</h1>
      <div class="dj-card" style="min-width:min(380px,90vw);max-width:460px;padding:18px 22px;display:flex;flex-direction:column;gap:8px">
        ${rowsMove.map(([k, v]) => `<div style="display:flex;justify-content:space-between;gap:16px;font-size:13px"><b style="font-family:'Space Grotesk';color:#FFB627;white-space:nowrap">${k}</b><span style="text-align:right;opacity:0.9">${v}</span></div>`).join('')}
        <hr style="border-color:rgba(255,255,255,0.12);margin:6px 0" />
        ${tips.map((t) => `<div style="font-size:12px;opacity:0.85;line-height:1.5">• ${t}</div>`).join('')}
      </div>
      <button class="dj-btn" data-a="back" style="margin-bottom:24px">◀ BACK</button>`;
    o.querySelector('[data-a="back"]')!.addEventListener('click', () => this.renderPause('menu'));
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
