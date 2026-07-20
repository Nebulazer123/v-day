// THE HIGHWAY — hub level. A neon night highway strip: parked C6, chapter
// exits peeling off the shoulder, and Grandma's Diner hiding far behind you.

import type { LevelDef, Prim } from '../types';
import { PAL } from '../art/palette';

export const HIGHWAY_LENGTH = 250;
export const ROAD_HALF = 6;
export const EXIT_ENTRY_X = ROAD_HALF + 1.5;
export const EXIT_ROAD_COLOR = 0x15192b;

export interface ChapterExit {
  id: string;
  z: number;
  name: string;
  accent: number;
}

export const EXITS: ChapterExit[] = [
  { id: 'ch1', z: 45, name: 'THE GYM', accent: PAL.heartNeon },
  { id: 'ch2', z: 72, name: 'LINCOLN AFTER DARK', accent: PAL.lincolnMud },
  { id: 'ch3', z: 99, name: "HAYDEN'S TOLL BRIDGE", accent: PAL.ramenGold },
  { id: 'ch4', z: 126, name: 'THE BEACH', accent: PAL.sand },
  { id: 'ch5', z: 153, name: 'THE DOCK & STARS', accent: PAL.star },
  { id: 'ch6', z: 180, name: 'TWILIGHT FOREST', accent: PAL.crtGreen },
  { id: 'ch7', z: 207, name: 'SUNRISE POINT', accent: PAL.taroPurple },
];

export const DINER_Z = -62;

export function isAtChapterExit(x: number, z: number, exit: ChapterExit): boolean {
  return x > EXIT_ENTRY_X && Math.abs(z - exit.z) < 4;
}

export function hubDef(): LevelDef {
  const prims: Prim[] = [];

  // the road: one long strip + center dashes
  prims.push({
    kind: 'box',
    pos: { x: 0, y: -0.25, z: (HIGHWAY_LENGTH - 100) / 2 },
    size: { x: ROAD_HALF * 2 + 6, y: 0.5, z: HIGHWAY_LENGTH + 120 },
    color: PAL.asphalt,
  });
  for (let z = -70; z < HIGHWAY_LENGTH; z += 6) {
    prims.push({
      kind: 'box',
      pos: { x: 0, y: 0.01, z },
      size: { x: 0.22, y: 0.02, z: 2.6 },
      color: 0xbfc6de,
      ghost: true,
    });
  }
  // wide dark ground plane beyond the road
  prims.push({
    kind: 'box',
    pos: { x: 0, y: -0.6, z: 60 },
    size: { x: 220, y: 0.5, z: 420 },
    color: 0x0e1430,
    ghost: true,
  });

  // shoulder walk strips
  for (const s of [-1, 1]) {
    prims.push({
      kind: 'box',
      pos: { x: (ROAD_HALF + 1.6) * s, y: -0.2, z: (HIGHWAY_LENGTH - 100) / 2 },
      size: { x: 2.4, y: 0.6, z: HIGHWAY_LENGTH + 120 },
      color: PAL.concrete,
    });
  }

  // Actual side roads for every chapter. They extend far enough into the
  // landscape that choosing a level feels like taking an exit, while the
  // chapter trigger remains a small deterministic zone near the highway.
  for (const e of EXITS) {
    prims.push({
      kind: 'box',
      pos: { x: ROAD_HALF + 13, y: -0.30, z: e.z },
      size: { x: 28, y: 0.44, z: 10 },
      color: PAL.concrete,
    });
    prims.push({
      kind: 'box',
      pos: { x: ROAD_HALF + 13, y: -0.08, z: e.z },
      size: { x: 28, y: 0.18, z: 8 },
      color: EXIT_ROAD_COLOR,
    });
    for (let x = ROAD_HALF + 3; x < ROAD_HALF + 26; x += 5) {
      prims.push({
        kind: 'box',
        pos: { x, y: 0.025, z: e.z },
        size: { x: 2.6, y: 0.025, z: 0.18 },
        color: e.accent,
        emissive: e.accent,
        emissiveIntensity: 0.65,
        ghost: true,
      });
    }
    prims.push({
      kind: 'box',
      pos: { x: EXIT_ENTRY_X + 0.25, y: 0.04, z: e.z },
      size: { x: 0.25, y: 0.04, z: 7.2 },
      color: e.accent,
      emissive: e.accent,
      emissiveIntensity: 1.2,
      ghost: true,
    });
  }

  // diner pad + building behind the start
  prims.push({
    kind: 'box',
    pos: { x: -(ROAD_HALF + 8), y: -0.18, z: DINER_Z },
    size: { x: 14, y: 0.56, z: 16 },
    color: PAL.concrete,
  });
  prims.push({
    kind: 'box',
    pos: { x: -(ROAD_HALF + 10), y: 1.6, z: DINER_Z },
    size: { x: 7, y: 3.2, z: 10 },
    color: 0x2a3352,
  });

  return {
    id: 'hub',
    name: 'THE HIGHWAY',
    tagline: 'the ducks stole the letter. drive.',
    skyGlow: PAL.heartNeon,
    fogDensity: 0.011,
    prims,
    entities: [
      { type: 'spawn', pos: { x: -2, y: 0, z: 2 }, yaw: Math.PI / 2 },
    ],
    cameraZones: [],
    cameraOffset: { x: 0, y: 5.2, z: -7.5 },
    parSeconds: 0,
    bounds: {
      min: { x: -40, y: -10, z: -90 },
      max: { x: 40, y: 30, z: HIGHWAY_LENGTH + 20 },
    },
  };
}
