/* ============================================================
   gate.js — SCREEN 1: THE GATEKEEPER  (DESIGN_SPEC.md §3)
   Agent B. Vanilla JS, no deps beyond window.App (core.js/shell.js).
   Registers screen id: 'gate'.
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- scoped styles (injected once) ---------------- */
  function injectStyles() {
    if (document.getElementById('gate-styles')) return;
    const style = document.createElement('style');
    style.id = 'gate-styles';
    style.textContent = `
      .gate__wrap{
        min-height:100%; width:100%;
        display:flex; align-items:center; justify-content:center;
        padding: var(--space-4,24px) var(--space-3,16px);
        box-sizing:border-box;
      }
      .gate__card{
        max-width:560px; width:100%;
        display:flex; flex-direction:column; align-items:center;
        gap:16px; text-align:center;
        padding:32px 24px; box-sizing:border-box;
        position:relative;
      }
      .gate__heart{
        width:48px; height:42px; flex:0 0 auto;
        animation: gateHeartBob 1.2s steps(2) infinite;
      }
      .gate__heart-px{
        display:block; width:100%; height:100%;
      }
      .gate__question{
        font-family:var(--font-arcade); font-size:20px; line-height:1.6;
        color:var(--star-white); margin:0;
      }
      .gate__sub{
        font-family:var(--font-body); font-weight:700; font-size:16px;
        color:var(--star-dim); margin:0; min-height:2.6em;
        max-width:46ch;
      }
      .gate__btnrow{
        display:flex; gap:16px; flex-wrap:wrap;
        align-items:center; justify-content:center;
        width:100%;
      }
      .gate__yes, .gate__no{
        width:160px; height:56px; max-width:90vw;
        font-family:var(--font-arcade); font-size:14px;
        scale:1;
      }
      .gate__yes{ transform-origin:center center; }
      .gate__yes.gate__wobble{ animation: gateWobble 350ms ease; }
      .gate__no{ position:relative; }
      .gate__no--flash{ outline:2px solid #fff; opacity:0; }
      .gate__no--popin{ animation: gateNoPopIn 150ms var(--ease-spring,cubic-bezier(.34,1.56,.64,1)); }
      .gate__no--sigh{ animation: gateSigh 500ms ease; }
      .gate__no--morphing{ animation: gateMorph 300ms ease; }
      .gate__no-ghost{ visibility:hidden; display:inline-block; }
      .gate__footer{
        font-family:var(--font-arcade); font-size:8px; line-height:1.6;
        color:var(--star-dim); margin:8px 0 0;
      }
      @keyframes gateHeartBob{
        0%,100%{ transform:translateY(0); }
        50%{ transform:translateY(-3px); }
      }
      @keyframes gateWobble{
        0%{ rotate:0deg; }
        30%{ rotate:-2deg; }
        65%{ rotate:2deg; }
        100%{ rotate:0deg; }
      }
      @keyframes gateNoPopIn{
        0%{ transform:scale(0.6); }
        100%{ transform:scale(1); }
      }
      @keyframes gateSigh{
        0%{ transform:scale(1,1); }
        30%{ transform:scale(1.18,0.82); }
        60%{ transform:scale(0.9,1.12); }
        100%{ transform:scale(1,1); }
      }
      @keyframes gateMorph{
        0%{ opacity:0.25; transform:scale(0.85); }
        100%{ opacity:1; transform:scale(1); }
      }
      @media (prefers-reduced-motion: reduce){
        .gate__heart,
        .gate__yes.gate__wobble,
        .gate__no--popin,
        .gate__no--sigh,
        .gate__no--morphing{ animation:none !important; }
      }
    `;
    document.head.appendChild(style);
  }

  /* ---------------- pixel heart sprite (box-shadow raster) ---------------- */
  function buildPixelHeart() {
    // classic 8-wide x 7-tall pixel heart, cell = 6px
    const rows = [
      '01100110',
      '11111111',
      '11111111',
      '11111111',
      '01111110',
      '00111100',
      '00011000',
    ];
    const cell = 6;
    let shadow = [];
    rows.forEach((row, y) => {
      for (let x = 0; x < row.length; x++) {
        if (row[x] === '1') {
          shadow.push(`${x * cell}px ${y * cell}px 0 0 var(--heart-neon,#FF4D8D)`);
        }
      }
    });
    const px = App.util.el('span', 'gate__heart-px px');
    px.style.position = 'relative';
    px.style.display = 'block';
    px.style.width = cell + 'px';
    px.style.height = cell + 'px';
    px.style.boxShadow = shadow.join(',');
    px.style.marginLeft = '20px';
    px.style.marginTop = '3px';
    return px;
  }

  /* ---------------- build DOM ---------------- */
  injectStyles();

  const root = App.util.el('section', 'gate');
  const wrap = App.util.el('div', 'gate__wrap');
  const card = App.util.el('div', 'card gate__card');

  const heartWrap = App.util.el('div', 'gate__heart');
  heartWrap.appendChild(buildPixelHeart());

  const question = App.util.el('h1', 'gate__question', 'IS THIS LAINIE?');

  const sub = App.util.el('p', 'gate__sub', 'security question. the ducks require verification.');
  sub.id = 'gate-sub';

  const btnRow = App.util.el('div', 'gate__btnrow');
  const yesBtn = App.util.el('button', 'btn gate__yes', 'YES, OBVIOUSLY');
  yesBtn.type = 'button';
  const noBtn = App.util.el('button', 'btn btn--no gate__no', 'no');
  noBtn.type = 'button';
  btnRow.appendChild(yesBtn);
  btnRow.appendChild(noBtn);

  const footer = App.util.el('p', 'gate__footer', 'certified secure by the Department of Ducks');

  card.appendChild(heartWrap);
  card.appendChild(question);
  card.appendChild(sub);
  card.appendChild(btnRow);
  card.appendChild(footer);
  wrap.appendChild(card);
  root.appendChild(wrap);

  App.router.register('gate', root);

  /* ---------------- state ---------------- */
  const YES_LABELS = ['YES, OBVIOUSLY', 'YES!!', 'SHE SAID YES', 'LET HER IN!!!'];
  const NO_TABLE = [
    null,
    { sub: 'hm. the corvette says otherwise.', label: 'no?' },
    { sub: 'Bentley just looked up. he heard that.', label: 'wait no' },
    { sub: 'ok now the ducks are involved. this is serious.', label: 'um' },
    { sub: 'Lainie. we have your gym check-in records.', label: 'no ❤' },
  ];
  const TAUNTS = [
    'nice try',
    'too slow',
    'the button has trust issues now',
    "it's faster than a duck and twice as smart",
    'just press yes baby',
  ];
  const YES_BASE_W = 160;
  const TELEPORT_MIN_DIST = 240;
  const TELEPORT_PAD = 24;
  const TELEPORT_PROXIMITY = 90;
  const TELEPORT_COOLDOWN = 120;
  const MERCY_DODGES = 10;

  let proceeding = false;
  let yesClicks = 0;
  let noClicks = 0;
  let yesScale = 1;
  let teleportActive = false;
  let mercyTriggered = false;
  let dodgeCount = 0;
  let lastTeleportAt = 0;
  let lastTauntIdx = -1;
  let ghostEl = null;

  function reducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  function semitoneRate(semis) { return Math.pow(2, semis / 12); }

  /* ---------------- generic screen-shake (§9.10) ---------------- */
  function screenShake(target, amplitude, duration) {
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
      if (i >= frames) {
        clearInterval(id);
        target.style.transform = '';
      }
    }, frameDur);
  }

  /* ---------------- YES button (reward path, §3.2) ---------------- */
  function heartBurst(btn) {
    if (typeof App.confetti !== 'function') return;
    const r = btn.getBoundingClientRect();
    const xf = (r.left + r.width / 2) / window.innerWidth;
    const yf = (r.top + r.height / 2) / window.innerHeight;
    App.confetti(5, xf, yf);
  }

  function applyYesGrowth() {
    yesScale *= 1.25;
    const maxScale = (window.innerWidth * 0.9) / YES_BASE_W;
    if (yesScale > maxScale) yesScale = maxScale;
    yesBtn.style.scale = String(yesScale);
  }

  function triggerWobble(btn) {
    btn.classList.remove('gate__wobble');
    void btn.offsetWidth;
    btn.classList.add('gate__wobble');
  }

  function yesClick() {
    if (proceeding) return;
    yesClicks++;
    App.audio.play('coin', { rate: semitoneRate(2 * (yesClicks - 1)) });
    applyYesGrowth();
    triggerWobble(yesBtn);
    if (yesClicks <= 3) yesBtn.textContent = YES_LABELS[yesClicks];
    if (yesClicks === 2) heartBurst(yesBtn);
    if (yesClicks === 3) screenShake(card, 4, 200);
    if (yesClicks >= 4) proceed();
  }

  function proceed() {
    if (proceeding) return;
    proceeding = true;
    teardownTeleport();
    App.router.show('loading');
    App.toast("identity confirmed: it's her. play it cool.");
    if (noClicks === 0) {
      App.toast("wow. first try. she's so smart.");
    }
  }

  /* ---------------- NO button (troll path, §3.3) ---------------- */
  function noClick() {
    noClicks++;
    App.audio.play('error');
    const scale = Math.pow(0.88, noClicks);
    noBtn.style.scale = String(scale);
    if (noClicks <= 4) {
      const t = NO_TABLE[noClicks];
      sub.textContent = t.sub;
      noBtn.textContent = t.label;
    }
    if (noClicks >= 4) {
      enterTeleportMode();
    }
  }

  function distToRect(px, py, rect) {
    const dx = Math.max(rect.left - px, 0, px - rect.right);
    const dy = Math.max(rect.top - py, 0, py - rect.bottom);
    return Math.sqrt(dx * dx + dy * dy);
  }

  function pickTaunt() {
    let idx;
    do { idx = App.util.randInt(0, TAUNTS.length - 1); } while (idx === lastTauntIdx && TAUNTS.length > 1);
    lastTauntIdx = idx;
    return TAUNTS[idx];
  }

  function positionRandom(btn) {
    const w = btn.offsetWidth || YES_BASE_W;
    const h = btn.offsetHeight || 56;
    const maxX = Math.max(TELEPORT_PAD, window.innerWidth - w - TELEPORT_PAD);
    const maxY = Math.max(TELEPORT_PAD, window.innerHeight - h - TELEPORT_PAD);
    const cur = btn.getBoundingClientRect();
    let x, y, tries = 0;
    do {
      x = App.util.rand(TELEPORT_PAD, maxX);
      y = App.util.rand(TELEPORT_PAD, maxY);
      tries++;
    } while (Math.hypot(x - cur.left, y - cur.top) < TELEPORT_MIN_DIST && tries < 30);
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
  }

  function doTeleportAnim() {
    App.audio.play('teleport', { rate: semitoneRate(App.util.randInt(-2, 2)) });
    if (reducedMotion()) {
      positionRandom(noBtn);
      noBtn.style.opacity = '0';
      requestAnimationFrame(() => {
        noBtn.style.transition = 'opacity 150ms';
        noBtn.style.opacity = '1';
        setTimeout(() => { noBtn.style.transition = ''; }, 160);
      });
      return;
    }
    noBtn.classList.add('gate__no--flash');
    setTimeout(() => {
      noBtn.classList.remove('gate__no--flash');
      positionRandom(noBtn);
      noBtn.classList.add('gate__no--popin');
      setTimeout(() => noBtn.classList.remove('gate__no--popin'), 150);
    }, 80);
  }

  function tryTeleport() {
    const now = performance.now();
    if (now - lastTeleportAt < TELEPORT_COOLDOWN) return;
    lastTeleportAt = now;
    dodgeCount++;
    doTeleportAnim();
    if (dodgeCount % 3 === 0) {
      App.toast(pickTaunt());
    }
    if (dodgeCount >= MERCY_DODGES && !mercyTriggered) {
      mercySurrender();
    }
  }

  function onPointerMoveTeleportCheck(e) {
    if (!teleportActive || proceeding || mercyTriggered) return;
    if (e.pointerType === 'touch') return;
    const rect = noBtn.getBoundingClientRect();
    const d = distToRect(e.clientX, e.clientY, rect);
    if (d < TELEPORT_PROXIMITY) tryTeleport();
  }

  function onNoTouchStart(e) {
    if (!teleportActive || proceeding || mercyTriggered) return;
    e.preventDefault();
    tryTeleport();
  }

  function enterTeleportMode() {
    if (teleportActive) return;
    teleportActive = true;
    const rect = noBtn.getBoundingClientRect();
    ghostEl = App.util.el('span', 'gate__no-ghost');
    ghostEl.style.width = rect.width + 'px';
    ghostEl.style.height = rect.height + 'px';
    noBtn.parentNode.insertBefore(ghostEl, noBtn);
    noBtn.style.position = 'fixed';
    noBtn.style.left = rect.left + 'px';
    noBtn.style.top = rect.top + 'px';
    noBtn.style.margin = '0';
    noBtn.style.zIndex = '60';
    document.addEventListener('pointermove', onPointerMoveTeleportCheck, { passive: true });
    noBtn.addEventListener('touchstart', onNoTouchStart, { passive: false });
  }

  function teardownTeleport() {
    document.removeEventListener('pointermove', onPointerMoveTeleportCheck);
    noBtn.removeEventListener('touchstart', onNoTouchStart);
  }

  function mercySurrender() {
    mercyTriggered = true;
    teleportActive = false;
    teardownTeleport();
    noBtn.classList.add('gate__no--sigh');
    noBtn.textContent = 'fine. i give up. -no button';
    setTimeout(morphToSecondYes, 1000);
  }

  function morphToSecondYes() {
    if (proceeding) return;
    noBtn.classList.remove('gate__no--sigh');
    noBtn.classList.add('gate__no--morphing');
    setTimeout(() => {
      noBtn.textContent = 'YES (you were saying?)';
      noBtn.classList.remove('btn--no');
      noBtn.classList.add('btn');
      // return it to normal document flow so it sits nicely next to YES
      noBtn.style.position = '';
      noBtn.style.left = '';
      noBtn.style.top = '';
      noBtn.style.margin = '';
      noBtn.style.zIndex = '';
      noBtn.style.scale = '1';
      if (ghostEl && ghostEl.parentNode) ghostEl.parentNode.removeChild(ghostEl);
      ghostEl = null;
    }, 300);
  }

  function onNoBtnClick() {
    if (proceeding) return;
    if (mercyTriggered) { proceed(); return; }
    if (teleportActive) { tryTeleport(); return; }
    noClick();
  }

  yesBtn.addEventListener('click', yesClick);
  noBtn.addEventListener('click', onNoBtnClick);

  /* ---------------- (re)start ---------------- */
  function resetGate() {
    proceeding = false;
    yesClicks = 0;
    noClicks = 0;
    yesScale = 1;
    teleportActive = false;
    mercyTriggered = false;
    dodgeCount = 0;
    lastTeleportAt = 0;
    lastTauntIdx = -1;
    teardownTeleport();
    if (ghostEl && ghostEl.parentNode) ghostEl.parentNode.removeChild(ghostEl);
    ghostEl = null;

    yesBtn.textContent = YES_LABELS[0];
    yesBtn.style.scale = '1';
    yesBtn.classList.remove('gate__wobble');

    sub.textContent = 'security question. the ducks require verification.';

    noBtn.className = 'btn btn--no gate__no';
    noBtn.textContent = 'no';
    noBtn.style.cssText = '';
  }

  App.router.onShow('gate', resetGate);
})();
