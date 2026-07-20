// DOM glass HUD: hearts, pearls, letter pieces, chapter cards, toasts,
// pause menu, and the touch controls layer. Deliberately modern — glass
// cards, rounded corners, Space Grotesk/Nunito. No CRT anything.

import { cssHex } from './art/palette';
import { PAL } from './art/palette';
import type { Input } from './input';
import { iconSvg } from './icons';

const CSS = `
.dj-hud { position: fixed; inset: 0; pointer-events: none; z-index: 10;
  font-family: 'Nunito', system-ui, sans-serif; color: #fff; }
.dj-card { background: rgba(11,16,38,0.55); backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px; padding: 8px 14px; }
.dj-top { position: absolute; top: max(12px, env(safe-area-inset-top));
  left: 14px; display: flex; gap: 10px; align-items: center; }
.dj-hearts { font-size: 18px; letter-spacing: 2px; }
.dj-pearls { font-family: 'Space Grotesk', monospace; font-weight: 700;
  color: ${cssHex(PAL.taroPurple)}; }
.dj-pieces { font-family: 'Space Grotesk', monospace; font-weight: 700;
  color: ${cssHex(PAL.heartNeon)}; }
.dj-chapter { position: absolute; top: max(12px, env(safe-area-inset-top));
  left: 50%; transform: translateX(-50%); text-align: center;
  transition: opacity 0.6s; opacity: 0; }
.dj-chapter .t { font-family: 'Space Grotesk', sans-serif; font-weight: 700;
  font-size: 16px; letter-spacing: 3px; color: #fff; text-transform: uppercase; }
.dj-chapter .s { font-size: 12px; color: rgba(255,255,255,0.75); font-style: italic; }
.dj-toast { position: absolute; bottom: 18%; left: 50%; transform: translateX(-50%);
  font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 15px;
  letter-spacing: 1.5px; padding: 10px 20px; opacity: 0; transition: opacity 0.3s, transform 0.3s;
  white-space: normal; text-align: center; max-width: min(620px, 92vw); }
.dj-toast.show { opacity: 1; transform: translateX(-50%) translateY(-6px); }
.dj-prompt { position: absolute; bottom: 26%; left: 50%; transform: translateX(-50%);
  font-weight: 800; font-size: 14px; opacity: 0; transition: opacity 0.2s;
  color: ${cssHex(PAL.crtGreen)}; }
.dj-prompt.show { opacity: 1; }
.dj-objective { position: absolute; top: max(58px, calc(env(safe-area-inset-top) + 46px));
  left: 14px; max-width: 60vw; opacity: 0; transition: opacity 0.4s;
  font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 12.5px;
  line-height: 1.5; color: rgba(255,255,255,0.9); }
.dj-objective.show { opacity: 1; }
.dj-objective b { color: ${cssHex(PAL.ramenGold)}; }
.dj-corner { position: absolute; right: 14px; top: max(12px, env(safe-area-inset-top));
  display: flex; gap: 8px; pointer-events: auto; }
.dj-btn { background: rgba(11,16,38,0.55); backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.14); border-radius: 12px; color: #fff;
  font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 13px;
  min-height: 44px; padding: 8px 12px; cursor: pointer; touch-action: manipulation;
  display: inline-flex; align-items: center; justify-content: center; gap: 10px; }
.dj-btn:hover { background: rgba(40,50,90,0.7); }
.dj-btn:focus-visible { outline: 3px solid ${cssHex(PAL.ramenGold)}; outline-offset: 2px; }
.dj-icon { width: 18px; height: 18px; display: block; flex: 0 0 18px;
  fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.dj-icon-btn { width: 44px; height: 44px; padding: 0; }
.dj-menu { display: flex; flex-direction: column; gap: 10px; min-width: min(320px,86vw); }
.dj-key-card { min-width: min(520px,92vw); max-width: 560px; padding: 18px 20px; }
.dj-key-group { display: grid; gap: 8px; margin-bottom: 18px; }
.dj-key-group:last-child { margin-bottom: 0; }
.dj-key-group h2 { margin: 0; font-size: 12px; letter-spacing: 2px; color: ${cssHex(PAL.ramenGold)}; }
.dj-key-row { display: grid; grid-template-columns: minmax(0,1fr) minmax(118px,auto); align-items: center; gap: 12px; }
.dj-key-row > span { font-size: 12px; font-weight: 700; }
.dj-key-row .dj-btn { min-width: 118px; font-size: 12px; }
.dj-key-row .dj-btn[data-capturing="true"] { border-color: ${cssHex(PAL.heartNeon)}; color: ${cssHex(PAL.heartNeon)}; }
.dj-hint-list { width: min(540px,92vw); display: grid; gap: 10px; }
.dj-hint { line-height: 1.55; text-align: left; padding: 14px 16px; }
.dj-hint b { color: ${cssHex(PAL.ramenGold)}; margin-right: 8px; }
.dj-touch { position: absolute; inset: 0; display: none; }
.dj-touch.on { display: block; }
.dj-tbtn { position: absolute; width: 62px; height: 62px; border-radius: 50%;
  background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.3);
  color: #fff; font-weight: 800; font-size: 11px; pointer-events: auto;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Space Grotesk', sans-serif; touch-action: none; user-select: none; }
.dj-tbtn:active { background: rgba(255,77,141,0.35); }
.dj-overlay { position: absolute; inset: 0; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 16px;
  background: rgba(6,9,24,0.72); backdrop-filter: blur(8px); pointer-events: auto; touch-action: pan-y; }
.dj-overlay h1 { font-family: 'Space Grotesk', sans-serif; letter-spacing: 4px; }
.dj-fade { position: absolute; inset: 0; background: #06091a; opacity: 0;
  transition: opacity 0.4s; }
@media (max-width: 520px) {
  .dj-key-row { grid-template-columns: 1fr; gap: 6px; }
  .dj-key-row .dj-btn { width: 100%; }
}
`;

