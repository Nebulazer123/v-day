import { describe, expect, it } from 'vitest';
import { defaultSave, normalizeSave } from '../src/save';

describe('save normalization', () => {
  it('returns defaults for garbage', () => {
    expect(normalizeSave(null)).toEqual(defaultSave());
    expect(normalizeSave('lol')).toEqual(defaultSave());
    expect(normalizeSave(42)).toEqual(defaultSave());
  });

  it('keeps valid fields and drops invalid ones', () => {
    const s = normalizeSave({
      chaptersDone: ['ch1', 7, null],
      pearls: 123.9,
      weapons: ['ball', 'sword', 'ankh'],
      ducks: [1, 'two', 3],
      muted: true,
      tier: 'ultra',
      gear: { owned: ['magnet'], collar: 'foam', charms: [], snacks: 9 },
    });
    expect(s.chaptersDone).toEqual(['ch1']);
    expect(s.pearls).toBe(123);
    expect(s.weapons).toEqual(['ball', 'ankh']);
    expect(s.ducks).toEqual([1, 3]);
    expect(s.muted).toBe(true);
    expect(s.tier).toBe('ultra');
    expect(s.gear.collar).toBe('foam');
    expect(s.gear.snacks).toEqual([]);
  });

  it('negative pearls clamp to zero', () => {
    expect(normalizeSave({ pearls: -50 }).pearls).toBe(0);
  });
});
