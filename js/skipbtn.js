/* ============================================================
   skipbtn.js — tiny dev/QA control: jumps to the next major
   section (gate -> loading -> quiz -> arcadehub -> finale -> gate).
   Self-contained, doesn't touch any other module. Low-key by
   design so it doesn't compete with the real experience.
   ============================================================ */
(function () {
  'use strict';
  if (!window.App) return;

  // Visible by default, on every device including the shared link.
  const ORDER = ['gate', 'loading', 'quiz', 'arcadehub', 'finale'];

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.id = 'dev-skip-btn';
  btn.textContent = '⏭';
  btn.title = 'skip to next section';
  btn.setAttribute('aria-label', 'skip to next section');
  // Docked top-center, compact (icon-only): every game's touch controls (move/joystick/
  // cast/mash/talk) live at the BOTTOM for thumb reach, and the HUD's logo + icon cluster
  // leave a narrow gap in the middle of the top bar — kept small so it clears that gap
  // even on the narrowest phones.
  Object.assign(btn.style, {
    position: 'fixed',
    top: 'max(4px, env(safe-area-inset-top))',
    left: '50%', transform: 'translateX(-50%)',
    zIndex: '999',
    fontFamily: "var(--font-system, 'VT323', monospace)", fontSize: '16px',
    width: '34px', height: '30px', padding: '0',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'rgba(20,34,74,0.7)', color: '#9BA3C9',
    border: '1px solid rgba(155,163,201,0.45)', borderRadius: '0 0 6px 6px',
    cursor: 'pointer', opacity: '0.55', transition: 'opacity 150ms ease',
    lineHeight: '1', userSelect: 'none', WebkitUserSelect: 'none',
    touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent',
  });
  btn.addEventListener('pointerenter', () => { btn.style.opacity = '1'; });
  btn.addEventListener('pointerleave', () => { btn.style.opacity = '0.55'; });
  btn.addEventListener('pointerdown', () => { btn.style.opacity = '1'; });

  btn.addEventListener('click', () => {
    const cur = App.router.current;
    let idx = ORDER.indexOf(cur);
    if (idx === -1) idx = -1; // unknown screen -> jump to first
    const next = ORDER[(idx + 1) % ORDER.length];
    if (App.audio) App.audio.play('click');
    App.router.show(next, { instant: true });
  });

  // Re-center in the actual gap between the HUD logo and icon cluster (not just viewport
  // center) so it can never overlap either side, on any screen width. Falls back to
  // viewport-center when the HUD isn't visible yet (gate screen).
  function reposition() {
    const left = document.querySelector('.hud__left');
    const right = document.querySelector('.hud__right');
    const hudVisible = document.getElementById('hud') && document.getElementById('hud').classList.contains('hud--visible');
    if (hudVisible && left && right) {
      const lr = left.getBoundingClientRect();
      const rr = right.getBoundingClientRect();
      const gapMid = (lr.right + rr.left) / 2;
      const clamped = Math.max(lr.right + 20, Math.min(rr.left - 20, gapMid));
      btn.style.left = clamped + 'px';
      btn.style.transform = 'translateX(-50%)';
    } else {
      btn.style.left = '50%';
      btn.style.transform = 'translateX(-50%)';
    }
  }
  window.addEventListener('resize', reposition);
  document.addEventListener('screen:show', () => setTimeout(reposition, 30));

  App.ready(() => { document.body.appendChild(btn); reposition(); });
})();
