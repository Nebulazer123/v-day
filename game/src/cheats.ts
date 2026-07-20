export interface DuckCodeState {
  step: number;
  startedAt: number;
}

export function initialDuckCodeState(): DuckCodeState {
  return { step: 0, startedAt: 0 };
}

const DUCK_CODE = [0, 1, 2, 3, 4] as const;
const DUCK_CODE_WINDOW_MS = 6000;

/** Advance TL, TR, BL, BR, center while enforcing the promised six seconds. */
export function advanceDuckCode(
  state: DuckCodeState,
  tap: number,
  now: number
): { state: DuckCodeState; triggered: boolean } {
  let current = state;
  if (current.step > 0 && now - current.startedAt > DUCK_CODE_WINDOW_MS) {
    current = initialDuckCodeState();
  }
  const expected = DUCK_CODE[current.step];
  if (tap !== expected) {
    return tap === DUCK_CODE[0]
      ? { state: { step: 1, startedAt: now }, triggered: false }
      : { state: initialDuckCodeState(), triggered: false };
  }
  const startedAt = current.step === 0 ? now : current.startedAt;
  const step = current.step + 1;
  if (step === DUCK_CODE.length) {
    return { state: initialDuckCodeState(), triggered: true };
  }
  return { state: { step, startedAt }, triggered: false };
}
