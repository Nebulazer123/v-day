/* ============================================================
   finale.js — THE FINALE / THE GOTCHA. design/DESIGN_SPEC.md §7.
   The only sincere screen. Power-down -> 1500ms dark silence ->
   heartbeat -> real photo fade -> lowercase typed message with
   `gotcha.` alone after a 900ms pause. Do NOT add jokes past the
   scripted one. Registers screen 'finale'.
   ============================================================ */
(function () {
  'use strict';
  if (!window.App) return;
  const U = App.util;
  const REDUCE_MOTION = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  const photo = new Image();
  photo.src = 'assets/photos/couple_snow.jpeg';

  const style = document.createElement('style');
  style.textContent = `
    .finale{ position:fixed; inset:0; width:100%; height:100%; background:#05060c;
      display:flex; flex-direction:column; align-items:center; justify-content:center;
      gap:var(--space-4); padding:var(--space-5) var(--space-3); box-sizing:border-box; overflow:auto; }
    .finale__crt{ position:absolute; inset:0; background:#05060c; z-index:5; pointer-events:none; }
    .finale__crt.is-line{ background:transparent; }
    .finale__crt.is-line::after{ content:''; position:absolute; left:0; right:0; top:50%;
      height:3px; background:var(--star-white); box-shadow:0 0 18px 3px var(--star-white); transform:translateY(-50%); }
    .finale__photo{ opacity:0; transition:opacity 1200ms ease; background:#fff; padding:12px 12px 40px;
      transform:rotate(-2deg); box-shadow:0 18px 40px rgba(0,0,0,0.55); max-width:min(78vw,320px); }
    .finale__photo.is-in{ opacity:1; }
    .finale__photo img{ display:block; width:100%; height:auto; image-rendering:auto; }
    .finale__msg{ font-family:var(--font-body); font-weight:700; color:var(--star-white);
      font-size:16px; line-height:1.6; text-align:center; max-width:520px; white-space:pre-wrap;
      text-transform:lowercase; min-height:8em; }
    .finale__cursor::after{ content:'▌'; opacity:0.7; animation:finBlink 700ms steps(1) infinite; }
    @keyframes finBlink{ 0%,50%{opacity:0.7;} 50.01%,100%{opacity:0;} }
    .finale__sign{ font-family:var(--font-body); font-weight:800; }
    .finale__replaywrap{ opacity:0; transition:opacity 600ms ease; display:flex; flex-direction:column;
      align-items:center; gap:var(--space-2); }
    .finale__replaywrap.is-in{ opacity:1; }
    .finale__footer{ font-family:var(--font-arcade); font-size:8px; color:var(--star-dim);
      text-align:center; line-height:1.8; text-transform:lowercase; }
    @media (prefers-reduced-motion: reduce){ .finale__photo{ transition:opacity 400ms ease; } }
  `;
  document.head.appendChild(style);

  const el = U.el('section', 'finale');
  const crt = U.el('div', 'finale__crt');
  const photoFrame = U.el('div', 'finale__photo');
  const imgEl = document.createElement('img');
  imgEl.alt = 'us';
  imgEl.src = photo.src;
  photoFrame.appendChild(imgEl);
  const msgEl = U.el('div', 'finale__msg finale__cursor');
  const replayWrap = U.el('div', 'finale__replaywrap');
  const replayBtn = U.el('button', 'btn', '[replay the chaos ↺]');
  replayBtn.type = 'button';
  const footer = U.el('div', 'finale__footer',
    '© corbin &amp; the ducks · est. august 2023 · lincoln survivors club, members: 2 (+1 dog)');
  replayWrap.appendChild(replayBtn); replayWrap.appendChild(footer);
  el.appendChild(photoFrame); el.appendChild(msgEl); el.appendChild(replayWrap); el.appendChild(crt);
  App.router.register('finale', el);

  replayBtn.addEventListener('click', () => { App.audio.play('click'); App.router.show('arcadehub'); });

  // the message, in segments. `pause` = ms to wait BEFORE typing this segment.
  const MESSAGE = [
    { text: 'ok. troll over.\n\n', pause: 0 },
    { text: 'no dodging button this time. no ducks. just this:\n\n', pause: 400 },
    { text: 'from driving around til sunrise, to the dock, to whatever this website is —\n', pause: 500 },
    { text: 'you’re my favorite person, and i actually love you.\n\n', pause: 200 },
    { text: 'gotcha.\n\n', pause: 900 },
    { text: '— corbin', pause: 700 },
  ];

  let timers = [];
  function clearTimers() { timers.forEach((t) => clearTimeout(t)); timers = []; }
  function after(ms, fn) { const t = setTimeout(fn, ms); timers.push(t); return t; }

  function typeSegment(segIdx, done) {
    if (segIdx >= MESSAGE.length) { done(); return; }
    const seg = MESSAGE[segIdx];
    after(seg.pause, () => {
      let i = 0;
      const base = msgEl.textContent;
      const step = () => {
        i++;
        msgEl.textContent = base + seg.text.slice(0, i);
        if (i < seg.text.length) after(REDUCE_MOTION ? 0 : 40, step);
        else typeSegment(segIdx + 1, done);
      };
      step();
    });
  }

  function runSequence() {
    clearTimers();
    // hide the HUD for the sacred moment (restored on leave)
    const hud = document.getElementById('hud');
    if (hud) hud.style.display = 'none';
    // reset
    msgEl.textContent = '';
    msgEl.classList.add('finale__cursor');
    photoFrame.classList.remove('is-in');
    replayWrap.classList.remove('is-in');
    crt.className = 'finale__crt';
    App.music.stop();
    App.audio.play('powerdown');

    // 1) brief CRT collapse line, then black silence
    if (!REDUCE_MOTION) { crt.classList.add('is-line'); after(260, () => crt.classList.remove('is-line')); }
    // 1500ms of dark silence (the setup) — DO NOT shorten
    const SILENCE = REDUCE_MOTION ? 500 : 1500;
    after(SILENCE, () => {
      // 2) soft heartbeat x2 + photo fade in
      App.audio.play('heartbeat', { gain: 0.5 });
      after(700, () => App.audio.play('heartbeat', { gain: 0.5 }));
      crt.classList.remove('is-line');
      crt.style.background = 'transparent';
      photoFrame.classList.add('is-in');
      // 3) typed message begins after photo settles
      after(1300, () => {
        typeSegment(0, () => {
          msgEl.classList.remove('finale__cursor');
          after(2000, () => replayWrap.classList.add('is-in'));
        });
      });
    });
  }

  App.router.onShow('finale', runSequence);
  App.router.onHide('finale', () => {
    clearTimers();
    const hud = document.getElementById('hud');
    if (hud) hud.style.display = ''; // restore HUD when leaving (e.g. replay)
  });
})();
