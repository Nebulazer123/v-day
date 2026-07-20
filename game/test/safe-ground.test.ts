import { describe, expect, it } from 'vitest';
import { SafeGround } from '../src/safe-ground';

describe('SafeGround', () => {
  it('restores the latest confirmed ground position instead of the chapter spawn', () => {
    const safe = new SafeGround();
    safe.remember(1, 0, -2, 0.4);
    safe.remember(7, 2.5, 9, -1.1);

    expect(safe.position()).toEqual({ x: 7, y: 2.5, z: 9, yaw: -1.1 });
  });
});
