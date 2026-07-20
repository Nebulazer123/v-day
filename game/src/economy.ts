// The economy: run scoring/medals, pearl payouts, the gear catalog, and
// bounty modifiers. Pure data + math — unit-tested, no three.js.

import type { Medal } from './types';

// ----------------------------------------------------------------- scoring

export interface RunStats {
  timeSeconds: number;
  parSeconds: number;
  deaths: number;
  ducksThisRun: number;
  secretFound: boolean;
  bounty: boolean;
  modifierCount: number;
}

export interface RunResult {
  score: number;
  medal: Medal;
  payout: number;
  breakdown: { label: string; value: number }[];
}

export function scoreRun(s: RunStats, firstClear: boolean, pearlCut: boolean): RunResult {
  const timeScore = Math.round(500 * Math.min(1, s.parSeconds / Math.max(s.timeSeconds, 1)));
  const duckScore = s.ducksThisRun * 50;
  const secretScore = s.secretFound ? 100 : 0;
  const deathPenalty = -Math.min(300, s.deaths * 80);
  const clearScore = 400;
  const score = Math.max(0, timeScore + duckScore + secretScore + deathPenalty + clearScore);

  let medal: Medal = 'C';
  if (score >= 850 && s.deaths === 0) medal = 'S';
  else if (score >= 700) medal = 'GOLD';
  else if (score >= 500) medal = 'B';

  const medalPay: Record<Medal, number> = { C: 20, B: 35, GOLD: 50, S: 75 };
  let payout = medalPay[medal];
  if (firstClear) payout += 100;
  payout += s.ducksThisRun * 15;
  if (s.secretFound) payout += 25;
  if (s.bounty) payout += 40 + s.modifierCount * 20;
  if (pearlCut) payout = Math.round(payout * 1.25);

  return {
    score,
    medal,
    payout,
    breakdown: [
      { label: 'CLEAR', value: clearScore },
      { label: 'TIME', value: timeScore },
      { label: 'GOLDEN DUCKS', value: duckScore },
      { label: 'SECRET', value: secretScore },
      { label: 'DAMAGE', value: deathPenalty },
    ],
  };
}

export const MEDAL_ORDER: Medal[] = ['C', 'B', 'GOLD', 'S'];
export function betterMedal(a: Medal, b: Medal | undefined): boolean {
  if (!b) return true;
  return MEDAL_ORDER.indexOf(a) > MEDAL_ORDER.indexOf(b);
}

// -------------------------------------------------------------------- gear

export type GearCategory = 'snack' | 'collar' | 'charm' | 'weaponTier' | 'cosmetic';

export interface GearItem {
  id: string;
  name: string;
  desc: string;
  category: GearCategory;
  price: number;
  emoji: string;
}