export class Hud {
  readonly root: HTMLDivElement;
  private hearts: HTMLDivElement;
  private pearls: HTMLDivElement;
  private pieces: HTMLDivElement;
  private chapter: HTMLDivElement;
  private toastEl: HTMLDivElement;
  private promptEl: HTMLDivElement;
  private objectiveEl!: HTMLDivElement;
  private fadeEl: HTMLDivElement;
  private touchLayer: HTMLDivElement;
  private toastTimer = 0;
  private chapterTimer = 0;

  constructor(parent: HTMLElement, private onMute: () => void, private onPause: () => void) {
    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    this.root = document.createElement('div');
    this.root.className = 'dj-hud';
    this.root.innerHTML = `
      <div class="dj-top">
        <div class="dj-card dj-hearts" data-r="hearts"></div>
        <div class="dj-card dj-pearls" data-r="pearls"></div>
        <div class="dj-card dj-pieces" data-r="pieces"></div>
      </div>
      <div class="dj-chapter" data-r="chapter"><div class="t"></div><div class="s"></div></div>
      <div class="dj-objective" data-r="objective"></div>
      <div class="dj-card dj-toast" data-r="toast"></div>
      <div class="dj-prompt" data-r="prompt"></div>
      <div class="dj-corner">
        <button class="dj-btn dj-icon-btn" data-r="mute" aria-label="Toggle music" title="Toggle music">${iconSvg('music')}</button>
        <button class="dj-btn dj-icon-btn" data-r="pause" aria-label="Pause game" title="Pause game">${iconSvg('pause')}</button>
      </div>
      <div class="dj-touch" data-r="touch"></div>
      <div class="dj-fade" data-r="fade"></div>
    `;
    parent.appendChild(this.root);
    const q = <T extends HTMLElement>(r: string): T => this.root.querySelector(`[data-r="${r}"]`) as T;
    this.hearts = q('hearts');
    this.pearls = q('pearls');
    this.pieces = q('pieces');
    this.chapter = q('chapter');
    this.toastEl = q('toast');
    this.promptEl = q('prompt');
    this.objectiveEl = q('objective');
    this.fadeEl = q('fade');
    this.touchLayer = q('touch');
    q<HTMLButtonElement>('mute').addEventListener('click', () => this.onMute());
    q<HTMLButtonElement>('pause').addEventListener('click', () => this.onPause());
    this.setHearts(3, 3);
    this.setPearls(0);
    this.setPieces(0);
  }

