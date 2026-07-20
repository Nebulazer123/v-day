import { describe, expect, it } from 'vitest';
import { isPauseOverlayTarget } from '../src/input';

describe('input routing around pause menus', () => {
  it('does not capture keyboard defaults from inside the pause overlay', () => {
    const inMenu = { closest: (selector: string) => selector === '.dj-overlay' ? {} : null };
    const inGame = { closest: () => null };
    expect(isPauseOverlayTarget(inMenu as unknown as EventTarget)).toBe(true);
    expect(isPauseOverlayTarget(inGame as unknown as EventTarget)).toBe(false);
    expect(isPauseOverlayTarget(null)).toBe(false);
  });
});
