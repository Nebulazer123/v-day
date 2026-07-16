/* ============================================================
   eastereggs.js — hidden goodies sprinkled everywhere.
   - type secret words anywhere (desktop) for themed reactions
   - a rare duck flies across the screen; tap/click it for a jackpot
   - long-press the ♥ LAINIE.EXE logo (mobile-friendly) for a heart burst
   Self-contained; uses App.toast / App.confetti / App.audio only.
   ============================================================ */
(function () {
  'use strict';
  if (!window.App) return;
  const U = App.util;

  function toast(m) { if (App.toast) App.toast(m); }
  function confettiCenter(n) { if (App.confetti) App.confetti(n || 24, 0.5, 0.4); }
  function quack(times) {
    for (let i = 0; i < (times || 1); i++) setTimeout(() => App.audio.play('quack', { rate: 0.9 + i * 0.15 }), i * 130);
  }

  /* ---------------- secret words (type anywhere) ---------------- */
  const WORDS = {
    duck:   () => { quack(3); confettiCenter(20); toast('🦆 CLASSIFIED: it was always the ducks.'); flyDuck(); },
    ducks:  () => WORDS.duck(),
    bentley:() => { App.audio.play('bark'); setTimeout(() => App.audio.play('bark', { rate: 1.2 }), 150); toast('BOOF. (Bentley heard you. tail: wagging.)'); },
    corbin: () => { App.audio.play('boing'); confettiCenter(24); toast("loading Corbin's ego… 200% and climbing."); },
    lainie: () => { App.audio.play('ding'); confettiCenter(30); toast('the site already knew it was you. 💛'); },
    ramen:  () => { App.audio.play('ding'); toast('🍜 +1 comfort. balanced diet (ours).'); },
    boba:   () => { App.audio.play('coin'); toast('🧋 +1 serotonin. 0 boba shops in Lincoln, though.'); },
    edward: () => { App.audio.play('sparkle'); toast('he sparkles. that is not a personality.'); },
    ankh:   () => { App.audio.play('error'); toast('the safety-pin tattoo says hi. (she still hates it.)'); },
    corvette:() => { App.audio.play('coin', { rate: 1.3 }); toast("dad's silver C7 has entered the chat. VROOM."); },
    lincoln:() => { App.audio.play('wrong'); toast('population: small. exits: one. you took it.'); },
    '1947': () => { App.audio.play('ding'); toast('grandma-form confirmed. she says SPEAK UP.'); },
  };
  const maxLen = Math.max.apply(null, Object.keys(WORDS).map((w) => w.length));
  let buf = '';
  window.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key && e.key.length === 1 && /[a-z0-9]/i.test(e.key)) {
      buf = (buf + e.key.toLowerCase()).slice(-maxLen);
      for (const w in WORDS) {
        if (buf.endsWith(w)) { WORDS[w](); buf = ''; break; }
      }
    }
  });

  /* ---------------- the rare flying duck (tap for jackpot) ---------------- */
  let duckEl = null;
  function flyDuck() {
    if (duckEl) return; // one at a time
    duckEl = document.createElement('button');
    duckEl.type = 'button';
    duckEl.setAttribute('aria-label', 'a suspicious duck');
    duckEl.textContent = '🦆';
    Object.assign(duckEl.style, {
      position: 'fixed', zIndex: '65', left: '-60px',
      top: (10 + Math.random() * 55) + 'vh',
      fontSize: (20 + Math.random() * 16) + 'px', background: 'none', border: 'none',
      cursor: 'pointer', padding: '6px', lineHeight: '1', filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.4))',
      transition: 'left 6.5s linear', pointerEvents: 'auto',
    });
    let caught = false;
    const win = () => {
      if (caught) return; caught = true;
      quack(3); confettiCenter(40);
      toast(U.pick([
        'you caught the duck. it caught you first. +∞',
        'DUCK SECURED. the government is not happy.',
        'you found the duck that controls everything. shhh.',
      ]));
      cleanup();
    };
    duckEl.addEventListener('click', win);
    document.body.appendChild(duckEl);
    // fly across
    requestAnimationFrame(() => { void duckEl.offsetWidth; duckEl.style.left = '105vw'; });
    const rm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (rm) duckEl.style.transition = 'none';
    const t = setTimeout(cleanup, rm ? 3000 : 7000);
    function cleanup() { clearTimeout(t); if (duckEl && duckEl.parentNode) duckEl.remove(); duckEl = null; }
  }
  // a duck wanders by on its own every 70–140s
  function scheduleDuck() {
    const delay = U.rand(70000, 140000);
    setTimeout(() => { flyDuck(); scheduleDuck(); }, delay);
  }
  App.ready(() => setTimeout(scheduleDuck, U.rand(25000, 50000)));

  /* ---------------- long-press the logo -> heart burst (mobile) ---------------- */
  App.ready(() => {
    const logo = document.getElementById('hud-logo');
    if (!logo) return;
    let timer = null;
    const start = () => { timer = setTimeout(() => {
      App.audio.play('boing'); confettiCenter(30);
      toast(U.pick(['💛', 'ok that tickles', 'the machine blushes']));
    }, 650); };
    const cancel = () => { if (timer) { clearTimeout(timer); timer = null; } };
    logo.addEventListener('pointerdown', start);
    logo.addEventListener('pointerup', cancel);
    logo.addEventListener('pointerleave', cancel);
  });
})();
