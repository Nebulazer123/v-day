// Chapter registry: id → scene factory. The hub only needs the ids and
// completion order; everything else lives with each chapter.

import type { GameContext, Scene } from '../main';
import { PlayScene } from '../scenes/play';
import { BeachScene } from '../scenes/beach';
import { DockScene } from '../scenes/dock';
import { ForestScene } from '../scenes/forest';
import { ch1 } from './ch1';
import { ch2 } from './ch2';
import { ch3 } from './ch3';

export const LEVELS: Record<string, (ctx: GameContext, mods?: string[]) => Scene> = {
  ch1: (ctx, mods) => new PlayScene(ctx, ch1(), mods),
  ch2: (ctx, mods) => new PlayScene(ctx, ch2(), mods),
  ch3: (ctx, mods) => new PlayScene(ctx, ch3(), mods),
  ch4: (ctx, mods) => new BeachScene(ctx, mods),
  ch5: (ctx, mods) => new DockScene(ctx, mods),
  ch6: (ctx, mods) => new ForestScene(ctx, mods),
};
