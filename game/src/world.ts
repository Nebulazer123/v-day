// Level construction + collision. Prims are the single source of truth for
// both visuals and colliders. Static geometry is merged per material for
// draw-call economy; colliders are kept as cheap analytic shapes.

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import type { LevelDef, Prim, Vec3 } from './types';
import { mat } from './art/toon';

export interface BoxCollider {
  kind: 'box';
  center: THREE.Vector3;
  half: THREE.Vector3;
  yaw: number;
}

export interface RampCollider {
  kind: 'ramp';
  center: THREE.Vector3; // center of footprint at base height
  half: THREE.Vector3;   // footprint half extents; y = rise
  yaw: number;
}

export type Collider = (BoxCollider | RampCollider) & { tag?: string; enabled: boolean };

const v3 = (v: Vec3): THREE.Vector3 => new THREE.Vector3(v.x, v.y, v.z);

function primGeometry(p: Prim): THREE.BufferGeometry {
  if (p.kind === 'cylinder') {
    return new THREE.CylinderGeometry(p.size.x / 2, p.size.x / 2, p.size.y, 12);
  }
  if (p.kind === 'ramp') {
    // wedge rising toward +z
    const geo = new THREE.BufferGeometry();
    const w = p.size.x / 2, h = p.size.y, d = p.size.z / 2;
    const verts = new Float32Array([
      // bottom
      -w, 0, -d,  w, 0, -d,  w, 0, d,   -w, 0, -d,  w, 0, d,  -w, 0, d,
      // top slope
      -w, 0, -d, -w, h, d,  w, h, d,    -w, 0, -d,  w, h, d,  w, 0, -d,
      // back face (+z)
      -w, 0, d,  -w, h, d,  w, h, d,    -w, 0, d,   w, h, d,  w, 0, d,
      // sides
      -w, 0, -d, -w, 0, d, -w, h, d,
      w, 0, -d,  w, h, d,  w, 0, d,
    ]);
    geo.setAttribute('position', new THREE.BufferAttribute(verts, 3));
    geo.computeVertexNormals();
    return geo;
  }
  return new THREE.BoxGeometry(p.size.x, p.size.y, p.size.z);
}

export class World {
  readonly group = new THREE.Group();
  readonly colliders: Collider[] = [];

  constructor(def: LevelDef) {
    const byMat = new Map<string, THREE.BufferGeometry[]>();

    for (const p of def.prims) {
      if (!p.invisible) {
        const geo = primGeometry(p);
        // bake transform into geometry for merging
        const m = new THREE.Matrix4()
          .makeRotationY(p.yaw ?? 0)
          .setPosition(p.pos.x, p.pos.y + (p.kind === 'ramp' ? 0 : 0), p.pos.z);
        if (p.kind === 'box' || p.kind === 'cylinder') {
          // prims are positioned by their center
        }
        geo.applyMatrix4(m);
        const key = JSON.stringify([p.color, p.emissive ?? 0, p.emissiveIntensity ?? 0]);
        const list = byMat.get(key) ?? [];
        list.push(geo);
        byMat.set(key, list);
      }
      if (!p.ghost) {
        this.colliders.push(this.makeCollider(p));
      }
    }

    for (const [key, geos] of byMat) {
      const [color, emissive, emissiveIntensity] = JSON.parse(key) as [number, number, number];
      const merged = mergeGeometries(geos, false);
      if (!merged) continue;
      const mesh = new THREE.Mesh(
        merged,
        emissive
          ? mat(color, { emissive, emissiveIntensity })
          : mat(color)
      );
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.group.add(mesh);
      geos.forEach((g) => g.dispose());
    }
  }

  private makeCollider(p: Prim): Collider {
    if (p.kind === 'ramp') {
      return {
        kind: 'ramp',
        center: v3(p.pos),
        half: new THREE.Vector3(p.size.x / 2, p.size.y, p.size.z / 2),
        yaw: p.yaw ?? 0,
        enabled: true,
      };
    }
    // cylinders approximated by their bounding box (fine for our props)
    return {
      kind: 'box',
      center: v3({ x: p.pos.x, y: p.pos.y, z: p.pos.z }),
      half: new THREE.Vector3(p.size.x / 2, p.size.y / 2, p.size.z / 2),
      yaw: p.yaw ?? 0,
      enabled: true,
    };
  }

  addCollider(c: Collider): Collider {
    this.colliders.push(c);
    return c;
  }

  /**
   * Ground height under (x, z) considering all colliders below maxY.
   * Returns -Infinity if nothing below.
   */
  groundAt(x: number, z: number, maxY: number): number {
    let best = -Infinity;
    const p = new THREE.Vector3();
    for (const c of this.colliders) {
      if (!c.enabled) continue;
      p.set(x - c.center.x, 0, z - c.center.z);
      if (c.yaw) p.applyAxisAngle(UP, -c.yaw);
      if (Math.abs(p.x) > c.half.x || Math.abs(p.z) > c.half.z) continue;
      let top: number;
      if (c.kind === 'ramp') {
        const t = (p.z + c.half.z) / (c.half.z * 2); // 0 at low edge, 1 at high
        top = c.center.y + t * c.half.y;
      } else {
        top = c.center.y + c.half.y;
      }
      if (top <= maxY && top > best) best = top;
    }
    return best;
  }

  /** Push a capsule (radius r) out of walls horizontally. Mutates pos. */
  resolveWalls(pos: THREE.Vector3, r: number, height: number): void {
    const p = new THREE.Vector3();
    for (const c of this.colliders) {
      if (!c.enabled || c.kind === 'ramp') continue;
      const top = c.center.y + c.half.y;
      const bottom = c.center.y - c.half.y;
      // ignore floors below foot or ceilings above head
      if (top < pos.y + 0.3 || bottom > pos.y + height) continue;
      p.set(pos.x - c.center.x, 0, pos.z - c.center.z);
      if (c.yaw) p.applyAxisAngle(UP, -c.yaw);
      const dx = c.half.x + r - Math.abs(p.x);
      const dz = c.half.z + r - Math.abs(p.z);
      if (dx <= 0 || dz <= 0) continue;
      if (dx < dz) p.x += dx * Math.sign(p.x || 1);
      else p.z += dz * Math.sign(p.z || 1);
      if (c.yaw) p.applyAxisAngle(UP, c.yaw);
      pos.x = c.center.x + p.x;
      pos.z = c.center.z + p.z;
    }
  }
}

const UP = new THREE.Vector3(0, 1, 0);
