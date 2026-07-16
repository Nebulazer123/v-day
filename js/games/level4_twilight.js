/* ============================================================
   level4_twilight.js — LEVEL 4: "TWILIGHT FANTASY → TEAM CORBIN"
   design/DESIGN_SPEC.md §6.5. Registers App.arcade.register('l4', def).
   Phase 1: visual-novel sparkle scene. RECORD SCRATCH. Phase 2:
   mash-to-attack boss fight vs Edward. No lose state.
   ============================================================ */
(function () {
  'use strict';
  if (!window.App) return;

  const U = App.util;
  const REDUCE_MOTION = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  const VVW = 480, VVH = 300;

  // ---- boss-fight tuning (hard + losable) ----
  const EDWARD_HP   = 340;   // total HP to burn down
  const FIGHT_TIME  = 20;    // seconds before you lose
  const EDWARD_REGEN = 16;   // HP/sec Edward heals — you must OUT-mash it
  const RAGE_PER_MASH = 0.075;
  const RAGE_DRAIN  = 0.45;  // ~6 taps/sec sustains the 1.9x rage bonus

  let styleInjected = false;
  function injectStyle() {
    if (styleInjected) return;
    styleInjected = true;
    const s = document.createElement('style');
    s.textContent = `
      .l4__wrap{ width:100%; max-width:760px; margin:0 auto; display:flex; flex-direction:column;
        align-items:center; gap:var(--space-2); }
      .l4__stage{ position:relative; width:100%; aspect-ratio:${VVW}/${VVH};
        background:#0a0f1f; border:var(--border-pixel); box-shadow:var(--shadow-hard); overflow:hidden; }
      .l4__stage.is-shake{ animation:l4shake 300ms steps(2) 1; }
      @keyframes l4shake{ 0%{transform:translate(0,0);} 25%{transform:translate(-8px,4px);}
        50%{transform:translate(8px,-4px);} 75%{transform:translate(-6px,6px);} 100%{transform:translate(0,0);} }
      .l4__canvas{ width:100%; height:100%; display:block; image-rendering:pixelated; }
      .l4__dialogue{ position:absolute; left:0; right:0; bottom:0; min-height:34%; z-index:3;
        background:rgba(8,10,20,0.92); border-top:var(--border-pixel);
        padding:var(--space-2) var(--space-3); box-sizing:border-box; display:flex; flex-direction:column; gap:8px;
        user-select:none; -webkit-user-select:none; cursor:pointer; }
      .l4__speaker{ font-family:var(--font-arcade); font-size:11px; color:var(--taro-purple); }
      .l4__text{ font-family:var(--font-body); font-weight:700; font-size:15px; color:var(--edward-pale, #DDE7F0); line-height:1.4; min-height:2.6em; }
      .l4__choices{ display:flex; flex-direction:column; gap:6px; }
      .l4__choice{ font-family:var(--font-body); font-weight:800; font-size:14px; text-align:left;
        background:var(--taro-purple); color:var(--boba-pearl); border:var(--border-pixel);
        box-shadow:var(--shadow-btn); padding:8px 10px; cursor:pointer;
        touch-action:manipulation; user-select:none; -webkit-user-select:none; }
      .l4__choice:active{ transform:translate(3px,3px); box-shadow:var(--shadow-btn-press); }
      .l4__mashbar{ position:absolute; left:8%; right:8%; bottom:12px; height:22px;
        border:var(--border-pixel); background:var(--dock-water); }
      .l4__mashfill{ height:100%; width:0%; background:var(--heart-neon); }
      .l4__mashlabel{ position:absolute; left:0; right:0; bottom:40px; text-align:center;
        font-family:var(--font-arcade); font-size:11px; color:var(--ramen-gold); }
      .l4__mashbtn{ width:100%; min-height:72px; font-family:var(--font-arcade); font-size:16px;
        background:var(--heart-neon); color:var(--star-white); border:var(--border-pixel);
        box-shadow:var(--shadow-btn); touch-action:manipulation; user-select:none; -webkit-user-select:none; }
      .l4__mashbtn:active{ transform:translate(3px,3px); box-shadow:var(--shadow-btn-press); }
      .l4__hint{ font-family:var(--font-system); font-size:14px; color:var(--star-dim);
        text-align:right; visibility:hidden; animation:l4hintblink 900ms steps(1) infinite; }
      @keyframes l4hintblink{ 0%,60%{opacity:0.85;} 60.01%,100%{opacity:0.25;} }
    `;
    document.head.appendChild(s);
  }

  function getColors() {
    const cs = getComputedStyle(document.documentElement);
    const v = (n, fb) => (cs.getPropertyValue(n) || '').trim() || fb;
    return {
      pale: v('--edward-pale', '#DDE7F0'), purple: v('--taro-purple', '#B388EB'),
      star: v('--star-white', '#F4F1E8'), heart: v('--heart-neon', '#FF4D8D'),
      gold: v('--ramen-gold', '#FFB627'), pearl: v('--boba-pearl', '#3B2417'),
      brown: v('--boba-brown', '#8C5A32'), green: v('--crt-green', '#33FF88'),
    };
  }

  // Phase-1 script. type: 'line' (speaker+text, tap to advance) or 'choice' (two buttons)
  const SCRIPT = [
    { s: 'EDWARD', t: 'Lainie… I’ve waited 108 years for—' },
    { choice: ['😍 continue the fantasy', '😍 continue the fantasy (this button also does that)'] },
    { s: 'EDWARD', t: 'Your scent… is that… ramen? …intoxicating.' },
    { s: 'EDWARD', t: 'Run away with me. We’ll live forever. Coldly. Sparkling at a reasonable distance.' },
    { choice: ['yes edward', 'YES EDWARD'] },
    { s: 'EDWARD', t: 'First, let me stare at you across a cafeteria for several months—' },
    { scratch: true },
    { s: 'WEREWOLF CORBIN', t: 'ABSOLUTELY NOT.' },
    { s: 'EDWARD', t: 'And you are?' },
    { s: 'WEREWOLF CORBIN', t: 'the guy with the corvette, sparkles.' },
  ];

  const POSES = [
    'EDWARD used BROOD. it had no effect.',
    'EDWARD used STARE. Lainie is taken. it failed.',
  ];

  function mount(container, api) {
    injectStyle();
    const C = getColors();

    const wrap = U.el('div', 'l4__wrap');
    const stage = U.el('div', 'l4__stage');
    const canvas = document.createElement('canvas');
    canvas.className = 'l4__canvas';
    stage.appendChild(canvas);
    wrap.appendChild(stage);
    container.appendChild(wrap);

    const ctx = canvas.getContext('2d');
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = VVW * dpr; canvas.height = VVH * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.imageSmoothingEnabled = false;
    }
    resize(); window.addEventListener('resize', resize);

    let over = false, raf = 0, last = performance.now();
    let werewolf = false;          // corbin on screen
    let edwardX = VVW * 0.62, edwardY = VVH * 0.30, edwardYeet = null;
    let wolfX = -60, wolfLunge = 0;
    let sparkles = [];
    let phase = 'vn';              // vn | fight | finish
    let idx = 0;
    let typing = null;
    let mash = 0, hp = EDWARD_HP, poseText = '', poseTimer = 0, dmgPops = [];
    let fightTimer = FIGHT_TIME, rage = 0, fightEls = null, flashHeal = 0;

    // dialogue DOM
    const dlg = U.el('div', 'l4__dialogue');
    const speaker = U.el('div', 'l4__speaker');
    const textEl = U.el('div', 'l4__text');
    const choices = U.el('div', 'l4__choices');
    const hint = U.el('div', 'l4__hint', 'tap to continue ▸');
    dlg.appendChild(speaker); dlg.appendChild(textEl); dlg.appendChild(choices); dlg.appendChild(hint);
    stage.appendChild(dlg);

    function spawnSparkles(n, x, y, spread) {
      for (let i = 0; i < n; i++) sparkles.push({ x: x + U.rand(-spread, spread), y: y + U.rand(-spread, spread), life: U.rand(0.8, 2), t: 0, rot: Math.random() * Math.PI });
    }

    function typeLine(str, cb) {
      typing = { str, i: 0, cb, done: false };
      textEl.textContent = '';
    }
    function finishTyping() {
      if (typing && !typing.done) { textEl.textContent = typing.str; typing.done = true; if (typing.cb) typing.cb(); if (phase === 'vn') hint.style.visibility = 'visible'; }
    }

    function showNode() {
      choices.innerHTML = '';
      const node = SCRIPT[idx];
      if (!node) { startFight(); return; }
      if (node.scratch) {
        // RECORD SCRATCH
        App.audio.play('howl');
        sparkles = [];
        if (!REDUCE_MOTION) { stage.classList.add('is-shake'); setTimeout(() => stage.classList.remove('is-shake'), 320); }
        werewolf = true;
        idx++; showNode(); return;
      }
      if (node.choice) {
        hint.style.visibility = 'hidden';
        speaker.textContent = 'LAINIE';
        textEl.textContent = '';
        node.choice.forEach((label) => {
          const b = U.el('button', 'l4__choice', label);
          b.type = 'button';
          const pick = (e) => { e.stopPropagation(); e.preventDefault(); App.audio.play('click'); idx++; showNode(); };
          b.addEventListener('click', pick);
          choices.appendChild(b);
        });
        return;
      }
      hint.style.visibility = 'hidden'; // shown again once the line finishes typing
      // line
      speaker.textContent = node.s;
      speaker.style.color = node.s.indexOf('CORBIN') >= 0 ? C.heart : C.purple;
      if (node.s === 'EDWARD' && !werewolf) App.audio.play('sparkle');
      if (node.s.indexOf('CORBIN') >= 0) App.audio.play('growl');
      typeLine(node.t, null);
    }

    function advance() {
      if (phase !== 'vn') return;
      const node = SCRIPT[idx];
      if (node && node.choice) return;        // must pick a choice button
      if (typing && !typing.done) { finishTyping(); return; } // first tap completes the line
      idx++; showNode();
    }
    // advance on a tap ANYWHERE on the stage (choices call stopPropagation so they win their own taps)
    stage.addEventListener('click', advance);

    function startFight() {
      phase = 'fight';
      dlg.style.display = 'none';
      hp = EDWARD_HP; fightTimer = FIGHT_TIME; rage = 0;
      // mash UI
      const label = U.el('div', 'l4__mashlabel', 'RAGE — keep it up for 1.9× damage');
      const bar = U.el('div', 'l4__mashbar');
      const fill = U.el('div', 'l4__mashfill');
      bar.appendChild(fill); stage.appendChild(label); stage.appendChild(bar);
      const mashBtn = U.el('button', 'l4__mashbtn', 'MASH!  TEAM CORBIN 🐺');
      mashBtn.type = 'button';
      wrap.appendChild(mashBtn);
      poseTimer = 1.4; poseText = '';
      const doMash = () => {
        if (over || phase !== 'fight') return;
        App.audio.play('stomp');
        wolfLunge = 1;
        rage = Math.min(1, rage + RAGE_PER_MASH);
        const boosted = rage > 0.6;
        const crit = Math.random() < 0.06;
        let dmg = U.randInt(9, 17);
        if (boosted) dmg = Math.round(dmg * 1.9);
        if (crit) dmg = Math.round(dmg * 2.2);
        hp = Math.max(0, hp - dmg);
        dmgPops.push({ x: edwardX + U.rand(-12, 12), y: edwardY, t: 0, txt: (crit ? 'CRIT -' : '-') + dmg + (crit ? '!!' : '!'), crit: crit || boosted });
        spawnSparkles(crit ? 18 : 6, edwardX, edwardY, 14);
        fill.style.width = Math.round(rage * 100) + '%';
        fill.style.background = boosted ? 'var(--ramen-gold)' : 'var(--heart-neon)';
        if (hp <= 0) finish();
      };
      mashBtn.addEventListener('pointerdown', (e) => { e.preventDefault(); doMash(); });
      const onKey = (e) => { if (App.router.current !== 'arcadehub') return; if (phase === 'fight' && e.code === 'Space') { e.preventDefault(); doMash(); } };
      window.addEventListener('keydown', onKey);
      def._extraCleanup = () => window.removeEventListener('keydown', onKey);
      fightEls = [label, bar, mashBtn, fill];
    }

    function removeFightEls() { if (fightEls) { fightEls.forEach((el) => el && el.remove && el.remove()); fightEls = null; } }

    function finish() {
      if (phase === 'finish') return;
      phase = 'finish';
      removeFightEls();
      App.audio.play('fanfare-win');
      edwardYeet = { vx: 220, vy: -320, t: 0 };
      setTimeout(() => App.audio.play('sparkle'), 500);
      setTimeout(() => { if (!over) { over = true; api.win({ heading: 'FLAWLESS VICTORY — TEAM CORBIN', lines: [
        'Edward has been returned to the mist (politely). the fantasy has been upgraded to a guy who actually texts back.',
      ] }); } }, 2200);
    }

    function loseFight() {
      if (phase !== 'fight' || over) return;
      phase = 'lost'; over = true;
      removeFightEls();
      App.audio.play('gameover');
      api.lose({ heading: 'EDWARD GOT AWAY', lines: [
        'he sparkled at a reasonable distance and you let up. he escaped into the mist.',
        'team corbin regroups. the corvette is still running. [RETRY]',
      ] });
    }

    // ---- sprites ----
    function drawEdward(x, y, yeet) {
      ctx.save();
      if (yeet) ctx.globalAlpha = Math.max(0, 1 - yeet.t / 1.6);
      // pale body
      ctx.fillStyle = C.pale; ctx.fillRect(x - 8, y, 16, 26);
      // tall hair
      ctx.fillStyle = '#6b5a4a'; ctx.fillRect(x - 9, y - 12, 18, 8); ctx.fillRect(x - 9, y - 16, 6, 6);
      // face
      ctx.fillStyle = '#eef3f8'; ctx.fillRect(x - 7, y - 6, 14, 8);
      ctx.fillStyle = C.pearl; ctx.fillRect(x - 4, y - 3, 2, 2); ctx.fillRect(x + 2, y - 3, 2, 2);
      // sparkle glints
      ctx.fillStyle = '#fff'; ctx.globalAlpha *= 0.8; ctx.fillRect(x - 3, y + 4, 1, 1); ctx.fillRect(x + 4, y + 10, 1, 1);
      ctx.restore();
    }
    function drawWolf(x, y) {
      // brown wolf, backwards cap
      ctx.fillStyle = C.brown; ctx.fillRect(x - 10, y, 24, 18); // body
      ctx.fillRect(x + 12, y - 6, 12, 12); // head
      ctx.fillRect(x + 22, y - 10, 4, 6); ctx.fillRect(x + 14, y - 10, 4, 6); // ears
      // snout
      ctx.fillRect(x + 24, y - 2, 6, 5);
      // backwards cap (brim points left/back)
      ctx.fillStyle = C.heart; ctx.fillRect(x + 12, y - 12, 12, 5);
      ctx.fillRect(x + 6, y - 11, 7, 4); // backwards brim
      // eye
      ctx.fillStyle = C.gold; ctx.fillRect(x + 20, y - 3, 2, 2);
      // shredded sleeve
      ctx.fillStyle = C.pearl; ctx.fillRect(x - 10, y + 6, 4, 6);
      // tail
      ctx.fillRect(x - 16, y + 2, 8, 5);
    }

    let bgT = 0;
    function frame(now) {
      const dt = Math.min((now - last) / 1000, 0.05); last = now;
      bgT += dt;
      // typing
      if (typing && !typing.done) {
        typing.i += dt * 75; // ~75 chars/sec (snappy)
        const n = Math.floor(typing.i);
        textEl.textContent = typing.str.slice(0, n);
        if (n >= typing.str.length) { typing.done = true; if (typing.cb) typing.cb(); if (phase === 'vn') hint.style.visibility = 'visible'; }
      }
      // wolf entrance
      if (werewolf && wolfX < VVW * 0.30) wolfX = Math.min(VVW * 0.30, wolfX + dt * 260);
      if (wolfLunge > 0) wolfLunge = Math.max(0, wolfLunge - dt * 5);
      // sparkles
      sparkles.forEach((s) => { s.t += dt; s.y -= dt * 20; });
      sparkles = sparkles.filter((s) => s.t < s.life);
      if (phase === 'vn' && !werewolf && Math.random() < 0.06) spawnSparkles(1, edwardX + U.rand(-16, 16), edwardY + U.rand(-10, 20), 4);
      // damage pops
      dmgPops.forEach((p) => { p.t += dt; p.y -= dt * 26; });
      dmgPops = dmgPops.filter((p) => p.t < 1);
      // edward yeet
      if (edwardYeet) { edwardYeet.t += dt; edwardX += edwardYeet.vx * dt; edwardY += edwardYeet.vy * dt; edwardYeet.vy += 120 * dt; }
      // poses during fight
      if (phase === 'fight') {
        poseTimer -= dt;
        if (poseTimer <= 0) { poseText = U.pick(POSES); poseTimer = 2.2; }
        // Edward heals if you slack — you must out-mash the regen
        if (hp > 0) {
          const before = hp;
          hp = Math.min(EDWARD_HP, hp + EDWARD_REGEN * dt);
          if (Math.floor(hp) > Math.floor(before)) flashHeal = 0.25;
        }
        if (flashHeal > 0) flashHeal -= dt;
        rage = Math.max(0, rage - RAGE_DRAIN * dt);
        fightTimer -= dt;
        if (fightTimer <= 0 && hp > 0) { fightTimer = 0; loseFight(); }
      }

      // ---- render ----
      // misty forest gradient
      const g = ctx.createLinearGradient(0, 0, 0, VVH);
      g.addColorStop(0, '#131a30'); g.addColorStop(1, '#241a33');
      ctx.fillStyle = g; ctx.fillRect(0, 0, VVW, VVH);
      // pine silhouettes
      ctx.fillStyle = 'rgba(10,14,25,0.8)';
      for (let i = 0; i < 8; i++) { const px = i * 64 + 20, ph = 70 + (i % 3) * 20; ctx.beginPath(); ctx.moveTo(px, VVH - 60); ctx.lineTo(px - 22, VVH - 60 + ph * 0 + 0); ctx.lineTo(px - 22, VVH); ctx.lineTo(px + 22, VVH); ctx.lineTo(px + 22, VVH - 60); ctx.closePath(); ctx.fill(); ctx.beginPath(); ctx.moveTo(px, VVH - 100); ctx.lineTo(px - 20, VVH - 55); ctx.lineTo(px + 20, VVH - 55); ctx.closePath(); ctx.fill(); }
      // mist
      ctx.fillStyle = 'rgba(179,136,235,0.06)'; ctx.fillRect(0, VVH * 0.4 + Math.sin(bgT) * 4, VVW, VVH * 0.3);
      // sparkle particles
      sparkles.forEach((s) => { const a = 1 - s.t / s.life; ctx.save(); ctx.globalAlpha = a; ctx.translate(s.x, s.y); ctx.rotate(s.rot + s.t * 3); ctx.fillStyle = C.pale; ctx.fillRect(-2, -2, 4, 4); ctx.restore(); });
      // edward
      if (hp > 0 || edwardYeet) drawEdward(edwardX + (phase === 'fight' && wolfLunge > 0.5 ? 6 : 0), edwardY, edwardYeet);
      // wolf
      if (werewolf) drawWolf(wolfX + wolfLunge * 40, VVH * 0.34);
      // fight HUD (canvas): HP + timer
      if (phase === 'fight') {
        ctx.fillStyle = C.star; ctx.font = 'bold 12px monospace';
        ctx.fillText('EDWARD — HP: ' + Math.ceil(hp) + ' (years)', 12, 20);
        // hp bar (flashes when he heals)
        ctx.fillStyle = C.pearl; ctx.fillRect(12, 26, 180, 8);
        ctx.fillStyle = flashHeal > 0 ? '#eef3f8' : C.pale; ctx.fillRect(12, 26, 180 * (hp / EDWARD_HP), 8);
        // countdown timer, red under 6s
        const tleft = Math.ceil(fightTimer);
        ctx.textAlign = 'right'; ctx.font = 'bold 14px monospace';
        ctx.fillStyle = tleft <= 6 ? C.heart : C.gold;
        ctx.fillText('⏱ ' + tleft + 's', VVW - 12, 22);
        ctx.textAlign = 'left';
        if (poseText) { ctx.fillStyle = C.purple; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'center'; ctx.fillText(poseText, VVW / 2, VVH * 0.62); ctx.textAlign = 'left'; }
      }
      // finisher fading line
      if (phase === 'finish' && edwardYeet && edwardYeet.t > 0.4) {
        ctx.globalAlpha = Math.max(0, 1 - (edwardYeet.t - 0.4) / 1.6);
        ctx.fillStyle = C.pale; ctx.font = 'italic bold 13px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText('…tell her I sparkled…', VVW / 2, VVH * 0.3);
        ctx.textAlign = 'left'; ctx.globalAlpha = 1;
      }
      // damage pops
      dmgPops.forEach((p) => { ctx.globalAlpha = 1 - p.t; ctx.fillStyle = p.crit ? C.gold : C.star; ctx.font = 'bold ' + (p.crit ? 18 : 13) + 'px monospace'; ctx.fillText(p.txt, p.x, p.y); ctx.globalAlpha = 1; });

      if (!over) raf = requestAnimationFrame(frame);
    }

    showNode();
    raf = requestAnimationFrame(frame);

    def._cleanup = () => {
      cancelAnimationFrame(raf); over = true;
      window.removeEventListener('resize', resize);
      if (def._extraCleanup) def._extraCleanup();
    };
  }

  const def = {
    title: 'TWILIGHT FANTASY',
    tagline: 'a forest. a mist. a suspiciously pale gentleman.',
    controls: 'tap to advance · then MASH SPACE / MASH THE BUTTON — FAST',
    intro: { lines: [
      'Corbin is aware of this level. Corbin approved this level. Corbin wrote this level through gritted teeth.',
      'WARNING: Edward heals if you slow down. beat the clock or he sparkles away. you CAN lose this one.',
    ] },
    mount,
    unmount() { if (def._cleanup) def._cleanup(); },
  };
  App.arcade.register('l4', def);
})();
