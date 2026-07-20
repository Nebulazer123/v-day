import * as THREE from 'three';

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const plane = new THREE.Plane();
const target = new THREE.Vector3();
const up = new THREE.Vector3(0, 1, 0);

/** Turn a canvas pointer position into a horizontal world-space aim vector. */
export function pointerAimDirection(
  camera: THREE.PerspectiveCamera,
  ndc: { x: number; y: number },
  origin: THREE.Vector3
): THREE.Vector3 | null {
  pointer.set(ndc.x, ndc.y);
  raycaster.setFromCamera(pointer, camera);
  plane.setFromNormalAndCoplanarPoint(up, origin);
  const hit = raycaster.ray.intersectPlane(plane, target);
  let direction = hit
    ? target.clone().sub(origin)
    : raycaster.ray.direction.clone().setY(0);
  direction.y = 0;
  // The exact screen center often ray-hits the player's own origin. In that
  // case, keep aiming away from the camera instead of producing no direction.
  if (direction.lengthSq() < 0.0001) {
    direction = raycaster.ray.direction.clone().setY(0);
  }
  if (direction.lengthSq() < 0.0001) return null;
  return direction.normalize();
}
