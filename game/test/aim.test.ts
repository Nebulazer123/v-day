import * as THREE from 'three';
import { describe, expect, it } from 'vitest';
import { pointerAimDirection } from '../src/aim';

function camera(): THREE.PerspectiveCamera {
  const cam = new THREE.PerspectiveCamera(55, 16 / 9, 0.1, 100);
  cam.position.set(0, 10, 10);
  cam.lookAt(0, 0, 0);
  cam.updateMatrixWorld(true);
  return cam;
}

describe('mouse aiming', () => {
  it('aims through the center of the screen onto the player plane', () => {
    const dir = pointerAimDirection(camera(), { x: 0, y: 0 }, new THREE.Vector3(0, 0, 0));
    expect(dir).not.toBeNull();
    expect(Math.abs(dir!.x)).toBeLessThan(0.001);
    expect(dir!.z).toBeLessThan(-0.99);
    expect(dir!.y).toBe(0);
  });

  it('turns right when the pointer moves to the right side of the screen', () => {
    const dir = pointerAimDirection(camera(), { x: 0.7, y: 0 }, new THREE.Vector3(0, 0, 0));
    expect(dir).not.toBeNull();
    expect(dir!.x).toBeGreaterThan(0.2);
  });
});
