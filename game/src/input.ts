// Input intents. Keyboard/mouse + gamepad + touch all reduce to the same
// intent state so gameplay code never knows which device is driving.

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
  camNudge: number;     // -1..1 desired yaw nudge (mouse drag)
  rotate: number;       // -1/0/1 camera 90° rotate edge (A/D)
  zoom: number;         // -1/0/1 camera zoom held (W in / S out)
  pause: boolean;       // edge
  any: boolean;         // any input edge this frame (menus)
}

// Movement is on the ARROW keys. A/D rotate the camera, W/S zoom, Enter
// interacts. (Desktop scheme chosen by the player.)
const KEYMAP: Record<string, keyof KeyState> = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  Space: 'jump',
  ShiftLeft: 'pounce', ShiftRight: 'pounce',
  Enter: 'interact', NumpadEnter: 'interact',
  KeyF: 'fire',
  Escape: 'pause',
};

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
  private dragging = false;
  private lastX = 0;
  // touch joystick
  private joyId: number | null = null;
  private joyStart = { x: 0, y: 0 };
  private joyVec = { x: 0, y: 0 };
  private touchButtons = new Map<string, boolean>();
  readonly isTouch: boolean;

  constructor(private el: HTMLElement) {
    this.isTouch = matchMedia('(pointer: coarse)').matches;
    addEventListener('keydown', (e) => {
      // camera controls — not character movement
      if (e.code === 'KeyA') { if (!e.repeat) this.edges.add('rotL'); return; }
      if (e.code === 'KeyD') { if (!e.repeat) this.edges.add('rotR'); return; }
      if (e.code === 'KeyW') { this.zoomIn = true; return; }
      if (e.code === 'KeyS') { this.zoomOut = true; return; }
      const k = KEYMAP[e.code];
      if (!k) {
        if (/^Digit[1-4]$/.test(e.code)) this.edges.add('slot' + e.code.slice(5));
        return;
      }
      // stop the browser scrolling / activating on gameplay keys
      if (e.code === 'Space' || e.code === 'Enter' || e.code.startsWith('Arrow')) e.preventDefault();
      if (!this.keys[k]) this.edges.add(k);
      this.keys[k] = true;
    });
    addEventListener('keyup', (e) => {
      if (e.code === 'KeyW') this.zoomIn = false;
      if (e.code === 'KeyS') this.zoomOut = false;
      const k = KEYMAP[e.code];
      if (k) this.keys[k] = false;
    });
    addEventListener('blur', () => {
      (Object.keys(this.keys) as (keyof KeyState)[]).forEach((k) => (this.keys[k] = false));
      this.zoomIn = this.zoomOut = false;
    });

    el.addEventListener('pointerdown', (e) => this.onDown(e));
    el.addEventListener('pointermove', (e) => this.onMove(e));
    el.addEventListener('pointerup', (e) => this.onUp(e));
    el.addEventListener('pointercancel', (e) => this.onUp(e));
    el.addEventListener('wheel', (e) => { this.wheelDelta += Math.sign(e.deltaY); }, { passive: true });
    el.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.edges.add('pounce');
    });
    // block page scroll during play (mobile)
    document.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
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
    this.el.setPointerCapture?.(e.pointerId);
    this.edges.add('any');
    if (e.pointerType === 'touch' && e.clientX < innerWidth * 0.45 && this.joyId === null) {
      this.joyId = e.pointerId;
      this.joyStart = { x: e.clientX, y: e.clientY };
      this.joyVec = { x: 0, y: 0 };
      return;
    }
    if (e.pointerType === 'mouse' && e.button === 0) {
      this.dragging = true;
      this.lastX = e.clientX;
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
    if (this.dragging) {
      this.mouseDragX += (e.clientX - this.lastX) / innerWidth;
      this.lastX = e.clientX;
    }
    if (e.pointerType === 'touch' && e.clientX > innerWidth * 0.5) {
      // right-half swipe nudges camera
      this.mouseDragX += (e.movementX ?? 0) / innerWidth;
    }
  }

  private onUp(e: PointerEvent): void {
    if (e.pointerId === this.joyId) {
      this.joyId = null;
      this.joyVec = { x: 0, y: 0 };
    }
    if (e.pointerType === 'mouse') this.dragging = false;
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

    const out: Intents = {
      moveX: Math.max(-1, Math.min(1, mx)),
      moveY: Math.max(-1, Math.min(1, my)),
      jump: this.keys.jump || (this.touchButtons.get('jump') ?? false),
      jumpPressed: this.edges.has('jump'),
      pounce: this.edges.has('pounce'),
      interact: this.edges.has('interact'),
      fire: this.edges.has('fire'),
      cycle: this.wheelDelta === 0 ? 0 : Math.sign(this.wheelDelta),
      camNudge: Math.max(-1, Math.min(1, this.mouseDragX * 4)),
      rotate: this.edges.has('rotL') ? -1 : this.edges.has('rotR') ? 1 : 0,
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
