/* ============================================================
   level1_platformer.js — Agent D
   LEVEL 1: "ESCAPE LINCOLN" — side-scrolling runner/platformer.
   design/DESIGN_SPEC.md §6.2. Registers App.arcade.register('l1', def).
   ============================================================ */
(function () {
  'use strict';
  if (!window.App) return;

  const U = App.util;
  const REDUCE_MOTION = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* preload Lainie's real face once at module load (reused across mounts) */
  const faceImg = new Image();
  let faceLoaded = false;
  faceImg.onload = () => { faceLoaded = true; };
  faceImg.src = 'assets/sprites/lainie_face.png';

  const VVW = 480, VVH = 270;
  const GROUND_Y = VVH - 44;
  const GRAVITY = 1600;
  const JUMP_V = -560;
  const MOVE_SPEED = 150;
  const TIME_LIMIT = 55; // seconds — now a real pressure clock (track is longer + denser)

  let styleInjected = false;
  function injectStyle() {
    if (styleInjected) return;
    styleInjected = true;
    const style = document.createElement('style');
    style.textContent = `
      .l1__wrap{ width:100%; max-width:760px; margin:0 auto; display:flex; flex-direction:column;
        align-items:center; gap:var(--space-2); }
      .l1__stage{ position:relative; width:100%; aspect-ratio:${VVW}/${VVH};
        background:var(--midnight-drive); border:var(--border-pixel); box-shadow:var(--shadow-hard);
        overflow:hidden; touch-action:none; }
      .l1__canvas{ width:100%; height:100%; display:block; image-rendering:pixelated; }
      .l1__controls{ display:flex; align-items:center; gap:var(--space-3); width:100%; }
      .l1__movegroup{ display:flex; gap:var(--space-2); }
      .l1__btn{ min-width:64px; min-height:56px; font-family:var(--font-arcade); font-size:16px;
        background:var(--dock-water); color:var(--star-white); border:var(--border-pixel);
        box-shadow:var(--shadow-btn); touch-action:none; user-select:none; -webkit-user-select:none; }
      .l1__btn:active{ transform:translate(3px,3px); box-shadow:var(--shadow-btn-press); }
      .l1__btn--jump{ background:var(--heart-neon); flex:1; font-size:12px; }
    `;
    document.head.appendChild(style);
  }

  function getColors() {
    const cs = getComputedStyle(document.documentElement);
    const v = (name, fb) => (cs.getPropertyValue(name) || '').trim() || fb;
    return {
      sky: v('--midnight-drive', '#0B1026'),
      water: v('--dock-water', '#14224A'),
      starWhite: v('--star-white', '#F4F1E8'),
      starDim: v('--star-dim', '#9BA3C9'),
      heart: v('--heart-neon', '#FF4D8D'),
      gold: v('--ramen-gold', '#FFB627'),
      purple: v('--taro-purple', '#B388EB'),
      green: v('--crt-green', '#33FF88'),
      bobaBrown: v('--boba-brown', '#8C5A32'),
      bobaPearl: v('--boba-pearl', '#3B2417'),
      bentley: v('--bentley-caramel', '#D9A05B'),
      duck: v('--duck-yellow', '#FFD23F'),
      silver: v('--corvette-silver', '#C8CDD6'),
      mud: v('--lincoln-mud', '#5B5242'),
    };
  }

  function buildWorld() {
    return {
      trackLength: 3350,
      // denser + tighter course, two moving tractors, a couple of double-jump combos
      obstacles: [
        { type: 'corn', x: 300, w: 50, h: 34 },
        { type: 'truck', x: 560, w: 46, h: 30 },
        { type: 'corn', x: 780, w: 50, h: 40 },
        { type: 'tractor', x: 1050, baseX: 1050, w: 70, h: 34, amp: 34, spd: 1.1 },
        { type: 'corn', x: 1300, w: 50, h: 34 },
        { type: 'corn', x: 1440, w: 50, h: 44 },       // tight double
        { type: 'truck', x: 1720, w: 46, h: 30 },
        { type: 'tractor', x: 1980, baseX: 1980, w: 70, h: 34, amp: 44, spd: 0.8 },
        { type: 'corn', x: 2240, w: 50, h: 40 },
        { type: 'truck', x: 2420, w: 46, h: 34 },       // tight
        { type: 'corn', x: 2680, w: 50, h: 34 },
        { type: 'tractor', x: 2960, baseX: 2960, w: 70, h: 34, amp: 30, spd: 1.4 },
      ],
      pickups: [
        { type: 'boba', x: 230, y0: 196, val: 10, collected: false },
        { type: 'ramen', x: 660, y0: 176, val: 25, collected: false },
        { type: 'boba', x: 1180, y0: 196, val: 10, collected: false },
        { type: 'heart', x: 1580, y0: 176, val: 50, collected: false },
        { type: 'boba', x: 2120, y0: 196, val: 10, collected: false },
        { type: 'ramen', x: 2560, y0: 176, val: 25, collected: false },
        { type: 'heart', x: 3120, y0: 186, val: 50, collected: false },
      ],
      duck: { x: 1015, y: 176, collected: false },
      signposts: [
        { x: 120, text: 'LINCOLN — POP. small' },
        { x: 480, text: 'NO BUBBLE TEA next 1,000,000 mi' },
        { x: 900, text: 'NOTHING AHEAD (still)' },
        { x: 1620, text: 'SERIOUSLY WHY ARE YOU STILL HERE' },
        { x: 2320, text: 'almost out. do NOT trip now' },
        { x: 3080, text: '→ ANYWHERE ELSE' },
      ],
      flag: { x: 3260 },
    };
  }

  function aabb(a, b) {
    return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
  }

  function mount(container, api) {
    injectStyle();
    const COLORS = getColors();

    const wrap = U.el('div', 'l1__wrap');
    const stage = U.el('div', 'l1__stage');
    const canvas = document.createElement('canvas');
    canvas.className = 'l1__canvas';
    stage.appendChild(canvas);
    wrap.appendChild(stage);

    const controls = U.el('div', 'l1__controls');
    controls.innerHTML = `
      <div class="l1__movegroup">
        <button type="button" class="l1__btn l1__btn--left" aria-label="move left">◀</button>
        <button type="button" class="l1__btn l1__btn--right" aria-label="move right">▶</button>
      </div>
      <button type="button" class="l1__btn l1__btn--jump" aria-label="jump">⤴ JUMP</button>
    `;
    wrap.appendChild(controls);
    container.appendChild(wrap);

    const ctx = canvas.getContext('2d');
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = VVW * dpr;
      canvas.height = VVH * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = false;
    }
    resize();
    window.addEventListener('resize', resize);

    const world = buildWorld();
    const stars = [];
    for (let i = 0; i < 40; i++) {
      stars.push({ x: Math.random() * VVW * 2, y: Math.random() * (VVH * 0.6), s: Math.random() < 0.15 ? 2 : 1 });
    }
    const pines = [];
    for (let i = 0; i < 18; i++) {
      pines.push({ x: i * 140 + Math.random() * 40, h: 30 + Math.random() * 30 });
    }

    const player = { x: 30, y: GROUND_Y - 24, w: 16, h: 24, vy: 0, vx: 0, jumps: 0, onGround: true, facing: 1, animT: 0 };
    const bentley = { x: 0, y: GROUND_Y - 14, w: 18, h: 14, vy: 0, onGround: true, queue: [] };
    bentley.x = player.x - 30;

    let camera = 0, score = 0, elapsed = 0, finished = false, winSeq = false;
    let lastBoardTop = 0;
    const keys = { left: false, right: false };
    const timers = [];

    function nowMs() { return performance.now(); }

    function tryJump() {
      if (finished || winSeq) return;
      if (player.jumps < 2) {
        player.vy = JUMP_V * (player.jumps === 0 ? 1 : 0.92);
        player.jumps++;
        player.onGround = false;
        App.audio.play('jump');
        bentley.queue.push({ t: nowMs(), applied: false });
      }
    }

    /* -------- input: keyboard -------- */
    function onKeyDown(e) {
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.left = true;
      else if (e.code === 'ArrowRight' || e.code === 'KeyD') keys.right = true;
      else if (e.code === 'Space' || e.code === 'ArrowUp') { e.preventDefault(); tryJump(); }
    }
    function onKeyUp(e) {
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.left = false;
      else if (e.code === 'ArrowRight' || e.code === 'KeyD') keys.right = false;
    }
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    /* -------- input: touch/pointer big zones -------- */
    const btnLeft = controls.querySelector('.l1__btn--left');
    const btnRight = controls.querySelector('.l1__btn--right');
    const btnJump = controls.querySelector('.l1__btn--jump');
    const pointerCleanups = [];
    function bindHold(btn, onDown, onUp) {
      const down = (e) => { e.preventDefault(); onDown(); };
      const up = (e) => { e.preventDefault(); onUp(); };
      btn.addEventListener('pointerdown', down);
      btn.addEventListener('pointerup', up);
      btn.addEventListener('pointerleave', up);
      btn.addEventListener('pointercancel', up);
      pointerCleanups.push(() => {
        btn.removeEventListener('pointerdown', down);
        btn.removeEventListener('pointerup', up);
        btn.removeEventListener('pointerleave', up);
        btn.removeEventListener('pointercancel', up);
      });
    }
    bindHold(btnLeft, () => (keys.left = true), () => (keys.left = false));
    bindHold(btnRight, () => (keys.right = true), () => (keys.right = false));
    const jumpDown = (e) => { e.preventDefault(); tryJump(); };
    btnJump.addEventListener('pointerdown', jumpDown);
    pointerCleanups.push(() => btnJump.removeEventListener('pointerdown', jumpDown));

    /* -------- fx helpers -------- */
    function confettiAt(x, y) {
      if (!App.confetti || REDUCE_MOTION) return;
      const rect = canvas.getBoundingClientRect();
      const fx = rect.left + ((x - camera) / VVW) * rect.width;
      const fy = rect.top + (y / VVH) * rect.height;
      App.confetti(12, fx / window.innerWidth, fy / window.innerHeight);
    }

    function collectFX(p) {
      if (p.type === 'boba') App.audio.play('coin');
      else if (p.type === 'ramen') App.audio.play('coin', { rate: 1.122 });
      else if (p.type === 'heart') { App.audio.play('ding'); confettiAt(p.x, p.y0); }
      score += p.val;
    }

    function triggerLose() {
      if (finished) return;
      finished = true;
      App.audio.play('error');
      api.lose({ heading: 'caught by Lincoln.', lines: ["the town thanks you for staying. don't."] });
    }

    function triggerWin() {
      if (finished) return;
      finished = true;
      api.win({
        heading: 'LEVEL CLEAR!',
        lines: ['you escaped Lincoln at a top speed of "finally."', 'Bentley rated the trip: 2 ears up.'],
      });
    }

    /* -------- update -------- */
    function update(dt, t) {
      player.vx = (keys.right ? 1 : 0) - (keys.left ? 1 : 0);
      if (!winSeq) {
        player.x += player.vx * MOVE_SPEED * dt;
        player.x = U.clamp(player.x, 10, world.trackLength - 10);
        if (player.vx > 0) player.facing = 1; else if (player.vx < 0) player.facing = -1;
      }
      // winSeq: Lainie holds the flag, player.x stays put (frozen below)
      player.animT += dt;

      player.vy += GRAVITY * dt;
      player.y += player.vy * dt;
      const pGroundY = GROUND_Y - player.h;
      if (player.y >= pGroundY) {
        player.y = pGroundY;
        if (!player.onGround && player.vy > 0) App.audio.play('land');
        player.vy = 0;
        player.onGround = true;
        player.jumps = 0;
      } else {
        player.onGround = false;
      }

      // bentley trails 30px behind, jumps applied 150ms after player's
      if (winSeq) {
        // Bentley overshoots the flag and skids to a stop
        bentleySkidVX = Math.max(0, bentleySkidVX - 500 * dt);
        bentley.x += bentleySkidVX * dt;
      } else {
        const targetX = Math.max(0, player.x - 30);
        bentley.x += (targetX - bentley.x) * Math.min(1, dt * 6);
      }
      while (bentley.queue.length && t - bentley.queue[0].t >= 150) {
        bentley.queue.shift();
        bentley.vy = JUMP_V * 0.9;
        bentley.onGround = false;
      }
      bentley.vy += GRAVITY * dt;
      bentley.y += bentley.vy * dt;
      const bGroundY = GROUND_Y - bentley.h;
      if (bentley.y >= bGroundY) { bentley.y = bGroundY; bentley.vy = 0; bentley.onGround = true; }

      camera = U.clamp(player.x - VVW * 0.35, 0, Math.max(0, world.trackLength - VVW));

      if (!finished && !winSeq) {
        for (const o of world.obstacles) {
          if (o.type === 'tractor') o.x = o.baseX + Math.sin(t / 1000 * (o.spd || 0.6)) * (o.amp || 12);
          const ob = { x: o.x, y: GROUND_Y - o.h, w: o.w, h: o.h };
          if (aabb(player, ob)) { triggerLose(); return; }
        }
        for (const p of world.pickups) {
          if (p.collected) continue;
          const pb = { x: p.x - 8, y: p.y0 - 8, w: 16, h: 16 };
          if (aabb(player, pb)) { p.collected = true; collectFX(p); }
        }
        if (!world.duck.collected) {
          const db = { x: world.duck.x - 9, y: world.duck.y - 9, w: 18, h: 18 };
          if (aabb(player, db)) {
            world.duck.collected = true;
            score += 500;
            App.audio.play('quack');
            api.toast("you weren't supposed to find him.");
            confettiAt(world.duck.x, world.duck.y);
          }
        }
        if (player.x >= world.flag.x) {
          winSeq = true;
          App.audio.play('flag');
          confettiAt(world.flag.x, GROUND_Y - 70);
          timers.push(setTimeout(triggerWin, REDUCE_MOTION ? 100 : 700));
        }
        elapsed += dt;
        if (elapsed > TIME_LIMIT) triggerLose();
      }
    }

    /* -------- render -------- */
    function drawSky() {
      const g = ctx.createLinearGradient(0, 0, 0, VVH);
      g.addColorStop(0, COLORS.sky);
      g.addColorStop(1, COLORS.water);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, VVW, VVH);
    }
    function drawStars() {
      ctx.fillStyle = COLORS.starWhite;
      const rate = 0.15;
      for (const s of stars) {
        const sx = (s.x - camera * rate) % (VVW * 2);
        const x = sx < 0 ? sx + VVW * 2 : sx;
        if (x < VVW) ctx.fillRect(x, s.y, s.s, s.s);
      }
    }
    function drawPines() {
      ctx.fillStyle = COLORS.mud;
      const rate = 0.4;
      for (const p of pines) {
        const px = (p.x - camera * rate) % (VVW + 200) - 100;
        const x = ((px % (VVW + 200)) + (VVW + 200)) % (VVW + 200) - 100;
        const baseY = GROUND_Y;
        ctx.beginPath();
        ctx.moveTo(x, baseY);
        ctx.lineTo(x + 10, baseY - p.h);
        ctx.lineTo(x + 20, baseY);
        ctx.closePath();
        ctx.fill();
      }
    }
    function drawGround() {
      ctx.fillStyle = COLORS.mud;
      ctx.fillRect(0, GROUND_Y, VVW, VVH - GROUND_Y);
      ctx.fillStyle = COLORS.bobaPearl;
      const off = Math.floor(camera) % 20;
      for (let x = -off; x < VVW; x += 20) ctx.fillRect(x, GROUND_Y, 10, 3);
    }
    function drawSignpost(s) {
      ctx.fillStyle = COLORS.bobaPearl;
      ctx.fillRect(s.x, GROUND_Y - 30, 4, 30);
      ctx.fillStyle = COLORS.silver;
      ctx.fillRect(s.x - 30, GROUND_Y - 44, 68, 16);
      ctx.fillStyle = COLORS.bobaPearl;
      ctx.font = '7px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(s.text, s.x + 4, GROUND_Y - 34, 66);
      ctx.textAlign = 'left';
    }
    function drawFlag(f) {
      ctx.fillStyle = COLORS.bobaPearl;
      ctx.fillRect(f.x, GROUND_Y - 70, 4, 70);
      ctx.fillStyle = COLORS.gold;
      ctx.fillRect(f.x + 4, GROUND_Y - 70, 26, 14);
      ctx.fillStyle = COLORS.bobaPearl;
      ctx.font = '6px monospace';
      ctx.fillText('WAY OUT', f.x + 6, GROUND_Y - 62);
      ctx.fillText('OF TOWN', f.x + 6, GROUND_Y - 54);
    }
    function drawObstacle(o) {
      const y = GROUND_Y - o.h;
      if (o.type === 'corn') {
        ctx.fillStyle = COLORS.mud;
        for (let i = 0; i < o.w; i += 8) {
          ctx.fillRect(o.x + i, y + o.h * 0.3, 4, o.h * 0.7);
        }
        ctx.fillStyle = COLORS.gold;
        for (let i = 0; i < o.w; i += 8) ctx.fillRect(o.x + i, y, 4, o.h * 0.35);
      } else if (o.type === 'truck') {
        ctx.fillStyle = COLORS.silver;
        ctx.fillRect(o.x, y + 6, o.w, o.h - 6);
        ctx.fillStyle = COLORS.water;
        ctx.fillRect(o.x + o.w * 0.55, y, o.w * 0.4, 10);
        ctx.fillStyle = COLORS.bobaPearl;
        ctx.beginPath(); ctx.arc(o.x + 8, y + o.h, 5, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(o.x + o.w - 8, y + o.h, 5, 0, Math.PI * 2); ctx.fill();
      } else if (o.type === 'tractor') {
        ctx.fillStyle = COLORS.green;
        ctx.fillRect(o.x, y + 8, o.w * 0.7, o.h - 8);
        ctx.fillStyle = COLORS.bobaPearl;
        ctx.fillRect(o.x + o.w * 0.55, y, o.w * 0.35, 14);
        ctx.fillStyle = COLORS.bobaPearl;
        ctx.beginPath(); ctx.arc(o.x + 10, y + o.h, 6, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(o.x + o.w - 12, y + o.h, 9, 0, Math.PI * 2); ctx.fill();
      }
    }
    function drawPickup(p) {
      const x = p.x, y = p.y0;
      if (p.type === 'boba') {
        ctx.fillStyle = COLORS.bobaBrown;
        ctx.fillRect(x - 5, y - 6, 10, 12);
        ctx.fillStyle = COLORS.bobaPearl;
        ctx.fillRect(x - 3, y + 2, 2, 2);
        ctx.fillRect(x + 1, y + 4, 2, 2);
      } else if (p.type === 'ramen') {
        ctx.fillStyle = COLORS.gold;
        ctx.beginPath(); ctx.ellipse(x, y, 8, 5, 0, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = COLORS.bobaBrown;
        ctx.fillRect(x - 6, y - 1, 12, 3);
      } else if (p.type === 'heart') {
        ctx.fillStyle = COLORS.heart;
        ctx.fillRect(x - 5, y - 3, 4, 4);
        ctx.fillRect(x + 1, y - 3, 4, 4);
        ctx.fillRect(x - 4, y, 8, 4);
        ctx.fillRect(x - 2, y + 4, 4, 3);
      }
    }
    function drawDuck(d) {
      ctx.fillStyle = COLORS.duck;
      ctx.fillRect(d.x - 7, d.y - 5, 14, 10);
      ctx.fillRect(d.x + 3, d.y - 9, 6, 6);
      ctx.fillStyle = COLORS.mud;
      ctx.fillRect(d.x + 6, d.y - 8, 3, 1);
    }
    function drawPlayer() {
      const px = player.x, py = player.y;
      ctx.save();
      ctx.fillStyle = COLORS.heart;
      ctx.fillRect(px + 2, py + 10, 12, 12);
      const legPhase = Math.floor(player.animT * 8) % 2 === 0;
      ctx.fillStyle = COLORS.bobaPearl;
      if (player.onGround) {
        ctx.fillRect(px + 3, py + 22, 4, legPhase ? 3 : 1);
        ctx.fillRect(px + 9, py + 22, 4, legPhase ? 1 : 3);
      } else {
        ctx.fillRect(px + 3, py + 22, 4, 2);
        ctx.fillRect(px + 9, py + 22, 4, 2);
      }
      ctx.fillStyle = COLORS.bobaPearl;
      ctx.fillRect(px + (player.facing < 0 ? -1 : 13), py - 3, 3, 9);
      ctx.restore();
      if (faceLoaded) {
        ctx.drawImage(faceImg, px - 2, py - 12, 20, 20);
      } else {
        ctx.fillStyle = COLORS.silver;
        ctx.beginPath(); ctx.arc(px + 8, py - 2, 8, 0, Math.PI * 2); ctx.fill();
      }
    }
    function drawBentley(t) {
      const bx = bentley.x, by = bentley.y;
      ctx.fillStyle = COLORS.bentley;
      ctx.fillRect(bx, by + 4, 16, 9);
      ctx.fillRect(bx + 13, by, 6, 6);
      const trot = Math.floor(player.animT * 10) % 2;
      ctx.fillStyle = COLORS.bobaPearl;
      ctx.fillRect(bx + 2, by + 13, 3, trot ? 3 : 1);
      ctx.fillRect(bx + 10, by + 13, 3, trot ? 1 : 3);
      const earFlop = REDUCE_MOTION ? 0 : Math.sin(t / 1000 * 6.5) * 2;
      ctx.fillStyle = COLORS.bobaPearl;
      ctx.fillRect(bx + 11, by - 4 + earFlop, 4, 6);
      ctx.fillRect(bx + 18, by - 4 - earFlop, 4, 6);
      ctx.fillStyle = COLORS.bentley;
      ctx.fillRect(bx - 3, by + 3, 3, 3);
    }
    function drawHUD() {
      ctx.font = '8px monospace';
      ctx.fillStyle = 'rgba(5,7,15,0.55)';
      ctx.fillRect(4, 4, 90, 12);
      ctx.fillRect(VVW - 60, 4, 56, 12);
      ctx.fillStyle = COLORS.gold;
      ctx.fillText('SCORE ' + score, 8, 13);
      ctx.fillStyle = COLORS.starWhite;
      ctx.textAlign = 'right';
      ctx.fillText(Math.max(0, Math.ceil(TIME_LIMIT - elapsed)) + 's', VVW - 6, 13);
      ctx.textAlign = 'left';
    }

    function render(t) {
      ctx.clearRect(0, 0, VVW, VVH);
      drawSky();
      drawStars();
      drawPines();
      drawGround();
      ctx.save();
      ctx.translate(-camera, 0);
      for (const s of world.signposts) drawSignpost(s);
      drawFlag(world.flag);
      for (const o of world.obstacles) drawObstacle(o);
      for (const p of world.pickups) if (!p.collected) drawPickup(p);
      if (!world.duck.collected) drawDuck(world.duck);
      drawBentley(t);
      drawPlayer();
      ctx.restore();
      drawHUD();
    }

    /* -------- loop -------- */
    let raf = null;
    let lastT = nowMs();
    function loop() {
      const t = nowMs();
      let dt = (t - lastT) / 1000;
      lastT = t;
      if (dt > 0.05) dt = 0.05;
      if (!finished) update(dt, t);
      render(t);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    /* -------- cleanup handle -------- */
    _cleanup = function () {
      if (raf) cancelAnimationFrame(raf);
      raf = null;
      timers.forEach((id) => clearTimeout(id));
      window.removeEventListener('resize', resize);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      pointerCleanups.forEach((fn) => fn());
    };
  }

  let _cleanup = null;

  function unmount() {
    if (_cleanup) { try { _cleanup(); } catch (e) { console.error(e); } }
    _cleanup = null;
  }

  App.arcade.register('l1', {
    title: 'ESCAPE LINCOLN',
    tagline: 'pop. small — boba shops: 0 — vibes: also 0',
    controls: '← → move · SPACE/tap jump · double-tap double-jump',
    intro: { lines: ["run right until Maine ends. Bentley's coming. obviously."] },
    mount,
    unmount,
  });
})();
