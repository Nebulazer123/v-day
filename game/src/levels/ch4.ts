// CHAPTER 4 — THE BEACH. "sand in the corvette. dad has no idea. wait."
// Puzzle: the tide machine. A valve cycles the tide LOW/MID/HIGH. Low tide
// exposes the sand path to the far plates; high tide floats the driftwood
// blocks up onto the castle ledges. Sequence tides to put all three blocks
// on their plates and the sandcastle door opens. A rescued duck hands over
// the Duck Whistle. Crabs. Obviously crabs.

import type { LevelDef, Prim } from '../types';
import { PAL } from '../art/palette';

export const CH4_WATER = { low: -1.6, mid: -0.6, high: 0.7 };

export function ch4(): LevelDef {
  const prims: Prim[] = [];
  const SAND = PAL.sand;

  // upper beach (always dry)
  prims.push({ kind: 'box', pos: { x: 0, y: -0.25, z: -16 }, size: { x: 44, y: 0.5, z: 16 }, color: SAND });
  // tidal flat (dry only at low tide) — sits lower
  prims.push({ kind: 'box', pos: { x: 0, y: -1.15, z: 0 }, size: { x: 44, y: 0.5, z: 16 }, color: 0xb59f7c });
  // castle island plateau at the north
  prims.push({ kind: 'box', pos: { x: 0, y: -0.25, z: 16 }, size: { x: 26, y: 0.5, z: 16 }, color: SAND });

  // the sandcastle: walls + ledges at two heights for floated blocks
  prims.push({ kind: 'box', pos: { x: 0, y: 1.2, z: 21 }, size: { x: 10, y: 2.4, z: 1 }, color: 0xd8c193 });
  prims.push({ kind: 'cylinder', pos: { x: -5.5, y: 1.6, z: 21 }, size: { x: 2, y: 3.2, z: 2 }, color: 0xd8c193 });
  prims.push({ kind: 'cylinder', pos: { x: 5.5, y: 1.6, z: 21 }, size: { x: 2, y: 3.2, z: 2 }, color: 0xd8c193 });
  // ledges (plates sit on these)
  prims.push({ kind: 'box', pos: { x: -3.4, y: 0.5, z: 19.4 }, size: { x: 3, y: 1, z: 3 }, color: 0xd8c193 });
  prims.push({ kind: 'box', pos: { x: 3.4, y: 1.0, z: 19.4 }, size: { x: 3, y: 2, z: 3 }, color: 0xd8c193 });

  // waterfall rock face on the east + sea cave behind it
  prims.push({ kind: 'box', pos: { x: 18, y: 1.5, z: 10 }, size: { x: 6, y: 5, z: 10 }, color: 0x3a4055 });
  prims.push({ kind: 'box', pos: { x: 18, y: -0.25, z: 2 }, size: { x: 8, y: 0.5, z: 6 }, color: SAND });

  // dunes on the west (pounce-chain route up)
  prims.push({ kind: 'box', pos: { x: -16, y: 0.6, z: -6 }, size: { x: 6, y: 1.2, z: 6 }, color: 0xd8c193 });
  prims.push({ kind: 'box', pos: { x: -19, y: 1.4, z: 0 }, size: { x: 5, y: 1.4, z: 5 }, color: 0xd8c193 });
  prims.push({ kind: 'box', pos: { x: -16, y: 2.3, z: 6 }, size: { x: 4, y: 1.2, z: 4 }, color: 0xd8c193 });

  return {
    id: 'ch4',
    name: 'THE BEACH',
    tagline: 'sand in the corvette. we do not speak of it.',
    skyGlow: 0x4db8ff,
    fogDensity: 0.014,
    prims,
    cameraOffset: { x: 0, y: 7.2, z: -9 },
    cameraZones: [
      { min: { x: -13, y: -2, z: 10 }, max: { x: 13, y: 5, z: 26 }, offset: { x: 0, y: 5.4, z: -10.5 }, fov: 50 },
    ],
    parSeconds: 240,
    bounds: { min: { x: -26, y: -8, z: -28 }, max: { x: 26, y: 30, z: 28 } },
    logic: [
      { when: { plates: ['pa', 'pb', 'pc'] }, open: 'castle' },
    ],
    entities: [
      { type: 'spawn', pos: { x: 0, y: 0, z: -22 }, yaw: 0 },
      { type: 'goal', pos: { x: 0, y: 0.6, z: 22.5 } },
      { type: 'sign', pos: { x: 6, y: 0, z: -20 }, lines: ['THE BEACH', 'shoes: optional. crabs: not.'], yaw: Math.PI },
      { type: 'sign', pos: { x: -8, y: 0, z: -12 }, lines: ['TIDE MACHINE', 'low · mid · high'], fg: '#4DB8FF' },

      // the tide valve on the upper beach
      { type: 'valve', id: 'tide', pos: { x: -6, y: 0, z: -12 } },

      // driftwood blocks: float with the tide
      { type: 'carry', id: 'b1', pos: { x: -8, y: -0.9, z: -2 }, kind: 'block', weight: 2 },
      { type: 'carry', id: 'b2', pos: { x: 4, y: -0.9, z: 2 }, kind: 'block', weight: 2 },
      { type: 'carry', id: 'b3', pos: { x: 12, y: -0.9, z: -4 }, kind: 'block', weight: 2 },
      // plates: one on the flat (low tide only), two on castle ledges
      { type: 'plate', id: 'pa', pos: { x: 0, y: -0.9, z: 6 }, needWeight: 2 },
      { type: 'plate', id: 'pb', pos: { x: -3.4, y: 1, z: 19.4 }, needWeight: 2 },
      { type: 'plate', id: 'pc', pos: { x: 3.4, y: 2, z: 19.4 }, needWeight: 2 },
      { type: 'door', id: 'castle', pos: { x: 0, y: 1, z: 21 }, size: { x: 2.4, y: 2, z: 1.2 }, color: PAL.heartNeon },

      // crabs on the tidal flat
      { type: 'crab', pos: { x: -6, y: -0.9, z: 0 }, range: 4 },
      { type: 'crab', pos: { x: 8, y: -0.9, z: 4 }, range: 3 },
      { type: 'crab', pos: { x: 2, y: 0, z: -10 }, range: 5 },

      // the rescued duck (Duck Whistle) — stranded on the west dune top
      { type: 'interactZone', id: 'rescue', pos: { x: -16, y: 2.9, z: 6 }, radius: 2, label: 'HELP THE DUCK' },
      { type: 'weaponPickup', weapon: 'whistle', pos: { x: -16, y: 2.9, z: 6 } },

      // letter piece on the tidal flat — time the tide
      { type: 'letterPiece', pos: { x: 6, y: -0.7, z: 8 } },

      // secret: sea cave behind the waterfall
      { type: 'secretWall', pos: { x: 15.4, y: 1, z: 5.2 }, size: { x: 0.8, y: 3, z: 4 }, color: 0x3a4055 },
      { type: 'polaroid', pos: { x: 18, y: 1.2, z: 4 }, photo: 'assets/photos/couple_snow.jpeg', yaw: -1.2 },
      { type: 'goldenDuck', id: 11, pos: { x: 20, y: 0.4, z: 2 } },
      { type: 'pearl', pos: { x: 19, y: 0.5, z: 3.5 } },
      { type: 'pearl', pos: { x: 21, y: 0.5, z: 3.5 } },

      // golden ducks: dune-top pounce chain + boba route up the waterfall
      { type: 'goldenDuck', id: 10, pos: { x: -19, y: 2.6, z: 0 } },
      { type: 'goldenDuck', id: 12, pos: { x: 18, y: 4.6, z: 10 }, needs: 'boba' },
      { type: 'bobaSpot', pos: { x: 14.6, y: 1.4, z: 8 } },
      { type: 'bobaSpot', pos: { x: 15.5, y: 3, z: 10 } },

      // pearls
      { type: 'pearl', pos: { x: 0, y: 0.4, z: -18 } },
      { type: 'pearl', pos: { x: -10, y: 0.4, z: -14 } },
      { type: 'pearl', pos: { x: -16, y: 1.6, z: -6 } },
      { type: 'pearl', pos: { x: 0, y: -0.7, z: 2 } },
      { type: 'pearl', pos: { x: 10, y: -0.7, z: 0 } },
      { type: 'pearl', pos: { x: 0, y: 0.6, z: 18 } },
    ],
  };
}
