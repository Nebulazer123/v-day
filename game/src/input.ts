// Input intents. Keyboard/mouse + gamepad + touch all reduce to the same
// intent state so gameplay code never knows which device is driving.

import {
  actionForKeyCode,
  DEFAULT_KEY_BINDINGS,
  normalizeKeyBindings,
  type KeyBindingAction,
  type KeyBindings,
} from './controls';

export interface Intents {
  /** normalized move vector, screen-relative (x right, y forward) */
  moveX: number;
  moveY: number;
  jump: boolean;        // held
  jumpPressed: boolean; // edge
  pounce: boolean;      // edge
  interact: boolean;    // edge
  fire: boolean;        // edge
  cycle: number;        // -1/0/1 weapon cycle edge
  selectWeapon: number | null; // direct 0-based slot edge
  aimNdc: { x: number; y: number } | null; // latest mouse position on canvas
  camNudge: number;     // -1..1 desired yaw nudge (touch swipe)
  rotate: number;       // -1/0/1 camera 90° rotate edge
  zoom: number;         // -1/0/1 camera zoom held
  pause: boolean;       // edge
  any: boolean;         // any input edge this frame (menus)
}

/** Pause pages own their keyboard events so buttons, sliders, and rebinding stay native. */
export function isPauseOverlayTarget(target: EventTarget | null): boolean {
  const candidate = target as { closest?: (selector: string) => unknown } | null;
  return typeof candidate?.closest === 'function' && Boolean(candidate.closest('.dj-overlay'));
}

interface KeyState {
  up: boolean; down: boolean; left: boolean; right: boolean;
  jump: boolean; pounce: boolean; interact: boolean; fire: boolean; pause: boolean;
}

export class Input {
  private keys: KeyState = {
    up: false, down: false, left: false, right: false,
    jump: false, pounce: false, interact: false, fire: false, pause: false,
  };
  private edges = new Set<string>();
  private wheelDelta = 0;
  private zoomIn = false;
  private zoomOut = false;
  private mouseDragX = 0;
  private mouseAim: { x: number; y: number } | null = null;
  private bindings: KeyBindings;
  // touch joystick
  private joyId: number | null = null;
  private joyStart = { x: 0, y: 0 };
  private joyVec = { x: 0, y: 0 };
  private touchButtons = new Map<string, boolean>();
  readonly isTouch: boolean;

