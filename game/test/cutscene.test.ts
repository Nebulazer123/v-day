import { afterEach, describe, expect, it, vi } from 'vitest';
import { Cutscene } from '../src/cutscene';

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe('cutscene skip input', () => {
  it('captures skip events before gameplay input can queue them', () => {
    vi.useFakeTimers();
    const add = vi.fn();
    const remove = vi.fn();
    vi.stubGlobal('addEventListener', add);
    vi.stubGlobal('removeEventListener', remove);
    const camera = { cinematicControl: false };
    const cinema = {
      timeScale: 1,
      setCinematic: vi.fn(),
      flashWhite: vi.fn(),
    };
    const cutscene = new Cutscene(
      [], 1,
      camera as never,
      cinema as never,
      vi.fn()
    );
    vi.advanceTimersByTime(350);
    expect(add).toHaveBeenCalledWith('pointerdown', expect.any(Function), true);
    expect(add).toHaveBeenCalledWith('keydown', expect.any(Function), true);
    cutscene.finish();
    expect(remove).toHaveBeenCalledWith('pointerdown', expect.any(Function), true);
    expect(remove).toHaveBeenCalledWith('keydown', expect.any(Function), true);
  });
});
