/* ============================================================
   critters.js — live chibi kawaii animals strolling across the
   HOME (gate) screen. Self-contained; only runs while the 'gate'
   screen is active. Does not touch gate.js. Added to index.html
   before boot.js.
   ============================================================ */
(function () {
  'use strict';
  if (!window.App) return;
  const U = App.util;
  const REDUCE_MOTION = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  // z-index low so critters roam the background behind the gate card/buttons.
  const canvas = document.createElement('canvas');
  canvas.id = 'critter-layer';
  Object.assign(canvas.style, {
    position: 'fixed', left: '0', bottom: '0', width: '100%', height: '46%',
    zIndex: '2', pointerEvents: 'none', display: 'none',
  });
  App.ready(() => document.body.appendChild(canvas));
  const ctx = canvas.getContext('2d');

  let W = 0, H = 0, dpr = 1;
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // kawaii palettes: body, ear/detail, cheek blush
  const SPECIES = [
    { name: 'cat',    body: '#C9C7E8', ear: '#B0ADD6', tummy: '#EDECF8' },
    { name: 'dog',    body: '#D9A05B', ear: '#B77E3B', tummy: '#F0D8B6' }, // bentley-ish
    { name: 'duck',   body: '#FFD23F', ear: '#F2B705', tummy: '#FFE79A', beak: true },
    { name: 'bunny',  body: '#F6D9E4', ear: '#EBB6CC', tummy: '#FFF0F6', longEar: true },
    { name: 'bear',   body: '#C8A27A', ear: '#A9835C', tummy: '#E7D2BA' },
    { name: 'frog',   body: '#A8E6C0', ear: '#7FCBA0', tummy: '#E0F8EA', frog: true },
  ];
  const BLUSH = 'rgba(255,120,150,0.5)';

  let critters = [];
  function spawnAll() {
    critters = [];
    const n = W < 520 ? 4 : 6;
    for (let i = 0; i < n; i++) {
      const sp = SPECIES[i % SPECIES.length];
      const scale = U.rand(0.85, 1.25) * (W < 520 ? 0.85 : 1);
      critters.push({
        sp, scale,
        x: U.rand(0, W), y: H - U.rand(14, H * 0.5),
        dir: Math.random() < 0.5 ? 1 : -1,
        speed: U.rand(14, 26),
        phase: Math.random() * Math.PI * 2,
        blink: 0, blinkT: U.rand(2, 6),
        pauseT: 0,
      });
    }
    critters.sort((a, b) => a.y - b.y); // depth order
  }

  function drawCritter(c, t) {
    const s = 22 * c.scale;          // base head size
    const bob = REDUCE_MOTION ? 0 : Math.sin(c.phase) * 2;
    const x = c.x, y = c.y + bob;
    const sp = c.sp;
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(c.dir, 1); // face travel direction

    // soft shadow
    ctx.fillStyle = 'rgba(0,0,0,0.18)';
    ctx.beginPath(); ctx.ellipse(0, s * 0.62 - bob, s * 0.5, s * 0.14, 0, 0, Math.PI * 2); ctx.fill();

    // legs (2-frame walk)
    const legSwing = REDUCE_MOTION ? 0 : Math.sin(c.phase * 2) * s * 0.12;
    ctx.fillStyle = sp.ear;
    ctx.beginPath(); ctx.ellipse(-s * 0.2, s * 0.5 + legSwing, s * 0.12, s * 0.1, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(s * 0.2, s * 0.5 - legSwing, s * 0.12, s * 0.1, 0, 0, Math.PI * 2); ctx.fill();

    // body (round chibi)
    ctx.fillStyle = sp.body;
    ctx.beginPath(); ctx.ellipse(0, s * 0.28, s * 0.5, s * 0.42, 0, 0, Math.PI * 2); ctx.fill();
    // tummy
    ctx.fillStyle = sp.tummy;
    ctx.beginPath(); ctx.ellipse(0, s * 0.34, s * 0.26, s * 0.26, 0, 0, Math.PI * 2); ctx.fill();

    // tail wag (dog/cat)
    if (sp.name === 'dog' || sp.name === 'cat') {
      ctx.fillStyle = sp.body; ctx.save(); ctx.translate(-s * 0.45, s * 0.2);
      ctx.rotate(Math.sin(c.phase * 3) * 0.5);
      ctx.beginPath(); ctx.ellipse(-s * 0.14, 0, s * 0.16, s * 0.07, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    }

    // head
    ctx.fillStyle = sp.body;
    ctx.beginPath(); ctx.arc(0, -s * 0.25, s * 0.55, 0, Math.PI * 2); ctx.fill();

    // ears
    ctx.fillStyle = sp.ear;
    if (sp.longEar) { // bunny
      ctx.beginPath(); ctx.ellipse(-s * 0.22, -s * 0.95, s * 0.12, s * 0.34, -0.2, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(s * 0.22, -s * 0.95, s * 0.12, s * 0.34, 0.2, 0, Math.PI * 2); ctx.fill();
    } else if (sp.frog) { // frog eyes on top
      ctx.fillStyle = sp.body;
      ctx.beginPath(); ctx.arc(-s * 0.32, -s * 0.72, s * 0.2, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(s * 0.32, -s * 0.72, s * 0.2, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#1c1c28';
      ctx.beginPath(); ctx.arc(-s * 0.32, -s * 0.72, s * 0.09, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(s * 0.32, -s * 0.72, s * 0.09, 0, Math.PI * 2); ctx.fill();
    } else if (sp.name === 'duck') {
      // little tuft
      ctx.beginPath(); ctx.ellipse(0, -s * 0.82, s * 0.1, s * 0.16, 0, 0, Math.PI * 2); ctx.fill();
    } else { // cat/dog/bear triangle-ish ears
      ctx.beginPath(); ctx.arc(-s * 0.34, -s * 0.62, s * 0.17, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(s * 0.34, -s * 0.62, s * 0.17, 0, Math.PI * 2); ctx.fill();
    }

    // face — big kawaii eyes (unless frog, handled above)
    if (!sp.frog) {
      const blinking = c.blink > 0;
      ctx.fillStyle = '#25252f';
      if (blinking) {
        ctx.fillRect(-s * 0.28, -s * 0.28, s * 0.14, s * 0.03);
        ctx.fillRect(s * 0.14, -s * 0.28, s * 0.14, s * 0.03);
      } else {
        ctx.beginPath(); ctx.arc(-s * 0.2, -s * 0.28, s * 0.1, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(s * 0.2, -s * 0.28, s * 0.1, 0, Math.PI * 2); ctx.fill();
        // sparkle highlights
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.arc(-s * 0.17, -s * 0.31, s * 0.035, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(s * 0.23, -s * 0.31, s * 0.035, 0, Math.PI * 2); ctx.fill();
      }
    }
    // blush cheeks
    ctx.fillStyle = BLUSH;
    ctx.beginPath(); ctx.ellipse(-s * 0.3, -s * 0.12, s * 0.09, s * 0.06, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(s * 0.3, -s * 0.12, s * 0.09, s * 0.06, 0, 0, Math.PI * 2); ctx.fill();
    // nose / beak / smile
    if (sp.beak) {
      ctx.fillStyle = '#F28C0F';
      ctx.beginPath(); ctx.ellipse(s * 0.34, -s * 0.16, s * 0.14, s * 0.08, 0, 0, Math.PI * 2); ctx.fill();
    } else {
      ctx.strokeStyle = '#25252f'; ctx.lineWidth = Math.max(1, s * 0.03); ctx.lineCap = 'round';
      ctx.beginPath(); ctx.arc(0, -s * 0.14, s * 0.07, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();
    }
    ctx.restore();
  }

  let raf = 0, last = performance.now(), running = false;
  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05); last = now;
    ctx.clearRect(0, 0, W, H);
    critters.forEach((c) => {
      if (!REDUCE_MOTION) {
        if (c.pauseT > 0) { c.pauseT -= dt; }
        else {
          c.phase += dt * (2 + c.speed * 0.06);
          c.x += c.dir * c.speed * dt;
          if (c.x < 24) { c.x = 24; c.dir = 1; c.pauseT = U.rand(0.3, 1.2); }
          if (c.x > W - 24) { c.x = W - 24; c.dir = -1; c.pauseT = U.rand(0.3, 1.2); }
          if (Math.random() < 0.002) c.pauseT = U.rand(0.4, 1.4);
        }
        c.blinkT -= dt;
        if (c.blinkT <= 0) { c.blink = 0.12; c.blinkT = U.rand(2.5, 6); }
        if (c.blink > 0) c.blink -= dt;
      }
      drawCritter(c, now / 1000);
    });
    if (running) raf = requestAnimationFrame(frame);
  }

  function start() {
    if (running) return;
    canvas.style.display = 'block';   // must be visible BEFORE measuring
    resize();
    if (!critters.length || critters._w !== W) { spawnAll(); critters._w = W; }
    running = true; last = performance.now();
    raf = requestAnimationFrame(frame);
  }
  function stop() {
    running = false; cancelAnimationFrame(raf);
    canvas.style.display = 'none';
  }

  window.addEventListener('resize', () => { if (running) { resize(); spawnAll(); critters._w = W; } });

  document.addEventListener('screen:show', (e) => {
    if (e.detail && e.detail.id === 'gate') start();
    else stop();
  });
  // if gate is the very first screen shown before listener attaches
  App.ready(() => { if (App.router.current === 'gate') start(); });
})();
