// Typed, versioned localStorage save. Pure functions where possible so the
// migration/load path is unit-testable without a browser.

import type { SaveData } from './types';

export const SAVE_KEY = 'duck-job-v1';

export function defaultSave(): SaveData {
  return {
    v: 1,
    chaptersDone: [],
    pieces: [],
    ducks: [],
    weapons: [],
    weaponTiers: {},
    grades: {},
    pearls: 0,
    gear: { owned: [], collar: null, charms: [], snacks: [] },
    bountiesCleared: 0,
    secrets: {},
    muted: false,
    tier: null,
  };
}

/** Merge unknown parsed JSON into a valid SaveData (forward-compatible). */
export function normalizeSave(raw: unknown): SaveData {
  const d = defaultSave();
  if (typeof raw !== 'object' || raw === null) return d;
  const r = raw as Record<string, unknown>;
  const arr = (v: unknown): unknown[] => (Array.isArray(v) ? v : []);
  d.chaptersDone = arr(r.chaptersDone).filter((x): x is string => typeof x === 'string');
  d.pieces = arr(r.pieces).filter((x): x is string => typeof x === 'string');
  d.ducks = arr(r.ducks).filter((x): x is number => typeof x === 'number');
  d.weapons = arr(r.weapons).filter((x): x is SaveData['weapons'][number] =>
    x === 'ball' || x === 'boba' || x === 'whistle' || x === 'ankh');
  if (typeof r.weaponTiers === 'object' && r.weaponTiers !== null) {
    d.weaponTiers = r.weaponTiers as SaveData['weaponTiers'];
  }
  if (typeof r.grades === 'object' && r.grades !== null) {
    d.grades = r.grades as SaveData['grades'];
  }
  if (typeof r.pearls === 'number' && isFinite(r.pearls)) d.pearls = Math.max(0, Math.floor(r.pearls));
  if (typeof r.gear === 'object' && r.gear !== null) {
    const g = r.gear as Record<string, unknown>;
    d.gear.owned = arr(g.owned).filter((x): x is string => typeof x === 'string');
    d.gear.collar = typeof g.collar === 'string' ? g.collar : null;
    d.gear.charms = arr(g.charms).filter((x): x is string => typeof x === 'string');
    d.gear.snacks = arr(g.snacks).filter((x): x is string => typeof x === 'string');
  }
  if (typeof r.bountiesCleared === 'number') d.bountiesCleared = r.bountiesCleared;
  if (typeof r.secrets === 'object' && r.secrets !== null) d.secrets = r.secrets as Record<string, boolean>;
  if (typeof r.muted === 'boolean') d.muted = r.muted;
  if (r.tier === 'ultra' || r.tier === 'mobile') d.tier = r.tier;
  return d;
}

export class Save {
  data: SaveData;

  constructor() {
    this.data = this.load();
  }

  private load(): SaveData {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return defaultSave();
      return normalizeSave(JSON.parse(raw));
    } catch {
      return defaultSave();
    }
  }

  write(): void {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(this.data));
    } catch {
      // private mode etc. — play on without persistence
    }
  }

  patch(fn: (d: SaveData) => void): void {
    fn(this.data);
    this.write();
  }
}
