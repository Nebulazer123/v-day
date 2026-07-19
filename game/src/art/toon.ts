// Gradient-ramp toon shading + rim light, injected into MeshLambertMaterial
// via onBeforeCompile so we keep Three's lighting/shadow pipeline and just
// restyle the response curve. One material factory for the whole game.

import * as THREE from 'three';

export interface ToonOptions {
  color: number;
  emissive?: number;
  emissiveIntensity?: number;
  rim?: number;           // rim light strength 0..1 (default 0.25)
  gloss?: number;         // 0 = matte, 1 = tight matcap-ish highlight (C6 paint)
  flatShading?: boolean;
  transparent?: boolean;
  opacity?: number;
}

export function toonMaterial(opts: ToonOptions): THREE.MeshLambertMaterial {
  const mat = new THREE.MeshLambertMaterial({
    color: opts.color,
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.emissiveIntensity ?? 1,
    flatShading: opts.flatShading ?? true,
    transparent: opts.transparent ?? false,
    opacity: opts.opacity ?? 1,
  });
  const rim = opts.rim ?? 0.25;
  const gloss = opts.gloss ?? 0;

  mat.onBeforeCompile = (shader) => {
    shader.uniforms.djRim = { value: rim };
    shader.uniforms.djGloss = { value: gloss };
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>\nuniform float djRim;\nuniform float djGloss;`
      )
      .replace(
        '#include <opaque_fragment>',
        /* glsl */ `
        {
          // rim light: view-facing falloff tinted toward the sky color
          vec3 dj_view = normalize(vViewPosition);
          float dj_fres = pow(1.0 - abs(dot(normalize(normal), dj_view)), 3.0);
          outgoingLight += dj_fres * djRim * vec3(0.45, 0.55, 0.9);
          // cheap tight specular for glossy paint
          if (djGloss > 0.001) {
            vec3 dj_h = normalize(dj_view + vec3(0.35, 0.85, 0.4));
            float dj_spec = pow(max(dot(normalize(normal), dj_h), 0.0), 90.0);
            outgoingLight += dj_spec * djGloss * vec3(1.0);
          }
        }
        #include <opaque_fragment>`
      );
  };
  // ensure a distinct program per rim/gloss combo
  mat.customProgramCacheKey = () => `dj-toon-${rim}-${gloss}`;
  return mat;
}

// Shared material cache so merged/instanced geometry batches well.
const cache = new Map<string, THREE.MeshLambertMaterial>();
export function mat(color: number, opts: Partial<ToonOptions> = {}): THREE.MeshLambertMaterial {
  const key = JSON.stringify([color, opts]);
  let m = cache.get(key);
  if (!m) {
    m = toonMaterial({ color, ...opts });
    cache.set(key, m);
  }
  return m;
}

export function emissiveMat(color: number, intensity = 1.6): THREE.MeshLambertMaterial {
  return mat(color, { emissive: color, emissiveIntensity: intensity, rim: 0 });
}
