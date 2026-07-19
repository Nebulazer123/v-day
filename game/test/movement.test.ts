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

  it('honors coyote time but not after it expires', () => {
    const s = initialMoveState();
    stepMove(s, idle, DEFAULT_MOVE, 1 / 120, 0, 0);
    // walk off a ledge: ground disappears
    for (let i = 0; i < 6; i++) stepMove(s, idle, DEFAULT_MOVE, 1 / 120, 1, -Infinity);
    stepMove(s, { ...idle, jumpPressed: true, jumpHeld: true }, DEFAULT_MOVE, 1 / 120, 1, -Infinity);
    expect(s.justJumped).toBe(true);

    const s2 = initialMoveState();
    stepMove(s2, idle, DEFAULT_MOVE, 1 / 120, 0, 0);
    for (let i = 0; i < 40; i++) stepMove(s2, idle, DEFAULT_MOVE, 1 / 120, 1, -Infinity); // > 0.12s
    stepMove(s2, { ...idle, jumpPressed: true, jumpHeld: true }, DEFAULT_MOVE, 1 / 120, 1, -Infinity);
    expect(s2.justJumped).toBe(false);
  });

  it('buffers a jump pressed just before landing', () => {
    const s = initialMoveState();
    // airborne, press jump, then land within the buffer window
    stepMove(s, { ...idle, jumpPressed: true }, DEFAULT_MOVE, 1 / 120, 2, -Infinity);
    let jumped = false;
    for (let i = 0; i < 5; i++) {
      stepMove(s, idle, DEFAULT_MOVE, 1 / 120, 0.01, 0);
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
