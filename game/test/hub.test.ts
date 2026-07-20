import { describe, expect, it } from 'vitest';
import {
  EXITS,
  EXIT_ENTRY_X,
  EXIT_ROAD_COLOR,
  ROAD_HALF,
  hubDef,
  isAtChapterExit,
} from '../src/levels/hub';

describe('highway chapter roads', () => {
  it('builds one long side road for every chapter exit', () => {
    const def = hubDef();
    const roads = def.prims.filter((prim) =>
      prim.kind === 'box' && prim.color === EXIT_ROAD_COLOR && prim.size.x >= 24 && prim.size.z === 8
    );
    expect(roads).toHaveLength(EXITS.length);
    expect(roads.map((road) => road.pos.z)).toEqual(EXITS.map((exit) => exit.z));
  });

  it('only enters a chapter after the Corvette turns onto its side road', () => {
    const exit = EXITS[0];
    expect(isAtChapterExit(ROAD_HALF - 1, exit.z, exit)).toBe(false);
    expect(isAtChapterExit(EXIT_ENTRY_X + 0.1, exit.z, exit)).toBe(true);
    expect(isAtChapterExit(EXIT_ENTRY_X + 0.1, exit.z + 4.1, exit)).toBe(false);
  });
});
