/* ============================================================
   level2_fishing.js — LEVEL 2: "BOBA & RAMEN FISHING"
   design/DESIGN_SPEC.md §6.3. Registers App.arcade.register('l2', def).
   Hold-to-aim swinging meter -> cast -> wait for bite -> tap in the
   ~700ms window. Catch table: boba/ramen/boot/SECRET DUCK. Quota 6.
   ============================================================ */
(function () {
  'use strict';
  if (!window.App) return;

  const U = App.util;
  const REDUCE_MOTION = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  const faceImg = new Image();
  let faceLoaded = false;
  faceImg.onload = () => { faceLoaded = true; };
  faceImg.src = 'assets/sprites/lainie_face.png';

  const VVW = 480, VVH = 300;
  const QUOTA = 8;
  const TIME_LIMIT = 55; // seconds
  const BITE_WINDOW = 0.45; // seconds to react — snappy

  let styleInjected = false;
  function injectStyle() {
    if (styleInjected) return;
    styleInjected = true;
    const s = document.createElement('style');
    s.textContent = `
      .l2__wrap{ width:100%; max-width:760px; margin:0 auto; display:flex; flex-direction:column;
        align-items:center; gap:var(--space-2); }
      .l2__stage{ position:relative; width:100%; aspect-ratio:${VVW}/${VVH};
        background:var(--midnight-drive); border:var(--border-pixel); box-shadow:var(--shadow-hard);
        overflow:hidden; touch-action:none; }
      .l2__canvas{ width:100%; height:100%; display:block; image-rendering:pixelated; }
      .l2__hud{ display:flex; justify-content:space-between; width:100%; font-family:var(--font-arcade);
        font-size:11px; color:var(--star-white); }
      .l2__cast{ width:100%; min-height:64px; font-family:var(--font-arcade); font-size:14px;
        background:var(--heart-neon); color:var(--star-white); border:var(--border-pixel);
        box-shadow:var(--shadow-btn); touch-action:none; user-select:none; -webkit-user-select:none; }
      .l2__cast:active{ transform:translate(3px,3px); box-shadow:var(--shadow-btn-press); }
      .l2__cast.is-bite{ background:var(--ramen-gold); color:var(--boba-pearl); animation:l2bite 220ms steps(1) infinite; }
      @keyframes l2bite{ 0%,50%{filter:brightness(1);} 50.01%,100%{filter:brightness(1.5);} }
    `;
    document.head.appendChild(s);
  }

  function getColors() {
    const cs = getComputedStyle(document.documentElement);
    const v = (n, fb) => (cs.getPropertyValue(n) || '').trim() || fb;
    return {
      sky: v('--midnight-drive', '#0B1026'), water: v('--dock-water', '#14224A'),
      starWhite: v('--star-white', '#F4F1E8'), starDim: v('--star-dim', '#9BA3C9'),
      heart: v('--heart-neon', '#FF4D8D'), gold: v('--ramen-gold', '#FFB627'),
      purple: v('--taro-purple', '#B388EB'), green: v('--crt-green', '#33FF88'),
      bobaBrown: v('--boba-brown', '#8C5A32'), bobaPearl: v('--boba-pearl', '#3B2417'),
      bentley: v('--bentley-caramel', '#D9A05B'), duck: v('--duck-yellow', '#FFD23F'),
    };
  }

  const BOOT_TOASTS = [
    "a boot. Lincoln's #1 export.",
    'another boot. someone out there is barefoot and free.',
  ];

  function rollCatch() {
    const r = Math.random();
    if (r < 0.34) return { type: 'boba', pts: 10 };
    if (r < 0.58) return { type: 'ramen', pts: 25 };
    if (r < 0.92) return { type: 'boot', pts: 0 };  // 34% junk now — dodge the boots
    return { type: 'duck', pts: 100 };
  }

  function mount(container, api) {
    injectStyle();
    const C = getColors();

    const wrap = U.el('div', 'l2__wrap');
    const hud = U.el('div', 'l2__hud');
    hud.innerHTML = `<span data-role="quota">CATCH: 0/${QUOTA}</span>
      <span data-role="score">SCORE: 0</span><span data-role="time">TIME: ${TIME_LIMIT}</span>`;
    const stage = U.el('div', 'l2__stage');
    const canvas = document.createElement('canvas');
    canvas.className = 'l2__canvas';
    stage.appendChild(canvas);
    const castBtn = document.createElement('button');
    castBtn.type = 'button';
    castBtn.className = 'l2__cast';
    castBtn.textContent = 'HOLD TO AIM';
    wrap.appendChild(hud); wrap.appendChild(stage); wrap.appendChild(castBtn);
    container.appendChild(wrap);

    const quotaEl = hud.querySelector('[data-role="quota"]');
    const scoreEl = hud.querySelector('[data-role="score"]');
    const timeEl = hud.querySelector('[data-role="time"]');

    const ctx = canvas.getContext('2d');
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = VVW * dpr; canvas.height = VVH * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = false;
    }
    resize();
    window.addEventListener('resize', resize);

    // stars
    const stars = [];
    for (let i = 0; i < 60; i++) stars.push({ x: Math.random() * VVW, y: Math.random() * (VVH * 0.5), r: Math.random() < 0.3 ? 2 : 1 });

    const WATER_Y = VVH * 0.52;
    let phase = 'aim';       // aim | cast | wait | bite | resolve
    let aimT = 0, aimDir = 1, power = 0;
    let bobX = 0, bobY = 0, targetX = 0, lineOut = 0;
    let waitTimer = 0, biteTimer = 0;
    let caught = 0, score = 0, timeLeft = TIME_LIMIT;
    let tailPhase = 0, flash = 0, popText = null, popTimer = 0;
    let holding = false, over = false;

    function setHud() {
      quotaEl.textContent = `CATCH: ${Math.min(caught, QUOTA)}/${QUOTA}`;
      scoreEl.textContent = `SCORE: ${score}`;
      timeEl.textContent = `TIME: ${Math.ceil(timeLeft)}`;
    }

    function startAim() {
      if (over) return;
      if (phase !== 'aim') return;
      holding = true;
      castBtn.textContent = 'RELEASE!';
    }
    function release() {
      if (over) return;
      if (phase === 'bite') { hook(); return; }
      if (phase !== 'aim' || !holding) return;
      holding = false;
      power = aimT;
      targetX = 150 + power * (VVW - 220);
      bobX = 96; bobY = VVH * 0.32; lineOut = 0;
      phase = 'cast';
      castBtn.textContent = '...';
      App.audio.play('cast');
    }
    function hook() {
      if (phase !== 'bite') return;
      const res = rollCatch();
      phase = 'resolve';
      castBtn.classList.remove('is-bite');
      if (res.type === 'boot') {
        popText = 'a boot 🥾'; App.audio.play('splash');
        api.toast(U.pick(BOOT_TOASTS));
      } else if (res.type === 'duck') {
        flash = 0.5; score += 100; caught = QUOTA;
        popText = 'SECRET DUCK! +100 🦆';
        App.audio.play('quack'); setTimeout(() => App.audio.play('quack'), 120); setTimeout(() => App.audio.play('quack', { rate: 1.2 }), 240);
        api.toast('you caught a duck. it caught you first. it lets you win this level.');
      } else {
        score += res.pts; caught += 1;
        popText = (res.type === 'boba' ? 'boba +10 🧋' : 'ramen +25 🍜');
        App.audio.play('catch');
      }
      popTimer = 1.1;
      setHud();
      setTimeout(() => {
        if (over) return;
        if (caught >= QUOTA) { win(); return; }
        phase = 'aim'; castBtn.textContent = 'HOLD TO AIM';
      }, 700);
    }
    function win() {
      if (over) return; over = true;
      api.win({ heading: 'LEVEL CLEAR!', lines: [
        'dinner secured: boba AND ramen. balanced diet (ours).',
        'the stars from this dock still go hard. just saying.',
      ] });
    }
    function lose() {
      if (over) return; over = true;
      api.lose({ heading: 'the fish voted no.', lines: [
        'even the boot got away. embarrassing for everyone.',
      ] });
    }

    // input
    castBtn.addEventListener('pointerdown', (e) => { e.preventDefault(); if (phase === 'bite') hook(); else startAim(); });
    castBtn.addEventListener('pointerup', (e) => { e.preventDefault(); release(); });
    castBtn.addEventListener('pointerleave', () => { if (holding) release(); });
    // tapping the water during bite also hooks
    stage.addEventListener('pointerdown', (e) => { e.preventDefault(); if (phase === 'bite') hook(); });
    function onKey(e) {
      if (App.router.current !== 'arcadehub') return;
      if (e.code === 'Space') {
        e.preventDefault();
        if (phase === 'bite') hook();
        else if (phase === 'aim') { if (!holding) startAim(); else release(); }
      }
    }
    window.addEventListener('keydown', onKey);

    // sprites
    function drawLainie(x, y) {
      // sitting body
      ctx.fillStyle = C.heart; ctx.fillRect(x - 8, y, 16, 16); // torso
      ctx.fillStyle = C.bobaPearl; ctx.fillRect(x - 8, y + 16, 6, 8); ctx.fillRect(x + 2, y + 16, 6, 8); // legs dangle
      // rod
      ctx.strokeStyle = C.bobaBrown; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(x + 6, y + 2); ctx.lineTo(x + 30, y - 12); ctx.stroke();
      // head (real face)
      const hs = 22;
      if (faceLoaded) ctx.drawImage(faceImg, x - hs / 2, y - hs + 2, hs, hs);
      else { ctx.fillStyle = C.starWhite; ctx.fillRect(x - hs / 2, y - hs + 2, hs, hs); }
      return { rodTipX: x + 30, rodTipY: y - 12 };
    }
    function drawBentley(x, y) {
      ctx.fillStyle = C.bentley;
      ctx.fillRect(x - 10, y, 20, 9); // body lying
      ctx.fillRect(x - 14, y - 4, 8, 8); // head
      // huge ear
      ctx.fillRect(x - 16, y - 8, 4, 8);
      // tail thump
      const tw = Math.sin(tailPhase) * 3;
      ctx.fillRect(x + 10, y + 2 - tw, 6, 3);
      // eye
      ctx.fillStyle = C.bobaPearl; ctx.fillRect(x - 12, y - 2, 2, 2);
    }
    function drawDuckStar(x, y) { // subtle
      ctx.fillStyle = C.duck; ctx.fillRect(x, y, 2, 2);
    }

    let raf = 0, last = performance.now();
    function frame(now) {
      const dt = Math.min((now - last) / 1000, 0.05); last = now;
      if (!over) {
        timeLeft -= dt;
        tailPhase += dt * 6;
        if (popTimer > 0) popTimer -= dt; else popText = null;
        if (flash > 0) flash -= dt;
        if (timeLeft <= 0) { timeLeft = 0; setHud(); lose(); }
        if (phase === 'aim' && holding) { aimT += aimDir * dt * 1.6; if (aimT > 1) { aimT = 1; aimDir = -1; } if (aimT < 0) { aimT = 0; aimDir = 1; } }
        else if (phase === 'cast') {
          lineOut += dt * 3.2;
          bobX = U.lerp(96, targetX, Math.min(lineOut, 1));
          bobY = U.lerp(VVH * 0.32, WATER_Y - 2, Math.min(lineOut, 1));
          if (lineOut >= 1) { phase = 'wait'; waitTimer = U.rand(0.8, 2.4); }
        } else if (phase === 'wait') {
          waitTimer -= dt;
          if (waitTimer <= 0) { phase = 'bite'; biteTimer = BITE_WINDOW; castBtn.textContent = 'TAP! 🎣'; castBtn.classList.add('is-bite'); App.audio.play('reel'); }
        } else if (phase === 'bite') {
          biteTimer -= dt;
          if (biteTimer <= 0) { // missed
            phase = 'aim'; castBtn.classList.remove('is-bite'); castBtn.textContent = 'HOLD TO AIM';
            api.toast('missed it. the fish laughed.'); App.audio.play('splash');
          }
        }
        setHud();
      }
      // ---- render ----
      ctx.fillStyle = C.sky; ctx.fillRect(0, 0, VVW, VVH);
      stars.forEach((s) => { ctx.fillStyle = C.starWhite; ctx.globalAlpha = 0.8; ctx.fillRect(s.x, s.y, s.r, s.r); });
      ctx.globalAlpha = 1;
      drawDuckStar(VVW * 0.7, VVH * 0.12);
      // water
      ctx.fillStyle = C.water; ctx.fillRect(0, WATER_Y, VVW, VVH - WATER_Y);
      // water shimmer lines
      ctx.fillStyle = 'rgba(255,255,255,0.06)';
      for (let i = 0; i < 6; i++) { const yy = WATER_Y + 12 + i * 18; ctx.fillRect(0, yy, VVW, 1); }
      // dock
      ctx.fillStyle = C.bobaBrown; ctx.fillRect(0, WATER_Y - 8, 120, 10);
      ctx.fillStyle = C.bobaPearl; for (let i = 0; i < 6; i++) ctx.fillRect(i * 20, WATER_Y - 8, 2, 10);
      ctx.fillStyle = C.bobaBrown; ctx.fillRect(20, WATER_Y + 2, 6, VVH - WATER_Y); ctx.fillRect(90, WATER_Y + 2, 6, VVH - WATER_Y);
      // characters
      const rod = drawLainie(64, WATER_Y - 34);
      drawBentley(30, WATER_Y - 12);
      // line + bobber
      if (phase === 'cast' || phase === 'wait' || phase === 'bite') {
        ctx.strokeStyle = C.starDim; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(rod.rodTipX, rod.rodTipY); ctx.lineTo(bobX, bobY); ctx.stroke();
        ctx.fillStyle = phase === 'bite' ? C.gold : C.heart;
        ctx.fillRect(bobX - 3, bobY - 3, 6, 6);
        if (phase === 'wait' || phase === 'bite') {
          ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.beginPath();
          ctx.ellipse(bobX, bobY + 4, 10 + Math.sin(tailPhase * 2) * 2, 4, 0, 0, Math.PI * 2); ctx.stroke();
        }
        if (phase === 'bite') { ctx.fillStyle = C.gold; ctx.font = '16px monospace'; ctx.fillText('!', bobX - 3, bobY - 10); }
      }
      // flash
      if (flash > 0) { ctx.fillStyle = C.duck; ctx.globalAlpha = Math.min(flash, 0.5); ctx.fillRect(0, 0, VVW, VVH); ctx.globalAlpha = 1; }
      // pop text
      if (popText) { ctx.fillStyle = C.starWhite; ctx.font = 'bold 16px sans-serif'; ctx.textAlign = 'center'; ctx.fillText(popText, VVW / 2, VVH * 0.3); ctx.textAlign = 'left'; }
      if (!over) raf = requestAnimationFrame(frame);
    }
    setHud();
    raf = requestAnimationFrame(frame);

    def._cleanup = () => {
      cancelAnimationFrame(raf); over = true;
      window.removeEventListener('resize', resize);
      window.removeEventListener('keydown', onKey);
    };
  }

  const def = {
    title: 'BOBA & RAMEN FISHING',
    tagline: 'the dock. the stars. the same dock, actually. yes THAT dock.',
    controls: 'hold to aim (meter swings) · release to cast · tap when it bites',
    intro: { lines: ['catch dinner. quota: 6. beware of boots.'] },
    mount,
    unmount() { if (def._cleanup) def._cleanup(); },
  };
  App.arcade.register('l2', def);
})();
