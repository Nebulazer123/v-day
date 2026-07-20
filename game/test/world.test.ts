import { describe, expect, it } from 'vitest';
import { World } from '../src/world';
import type { LevelDef } from '../src/types';

function levelWithPlatform(): LevelDef {
  return {
    id: 'test',
    name: 'TEST',
    tagline: 'test',
    skyGlow: 0,
    prims: [
      { kind: 'box', pos: { x: 0, y: 0.25, z: 0 }, size: { x: 4, y: 0.5, z: 4 }, color: 0xffffff },
    ],
    entities: [],
    cameraZones: [],
    cameraOffset: { x: 0, y: 0, z: 0 },
    parSeconds: 1,
    bounds: { min: { x: -4, y: -4, z: -4 }, max: { x: 4, y: 4, z: 4 } },
  };
}

describe('platform ground contact', () => {
  it('does not turn a half-unit platform into walkable ground from below', () => {
    const world = new World(levelWithPlatform());
    expect(world.groundAt(0, 0, 0.2)).toBe(-Infinity);
    expect(world.groundAt(0, 0, 0.5)).toBeCloseTo(0.5);
  });
});
