// The signature sky: layered midnight gradient dome + volumetric horizon
// glow + drifting star particles. One instance, retinted per chapter, and
// lerped in real time for the sunrise finale.

import * as THREE from 'three';
import { PAL } from './palette';

const SKY_VERT = /* glsl */ `
  varying vec3 vWorld;
  void main() {
    vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const SKY_FRAG = /* glsl */ `
  varying vec3 vWorld;
  uniform vec3 uTop;
  uniform vec3 uHorizon;
  uniform vec3 uGlow;
  uniform float uGlowStrength;
  uniform float uSun;         // 0 = night, 1 = full sunrise
  void main() {
    float h = clamp(normalize(vWorld).y, 0.0, 1.0);
    vec3 col = mix(uHorizon, uTop, pow(h, 0.55));
    // volumetric-ish horizon band
    float band = exp(-h * 6.0);
    col += uGlow * band * uGlowStrength;
    // sunrise: warm disc glow low on the horizon
    if (uSun > 0.001) {
      vec3 dir = normalize(vWorld);
      float d = max(dot(dir, normalize(vec3(0.0, 0.06, -1.0))), 0.0);
      col += uSun * (vec3(1.0, 0.72, 0.35) * pow(d, 18.0) * 2.2
                   + vec3(1.0, 0.5, 0.45) * pow(d, 4.0) * 0.6);
    }
    gl_FragColor = vec4(col, 1.0);
  }
`;

export interface SkyColors {
  top: number;
  horizon: number;
  glow: number;
  glowStrength?: number;
}

export class Sky {
  readonly group = new THREE.Group();
  private uniforms: Record<string, THREE.IUniform>;
  private stars: THREE.Points;
  private starMat: THREE.PointsMaterial;

  constructor() {
    this.uniforms = {
      uTop: { value: new THREE.Color(PAL.midnight) },
      uHorizon: { value: new THREE.Color(PAL.horizonGlow) },
      uGlow: { value: new THREE.Color(PAL.heartNeon) },
      uGlowStrength: { value: 0.22 },
      uSun: { value: 0 },
    };
    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(420, 24, 16),
      new THREE.ShaderMaterial({
        vertexShader: SKY_VERT,
        fragmentShader: SKY_FRAG,
        uniforms: this.uniforms,
        side: THREE.BackSide,
        depthWrite: false,
        fog: false,
      })
    );
    dome.renderOrder = -100;
    this.group.add(dome);

    // drifting stars
    const n = 700;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.acos(Math.random() * 0.85); // bias upward
      const r = 400;
      pos[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      pos[i * 3 + 1] = r * Math.cos(theta) + 10;
      pos[i * 3 + 2] = r * Math.sin(theta) * Math.sin(phi);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.starMat = new THREE.PointsMaterial({
      color: PAL.star, size: 1.6, sizeAttenuation: true,
      transparent: true, opacity: 0.85, fog: false, depthWrite: false,
    });
    this.stars = new THREE.Points(geo, this.starMat);
    this.stars.renderOrder = -99;
    this.group.add(this.stars);
  }

  set(colors: SkyColors): void {
    (this.uniforms.uTop.value as THREE.Color).setHex(colors.top);
    (this.uniforms.uHorizon.value as THREE.Color).setHex(colors.horizon);
    (this.uniforms.uGlow.value as THREE.Color).setHex(colors.glow);
    this.uniforms.uGlowStrength.value = colors.glowStrength ?? 0.22;
  }

  /** t in [0,1] — sunrise progress for the finale. */
  setSunrise(t: number): void {
    this.uniforms.uSun.value = t;
    const top = new THREE.Color(PAL.midnight).lerp(new THREE.Color(0x3a4f8f), t);
    const hor = new THREE.Color(PAL.horizonGlow).lerp(new THREE.Color(0xff9a52), t);
    (this.uniforms.uTop.value as THREE.Color).copy(top);
    (this.uniforms.uHorizon.value as THREE.Color).copy(hor);
    this.starMat.opacity = 0.85 * (1 - t);
  }

  update(dt: number): void {
    this.stars.rotation.y += dt * 0.004; // imperceptible drift, alive on long looks
  }
}
