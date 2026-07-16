/* ============================================================
   loading.js — SCREEN 2: FAKE-LOADING TROLL / love.exe (DESIGN_SPEC.md §4)
   Agent B. Vanilla JS, no deps beyond window.App (core.js/shell.js).
   Registers screen id: 'loading'.
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- scoped styles (injected once) ---------------- */
  function injectStyles() {
    if (document.getElementById('loading-styles')) return;
    const style = document.createElement('style');
    style.id = 'loading-styles';
    style.textContent = `
      .loading__stage{
        min-height:100%; width:100%;
        display:flex; align-items:center; justify-content:center;
        padding: var(--space-3,16px);
        box-sizing:border-box;
      }
      .loading__win{
        width:100%; max-width:420px;
        box-sizing:border-box;
        transform-origin:bottom center;
      }
      .loading__body{
        font-family:var(--font-system); font-size:20px; line-height:1.4;
        padding:16px; box-sizing:border-box;
      }
      .loading__status{
        min-height:2.4em; margin:0 0 12px; white-space:pre-wrap; word-break:break-word;
      }
      .loading__bar{
        display:flex; gap:2px; width:100%; height:18px;
        padding:3px; box-sizing:border-box;
        background: var(--shadow-pixel,#05070F);
        border: 2px solid var(--boba-pearl,#3B2417);
        margin-bottom:6px;
      }
      .loading__seg{
        flex:1 1 0; height:100%; background:transparent;
      }
      .loading__seg--fill{ background: var(--crt-green,#33FF88); }
      .loading__pct{
        font-family:var(--font-system); font-size:18px;
        text-align:right; color:var(--crt-green,#33FF88); margin:0;
      }
      .loading__cancel[disabled]{ cursor:not-allowed; opacity:0.7; }

      .loading__popups{
        position:fixed; inset:0; pointer-events:none; z-index:50;
      }
      .loading__popup{
        position:fixed; width:min(340px,92vw); box-sizing:border-box;
        pointer-events:auto;
      }
      .loading__poptitle{
        position:relative; display:flex; align-items:center; justify-content:space-between;
        cursor:grab; touch-action:none; user-select:none;
      }
      .loading__poptitle:active{ cursor:grabbing; }
      .loading__poptitle-text{
        font-family:var(--font-system); font-size:18px; padding-right:8px;
        overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
      }
      .loading__popclose{
        flex:0 0 auto;
      }
      .loading__popclose--dodging{
        position:absolute; top:0;
      }
      .loading__popbody{
        font-family:var(--font-body); font-size:15px; line-height:1.4;
        max-height:50vh; overflow:auto;
      }
      .loading__popbody p{ margin:0 0 10px; }
      .loading__popbtns{
        display:flex; gap:10px; flex-wrap:wrap;
      }
      .loading__bigbtn{
        font-size:1.4em; padding:14px 20px;
      }
      .loading__counter{
        position:fixed; left:0; right:0; bottom:0;
        display:flex; justify-content:center;
        padding:8px 12px; box-sizing:border-box;
        font-family:var(--font-arcade); font-size:10px;
        color:var(--star-white); background:var(--scrim,rgba(11,16,38,0.82));
        z-index:55;
      }
      .loading__interstitial{
        position:fixed; inset:0; z-index:80;
        display:flex; align-items:center; justify-content:center;
        background: var(--midnight-drive,#0B1026);
        padding: var(--space-3,16px); box-sizing:border-box;
      }
      .loading__term{
        font-family:var(--font-system); font-size:22px; color:var(--crt-green,#33FF88);
        line-height:1.6; margin:0; max-width:640px; white-space:pre-wrap; word-break:break-word;
      }
      .loading__term-line{ display:block; opacity:0; }
      .hidden{ display:none !important; }
      @media (prefers-reduced-motion: reduce){
        .loading__win{ transition:none !important; }
        .loading__term-line{ animation:none !important; opacity:1 !important; }
      }
    `;
    document.head.appendChild(style);
  }

  /* ---------------- build DOM ---------------- */
  injectStyles();

  const root = App.util.el('section', 'loading');
  const stage = App.util.el('div', 'loading__stage');

  const win = App.util.el('div', 'win98 loading__win');
  win.innerHTML = `
    <div class="win98__title">
      <span>love.exe — InstallShield Wizard (not suspicious)</span>
    </div>
    <div class="win98__body loading__body">
      <p class="loading__status" id="loading-status">Installing love.exe …</p>
      <div class="loading__bar" id="loading-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"></div>
      <p class="loading__pct" id="loading-pct">0%</p>
    </div>
    <div class="win98__btnrow">
      <button class="btn btn--sys loading__cancel" id="loading-cancel" type="button" disabled title="you can't cancel love, Lainie.">Cancel</button>
    </div>
  `;
  stage.appendChild(win);
  root.appendChild(stage);

  const popupsRoot = App.util.el('div', 'loading__popups hidden');
  root.appendChild(popupsRoot);

  const counterEl = App.util.el('div', 'loading__counter hidden');
  root.appendChild(counterEl);

  const interstitialEl = App.util.el('div', 'loading__interstitial hidden');
  root.appendChild(interstitialEl);

  App.router.register('loading', root);

  const barEl = win.querySelector('#loading-bar');
  const statusEl = win.querySelector('#loading-status');
  const pctEl = win.querySelector('#loading-pct');
  const SEG_COUNT = 20;

  function buildSegments() {
    barEl.innerHTML = '';
    for (let i = 0; i < SEG_COUNT; i++) {
      barEl.appendChild(App.util.el('span', 'win98__seg loading__seg'));
    }
  }
  buildSegments();

  /* ---------------- helpers ---------------- */
  function reducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  function semitoneRate(semis) { return Math.pow(2, semis / 12); }

  function shakeEl(target, amplitude, duration) {
    if (reducedMotion()) return;
    const frames = 6;
    const frameDur = duration / frames;
    let i = 0;
    const id = setInterval(() => {
      i++;
      const amp = amplitude * (1 - i / frames);
      const dx = App.util.rand(-amp, amp);
      const dy = App.util.rand(-amp, amp);
      target.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
      if (i >= frames) { clearInterval(id); target.style.transform = ''; }
    }, frameDur);
  }

  /* ---------------- progress bar (§4.1 + §9.11 progress-slam) ---------------- */
  let displayedPct = 0;
  let tweenRAF = null;

  function fmtPct(p) {
    const r = Math.round(p * 10) / 10;
    return (Number.isInteger(r) ? String(r) : r.toFixed(1)) + '%';
  }

  function renderBar(pct) {
    const filled = App.util.clamp(Math.round(pct / 5), 0, SEG_COUNT);
    const segs = barEl.children;
    for (let i = 0; i < segs.length; i++) {
      segs[i].classList.toggle('loading__seg--fill', i < filled);
    }
    barEl.setAttribute('aria-valuenow', String(Math.max(0, Math.round(pct))));
    pctEl.textContent = fmtPct(pct);
  }

  function animateBarTo(target, duration) {
    if (tweenRAF) cancelAnimationFrame(tweenRAF);
    if (reducedMotion() || duration <= 0) {
      displayedPct = target;
      renderBar(displayedPct);
      return;
    }
    const start = displayedPct;
    const t0 = performance.now();
    function frame(now) {
      const p = Math.min(1, (now - t0) / duration);
      displayedPct = start + (target - start) * p;
      renderBar(displayedPct);
      if (p < 1) {
        tweenRAF = requestAnimationFrame(frame);
      } else {
        displayedPct = target;
        renderBar(displayedPct);
      }
    }
    tweenRAF = requestAnimationFrame(frame);
  }

  function setProgress(pct, status) {
    statusEl.textContent = status;
    const backward = pct < displayedPct - 0.001;
    if (backward) {
      App.audio.play('error');
      shakeEl(win, 4, 120);
      animateBarTo(pct, 120);
    } else {
      animateBarTo(pct, 400);
    }
  }

  const INSTALL_STEPS = [
    { t: 0, pct: 0, status: 'Installing love.exe …' },
    { t: 2, pct: 12, status: 'Loading feelings ............ ok' },
    { t: 4, pct: 47, status: 'Reticulating heart splines ... ok' },
    { t: 6, pct: 99, status: 'Almost there!' },
    { t: 6.5, pct: 12, status: "ok that's my bad" },
    { t: 9, pct: 38, status: 'Downloading ramen (2 servings) ... ok' },
    { t: 11, pct: 61, status: 'Brewing boba ... 0 shops found in Lincoln ... importing' },
    { t: 14, pct: 84, status: 'Consulting the ducks ......... [REDACTED]' },
    { t: 16, pct: -3, status: 'wait. negative? how' },
    { t: 18, pct: 69, status: 'nice.' },
    { t: 20, pct: 91, status: 'Polishing corvette ........... ok' },
    { t: 22, pct: 99.9, status: 'Do NOT close this window' },
    { t: 24, pct: 100, status: "love.exe installed. it was already installed. it's been installed since August 2023." },
  ];

  let runId = 0;

  async function runInstallSequence(myRun) {
    let prevT = 0;
    for (const step of INSTALL_STEPS) {
      const delta = (step.t - prevT) * 1000;
      if (delta > 0) await App.util.wait(delta);
      if (myRun !== runId) return;
      setProgress(step.pct, step.status);
      prevT = step.t;
    }
    if (myRun !== runId) return;
    App.audio.play('fanfare');
    await App.util.wait(500);
    if (myRun !== runId) return;
    minimizeWindow();
    await App.util.wait(450);
    if (myRun !== runId) return;
    startPopupCascade(myRun);
  }

  function minimizeWindow() {
    win.style.transition = 'transform 400ms var(--ease-heavy,ease-in), opacity 400ms ease-in';
    win.style.transform = 'translateY(45vh) scale(0.08)';
    win.style.opacity = '0';
    setTimeout(() => { win.style.display = 'none'; }, 420);
  }

  /* ---------------- popup cascade (§4.2) ---------------- */
  let popup3Windows = [];
  let popup3Count = 0;
  const POPUP3_CAP = 5;
  let resolved = { popup1: false, popup2: false, popup3: false };
  let remaining = 3;
  let topZ = 100;

  function updateCounter() {
    counterEl.textContent = remaining > 0
      ? `problems remaining: ${remaining}`
      : 'problems remaining: 0 (for now)';
  }

  function resolveProblem(key, myRun) {
    if (resolved[key]) return;
    resolved[key] = true;
    remaining = Math.max(0, remaining - 1);
    updateCounter();
    if (resolved.popup1 && resolved.popup2 && resolved.popup3) {
      App.util.wait(600).then(() => {
        if (myRun !== runId) return;
        startExitInterstitial(myRun);
      });
    }
  }

  function clampPos(x, y, w, h) {
    const pad = 8;
    const maxX = Math.max(pad, window.innerWidth - w - pad);
    const maxY = Math.max(pad, window.innerHeight - h - pad);
    return { x: App.util.clamp(x, pad, maxX), y: App.util.clamp(y, pad, maxY) };
  }

  function makeDraggable(winEl, handle) {
    let dragging = false, startX = 0, startY = 0, originX = 0, originY = 0;
    handle.addEventListener('pointerdown', (e) => {
      dragging = true;
      startX = e.clientX; startY = e.clientY;
      const rect = winEl.getBoundingClientRect();
      originX = rect.left; originY = rect.top;
      try { handle.setPointerCapture(e.pointerId); } catch (err) {}
      winEl.style.zIndex = String(++topZ);
    });
    handle.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const dx = e.clientX - startX, dy = e.clientY - startY;
      const w = winEl.offsetWidth, h = winEl.offsetHeight;
      const pos = clampPos(originX + dx, originY + dy, w, h);
      winEl.style.left = pos.x + 'px';
      winEl.style.top = pos.y + 'px';
    });
    function endDrag() { dragging = false; }
    handle.addEventListener('pointerup', endDrag);
    handle.addEventListener('pointercancel', endDrag);
  }

  function createPopupWindow(opts) {
    const w = App.util.el('div', 'win98 loading__popup');
    const pos = clampPos(opts.x, opts.y, 340, 200);
    w.style.left = pos.x + 'px';
    w.style.top = pos.y + 'px';
    w.style.zIndex = String(++topZ);
    w.innerHTML = `
      <div class="win98__title loading__poptitle">
        <span class="loading__poptitle-text">${opts.title}</span>
        <button class="win98__x loading__popclose" type="button" aria-label="close">✕</button>
      </div>
      <div class="win98__body loading__popbody">${opts.bodyHTML}</div>
    `;
    popupsRoot.appendChild(w);
    const titleBar = w.querySelector('.loading__poptitle');
    makeDraggable(w, titleBar);
    return w;
  }

  function spawnPopup1(x, y, myRun) {
    App.audio.play('error');
    const w = createPopupWindow({
      title: 'Corbin Scanner Pro v2.0',
      x, y,
      bodyHTML: `
        <p>Scan complete.</p>
        <p>4,000 photos of Corbin found on this device.</p>
        <p>This is a normal amount. Do not investigate.</p>
        <div class="win98__btnrow loading__popbtns">
          <button class="btn btn--sys" type="button" data-act="keep1">Keep All 4,000</button>
          <button class="btn btn--sys loading__bigbtn" type="button" data-act="keep2">Keep All 4,000 (bigger button)</button>
        </div>
      `,
    });
    function done() {
      App.audio.play('click');
      w.remove();
      resolveProblem('popup1', myRun);
    }
    w.querySelector('[data-act="keep1"]').addEventListener('click', done);
    w.querySelector('[data-act="keep2"]').addEventListener('click', done);
    w.querySelector('.loading__popclose').addEventListener('click', done);
  }

  function spawnPopup2(x, y, myRun) {
    App.audio.play('error', { rate: semitoneRate(1) });
    const w = createPopupWindow({
      title: 'ERROR: FEELINGS.DLL',
      x, y,
      bodyHTML: `
        <p>A fatal exception has occurred: Corbin thought about you at 2:47 AM and did not text "you up?" This restraint requires a system reward.</p>
        <div class="win98__btnrow loading__popbtns">
          <button class="btn btn--sys" type="button" data-act="ok">OK</button>
        </div>
      `,
    });
    const xBtn = w.querySelector('.loading__popclose');
    const titleBar = w.querySelector('.loading__poptitle');
    titleBar.style.position = 'relative';
    xBtn.classList.add('loading__popclose--dodging');
    xBtn.style.right = '4px';
    xBtn.style.left = 'auto';
    xBtn.style.transition = 'left 150ms ease-out, right 150ms ease-out';
    let dodges = 0;
    const DODGE_MAX = 5;
    let side = 'right';

    function onMove(e) {
      if (dodges >= DODGE_MAX) return;
      const r = xBtn.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const d = Math.hypot(e.clientX - cx, e.clientY - cy);
      if (d < 40) {
        dodges++;
        App.audio.play('blip');
        if (side === 'right') {
          xBtn.style.left = '4px'; xBtn.style.right = 'auto'; side = 'left';
        } else {
          xBtn.style.right = '4px'; xBtn.style.left = 'auto'; side = 'right';
        }
        if (dodges >= DODGE_MAX) {
          xBtn.title = 'fine.';
          document.removeEventListener('pointermove', onMove);
        }
      }
    }
    document.addEventListener('pointermove', onMove);

    function done() {
      document.removeEventListener('pointermove', onMove);
      App.audio.play('click');
      w.remove();
      resolveProblem('popup2', myRun);
    }
    xBtn.addEventListener('click', done);
    w.querySelector('[data-act="ok"]').addEventListener('click', done);
  }

  function popup3Body() {
    return `
      <p>Are you sure you want to continue to the quiz? Corbin worked really hard on the quiz. Like, embarrassingly hard.</p>
      <div class="win98__btnrow loading__popbtns">
        <button class="btn" type="button" data-act="yes">Yes, continue</button>
        <button class="btn btn--no" type="button" data-act="no">No</button>
      </div>
    `;
  }

  function updatePopup3NoLabels() {
    if (popup3Count < POPUP3_CAP) return;
    popup3Windows.forEach((w) => {
      const noBtn = w.querySelector('[data-act="no"]');
      if (noBtn) noBtn.textContent = 'No (this does nothing)';
    });
  }

  function closeAllPopup3(myRun) {
    const wins = popup3Windows.slice();
    popup3Windows = [];
    wins.forEach((w, i) => {
      setTimeout(() => { App.audio.play('click'); w.remove(); }, i * 40);
    });
    resolveProblem('popup3', myRun);
  }

  function spawnPopup3(x, y, myRun) {
    if (popup3Count >= POPUP3_CAP) return;
    popup3Count++;
    App.audio.play('error', { rate: semitoneRate(popup3Count - 1) });
    const w = createPopupWindow({ title: 'Are you sure?', x, y, bodyHTML: popup3Body() });
    popup3Windows.push(w);

    const yesBtn = w.querySelector('[data-act="yes"]');
    const noBtn = w.querySelector('[data-act="no"]');
    const xBtn = w.querySelector('.loading__popclose');

    yesBtn.addEventListener('click', () => closeAllPopup3(myRun));
    noBtn.addEventListener('click', () => {
      if (popup3Count >= POPUP3_CAP) {
        App.audio.play('blip');
        return;
      }
      const r = w.getBoundingClientRect();
      spawnPopup3(r.left + 32, r.top + 32, myRun);
      updatePopup3NoLabels();
    });
    // the X mirrors the No gag so "only Yes closes everything" stays true
    xBtn.addEventListener('click', () => noBtn.click());
  }

  async function startPopupCascade(myRun) {
    popupsRoot.classList.remove('hidden');
    counterEl.classList.remove('hidden');
    resolved = { popup1: false, popup2: false, popup3: false };
    remaining = 3;
    popup3Windows = [];
    popup3Count = 0;
    updateCounter();

    const baseX = Math.max(16, window.innerWidth / 2 - 170);
    const baseY = Math.max(16, window.innerHeight / 2 - 140);

    spawnPopup1(baseX, baseY, myRun);
    await App.util.wait(450);
    if (myRun !== runId) return;
    spawnPopup2(baseX + 32, baseY + 32, myRun);
    await App.util.wait(450);
    if (myRun !== runId) return;
    spawnPopup3(baseX + 64, baseY + 64, myRun);
  }

  /* ---------------- exit interstitial (§4.3) ---------------- */
  function startExitInterstitial(myRun) {
    popupsRoot.classList.add('hidden');
    popupsRoot.innerHTML = '';
    counterEl.classList.add('hidden');

    interstitialEl.innerHTML = `
      <pre class="loading__term"><span class="loading__term-line" style="animation:loadingTermIn 200ms ease 0ms forwards">&gt; launching quiz.exe</span>
<span class="loading__term-line" style="animation:loadingTermIn 200ms ease 250ms forwards">&gt; difficulty: IMPOSSIBLE</span>
<span class="loading__term-line" style="animation:loadingTermIn 200ms ease 500ms forwards">&gt; curve: none</span>
<span class="loading__term-line" style="animation:loadingTermIn 200ms ease 750ms forwards, loadingTermFlash 300ms steps(2) 950ms">&gt; good luck. you'll need it. (you won't. you'll get 200%.)</span></pre>
    `;
    if (!document.getElementById('loading-term-kf')) {
      const kf = document.createElement('style');
      kf.id = 'loading-term-kf';
      kf.textContent = `
        @keyframes loadingTermIn{ from{opacity:0;} to{opacity:1;} }
        @keyframes loadingTermFlash{ 0%{opacity:1;}25%{opacity:0.15;}50%{opacity:1;}75%{opacity:0.15;}100%{opacity:1;} }
      `;
      document.head.appendChild(kf);
    }
    interstitialEl.classList.remove('hidden');
    App.audio.play('blip');
    App.util.wait(2500).then(() => {
      if (myRun !== runId) return;
      App.router.show('quiz');
    });
  }

  /* ---------------- (re)start on show ---------------- */
  function resetLoadingDOM() {
    win.style.transition = '';
    win.style.transform = '';
    win.style.opacity = '';
    win.style.display = '';
    displayedPct = 0;
    buildSegments();
    renderBar(0);
    statusEl.textContent = 'Installing love.exe …';
    popupsRoot.classList.add('hidden');
    popupsRoot.innerHTML = '';
    counterEl.classList.add('hidden');
    counterEl.textContent = '';
    interstitialEl.classList.add('hidden');
    interstitialEl.innerHTML = '';
    popup3Windows = [];
    popup3Count = 0;
    resolved = { popup1: false, popup2: false, popup3: false };
    remaining = 3;
  }

  App.router.onShow('loading', () => {
    runId++;
    const myRun = runId;
    resetLoadingDOM();
    App.audio.play('error', { gain: 0.5 }); // Win98 open chime (error-adjacent per spec)
    runInstallSequence(myRun);
  });

  App.router.onHide('loading', () => {
    runId++; // invalidate any in-flight async continuations
  });
})();
