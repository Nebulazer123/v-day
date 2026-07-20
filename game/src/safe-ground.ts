/**
 * The latest place Bentley was confirmed to be standing on solid ground.
 * Keeping this separate from the chapter spawn makes falls recoverable
 * without turning every hazard into a full level restart.
 */
export class SafeGround {
  private current = { x: 0, y: 0, z: 0, yaw: 0 };

  remember(x: number, y: number, z: number, yaw: number): void {
    this.current = { x, y, z, yaw };
  }

  position(): Readonly<{ x: number; y: number; z: number; yaw: number }> {
    return this.current;
  }
}
