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
import {
  DEFAULT_KEY_BINDINGS,
  formatKeyCode,
  KEY_BINDING_GROUPS,
  rebindKey,
  type KeyBindingAction,
} from './controls';
import { iconLabel } from './icons';
import { LEVEL_HINTS } from './hints';

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
  private hintProgress: Record<string, number> = {};

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
    const input = new Input(canvas, save.data.settings.keyBindings);
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
    addEventListener('keydown', (e) => {
      if (this.paused && this.ctx.input.actionForCode(e.code) === 'pause') {
        e.preventDefault();
        this.togglePause();
      }
    });

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
      // Scene changes, including debug jumps, must not leave a prior tally,
      // shop, or pause dialog sitting above the new chapter.
      document.querySelectorAll('.dj-overlay').forEach((overlay) => overlay.remove());
      this.pauseOverlay = null;
      this.paused = false;
      this.ctx.input.reset();
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
        this.hintProgress[levelId] = 0;
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
    this.ctx.input.reset();
    if (this.paused) {
      this.pauseOverlay = this.ctx.hud.overlay();
      this.pauseOverlay.addEventListener('keydown', (event) => this.trapPauseFocus(this.pauseOverlay!, event), true);
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

  private renderPause(page: 'menu' | 'settings' | 'controls' | 'levels' | 'howto' | 'hints'): void {
    const o = this.pauseOverlay;
    if (!o) return;
    o.onkeydown = null;
    delete o.dataset.capturing;
    o.style.justifyContent = page === 'menu' ? 'center' : 'flex-start';
    o.style.overflowY = 'auto';
    o.style.padding = '28px 16px';
    if (page === 'menu') this.pageMenu(o);
    else if (page === 'settings') this.pageSettings(o);
    else if (page === 'controls') this.pageControls(o);
    else if (page === 'levels') this.pageLevels(o);
    else if (page === 'hints') this.pageHints(o);
    else this.pageHowTo(o);
    const heading = o.querySelector<HTMLHeadingElement>('h1');
    if (heading) {
      heading.id = 'duck-job-dialog-title';
      o.setAttribute('aria-labelledby', heading.id);
      o.removeAttribute('aria-label');
    }
    this.focusPausePage(o);
  }

  private focusPausePage(o: HTMLDivElement): void {
    requestAnimationFrame(() => {
      if (!this.paused || this.pauseOverlay !== o) return;
      const first = o.querySelector<HTMLElement>(
        '[data-a="resume"], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      first?.focus();
    });
  }

  private trapPauseFocus(o: HTMLDivElement, event: KeyboardEvent): void {
    if (event.key !== 'Tab' || o.dataset.capturing === 'true') return;
    const focusable = [...o.querySelectorAll<HTMLElement>(
      'button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )].filter((element) => element.offsetParent !== null);
    if (!focusable.length) return;
    const index = focusable.indexOf(document.activeElement as HTMLElement);
    const next = event.shiftKey
      ? (index <= 0 ? focusable.length - 1 : index - 1)
      : (index < 0 || index >= focusable.length - 1 ? 0 : index + 1);
    event.preventDefault();
    focusable[next].focus();
  }

  private pageMenu(o: HTMLDivElement): void {
    const levelId = this.currentName.startsWith('play:') ? this.currentName.slice(5) : null;
    o.innerHTML = `
      <h1>PAUSED</h1>
      <div class="dj-menu">
        <button class="dj-btn" data-a="resume" style="font-size:15px">${iconLabel('play', 'RESUME')}</button>
        ${levelId ? `<button class="dj-btn" data-a="restart">${iconLabel('restart', 'RESTART LEVEL')}</button>` : ''}
        ${levelId && LEVEL_HINTS[levelId] ? `<button class="dj-btn" data-a="hints">${iconLabel('hint', 'GET A HINT')}</button>` : ''}
        <button class="dj-btn" data-a="levels">${iconLabel('grid', 'LEVEL SELECT')}</button>
        <button class="dj-btn" data-a="settings">${iconLabel('settings', 'SETTINGS')}</button>
        <button class="dj-btn" data-a="howto">${iconLabel('help', 'HOW TO PLAY')}</button>
        ${levelId ? `<button class="dj-btn" data-a="hub">${iconLabel('home', 'BACK TO THE HIGHWAY')}</button>` : ''}
      </div>`;
    const on = (a: string, fn: () => void): void => o.querySelector(`[data-a="${a}"]`)?.addEventListener('click', fn);
    on('resume', () => this.togglePause());
    on('restart', () => this.leaveTo('play', { id: levelId }));
    on('hints', () => {
      if (levelId) this.hintProgress[levelId] = Math.max(1, this.hintProgress[levelId] ?? 0);
      this.renderPause('hints');
    });
    on('levels', () => this.renderPause('levels'));
    on('settings', () => this.renderPause('settings'));
    on('howto', () => this.renderPause('howto'));
    on('hub', () => this.leaveTo('hub'));
  }

  private pageSettings(o: HTMLDivElement): void {
    const s = this.ctx.save.data.settings;
    const row = 'display:flex;flex-direction:column;gap:6px';
    const head = "display:flex;justify-content:space-between;align-items:center;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:13px;letter-spacing:1px";
    const slider = 'accent-color:#FF4D8D;width:100%;height:24px;cursor:pointer';
    o.innerHTML = `
      <h1 style="font-size:26px">SETTINGS</h1>
      <div class="dj-card" style="display:flex;flex-direction:column;gap:16px;min-width:min(340px,86vw);padding:20px 24px">
        <label style="${row}">
          <span style="${head}"><span style="display:flex;align-items:center;gap:8px">${iconLabel('sun', 'BRIGHTNESS')}</span><span data-r="bval">${Math.round(s.brightness * 100)}%</span></span>
          <input type="range" data-a="brightness" min="0.7" max="2.4" step="0.05" value="${s.brightness}" style="${slider}" />
        </label>
        <label style="${row}">
          <span style="${head}"><span style="display:flex;align-items:center;gap:8px">${iconLabel('music', 'MUSIC')}</span><span data-r="mval">${Math.round(s.musicVolume * 100)}%</span></span>
          <input type="range" data-a="music" min="0" max="1" step="0.05" value="${s.musicVolume}" style="${slider}" />
        </label>
        <button class="dj-btn" data-a="bloom">${iconLabel('sparkles', `GLOW (BLOOM): ${s.bloom ? 'ON' : 'OFF'}`)}</button>
        <button class="dj-btn" data-a="tier">${iconLabel('monitor', `GRAPHICS: ${this.ctx.tier.toUpperCase()} — TAP TO SWITCH`)}</button>
        <button class="dj-btn" data-a="mute">${iconLabel('volume', `MUSIC: ${this.ctx.audio.muted ? 'MUTED' : 'ON'}`)}</button>
        <button class="dj-btn" data-a="controls">${iconLabel('keyboard', 'KEYBINDS')}</button>
        <div style="font-size:11px;opacity:0.6;text-align:center">graphics change reloads · everything else is live</div>
      </div>
      <button class="dj-btn" data-a="back" style="margin-bottom:24px">${iconLabel('back', 'BACK')}</button>`;
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
      (e.currentTarget as HTMLElement).innerHTML = iconLabel('sparkles', `GLOW (BLOOM): ${next ? 'ON' : 'OFF'}`);
    });
    q<HTMLButtonElement>('[data-a="tier"]').addEventListener('click', () => {
      const next = this.ctx.tier === 'ultra' ? 'mobile' : 'ultra';
      this.ctx.save.patch((d) => { d.tier = next; });
      location.reload();
    });
    q<HTMLButtonElement>('[data-a="mute"]').addEventListener('click', (e) => {
      this.ctx.audio.setMuted(!this.ctx.audio.muted);
      (e.currentTarget as HTMLElement).innerHTML = iconLabel('volume', `MUSIC: ${this.ctx.audio.muted ? 'MUTED' : 'ON'}`);
    });
    q<HTMLButtonElement>('[data-a="controls"]').addEventListener('click', () => this.renderPause('controls'));
    q<HTMLButtonElement>('[data-a="back"]').addEventListener('click', () => this.renderPause('menu'));
  }

  private pageControls(o: HTMLDivElement): void {
    const bindings = this.ctx.input.getKeyBindings();
    const groups = KEY_BINDING_GROUPS.map((group) => `
      <section class="dj-key-group">
        <h2>${group.title}</h2>
        ${group.actions.map(({ action, label }) => `
          <label class="dj-key-row">
            <span>${label}</span>
            <button class="dj-btn" data-bind="${action}" aria-label="Change ${label.toLowerCase()}">${formatKeyCode(bindings[action])}</button>
          </label>`).join('')}
      </section>`).join('');
    o.innerHTML = `
      <h1 style="font-size:26px">KEYBINDS</h1>
      <div class="dj-card dj-key-card">
        <div data-r="bind-status" style="min-height:22px;font-size:12px;text-align:center;opacity:0.75;margin-bottom:12px" aria-live="polite">
          SELECT AN ACTION, THEN PRESS A KEY
        </div>
        ${groups}
      </div>
      <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-bottom:24px">
        <button class="dj-btn" data-a="reset">${iconLabel('restart', 'RESET DEFAULTS')}</button>
        <button class="dj-btn" data-a="back">${iconLabel('back', 'BACK TO SETTINGS')}</button>
      </div>`;

    let capturing: KeyBindingAction | null = null;
    const status = o.querySelector<HTMLElement>('[data-r="bind-status"]')!;
    const captureButtons = [...o.querySelectorAll<HTMLButtonElement>('[data-bind]')];
    for (const button of captureButtons) {
      button.addEventListener('click', () => {
        capturing = button.dataset.bind as KeyBindingAction;
        o.dataset.capturing = 'true';
        captureButtons.forEach((candidate) => {
          const active = candidate === button;
          candidate.dataset.capturing = String(active);
          if (active) candidate.textContent = 'PRESS A KEY…';
          else {
            const action = candidate.dataset.bind as KeyBindingAction;
            candidate.textContent = formatKeyCode(this.ctx.input.getKeyBindings()[action]);
          }
        });
        status.textContent = 'PRESS THE NEW KEY — CONFLICTS WILL SWAP';
      });
    }
    o.onkeydown = (e) => {
      if (!capturing) return;
      e.preventDefault();
      e.stopPropagation();
      const next = rebindKey(this.ctx.input.getKeyBindings(), capturing, e.code);
      this.ctx.input.setKeyBindings(next);
      this.ctx.save.patch((d) => { d.settings.keyBindings = { ...next }; });
      void this.ctx.audio.play('click', 0.45);
      this.renderPause('controls');
    };
    o.querySelector<HTMLButtonElement>('[data-a="reset"]')!.addEventListener('click', () => {
      const defaults = { ...DEFAULT_KEY_BINDINGS };
      this.ctx.input.setKeyBindings(defaults);
      this.ctx.save.patch((d) => { d.settings.keyBindings = defaults; });
      void this.ctx.audio.play('click', 0.45);
      this.renderPause('controls');
    });
    o.querySelector<HTMLButtonElement>('[data-a="back"]')!.addEventListener('click', () => this.renderPause('settings'));
  }

  private pageHints(o: HTMLDivElement): void {
    const levelId = this.currentName.startsWith('play:') ? this.currentName.slice(5) : '';
    const hints = LEVEL_HINTS[levelId];
    if (!hints?.length) {
      this.renderPause('menu');
      return;
    }
    const revealed = Math.min(hints.length, Math.max(1, this.hintProgress[levelId] ?? 1));
    this.hintProgress[levelId] = revealed;
    o.innerHTML = `
      <h1 style="font-size:26px">HINTS</h1>
      <div class="dj-hint-list" aria-live="polite">
        ${hints.slice(0, revealed).map((hint, i) => `
          <div class="dj-card dj-hint"><b>${i + 1}.</b>${hint}</div>`).join('')}
      </div>
      <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-bottom:24px">
        ${revealed < hints.length ? `<button class="dj-btn" data-a="next">${iconLabel('hint', 'SHOW NEXT HINT')}</button>` : ''}
        <button class="dj-btn" data-a="back">${iconLabel('back', 'BACK')}</button>
      </div>`;
    o.querySelector<HTMLButtonElement>('[data-a="next"]')?.addEventListener('click', () => {
      this.hintProgress[levelId] = Math.min(hints.length, revealed + 1);
      void this.ctx.audio.play('ding', 0.55);
      this.renderPause('hints');
    });
    o.querySelector<HTMLButtonElement>('[data-a="back"]')!.addEventListener('click', () => this.renderPause('menu'));
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
      <button class="dj-btn" data-a="back" style="margin:14px 0 24px">${iconLabel('back', 'BACK')}</button>`;
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
    const keys = this.ctx.input.getKeyBindings();
    const show = (action: KeyBindingAction): string => formatKeyCode(keys[action]);
    const rowsMove = [
      [[show('moveUp'), show('moveLeft'), show('moveDown'), show('moveRight')].join(' · '), 'move Bentley'],
      [`${show('cameraLeft')} / ${show('cameraRight')}`, 'rotate the camera 90°'],
      [`${show('cameraIn')} / ${show('cameraOut')}`, 'zoom in / out'],
      [show('jump'), 'jump · press again in air for double jump'],
      [`${show('moveUp')} / ${show('moveDown')} · ${show('moveLeft')} / ${show('moveRight')} · ${show('jump')}`, 'in the Corvette: throttle / brake · steer · handbrake'],
      [show('pounce'), 'pounce / dash-attack'],
      [show('interact'), 'interact · pick up · place'],
      [`CLICK / ${show('fire')}`, 'aim at the mouse and fire'],
      [[show('weapon1'), show('weapon2'), show('weapon3'), show('weapon4')].join(' · '), 'pick a weapon slot · scroll also cycles'],
      [show('pause'), 'this menu'],
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
      <button class="dj-btn" data-a="back" style="margin-bottom:24px">${iconLabel('back', 'BACK')}</button>`;
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
