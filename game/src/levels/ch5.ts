// CHAPTER 5 — THE DOCK & STARS. "lying on the dock. watching."
// The hardest pure puzzle: rotate five dock-post mirrors so the fallen
// star's beam relays post-to-post into the telescope. Solving it ignites
// the heart constellation and opens the way. The Ankh waits under the
// dock on an altar of glow-sticks.
//
// Beam solution (verified by test/beams.test.ts):
//   star (0,-10) ↑ → M1(0,-2)'/'→ east → M2(8,-2)'/'→ north → M3(8,8)'\'
//   → west → M4(-8,8)'\'→ north → M5(-8,14)'/'→ east → telescope (12,14)

import type { LevelDef, Prim } from '../types';
import { PAL } from '../art/palette';
import type { BeamMirror } from '../beams';

export const CH5_STAR = { x: 0, z: -10 };
export const CH5_TELESCOPE = { x: 12, z: 14 };
export const CH5_SOLUTION: Record<string, number> = { m1: 0, m2: 0, m3: 1, m4: 1, m5: 0 };

export function ch5Mirrors(states: Record<string, number>): BeamMirror[] {
  const pos: Record<string, { x: number; z: number }> = {
    m1: { x: 0, z: -2 }, m2: { x: 8, z: -2 }, m3: { x: 8, z: 8 },
    m4: { x: -8, z: 8 }, m5: { x: -8, z: 14 },
  };
  return Object.keys(pos).map((id) => ({ pos: pos[id], state: states[id] ?? 0 }));
}

