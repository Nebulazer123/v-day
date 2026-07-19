// CHAPTER 1 — THE GYM. "it started at the gym."
// Teach: move/jump/pounce, carry, pressure plates. Puzzle: balance both
// plates at exactly 3 to raise the lift to the key shelf; key opens the
// exit gate. Secrets: locker alcove (Ball Launcher + mirror polaroid),
// rafter duck (movement route), boba-ledge duck (future revisit).

import type { LevelDef, Prim } from '../types';
import { PAL } from '../art/palette';

export function ch1(): LevelDef {
  const prims: Prim[] = [];
  const W = 0x27305a; // gym wall
  const F = 0x1c2448; // gym floor

  // floor + east alcove strip
  prims.push({ kind: 'box', pos: { x: 0, y: -0.25, z: 0 }, size: { x: 46, y: 0.5, z: 34 }, color: F });
  prims.push({ kind: 'box', pos: { x: 18, y: -0.25, z: -6 }, size: { x: 12, y: 0.5, z: 8 }, color: F });
  // goal pad outside the north gate
  prims.push({ kind: 'box', pos: { x: 0, y: -0.25, z: 19 }, size: { x: 8, y: 0.5, z: 8 }, color: PAL.concrete });

  // perimeter walls (gap at north gate x∈[-2,2], gap at east alcove z∈[-8,-4])
  prims.push({ kind: 'box', pos: { x: 0, y: 1.6, z: -17 }, size: { x: 46, y: 3.2, z: 0.8 }, color: W });
  prims.push({ kind: 'box', pos: { x: -12.75, y: 1.6, z: 17 }, size: { x: 20.5, y: 3.2, z: 0.8 }, color: W });
  prims.push({ kind: 'box', pos: { x: 12.75, y: 1.6, z: 17 }, size: { x: 20.5, y: 3.2, z: 0.8 }, color: W });
  prims.push({ kind: 'box', pos: { x: -23, y: 1.6, z: 0 }, size: { x: 0.8, y: 3.2, z: 34 }, color: W });
  // east wall in two segments; the gap is covered by the secret wall
  prims.push({ kind: 'box', pos: { x: 23, y: 1.6, z: 5.25 }, size: { x: 0.8, y: 3.2, z: 23.5 }, color: W });
  prims.push({ kind: 'box', pos: { x: 23, y: 1.6, z: -12.75 }, size: { x: 0.8, y: 3.2, z: 8.5 }, color: W });
  // alcove outer walls
  prims.push({ kind: 'box', pos: { x: 24.4, y: 1.6, z: -6 }, size: { x: 0.8, y: 3.2, z: 9 }, color: W });
  prims.push({ kind: 'box', pos: { x: 18.7, y: 1.6, z: -1.6 }, size: { x: 12, y: 3.2, z: 0.8 }, color: W });
  prims.push({ kind: 'box', pos: { x: 18.7, y: 1.6, z: -10.4 }, size: { x: 12, y: 3.2, z: 0.8 }, color: W });

  // key shelf (west, high) + stair boxes toward rafter
  prims.push({ kind: 'box', pos: { x: -19.5, y: 2.85, z: 0 }, size: { x: 6, y: 0.4, z: 8 }, color: 0x2f3856 });
  // walkway plank bridging the raised lift (x-11) to the key shelf (x-16.5),
  // so once the lift is up it's a simple walk to the key — no precise jump
  prims.push({ kind: 'box', pos: { x: -14, y: 2.55, z: 0 }, size: { x: 6.4, y: 0.3, z: 2.8 }, color: 0x39426e });
  // rafter beam across the gym at height 4.6
  prims.push({ kind: 'box', pos: { x: 0, y: 4.6, z: 0 }, size: { x: 40, y: 0.3, z: 1.2 }, color: 0x323b63 });
  // pounce-chain boxes: shelf → floating steps → rafter
  prims.push({ kind: 'box', pos: { x: -14, y: 3.4, z: 3.5 }, size: { x: 1.6, y: 0.3, z: 1.6 }, color: 0x39426e });
  prims.push({ kind: 'box', pos: { x: -9, y: 4.0, z: 1.8 }, size: { x: 1.6, y: 0.3, z: 1.6 }, color: 0x39426e });
  // boba-ledge (needs Boba Blaster platforms to reach) NW high corner
  prims.push({ kind: 'box', pos: { x: -19, y: 5.4, z: -13 }, size: { x: 4, y: 0.4, z: 4 }, color: 0x39426e });

  // gym dressing: benches, racks (ghost = no collider where tiny)
  for (const z of [-10, -6, -2] as const) {
    prims.push({ kind: 'box', pos: { x: 8, y: 0.35, z }, size: { x: 2.6, y: 0.7, z: 1 }, color: 0x2f3856 });
  }
  prims.push({ kind: 'box', pos: { x: 14, y: 0.8, z: 10 }, size: { x: 6, y: 1.6, z: 1.2 }, color: 0x2f3856 });

  return {
    id: 'ch1',
    name: 'THE GYM',
    tagline: 'it started at the gym.',
    objective: 'OBJECTIVE:\n<b>1.</b> carry dumbbells [E] onto BOTH scales — exactly 3 each\n<b>2.</b> ride the lift up, grab the KEY\n<b>3.</b> take the key to the pink GATE',
    skyGlow: PAL.ramenGold,
    fogDensity: 0.012,
    prims,
    cameraOffset: { x: 0, y: 6.9, z: -8.2 },
    cameraZones: [
      // high iso over the balance puzzle
      { min: { x: -23, y: -1, z: -10 }, max: { x: -8, y: 4, z: 10 }, offset: { x: 4, y: 8.5, z: -8 }, fov: 50 },
    ],
    parSeconds: 170,
    bounds: { min: { x: -30, y: -6, z: -24 }, max: { x: 30, y: 30, z: 26 } },
    logic: [
      { when: { plates: ['pl', 'pr'] }, open: 'lift1' },
      { when: { key: true }, open: 'gate' },
      { when: { switches: ['st1'] }, open: 'bonus' },
    ],
    entities: [
      { type: 'spawn', pos: { x: 0, y: 0, z: -11 }, yaw: 0 },
      { type: 'goal', pos: { x: 0, y: 0, z: 20 } },
      { type: 'sign', pos: { x: 5, y: 0, z: -13 }, lines: ['LAINIE FITNESS', 'members: 2 (+1 dog)'], yaw: Math.PI },

      // balance puzzle
      { type: 'plate', id: 'pl', pos: { x: -14, y: 0, z: -4 }, needWeight: 3, exactWeight: true },
      { type: 'plate', id: 'pr', pos: { x: -14, y: 0, z: 4 }, needWeight: 3, exactWeight: true },
      { type: 'carry', id: 'd1', pos: { x: -9, y: 0, z: -8 }, kind: 'dumbbell', weight: 1 },
      { type: 'carry', id: 'd2', pos: { x: -7, y: 0, z: 1 }, kind: 'dumbbell', weight: 2 },
      { type: 'carry', id: 'd3', pos: { x: -17, y: 0, z: 9 }, kind: 'dumbbell', weight: 3 },
      { type: 'carry', id: 'd4', pos: { x: -5, y: 0, z: 7 }, kind: 'dumbbell', weight: 1 },
      { type: 'sign', pos: { x: -14, y: 0, z: -9.5 }, lines: ['BALANCE: 3 EACH SIDE', 'e.g. [3] and [1+2]'], fg: '#33FF88' },

      // lift to the key shelf
      { type: 'lift', id: 'lift1', pos: { x: -11, y: 0.2, z: 0 }, size: { x: 2.6, y: 0.4, z: 2.6 }, to: { x: -11, y: 2.8, z: 0 }, color: 0x39426e },
      { type: 'carry', id: 'key', pos: { x: -19.5, y: 3.1, z: 0 }, kind: 'key' },
      { type: 'door', id: 'gate', pos: { x: 0, y: 1.5, z: 17 }, size: { x: 4, y: 3, z: 0.7 }, color: PAL.heartNeon, needsKey: true },

      // ducks
      { type: 'duck', pos: { x: 4, y: 0, z: 4 }, patrol: [{ x: 4, y: 0, z: 4 }, { x: 10, y: 0, z: 4 }, { x: 10, y: 0, z: -2 }, { x: 4, y: 0, z: -2 }] },
      { type: 'duck', pos: { x: -4, y: 0, z: 10 }, patrol: [{ x: -4, y: 0, z: 10 }, { x: 4, y: 0, z: 12 }], speed: 3 },

      // letter piece on the center podium
      { type: 'letterPiece', pos: { x: 0, y: 0.6, z: 0 } },

      // secret: locker alcove behind the towel-rack wall
      { type: 'secretWall', pos: { x: 23, y: 1.6, z: -6 }, size: { x: 0.8, y: 3.2, z: 4.9 }, color: W },
      { type: 'weaponPickup', weapon: 'ball', pos: { x: 20, y: 0, z: -6 } },
      { type: 'polaroid', pos: { x: 22.5, y: 1.4, z: -8.8 }, photo: 'assets/photos/couple_mirror1.jpeg', yaw: -0.6 },
      { type: 'goldenDuck', id: 2, pos: { x: 17, y: 0.4, z: -8.5 } },

      // golden ducks: rafter (movement) + boba ledge (revisit)
      { type: 'goldenDuck', id: 1, pos: { x: 0, y: 5.2, z: 0 } },
      { type: 'goldenDuck', id: 3, pos: { x: -19, y: 6, z: -13 }, needs: 'boba' },
      { type: 'bobaSpot', pos: { x: -19, y: 3.6, z: -9.5 } },
      { type: 'bobaSpot', pos: { x: -19, y: 4.6, z: -11.2 } },

      // shooting-range bonus cubby (teaches the launcher after pickup)
      { type: 'switchTarget', id: 'st1', pos: { x: 12, y: 2.6, z: 15 } },
      { type: 'door', id: 'bonus', pos: { x: 16, y: 1.2, z: 16.6 }, size: { x: 2.2, y: 2.4, z: 0.7 }, color: PAL.ramenGold },
      { type: 'pearl', pos: { x: 16, y: 0.5, z: 18.5 } },
      { type: 'pearl', pos: { x: 17, y: 0.5, z: 18.5 } },
      { type: 'pearl', pos: { x: 15, y: 0.5, z: 18.5 } },

      // pearls along the route
      { type: 'pearl', pos: { x: -3, y: 0.4, z: -8 } },
      { type: 'pearl', pos: { x: -8, y: 0.4, z: -5 } },
      { type: 'pearl', pos: { x: -11, y: 3.4, z: 0 } },
      { type: 'pearl', pos: { x: -14, y: 4, z: 3.5 } },
      { type: 'pearl', pos: { x: -9, y: 4.6, z: 1.8 } },
      { type: 'pearl', pos: { x: 6, y: 0.4, z: 12 } },
    ],
  };
}
