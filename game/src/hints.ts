export const LEVEL_HINTS: Readonly<Record<string, readonly string[]>> = {
  ch1: [
    'The three dumbbells are worth 1, 2, and 3. Both glowing scales need exactly 3.',
    'Put the 3-weight on one scale. Put the 1-weight and 2-weight together on the other.',
    'When both counters turn green, stand on the lift. Take the key from the west shelf to the pink gate.',
  ],
  ch2: [
    'Each street rotor has four positions. Interact with one to turn it a quarter-turn.',
    'From south to north, set the four rotors to positions 1, 0, 3, and 2.',
    'The green exit opens when all four rotors match. Shoot the high jar sign to open the boba shop.',
  ],
  ch3: [
    'The toll wants exactly 7. Coin values are printed on the coins; overpaying empties the till.',
    'Any exact combination works. The 5-value coin plus either 2-value coin is the shortest answer.',
    'Carry both coins to the till. If you prefer the smaller coins, 2 + 1 + 2 + 2 also makes 7.',
  ],
  ch4: [
    'At LOW tide, ferry all three driftwood blocks north. Leave the flat plate empty for now.',
    'Set HIGH tide at the south valve, cross on the west dune tops, and float a block beside the lower castle plate.',
    'Double-jump while carrying a block to reach the taller right ledge. Return to LOW tide and fill the flat plate last.',
  ],
  ch5: [
    'Follow the starlight from its source. Each mirror flips the beam by 90 degrees.',
    'The correct mirror states from the star to the telescope are 0, 0, 1, 1, 0.',
    'Route: center post, east post, northeast post, northwest post, north post, then the telescope.',
  ],
  ch6: [
    'Carry all three mirror shields to the faint socket circles. The Ankh makes the real sockets easier to see.',
    'The sockets are left-center, near the middle, and right-center. Put one shield on each.',
    'After the shields are placed, use the rocks as cover and let Edward\'s sweeping beam strike each shield.',
  ],
  ch7: [
    'Follow the path north toward the easel at Sunrise Point.',
    'You need at least six letter pieces. Missing pieces are in the earlier chapters and can be collected from Level Select.',
    'Stand close to the easel and press your Interact key to assemble the letter.',
  ],
};

export function hintAt(levelId: string, index: number): string | null {
  const hints = LEVEL_HINTS[levelId];
  if (!hints?.length) return null;
  return hints[Math.min(Math.max(0, Math.floor(index)), hints.length - 1)];
}