export function ch5(): LevelDef {
  const prims: Prim[] = [];
  const DOCK = 0x63513a; // weathered planks
  const POST = 0x3a2f22;

  // shore
  prims.push({ kind: 'box', pos: { x: 0, y: -0.25, z: -14 }, size: { x: 34, y: 0.5, z: 10 }, color: PAL.grass });
  // walkway lattice following the beam route (deck top y = 0)
  const deck = (x: number, z: number, w: number, d: number): void => {
    prims.push({ kind: 'box', pos: { x, y: -0.15, z }, size: { x: w, y: 0.3, z: d }, color: DOCK });
  };
  deck(0, -4, 3.4, 12);    // shore → M1
  deck(4, -2, 12, 3);      // M1 → M2
  deck(8, 3, 3, 13);       // M2 → M3
  deck(0, 8, 19, 3);       // M3 → M4
  deck(-8, 11, 3, 9);      // M4 → M5
  deck(2, 14, 17, 3.4);    // M5 → telescope platform
  deck(12, 14, 5, 5);      // telescope stand
  // dock posts under corners
  for (const [x, z] of [[0, -2], [8, -2], [8, 8], [-8, 8], [-8, 14], [12, 14], [4, 8], [0, 14]] as const) {
    prims.push({ kind: 'cylinder', pos: { x, y: -1.4, z }, size: { x: 0.5, y: 2.6, z: 0.5 }, color: POST });
  }
  // under-dock secret shelf at water level (drop off the east edge of M1→M2 span)
  prims.push({ kind: 'box', pos: { x: 4, y: -2.4, z: 1.5 }, size: { x: 4.4, y: 0.3, z: 4.4 }, color: 0x2a3352 });
  // water (visual plane; hazard entity below)
  prims.push({ kind: 'box', pos: { x: 0, y: -3.1, z: 4 }, size: { x: 80, y: 0.4, z: 70 }, color: PAL.dockWater, ghost: true });
  // the fallen star: small glowing crystal on a pedestal at the beam source
  prims.push({ kind: 'cylinder', pos: { x: 0, y: 0.25, z: -10 }, size: { x: 1, y: 0.5, z: 1 }, color: 0x2f3856 });
  prims.push({ kind: 'box', pos: { x: 0, y: 0.95, z: -10 }, size: { x: 0.42, y: 0.42, z: 0.42 }, color: PAL.star, emissive: PAL.star, emissiveIntensity: 2.6, ghost: true })
  // the telescope: tube on the far stand
  prims.push({ kind: 'cylinder', pos: { x: 12, y: 1.2, z: 14 }, size: { x: 0.7, y: 2, z: 0.7 }, color: 0x2f3856 });

  return {
    id: 'ch5',
    name: 'THE DOCK & STARS',
    tagline: 'lying on the dock. watching.',
    skyGlow: 0x9db8ff,
    fogDensity: 0.017,
    prims,
    cameraOffset: { x: 0, y: 6.6, z: -9.4 },
    cameraZones: [],
    parSeconds: 260,
    bounds: { min: { x: -24, y: -8, z: -22 }, max: { x: 24, y: 30, z: 26 } },
    logic: [],
    entities: [
      { type: 'spawn', pos: { x: 0, y: 0, z: -13 }, yaw: 0 },
      { type: 'goal', pos: { x: 12, y: 0, z: 17 } },
      { type: 'sign', pos: { x: 4, y: 0, z: -13 }, lines: ['THE DOCK', 'mind the cold water'], yaw: Math.PI },
      { type: 'sign', pos: { x: -3.4, y: 0, z: -9 }, lines: ['ROUTE THE STARLIGHT', 'into the telescope'], fg: '#9DB8FF' },

      // the five mirrors (start states scrambled; solution 0,0,1,1,0)
      { type: 'rotor', id: 'm1', pos: { x: 0, y: 0, z: -2 }, states: 2, state: 1, kind: 'mirror' },
      { type: 'rotor', id: 'm2', pos: { x: 8, y: 0, z: -2 }, states: 2, state: 1, kind: 'mirror' },
      { type: 'rotor', id: 'm3', pos: { x: 8, y: 0, z: 8 }, states: 2, state: 0, kind: 'mirror' },
      { type: 'rotor', id: 'm4', pos: { x: -8, y: 0, z: 8 }, states: 2, state: 0, kind: 'mirror' },
      { type: 'rotor', id: 'm5', pos: { x: -8, y: 0, z: 14 }, states: 2, state: 1, kind: 'mirror' },

      // wisps drifting over the water near the route
      { type: 'wisp', pos: { x: 4, y: 1, z: 3 }, radius: 2.4 },
      { type: 'wisp', pos: { x: -3, y: 1.2, z: 11 }, radius: 2.6 },

      // letter piece mid-route
      { type: 'letterPiece', pos: { x: 0, y: 0.4, z: 8 } },

      // secret: UNDER THE DOCK — the Ankh on an altar of glow-sticks
      { type: 'secretWall', pos: { x: 4, y: -1.2, z: 3.9 }, size: { x: 4.4, y: 2.2, z: 0.5 }, color: 0x2a3352 },
      { type: 'weaponPickup', weapon: 'ankh', pos: { x: 4, y: -2.1, z: 0.2 } },
      { type: 'sign', pos: { x: 5.5, y: -2.4, z: 2.6 }, lines: ['the safety-pin tattoo', 'ascended. she still hates it.'], fg: '#CBB7E8' },
      { type: 'goldenDuck', id: 14, pos: { x: 2.6, y: -1.9, z: 0.2 } },

      // golden ducks: far-post jump chain + ankh-revealed east walkway
      { type: 'goldenDuck', id: 13, pos: { x: 0, y: 1, z: 16 } },
      { type: 'goldenDuck', id: 15, pos: { x: 17, y: 0.6, z: 8 }, needs: 'ankh' },

      // cold water
      { type: 'hazard', kind: 'water', shape: { pos: { x: 0, y: -2.8, z: 4 }, size: { x: 80, y: 1.2, z: 70 } } },

      // pearls
      { type: 'pearl', pos: { x: 0, y: 0.3, z: -6 } },
      { type: 'pearl', pos: { x: 4, y: 0.3, z: -2 } },
      { type: 'pearl', pos: { x: 8, y: 0.3, z: 4 } },
      { type: 'pearl', pos: { x: 0, y: 0.3, z: 8 } },
      { type: 'pearl', pos: { x: -8, y: 0.3, z: 11 } },
      { type: 'pearl', pos: { x: 6, y: 0.3, z: 14 } },
    ],
  };
}
