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

/** Low-poly caramel dog with comically huge ears. ~1 unit tall at head. */
export function makeBentley(): BentleyRig {
  const group = new THREE.Group();

  const body = new THREE.Group();
  const torso = box(0.62, 0.42, 0.95, PAL.bentley);
  torso.position.y = 0.42;
  body.add(torso);
  const chest = box(0.56, 0.34, 0.3, PAL.bentley);
  chest.position.set(0, 0.38, 0.45);
  body.add(chest);

  const head = new THREE.Group();
  head.position.set(0, 0.72, 0.55);
  const skull = box(0.46, 0.4, 0.42, PAL.bentley);
  head.add(skull);
  const muzzle = box(0.26, 0.2, 0.24, PAL.bentleyEar);
  muzzle.position.set(0, -0.08, 0.3);
  head.add(muzzle);
  const nose = box(0.1, 0.08, 0.06, 0x221a14);
  nose.position.set(0, -0.03, 0.44);
  head.add(nose);
  for (const s of [-1, 1]) {
    const eye = sph(0.045, 0x18120c, 8);
    eye.position.set(0.12 * s, 0.08, 0.22);
    head.add(eye);
  }

  // THE EARS. Huge. Scooby-Doo stunt-double huge.
  const mkEar = (side: number): THREE.Object3D => {
    const pivot = new THREE.Group();
    pivot.position.set(0.2 * side, 0.18, -0.02);
    const flap = box(0.1, 0.62, 0.3, PAL.bentleyEar);
    flap.position.y = -0.28;
    pivot.add(flap);
    pivot.rotation.z = 0.5 * side;
    head.add(pivot);
    return pivot;
  };
  const earL = mkEar(1);
  const earR = mkEar(-1);
  body.add(head);

  const legs: THREE.Object3D[] = [];
  for (const [x, z] of [[-0.22, 0.32], [0.22, 0.32], [-0.22, -0.34], [0.22, -0.34]] as const) {
    const leg = new THREE.Group();
    leg.position.set(x, 0.24, z);
    const bone = box(0.14, 0.34, 0.16, PAL.bentley);
    bone.position.y = -0.14;
    leg.add(bone);
    body.add(leg);
    legs.push(leg);
  }

  const tail = new THREE.Group();
  tail.position.set(0, 0.55, -0.48);
  const tailBone = box(0.09, 0.09, 0.34, PAL.bentleyEar);
  tailBone.position.z = -0.15;
  tail.add(tailBone);
  tail.rotation.x = -0.7;
  body.add(tail);

  group.add(body);
  return { group, earL, earR, tail, head, body, legs };
}

// ---------------------------------------------------------------- the C6

export interface C6Rig {
  group: THREE.Group;
  wheels: THREE.Object3D[];
  headlights: THREE.SpotLight[];
  taillights: THREE.Mesh[];
}

/**
 * Corbin's Victory Red Corvette C6. Low-poly but unmistakable: long nose,
 * cabin set back, short lip spoiler, four round Morimoto-red taillights,
 * quad exhaust. Nose points +Z. ~4.4 long, ~1.8 wide.
 */
export function makeC6(): C6Rig {
  const group = new THREE.Group();
  // slight self-glow so Victory Red stays red under midnight light
  const paint = { gloss: 0.85, rim: 0.35, flatShading: false, emissive: 0x4a0808, emissiveIntensity: 1 } as const;

  // main tub
  const tub = box(1.76, 0.42, 4.1, PAL.victoryRed, paint);
  tub.position.y = 0.5;
  group.add(tub);

  // long tapering nose
  const nose = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.86, 1.5, 4, 1), mat(PAL.victoryRed, paint));
  nose.geometry.rotateY(Math.PI / 4);
  nose.geometry.scale(1.42, 1, 0.5);
  nose.rotation.x = Math.PI / 2;
  nose.position.set(0, 0.48, 2.5);
  nose.castShadow = true;
  group.add(nose);

  // cabin: low greenhouse set rearward — tapered box + raked windshield
  const cabin = box(1.3, 0.34, 1.5, 0x1b2438, { gloss: 0.7, rim: 0.45, flatShading: false });
  cabin.position.set(0, 0.88, -0.5);
  group.add(cabin);
  const windshield = new THREE.Mesh(new THREE.CylinderGeometry(0.66, 0.66, 1.26, 3, 1), mat(0x1b2438, { gloss: 0.7, rim: 0.45, flatShading: false }));
  windshield.geometry.scale(1, 1, 0.42);
  windshield.rotation.z = Math.PI / 2;
  windshield.rotation.y = Math.PI / 2;
  windshield.position.set(0, 0.74, 0.42);
  windshield.castShadow = true;
  group.add(windshield);

  // rear deck + SHORT lip spoiler (non-negotiable detail)
  const deck = box(1.7, 0.16, 0.7, PAL.victoryRed, paint);
  deck.position.set(0, 0.66, -1.85);
  group.add(deck);
  const spoiler = box(1.5, 0.06, 0.18, PAL.victoryRed, paint);
  spoiler.position.set(0, 0.78, -2.08);
  group.add(spoiler);

  // Morimoto taillights: four round emissive reds
  const taillights: THREE.Mesh[] = [];
  for (const x of [-0.62, -0.28, 0.28, 0.62]) {
    const tl = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.05, 14), emissiveMat(PAL.taillight, 2.6));
    tl.rotation.x = Math.PI / 2;
    tl.position.set(x, 0.55, -2.12);
    group.add(tl);
    taillights.push(tl);
  }
  // quad exhaust, center-exit like the real car
  for (const x of [-0.24, -0.1, 0.1, 0.24]) {
    const ex = cyl(0.05, 0.05, 0.12, 0xc8cdd6, 10, { gloss: 0.5, flatShading: false });
    ex.rotation.x = Math.PI / 2;
    ex.position.set(x, 0.3, -2.1);
    group.add(ex);
  }

  // headlights
  const headlights: THREE.SpotLight[] = [];
  for (const x of [-0.55, 0.55]) {
    const lens = box(0.3, 0.09, 0.06, PAL.star, { emissive: PAL.star, emissiveIntensity: 1.2 });
    lens.position.set(x, 0.56, 2.94);
    group.add(lens);
    const spot = new THREE.SpotLight(0xfff2cc, 0, 40, 0.5, 0.45, 1.2);
    spot.position.set(x, 0.6, 2.9);
    spot.target.position.set(x * 1.2, 0, 14);
    group.add(spot, spot.target);
    headlights.push(spot);
  }

  // wheels
  const wheels: THREE.Object3D[] = [];
  for (const [x, z] of [[-0.85, 1.55], [0.85, 1.55], [-0.85, -1.45], [0.85, -1.45]] as const) {
    const w = new THREE.Group();
    const tire = cyl(0.36, 0.36, 0.26, 0x10131f, 14, { rim: 0.1, flatShading: false });
    tire.rotation.z = Math.PI / 2;
    w.add(tire);
    const cap = cyl(0.18, 0.18, 0.28, 0xc8cdd6, 8, { gloss: 0.6, flatShading: false });
    cap.rotation.z = Math.PI / 2;
    w.add(cap);
    w.position.set(x, 0.36, z);
    group.add(w);
    wheels.push(w);
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
    new THREE.PlaneGeometry(0.5, 0.25),
    new THREE.MeshBasicMaterial({ map: plateTex })
  );
  plate.position.set(0, 0.36, -2.145);
  plate.rotation.y = Math.PI;
  group.add(plate);

  return { group, wheels, headlights, taillights };
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
    new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide })
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
