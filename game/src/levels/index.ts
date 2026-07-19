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

export const LEVELS: Record<string, (ctx: GameContext) => Scene> = {
  ch1: (ctx) => new PlayScene(ctx, ch1()),
  ch2: (ctx) => new PlayScene(ctx, ch2()),
  ch3: (ctx) => new PlayScene(ctx, ch3()),
  ch4: (ctx) => new BeachScene(ctx),
  ch5: (ctx) => new DockScene(ctx),
  ch6: (ctx) => new ForestScene(ctx),
};
