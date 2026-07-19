// CHAPTER 6 — TWILIGHT FOREST. "he sparkles. that's not a personality."
// Edward stands on his brooding rock sweeping a sparkle beam through the
// fog. Carry the three mirror shields onto their sockets (the Ankh reveals
// the true sockets glowing through the fog); each time the sweep crosses a
// socketed shield it reflects back at him. Three reflections = yeet.

import type { LevelDef, Prim } from '../types';

export const CH6_EDWARD = { x: 0, z: 18 };
export const CH6_SOCKETS = [
  { id: 'sk1', x: -8, z: 6 },
  { id: 'sk2', x: 0, z: 2 },
  { id: 'sk3', x: 9, z: 8 },
];

export function ch6(): LevelDef {
  const prims: Prim[] = [];
  const GROUND = 0x15282f;

  // forest floor
  prims.push({ kind: 'box', pos: { x: 0, y: -0.25, z: 0 }, size: { x: 44, y: 0.5, z: 52 }, color: GROUND });
  // Edward's brooding rock
  prims.push({ kind: 'box', pos: { x: 0, y: 1.2, z: 18 }, size: { x: 6, y: 2.4, z: 5 }, color: 0x3a4055 });
  // exit ridge behind him
  prims.push({ kind: 'box', pos: { x: 0, y: 0.6, z: 24 }, size: { x: 10, y: 1.2, z: 4 }, color: GROUND });
  // scattered rocks (cover from the sweep)
  for (const [x, z, s] of [[-10, -2, 2.2], [6, -6, 1.8], [12, 2, 2.6], [-14, 10, 2], [-4, 12, 1.6], [10, 14, 2]] as const) {
    prims.push({ kind: 'box', pos: { x, y: s / 2, z }, size: { x: s, y: s, z: s }, color: 0x31394f });
  }
  // ankh-revealed bridge to the glitter stash island (invisible collider; the
  // Ankh's reveal light makes its faint ghost mesh readable in the fog)
  prims.push({ kind: 'box', pos: { x: 18, y: -0.15, z: -8 }, size: { x: 8, y: 0.3, z: 3 }, color: 0x3d4a6b, invisible: true });
  prims.push({ kind: 'box', pos: { x: 24, y: -0.25, z: -8 }, size: { x: 6, y: 0.5, z: 8 }, color: 0x31394f });

  return {
    id: 'ch6',
    name: 'TWILIGHT FOREST',
    tagline: "he sparkles. that's not a personality.",
    skyGlow: 0xdde7f0,
    fogDensity: 0.035,
    prims,
    cameraOffset: { x: 0, y: 6, z: -8.8 },
    cameraZones: [
      // low + tight in the forest
      { min: { x: -20, y: -1, z: -14 }, max: { x: 20, y: 4, z: 14 }, offset: { x: 0, y: 4.6, z: -7.6 }, fov: 58 },
    ],
    parSeconds: 260,
    bounds: { min: { x: -24, y: -6, z: -20 }, max: { x: 30, y: 30, z: 30 } },
    logic: [],
    entities: [
      { type: 'spawn', pos: { x: 0, y: 0, z: -16 }, yaw: 0 },
      { type: 'goal', pos: { x: 0, y: 1.2, z: 24 } },
      { type: 'sign', pos: { x: 5, y: 0, z: -14 }, lines: ['TWILIGHT FOREST', 'sparkle warning: severe'], yaw: Math.PI, fg: '#DDE7F0' },

      // the three mirror shields, scattered
      { type: 'carry', id: 's1', pos: { x: -14, y: 0, z: -8 }, kind: 'mirrorShield', weight: 2 },
      { type: 'carry', id: 's2', pos: { x: 14, y: 0, z: -2 }, kind: 'mirrorShield', weight: 2 },
      { type: 'carry', id: 's3', pos: { x: -6, y: 0, z: 14 }, kind: 'mirrorShield', weight: 2 },

      // sparkle wisps drift between the rocks
      { type: 'wisp', pos: { x: -6, y: 1, z: 2 }, radius: 3 },
      { type: 'wisp', pos: { x: 8, y: 1.2, z: 10 }, radius: 2.4 },
      { type: 'wisp', pos: { x: 2, y: 1, z: -8 }, radius: 3.4 },

      // letter piece deep in the fog on the west edge
      { type: 'letterPiece', pos: { x: -18, y: 0.4, z: 4 } },

      // secret: Edward's abandoned glitter stash across the hidden bridge
      { type: 'goldenDuck', id: 17, pos: { x: 24, y: 0.5, z: -8 } },
      { type: 'polaroid', pos: { x: 26, y: 1.2, z: -10 }, photo: 'assets/photos/bentley.jpeg', yaw: -0.8 },
      { type: 'pearl', pos: { x: 23, y: 0.5, z: -6 } },
      { type: 'pearl', pos: { x: 25, y: 0.5, z: -6 } },
      { type: 'sign', pos: { x: 24, y: 0, z: -11 }, lines: ['GLITTER STASH', 'he has a problem.'], fg: '#DDE7F0' },

      // golden ducks: rock-top pounce chain + whistle fetch over the fog
      { type: 'goldenDuck', id: 16, pos: { x: 12, y: 3, z: 2 } },
      { type: 'goldenDuck', id: 18, pos: { x: -14, y: 4.5, z: 10 }, needs: 'whistle' },

      // pearls
      { type: 'pearl', pos: { x: 0, y: 0.4, z: -10 } },
      { type: 'pearl', pos: { x: -10, y: 0.4, z: 0 } },
      { type: 'pearl', pos: { x: 10, y: 0.4, z: 6 } },
      { type: 'pearl', pos: { x: 0, y: 0.4, z: 10 } },
    ],
  };
}
