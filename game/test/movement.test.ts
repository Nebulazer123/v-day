import { describe, expect, it } from 'vitest';
import { DEFAULT_MOVE, initialMoveState, stepMove } from '../src/movement';

const idle = { x: 0, y: 0, jumpPressed: false, jumpHeld: false, pounce: false };

describe('movement', () => {
  it('walks toward input and stops with friction', () => {
    const s = initialMoveState();
    for (let i = 0; i < 120; i++) stepMove(s, { ...idle, x: 1 }, DEFAULT_MOVE, 1 / 120, 0, 0);
    expect(s.vx).toBeGreaterThan(4);
    for (let i = 0; i < 240; i++) stepMove(s, idle, DEFAULT_MOVE, 1 / 120, 0, 0);
    expect(Math.abs(s.vx)).toBeLessThan(0.01);
  });

  it('jumps when grounded and reports the edge', () => {
    const s = initialMoveState();
    stepMove(s, idle, DEFAULT_MOVE, 1 / 120, 0, 0); // settle grounded
    stepMove(s, { ...idle, jumpPressed: true, jumpHeld: true }, DEFAULT_MOVE, 1 / 120, 0, 0);
    expect(s.justJumped).toBe(true);
    // gravity already applied within the same step
    expect(s.vy).toBeGreaterThan(DEFAULT_MOVE.jumpVel - 0.5);
  });

  it('honors coyote time (as a true ground jump) but not after it expires', () => {
    const s = initialMoveState();
    stepMove(s, idle, DEFAULT_MOVE, 1 / 120, 0, 0);
    // walk off a ledge: ground disappears
    for (let i = 0; i < 6; i++) stepMove(s, idle, DEFAULT_MOVE, 1 / 120, 1, -Infinity);
    stepMove(s, { ...idle, jumpPressed: true, jumpHeld: true }, DEFAULT_MOVE, 1 / 120, 1, -Infinity);
    expect(s.justJumped).toBe(true);
    expect(s.justAirJumped).toBe(false); // within coyote: a real ground jump, not the double jump

    // once coyote has expired, the same press still jumps — but it's now
    // the double jump, since one is always available in the air
    const s2 = initialMoveState();
    stepMove(s2, idle, DEFAULT_MOVE, 1 / 120, 0, 0);
    for (let i = 0; i < 40; i++) stepMove(s2, idle, DEFAULT_MOVE, 1 / 120, 1, -Infinity); // > 0.12s
    stepMove(s2, { ...idle, jumpPressed: true, jumpHeld: true }, DEFAULT_MOVE, 1 / 120, 1, -Infinity);
    expect(s2.justAirJumped).toBe(true);
  });

  it('with double jump disabled, does not jump once coyote expires', () => {
    const noDouble = { ...DEFAULT_MOVE, maxJumps: 1 };
    const s = initialMoveState();
    stepMove(s, idle, noDouble, 1 / 120, 0, 0);
    for (let i = 0; i < 40; i++) stepMove(s, idle, noDouble, 1 / 120, 1, -Infinity); // > 0.12s
    stepMove(s, { ...idle, jumpPressed: true, jumpHeld: true }, noDouble, 1 / 120, 1, -Infinity);
    expect(s.justJumped).toBe(false);
  });

  it('buffers a jump pressed just before landing (double jump disabled)', () => {
    const noDouble = { ...DEFAULT_MOVE, maxJumps: 1 };
    const s = initialMoveState();
    // airborne, press jump, then land within the buffer window
    stepMove(s, { ...idle, jumpPressed: true }, noDouble, 1 / 120, 2, -Infinity);
    let jumped = false;
    for (let i = 0; i < 5; i++) {
      stepMove(s, idle, noDouble, 1 / 120, 0.01, 0);
      jumped ||= s.justJumped;
    }
    expect(jumped).toBe(true);
  });

  it('cuts jump height when released early', () => {
    const sHold = initialMoveState();
    stepMove(sHold, idle, DEFAULT_MOVE, 1 / 120, 0, 0);
    stepMove(sHold, { ...idle, jumpPressed: true, jumpHeld: true }, DEFAULT_MOVE, 1 / 120, 0, 0);
    let holdPeak = 0;
    let y = 0;
    for (let i = 0; i < 200; i++) {
      const d = stepMove(sHold, { ...idle, jumpHeld: true }, DEFAULT_MOVE, 1 / 120, y, 0);
      y += d.dy;
      holdPeak = Math.max(holdPeak, y);
    }
    const sTap = initialMoveState();
    stepMove(sTap, idle, DEFAULT_MOVE, 1 / 120, 0, 0);
    stepMove(sTap, { ...idle, jumpPressed: true, jumpHeld: true }, DEFAULT_MOVE, 1 / 120, 0, 0);
    let tapPeak = 0;
    y = 0;
    for (let i = 0; i < 200; i++) {
      const d = stepMove(sTap, idle, DEFAULT_MOVE, 1 / 120, y, 0);
      y += d.dy;
      tapPeak = Math.max(tapPeak, y);
    }
    expect(holdPeak).toBeGreaterThan(tapPeak * 1.5);
  });

  it('allows one double (air) jump, then no more until grounded again', () => {
    const s = initialMoveState();
    stepMove(s, idle, DEFAULT_MOVE, 1 / 120, 0, 0); // settle grounded
    // ground jump, then burn off coyote so the next jump can only be an air jump
    stepMove(s, { ...idle, jumpPressed: true, jumpHeld: true }, DEFAULT_MOVE, 1 / 120, 0, 0);
    expect(s.justJumped).toBe(true);
    expect(s.justAirJumped).toBe(false);
    for (let i = 0; i < 40; i++) stepMove(s, idle, DEFAULT_MOVE, 1 / 120, 1, -Infinity); // airborne, coyote expires

    // first mid-air jump = the double jump
    stepMove(s, { ...idle, jumpPressed: true, jumpHeld: true }, DEFAULT_MOVE, 1 / 120, 1, -Infinity);
    expect(s.justJumped).toBe(true);
    expect(s.justAirJumped).toBe(true);
    expect(s.vy).toBeGreaterThan(0);

    // second mid-air jump should fail — only one double jump per airtime
    for (let i = 0; i < 10; i++) stepMove(s, idle, DEFAULT_MOVE, 1 / 120, 1, -Infinity);
    stepMove(s, { ...idle, jumpPressed: true, jumpHeld: true }, DEFAULT_MOVE, 1 / 120, 1, -Infinity);
    expect(s.justAirJumped).toBe(false);
  });

  it('recharges the air jump after landing', () => {
    const s = initialMoveState();
    let y = 0;
    stepMove(s, idle, DEFAULT_MOVE, 1 / 120, y, 0);
    stepMove(s, { ...idle, jumpPressed: true, jumpHeld: true }, DEFAULT_MOVE, 1 / 120, y, 0);
    y += 0.05; // leave the ground so the next jump is airborne
    for (let i = 0; i < 40; i++) { const d = stepMove(s, idle, DEFAULT_MOVE, 1 / 120, y, -Infinity); y += d.dy; }
    const d0 = stepMove(s, { ...idle, jumpPressed: true, jumpHeld: true }, DEFAULT_MOVE, 1 / 120, y, -Infinity);
    y += d0.dy;
    expect(s.justAirJumped).toBe(true);
    expect(s.airJumps).toBe(1);
    // fall all the way back down to the floor, plus a couple extra frames so
    // grounded (computed from feetY at the START of a step) actually latches
    for (let i = 0; i < 220; i++) { const d = stepMove(s, idle, DEFAULT_MOVE, 1 / 120, y, 0); y += d.dy; }
    expect(s.grounded).toBe(true);
    expect(s.airJumps).toBe(0);
  });

  it('pounce bursts speed and respects cooldown', () => {
    const s = initialMoveState();
    stepMove(s, idle, DEFAULT_MOVE, 1 / 120, 0, 0);
    stepMove(s, { ...idle, x: 1, pounce: true }, DEFAULT_MOVE, 1 / 120, 0, 0);
    expect(s.justPounced).toBe(true);
    expect(Math.hypot(s.vx, s.vz)).toBeGreaterThan(DEFAULT_MOVE.walkSpeed);
    stepMove(s, { ...idle, x: 1, pounce: true }, DEFAULT_MOVE, 1 / 120, 0, 0);
    expect(s.justPounced).toBe(false); // on cooldown
  });
});
