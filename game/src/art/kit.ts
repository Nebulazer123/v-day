// Procedural asset kit. Every prop, character, and the hero car are built
// here from primitives with the shared toon materials, so all chapters are
// dressed from one cohesive kit.

import * as THREE from 'three';
import { PAL } from './palette';
import { mat, emissiveMat } from './toon';

// ---------------------------------------------------------------- helpers

function box(w: number, h: number, d: number, color: number, opts: Parameters<typeof mat>[1] = {}): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(color, opts));
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

function cyl(rt: number, rb: number, h: number, color: number, seg = 10, opts: Parameters<typeof mat>[1] = {}): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat(color, opts));
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

function sph(r: number, color: number, seg = 10, opts: Parameters<typeof mat>[1] = {}): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, seg, Math.max(6, seg - 2)), mat(color, opts));
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

export function canvasTexture(w: number, h: number, draw: (ctx: CanvasRenderingContext2D) => void): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d')!;
  draw(ctx);
  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 4;
  return tex;
}

// ---------------------------------------------------------------- Bentley

export interface BentleyRig {
  group: THREE.Group;
  earL: THREE.Object3D;
  earR: THREE.Object3D;
  tail: THREE.Object3D;
  head: THREE.Object3D;
  body: THREE.Object3D;
  legs: THREE.Object3D[];
}

/**
 * Bentley — sculpted to match the real dog: red-fawn shepherd-mix coat with
 * a darker saddle, cream chest blaze and paws, the grey-black muzzle going
 * grizzled at the chin, amber eyes, a happy open-mouth smile with tongue,
 * big upright splayed ears with dusky inner-ear, a long bushy cream-tipped
 * tail, and his dark leather collar with the brass buckle and D-ring.
 * Smooth organic overlapping-volume build; same rig anchors as the original
 * blocky version so every animation, cosmetic, and camera framing holds.
 */
