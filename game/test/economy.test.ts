import { describe, expect, it } from 'vitest';
import { scoreRun, betterMedal, CATALOG, itemPrice, canBuy, offerBounties, snackEffects } from '../src/economy';

const clean = { timeSeconds: 100, parSeconds: 170, deaths: 0, ducksThisRun: 3, secretFound: true, bounty: false, modifierCount: 0 };

describe('run scoring', () => {
  it('perfect run earns S', () => {
    const r = scoreRun(clean, false, false);
    expect(r.medal).toBe('S');
    expect(r.score).toBeGreaterThanOrEqual(850);
  });

  it('deaths block S even with high score', () => {
    const r = scoreRun({ ...clean, deaths: 1 }, false, false);
    expect(r.medal).not.toBe('S');
  });

  it('slow deathless run without extras lands B or C', () => {
    const r = scoreRun({ timeSeconds: 500, parSeconds: 170, deaths: 0, ducksThisRun: 0, secretFound: false, bounty: false, modifierCount: 0 }, false, false);
    expect(['B', 'C']).toContain(r.medal);
  });

  it('first clear pays +100 and pearl cut adds 25%', () => {
    const base = scoreRun(clean, false, false).payout;
    const first = scoreRun(clean, true, false).payout;
    expect(first - base).toBe(100);
    const cut = scoreRun(clean, false, true).payout;
    expect(cut).toBe(Math.round(base * 1.25));
  });

  it('bounty modifiers raise payout', () => {
    const plain = scoreRun(clean, false, false).payout;
    const bounty = scoreRun({ ...clean, bounty: true, modifierCount: 2 }, false, false).payout;
    expect(bounty).toBe(plain + 40 + 40);
  });

  it('medal ordering', () => {
    expect(betterMedal('S', 'GOLD')).toBe(true);
    expect(betterMedal('B', 'GOLD')).toBe(false);
    expect(betterMedal('C', undefined)).toBe(true);
  });
});

describe('shop', () => {
  it('coupon discounts 20%', () => {
    const foam = CATALOG.find((i) => i.id === 'foam')!;
    expect(itemPrice(foam, false)).toBe(250);
    expect(itemPrice(foam, true)).toBe(200);
  });

  it('non-snacks cannot be re-bought; snacks can', () => {
    const foam = CATALOG.find((i) => i.id === 'foam')!;
    const ramen = CATALOG.find((i) => i.id === 'ramen')!;
    expect(canBuy(foam, 999, ['foam'], false)).toBe(false);
    expect(canBuy(ramen, 999, ['ramen'], false)).toBe(true);
    expect(canBuy(foam, 100, [], false)).toBe(false); // too poor
  });

  it('honors every purchased snack in a stacked one-run loadout', () => {
    expect(snackEffects(['cookie', 'cookie', 'ramen', 'bobaShield', 'bobaShield'])).toEqual({
      ramenHeals: 1,
      shieldHits: 4,
      hints: 2,
    });
  });

  it('catalog ids are unique', () => {
    const ids = CATALOG.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('bounties', () => {
  it('offers three pairs with distinct mods inside each pair', () => {
    for (let seed = 0; seed < 25; seed++) {
      const offers = offerBounties(seed);
      expect(offers.length).toBe(3);
      for (const [a, b] of offers) expect(a.id).not.toBe(b.id);
    }
  });
});
