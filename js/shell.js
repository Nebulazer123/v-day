/* ============================================================
   shell.js — persistent layer (Agent A / shell)
   Starfield background, cursor trail, HUD bar, toast queue,
   confetti, konami code + duck mode.

   Exposes (for all other modules to call):
     App.toast(msg)
     App.confetti(count, originXfrac, originYfrac)
     App.trail.pause() / App.trail.resume()
     App.transition(cb)
   ============================================================ */
(function () {
  'use strict';
  if (!window.App) return;
  const U = App.util;
  const reducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------
     1. STARFIELD — DESIGN_SPEC §1.5
     --------------------------------------------------------- */
  (function starfield() {
    const canvas = document.getElementById('bg-starfield');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, dpr;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      w = window.innerWidth; h = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function makeStars(n, size, speed) {
      const arr = [];
      for (let i = 0; i < n; i++) {
        arr.push({
          x: U.rand(0, w || window.innerWidth),
          y: U.rand(0, h || window.innerHeight),
          size, speed,
          twinkleAt: U.rand(2, 9),
        });
      }
      return arr;
    }
    const far = makeStars(70, 1, 4);
    const near = makeStars(45, 2, 9);

    // the secret duck — drifts across the far layer ~every 90s, never referenced
    let duck = null;
    let lastDuckAt = performance.now();
    let nextDuckIn = U.rand(75000, 105000);
    function spawnDuck() {
      duck = { x: -20, y: U.rand(20, (h || window.innerHeight) * 0.5), speed: 14 };
    }

    let last = performance.now();
    function drawStatic() {
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.fillStyle = '#F4F1E8';
      [far, near].forEach((layer) => layer.forEach((s) => ctx.fillRect(s.x, s.y, s.size, s.size)));
      ctx.restore();
    }

    function frame(t) {
      const dt = Math.min((t - last) / 1000, 0.1);
      last = t;
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.fillStyle = '#F4F1E8';
      [far, near].forEach((layer) => {
        layer.forEach((s) => {
          s.x -= s.speed * dt;
          if (s.x < -4) s.x = w + 4;
          s.twinkleAt -= dt;
          let alpha = 1;
          if (s.twinkleAt <= 3 && s.twinkleAt > 0) {
            const p = 1 - s.twinkleAt / 3; // 0..1 across the 3s twinkle
            alpha = 0.2 + 0.8 * Math.abs(Math.sin(p * Math.PI));
          } else if (s.twinkleAt <= 0) {
            s.twinkleAt = U.rand(5, 9);
          }
          ctx.globalAlpha = alpha;
          ctx.fillRect(s.x, s.y, s.size, s.size);
        });
      });
      ctx.globalAlpha = 1;

      if (!duck && t - lastDuckAt > nextDuckIn) {
        spawnDuck();
        lastDuckAt = t;
        nextDuckIn = U.rand(75000, 105000);
      }
      if (duck) {
        duck.x += duck.speed * dt;
        ctx.fillStyle = '#FFD23F';
        ctx.fillRect(duck.x, duck.y, 6, 6);
        ctx.fillStyle = '#3B2417';
        ctx.fillRect(duck.x + 4, duck.y + 1, 1, 1);
        if (duck.x > w + 20) duck = null;
      }
      ctx.restore();
      requestAnimationFrame(frame);
    }

    if (reducedMotion) {
      drawStatic();
    } else {
      requestAnimationFrame(frame);
    }
  })();

  /* ---------------------------------------------------------
     2. CURSOR TRAIL — DESIGN_SPEC §2.1
     --------------------------------------------------------- */
  (function trail() {
    const layer = document.getElementById('trail-layer');
    if (!layer) return;
    let paused = false;
    let live = [];
    let toggle = 0;
    let lastX = null, lastY = null;
    const MAX = 24;

    function spawn(x, y, kind) {
      if (paused || reducedMotion) return;
      const p = document.createElement('div');
      p.className = 'trail-particle trail-particle--' + kind;
      p.style.left = x + 'px';
      p.style.top = y + 'px';
      layer.appendChild(p);
      live.push(p);
      if (live.length > MAX) {
        const old = live.shift();
        if (old && old.parentNode) old.remove();
      }
      setTimeout(() => {
        if (p.parentNode) p.remove();
        live = live.filter((n) => n !== p);
      }, 650);
    }

    if (!U.isTouch) {
      window.addEventListener('pointermove', (e) => {
        if (lastX == null) { lastX = e.clientX; lastY = e.clientY; return; }
        const dx = e.clientX - lastX, dy = e.clientY - lastY;
        if (Math.hypot(dx, dy) >= 40) {
          toggle = 1 - toggle;
          spawn(e.clientX, e.clientY, toggle ? 'heart' : 'pearl');
          lastX = e.clientX; lastY = e.clientY;
        }
      }, { passive: true });
    } else {
      window.addEventListener('touchstart', (e) => {
        const t = e.touches[0];
        if (!t) return;
        for (let i = 0; i < 5; i++) {
          setTimeout(() => spawn(t.clientX + U.rand(-10, 10), t.clientY + U.rand(-10, 10), 'heart'), i * 30);
        }
      }, { passive: true });
    }

    function pause() { paused = true; }
    function resume() { paused = false; }
    document.addEventListener('game:active', pause);
    document.addEventListener('game:idle', resume);
    App.trail = { pause, resume };
  })();

  /* ---------------------------------------------------------
     3. TOAST QUEUE — DESIGN_SPEC §9.12
     --------------------------------------------------------- */
  (function toastSys() {
    const el = document.getElementById('toast');
    if (!el) return;
    const queue = [];
    let showing = false;

    function playNext() {
      if (showing || !queue.length) return;
      showing = true;
      const msg = queue.shift();
      el.textContent = msg;
      el.classList.remove('hide');
      // force reflow so the animation restarts if re-triggered fast
      void el.offsetWidth;
      el.classList.add('show');
      setTimeout(() => {
        el.classList.remove('show');
        el.classList.add('hide');
        setTimeout(() => {
          el.classList.remove('hide');
          showing = false;
          playNext();
        }, 220);
      }, 250 + 1800);
    }

    App.toast = function (msg) {
      if (!msg) return;
      queue.push(msg);
      playNext();
    };
  })();

  /* ---------------------------------------------------------
     4. CONFETTI — DESIGN_SPEC §9.4
     --------------------------------------------------------- */
  (function confettiSys() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    }
    resize();
    window.addEventListener('resize', resize);

    const COLORS = ['#FF4D8D', '#FFB627', '#B388EB', '#33FF88'];
    let particles = [];
    let running = false;
    let last = performance.now();

    function spawnBurst(count, ox, oy) {
      const originX = (ox == null ? 0.5 : ox) * window.innerWidth;
      const originY = (oy == null ? 0.4 : oy) * window.innerHeight;
      for (let i = 0; i < count; i++) {
        // 60deg cone, generally upward/outward
        const angle = U.rand(-120, -60); // degrees, -90 is straight up
        const rad = angle * Math.PI / 180;
        const speed = U.rand(300, 600);
        particles.push({
          x: originX, y: originY,
          vx: Math.cos(rad) * speed,
          vy: Math.sin(rad) * speed,
          size: U.rand(6, 10),
          color: U.pick(COLORS),
          rot: U.rand(0, 360),
          vrot: U.rand(-540, 540),
          life: 0,
          maxLife: 1.8,
        });
      }
      if (!running) {
        running = true;
        last = performance.now();
        requestAnimationFrame(loop);
      }
    }

    function loop(t) {
      const dt = Math.min((t - last) / 1000, 0.05);
      last = t;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);
      particles.forEach((p) => {
        p.life += dt;
        p.vy += 1400 * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rot += p.vrot * dt;
      });
      particles = particles.filter((p) => p.life < p.maxLife);
      particles.forEach((p) => {
        const fadeStart = p.maxLife - 0.4;
        const alpha = p.life > fadeStart ? U.clamp(1 - (p.life - fadeStart) / 0.4, 0, 1) : 1;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot * Math.PI / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });
      ctx.restore();
      if (particles.length) {
        requestAnimationFrame(loop);
      } else {
        running = false;
      }
    }

    App.confetti = function (count, ox, oy) {
      if (reducedMotion) return; // respect reduced-motion: skip flashy burst entirely
      spawnBurst(count || 40, ox, oy);
    };
  })();

  /* ---------------------------------------------------------
     5. HUD BAR — DESIGN_SPEC §2.2
     --------------------------------------------------------- */
  (function hud() {
    const hudEl = document.getElementById('hud');
    const musicBtn = document.getElementById('hud-music');
    const sfxBtn = document.getElementById('hud-sfx');
    const resetBtn = document.getElementById('hud-reset');
    const logo = document.getElementById('hud-logo');
    const modal = document.getElementById('restart-modal');
    const restartYes = document.getElementById('restart-yes');
    const restartNo = document.getElementById('restart-no');
    if (!hudEl) return;

    let musicOn = true;
    function refreshMusicBtn() {
      musicBtn.title = musicOn ? 'music: yes obviously' : 'silence… like Lincoln';
      musicBtn.classList.toggle('hud__btn--off', !musicOn);
    }
    function refreshSfxBtn() {
      const muted = !!(App.audio && App.audio.muted);
      sfxBtn.textContent = muted ? '🔇' : '🔊';
      sfxBtn.title = muted ? 'the ducks can still hear you.' : 'sfx: on';
      sfxBtn.classList.toggle('hud__btn--off', muted);
    }
    refreshMusicBtn();
    refreshSfxBtn();

    if (musicBtn) musicBtn.addEventListener('click', () => {
      App.audio.play('click');
      musicOn = !musicOn;
      if (musicOn) { if (App.music) App.music.start(); }
      else { if (App.music) App.music.stop(); }
      refreshMusicBtn();
    });
    if (sfxBtn) sfxBtn.addEventListener('click', () => {
      App.audio.toggleMute();
      refreshSfxBtn();
      App.audio.play('click');
    });
    if (resetBtn) resetBtn.addEventListener('click', () => {
      App.audio.play('click');
      if (modal) modal.classList.remove('hidden');
    });
    if (restartNo) restartNo.addEventListener('click', () => {
      App.audio.play('click');
      if (modal) modal.classList.add('hidden');
    });
    if (restartYes) restartYes.addEventListener('click', () => {
      App.audio.play('click');
      App.state.reset();
      window.location.href = window.location.pathname;
    });

    document.addEventListener('screen:show', (e) => {
      if (e.detail && e.detail.id !== 'gate') {
        hudEl.classList.add('hud--visible');
      }
    });

    // touch fallback for konami code: tap the ♥ logo 7 times
    let tapCount = 0, tapTimer = null;
    if (logo) {
      logo.addEventListener('click', () => {
        tapCount++;
        clearTimeout(tapTimer);
        tapTimer = setTimeout(() => { tapCount = 0; }, 1500);
        if (tapCount >= 7) {
          tapCount = 0;
          if (window.__triggerDuckMode) window.__triggerDuckMode();
        }
      });
    }
  })();

  /* ---------------------------------------------------------
     6. KONAMI CODE + DUCK MODE — DESIGN_SPEC §2.3
     --------------------------------------------------------- */
  (function konami() {
    const seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','KeyB','KeyA'];
    let idx = 0;
    window.addEventListener('keydown', (e) => {
      if (e.code === seq[idx]) {
        idx++;
        if (idx === seq.length) { idx = 0; duckMode(); }
      } else {
        idx = (e.code === seq[0]) ? 1 : 0;
      }
    });

    let active = false;
    function duckMode() {
      if (active) return;
      active = true;
      const layer = document.getElementById('duck-parade');
      const total = 30;
      const duration = 10000;
      for (let i = 0; i < total; i++) {
        const delay = U.rand(0, duration - 1500);
        setTimeout(() => {
          if (!layer) return;
          const d = document.createElement('div');
          d.className = 'duck-parade__duck';
          d.textContent = '🦆';
          d.style.bottom = U.rand(0, 26) + 'px';
          d.style.animationDuration = U.rand(3, 5).toFixed(2) + 's, 0.5s';
          layer.appendChild(d);
          setTimeout(() => { if (d.parentNode) d.remove(); }, 5200);
        }, delay);
      }
      [0, 3200, 6400].forEach((t, i) => {
        setTimeout(() => App.audio.play('quack', { rate: 0.8 + i * 0.35 }), t);
      });
      App.toast('CLASSIFIED: yes. it was the ducks. it was always the ducks.');
      setTimeout(() => { active = false; }, duration);
    }
    window.__triggerDuckMode = duckMode;
  })();

  /* ---------------------------------------------------------
     7. TRANSITION HELPER (optional; router already animates via CSS)
     --------------------------------------------------------- */
  App.transition = function (cb) {
    const root = App.router.root();
    if (root) {
      root.classList.add('crt-wipe');
      setTimeout(() => root.classList.remove('crt-wipe'), 520);
    }
    setTimeout(() => { if (typeof cb === 'function') cb(); }, 250);
  };
})();