export const CATALOG: GearItem[] = [
  // snacks — consumable, auto-trigger, one use per run each
  { id: 'ramen', name: 'RAMEN CUP', desc: 'auto full-heal once at 1 heart', category: 'snack', price: 15, emoji: '🍜' },
  { id: 'bobaShield', name: 'BOBA SHIELD', desc: 'absorbs the first 2 hits each run', category: 'snack', price: 20, emoji: '🧋' },
  { id: 'cookie', name: "GRANDMA'S COOKIE", desc: 'one puzzle hint per run [H]', category: 'snack', price: 25, emoji: '🍪' },
  // collars — pick one
  { id: 'foam', name: 'FOAM COLLAR', desc: '+1 max heart', category: 'collar', price: 250, emoji: '🦴' },
  { id: 'puffer', name: 'PUFFER VEST', desc: 'falls & water cost no heart', category: 'collar', price: 300, emoji: '🦺' },
  { id: 'duckdown', name: 'DUCKDOWN COLLAR', desc: '+2 max hearts, -10% speed', category: 'collar', price: 450, emoji: '🪶' },
  { id: 'racing', name: 'RACING COLLAR', desc: '+15% speed, -1 max heart', category: 'collar', price: 400, emoji: '🏁' },
  // charms — pick two
  { id: 'magnet', name: 'MAGNET', desc: 'pickups fly to you', category: 'charm', price: 150, emoji: '🧲' },
  { id: 'scout', name: 'SCOUT', desc: 'pings when a secret is near', category: 'charm', price: 200, emoji: '📡' },
  { id: 'barkAmp', name: 'BARK AMP', desc: 'pounce bonks a wider radius', category: 'charm', price: 250, emoji: '📢' },
  { id: 'coupon', name: "HAYDEN'S COUPON", desc: 'shop prices -20% (he is furious)', category: 'charm', price: 220, emoji: '🧾' },
  { id: 'pearlcut', name: 'PEARL CUT', desc: '+25% pearl payouts', category: 'charm', price: 300, emoji: '💰' },
  { id: 'slowpaw', name: 'SLOW PAW', desc: 'pounce cooldown -40%', category: 'charm', price: 260, emoji: '🐾' },
  { id: 'secondwind', name: 'SECOND WIND', desc: 'survive one lethal hit per run', category: 'charm', price: 350, emoji: '💫' },
  // weapon tiers — permanent power spikes
  { id: 'ballII', name: 'BALL LAUNCHER II', desc: 'triple ricochet', category: 'weaponTier', price: 400, emoji: '🎾' },
  { id: 'whistleII', name: 'DUCK WHISTLE II', desc: 'half cooldown', category: 'weaponTier', price: 400, emoji: '📯' },
  { id: 'ankhII', name: 'ANKH II', desc: 'bigger reveal + stun radius', category: 'weaponTier', price: 600, emoji: '☥' },
  // cosmetics
  { id: 'cap', name: 'BACKWARDS CAP', desc: "corbin's. obviously.", category: 'cosmetic', price: 120, emoji: '🧢' },
  { id: 'sunglasses', name: 'SUNGLASSES', desc: 'at night. iconic.', category: 'cosmetic', price: 100, emoji: '🕶' },
  { id: 'bandana', name: 'BANDANA', desc: 'roguish.', category: 'cosmetic', price: 80, emoji: '🧣' },
  { id: 'glasses', name: 'TINY ROUND GLASSES', desc: "lainie's look.", category: 'cosmetic', price: 150, emoji: '👓' },
  { id: 'trailHearts', name: 'HEART TRAIL', desc: 'you leave love behind', category: 'cosmetic', price: 90, emoji: '💗' },
  { id: 'trailStars', name: 'STAR TRAIL', desc: 'you leave night behind', category: 'cosmetic', price: 90, emoji: '✨' },
  { id: 'underglowPink', name: 'UNDERGLOW: NEON PINK', desc: 'the C6 approves', category: 'cosmetic', price: 110, emoji: '🌸' },
  { id: 'underglowGold', name: 'UNDERGLOW: RAMEN GOLD', desc: 'tasteful. warm.', category: 'cosmetic', price: 110, emoji: '🍯' },
  { id: 'hornQuack', name: 'HORN: QUACK', desc: 'the ducks respect it', category: 'cosmetic', price: 60, emoji: '🦆' },
  { id: 'hornBark', name: 'HORN: BARK', desc: 'boof at speed', category: 'cosmetic', price: 60, emoji: '🐕' },
  { id: 'chromeDuck', name: 'CHROME DUCK ORNAMENT', desc: 'hood royalty. prestige.', category: 'cosmetic', price: 800, emoji: '🏆' },
];

export interface SnackEffects {
  ramenHeals: number;
  shieldHits: number;
  hints: number;
}

/** Every purchased snack contributes its advertised effect to the next run. */
export function snackEffects(snacks: readonly string[]): SnackEffects {
  const count = (id: string): number => snacks.filter((snack) => snack === id).length;
  return {
    ramenHeals: count('ramen'),
    shieldHits: count('bobaShield') * 2,
    hints: count('cookie'),
  };
}

export function itemPrice(item: GearItem, hasCoupon: boolean): number {
  return hasCoupon ? Math.round(item.price * 0.8) : item.price;
}

export function canBuy(item: GearItem, pearls: number, owned: string[], hasCoupon: boolean): boolean {
  if (item.category !== 'snack' && owned.includes(item.id)) return false;
  return pearls >= itemPrice(item, hasCoupon);
}

// ----------------------------------------------------------------- bounties

export interface BountyMod {
  id: string;
  name: string;
  desc: string;
}

export const BOUNTY_MODS: BountyMod[] = [
  { id: 'noWeapons', name: 'UNARMED', desc: 'weapons confiscated' },
  { id: 'doubleDucks', name: 'DOUBLE DUCKS', desc: 'twice the waterfowl' },
  { id: 'oneHeart', name: 'ONE HEART', desc: 'no mistakes' },
  { id: 'rushHour', name: 'RUSH HOUR', desc: 'par time -30%' },
  { id: 'fogRolls', name: 'FOG ROLLS IN', desc: 'visibility: emotional' },
  { id: 'greed', name: 'GREED', desc: 'pearls ×2 · hits cost 5 pearls' },
];

/** deterministic 3 offered pairs based on a seed (chapter+clears) */
export function offerBounties(seed: number): [BountyMod, BountyMod][] {
  const mods = [...BOUNTY_MODS];
  const pick = (n: number): BountyMod => mods[n % mods.length];
  const offers: [BountyMod, BountyMod][] = [];
  for (let i = 0; i < 3; i++) {
    const a = pick(seed * 7 + i * 3 + 1);
    let b = pick(seed * 11 + i * 5 + 4);
    if (b.id === a.id) b = pick(seed * 11 + i * 5 + 5);
    offers.push([a, b]);
  }
  return offers;
}
