import { describe, expect, it } from 'vitest';
import { plateSlotOffsets, weightSummary } from '../src/interact';

describe('balance-scale presentation', () => {
  it('keeps each weight on a shared plate visibly separate', () => {
    const slots = plateSlotOffsets(2);
    expect(slots).toHaveLength(2);
    expect(slots[0]).not.toEqual(slots[1]);
  });

  it('shows the actual arithmetic for a stacked balance', () => {
    expect(weightSummary([1, 2])).toBe('1 + 2 = 3');
  });

  it("can include Bentley's one-unit contribution on a non-exact plate", () => {
    expect(weightSummary([2, 1])).toBe('1 + 2 = 3');
  });
});
