import { describe, expect, it } from 'vitest';
import {
  DEFAULT_DRIVE,
  engineProfile,
  initialDriveState,
  stepDrive,
} from '../src/vehicle';

describe('Corvette driving', () => {
  it('builds speed under throttle without jumping instantly to top speed', () => {
    const state = initialDriveState();
    stepDrive(state, { throttle: 1, steer: 0, handbrake: false }, DEFAULT_DRIVE, 1 / 60);
    expect(state.speed).toBeGreaterThan(0);
    expect(state.speed).toBeLessThan(DEFAULT_DRIVE.maxForwardSpeed * 0.05);
    for (let i = 0; i < 600; i++) {
      stepDrive(state, { throttle: 1, steer: 0, handbrake: false }, DEFAULT_DRIVE, 1 / 60);
    }
    expect(state.speed).toBeGreaterThan(DEFAULT_DRIVE.maxForwardSpeed * 0.8);
    expect(state.speed).toBeLessThanOrEqual(DEFAULT_DRIVE.maxForwardSpeed);
  });

  it('uses reverse input as a brake before engaging reverse', () => {
    const state = initialDriveState();
    state.speed = 12;
    stepDrive(state, { throttle: -1, steer: 0, handbrake: false }, DEFAULT_DRIVE, 0.5);
    expect(state.speed).toBeGreaterThanOrEqual(0);
    expect(state.speed).toBeLessThan(12);
    for (let i = 0; i < 180; i++) {
      stepDrive(state, { throttle: -1, steer: 0, handbrake: false }, DEFAULT_DRIVE, 1 / 60);
    }
    expect(state.speed).toBeLessThan(-1);
    expect(state.speed).toBeGreaterThanOrEqual(-DEFAULT_DRIVE.maxReverseSpeed);
  });

  it('coasts naturally and the handbrake stops it much faster', () => {
    const coast = initialDriveState();
    const brake = initialDriveState();
    coast.speed = brake.speed = 18;
    for (let i = 0; i < 60; i++) {
      stepDrive(coast, { throttle: 0, steer: 0, handbrake: false }, DEFAULT_DRIVE, 1 / 60);
      stepDrive(brake, { throttle: 0, steer: 0, handbrake: true }, DEFAULT_DRIVE, 1 / 60);
    }
    expect(coast.speed).toBeGreaterThan(10);
    expect(Math.abs(brake.speed)).toBeLessThan(2);
  });

  it('smooths steering, reduces twitch at speed, and reverses steering in reverse', () => {
    const slow = initialDriveState();
    const fast = initialDriveState();
    const reverse = initialDriveState();
    slow.speed = 4;
    fast.speed = 25;
    reverse.speed = -4;
    const slowStep = stepDrive(slow, { throttle: 0, steer: 1, handbrake: false }, DEFAULT_DRIVE, 0.1);
    const fastStep = stepDrive(fast, { throttle: 0, steer: 1, handbrake: false }, DEFAULT_DRIVE, 0.1);
    const reverseStep = stepDrive(reverse, { throttle: 0, steer: 1, handbrake: false }, DEFAULT_DRIVE, 0.1);
    expect(slow.steering).toBeGreaterThan(0);
    expect(slowStep.lateral).toBeGreaterThan(fastStep.lateral);
    expect(reverseStep.lateral).toBeLessThan(0);
  });

  it('maps speed and throttle to a restrained idle and a loaded V8 profile', () => {
    const idle = engineProfile(0, 0, 1);
    const cruise = engineProfile(0.5, 0.2, 4);
    const pull = engineProfile(0.8, 1, 5);
    expect(idle.rpm).toBeGreaterThanOrEqual(760);
    expect(cruise.rpm).toBeGreaterThan(idle.rpm);
    expect(pull.rpm).toBeGreaterThan(cruise.rpm);
    expect(pull.load).toBeGreaterThan(cruise.load);
    expect(pull.gain).toBeGreaterThan(idle.gain);
  });

  it('runs through six forward gears and drops rpm on each upshift', () => {
    const state = initialDriveState();
    const shifts: Array<{ before: number; after: number; gear: number }> = [];
    let previousRpm = engineProfile(0, 1, 1).rpm;
    for (let i = 0; i < 1200; i++) {
      const step = stepDrive(state, { throttle: 1, steer: 0, handbrake: false }, DEFAULT_DRIVE, 1 / 60);
      const profile = engineProfile(Math.abs(state.speed) / DEFAULT_DRIVE.maxForwardSpeed, 1, state.gear);
      if (step.shifted) shifts.push({ before: previousRpm, after: profile.rpm, gear: state.gear });
      previousRpm = profile.rpm;
    }
    expect(shifts.map((shift) => shift.gear)).toEqual([2, 3, 4, 5, 6]);
    for (const shift of shifts) expect(shift.after).toBeLessThan(shift.before - 500);
    expect(state.gear).toBe(6);
  });

  it('downshifts as the car slows and holds first while reversing', () => {
    const state = initialDriveState();
    state.speed = DEFAULT_DRIVE.maxForwardSpeed * 0.9;
    state.gear = 6;
    for (let i = 0; i < 600; i++) {
      stepDrive(state, { throttle: 0, steer: 0, handbrake: true }, DEFAULT_DRIVE, 1 / 60);
    }
    expect(state.gear).toBe(1);
    state.speed = -5;
    stepDrive(state, { throttle: -1, steer: 0, handbrake: false }, DEFAULT_DRIVE, 1 / 60);
    expect(state.gear).toBe(1);
  });
});