export function makeBentley(): BentleyRig {
  const group = new THREE.Group();
  const fur = { flatShading: false, rim: 0.16 } as const;
  const orb = (r: number, c: number, sx: number, sy: number, sz: number, x: number, y: number, z: number, parent: THREE.Object3D): THREE.Mesh => {
    const m = sph(r, c, 14, fur);
    m.scale.set(sx, sy, sz);
    m.position.set(x, y, z);
    parent.add(m);
    return m;
  };

  const body = new THREE.Group();

  // ---- torso: lean athletic barrel, deep chest sloping to the hips
  orb(0.24, PAL.bentley, 0.92, 1.0, 1.25, 0, 0.56, 0.18, body);        // chest barrel
  orb(0.21, PAL.bentley, 0.85, 0.9, 1.3, 0, 0.54, -0.08, body);        // ribcage → waist
  orb(0.22, PAL.bentley, 0.9, 1.0, 1.05, 0, 0.52, -0.32, body);        // hindquarters
  orb(0.2, PAL.bentleyEar, 0.84, 0.62, 1.55, 0, 0.66, -0.08, body);    // darker saddle wash on the back
  orb(0.16, PAL.bentleyCream, 0.78, 0.7, 1.5, 0, 0.42, 0.04, body);    // cream underside
  orb(0.11, PAL.bentleyCream, 0.72, 1.1, 0.5, 0, 0.48, 0.42, body);    // chest blaze

  // ---- neck + collar
  const neck = cyl(0.13, 0.18, 0.36, PAL.bentley, 12, fur);
  neck.rotation.x = -0.5;
  neck.position.set(0, 0.62, 0.4);
  body.add(neck);
  const collar = new THREE.Mesh(
    new THREE.TorusGeometry(0.165, 0.034, 8, 20),
    mat(PAL.collarLeather, { flatShading: false, gloss: 0.25, rim: 0.08 })
  );
  collar.rotation.x = Math.PI / 2 - 0.5;
  collar.position.set(0, 0.61, 0.42);
  body.add(collar);
  const buckle = box(0.06, 0.045, 0.022, PAL.collarBrass, { gloss: 0.7, flatShading: false });
  buckle.position.set(0.145, 0.63, 0.38);
  buckle.rotation.z = 0.5;
  body.add(buckle);
  const dring = new THREE.Mesh(
    new THREE.TorusGeometry(0.032, 0.01, 6, 14),
    mat(PAL.collarBrass, { gloss: 0.7, flatShading: false })
  );
  dring.position.set(0, 0.52, 0.5);
  body.add(dring);

  // ---- head (anchor unchanged: cosmetics + camera rely on it)
  const head = new THREE.Group();
  head.position.set(0, 0.72, 0.55);
  orb(0.2, PAL.bentley, 1.0, 0.92, 1.0, 0, 0.02, -0.02, head);         // skull
  orb(0.165, PAL.bentley, 1.02, 0.62, 0.9, 0, 0.12, 0.02, head);       // domed brow (blended in)
  orb(0.085, PAL.bentley, 1.0, 0.85, 0.9, 0.105, -0.06, 0.08, head);   // cheeks, tucked in
  orb(0.085, PAL.bentley, 1.0, 0.85, 0.9, -0.105, -0.06, 0.08, head);
  // muzzle: fawn bridge fading into the grey-black snout
  orb(0.105, PAL.bentley, 1.05, 0.75, 1.0, 0, 0.03, 0.13, head);
  const snout = cyl(0.075, 0.105, 0.24, PAL.bentleyMuzzle, 12, fur);
  snout.rotation.x = Math.PI / 2 + 0.06;
  snout.position.set(0, -0.015, 0.22, );
  head.add(snout);
  const nose = sph(0.05, 0x1c1a18, 12, { flatShading: false, gloss: 0.45, rim: 0.1 });
  nose.scale.set(1.2, 0.85, 0.9);
  nose.position.set(0, 0.015, 0.34);
  head.add(nose);
  // open smiling jaw: dark lips, grizzled grey chin, pink tongue
  orb(0.065, PAL.bentleyMuzzle, 1.05, 0.5, 1.15, 0, -0.09, 0.2, head);
  orb(0.055, PAL.bentleyGrizzle, 1.15, 0.6, 0.95, 0, -0.125, 0.235, head);
  const tongue = box(0.075, 0.016, 0.12, 0xe0839a, { flatShading: false, rim: 0.05 });
  tongue.rotation.x = 0.24;
  tongue.position.set(0, -0.068, 0.26, );
  head.add(tongue);
  // amber eyes with pupils inside dark rims
  for (const s of [-1, 1]) {
    const rimEye = sph(0.046, 0x2a2018, 12, fur);
    rimEye.scale.set(1.05, 1.05, 0.5);
    rimEye.position.set(0.1 * s, 0.065, 0.16);
    head.add(rimEye);
    const iris = sph(0.038, PAL.bentleyAmber, 12, { flatShading: false, gloss: 0.5, rim: 0.05 });
    iris.position.set(0.1 * s, 0.065, 0.172);
    head.add(iris);
    const pupil = sph(0.018, 0x0c0a08, 8, { flatShading: false, gloss: 0.8 });
    pupil.position.set(0.1 * s, 0.065, 0.203);
    head.add(pupil);
  }

  // THE EARS. Huge, upright, splayed — exactly like the photos.
  const mkEar = (side: number): THREE.Object3D => {
    const pivot = new THREE.Group();
    pivot.position.set(0.15 * side, 0.14, -0.04);
    // the run animation drives pivot.rotation.z = ±(0.5 + flap), a convention
    // from the old hanging-flap ears — an inner tilt group compensates so the
    // upright ears end up splayed OUTWARD ~0.3 rad like the real dog's
    const tilt = new THREE.Group();
    tilt.rotation.z = -0.8 * side;
    pivot.add(tilt);
    const shell = new THREE.Mesh(new THREE.ConeGeometry(0.105, 0.44, 12), mat(PAL.bentleyEar, fur));
    shell.castShadow = true;
    shell.scale.z = 0.5;
    shell.position.y = 0.21;
    tilt.add(shell);
    // inner ear: a flattened plate on the front face, tip kept below the shell's
    const inner = new THREE.Mesh(new THREE.ConeGeometry(0.062, 0.26, 10), mat(PAL.bentleyInnerEar, fur));
    inner.scale.z = 0.28;
    inner.position.set(0, 0.14, 0.042);
    tilt.add(inner);
    head.add(pivot);
    return pivot;
  };
  const earL = mkEar(1);
  const earR = mkEar(-1);
  body.add(head);

  // ---- legs: long jointed shepherd legs with cream paws (pivots unchanged)
  const legs: THREE.Object3D[] = [];
  for (const [x, z] of [[-0.15, 0.26], [0.15, 0.26], [-0.16, -0.32], [0.16, -0.32]] as const) {
    const hind = z < 0;
    const leg = new THREE.Group();
    leg.position.set(x, 0.42, z);
    if (hind) orb(0.11, PAL.bentley, 0.62, 1.3, 1.0, 0, -0.02, -0.02, leg); // thigh mass
    const upper = cyl(0.055, 0.068, 0.26, PAL.bentley, 10, fur);
    upper.position.y = -0.12;
    leg.add(upper);
    const lower = cyl(0.042, 0.052, 0.22, PAL.bentley, 10, fur);
    lower.position.y = -0.32;
    leg.add(lower);
    const paw = sph(0.058, PAL.bentleyCream, 10, fur);
    paw.scale.set(1.0, 0.55, 1.3);
    paw.position.set(0, -0.42, 0.025);
    leg.add(paw);
    body.add(leg);
    legs.push(leg);
  }

  // ---- long bushy tail, darker on top, cream tip (pivot unchanged)
  const tail = new THREE.Group();
  tail.position.set(0, 0.55, -0.48);
  const tailBase = cyl(0.045, 0.06, 0.22, PAL.bentley, 10, fur);
  tailBase.rotation.x = Math.PI / 2;
  tailBase.position.z = -0.1;
  tail.add(tailBase);
  orb(0.062, PAL.bentleyEar, 0.85, 0.85, 1.9, 0, 0, -0.24, tail);      // bushy middle, overlaps base
  orb(0.042, PAL.bentleyCream, 0.9, 0.9, 1.5, 0, -0.005, -0.4, tail);  // cream tip, overlaps middle
  tail.rotation.x = -0.7;
  body.add(tail);

  group.add(body);
  return { group, earL, earR, tail, head, body, legs };
}

