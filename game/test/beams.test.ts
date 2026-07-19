import { describe, expect, it } from 'vitest';
import { traceBeam } from '../src/beams';
import { ch5Mirrors, CH5_SOLUTION, CH5_STAR, CH5_TELESCOPE } from '../src/levels/ch5';

describe('ch5 star beam', () => {
  it('the authored solution reaches the telescope', () => {
    const path = traceBeam(CH5_STAR, 'pz', ch5Mirrors(CH5_SOLUTION), CH5_TELESCOPE);
    expect(path.hitTarget).toBe(true);
    // full relay: star + 5 mirrors + telescope
    expect(path.points.length).toBe(7);
  });

  it('the scrambled start state does NOT solve it', () => {
    const start = { m1: 1, m2: 1, m3: 0, m4: 0, m5: 1 };
    const path = traceBeam(CH5_STAR, 'pz', ch5Mirrors(start), CH5_TELESCOPE);
    expect(path.hitTarget).toBe(false);
  });

  it('one wrong mirror breaks the relay', () => {
    for (const id of Object.keys(CH5_SOLUTION)) {
      const s = { ...CH5_SOLUTION, [id]: 1 - CH5_SOLUTION[id] };
      const path = traceBeam(CH5_STAR, 'pz', ch5Mirrors(s), CH5_TELESCOPE);
      expect(path.hitTarget, `flipping ${id} should break it`).toBe(false);
    }
  });
});
