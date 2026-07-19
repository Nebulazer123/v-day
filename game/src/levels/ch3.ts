// CHAPTER 3 — HAYDEN'S TOLL BRIDGE. "this dash will be invoiced."
// Puzzle: pay the toll in EXACT change (7 ⬤ per the posted invoice).
// Coins hide around the bridge — one in a jar you shoot down, one on the
// booth roof where Cole threw the ball. Hayden's drone re-collects any
// coin left lying around. Overpay → "NO REFUNDS." and the till resets.

import type { LevelDef, Prim } from '../types';
import { PAL } from '../art/palette';

export function ch3(): LevelDef {
  const prims: Prim[] = [];
  const F = 0x1c2340;

  // approach road, bridge deck over a gorge, far side
  prims.push({ kind: 'box', pos: { x: 0, y: -0.25, z: -12 }, size: { x: 18, y: 0.5, z: 24 }, color: F });
  prims.push({ kind: 'box', pos: { x: 0, y: -0.25, z: 12 }, size: { x: 8, y: 0.5, z: 24 }, color: PAL.concrete }); // the bridge
  prims.push({ kind: 'box', pos: { x: 0, y: -0.25, z: 32 }, size: { x: 14, y: 0.5, z: 16 }, color: F });
  // gorge water below the bridge
  prims.push({ kind: 'box', pos: { x: 0, y: -4, z: 12 }, size: { x: 60, y: 0.5, z: 24 }, color: PAL.dockWater, ghost: true });
  // bridge railings
  for (const s of [-1, 1]) {
    prims.push({ kind: 'box', pos: { x: 3.8 * s, y: 0.5, z: 12 }, size: { x: 0.4, y: 1, z: 24 }, color: 0x3a4468 });
  }
  // under-bridge secret shelf (drop from the deck edge, land on it)
  prims.push({ kind: 'box', pos: { x: 6.5, y: -2.2, z: 10 }, size: { x: 5, y: 0.4, z: 6 }, color: 0x2a3352 });

  // toll booth + roof (roof reachable: crates → railing → roof)
  prims.push({ kind: 'box', pos: { x: 3.4, y: 1.4, z: -1 }, size: { x: 2.6, y: 2.8, z: 2.6 }, color: 0x3a4468 });
  prims.push({ kind: 'box', pos: { x: 3.4, y: 3, z: -1 }, size: { x: 3.2, y: 0.3, z: 3.2 }, color: 0x59617f });
  // crates
  prims.push({ kind: 'box', pos: { x: 7, y: 0.5, z: -4 }, size: { x: 1.4, y: 1, z: 1.4 }, color: 0x4a3b28 });
  prims.push({ kind: 'box', pos: { x: 6, y: 1, z: -2 }, size: { x: 1.4, y: 2, z: 1.4 }, color: 0x4a3b28 });

  // jar pillar (shoot the jar off it)
  prims.push({ kind: 'cylinder', pos: { x: -6, y: 1.5, z: -6 }, size: { x: 1, y: 3, z: 1 }, color: 0x3a4468 });

  return {
    id: 'ch3',
    name: "HAYDEN'S TOLL BRIDGE",
    tagline: 'this dash will be invoiced.',
    skyGlow: PAL.ramenGold,
    fogDensity: 0.016,
    prims,
    cameraOffset: { x: 0, y: 7, z: -8.6 },
    cameraZones: [
      // side tracking shot crossing the bridge
      { min: { x: -4, y: -1, z: 2 }, max: { x: 4, y: 4, z: 24 }, offset: { x: -9, y: 4.5, z: 0 }, fov: 54 },
    ],
    parSeconds: 210,
    bounds: { min: { x: -20, y: -8, z: -26 }, max: { x: 20, y: 30, z: 42 } },
    logic: [
      { when: { paidExact: { slot: 'till', amount: 7 } }, open: 'tollgate' },
      { when: { switches: ['jar'] }, open: 'jarhatch' },
    ],
    entities: [
      { type: 'spawn', pos: { x: -3, y: 0, z: -20 }, yaw: 0 },
      { type: 'goal', pos: { x: 0, y: 0, z: 36 } },
      { type: 'sign', pos: { x: -5, y: 0, z: -3 }, lines: ['TOLL: 7 ⬤ EXACT', 'itemized: crossing 5,', 'convenience 1, vibes 1'], fg: '#FFB627' },
      { type: 'sign', pos: { x: 5.5, y: 0, z: -18 }, lines: ['HAYDEN LLC', 'no refunds. ever.'], yaw: Math.PI },

      // the till + gate
      { type: 'slot', id: 'till', pos: { x: 1.4, y: 0, z: -1 }, accepts: 'coin' },
      { type: 'door', id: 'tollgate', pos: { x: 0, y: 1.4, z: 1 }, size: { x: 7.4, y: 2.8, z: 0.6 }, color: PAL.ramenGold },

      // coins: 2+1 on the ground route, 2 in the jar, 2 on the booth roof
      { type: 'carry', id: 'c1', pos: { x: -6, y: 0, z: -14 }, kind: 'coin', weight: 0, value: 2 },
      { type: 'carry', id: 'c2', pos: { x: 6, y: 0, z: -10 }, kind: 'coin', weight: 0, value: 1 },
      { type: 'carry', id: 'c3', pos: { x: -6, y: 3.2, z: -6 }, kind: 'coin', weight: 0, value: 2 },
      { type: 'carry', id: 'c4', pos: { x: 3.4, y: 3.4, z: -1 }, kind: 'coin', weight: 0, value: 2 },
      // decoy value: overpay trap
      { type: 'carry', id: 'c5', pos: { x: 0, y: 0, z: -7 }, kind: 'coin', weight: 0, value: 5 },

      // jar: shooting it opens the pillar hatch and drops the coin (visual: hatch door)
      { type: 'switchTarget', id: 'jar', pos: { x: -6, y: 3.6, z: -6 } },
      { type: 'door', id: 'jarhatch', pos: { x: -6, y: 0.9, z: -5.2 }, size: { x: 1.2, y: 1.8, z: 0.3 }, color: 0x59617f },

      // Hayden's drone patrols the toll plaza re-collecting loose coins
      { type: 'drone', pos: { x: 0, y: 0, z: -6 } },

      // ducks on the far side
      { type: 'duck', pos: { x: -2, y: 0, z: 28 }, patrol: [{ x: -4, y: 0, z: 26 }, { x: 4, y: 0, z: 30 }] },
      { type: 'duck', pos: { x: 2, y: 0, z: 34 }, patrol: [{ x: 4, y: 0, z: 32 }, { x: -4, y: 0, z: 36 }], speed: 3 },

      // letter piece mid-bridge (the drone circles near it)
      { type: 'letterPiece', pos: { x: 0, y: 0.5, z: 12 } },

      // secret: Hayden's vault under the bridge
      { type: 'secretWall', pos: { x: 6.5, y: -1, z: 13.2 }, size: { x: 5, y: 2.2, z: 0.6 }, color: 0x2a3352 },
      { type: 'goldenDuck', id: 8, pos: { x: 6.5, y: -1.8, z: 8 } },
      { type: 'pearl', pos: { x: 5.5, y: -1.8, z: 9 } },
      { type: 'pearl', pos: { x: 7.5, y: -1.8, z: 9 } },
      { type: 'pearl', pos: { x: 6.5, y: -1.8, z: 11 } },
      { type: 'sign', pos: { x: 6.5, y: -2.2, z: 12 }, lines: ["HAYDEN'S VAULT", 'shhh.'], fg: '#FFB627' },

      // golden ducks: booth roof + ankh-gated on the gorge ledge
      { type: 'goldenDuck', id: 7, pos: { x: 3.4, y: 3.9, z: -1 } },
      { type: 'goldenDuck', id: 9, pos: { x: -8, y: -1.5, z: 16 }, needs: 'ankh' },

      // water hazard: falling off the bridge is cold
      { type: 'hazard', kind: 'water', shape: { pos: { x: 0, y: -3.6, z: 12 }, size: { x: 60, y: 1.4, z: 24 } } },

      // pearls
      { type: 'pearl', pos: { x: 0, y: 0.4, z: -16 } },
      { type: 'pearl', pos: { x: 2, y: 0.4, z: 6 } },
      { type: 'pearl', pos: { x: -2, y: 0.4, z: 18 } },
      { type: 'pearl', pos: { x: 0, y: 0.4, z: 26 } },
    ],
  };
}
