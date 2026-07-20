import { describe, expect, it } from 'vitest';
import { CH4_WATER, isCh4WaterHazard } from '../src/levels/ch4';

describe('ch4 tide safety', () => {
  it('keeps the upper beach safe at high tide', () => {
    expect(isCh4WaterHazard({ x: 0, y: 0, z: -12 }, CH4_WATER.high)).toBe(false);
  });

  it('still makes the tidal flat dangerous at high tide', () => {
    expect(isCh4WaterHazard({ x: 0, y: -0.9, z: 0 }, CH4_WATER.high)).toBe(true);
  });

  it('also makes the tidal flat dangerous at mid tide', () => {
    expect(isCh4WaterHazard({ x: 0, y: -0.9, z: 0 }, CH4_WATER.mid)).toBe(true);
  });
});
