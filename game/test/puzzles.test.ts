import { describe, expect, it } from 'vitest';
import { evaluate, goalUnlocked, plateSatisfied } from '../src/puzzles';
import { ch1 } from '../src/levels/ch1';
import { ch2 } from '../src/levels/ch2';
import { ch3 } from '../src/levels/ch3';
import { ch4 } from '../src/levels/ch4';
import type { EntityDef, LogicRule } from '../src/types';

describe('puzzle graph', () => {
  const rules: LogicRule[] = [
    { when: { plates: ['a', 'b'] }, open: 'lift' },
    { when: { switches: ['s1'] }, open: 'bonus' },
    { when: { key: true }, open: 'gate' },
  ];

  it('opens only when all plates are satisfied', () => {
    expect(evaluate(rules, { plates: { a: true, b: false }, switches: {}, keyNear: {} }).has('lift')).toBe(false);
    expect(evaluate(rules, { plates: { a: true, b: true }, switches: {}, keyNear: {} }).has('lift')).toBe(true);
  });

  it('latched switches open their gate', () => {
    expect(evaluate(rules, { plates: {}, switches: { s1: true }, keyNear: {} }).has('bonus')).toBe(true);
  });

  it('key gates need the key nearby', () => {
    expect(evaluate(rules, { plates: {}, switches: {}, keyNear: { gate: false } }).has('gate')).toBe(false);
    expect(evaluate(rules, { plates: {}, switches: {}, keyNear: { gate: true } }).has('gate')).toBe(true);
  });

  it('exact plates punish overloading', () => {
    expect(plateSatisfied(3, 3, true)).toBe(true);
    expect(plateSatisfied(4, 3, true)).toBe(false);
    expect(plateSatisfied(4, 3, false)).toBe(true);
  });

  it('keeps the goal locked until its required puzzle gate is open', () => {
    expect(goalUnlocked(undefined, new Set())).toBe(true);
    expect(goalUnlocked('exit', new Set())).toBe(false);
    expect(goalUnlocked('exit', new Set(['exit']))).toBe(true);
  });
});

describe('chapter progression gates', () => {
  it.each([
    [ch1, 'gate'],
    [ch2, 'exit'],
    [ch3, 'tollgate'],
    [ch4, 'castle'],
  ] as const)('requires the intended puzzle gate before the goal can finish', (build, gateId) => {
    const goal = build().entities.find((entity) => entity.type === 'goal');
    expect(goal?.type).toBe('goal');
    if (goal?.type === 'goal') expect(goal.requires).toBe(gateId);
  });
});

describe('ch1 balance puzzle is solvable', () => {
  it('uses the clearly readable 1+2 versus 3 solution for two exact-3 plates', () => {
    const weights = ch1().entities
      .filter((entity): entity is Extract<EntityDef, { type: 'carry' }> => entity.type === 'carry' && entity.kind === 'dumbbell')
      .map((entity) => entity.weight ?? 1);
    expect(weights).toEqual([1, 2, 3]);
    // one valid split: [3] and [1,2] (player adds nothing)
    const left = [weights[2]];
    const right = [weights[0], weights[1]];
    const sum = (a: number[]): number => a.reduce((x, y) => x + y, 0);
    expect(plateSatisfied(sum(left), 3, true)).toBe(true);
    expect(plateSatisfied(sum(right), 3, true)).toBe(true);
  });
});

describe('ch1 shooting-range bonus area', () => {
  it('has floor under every pearl outside the north wall', () => {
    const def = ch1();
    const bonusPearls = def.entities
      .filter((e) => e.type === 'pearl')
      .filter((e) => e.pos.z > 17 && e.pos.x > 10);
    expect(bonusPearls).toHaveLength(3);
    for (const pearl of bonusPearls) {
      const supported = def.prims.some((p) => {
        if (p.kind !== 'box') return false;
        const top = p.pos.y + p.size.y / 2;
        return Math.abs(top) < 0.01 &&
          Math.abs(pearl.pos.x - p.pos.x) <= p.size.x / 2 &&
          Math.abs(pearl.pos.z - p.pos.z) <= p.size.z / 2;
      });
      expect(supported, `unsupported bonus pearl at ${pearl.pos.x},${pearl.pos.z}`).toBe(true);
    }
  });

  it('leaves the full secret-wall opening free of solid east-wall geometry', () => {
    const def = ch1();
    const secret = def.entities.find((e) => e.type === 'secretWall');
    expect(secret?.type).toBe('secretWall');
    if (!secret || secret.type !== 'secretWall') return;
    const secretMin = secret.pos.z - secret.size.z / 2;
    const secretMax = secret.pos.z + secret.size.z / 2;
    const eastWalls = def.prims.filter((p) => p.kind === 'box' && p.pos.x === 23 && p.size.x === 0.8);
    for (const wall of eastWalls) {
      const wallMin = wall.pos.z - wall.size.z / 2;
      const wallMax = wall.pos.z + wall.size.z / 2;
      const overlap = Math.min(secretMax, wallMax) - Math.max(secretMin, wallMin);
      expect(overlap, `east wall overlaps secret entrance by ${overlap}`).toBeLessThanOrEqual(0.001);
    }
  });

  it('leaves the bonus gate opening free of solid north-wall geometry', () => {
    const def = ch1();
    const bonus = def.entities.find((e) => e.type === 'door' && e.id === 'bonus');
    expect(bonus?.type).toBe('door');
    if (!bonus || bonus.type !== 'door') return;
    const gateMin = bonus.pos.x - bonus.size.x / 2;
    const gateMax = bonus.pos.x + bonus.size.x / 2;
    const northWalls = def.prims.filter((p) =>
      p.kind === 'box' && p.pos.z === 17 && p.size.z === 0.8
    );
    for (const wall of northWalls) {
      const wallMin = wall.pos.x - wall.size.x / 2;
      const wallMax = wall.pos.x + wall.size.x / 2;
      const overlap = Math.min(gateMax, wallMax) - Math.max(gateMin, wallMin);
      expect(overlap, `north wall overlaps bonus gate by ${overlap}`).toBeLessThanOrEqual(0.001);
    }
  });
});

describe('ch4 sandcastle entrance', () => {
  it('leaves the castle door opening free of solid front-wall geometry', () => {
    const def = ch4();
    const castle = def.entities.find((entity) => entity.type === 'door' && entity.id === 'castle');
    expect(castle?.type).toBe('door');
    if (!castle || castle.type !== 'door') return;
    const doorMin = castle.pos.x - castle.size.x / 2;
    const doorMax = castle.pos.x + castle.size.x / 2;
    const frontWalls = def.prims.filter((prim) =>
      prim.kind === 'box' && Math.abs(prim.pos.z - castle.pos.z) < 0.7 && prim.size.z >= 1
    );
    for (const wall of frontWalls) {
      const wallMin = wall.pos.x - wall.size.x / 2;
      const wallMax = wall.pos.x + wall.size.x / 2;
      const overlap = Math.min(doorMax, wallMax) - Math.max(doorMin, wallMin);
      expect(overlap, `castle wall overlaps its door by ${overlap}`).toBeLessThanOrEqual(0.001);
    }
  });
});
