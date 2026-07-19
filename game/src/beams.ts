// Star-beam routing (CH5) — a beam marches from a source across the dock,
// reflecting off mirror rotors ('/' or '\' by state parity), and must land
// in the telescope. Pure path math + emissive segment rendering.

import * as THREE from 'three';
import { PAL } from './art/palette';
import { emissiveMat } from './art/toon';

export interface BeamMirror {
  pos: { x: number; z: number };
  /** even state = '/', odd state = '\' */
  state: number;
}

export type Dir = 'px' | 'nx' | 'pz' | 'nz';

const DIRS: Record<Dir, [number, number]> = { px: [1, 0], nx: [-1, 0], pz: [0, 1], nz: [0, -1] };

const SLASH: Record<Dir, Dir> = { pz: 'px', nz: 'nx', px: 'pz', nx: 'nz' };     // '/'
const BACKSLASH: Record<Dir, Dir> = { pz: 'nx', nz: 'px', px: 'nz', nx: 'pz' }; // '\'

export interface BeamPath {
  points: { x: number; z: number }[];
  hitTarget: boolean;
}

/**
 * March the beam. Mirrors reflect when the beam passes within `snap` of
 * their position along its travel axis. Target succeeds the same way.
 */
export function traceBeam(
  start: { x: number; z: number },
  dir: Dir,
  mirrors: BeamMirror[],
  target: { x: number; z: number },
  maxLen = 60,
  snap = 1.1
): BeamPath {
  const points = [{ ...start }];
  let cur = { ...start };
  let d = dir;
  const used = new Set<BeamMirror>();

  for (let bounce = 0; bounce < 12; bounce++) {
    const [dx, dz] = DIRS[d];
    // find nearest mirror or target along this ray
    let bestT = Infinity;
    let bestMirror: BeamMirror | null = null;
    for (const m of mirrors) {
      if (used.has(m)) continue;
      const relX = m.pos.x - cur.x;
      const relZ = m.pos.z - cur.z;
      const t = relX * dx + relZ * dz;          // distance along ray
      const off = Math.abs(relX * dz - relZ * dx); // perpendicular offset
      if (t > 0.4 && t < bestT && off < snap) {
        bestT = t;
        bestMirror = m;
      }
    }
    // target check on this segment
    {
      const relX = target.x - cur.x;
      const relZ = target.z - cur.z;
      const t = relX * dx + relZ * dz;
      const off = Math.abs(relX * dz - relZ * dx);
      if (t > 0.4 && off < snap && t < bestT) {
        points.push({ x: cur.x + dx * t, z: cur.z + dz * t });
        return { points, hitTarget: true };
      }
    }
    if (!bestMirror || bestT > maxLen) {
      points.push({ x: cur.x + dx * Math.min(maxLen, 24), z: cur.z + dz * Math.min(maxLen, 24) });
      return { points, hitTarget: false };
    }
    cur = { x: bestMirror.pos.x, z: bestMirror.pos.z };
    points.push({ ...cur });
    used.add(bestMirror);
    d = bestMirror.state % 2 === 0 ? SLASH[d] : BACKSLASH[d];
  }
  return { points, hitTarget: false };
}

/** Renders a BeamPath as glowing segments at a fixed height. */
export class BeamRenderer {
  readonly group = new THREE.Group();
  private segments: THREE.Mesh[] = [];

  constructor(private y: number, private color = PAL.star) {}

  render(path: BeamPath): void {
    // pool segments
    while (this.segments.length < path.points.length - 1) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.09, 1), emissiveMat(this.color, 2.4));
      this.group.add(m);
      this.segments.push(m);
    }
    for (let i = 0; i < this.segments.length; i++) {
      const seg = this.segments[i];
      if (i >= path.points.length - 1) {
        seg.visible = false;
        continue;
      }
      const a = path.points[i];
      const b = path.points[i + 1];
      const len = Math.hypot(b.x - a.x, b.z - a.z);
      seg.visible = len > 0.01;
      seg.scale.z = len;
      seg.position.set((a.x + b.x) / 2, this.y, (a.z + b.z) / 2);
      seg.rotation.y = Math.atan2(b.x - a.x, b.z - a.z);
    }
  }
}
