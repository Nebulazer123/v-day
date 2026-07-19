// Pure movement core: jump/pounce/sprint state machine with coyote time,
// input buffering and variable jump height. No three.js imports — this is
// unit-tested headless; player.ts binds it to the scene.

export interface MoveConfig {
  walkSpeed: number;
  accel: number;
  friction: number;
  gravity: number;
  jumpVel: number;
  jumpCutMultiplier: number; // gravity multiplier when jump released early
  coyoteTime: number;
  jumpBuffer: number;
  pounceSpeed: number;
  pounceTime: number;
  pounceCooldown: number;
  maxFall: number;
  speedMultiplier: number; // gear effects (Racing Collar etc.)
}

export const DEFAULT_MOVE: MoveConfig = {
  walkSpeed: 5.2,
  accel: 42,
  friction: 26,
  gravity: 24,
  jumpVel: 8.6,
  jumpCutMultiplier: 2.6,
  coyoteTime: 0.12,
  jumpBuffer: 0.15,
  pounceSpeed: 11.5,
  pounceTime: 0.28,
  pounceCooldown: 0.9,
  maxFall: 22,
  speedMultiplier: 1,
};

export interface MoveState {
  vx: number; vy: number; vz: number;
  grounded: boolean;
  coyote: number;
  buffer: number;
  pouncing: number;      // time remaining in pounce
  pounceCd: number;
  jumpHeld: boolean;
  facingX: number; facingZ: number;
  justJumped: boolean;
  justLanded: boolean;
  justPounced: boolean;
}

export function initialMoveState(): MoveState {
  return {
    vx: 0, vy: 0, vz: 0,
    grounded: false, coyote: 0, buffer: 0,
    pouncing: 0, pounceCd: 0, jumpHeld: false,
    facingX: 0, facingZ: 1,
    justJumped: false, justLanded: false, justPounced: false,
  };
}

export interface MoveInput {
  x: number; y: number;       // desired move dir (world x/z), normalized-ish
  jumpPressed: boolean;
  jumpHeld: boolean;
  pounce: boolean;
}

/**
 * Advance one physics step. groundY = top of ground under the player
 * (-Infinity if none). Returns displacement to apply this step.
 */
export function stepMove(
  s: MoveState,
  input: MoveInput,
  cfg: MoveConfig,
  dt: number,
  feetY: number,
  groundY: number
): { dx: number; dy: number; dz: number } {
  s.justJumped = false;
  s.justLanded = false;
  s.justPounced = false;

  const wasGrounded = s.grounded;
  const onGround = feetY <= groundY + 0.02 && s.vy <= 0.001 && groundY > -Infinity;
  s.grounded = onGround;
  if (onGround) {
    s.coyote = cfg.coyoteTime;
    if (!wasGrounded) s.justLanded = true;
  } else {
    s.coyote = Math.max(0, s.coyote - dt);
  }

  // timers
  s.buffer = input.jumpPressed ? cfg.jumpBuffer : Math.max(0, s.buffer - dt);
  s.pounceCd = Math.max(0, s.pounceCd - dt);

  // pounce: fixed-velocity burst in facing (or input) direction
  if (input.pounce && s.pounceCd <= 0 && s.pouncing <= 0) {
    const il = Math.hypot(input.x, input.y);
    const dx = il > 0.15 ? input.x / il : s.facingX;
    const dz = il > 0.15 ? input.y / il : s.facingZ;
    s.vx = dx * cfg.pounceSpeed * cfg.speedMultiplier;
    s.vz = dz * cfg.pounceSpeed * cfg.speedMultiplier;
    if (!onGround) s.vy = Math.max(s.vy, 2.2);
    else s.vy = 2.2;
    s.pouncing = cfg.pounceTime;
    s.pounceCd = cfg.pounceCooldown;
    s.grounded = false;
    s.justPounced = true;
  }

  if (s.pouncing > 0) {
    s.pouncing -= dt;
    // reduced gravity mid-pounce keeps the arc punchy
    s.vy -= cfg.gravity * 0.55 * dt;
  } else {
    // walk accel / friction
    const target = cfg.walkSpeed * cfg.speedMultiplier;
    const il = Math.hypot(input.x, input.y);
    if (il > 0.05) {
      const nx = input.x / Math.max(il, 1);
      const nz = input.y / Math.max(il, 1);
      s.vx = approach(s.vx, nx * target * Math.min(il, 1), cfg.accel * dt);
      s.vz = approach(s.vz, nz * target * Math.min(il, 1), cfg.accel * dt);
      s.facingX = nx;
      s.facingZ = nz;
    } else {
      s.vx = approach(s.vx, 0, cfg.friction * dt);
      s.vz = approach(s.vz, 0, cfg.friction * dt);
    }

    // jump (buffered + coyote)
    if (s.buffer > 0 && (s.grounded || s.coyote > 0)) {
      s.vy = cfg.jumpVel;
      s.buffer = 0;
      s.coyote = 0;
      s.grounded = false;
      s.justJumped = true;
    }

    // gravity with early-release cut for variable height
    const rising = s.vy > 0;
    const g = rising && !input.jumpHeld ? cfg.gravity * cfg.jumpCutMultiplier : cfg.gravity;
    if (!s.grounded) s.vy = Math.max(-cfg.maxFall, s.vy - g * dt);
    else s.vy = Math.max(0, s.vy);
  }

  // ground clamp
  let dy = s.vy * dt;
  if (s.vy <= 0 && groundY > -Infinity && feetY + dy <= groundY) {
    dy = groundY - feetY;
    s.vy = 0;
  }

  return { dx: s.vx * dt, dy, dz: s.vz * dt };
}

function approach(v: number, target: number, amount: number): number {
  if (v < target) return Math.min(target, v + amount);
  return Math.max(target, v - amount);
}
