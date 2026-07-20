import { describe, expect, it } from 'vitest';
import { advanceDuckCode, initialDuckCodeState } from '../src/cheats';

describe('duck-code cheat', () => {
  it('triggers for top-left, top-right, bottom-left, bottom-right, center', () => {
    let state = initialDuckCodeState();
    let triggered = false;
    [0, 1, 2, 3, 4].forEach((tap, i) => {
      const result = advanceDuckCode(state, tap, i * 500);
      state = result.state;
      triggered = result.triggered;
    });
    expect(triggered).toBe(true);
    expect(state.step).toBe(0);
  });

  it('does not trigger after the six-second window or out of order', () => {
    let state = initialDuckCodeState();
    for (const [tap, at] of [[0, 0], [1, 1000], [2, 2000], [3, 3000], [4, 7000]] as const) {
      const result = advanceDuckCode(state, tap, at);
      state = result.state;
      expect(result.triggered).toBe(false);
    }
    state = initialDuckCodeState();
    for (const tap of [0, 2, 1, 3, 4]) {
      const result = advanceDuckCode(state, tap, 100);
      state = result.state;
      expect(result.triggered).toBe(false);
    }
  });
});