  constructor(private el: HTMLElement, bindings: KeyBindings = DEFAULT_KEY_BINDINGS) {
    this.bindings = normalizeKeyBindings(bindings);
    this.isTouch = matchMedia('(pointer: coarse)').matches;
    addEventListener('keydown', (e) => {
      if (isPauseOverlayTarget(e.target)) return;
      const action = actionForKeyCode(e.code, this.bindings);
      if (!action) return;
      e.preventDefault();
      this.keyAction(action, true, e.repeat);
    });
    addEventListener('keyup', (e) => {
      if (isPauseOverlayTarget(e.target)) return;
      const action = actionForKeyCode(e.code, this.bindings);
      if (action) this.keyAction(action, false, false);
    });
    addEventListener('blur', () => this.reset());

    el.addEventListener('pointerdown', (e) => this.onDown(e));
    el.addEventListener('pointermove', (e) => this.onMove(e));
    el.addEventListener('pointerup', (e) => this.onUp(e));
    el.addEventListener('pointercancel', (e) => this.onUp(e));
    el.addEventListener('wheel', (e) => { this.wheelDelta += Math.sign(e.deltaY); }, { passive: true });
    el.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.edges.add('pounce');
    });
    // Block gestures on the game surface, but leave pause/settings overlays scrollable.
    el.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
  }

  private keyAction(action: KeyBindingAction, down: boolean, repeat: boolean): void {
    const held = (key: keyof KeyState): void => {
      if (down && !this.keys[key]) this.edges.add(action);
      this.keys[key] = down;
    };
    switch (action) {
      case 'moveUp': held('up'); break;
      case 'moveDown': held('down'); break;
      case 'moveLeft': held('left'); break;
      case 'moveRight': held('right'); break;
      case 'jump': held('jump'); break;
      case 'cameraIn':
        if (down && !this.zoomIn) this.edges.add(action);
        this.zoomIn = down;
        break;
      case 'cameraOut':
        if (down && !this.zoomOut) this.edges.add(action);
        this.zoomOut = down;
        break;
      case 'cameraLeft':
      case 'cameraRight':
      case 'pounce':
      case 'interact':
      case 'fire':
      case 'pause':
      case 'weapon1':
      case 'weapon2':
      case 'weapon3':
      case 'weapon4':
        if (down && !repeat) this.edges.add(action);
        if (action === 'pounce') this.keys.pounce = down;
        if (action === 'interact') this.keys.interact = down;
        if (action === 'fire') this.keys.fire = down;
        if (action === 'pause') this.keys.pause = down;
        break;
    }
  }

  setKeyBindings(bindings: KeyBindings): void {
    this.bindings = normalizeKeyBindings(bindings);
    this.reset();
  }

  getKeyBindings(): KeyBindings {
    return { ...this.bindings };
  }

  actionForCode(code: string): KeyBindingAction | null {
    return actionForKeyCode(code, this.bindings);
  }

  reset(): void {
    (Object.keys(this.keys) as (keyof KeyState)[]).forEach((k) => (this.keys[k] = false));
    this.zoomIn = this.zoomOut = false;
    this.edges.clear();
    this.wheelDelta = 0;
    this.mouseDragX = 0;
    this.joyId = null;
    this.joyVec = { x: 0, y: 0 };
    this.touchButtons.clear();
    this.gpHeld.clear();
  }

  /** Touch weapon-swap button. */
  requestCycle(): void {
    this.wheelDelta += 1;
  }

  /** Touch HUD buttons report their state here. */
  setTouchButton(name: 'jump' | 'pounce' | 'interact' | 'fire', down: boolean): void {
    const was = this.touchButtons.get(name) ?? false;
    if (down && !was) this.edges.add(name);
    this.touchButtons.set(name, down);
  }

  private onDown(e: PointerEvent): void {
    this.edges.add('any');
    if (e.pointerType === 'touch' && e.clientX < innerWidth * 0.45 && this.joyId === null) {
      this.el.setPointerCapture?.(e.pointerId);
      this.joyId = e.pointerId;
      this.joyStart = { x: e.clientX, y: e.clientY };
      this.joyVec = { x: 0, y: 0 };
      return;
    }
    if (e.pointerType === 'mouse' && e.button === 0) {
      this.updateMouseAim(e);
      this.edges.add('fire');
    }
  }

  private onMove(e: PointerEvent): void {
    if (e.pointerId === this.joyId) {
      const dx = (e.clientX - this.joyStart.x) / 60;
      const dy = (e.clientY - this.joyStart.y) / 60;
      const len = Math.hypot(dx, dy);
      const s = len > 1 ? 1 / len : 1;
      this.joyVec = { x: dx * s, y: -dy * s };
      return;
    }
    if (e.pointerType === 'mouse') this.updateMouseAim(e);
    if (e.pointerType === 'touch' && e.clientX > innerWidth * 0.5) {
      // right-half swipe nudges camera
      this.mouseDragX += (e.movementX ?? 0) / innerWidth;
    }
  }

  private updateMouseAim(e: PointerEvent): void {
    const rect = this.el.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;
    this.mouseAim = {
      x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      y: 1 - ((e.clientY - rect.top) / rect.height) * 2,
    };
  }

  private onUp(e: PointerEvent): void {
    if (e.pointerId === this.joyId) {
      this.joyId = null;
      this.joyVec = { x: 0, y: 0 };
    }
  }

  private pollGamepad(out: Intents): void {
    const gp = navigator.getGamepads?.()[0];
    if (!gp) return;
    const dz = (v: number): number => (Math.abs(v) > 0.18 ? v : 0);
    out.moveX += dz(gp.axes[0] ?? 0);
    out.moveY += -dz(gp.axes[1] ?? 0);
    if (gp.buttons[0]?.pressed) { if (!this.gpHeld.has(0)) { out.jumpPressed = true; this.gpHeld.add(0); } out.jump = true; } else this.gpHeld.delete(0);
    const edgeBtn = (i: number, flag: 'pounce' | 'interact' | 'fire'): void => {
      if (gp.buttons[i]?.pressed) {
        if (!this.gpHeld.has(i)) { out[flag] = true; this.gpHeld.add(i); }
      } else this.gpHeld.delete(i);
    };
    edgeBtn(1, 'pounce');
    edgeBtn(2, 'interact');
    edgeBtn(5, 'fire');
  }
  private gpHeld = new Set<number>();

  /** Call once per frame; returns and clears edge-triggered intents. */
  poll(): Intents {
    let mx = (this.keys.right ? 1 : 0) - (this.keys.left ? 1 : 0);
    let my = (this.keys.up ? 1 : 0) - (this.keys.down ? 1 : 0);
    const l = Math.hypot(mx, my);
    if (l > 1) { mx /= l; my /= l; }
    mx += this.joyVec.x;
    my += this.joyVec.y;

    const selectedIndex = ['weapon1', 'weapon2', 'weapon3', 'weapon4']
      .findIndex((action) => this.edges.has(action));
    const out: Intents = {
      moveX: Math.max(-1, Math.min(1, mx)),
      moveY: Math.max(-1, Math.min(1, my)),
      jump: this.keys.jump || (this.touchButtons.get('jump') ?? false),
      jumpPressed: this.edges.has('jump'),
      pounce: this.edges.has('pounce'),
      interact: this.edges.has('interact'),
      fire: this.edges.has('fire'),
      cycle: this.wheelDelta === 0 ? 0 : Math.sign(this.wheelDelta),
      selectWeapon: selectedIndex >= 0 ? selectedIndex : null,
      aimNdc: this.mouseAim ? { ...this.mouseAim } : null,
      camNudge: Math.max(-1, Math.min(1, this.mouseDragX * 4)),
      rotate: this.edges.has('cameraLeft') ? -1 : this.edges.has('cameraRight') ? 1 : 0,
      zoom: (this.zoomIn ? 1 : 0) - (this.zoomOut ? 1 : 0),
      pause: this.edges.has('pause'),
      any: this.edges.size > 0,
    };
    this.pollGamepad(out);
    this.edges.clear();
    this.wheelDelta = 0;
    this.mouseDragX *= 0.82; // decay nudge back to center
    return out;
  }
}
