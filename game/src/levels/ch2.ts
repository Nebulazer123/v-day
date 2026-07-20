// CHAPTER 2 — LINCOLN AFTER DARK. "population: small. exits: one."
// Puzzle: rotate four circuit rotors so the town's one working streetlight
// line reaches the exit gate. Mud pits punish sloppy movement. The boba
// shop Lincoln never had holds the Boba Blaster.

import type { LevelDef, Prim } from '../types';
import { PAL } from '../art/palette';

export function ch2(): LevelDef {
  const prims: Prim[] = [];
  const F = 0x181f3e; // street
  const B = 0x232c50; // buildings

  // main street: L-shaped town
  prims.push({ kind: 'box', pos: { x: 0, y: -0.25, z: 0 }, size: { x: 16, y: 0.5, z: 60 }, color: F });
  prims.push({ kind: 'box', pos: { x: 16, y: -0.25, z: 18 }, size: { x: 20, y: 0.5, z: 14 }, color: F });

  // buildings lining the street (solid, block the view corridors)
  const buildings: [number, number, number, number, number][] = [
    [-11, 2.2, -20, 6, 10], [-11, 1.8, -6, 6, 8], [-11, 2.6, 8, 6, 9], [-11, 2, 20, 6, 8],
    [11, 2.2, -22, 6, 8], [11, 1.6, -10, 6, 7], [11, 2.4, 2, 6, 8],
    [16, 2.2, 27.5, 16, 5], [27.5, 2, 18, 5, 12],
  ];
  for (const [x, h, z, w, d] of buildings) {
    prims.push({ kind: 'box', pos: { x, y: h / 2, z }, size: { x: w, y: h, z: d }, color: B });
  }
  // one lit window (the only sign of life) — emissive pane on a building
  prims.push({ kind: 'box', pos: { x: -7.9, y: 2.4, z: 8 }, size: { x: 0.2, y: 1, z: 1.4 }, color: PAL.ramenGold, emissive: PAL.ramenGold, emissiveIntensity: 1.6, ghost: true });

  // boba shop (never opened): shell on the east side street
  prims.push({ kind: 'box', pos: { x: 22, y: 1.6, z: 12.4 }, size: { x: 8, y: 3.2, z: 0.8 }, color: B });
  prims.push({ kind: 'box', pos: { x: 22, y: 1.6, z: 23.6 }, size: { x: 8, y: 3.2, z: 0.8 }, color: B });
  prims.push({ kind: 'box', pos: { x: 25.6, y: 1.6, z: 18 }, size: { x: 0.8, y: 3.2, z: 12 }, color: B });

  // exit road at the far north with the gate
  prims.push({ kind: 'box', pos: { x: 0, y: -0.25, z: 36 }, size: { x: 10, y: 0.5, z: 12 }, color: PAL.concrete });

  // billboard on the west: LINCOLN — famous for: nothing (secret behind it)
  prims.push({ kind: 'box', pos: { x: -13, y: -0.25, z: -14 }, size: { x: 10, y: 0.5, z: 10 }, color: F });

  return {
    id: 'ch2',
    name: 'LINCOLN AFTER DARK',
    tagline: 'population: small. exits: one.',
    skyGlow: PAL.taroPurple,
    fogDensity: 0.02,
    prims,
    cameraOffset: { x: 0, y: 7.2, z: -8.6 },
    cameraZones: [
      { min: { x: 8, y: -1, z: 12 }, max: { x: 28, y: 4, z: 24 }, offset: { x: -5, y: 6.5, z: -6 }, fov: 52 },
    ],
    parSeconds: 200,
    bounds: { min: { x: -22, y: -6, z: -32 }, max: { x: 32, y: 30, z: 44 } },
    logic: [
      // route the circuit: each rotor must point the wire onward (state targets)
      { when: { rotors: { r1: 1, r2: 0, r3: 3, r4: 2 } }, open: 'exit' },
      { when: { switches: ['jar1'] }, open: 'shopdoor' },
    ],
    entities: [
      { type: 'spawn', pos: { x: 0, y: 0, z: -26 }, yaw: 0 },
      { type: 'goal', pos: { x: 0, y: 0, z: 40 }, requires: 'exit' },
      { type: 'sign', pos: { x: 4.5, y: 0, z: -24 }, lines: ['LINCOLN, MAINE', 'famous for: nothing'], yaw: Math.PI },
      { type: 'sign', pos: { x: -5, y: 0, z: 30 }, lines: ['ONE (1) EXIT', 'power required'], fg: '#33FF88' },

      // the circuit rotors along the street — wire arms must chain north
      { type: 'rotor', id: 'r1', pos: { x: -4, y: 0, z: -14 }, states: 4, state: 3, kind: 'barrier' },
      { type: 'rotor', id: 'r2', pos: { x: 4, y: 0, z: -2 }, states: 4, state: 2, kind: 'barrier' },
      { type: 'rotor', id: 'r3', pos: { x: -4, y: 0, z: 10 }, states: 4, state: 1, kind: 'barrier' },
      { type: 'rotor', id: 'r4', pos: { x: 3, y: 0, z: 24 }, states: 4, state: 0, kind: 'barrier' },
      { type: 'door', id: 'exit', pos: { x: 0, y: 2.2, z: 33 }, size: { x: 10, y: 4.4, z: 0.7 }, color: PAL.crtGreen },

      // mud pits (the official Lincoln pastime)
      { type: 'hazard', kind: 'mud', shape: { pos: { x: -3, y: 0, z: -8 }, size: { x: 5, y: 0.4, z: 4 } } },
      { type: 'hazard', kind: 'mud', shape: { pos: { x: 5, y: 0, z: 5 }, size: { x: 5, y: 0.4, z: 5 } } },
      { type: 'hazard', kind: 'mud', shape: { pos: { x: -2, y: 0, z: 17 }, size: { x: 6, y: 0.4, z: 4 } } },

      // ducks own this town at night
      { type: 'duck', pos: { x: 0, y: 0, z: 6 }, patrol: [{ x: -5, y: 0, z: 6 }, { x: 5, y: 0, z: 6 }] },
      { type: 'duck', pos: { x: 2, y: 0, z: 20 }, patrol: [{ x: 2, y: 0, z: 20 }, { x: -4, y: 0, z: 26 }, { x: 4, y: 0, z: 28 }], speed: 2.8 },
      { type: 'duck', pos: { x: 14, y: 0, z: 18 }, patrol: [{ x: 12, y: 0, z: 15 }, { x: 20, y: 0, z: 21 }], speed: 3.2 },

      // the boba shop: shoot the jar sign to pop the door
      { type: 'switchTarget', id: 'jar1', pos: { x: 21, y: 3.8, z: 13 } },
      { type: 'door', id: 'shopdoor', pos: { x: 18.4, y: 1.4, z: 18 }, size: { x: 0.7, y: 2.8, z: 4 }, color: PAL.taroPurple },
      { type: 'weaponPickup', weapon: 'boba', pos: { x: 22.5, y: 0, z: 18 } },
      { type: 'sign', pos: { x: 20, y: 0, z: 10 }, lines: ['BOBA SHOP', 'opening: never'], fg: '#B388EB', yaw: 0.4 },
      { type: 'pearl', pos: { x: 24, y: 0.5, z: 15 } },
      { type: 'pearl', pos: { x: 24, y: 0.5, z: 21 } },

      // letter piece near the lit window
      { type: 'letterPiece', pos: { x: -6.5, y: 0.5, z: 8 } },

      // secret: behind the billboard
      { type: 'secretWall', pos: { x: -13, y: 1.6, z: -9.6 }, size: { x: 8, y: 3.2, z: 0.8 }, color: B },
      { type: 'polaroid', pos: { x: -13, y: 1.3, z: -16 }, photo: 'assets/photos/couple_mirror2.jpeg' },
      { type: 'goldenDuck', id: 5, pos: { x: -16, y: 0.4, z: -16 } },
      { type: 'pearl', pos: { x: -10, y: 0.5, z: -16 } },
      { type: 'pearl', pos: { x: -12, y: 0.5, z: -17 } },

      // golden ducks: rooftop pounce-chain + whistle fetch
      { type: 'goldenDuck', id: 4, pos: { x: 11, y: 3, z: 2 } },
      { type: 'goldenDuck', id: 6, pos: { x: -11, y: 6, z: 8 }, needs: 'whistle' },

      // rooftop route: dumpster → awning → roof
      { type: 'carry', id: 'block1', pos: { x: 7, y: 0, z: -3 }, kind: 'block', weight: 2 },

      // pearls
      { type: 'pearl', pos: { x: 0, y: 0.4, z: -18 } },
      { type: 'pearl', pos: { x: -2, y: 0.4, z: 0 } },
      { type: 'pearl', pos: { x: 3, y: 0.4, z: 14 } },
      { type: 'pearl', pos: { x: 0, y: 0.4, z: 28 } },
      { type: 'pearl', pos: { x: 11, y: 3.2, z: 0 } },
    ],
  };
}
