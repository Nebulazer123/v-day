import { describe, expect, it } from 'vitest';
import {
  actionForKeyCode,
  DEFAULT_KEY_BINDINGS,
  formatKeyCode,
  normalizeKeyBindings,
  rebindKey,
} from '../src/controls';

describe('keyboard controls', () => {
  it('defaults movement to WASD and camera control to all four arrows', () => {
    expect(DEFAULT_KEY_BINDINGS.moveUp).toBe('KeyW');
    expect(DEFAULT_KEY_BINDINGS.moveDown).toBe('KeyS');
    expect(DEFAULT_KEY_BINDINGS.moveLeft).toBe('KeyA');
    expect(DEFAULT_KEY_BINDINGS.moveRight).toBe('KeyD');
    expect(DEFAULT_KEY_BINDINGS.cameraLeft).toBe('ArrowLeft');
    expect(DEFAULT_KEY_BINDINGS.cameraRight).toBe('ArrowRight');
    expect(DEFAULT_KEY_BINDINGS.cameraIn).toBe('ArrowUp');
    expect(DEFAULT_KEY_BINDINGS.cameraOut).toBe('ArrowDown');
  });

  it('normalizes partial or malformed saved bindings against defaults', () => {
    const bindings = normalizeKeyBindings({
      moveUp: 'KeyI',
      fire: '',
      jump: 42,
      nope: 'KeyZ',
    });
    expect(bindings.moveUp).toBe('KeyI');
    expect(bindings.fire).toBe(DEFAULT_KEY_BINDINGS.fire);
    expect(bindings.jump).toBe(DEFAULT_KEY_BINDINGS.jump);
    expect(bindings).not.toHaveProperty('nope');
  });

  it('swaps conflicting keys so every action remains reachable', () => {
    const next = rebindKey(DEFAULT_KEY_BINDINGS, 'moveUp', 'KeyF');
    expect(next.moveUp).toBe('KeyF');
    expect(next.fire).toBe('KeyW');
    expect(new Set(Object.values(next)).size).toBe(Object.values(next).length);
  });

  it('formats browser key codes as compact menu labels', () => {
    expect(formatKeyCode('KeyW')).toBe('W');
    expect(formatKeyCode('ArrowLeft')).toBe('←');
    expect(formatKeyCode('Space')).toBe('SPACE');
    expect(formatKeyCode('ShiftLeft')).toBe('LEFT SHIFT');
  });

  it('keeps the equivalent right Shift and keypad Enter controls working', () => {
    expect(actionForKeyCode('ShiftRight', DEFAULT_KEY_BINDINGS)).toBe('pounce');
    expect(actionForKeyCode('NumpadEnter', DEFAULT_KEY_BINDINGS)).toBe('interact');
  });

  it('treats equivalent left/right keys as conflicts when rebinding', () => {
    const next = rebindKey(DEFAULT_KEY_BINDINGS, 'fire', 'ShiftRight');
    expect(next.fire).toBe('ShiftRight');
    expect(next.pounce).toBe('KeyF');
  });
});