// ---------------------------------------------------------------- the C6

export interface C6Rig {
  group: THREE.Group;
  wheels: THREE.Object3D[];
  frontWheelPivots: THREE.Object3D[];
  headlights: THREE.SpotLight[];
  taillights: THREE.Mesh[];
}

function carShell(
  sections: ReadonlyArray<readonly [z: number, halfWidth: number, centerY: number, halfHeight: number]>,
  material: THREE.Material,
): THREE.Mesh {
  const sides = 12;
  const positions: number[] = [];
  const indices: number[] = [];
  for (const [z, width, centerY, height] of sections) {
    for (let side = 0; side < sides; side++) {
      const angle = (side / sides) * Math.PI * 2;
      positions.push(Math.cos(angle) * width, centerY + Math.sin(angle) * height, z);
    }
  }
  for (let ring = 0; ring < sections.length - 1; ring++) {
    for (let side = 0; side < sides; side++) {
      const next = (side + 1) % sides;
      const a = ring * sides + side;
      const b = ring * sides + next;
      const c = (ring + 1) * sides + next;
      const d = (ring + 1) * sides + side;
      indices.push(a, b, d, b, c, d);
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

/**
 * Corbin's Victory Red Corvette C6. Low-poly but unmistakable: long nose,
 * cabin set back, short lip spoiler, four round Morimoto-red taillights,
 * quad exhaust. Nose points +Z. ~4.4 long, ~1.8 wide.
 */
export function makeC6(): C6Rig {
  const group = new THREE.Group();
  group.name = 'CorbinsVictoryRedC6';
  const paintMaterial = mat(PAL.victoryRed, {
    gloss: 0.92, rim: 0.42, flatShading: false,
    emissive: 0x390404, emissiveIntensity: 0.78,
  });
  const paint = { gloss: 0.92, rim: 0.42, flatShading: false, emissive: 0x390404, emissiveIntensity: 0.78 } as const;

  // A continuous, rounded C6 profile: short tail, wide rear haunches and a
  // long, low nose. Cross-sections are based on the supplied side/top sheet.
  const body = carShell([
    [-2.22, 0.76, 0.51, 0.28],
    [-1.86, 0.91, 0.54, 0.32],
    [-1.25, 0.96, 0.52, 0.34],
    [-0.30, 0.91, 0.50, 0.31],
    [0.78, 0.94, 0.48, 0.29],
    [1.58, 0.91, 0.46, 0.25],
    [2.28, 0.79, 0.43, 0.20],
    [2.72, 0.58, 0.40, 0.13],
  ], paintMaterial);
  body.name = 'sculpted-c6-body';
  group.add(body);

  // Crisp hood power bulge and front splitter keep the smooth shell readable.
  const hood = box(0.72, 0.055, 1.5, PAL.victoryRed, paint);
  hood.position.set(0, 0.72, 1.48);
  hood.rotation.x = -0.045;
  group.add(hood);
  const splitter = box(1.5, 0.055, 0.38, 0x0a0b10, { gloss: 0.35, flatShading: false });
  splitter.position.set(0, 0.23, 2.55);
  group.add(splitter);
  const grille = box(0.92, 0.16, 0.035, 0x05060a, { gloss: 0.2, flatShading: false });
  grille.position.set(0, 0.40, 2.72);
  group.add(grille);

  // Cabin: one rounded, dark greenhouse instead of stacked blocks. The C6's
  // fast windshield and long hatch glass are a major part of its silhouette.
  const glass = { gloss: 0.75, rim: 0.45, flatShading: false } as const;
  const canopy = carShell([
    [-1.31, 0.52, 0.80, 0.09],
    [-0.98, 0.65, 0.94, 0.20],
    [-0.48, 0.68, 1.01, 0.24],
    [0.02, 0.67, 0.99, 0.22],
    [0.42, 0.58, 0.86, 0.12],
  ], mat(0x0a111d, glass));
  canopy.name = 'c6-glass-canopy';
  group.add(canopy);
  const roofPanel = box(1.18, 0.035, 0.54, 0x070b13, { gloss: 0.8, flatShading: false });
  roofPanel.position.set(0, 1.245, -0.42);
  group.add(roofPanel);
  for (const x of [-0.69, 0.69]) {
    const mirror = box(0.22, 0.12, 0.28, PAL.victoryRed, paint);
    mirror.position.set(x, 0.87, 0.18);
    mirror.rotation.y = x * -0.18;
    group.add(mirror);
  }

  // rear deck + SHORT lip spoiler (non-negotiable detail)
  const deck = box(1.76, 0.12, 0.68, PAL.victoryRed, paint);
  deck.position.set(0, 0.76, -1.82);
  group.add(deck);
  const spoiler = box(1.62, 0.075, 0.24, PAL.victoryRed, paint);
  spoiler.position.set(0, 0.91, -2.05);
  spoiler.rotation.x = -0.08;
  group.add(spoiler);
  for (const x of [-0.62, 0.62]) {
    const riser = box(0.1, 0.17, 0.11, PAL.victoryRed, paint);
    riser.position.set(x, 0.82, -1.98);
    group.add(riser);
  }

  // rear fascia panel with four round Morimoto taillights, flush-mounted
  const fascia = box(1.77, 0.38, 0.055, PAL.victoryRed, paint);
  fascia.position.set(0, 0.60, -2.20);
  group.add(fascia);
  const taillights: THREE.Mesh[] = [];
  for (const x of [-0.64, -0.31, 0.31, 0.64]) {
    const housing = new THREE.Mesh(new THREE.CylinderGeometry(0.145, 0.145, 0.035, 20), mat(0x21070a, { gloss: 0.5, flatShading: false }));
    housing.rotation.x = Math.PI / 2;
    housing.position.set(x, 0.63, -2.235);
    group.add(housing);
    const tl = new THREE.Mesh(new THREE.TorusGeometry(0.091, 0.027, 8, 20), emissiveMat(PAL.taillight, 1.25));
    tl.rotation.x = Math.PI / 2;
    tl.position.set(x, 0.63, -2.265);
    tl.name = 'round-taillight';
    group.add(tl);
    taillights.push(tl);
  }
  const diffuser = box(1.58, 0.18, 0.12, 0x0a0b10, { gloss: 0.28, flatShading: false });
  diffuser.position.set(0, 0.30, -2.20);
  group.add(diffuser);
  // quad exhaust, center-exit like the real car
  for (const x of [-0.24, -0.08, 0.08, 0.24]) {
    const ex = cyl(0.068, 0.068, 0.16, 0xc8cdd6, 14, { gloss: 0.8, flatShading: false });
    ex.rotation.x = Math.PI / 2;
    ex.position.set(x, 0.27, -2.27);
    ex.name = 'center-exhaust';
    group.add(ex);
  }

  // headlights
  const headlights: THREE.SpotLight[] = [];
  for (const x of [-0.55, 0.55]) {
    const lens = box(0.39, 0.075, 0.045, 0x536675, { gloss: 0.95, emissive: 0x263d4a, emissiveIntensity: 0.32, flatShading: false });
    lens.position.set(x, 0.55, 2.59);
    lens.rotation.y = x * -0.33;
    lens.name = 'swept-headlight-lens';
    group.add(lens);
    for (const [offset, radius] of [[-0.10, 0.052], [0, 0.06], [0.10, 0.046]] as const) {
      const projector = new THREE.Mesh(new THREE.SphereGeometry(radius, 10, 7), emissiveMat(0xfff4d6, 0.62));
      projector.position.set(x + offset * Math.sign(x), 0.555, 2.625);
      group.add(projector);
    }
    const spot = new THREE.SpotLight(0xfff2cc, 0, 40, 0.5, 0.45, 1.2);
    spot.position.set(x, 0.6, 2.68);
    spot.target.position.set(x * 1.2, 0, 14);
    group.add(spot, spot.target);
    headlights.push(spot);
  }
  for (const x of [-0.66, 0.66]) {
    const fog = box(0.24, 0.08, 0.04, 0x758892, { emissive: 0x9dbbc5, emissiveIntensity: 0.28, flatShading: false });
    fog.position.set(x, 0.34, 2.66);
    group.add(fog);
  }

  // wheels
  const wheels: THREE.Object3D[] = [];
  const frontWheelPivots: THREE.Object3D[] = [];
  for (const [x, z] of [[-0.85, 1.55], [0.85, 1.55], [-0.85, -1.45], [0.85, -1.45]] as const) {
    const pivot = new THREE.Group();
    const w = new THREE.Group();
    const tire = new THREE.Mesh(new THREE.TorusGeometry(0.285, 0.095, 10, 22), mat(0x080a0f, { rim: 0.12, flatShading: false }));
    tire.rotation.y = Math.PI / 2;
    tire.castShadow = true;
    w.add(tire);
    const hub = cyl(0.07, 0.07, 0.29, 0x9fa8b7, 12, { gloss: 0.85, flatShading: false });
    hub.rotation.z = Math.PI / 2;
    w.add(hub);
    for (let spoke = 0; spoke < 10; spoke++) {
      const arm = box(0.035, 0.045, 0.43, 0xcbd1dc, { gloss: 0.9, flatShading: false });
      arm.rotation.x = (spoke / 10) * Math.PI * 2;
      w.add(arm);
    }
    pivot.position.set(x, 0.38, z);
    pivot.add(w);
    group.add(pivot);
    wheels.push(w);
    if (z > 0) frontWheelPivots.push(pivot);
  }

  // license plate: LAINIE
  const plateTex = canvasTexture(128, 64, (ctx) => {
    ctx.fillStyle = '#e8e4d8';
    ctx.fillRect(0, 0, 128, 64);
    ctx.fillStyle = '#14224A';
    ctx.font = 'bold 34px "Space Grotesk", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('LAINIE', 64, 36);
  });
  const plate = new THREE.Mesh(
    new THREE.PlaneGeometry(0.44, 0.22),
    new THREE.MeshLambertMaterial({ map: plateTex })
  );
  plate.position.set(0, 0.32, -2.145);
  plate.rotation.y = Math.PI;
  group.add(plate);

  return { group, wheels, frontWheelPivots, headlights, taillights };
}

// ---------------------------------------------------------------- ducks

export interface DuckRig {
  group: THREE.Group;
  head: THREE.Object3D;
  wingL: THREE.Object3D;
  wingR: THREE.Object3D;
}

export function makeDuck(color: number = PAL.duck): DuckRig {
  const group = new THREE.Group();
  const body = sph(0.22, color, 10);
  body.scale.set(1, 0.85, 1.25);
  body.position.y = 0.24;
  group.add(body);
  const head = new THREE.Group();
  head.position.set(0, 0.5, 0.14);
  const skull = sph(0.13, color, 10);
  head.add(skull);
  const bill = box(0.12, 0.05, 0.14, PAL.duckBill);
  bill.position.set(0, -0.02, 0.15);
  head.add(bill);
  for (const s of [-1, 1]) {
    const eye = sph(0.025, 0x18120c, 6);
    eye.position.set(0.07 * s, 0.05, 0.09);
    head.add(eye);
  }
  group.add(head);
  const mkWing = (side: number): THREE.Object3D => {
    const pivot = new THREE.Group();
    pivot.position.set(0.2 * side, 0.28, 0);
    const w = box(0.06, 0.16, 0.3, color);
    w.position.y = -0.06;
    pivot.add(w);
    group.add(pivot);
    return pivot;
  };
  return { group, head, wingL: mkWing(1), wingR: mkWing(-1) };
}

// ------------------------------------------------------------- props kit

export function makeStreetlight(): THREE.Group {
  const g = new THREE.Group();
  const pole = cyl(0.06, 0.09, 5.4, 0x2a3352, 8);
  pole.position.y = 2.7;
  g.add(pole);
  const arm = box(0.1, 0.08, 1.6, 0x2a3352);
  arm.position.set(0, 5.3, 0.7);
  g.add(arm);
  const lamp = box(0.24, 0.1, 0.5, PAL.ramenGold, { emissive: PAL.ramenGold, emissiveIntensity: 1.8 });
  lamp.position.set(0, 5.22, 1.35);
  g.add(lamp);
  return g;
}

export function makeGuardrail(length: number): THREE.Group {
  const g = new THREE.Group();
  const rail = box(0.08, 0.3, length, 0x59617f, { gloss: 0.25, flatShading: false });
  rail.position.y = 0.62;
  g.add(rail);
  const n = Math.max(2, Math.round(length / 2.4));
  for (let i = 0; i < n; i++) {
    const post = box(0.1, 0.62, 0.12, 0x3a4468);
    post.position.set(0, 0.31, -length / 2 + (i + 0.5) * (length / n));
    g.add(post);
  }
  return g;
}

export function makePine(h = 4, tint = PAL.pine): THREE.Group {
  const g = new THREE.Group();
  const trunk = cyl(0.1, 0.16, h * 0.3, 0x3a2a1e, 7);
  trunk.position.y = h * 0.15;
  g.add(trunk);
  let y = h * 0.28;
  let r = h * 0.24;
  for (let i = 0; i < 3; i++) {
    const cone = new THREE.Mesh(new THREE.ConeGeometry(r, h * 0.32, 8), mat(tint));
    cone.castShadow = true;
    cone.position.y = y + h * 0.14;
    g.add(cone);
    y += h * 0.22;
    r *= 0.72;
  }
  return g;
}

/** Neon-style sign board with custom painted text. */
export function makeSign(lines: string[], opts: { w?: number; h?: number; bg?: string; fg?: string; glow?: number } = {}): THREE.Group {
  const w = opts.w ?? 3;
  const h = opts.h ?? 1.4;
  const tex = canvasTexture(512, Math.round((512 * h) / w), (ctx) => {
    const H = ctx.canvas.height;
    ctx.fillStyle = opts.bg ?? '#14224A';
    ctx.fillRect(0, 0, 512, H);
    ctx.strokeStyle = opts.fg ?? '#FF4D8D';
    ctx.lineWidth = 8;
    ctx.strokeRect(10, 10, 492, H - 20);
    ctx.fillStyle = opts.fg ?? '#FF4D8D';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const fs = Math.min(54, (H - 40) / lines.length - 6);
    ctx.font = `700 ${fs}px "Space Grotesk", sans-serif`;
    lines.forEach((line, i) => {
      ctx.fillText(line, 256, (H / (lines.length + 1)) * (i + 1) + 4);
    });
  });
  const g = new THREE.Group();
  const board = new THREE.Mesh(
    new THREE.PlaneGeometry(w, h),
    new THREE.MeshBasicMaterial({ map: tex })
  );
  board.position.y = 2.2;
  g.add(board);
  const glow = new THREE.PointLight(opts.glow ?? PAL.heartNeon, 6, 6);
  glow.position.set(0, 2.2, 0.4);
  g.add(glow);
  for (const s of [-1, 1]) {
    const post = cyl(0.05, 0.05, 2.2, 0x2a3352, 6);
    post.position.set((w / 2 - 0.2) * s, 1.1, 0);
    g.add(post);
  }
  return g;
}

/** A flat photo "polaroid" prop using one of the site's real photos. */
export function makePolaroid(url: string, w = 1.1): THREE.Group {
  const g = new THREE.Group();
  const frame = box(w, w * 1.16, 0.04, 0xf5f2e8, { rim: 0.1, flatShading: false });
  g.add(frame);
  const tex = new THREE.TextureLoader().load(url);
  tex.colorSpace = THREE.SRGBColorSpace;
  const photo = new THREE.Mesh(
    new THREE.PlaneGeometry(w * 0.86, w * 0.86),
    new THREE.MeshBasicMaterial({ map: tex })
  );
  photo.position.set(0, w * 0.07, 0.025);
  g.add(photo);
  return g;
}

export function makeHeartPiece(): THREE.Group {
  // a torn letter piece: white note with a neon heart wax seal
  const g = new THREE.Group();
  const paper = box(0.5, 0.02, 0.6, 0xf5f2e8, { rim: 0.05 });
  paper.rotation.z = 0.08;
  g.add(paper);
  const seal = cyl(0.09, 0.09, 0.05, PAL.heartNeon, 12, { emissive: PAL.heartNeon, emissiveIntensity: 1.4 });
  seal.position.y = 0.04;
  g.add(seal);
  return g;
}

export function makeGoldenDuck(): THREE.Group {
  const d = makeDuck(PAL.ramenGold);
  d.group.traverse((o) => {
    if (o instanceof THREE.Mesh && o.material instanceof THREE.MeshLambertMaterial) {
      o.material = mat(PAL.ramenGold, { emissive: PAL.ramenGold, emissiveIntensity: 0.5, gloss: 0.7, flatShading: false });
    }
  });
  return d.group;
}
