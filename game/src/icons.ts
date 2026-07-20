export type IconName =
  | 'play' | 'restart' | 'grid' | 'settings' | 'help' | 'back'
  | 'hint' | 'keyboard' | 'music' | 'pause' | 'sun' | 'sparkles'
  | 'monitor' | 'volume' | 'home';

const PATHS: Record<IconName, string> = {
  play: '<path d="M8 5l10 7-10 7V5z"/>',
  restart: '<path d="M4 10a8 8 0 1 1 2 7"/><path d="M4 4v6h6"/>',
  grid: '<rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1z"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.7 2c-1 .6-1.5 1.1-1.5 2.2"/><path d="M12 17h.01"/>',
  back: '<path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/>',
  hint: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M8.5 14.5A6 6 0 1 1 15.5 14.5C14.5 15.2 14 16 14 18h-4c0-2-.5-2.8-1.5-3.5z"/>',
  keyboard: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h.01M11 9h.01M15 9h.01M18 9h.01M7 13h.01M11 13h.01M15 13h3M8 16h8"/>',
  music: '<path d="M9 18V6l10-2v12"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/>',
  pause: '<path d="M9 5v14M15 5v14"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  sparkles: '<path d="M12 3l1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3zM6 14l.8 2.2L9 17l-2.2.8L6 20l-.8-2.2L3 17l2.2-.8L6 14zM18 13l.6 1.4L20 15l-1.4.6L18 17l-.6-1.4L16 15l1.4-.6L18 13z"/>',
  monitor: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  volume: '<path d="M5 10v4h3l4 4V6L8 10H5z"/><path d="M16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/>',
  home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/>',
};

export function iconSvg(name: IconName): string {
  return `<svg class="dj-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${PATHS[name]}</svg>`;
}

export function iconLabel(name: IconName, label: string): string {
  return `${iconSvg(name)}<span>${label}</span>`;
}
