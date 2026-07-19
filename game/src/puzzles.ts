// Pure puzzle-graph evaluation: plates, switch targets, keys → open gates.
// No three.js here; unit-tested headless.

import type { LogicRule } from './types';

export interface PuzzleInputs {
  /** plateId → satisfied */
  plates: Record<string, boolean>;
  /** switchTargetId → latched hit */
  switches: Record<string, boolean>;
  /** player carrying the key near the target gate id */
  keyNear: Record<string, boolean>;
  /** rotorId → current state */
  rotors?: Record<string, number>;
  /** slotId → deposited sum */
  paid?: Record<string, number>;
}

/** Returns set of open gate ids (doors open / lifts risen). */
export function evaluate(rules: LogicRule[], inputs: PuzzleInputs): Set<string> {
  const open = new Set<string>();
  for (const r of rules) {
    if ('plates' in r.when) {
      if (r.when.plates.every((p) => inputs.plates[p])) open.add(r.open);
    } else if ('switches' in r.when) {
      if (r.when.switches.every((s) => inputs.switches[s])) open.add(r.open);
    } else if ('rotors' in r.when) {
      const want = r.when.rotors;
      if (Object.keys(want).every((id) => (inputs.rotors?.[id] ?? -1) === want[id])) open.add(r.open);
    } else if ('paidExact' in r.when) {
      if ((inputs.paid?.[r.when.paidExact.slot] ?? 0) === r.when.paidExact.amount) open.add(r.open);
    } else if (inputs.keyNear[r.open]) {
      open.add(r.open);
    }
  }
  return open;
}

/**
 * Plate satisfaction from resting weight.
 * exact plates punish overloading (the "balance" mechanic).
 */
export function plateSatisfied(restingWeight: number, needWeight: number, exact: boolean): boolean {
  if (exact) return restingWeight === needWeight;
  return restingWeight >= needWeight;
}
