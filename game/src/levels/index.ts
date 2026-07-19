import type { LevelDef } from '../types';
import { ch1 } from './ch1';

export const LEVELS: Record<string, () => LevelDef> = {
  ch1,
};
