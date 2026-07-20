// Persisted keyboard bindings. Browser `code` values are used instead of
// localized key labels so the same physical key keeps the same action.

export const KEY_BINDING_ACTIONS = [
  'moveUp', 'moveDown', 'moveLeft', 'moveRight',
  'cameraLeft', 'cameraRight', 'cameraIn', 'cameraOut',
  'jump', 'pounce', 'interact', 'fire', 'pause',
  'weapon1', 'weapon2', 'weapon3', 'weapon4',
] as const;

export type KeyBindingAction = typeof KEY_BINDING_ACTIONS[number];
export type KeyBindings = Record<KeyBindingAction, string>;

export const DEFAULT_KEY_BINDINGS: KeyBindings = {
  moveUp: 'KeyW',
  moveDown: 'KeyS',
  moveLeft: 'KeyA',
  moveRight: 'KeyD',
  cameraLeft: 'ArrowLeft',
  cameraRight: 'ArrowRight',
  cameraIn: 'ArrowUp',
  cameraOut: 'ArrowDown',
  jump: 'Space',
  pounce: 'ShiftLeft',
  interact: 'Enter',
  fire: 'KeyF',
  pause: 'Escape',
  weapon1: 'Digit1',
  weapon2: 'Digit2',
  weapon3: 'Digit3',
  weapon4: 'Digit4',
};

export const KEY_BINDING_GROUPS: ReadonlyArray<{
  title: string;
  actions: ReadonlyArray<{ action: KeyBindingAction; label: string }>;
}> = [
  {
    title: 'MOVEMENT',
    actions: [
      { action: 'moveUp', label: 'MOVE FORWARD' },
      { action: 'moveDown', label: 'MOVE BACK' },
      { action: 'moveLeft', label: 'MOVE LEFT' },
      { action: 'moveRight', label: 'MOVE RIGHT' },
    ],
  },
  {
    title: 'CAMERA',
    actions: [
      { action: 'cameraLeft', label: 'ROTATE LEFT' },
      { action: 'cameraRight', label: 'ROTATE RIGHT' },
      { action: 'cameraIn', label: 'ZOOM IN' },
      { action: 'cameraOut', label: 'ZOOM OUT' },
    ],
  },
  {
    title: 'ACTIONS',
    actions: [
      { action: 'jump', label: 'JUMP' },
      { action: 'pounce', label: 'POUNCE / DASH' },
      { action: 'interact', label: 'INTERACT' },
      { action: 'fire', label: 'FIRE / HORN' },
      { action: 'pause', label: 'PAUSE' },
    ],
  },
  {
    title: 'WEAPONS',
    actions: [
      { action: 'weapon1', label: 'WEAPON SLOT 1' },
      { action: 'weapon2', label: 'WEAPON SLOT 2' },
      { action: 'weapon3', label: 'WEAPON SLOT 3' },
      { action: 'weapon4', label: 'WEAPON SLOT 4' },
    ],
  },
];

function isKeyCode(value: unknown): value is string {
  return typeof value === 'string' && /^[A-Za-z][A-Za-z0-9]{1,31}$/.test(value);
}

const EQUIVALENT_KEY_CODES: ReadonlyArray<ReadonlyArray<string>> = [
  ['ShiftLeft', 'ShiftRight'],
  ['Enter', 'NumpadEnter'],
];

function equivalentKeyCodes(a: string, b: string): boolean {
  return a === b || EQUIVALENT_KEY_CODES.some((family) => family.includes(a) && family.includes(b));
}

export function rebindKey(bindings: KeyBindings, action: KeyBindingAction, code: string): KeyBindings {
  const next = { ...bindings };
  const previousCode = next[action];
  const conflict = KEY_BINDING_ACTIONS.find(
    (candidate) => candidate !== action && equivalentKeyCodes(next[candidate], code)
  );
  next[action] = code;
  if (conflict) next[conflict] = previousCode;
  return next;
}

/** Merge saved values with defaults while keeping every action unique. */
export function normalizeKeyBindings(raw: unknown): KeyBindings {
  let next = { ...DEFAULT_KEY_BINDINGS };
  if (typeof raw !== 'object' || raw === null) return next;
  const values = raw as Record<string, unknown>;
  for (const action of KEY_BINDING_ACTIONS) {
    const code = values[action];
    if (isKeyCode(code)) next = rebindKey(next, action, code);
  }
  return next;
}

export function actionForKeyCode(code: string, bindings: KeyBindings): KeyBindingAction | null {
  return KEY_BINDING_ACTIONS.find((action) => equivalentKeyCodes(bindings[action], code)) ?? null;
}

export function formatKeyCode(code: string): string {
  const arrows: Record<string, string> = {
    ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→',
  };
  if (arrows[code]) return arrows[code];
  if (code.startsWith('Key')) return code.slice(3);
  if (code.startsWith('Digit')) return code.slice(5);
  if (code.startsWith('Numpad')) return `NUM ${code.slice(6).toUpperCase()}`;
  if (code === 'Space') return 'SPACE';
  if (code === 'ShiftLeft') return 'LEFT SHIFT';
  if (code === 'ShiftRight') return 'RIGHT SHIFT';
  if (code === 'ControlLeft') return 'LEFT CTRL';
  if (code === 'ControlRight') return 'RIGHT CTRL';
  return code.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase();
}
