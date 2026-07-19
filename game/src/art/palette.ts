// THE DUCK JOB — the one true palette. Every color in the game comes from
// here so all seven chapters read as one world. Derived from the LAINIE.EXE
// site tokens (css/style.css) with the corrections from Corbin (Victory Red).

export const PAL = {
  // world
  midnight: 0x0b1026,      // the 3am sky over Lincoln
  dockWater: 0x14224a,     // deep water / secondary surfaces
  horizonGlow: 0x2b3a6e,   // where the sky meets the road
  asphalt: 0x1a2140,       // roads, rooftops
  concrete: 0x3a4468,      // sidewalks, bridge
  sand: 0xc9b189,          // the beach
  pine: 0x1d3a35,          // forest trees
  grass: 0x24453c,         // ground cover

  // characters & hero objects
  victoryRed: 0xd42a2a,    // THE car. canon-locked.
  taillight: 0xff2222,     // Morimoto glow
  bentley: 0xd9a05b,       // caramel fur
  bentleyEar: 0xb37f41,    // ear/muzzle darker fur
  duck: 0xffd23f,          // THE DUCKS
  duckBill: 0xff8c42,

  // accents
  heartNeon: 0xff4d8d,     // love, letters, neon signs
  ramenGold: 0xffb627,     // warm light, lanterns, coins
  taroPurple: 0xb388eb,    // boba, night accents
  crtGreen: 0x33ff88,      // "machine voice" UI accents
  grandmaLilac: 0xcbb7e8,
  edwardPale: 0xdde7f0,    // sparkle hazards
  lincolnMud: 0x5b5242,    // mud pits, boring-town brown
  star: 0xfff6d8,          // stars, headlights
} as const;

export type PaletteKey = keyof typeof PAL;

// CSS hex helper for HUD usage.
export const cssHex = (c: number): string => `#${c.toString(16).padStart(6, '0')}`;
