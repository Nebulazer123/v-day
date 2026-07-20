import { describe, expect, it } from 'vitest';
import { LEVEL_HINTS, hintAt } from '../src/hints';

describe('progressive pause-menu hints', () => {
  it('provides at least three distinct hints for every story level', () => {
    for (let i = 1; i <= 7; i++) {
      const hints = LEVEL_HINTS[`ch${i}`];
      expect(hints, `ch${i}`).toBeDefined();
      expect(hints.length, `ch${i}`).toBeGreaterThanOrEqual(3);
      expect(new Set(hints).size, `ch${i}`).toBe(hints.length);
    }
  });

  it('reveals hints in order and stops at the final hint', () => {
    expect(hintAt('ch1', 0)).toBe(LEVEL_HINTS.ch1[0]);
    expect(hintAt('ch1', 1)).toBe(LEVEL_HINTS.ch1[1]);
    expect(hintAt('ch1', 999)).toBe(LEVEL_HINTS.ch1.at(-1));
    expect(hintAt('missing', 0)).toBeNull();
  });
});
