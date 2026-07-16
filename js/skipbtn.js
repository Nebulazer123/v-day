/* ============================================================
   skipbtn.js — tiny dev/QA control: jumps to the next major
   section (gate -> loading -> quiz -> arcadehub -> finale -> gate).
   Self-contained, doesn't touch any other module. Low-key by
   design so it doesn't compete with the real experience.
   ============================================================ */
(function () {
  'use strict';
  if (!window.App) return;

  const ORDER = ['gate', 'loading', 'quiz', 'arcadehub', 'finale'];

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.id = 'dev-skip-btn';
  btn.textContent = 'skip ▸';
  Object.assign(btn.style, {
    position: 'fixed', left: '8px', bottom: '8px', zIndex: '999',
    fontFamily: "var(--font-system, 'VT323', monospace)", fontSize: '13px',
    padding: '3px 10px', background: 'rgba(20,34,74,0.55)', color: '#9BA3C9',
    border: '1px solid rgba(155,163,201,0.45)', borderRadius: '0',
    cursor: 'pointer', opacity: '0.45', transition: 'opacity 150ms ease',
    lineHeight: '1.6', userSelect: 'none', WebkitUserSelect: 'none',
  });
  btn.addEventListener('pointerenter', () => { btn.style.opacity = '1'; });
  btn.addEventListener('pointerleave', () => { btn.style.opacity = '0.45'; });

  btn.addEventListener('click', () => {
    const cur = App.router.current;
    let idx = ORDER.indexOf(cur);
    if (idx === -1) idx = -1; // unknown screen -> jump to first
    const next = ORDER[(idx + 1) % ORDER.length];
    if (App.audio) App.audio.play('click');
    App.router.show(next, { instant: true });
  });

  App.ready(() => document.body.appendChild(btn));
})();
