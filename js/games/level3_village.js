/* ============================================================
   js/games/level3_village.js — LEVEL 3: "BENTLEY'S ERRANDS"
   Top-down cozy village. Fetch-quest chain with dialogue letterbox.
   Registers App.arcade.register('l3', def). No lose state.
   ============================================================ */
(function () {
  'use strict';
  if (!window.App) return;
  const U = App.util;
  const REDUCED = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* ---------- palette (read real tokens, fall back to spec hex) ---------- */
  function cssVar(name, fallback) {
    try {
      const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
      return v || fallback;
    } catch (e) { return fallback; }
  }
  function palette() {
    return {
      midnight: cssVar('--midnight-drive', '#0B1026'),
      dock: cssVar('--dock-water', '#14224A'),
      starWhite: cssVar('--star-white', '#F4F1E8'),
      starDim: cssVar('--star-dim', '#9BA3C9'),
      heartNeon: cssVar('--heart-neon', '#FF4D8D'),
      ramenGold: cssVar('--ramen-gold', '#FFB627'),
      taroPurple: cssVar('--taro-purple', '#B388EB'),
      crtGreen: cssVar('--crt-green', '#33FF88'),
      bobaBrown: cssVar('--boba-brown', '#8C5A32'),
      bobaPearl: cssVar('--boba-pearl', '#3B2417'),
      bentleyCaramel: cssVar('--bentley-caramel', '#D9A05B'),
      duckYellow: cssVar('--duck-yellow', '#FFD23F'),
      lincolnMud: cssVar('--lincoln-mud', '#5B5242'),
      grandmaLilac: cssVar('--grandma-lilac', '#CBB7E8'),
      edwardPale: cssVar('--edward-pale', '#DDE7F0'),
      shadowPixel: cssVar('--shadow-pixel', '#05070F'),
    };
  }

  /* ---------- injected scoped styles (once) ---------- */
  function ensureStyles() {
    if (document.getElementById('l3-styles')) return;
    const s = document.createElement('style');
    s.id = 'l3-styles';
    s.textContent = `
      .l3__root{ position:relative; width:100%; height:100%; min-height:320px; overflow:hidden; background:var(--midnight-drive,#0B1026); user-select:none; touch-action:none; }
      .l3__canvas{ position:absolute; inset:0; width:100%; height:100%; image-rendering:pixelated; image-rendering:crisp-edges; display:block; }
      .l3__hud{ position:absolute; top:8px; left:8px; font-family:var(--font-system,monospace); font-size:14px; color:var(--star-dim,#9BA3C9); background:rgba(5,7,15,.55); padding:2px 8px; pointer-events:none; }
      .l3__touchctrls{ position:absolute; inset:0; pointer-events:none; }
      @media (hover:hover) and (pointer:fine){ .l3__touchctrls{ display:none; } }
      .l3__joybase{ position:absolute; left:18px; bottom:18px; width:88px; height:88px; border-radius:50%; background:rgba(20,34,74,.55); border:3px solid var(--boba-pearl,#3B2417); pointer-events:auto; touch-action:none; }
      .l3__joyknob{ position:absolute; left:50%; top:50%; width:36px; height:36px; margin:-18px 0 0 -18px; border-radius:50%; background:var(--heart-neon,#FF4D8D); border:2px solid var(--boba-pearl,#3B2417); pointer-events:none; }
      .l3__talkbtn{ position:absolute; right:18px; bottom:22px; width:76px; height:76px; border-radius:50%; background:var(--ramen-gold,#FFB627); color:var(--boba-pearl,#3B2417); border:3px solid var(--boba-pearl,#3B2417); font-family:var(--font-arcade,monospace); font-size:11px; pointer-events:auto; touch-action:none; box-shadow:4px 4px 0 var(--shadow-pixel,#05070F); }
      .l3__talkbtn:active{ transform:translate(3px,3px); box-shadow:1px 1px 0 var(--shadow-pixel,#05070F); }
      .l3__prompt{ position:absolute; font-family:var(--font-system,monospace); font-size:14px; color:var(--star-white,#F4F1E8); background:rgba(5,7,15,.7); padding:2px 6px; border:2px solid var(--boba-pearl,#3B2417); pointer-events:none; transform:translate(-50%,-100%); white-space:nowrap; }
      .l3__letterbox{ position:absolute; left:0; right:0; bottom:0; min-height:34%; background:var(--dock-water,#14224A); border-top:4px solid var(--boba-pearl,#3B2417); display:flex; gap:10px; padding:10px; box-sizing:border-box; cursor:pointer; }
      .l3__letterbox.hidden{ display:none; }
      .l3__portrait{ flex:0 0 auto; width:64px; height:64px; border:3px solid var(--boba-pearl,#3B2417); background:var(--midnight-drive,#0B1026); }
      .l3__portraitcanvas{ width:100%; height:100%; image-rendering:pixelated; }
      .l3__dwrap{ flex:1 1 auto; min-width:0; display:flex; flex-direction:column; }
      .l3__speaker{ font-family:var(--font-arcade,monospace); font-size:11px; color:var(--ramen-gold,#FFB627); margin-bottom:4px; }
      .l3__text{ font-family:var(--font-body,sans-serif); font-weight:700; font-size:15px; line-height:1.35; color:var(--star-white,#F4F1E8); min-height:2.6em; }
      .l3__sub{ font-family:var(--font-body,sans-serif); font-style:italic; font-size:13px; color:var(--star-dim,#9BA3C9); margin-top:4px; }
      .l3__choices{ display:flex; flex-wrap:wrap; gap:8px; margin-top:8px; }
      .l3__choices.hidden{ display:none; }
      .l3__choicebtn{ font-family:var(--font-arcade,monospace); font-size:10px; line-height:1.5; background:var(--heart-neon,#FF4D8D); color:var(--star-white,#F4F1E8); border:3px solid var(--boba-pearl,#3B2417); box-shadow:3px 3px 0 var(--shadow-pixel,#05070F); padding:8px 10px; cursor:pointer; }
      .l3__choicebtn:active{ transform:translate(2px,2px); box-shadow:1px 1px 0 var(--shadow-pixel,#05070F); }
      .l3__skipbtn{ position:absolute; font-family:var(--font-arcade,monospace); font-size:9px; background:var(--lincoln-mud,#5B5242); color:var(--star-white,#F4F1E8); border:2px solid var(--boba-pearl,#3B2417); padding:6px 8px; cursor:pointer; top:8px; right:8px; }
      .l3__hint{ position:absolute; right:10px; bottom:6px; font-family:var(--font-arcade,monospace); font-size:10px; color:var(--star-dim,#9BA3C9); animation:l3bounce 1s steps(2) infinite; }
      @keyframes l3bounce{ 0%,100%{ transform:translateY(0);} 50%{ transform:translateY(-3px);} }
      .l3__reducedmotion .l3__hint{ animation:none; }
    `;
    document.head.appendChild(s);
  }

  /* ---------- pixel-art drawing helpers (drawn to a small logical canvas) ---------- */
  function px(ctx, x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
  }

  function drawHouse(ctx, pal, x, y, w, h, opts) {
    opts = opts || {};
    const roofH = Math.round(h * 0.42);
    px(ctx, x, y + roofH, w, h - roofH, opts.body || pal.bobaBrown);
    // roof (triangle-ish via stacked rects for pixel look)
    const steps = 5;
    for (let i = 0; i < steps; i++) {
      const t = i / (steps - 1);
      const rw = w * (1 - t) + 4;
      px(ctx, x + (w - rw) / 2, y + (roofH / steps) * i, rw, roofH / steps + 1, opts.roof || pal.bobaPearl);
    }
    // door
    const dw = w * 0.26, dh = h - roofH - 2;
    px(ctx, x + w / 2 - dw / 2, y + h - dh, dw, dh, opts.door || pal.shadowPixel);
    // windows
    const winC = opts.window || pal.crtGreen;
    px(ctx, x + w * 0.14, y + roofH + 6, 8, 8, winC);
    px(ctx, x + w * 0.72, y + roofH + 6, 8, 8, winC);
    if (opts.spotless) {
      px(ctx, x - 2, y + h - 3, w + 4, 3, pal.grandmaLilac); // flower box trim
    }
  }

  function drawDirtPatch(ctx, pal, x, y, r) {
    ctx.fillStyle = pal.shadowPixel;
    ctx.globalAlpha = 0.55;
    ctx.beginPath();
    ctx.ellipse(x, y, r, r * 0.55, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
    px(ctx, x - r * 0.4, y - 2, 4, 4, pal.heartNeon); // a knocked-over petal
  }

  function bob(t, amp, period) {
    if (REDUCED) return 0;
    // steps(2) style bob
    const phase = (t % period) / period;
    return phase < 0.5 ? -amp : 0;
  }

  function drawBentley(ctx, pal, cx, cy, t, proud) {
    const earFlop = REDUCED ? 0 : Math.sin(t * 3.6) * 2;
    const by = cy + bob(t, 2, 1200);
    // body
    px(ctx, cx - 10, by - 8, 20, 12, pal.bentleyCaramel);
    // head
    px(ctx, cx - 7, by - 16, 14, 10, pal.bentleyCaramel);
    // huge ears
    px(ctx, cx - 12, by - 15 + earFlop, 6, 12, pal.bentleyCaramel);
    px(ctx, cx + 6, by - 15 - earFlop, 6, 12, pal.bentleyCaramel);
    // legs
    px(ctx, cx - 8, by + 4, 4, 6, pal.bobaPearl);
    px(ctx, cx + 4, by + 4, 4, 6, pal.bobaPearl);
    // snout + eye
    px(ctx, cx - 2, by - 10, 5, 4, pal.starWhite);
    px(ctx, cx - 4, by - 14, 2, 2, pal.shadowPixel);
    if (proud) px(ctx, cx + 8, by - 22, 10, 8, pal.starWhite); // little proud sparkle blank (kept subtle)
  }

  function drawCole(ctx, pal, cx, cy, t) {
    const by = cy + bob(t, 2, 900);
    px(ctx, cx - 6, by - 18, 12, 16, pal.taroPurple); // shirt
    px(ctx, cx - 5, by - 26, 10, 9, pal.edwardPale); // head
    // spiky hair
    for (let i = -1; i <= 1; i++) px(ctx, cx + i * 4 - 1, by - 31, 3, 6, pal.shadowPixel);
    // motion lines (baked into idle, per spec)
    px(ctx, cx + 8, by - 20, 6, 2, pal.starDim);
    px(ctx, cx + 10, by - 15, 6, 2, pal.starDim);
    px(ctx, cx - 8, by, 4, 8, pal.shadowPixel);
    px(ctx, cx + 4, by, 4, 8, pal.shadowPixel);
  }

  function drawHayden(ctx, pal, cx, cy, t) {
    const by = cy + bob(t, 1.5, 1400);
    px(ctx, cx - 6, by - 18, 12, 16, pal.dock); // buttoned shirt
    px(ctx, cx - 6, by - 12, 12, 2, pal.starWhite); // button placket
    px(ctx, cx - 5, by - 26, 10, 9, pal.bentleyCaramel === undefined ? pal.edwardPale : pal.edwardPale);
    px(ctx, cx - 8, by, 4, 8, pal.shadowPixel);
    px(ctx, cx + 4, by, 4, 8, pal.shadowPixel);
    // tiny ledger
    px(ctx, cx + 7, by - 12, 8, 10, pal.starWhite);
    px(ctx, cx + 8, by - 10, 6, 1, pal.shadowPixel);
    px(ctx, cx + 8, by - 7, 6, 1, pal.shadowPixel);
  }

  function drawGrandma(ctx, pal, cx, cy, t) {
    const by = cy + bob(t, 1.5, 1600);
    px(ctx, cx - 6, by - 16, 12, 14, pal.grandmaLilac); // cardigan
    px(ctx, cx - 5, by - 25, 10, 9, pal.edwardPale); // head
    px(ctx, cx - 6, by - 30, 12, 6, pal.ramenGold); // blonde bob
    // round glasses
    px(ctx, cx - 4, by - 22, 4, 3, pal.starWhite);
    px(ctx, cx + 1, by - 22, 4, 3, pal.starWhite);
    px(ctx, cx - 5, by - 21, 1, 1, pal.shadowPixel);
    px(ctx, cx + 4, by - 21, 1, 1, pal.shadowPixel);
    px(ctx, cx - 8, by, 4, 8, pal.shadowPixel);
    px(ctx, cx + 4, by, 4, 8, pal.shadowPixel);
    // broom
    px(ctx, cx + 8, by - 20, 2, 20, pal.bobaBrown);
    px(ctx, cx + 5, by - 2, 8, 4, pal.ramenGold);
  }

  function drawBubble(ctx, pal, cx, topY, t) {
    const yy = topY + bob(t, 3, 900);
    px(ctx, cx - 6, yy - 14, 12, 12, pal.starWhite);
    ctx.fillStyle = pal.shadowPixel;
    ctx.font = 'bold 10px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('!', cx, yy - 5);
  }

  function drawLainie(ctx, pal, faceImg, cx, cy, t, facing, walking) {
    const step = walking && !REDUCED ? (Math.floor(t * 6) % 2) : 0;
    const legOff = step === 0 ? 0 : 2;
    // legs
    px(ctx, cx - 6, cy - 2, 4, 8, pal.bobaPearl);
    px(ctx, cx + 2, cy - 2 + (legOff), 4, 8 - legOff, pal.bobaPearl);
    // body
    px(ctx, cx - 7, cy - 14, 14, 13, pal.heartNeon);
    // head (real face image, circular)
    const hs = 16;
    if (faceImg) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy - 19, hs / 2, 0, Math.PI * 2);
      ctx.clip();
      const flip = facing === 'left';
      if (flip) { ctx.translate(cx * 2, 0); ctx.scale(-1, 1); }
      ctx.drawImage(faceImg, cx - hs / 2, cy - 19 - hs / 2, hs, hs);
      ctx.restore();
    } else {
      px(ctx, cx - hs / 2, cy - 19 - hs / 2, hs, hs, pal.edwardPale);
    }
  }

  /* ---------- dialogue engine ---------- */
  function makeDialogue(root, pal) {
    const box = U.el('div', 'l3__letterbox hidden');
    box.innerHTML =
      '<div class="l3__portrait"><canvas class="l3__portraitcanvas" width="64" height="64"></canvas></div>' +
      '<div class="l3__dwrap">' +
      '<div class="l3__speaker"></div>' +
      '<div class="l3__text"></div>' +
      '<div class="l3__sub"></div>' +
      '<div class="l3__choices hidden"></div>' +
      '</div>' +
      '<div class="l3__hint">▼</div>';
    root.appendChild(box);
    const portraitCanvas = box.querySelector('.l3__portraitcanvas');
    const pctx = portraitCanvas.getContext('2d');
    pctx.imageSmoothingEnabled = false;
    const speakerEl = box.querySelector('.l3__speaker');
    const textEl = box.querySelector('.l3__text');
    const subEl = box.querySelector('.l3__sub');
    const choicesEl = box.querySelector('.l3__choices');

    const state = { typing: false, skip: false, resolveAdvance: null, timer: null };
    let skipBtnEl = null;

    function onActivate() {
      if (choicesEl.classList.contains('hidden') === false) return; // waiting on a choice click
      if (state.typing) { state.skip = true; return; }
      if (state.resolveAdvance) { const r = state.resolveAdvance; state.resolveAdvance = null; r(); }
    }
    function boxPointer(e) { e.preventDefault(); onActivate(); }
    function boxKey(e) { if (e.code === 'Space') { e.preventDefault(); onActivate(); } }
    box.addEventListener('pointerdown', boxPointer);
    window.addEventListener('keydown', boxKey);

    function portraitDraw(kind) {
      pctx.clearRect(0, 0, 64, 64);
      const t = performance.now() / 1000;
      if (kind === 'bentley') drawBentley(pctx, pal, 32, 50, t, true);
      else if (kind === 'cole') drawCole(pctx, pal, 32, 50, t);
      else if (kind === 'hayden') drawHayden(pctx, pal, 32, 50, t);
      else if (kind === 'grandma') drawGrandma(pctx, pal, 32, 50, t);
    }

    function open(kind) {
      box.classList.remove('hidden');
      portraitDraw(kind);
    }
    function close() {
      box.classList.add('hidden');
      textEl.textContent = '';
      subEl.textContent = '';
      speakerEl.textContent = '';
      choicesEl.classList.add('hidden');
      choicesEl.innerHTML = '';
      hideSkip();
    }

    function typeInto(el, text, speedMs) {
      return new Promise((resolve) => {
        el.textContent = '';
        let i = 0;
        state.typing = true;
        state.skip = false;
        function step() {
          if (state.skip) {
            el.textContent = text;
            state.typing = false;
            state.skip = false;
            resolve();
            return;
          }
          i++;
          el.textContent = text.slice(0, i);
          if (i % 3 === 0) App.audio.play('type', { gain: 0.35 });
          if (i >= text.length) {
            state.typing = false;
            resolve();
            return;
          }
          state.timer = setTimeout(step, speedMs);
        }
        step();
      });
    }

    function waitAdvance() {
      return new Promise((resolve) => { state.resolveAdvance = resolve; });
    }

    async function showLine(speaker, text, sub, speedMs) {
      speakerEl.textContent = speaker;
      subEl.textContent = '';
      await typeInto(textEl, text, speedMs || 26);
      if (sub) { await typeInto(subEl, sub, (speedMs || 26) * 0.85); }
      await waitAdvance();
    }

    async function showAction(text) {
      speakerEl.textContent = '';
      textEl.textContent = '';
      await typeInto(subEl, text, 22);
      await waitAdvance();
      subEl.textContent = '';
    }

    function showChoice(options) {
      return new Promise((resolve) => {
        choicesEl.innerHTML = '';
        choicesEl.classList.remove('hidden');
        options.forEach((opt) => {
          const b = U.el('button', 'l3__choicebtn', opt.label);
          b.addEventListener('pointerdown', function h(e) {
            e.preventDefault();
            e.stopPropagation();
            choicesEl.classList.add('hidden');
            choicesEl.innerHTML = '';
            resolve(opt.key);
          });
          choicesEl.appendChild(b);
        });
      });
    }

    function showSkip(onCaught) {
      hideSkip();
      skipBtnEl = U.el('button', 'l3__skipbtn', '[SKIP]');
      box.appendChild(skipBtnEl);
      let dodges = 2;
      skipBtnEl.addEventListener('pointerdown', function h(e) {
        e.preventDefault();
        e.stopPropagation();
        if (dodges > 0) {
          dodges--;
          App.audio.play('teleport', { rate: U.rand(0.9, 1.15) });
          const maxL = Math.max(0, box.clientWidth - 90);
          const maxT = Math.max(0, box.clientHeight - 34);
          skipBtnEl.style.left = Math.round(U.rand(0, maxL)) + 'px';
          skipBtnEl.style.top = Math.round(U.rand(0, maxT)) + 'px';
          skipBtnEl.style.right = 'auto';
        } else {
          onCaught();
        }
      });
    }
    function hideSkip() {
      if (skipBtnEl && skipBtnEl.parentNode) skipBtnEl.parentNode.removeChild(skipBtnEl);
      skipBtnEl = null;
    }

    function destroy() {
      if (state.timer) clearTimeout(state.timer);
      box.removeEventListener('pointerdown', boxPointer);
      window.removeEventListener('keydown', boxKey);
      hideSkip();
      if (box.parentNode) box.parentNode.removeChild(box);
    }

    return { open, close, showLine, showAction, showChoice, showSkip, hideSkip, onActivate, state, destroy, get isOpen() { return !box.classList.contains('hidden'); } };
  }

  /* ============================================================ */

  let rafId = null;
  let cleanupFns = [];

  const def = {
    title: "BENTLEY'S ERRANDS",
    tagline: 'a tiny village. three menaces. one very good boy.',
    controls: 'arrows/joystick move · SPACE/tap talk',
    intro: { lines: ["do Bentley's 3 errands. survive the conversations."] },

    mount(container, api) {
      ensureStyles();
      cleanupFns = [];
      rafId = null;
      const pal = palette();
      container.innerHTML = '';
      if (REDUCED) container.classList.add('l3__reducedmotion');

      const root = U.el('div', 'l3__root');
      const canvas = U.el('canvas', 'l3__canvas');
      root.appendChild(canvas);
      container.appendChild(root);
      const ctx = canvas.getContext('2d');
      ctx.imageSmoothingEnabled = false;

      // logical world
      const LW = 256, LH = 176;
      const off = document.createElement('canvas');
      off.width = LW; off.height = LH;
      const octx = off.getContext('2d');
      octx.imageSmoothingEnabled = false;

      // touch controls
      const touchWrap = U.el('div', 'l3__touchctrls');
      const joyBase = U.el('div', 'l3__joybase');
      const joyKnob = U.el('div', 'l3__joyknob');
      joyBase.appendChild(joyKnob);
      const talkBtn = U.el('button', 'l3__talkbtn', 'TALK');
      touchWrap.appendChild(joyBase);
      touchWrap.appendChild(talkBtn);
      root.appendChild(touchWrap);

      const dlg = makeDialogue(root, pal);

      let faceImg = null;
      const img = new Image();
      img.onload = () => { faceImg = img; };
      img.src = 'assets/sprites/lainie_face.png';

      // world data (logical coords)
      const buildings = [
        { x: 8, y: 18, w: 40, h: 48, kind: 'house' },
        { x: 58, y: 18, w: 40, h: 48, kind: 'cole' },
        { x: 108, y: 18, w: 40, h: 48, kind: 'hayden' },
        { x: 158, y: 18, w: 40, h: 48, kind: 'house' },
        { x: 206, y: 18, w: 42, h: 48, kind: 'grandma' },
      ];
      const dirtPatches = [
        { x: 122, y: 126, r: 9 }, { x: 138, y: 134, r: 6 }, { x: 110, y: 138, r: 5 },
      ];

      const npcs = {
        bentley: { x: 128, y: 128, id: 'bentley' },
        cole: { x: 78, y: 86, id: 'cole' },
        hayden: { x: 128, y: 86, id: 'hayden' },
        grandma: { x: 228, y: 86, id: 'grandma' },
      };

      const player = { x: 128, y: 150, facing: 'down', walking: false, walkT: 0 };
      const keys = {};
      const joyVec = { x: 0, y: 0 };

      let questStarted = false;
      let bentleyGreeted = false;
      const errandsDone = { cole: false, hayden: false, grandma: false };
      let won = false;
      const doneCount = () => Object.values(errandsDone).filter(Boolean).length;
      const allDone = () => doneCount() === 3;

      function on(target, type, fn, opts) {
        target.addEventListener(type, fn, opts);
        cleanupFns.push(() => target.removeEventListener(type, fn, opts));
      }

      /* ---- input ---- */
      function onKeyDown(e) {
        if (dlg.isOpen) {
          if (e.code === 'Space') { e.preventDefault(); dlg.onActivate(); }
          return;
        }
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(e.code)) {
          keys[e.code] = true; e.preventDefault();
        }
        if (e.code === 'Space') { e.preventDefault(); tryInteract(); }
      }
      function onKeyUp(e) { keys[e.code] = false; }
      on(window, 'keydown', onKeyDown);
      on(window, 'keyup', onKeyUp);

      // joystick
      (function setupJoystick() {
        let active = false, pid = null, origin = { x: 0, y: 0 };
        const RADIUS = 34;
        function start(e) {
          active = true; pid = e.pointerId;
          try { joyBase.setPointerCapture(pid); } catch (err) {}
          const r = joyBase.getBoundingClientRect();
          origin = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
          move(e);
        }
        function move(e) {
          if (!active || e.pointerId !== pid) return;
          let dx = e.clientX - origin.x, dy = e.clientY - origin.y;
          const d = Math.hypot(dx, dy);
          if (d > RADIUS) { dx = (dx / d) * RADIUS; dy = (dy / d) * RADIUS; }
          joyKnob.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
          joyVec.x = dx / RADIUS; joyVec.y = dy / RADIUS;
        }
        function end(e) {
          if (e.pointerId !== pid) return;
          active = false; pid = null; joyVec.x = 0; joyVec.y = 0;
          joyKnob.style.transform = 'translate(0,0)';
        }
        on(joyBase, 'pointerdown', start);
        on(window, 'pointermove', move);
        on(window, 'pointerup', end);
        on(window, 'pointercancel', end);
      })();

      on(talkBtn, 'pointerdown', function (e) { e.preventDefault(); tryInteract(); });

      /* ---- npc dialogues ---- */
      async function bentleyIntro() {
        dlg.open('bentley');
        await dlg.showLine('BENTLEY', 'boof.', '(translation: greetings. i require three things. i ate the list.)');
        await dlg.showLine('BENTLEY', 'boof boof.', '(translation: 1. my ball. Cole "borrowed" it. 2. one (1) treat. Hayden has it and is treating it like an asset. 3. a snack for the tiny loud grandma. she knows why.)');
        await dlg.showLine('BENTLEY', '…boof.', '(translation: i believe in you more than i believe in squirrels. go.)');
        dlg.close();
        questStarted = true;
        bentleyGreeted = true;
        api.toast('errands: 0/3');
      }

      async function bentleyOutro() {
        dlg.open('bentley');
        await dlg.showLine('BENTLEY', 'BOOF!!', "(translation: flawless. you're my favorite. don't tell Corbin. actually tell him. he'll be so normal about it.)");
        dlg.close();
        won = true;
        api.win({
          heading: 'LEVEL CLEAR!',
          lines: ['errands complete. Cole is still talking to no one. Hayden invoiced the wind. grandma says hi (loudly).'],
        });
      }

      async function coleDialogue() {
        dlg.open('cole');
        let caught = false;
        dlg.showSkip(() => { caught = true; dlg.state.skip = true; if (dlg.state.resolveAdvance) { const r = dlg.state.resolveAdvance; dlg.state.resolveAdvance = null; r(); } });
        await dlg.showLine('COLE',
          "LAINIE hey hey hey ok so funny story about the ball I borrowed it for a science thing ok not science a test ok not a test I threw it on a roof BUT hear me out the roof is basically storage and also did I tell you about my new business idea it's like a food truck but for soup no WAIT for boba no WAIT both — soup boba — ok yes the ball here's the ball I got it down an hour ago I just wanted to talk",
          null, 13);
        if (!caught) await dlg.showAction('(receives: BALL 🎾)');
        else { dlg.state.typing = false; }
        await dlg.showLine('COLE', 'bye wait no one more thing — ok bye — WAIT — ok actually bye', null, 13);
        dlg.hideSkip();
        dlg.close();
        errandsDone.cole = true;
        api.toast('errand complete: got the ball');
        checkProgress();
      }

      async function haydenDialogue() {
        dlg.open('hayden');
        await dlg.showLine('HAYDEN', "Lainie. good. you want the dog treat. let's talk terms.");
        await dlg.showLine('HAYDEN', 'ITEM: dog treat (1) — market value: $0.30 — my price: $4.75 — reason: convenience fee, handling fee, "I had to hold it" fee.');
        const choice = await dlg.showChoice([
          { label: '[pay $4.75]', key: 'pay' },
          { label: '[remind him Corbin bought his lunch in 2022]', key: 'remind' },
        ]);
        if (choice === 'pay') {
          await dlg.showLine('HAYDEN', 'pleasure doing business. no refunds. tell no one I rounded down.');
        } else {
          dlg.state.timer && clearTimeout(dlg.state.timer);
          await U.wait(2000);
          await dlg.showLine('HAYDEN', "…debt acknowledged. take the treat. this never happened. I'm writing it off.");
        }
        dlg.close();
        errandsDone.hayden = true;
        api.toast('errand complete: got the treat');
        checkProgress();
      }

      async function grandmaDialogue() {
        dlg.open('grandma');
        await dlg.showLine('GRANDMA-LAINIE', "oh SWEETHEART there you are — WATCH THE FLOORS I JUST DID THEM — come here, you look just like me, isn't that FUNNY —");
        await dlg.showLine('GRANDMA-LAINIE', "I swept this porch four times today. it needed it once. that's not the point.");
        await dlg.showAction('(hand over snack)');
        await dlg.showLine('GRANDMA-LAINIE', "you tell that boy with the corvette he can come by IF he takes his shoes off. and tell the dog he's perfect and also BANNED from the flower beds.");
        await dlg.showLine('GRANDMA-LAINIE', "ok I love you, SPEAK UP next time, you're so quiet.");
        dlg.close();
        errandsDone.grandma = true;
        api.toast('errand complete: grandma says hi');
        checkProgress();
      }

      function checkProgress() {
        if (allDone() && !won) api.toast('all 3 done — go tell Bentley!');
      }

      function nearbyNPC() {
        let best = null, bestD = 26;
        Object.values(npcs).forEach((n) => {
          const d = Math.hypot(player.x - n.x, player.y - (n.y + 6));
          if (d < bestD) { bestD = d; best = n; }
        });
        return best;
      }

      function tryInteract() {
        if (dlg.isOpen || won) return;
        const n = nearbyNPC();
        if (!n) return;
        if (n.id === 'bentley') {
          if (!questStarted) bentleyIntro();
          else if (allDone()) bentleyOutro();
          else api.toast('errands: ' + doneCount() + '/3');
        } else if (!questStarted) {
          api.toast('talk to Bentley first.');
        } else if (n.id === 'cole' && !errandsDone.cole) coleDialogue();
        else if (n.id === 'hayden' && !errandsDone.hayden) haydenDialogue();
        else if (n.id === 'grandma' && !errandsDone.grandma) grandmaDialogue();
      }

      /* ---- update / render ---- */
      let last = 0;
      function update(dt) {
        let mx = 0, my = 0;
        if (keys.ArrowLeft || keys.KeyA) mx -= 1;
        if (keys.ArrowRight || keys.KeyD) mx += 1;
        if (keys.ArrowUp || keys.KeyW) my -= 1;
        if (keys.ArrowDown || keys.KeyS) my += 1;
        mx += joyVec.x; my += joyVec.y;
        const len = Math.hypot(mx, my);
        if (len > 1) { mx /= len; my /= len; }
        const speed = 62;
        if (mx || my) {
          player.x += mx * speed * dt;
          player.y += my * speed * dt;
          player.walking = true;
          player.walkT += dt;
          player.facing = Math.abs(mx) > Math.abs(my) ? (mx < 0 ? 'left' : 'right') : (my < 0 ? 'up' : 'down');
        } else {
          player.walking = false;
        }
        player.x = U.clamp(player.x, 10, LW - 10);
        player.y = U.clamp(player.y, 72, LH - 8);
        buildings.forEach((b) => {
          const pad = 4;
          if (player.x > b.x - pad && player.x < b.x + b.w + pad && player.y > b.y - pad && player.y < b.y + b.h + pad) {
            const dl = player.x - (b.x - pad), dr = (b.x + b.w + pad) - player.x;
            const dt2 = player.y - (b.y - pad), db = (b.y + b.h + pad) - player.y;
            const m = Math.min(dl, dr, dt2, db);
            if (m === dt2) player.y = b.y + b.h + pad;
            else if (m === db) player.y = b.y - pad;
            else if (m === dl) player.x = b.x - pad;
            else player.x = b.x + b.w + pad;
          }
        });
      }

      function render(t) {
        // ground
        octx.fillStyle = pal.lincolnMud;
        octx.fillRect(0, 0, LW, LH);
        // path
        octx.fillStyle = pal.bobaBrown;
        octx.fillRect(0, LH - 34, LW, 34);
        // dirt patches
        dirtPatches.forEach((d) => drawDirtPatch(octx, pal, d.x, d.y, d.r));
        // buildings
        buildings.forEach((b) => {
          drawHouse(octx, pal, b.x, b.y, b.w, b.h, { spotless: b.kind === 'grandma' });
        });
        // NPCs
        drawBentley(octx, pal, npcs.bentley.x, npcs.bentley.y, t, true);
        drawCole(octx, pal, npcs.cole.x, npcs.cole.y, t);
        drawHayden(octx, pal, npcs.hayden.x, npcs.hayden.y, t);
        drawGrandma(octx, pal, npcs.grandma.x, npcs.grandma.y, t);

        if (!questStarted) drawBubble(octx, pal, npcs.bentley.x, npcs.bentley.y - 26, t);
        else {
          if (!errandsDone.cole) drawBubble(octx, pal, npcs.cole.x, npcs.cole.y - 26, t);
          if (!errandsDone.hayden) drawBubble(octx, pal, npcs.hayden.x, npcs.hayden.y - 26, t);
          if (!errandsDone.grandma) drawBubble(octx, pal, npcs.grandma.x, npcs.grandma.y - 26, t);
          if (allDone() && !won) drawBubble(octx, pal, npcs.bentley.x, npcs.bentley.y - 26, t);
        }

        drawLainie(octx, pal, faceImg, player.x, player.y, t, player.facing, player.walking);

        // blit letterboxed to visible canvas
        const cw = canvas.clientWidth || 1, ch = canvas.clientHeight || 1;
        const dpr = window.devicePixelRatio || 1;
        if (canvas.width !== Math.round(cw * dpr) || canvas.height !== Math.round(ch * dpr)) {
          canvas.width = Math.round(cw * dpr);
          canvas.height = Math.round(ch * dpr);
        }
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.imageSmoothingEnabled = false;
        ctx.fillStyle = pal.midnight;
        ctx.fillRect(0, 0, cw, ch);
        const scale = Math.min(cw / LW, ch / LH);
        const dw = LW * scale, dh = LH * scale;
        const ox = (cw - dw) / 2, oy = (ch - dh) / 2;
        ctx.drawImage(off, 0, 0, LW, LH, ox, oy, dw, dh);

        // talk prompt
        if (!dlg.isOpen && !won) {
          const n = nearbyNPC();
          if (n) {
            const px2 = ox + (n.x / LW) * dw;
            const py2 = oy + ((n.y - 34) / LH) * dh;
            ctx.font = '11px monospace';
            ctx.fillStyle = pal.starWhite;
            ctx.textAlign = 'center';
            ctx.fillText(App.util.isTouch ? 'TAP TALK' : 'SPACE: talk', px2, py2);
          }
        }
      }

      function frame(ts) {
        rafId = requestAnimationFrame(frame);
        if (!last) last = ts;
        let dt = (ts - last) / 1000;
        last = ts;
        dt = Math.min(dt, 0.05);
        if (!dlg.isOpen && !won) update(dt);
        render(ts / 1000);
      }
      rafId = requestAnimationFrame(frame);

      cleanupFns.push(() => dlg.destroy());
    },

    unmount() {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
      cleanupFns.forEach((fn) => { try { fn(); } catch (e) {} });
      cleanupFns = [];
    },
  };

  App.arcade.register('l3', def);
})();
