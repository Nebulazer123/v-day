import * as THREE from 'three';
import { describe, expect, it } from 'vitest';
import { Gate } from '../src/interact';
import type { Player } from '../src/player';
import type { World } from '../src/world';

describe('moving lifts', () => {
  it('carries a rider standing on its top surface as it rises', () => {
    const world = {
      addCollider: <T,>(collider: T): T => collider,
    } as unknown as World;
    const lift = new Gate(
      'lift',
      new THREE.Vector3(0, 0.2, 0),
      new THREE.Vector3(2.6, 0.4, 2.6),
      0xffffff,
      false,
      world,
      true,
      new THREE.Vector3(0, 2.8, 0)
    );
    const rider = {
      pos: new THREE.Vector3(0, 0.4, 0),
      state: { grounded: true, vy: 0 },
      ridePlatform: (_deltaY: number): void => undefined,
    };
    rider.ridePlatform = (deltaY: number): void => { rider.pos.y += deltaY; };

    lift.open = true;
    const updateWithRider = (dt: number, target: Player): void => {
      (lift.update as unknown as (dt: number, target: Player) => void)(dt, target);
    };
    updateWithRider(1 / 60, rider as unknown as Player);

    expect(rider.pos.y).toBeGreaterThan(0.4);
    expect(rider.pos.y).toBeCloseTo(lift.obj.position.y + 0.2, 5);
  });
});
