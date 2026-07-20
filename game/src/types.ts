// Shared typed schemas: level data, colliders, save file.

import type { KeyBindings } from './controls';

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export type PrimKind = 'box' | 'ramp' | 'cylinder';

/** A solid, visible, collidable chunk of level geometry. */
export interface Prim {
  kind: PrimKind;
  pos: Vec3;
  /** box: w/h/d. cylinder: w=diameter, h=height. ramp: rises along +z before yaw. */
  size: Vec3;
  color: number;
  yaw?: number;
  /** visual only — no collider (decor). */
  ghost?: boolean;
  /** collider only — invisible wall. */
  invisible?: boolean;
  emissive?: number;
  emissiveIntensity?: number;
}

export type EntityDef =
  | { type: 'spawn'; pos: Vec3; yaw?: number }
  | { type: 'goal'; pos: Vec3; /** puzzle gate required before completion */ requires?: string }
  | { type: 'letterPiece'; pos: Vec3 }
  | { type: 'goldenDuck'; id: number; pos: Vec3; needs?: WeaponId }
  | { type: 'pearl'; pos: Vec3 }
  | { type: 'duck'; pos: Vec3; patrol?: Vec3[]; speed?: number }
  | { type: 'crab'; pos: Vec3; range?: number }
  | { type: 'wisp'; pos: Vec3; radius?: number }
  | { type: 'drone'; pos: Vec3 }
  | { type: 'hazard'; shape: { pos: Vec3; size: Vec3 }; kind: 'mud' | 'water' | 'thorns' | 'fall' }
  | { type: 'carry'; id: string; pos: Vec3; kind: 'dumbbell' | 'block' | 'mirrorShield' | 'coin' | 'key'; weight?: number; value?: number }
  | { type: 'plate'; id: string; pos: Vec3; needWeight?: number; exactWeight?: boolean }
  | { type: 'door'; id: string; pos: Vec3; size: Vec3; color?: number; needsKey?: boolean }
  | { type: 'lift'; id: string; pos: Vec3; size: Vec3; to: Vec3; color?: number }
  | { type: 'valve'; id: string; pos: Vec3 }
  | { type: 'rotor'; id: string; pos: Vec3; states: number; state?: number; kind: 'barrier' | 'mirror' }
  | { type: 'switchTarget'; id: string; pos: Vec3 }
  | { type: 'slot'; id: string; pos: Vec3; accepts: string }
  | { type: 'bobaSpot'; pos: Vec3 }
  | { type: 'secretWall'; pos: Vec3; size: Vec3; color: number }
  | { type: 'weaponPickup'; weapon: WeaponId; pos: Vec3 }
  | { type: 'sign'; pos: Vec3; lines: string[]; yaw?: number; fg?: string }
  | { type: 'polaroid'; pos: Vec3; photo: string; yaw?: number }
  | { type: 'interactZone'; id: string; pos: Vec3; radius: number; label: string };

export interface CameraZone {
  /** player inside this AABB → blend to this framing */
  min: Vec3;
  max: Vec3;
  /** camera offset from player in world axes */
  offset: Vec3;
  lookAhead?: number;
  fov?: number;
}

export type LogicRule =
  | { when: { plates: string[] }; open: string }   // all plates satisfied -> door/lift id active
  | { when: { switches: string[] }; open: string } // all switch targets hit
  | { when: { key: true }; open: string }          // player carries the key near the door
  | { when: { rotors: Record<string, number> }; open: string }        // each rotor at its target state
  | { when: { paidExact: { slot: string; amount: number } }; open: string }; // exact sum deposited

export interface LevelDef {
  id: string;
  name: string;
  tagline: string;
  /** persistent top-left objective line; use `\n` to split into steps */
  objective?: string;
  skyGlow: number;
  fogDensity?: number;
  prims: Prim[];
  entities: EntityDef[];
  cameraZones: CameraZone[];
  logic?: LogicRule[];
  /** default camera offset when no zone matches */
  cameraOffset: Vec3;
  parSeconds: number;
  bounds: { min: Vec3; max: Vec3 };
}

export type WeaponId = 'ball' | 'boba' | 'whistle' | 'ankh';

export type Medal = 'C' | 'B' | 'GOLD' | 'S';

export interface SaveData {
  v: number;
  chaptersDone: string[];
  pieces: string[];
  ducks: number[];
  weapons: WeaponId[];
  weaponTiers: Partial<Record<WeaponId, 1 | 2>>;
  grades: Record<string, { medal: Medal; bestScore: number; bestTime: number }>;
  pearls: number;
  gear: { owned: string[]; collar: string | null; charms: string[]; snacks: string[] };
  bountiesCleared: number;
  secrets: Record<string, boolean>;
  muted: boolean;
  tier: 'ultra' | 'mobile' | null;
  settings: {
    brightness: number;   // renderer exposure, 0.7–2.4 (1.0 = neutral)
    bloom: boolean;       // neon glow post-processing
    musicVolume: number;  // 0–1
    keyBindings: KeyBindings;
  };
}
