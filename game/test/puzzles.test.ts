import { describe, expect, it } from 'vitest';
import { evaluate, plateSatisfied } from '../src/puzzles';
import type { LogicRule } from '../src/types';

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
});

describe('ch1 balance puzzle is solvable', () => {
  it('dumbbells 1,2,3,1 can balance two exact-3 plates', () => {
    const weights = [1, 2, 3, 1];
    // one valid split: [3] and [1,2] (player adds nothing)
    const left = [weights[2]];
    const right = [weights[0], weights[1]];
    const sum = (a: number[]): number => a.reduce((x, y) => x + y, 0);
    expect(plateSatisfied(sum(left), 3, true)).toBe(true);
    expect(plateSatisfied(sum(right), 3, true)).toBe(true);
  });
});