  buildTouchControls(input: Input): void {
    if (!input.isTouch) return;
    this.touchLayer.classList.add('on');
    const mk = (label: string, name: 'jump' | 'pounce' | 'interact' | 'fire', right: number, bottom: number): void => {
      const b = document.createElement('div');
      b.className = 'dj-tbtn';
      b.textContent = label;
      b.style.right = `${right}px`;
      b.style.bottom = `calc(${bottom}px + env(safe-area-inset-bottom))`;
      const release = (e: PointerEvent): void => {
        e.preventDefault();
        input.setTouchButton(name, false);
        if (b.hasPointerCapture?.(e.pointerId)) b.releasePointerCapture(e.pointerId);
      };
      b.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        b.setPointerCapture?.(e.pointerId);
        input.setTouchButton(name, true);
      });
      b.addEventListener('pointerup', release);
      b.addEventListener('pointercancel', release);
      b.addEventListener('lostpointercapture', () => input.setTouchButton(name, false));
      this.touchLayer.appendChild(b);
    };
    mk('JUMP', 'jump', 24, 96);
    mk('DASH', 'pounce', 96, 44);
    mk('USE', 'interact', 24, 170);
    mk('FIRE', 'fire', 96, 122);
    // weapon swap: tap cycles the arsenal
    const swap = document.createElement('div');
    swap.className = 'dj-tbtn';
    swap.textContent = 'SWAP';
    swap.style.right = '170px';
    swap.style.bottom = 'calc(190px + env(safe-area-inset-bottom))';
    swap.style.width = '52px';
    swap.style.height = '52px';
    swap.addEventListener('pointerdown', (e) => { e.stopPropagation(); input.requestCycle(); });
    this.touchLayer.appendChild(swap);
  }

  setHearts(cur: number, max: number): void {
    this.hearts.textContent = '❤'.repeat(cur) + '♡'.repeat(Math.max(0, max - cur));
  }
  setPearls(n: number): void {
    this.pearls.textContent = `⬤ ${n}`;
  }
  setPieces(n: number): void {
    this.pieces.textContent = `✉ ${n}/7`;
  }

  chapterCard(title: string, sub: string): void {
    (this.chapter.querySelector('.t') as HTMLElement).textContent = title;
    (this.chapter.querySelector('.s') as HTMLElement).textContent = sub;
    this.chapter.style.opacity = '1';
    this.chapterTimer = 4.4;
  }

  toast(msg: string, seconds = 2.6): void {
    this.toastEl.textContent = msg;
    this.toastEl.classList.add('show');
    this.toastTimer = seconds;
  }

  prompt(msg: string | null): void {
    if (msg) {
      this.promptEl.textContent = msg;
      this.promptEl.classList.add('show');
    } else {
      this.promptEl.classList.remove('show');
    }
  }

  /** persistent objective line, top-left under the stats. `\n` splits steps. */
  objective(text: string | null): void {
    if (text) {
      this.objectiveEl.innerHTML = text
        .split('\n')
        .map((line) => `<div>${line}</div>`)
        .join('');
      this.objectiveEl.classList.add('show');
    } else {
      this.objectiveEl.classList.remove('show');
    }
  }

  fade(on: boolean): void {
    this.fadeEl.style.opacity = on ? '1' : '0';
  }

  update(dt: number): void {
    if (this.toastTimer > 0) {
      this.toastTimer -= dt;
      if (this.toastTimer <= 0) this.toastEl.classList.remove('show');
    }
    if (this.chapterTimer > 0) {
      this.chapterTimer -= dt;
      if (this.chapterTimer <= 0) this.chapter.style.opacity = '0';
    }
  }

  /** Simple modal overlay; returns element for the caller to fill + remove. */
  overlay(): HTMLDivElement {
    const o = document.createElement('div');
    o.className = 'dj-overlay';
    o.setAttribute('role', 'dialog');
    o.setAttribute('aria-modal', 'true');
    o.setAttribute('aria-label', 'Game dialog');
    this.root.appendChild(o);
    return o;
  }
}
