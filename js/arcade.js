/* ============================================================
   arcade.js — Agent D
   Owns the single 'arcadehub' screen: attract mode -> coin drop ->
   level-select rail -> per-level intro/gameplay/win/lose skeleton.
   Levels self-register via App.arcade.register('lN', def); this file
   just runs them. See design/DESIGN_SPEC.md §6.1 and
   INTEGRATION.md "Arcade / levels contract".
   ============================================================ */
(function () {
  'use strict';
  if (!window.App) return;

  const U = App.util;
  const REDUCE_MOTION = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* ---------------- DOM skeleton ---------------- */
  const root = U.el('section', 'hub');
  root.innerHTML = `
    <div class="hub__view hub__view--attract" data-view="attract">
      <h1 class="hub__title" data-role="title">THE ESCAPE ARCADE</h1>
      <p class="hub__subtitle">objective: get out of Lincoln, Maine. by any means. even fishing.</p>
      <div class="hub__insertcoin" data-role="insertcoin">INSERT COIN</div>
    </div>
    <div class="hub__view hub__view--rail hidden" data-view="rail">
      <h2 class="hub__railtitle">THE ESCAPE ARCADE</h2>
      <div class="hub__rail" data-role="rail"></div>
      <p class="hub__progress" data-role="progress"></p>
    </div>
    <div class="hub__view hub__view--level hidden" data-role="levelview" data-view="level"></div>
  `;
  App.router.register('arcadehub', root);

  const viewEls = {
    attract: root.querySelector('[data-view="attract"]'),
    rail: root.querySelector('[data-view="rail"]'),
    level: root.querySelector('[data-view="level"]'),
  };
  const titleEl = root.querySelector('[data-role="title"]');
  const railEl = root.querySelector('[data-role="rail"]');
  const progressEl = root.querySelector('[data-role="progress"]');
  const levelViewEl = root.querySelector('[data-role="levelview"]');

  function showView(name) {
    Object.keys(viewEls).forEach((k) => viewEls[k].classList.toggle('hidden', k !== name));
  }

  /* ---------------- styles ---------------- */
  const style = document.createElement('style');
  style.textContent = `
    .hub{ position:relative; width:100%; height:100%; display:flex; flex-direction:column;
      align-items:center; justify-content:center; padding:var(--space-4) var(--space-3);
      box-sizing:border-box; overflow-y:auto; }
    .hub--shake{ animation: hubShake 200ms linear; }
    @keyframes hubShake{
      0%{transform:translate(0,0);} 20%{transform:translate(-3px,2px);}
      40%{transform:translate(3px,-2px);} 60%{transform:translate(-2px,3px);}
      80%{transform:translate(2px,-3px);} 100%{transform:translate(0,0);}
    }
    .hub__view{ width:100%; max-width:900px; display:flex; flex-direction:column; align-items:center; }
    .hub__view.hidden{ display:none; }
    .hub__view--attract{ min-height:60vh; justify-content:center; cursor:pointer; gap:var(--space-3); text-align:center; }
    .hub__title{ font-family:var(--font-arcade); color:var(--ramen-gold); font-size:22px;
      line-height:1.6; letter-spacing:1px; text-align:center; }
    .hub__flicker-letter{ display:inline-block; opacity:0; }
    .hub__flicker-letter.is-on{
      animation: hubFlickerIn 180ms steps(1) forwards;
    }
    @keyframes hubFlickerIn{
      0%{ opacity:0; } 40%{ opacity:1; } 60%{ opacity:0.3; } 100%{ opacity:1; }
    }
    .hub__subtitle{ font-family:var(--font-body); color:var(--star-dim); font-size:14px; max-width:520px; }
    .hub__insertcoin{ font-family:var(--font-arcade); color:var(--star-white); font-size:16px;
      margin-top:var(--space-4); }
    .hub__insertcoin.is-blinking{ animation: hubBlink 1100ms steps(1) infinite; }
    @keyframes hubBlink{ 0%,63%{opacity:1;} 63.01%,100%{opacity:0;} }
    .hub__coin{ position:absolute; top:-10%; left:50%; width:20px; height:20px; border-radius:50%;
      background:var(--ramen-gold); border:3px solid var(--boba-pearl); transform:translate(-50%,0);
      transition:none; pointer-events:none; }
    .hub__coin.is-dropping{ transition: top 400ms cubic-bezier(0.4,0,1,1); top:48%; }
    .hub__railtitle{ font-family:var(--font-arcade); color:var(--ramen-gold); font-size:18px; margin-bottom:var(--space-4); text-align:center; }
    .hub__rail{ display:grid; grid-template-columns:repeat(2,1fr); gap:var(--space-3); width:100%; }
    @media (min-width:700px){ .hub__rail{ grid-template-columns:repeat(4,1fr); } }
    .hub__cabinet{ position:relative; font-family:var(--font-arcade); background:var(--dock-water);
      color:var(--star-white); border:var(--border-pixel); box-shadow:var(--shadow-btn);
      padding:var(--space-3) var(--space-2); min-height:120px; display:flex; flex-direction:column;
      align-items:center; justify-content:center; gap:8px; cursor:pointer; text-align:center; }
    .hub__cabinet:active{ transform:translate(3px,3px); box-shadow:var(--shadow-btn-press); }
    .hub__cabinet--locked{ filter:grayscale(1) brightness(0.65); cursor:not-allowed; }
    .hub__cabinet--locked:active{ transform:none; box-shadow:var(--shadow-btn); }
    .hub__cabinetnum{ font-size:9px; color:var(--star-dim); }
    .hub__cabinetname{ font-size:11px; line-height:1.5; }
    .hub__ribbon{ position:absolute; top:-8px; right:-8px; background:var(--ramen-gold); color:var(--boba-pearl);
      font-size:9px; padding:4px 6px; border:2px solid var(--boba-pearl); transform:rotate(6deg); }
    .hub__padlock{ position:absolute; top:6px; right:8px; font-size:14px; }
    .hub__progress{ margin-top:var(--space-4); font-family:var(--font-system); font-size:20px;
      color:var(--star-white); text-align:center; }
    .hub__view--level{ min-height:70vh; justify-content:flex-start; padding-top:var(--space-3); }
    .hub__introcard, .hub__resultcard{ max-width:520px; width:100%; text-align:center;
      display:flex; flex-direction:column; gap:var(--space-3); align-items:center; }
    .hub__introlevel{ font-family:var(--font-arcade); color:var(--ramen-gold); font-size:16px; line-height:1.6; }
    .hub__tagline{ font-family:var(--font-body); font-weight:700; color:var(--star-white); font-size:15px; }
    .hub__introline{ font-family:var(--font-body); font-weight:700; color:var(--star-dim); font-size:14px; }
    .hub__controls{ font-family:var(--font-system); color:var(--crt-green); font-size:18px; }
    .hub__backlink{ font-family:var(--font-system); color:var(--star-dim); font-size:16px;
      background:none; border:none; cursor:pointer; text-decoration:underline; }
    .hub__resultheading{ font-family:var(--font-arcade); font-size:18px; line-height:1.6; }
    .hub__resultcard--win .hub__resultheading{ color:var(--ramen-gold); }
    .hub__resultcard--lose .hub__resultheading{ color:var(--heart-neon); }
    .hub__resultline{ font-family:var(--font-body); font-weight:700; color:var(--star-white); font-size:15px; }
    .hub__levelstage{ width:100%; min-height:60vh; display:flex; flex-direction:column;
      align-items:center; justify-content:center; }
  `;
  document.head.appendChild(style);

  /* ---------------- attract mode ---------------- */
  let coinInserted = false;
  let attractGen = 0;

  function playTitleFlicker() {
    const gen = ++attractGen;
    const text = 'THE ESCAPE ARCADE';
    titleEl.innerHTML = '';
    const insertCoinEl = root.querySelector('[data-role="insertcoin"]');
    insertCoinEl.classList.remove('is-blinking');
    if (REDUCE_MOTION) {
      titleEl.textContent = text;
      insertCoinEl.classList.add('is-blinking');
      return;
    }
    text.split('').forEach((ch, i) => {
      const span = document.createElement('span');
      span.className = 'hub__flicker-letter';
      span.textContent = ch === ' ' ? ' ' : ch;
      span.style.animationDelay = i * 60 + 'ms';
      titleEl.appendChild(span);
      setTimeout(() => {
        if (gen !== attractGen) return;
        span.classList.add('is-on');
        if ((i + 1) % 3 === 0) App.audio.play('blip');
      }, i * 60);
    });
    setTimeout(() => {
      if (gen !== attractGen) return;
      insertCoinEl.classList.add('is-blinking');
    }, text.length * 60 + 200);
  }

  function shakeScreen() {
    if (REDUCE_MOTION) return;
    root.classList.add('hub--shake');
    setTimeout(() => root.classList.remove('hub--shake'), 220);
  }

  function onAttractActivate() {
    if (coinInserted) return;
    coinInserted = true;
    App.audio.play('coin');
    shakeScreen();
    const coin = document.createElement('div');
    coin.className = 'hub__coin';
    viewEls.attract.appendChild(coin);
    requestAnimationFrame(() => {
      void coin.offsetWidth;
      coin.classList.add('is-dropping');
    });
    setTimeout(() => {
      coin.remove();
      renderRail();
      showView('rail');
    }, REDUCE_MOTION ? 0 : 420);
  }
  viewEls.attract.addEventListener('click', onAttractActivate);
  window.addEventListener('keydown', (e) => {
    if (App.router.current !== 'arcadehub') return;
    if (coinInserted) return;
    if (e.code === 'Enter' || e.code === 'Space') onAttractActivate();
  });

  function enterAttract() {
    coinInserted = false;
    showView('attract');
    playTitleFlicker();
  }

  /* ---------------- rail ---------------- */
  function isUnlocked(idx, orderArr) {
    if (idx === 0) return true;
    return App.arcade.isDone(orderArr[idx - 1]);
  }

  function renderRail() {
    const orderArr = App.arcade.order;
    railEl.innerHTML = '';
    orderArr.forEach((id, idx) => {
      const def = App.arcade.def(id);
      const done = App.arcade.isDone(id);
      const unlocked = isUnlocked(idx, orderArr);
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'hub__cabinet' + (unlocked ? '' : ' hub__cabinet--locked');
      card.innerHTML = `
        <div class="hub__cabinetnum">LEVEL ${idx + 1}</div>
        <div class="hub__cabinetname">${def ? def.title : id.toUpperCase()}</div>
        ${done ? '<div class="hub__ribbon">CLEAR!</div>' : ''}
        ${!unlocked ? '<div class="hub__padlock">🔒</div>' : ''}
      `;
      if (unlocked) {
        card.addEventListener('click', () => { App.audio.play('click'); openIntro(id); });
      } else {
        card.title = 'beat the previous level. no skipping. the ducks are watching.';
        card.setAttribute('aria-disabled', 'true');
        card.addEventListener('click', () => {
          App.audio.play('error');
          if (App.toast) App.toast('beat the previous level. no skipping. the ducks are watching.');
        });
      }
      railEl.appendChild(card);
    });
    renderProgress(orderArr);
  }

  function renderProgress(orderArr) {
    const total = orderArr.length || 4;
    const done = orderArr.filter((id) => App.arcade.isDone(id)).length;
    let hearts = '';
    for (let i = 0; i < total; i++) hearts += i < done ? '[♥]' : '[♡]';
    progressEl.textContent = `progress: ${hearts} — distance from Lincoln: growing`;
  }

  /* ---------------- intro card ---------------- */
  function openIntro(id) {
    const def = App.arcade.def(id);
    if (!def) return;
    const idx = App.arcade.order.indexOf(id);
    levelViewEl.innerHTML = '';
    const card = U.el('div', 'card hub__introcard');
    const lines = (def.intro && def.intro.lines) || [];
    card.innerHTML = `
      <div class="hub__introlevel">LEVEL ${idx + 1}: ${def.title || id.toUpperCase()}</div>
      ${def.tagline ? `<p class="hub__tagline">${def.tagline}</p>` : ''}
      ${lines.map((l) => `<p class="hub__introline">${l}</p>`).join('')}
      ${def.controls ? `<p class="hub__controls">controls: ${def.controls}</p>` : ''}
    `;
    const startBtn = document.createElement('button');
    startBtn.type = 'button';
    startBtn.className = 'btn hub__startbtn';
    startBtn.textContent = '[START]';
    startBtn.addEventListener('click', () => { App.audio.play('click'); startLevel(id); });
    card.appendChild(startBtn);

    const back = document.createElement('button');
    back.type = 'button';
    back.className = 'hub__backlink';
    back.textContent = '‹ back to arcade';
    back.addEventListener('click', () => { App.audio.play('blip'); backToRail(); });
    card.appendChild(back);

    levelViewEl.appendChild(card);
    showView('level');
  }

  /* ---------------- level runner ---------------- */
  function startLevel(id) {
    const def = App.arcade.def(id);
    if (!def || typeof def.mount !== 'function') return;
    levelViewEl.innerHTML = '';
    const stage = U.el('div', 'hub__levelstage');
    levelViewEl.appendChild(stage);
    showView('level');
    if (App.trail && typeof App.trail.pause === 'function') App.trail.pause();
    App.audio.play('levelstart');
    const api = {
      container: stage,
      win: (copy) => onLevelWin(id, def, copy),
      lose: (copy) => onLevelLose(id, def, copy),
      toast: (msg) => { if (App.toast) App.toast(msg); },
    };
    try { def.mount(stage, api); } catch (e) { console.error('level mount failed', id, e); }
  }

  function cleanupLevel(def) {
    try { if (def && typeof def.unmount === 'function') def.unmount(); } catch (e) { console.error(e); }
  }

  function onLevelWin(id, def, copy) {
    copy = copy || {};
    cleanupLevel(def);
    App.state.markLevel(id);
    App.audio.play('fanfare-win');
    if (App.confetti) App.confetti(80, 0.5, 0.4);
    const isLast = id === 'l4';
    showResultCard({
      type: 'win',
      heading: copy.heading || 'LEVEL CLEAR!',
      lines: copy.lines || [],
      buttonLabel: isLast ? '[CLAIM PRIZE →]' : '[CONTINUE]',
      onContinue: () => {
        if (isLast) { App.router.show('finale'); }
        else { backToRail(); }
      },
    });
  }

  function onLevelLose(id, def, copy) {
    copy = copy || {};
    cleanupLevel(def);
    App.audio.play('gameover');
    showResultCard({
      type: 'lose',
      heading: copy.heading || 'GAME OVER',
      lines: copy.lines || [],
      buttonLabel: '[RETRY]',
      onContinue: () => { startLevel(id); },
    });
  }

  function showResultCard({ type, heading, lines, buttonLabel, onContinue }) {
    levelViewEl.innerHTML = '';
    const card = U.el('div', `card hub__resultcard hub__resultcard--${type}`);
    const h = U.el('div', 'hub__resultheading', heading);
    card.appendChild(h);
    (lines || []).forEach((line) => card.appendChild(U.el('p', 'hub__resultline', line)));
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = type === 'win' ? 'btn btn--gold hub__resultbtn' : 'btn hub__resultbtn';
    btn.textContent = buttonLabel;
    btn.addEventListener('click', () => { App.audio.play('click'); onContinue(); });
    card.appendChild(btn);
    levelViewEl.appendChild(card);
    showView('level');
  }

  function backToRail() {
    if (App.trail && typeof App.trail.resume === 'function') App.trail.resume();
    renderRail();
    showView('rail');
  }

  /* ---------------- router wiring ---------------- */
  App.router.onShow('arcadehub', () => {
    if (coinInserted) {
      if (App.trail && typeof App.trail.resume === 'function') App.trail.resume();
      renderRail();
      showView('rail');
    } else {
      enterAttract();
    }
  });

  App.arcade.onStart((id) => {
    App.router.show('arcadehub', { instant: true });
    coinInserted = true;
    renderRail();
    openIntro(id);
  });
})();
