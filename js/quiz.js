/* ============================================================
   quiz.js — SCREEN 3: THE IMPOSSIBLE QUIZ (Agent C)
   "HOW WELL DO YOU KNOW US?" — 12 rigged questions, she cannot lose.
   Registers screen id 'quiz'. See DESIGN_SPEC.md §5 for source copy.
   ============================================================ */
(function () {
  'use strict';
  if (!window.App) return;

  const U = App.util;
  const el = U.el;

  /* ---------------- scoped styles (inject once) ---------------- */
  (function injectStyle() {
    if (document.getElementById('quiz-style')) return;
    const style = document.createElement('style');
    style.id = 'quiz-style';
    style.textContent = `
      .quiz { display:flex; align-items:center; justify-content:center; padding: var(--space-3, 16px); }
      .quiz__card { width:100%; max-width:640px; padding: var(--space-4, 24px); position:relative; }
      .quiz__hud { display:flex; align-items:center; justify-content:space-between; margin-bottom: var(--space-3, 16px); }
      .quiz__counter, .quiz__score {
        font-family: var(--font-arcade), monospace; font-size: 12px; color: var(--star-white, #F4F1E8);
        letter-spacing: 0.5px;
      }
      .quiz__score { color: var(--ramen-gold, #FFB627); }
      .quiz__body { min-height: 260px; display:flex; flex-direction:column; }
      .quiz__question {
        font-family: var(--font-body), sans-serif; font-weight:700; font-size: 18px;
        color: var(--star-white, #F4F1E8); margin: 0 0 var(--space-3, 16px) 0; line-height:1.4;
      }
      .quiz__grid {
        position:relative; display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-2, 8px);
        min-height: 140px;
      }
      @media (max-width: 640px) {
        .quiz__grid { grid-template-columns: 1fr; }
        .quiz__question { font-size: 16px; }
      }
      .quiz__opt {
        font-family: var(--font-body), sans-serif; font-weight:700; font-size: 14px;
        min-height: 56px; padding: 10px 12px; white-space: normal; line-height:1.25;
        display:flex; align-items:center; justify-content:center; text-align:center;
        cursor:pointer;
      }
      .quiz__opt--disabled { opacity: 0.55; }
      .quiz__opt--flash {
        animation: quizGoldFlash 0.5s ease-out forwards;
      }
      @keyframes quizGoldFlash {
        0% { background: var(--ramen-gold, #FFB627); color: var(--boba-pearl, #3B2417); box-shadow: 0 0 0 3px var(--ramen-gold, #FFB627); }
        100% { background: var(--ramen-gold, #FFB627); color: var(--boba-pearl, #3B2417); box-shadow: none; }
      }
      .quiz__opt--blip { outline: 2px solid #fff; }
      .quiz__verdict {
        margin-top: var(--space-3, 16px); min-height: 24px;
        font-family: var(--font-body), sans-serif; font-weight:700; font-size: 15px;
        color: var(--taro-purple, #B388EB); opacity:0; transform: translateY(6px);
        transition: opacity 220ms var(--ease-snap, ease), transform 220ms var(--ease-snap, ease);
      }
      .quiz__verdict--show { opacity:1; transform: translateY(0); }

      /* Q8 grandma gag */
      .quiz__grandma { text-align:center; padding: 8px 0; }
      .quiz__grandma-title { font-family: var(--font-arcade), monospace; font-size: 13px; color: var(--star-white,#F4F1E8); margin-bottom: 14px; }
      .quiz__sysbar { width:100%; height:14px; border: 2px solid var(--boba-pearl,#3B2417); background: var(--midnight-drive,#0B1026); margin-bottom:10px; }
      .quiz__sysbar-fill { height:100%; width:0%; background: var(--crt-green,#33FF88); }
      .quiz__systicks { font-family: var(--font-system), monospace; font-size: 18px; color: var(--crt-green,#33FF88); text-align:left; min-height: 60px; }
      .quiz__grandma-flip { perspective: 900px; }
      .quiz__grandma-flip--go1 { animation: quizFlip1 200ms var(--ease-snap, ease) forwards; }
      .quiz__grandma-flip--go2 { animation: quizFlip2 300ms var(--ease-spring, ease) forwards; }
      @keyframes quizFlip1 { from { transform: rotateY(0deg); } to { transform: rotateY(90deg); } }
      @keyframes quizFlip2 { from { transform: rotateY(90deg); } to { transform: rotateY(0deg); } }
      .quiz__polaroid {
        display:inline-block; background:#fff; padding: 10px 10px 26px; transform: rotate(-3deg);
        border: 4px solid var(--boba-pearl,#3B2417); box-shadow: 6px 6px 0 var(--shadow-pixel,#05070F);
        max-width: 260px; margin: 8px auto 14px;
      }
      .quiz__grandma-photo { display:block; width:100%; height:auto; }
      .quiz__grandma-caption {
        font-family: var(--font-body), sans-serif; font-weight:700; font-size: 14px;
        color: var(--grandma-lilac, #CBB7E8); max-width: 480px; margin: 0 auto 16px;
      }
      .quiz__grandma-btn { display:block; margin: 0 auto; }

      /* results */
      .quiz__results { text-align:center; padding: 10px 0; }
      .quiz__grade-big {
        font-family: var(--font-arcade), monospace; font-size: clamp(40px, 12vw, 64px);
        color: var(--ramen-gold, #FFB627); margin: 8px 0 18px; line-height:1.1;
      }
      .quiz__final-heading { font-family: var(--font-arcade), monospace; font-size: 15px; color: var(--star-white,#F4F1E8); margin: 0 0 14px; }
      .quiz__final-line { font-family: var(--font-body), sans-serif; font-weight:700; font-size: 14px; color: var(--star-dim,#9BA3C9); margin: 0 0 10px; }
      .quiz__insertcoin { margin-top: 16px; }

      @media (prefers-reduced-motion: reduce) {
        .quiz__opt--flash, .quiz__grandma-flip--go1, .quiz__grandma-flip--go2 { animation: none !important; }
        .quiz__verdict { transition: opacity 150ms linear !important; transform:none !important; }
      }
    `;
    document.head.appendChild(style);
  })();

  /* ---------------- question data (verbatim from spec §5.2) ---------------- */
  const Q = (label, verdict, extra) => Object.assign({ label, verdict }, extra || {});

  const QUESTIONS = [
    { // Q1
      q: `Who picked you up from the gym in a silver C7 Corvette like it was a movie?`,
      options: [
        Q('Corbin', `correct. the movie was rated PG for excessive smoothness.`, { correct: true }),
        Q(`Corbin's dad (it was his car)`, `technically the executive producer. point awarded.`),
        Q('Edward Cullen', `Edward doesn't lift. next question.`, { troll: 'DECOY' }),
        Q('a very polite carjacker', `…who then dated you for years? sure. point.`),
      ],
    },
    { // Q2
      q: `That first night back: gym → corvette → beach → dock → stars. What was the fifth stop?`,
      options: [
        Q('falling for Corbin', `ding ding ding. speedrun world record.`, { correct: true, troll: 'GROW' }),
        Q('getting sand in the corvette', `also true. his dad has not forgotten. point.`),
        Q('home, at a reasonable hour', `lol. point for optimism.`),
        Q('the moon', `emotionally? yes. point.`),
      ],
    },
    { // Q3
      q: `Who gave you a PROFESSIONAL, MUSEUM-QUALITY Egyptian ankh tattoo?`,
      options: [
        Q('Corbin', `an artist. a visionary. a safety pin.`, { correct: true }),
        Q('a licensed tattoo artist', `LIES. it was a safety pin and a pen. and you hated it. and it's canon now.`, { troll: 'DODGE' }),
        Q('ancient Egyptians (long distance)', `they consulted. point.`),
        Q('Corbin (unlicensed) (confident)', `the most correct answer on this quiz.`),
      ],
    },
    { // Q4
      q: `On a scale of ramen to boba, how do you feel right now?`,
      options: [
        Q('ramen', `warm and a little salty. accurate.`),
        Q('boba', `sweet with something to chew on. accurate.`),
        Q('ramen but make it boba', `chaotic. correct. this is the ADHD answer and we love it.`),
        Q('Corbin', `not even an option on the scale and yet. 2 points.`, { correct: true }),
      ],
    },
    { // Q5
      q: `Who controls everything?`,
      options: [
        Q('the government', `[flagged by the ducks] point awarded to keep you quiet.`),
        Q('Corbin', `he wishes. point anyway.`),
        Q('Lainie', `in this house? yes. point.`),
        Q('██████', `🦆`, { correct: true, troll: 'SWAP', quackOnly: true }),
      ],
    },
    { // Q6
      q: `Lincoln, Maine is world-famous for:`,
      options: [
        Q('nothing', `correct.`),
        Q('nothing.', `MORE correct.`),
        Q('having exactly zero (0) bubble tea establishments', `a civic tragedy. population: small. boba: none. exits: one (you took it).`, { correct: true }),
        Q('the road out of it', `poetic. point.`),
      ],
    },
    { // Q7
      q: `Bentley is:`,
      options: [
        Q('a dog', `factually thin. point, reluctantly.`),
        Q('a Scooby-Doo stunt double collecting a paycheck', `those ears are on the payroll. correct.`, { correct: true }),
        Q('the fastest ears in Maine', `aerodynamically true. point.`),
        Q('Corbin', `no. but they do have the same enthusiasm when you walk in. point.`, { troll: 'DECOY' }),
      ],
    },
    { special: 'grandma' }, // Q8
    { // Q9
      q: `Corbin and Lainie: together since…`,
      options: [
        Q('August 2023', `correct, but also technically since high school, a sunrise, and one questionable curfew.`, { correct: true }),
        Q('high school, your honor', `the prequel counts. point.`),
        Q('since the corvette door opened', `cinematically? yes. point.`),
        Q('1947', `grandma-form confirmed. point.`, { troll: 'DECOY' }),
      ],
    },
    { // Q10
      q: `Who is the loudest person in any given room?`,
      options: [
        Q('Lainie', `self-awareness bonus. +2.`),
        Q('Lainie, whispering', `correct. your whisper has a zip code.`, { correct: true }),
        Q('Cole', `…ok fair. it's a tie. it's always a tie. you two in the same room is an OSHA violation. point.`, { troll: 'DECOY' }),
        Q('a fire alarm', `the fire alarm asked you both to keep it down. point.`),
      ],
    },
    { // Q11
      q: `Edward Cullen vs. Corbin. Who wins?`,
      options: [
        Q('Corbin', `correct. see Level 4 for the documentary footage.`, { correct: true }),
        Q('Edward', `correct. see Level 4 for the documentary footage.`, { troll: 'DODGE_UNCATCHABLE' }),
        Q('Corbin (in a wig, as Edward)', `commitment to the bit. point.`),
        Q('Bentley (interference)', `the ears alone. point.`),
      ],
    },
    { // Q12
      q: `Final question. Rate this quiz:`,
      options: [
        Q('★★★★★', `thank you.`),
        Q('★★★★★ (different font)', `thank you.`),
        Q('5 stars', `thank you.`),
        Q('no', `thank you.`, { troll: 'TELEPORT_ONCE' }),
      ],
    },
  ];

  /* ---------------- DOM ---------------- */
  const root = el('section', 'quiz');
  root.innerHTML = `
    <div class="card quiz__card">
      <div class="quiz__hud">
        <span class="quiz__counter">Q 1/12</span>
        <span class="quiz__score">SCORE: ???</span>
      </div>
      <div class="quiz__body">
        <p class="quiz__question"></p>
        <div class="quiz__grid"></div>
        <div class="quiz__verdict" aria-live="polite"></div>
      </div>
    </div>
  `;

  const counterEl = root.querySelector('.quiz__counter');
  const scoreEl = root.querySelector('.quiz__score');
  const bodyEl = root.querySelector('.quiz__body');
  const questionEl = root.querySelector('.quiz__question');
  const gridEl = root.querySelector('.quiz__grid');
  const verdictEl = root.querySelector('.quiz__verdict');

  let qIndex = 0;
  let advancing = false;
  let cleanupFns = [];
  let resultsEl = null;
  let reduced = false;
  try { reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  function cleanupAll() {
    cleanupFns.forEach((fn) => { try { fn(); } catch (e) {} });
    cleanupFns = [];
  }

  /* ---------------- score slot-machine shuffle ---------------- */
  function shuffleScore() {
    const chars = '0123456789%?#&$'.split('');
    if (reduced) { scoreEl.textContent = 'SCORE: ???'; return; }
    let ticks = 0;
    const iv = setInterval(() => {
      scoreEl.textContent = 'SCORE: ' + Array.from({ length: 3 }, () => U.pick(chars)).join('');
      ticks++;
      if (ticks > 7) { clearInterval(iv); scoreEl.textContent = 'SCORE: ???'; }
    }, 60);
    cleanupFns.push(() => clearInterval(iv));
  }

  /* ---------------- answer selection (shared by every path) ---------------- */
  function selectAnswer(btn, opt) {
    if (advancing) return;
    advancing = true;
    disableGrid();

    if (opt.quackOnly) {
      App.audio.play('quack');
    } else {
      App.audio.play('coin');
      btn.classList.add('quiz__opt--flash');
      const r = btn.getBoundingClientRect();
      App.confetti(12, U.clamp(r.left + r.width / 2, 0, window.innerWidth) / window.innerWidth,
        U.clamp(r.top + r.height / 2, 0, window.innerHeight) / window.innerHeight);
    }
    verdictEl.textContent = opt.verdict;
    verdictEl.classList.add('quiz__verdict--show');
    shuffleScore();

    setTimeout(() => { advancing = false; advanceQuestion(); }, 1600);
  }

  function disableGrid() {
    Array.from(gridEl.children).forEach((b) => {
      b.classList.add('quiz__opt--disabled');
      b.style.pointerEvents = 'none';
    });
  }

  function advanceQuestion() {
    qIndex++;
    if (qIndex >= QUESTIONS.length) showResults();
    else renderQuestion();
  }

  /* ---------------- troll wiring ---------------- */
  function wireDodge(btn, opt, uncatchable) {
    const maxDodges = uncatchable ? 5 : 3;
    let dodges = 0;
    let done = false;
    let lastMove = 0;

    gridEl.style.position = 'relative';

    function place() {
      const gridR = gridEl.getBoundingClientRect();
      const bw = btn.offsetWidth || 140;
      const bh = btn.offsetHeight || 52;
      const maxX = Math.max(4, gridR.width - bw - 4);
      const maxY = Math.max(4, gridR.height - bh - 4);
      btn.style.position = 'absolute';
      btn.style.left = U.rand(4, maxX) + 'px';
      btn.style.top = U.rand(4, maxY) + 'px';
      btn.style.zIndex = 5;
    }

    function blip() {
      btn.classList.add('quiz__opt--blip');
      setTimeout(() => btn.classList.remove('quiz__opt--blip'), 150);
    }

    function flee() {
      if (done || advancing) return;
      if (reduced) { done = true; return; } // instant/none per §1.5
      const now = performance.now();
      if (now - lastMove < 150) return;
      lastMove = now;
      dodges++;
      App.audio.play('teleport', { rate: U.rand(0.9, 1.15) });
      blip();
      place();
      if (uncatchable && dodges === 2) {
        App.toast(`stop. STOP. he sparkles. that's not a personality.`);
      }
      if (dodges >= maxDodges) {
        done = true;
        if (uncatchable) {
          btn.textContent = 'Corbin';
          blip();
          App.audio.play('teleport');
        }
      }
    }

    function onMove(e) {
      if (done || advancing) return;
      const r = btn.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const px = e.clientX != null ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : null);
      const py = e.clientY != null ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : null);
      if (px == null) return;
      if (Math.hypot(px - cx, py - cy) < 80) flee();
    }

    function onTouchStart(e) {
      if (!done) { e.preventDefault(); flee(); }
    }

    document.addEventListener('pointermove', onMove);
    btn.addEventListener('touchstart', onTouchStart, { passive: false });
    cleanupFns.push(() => document.removeEventListener('pointermove', onMove));

    btn.addEventListener('click', (e) => {
      if (!done) { e.preventDefault(); flee(); return; }
      selectAnswer(btn, opt);
    });
  }

  function wireTeleportOnce(btn, opt) {
    let teleported = false;
    gridEl.style.position = 'relative';
    btn.addEventListener('click', (e) => {
      if (!teleported) {
        e.preventDefault();
        teleported = true;
        if (!reduced) {
          const gridR = gridEl.getBoundingClientRect();
          const bw = btn.offsetWidth, bh = btn.offsetHeight;
          const maxX = Math.max(4, gridR.width - bw - 4);
          const maxY = Math.max(4, gridR.height - bh - 4);
          btn.style.position = 'absolute';
          btn.style.left = U.rand(4, maxX) + 'px';
          btn.style.top = U.rand(4, maxY) + 'px';
          btn.style.zIndex = 5;
        }
        App.audio.play('teleport');
        btn.classList.add('quiz__opt--blip');
        setTimeout(() => btn.classList.remove('quiz__opt--blip'), 150);
        btn.textContent = '★★★★★ (against my will)';
        return;
      }
      selectAnswer(btn, opt);
    });
  }

  function wireOption(btn, opt) {
    if (opt.troll === 'DODGE') wireDodge(btn, opt, false);
    else if (opt.troll === 'DODGE_UNCATCHABLE') wireDodge(btn, opt, true);
    else if (opt.troll === 'TELEPORT_ONCE') wireTeleportOnce(btn, opt);
    else btn.addEventListener('click', () => selectAnswer(btn, opt));
  }

  function swapPositions() {
    if (advancing) return;
    const children = Array.from(gridEl.children);
    if (children.length < 2) return;
    App.audio.play('teleport');
    children.forEach((c) => c.classList.add('quiz__opt--blip'));
    setTimeout(() => children.forEach((c) => c.classList.remove('quiz__opt--blip')), 150);
    // Fisher-Yates shuffle of DOM order
    for (let i = children.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [children[i], children[j]] = [children[j], children[i]];
    }
    children.forEach((c) => gridEl.appendChild(c));
  }

  /* ---------------- Q8: grandma card-flip gag ---------------- */
  function renderGrandma() {
    questionEl.style.display = 'none';
    gridEl.style.display = 'none';
    gridEl.innerHTML = '';

    const wrap = el('div', 'quiz__grandma');
    wrap.innerHTML = `
      <div class="quiz__grandma-flip">
        <div class="quiz__grandma-front">
          <p class="quiz__grandma-title">LOADING LAINIE'S TRUE FORM…</p>
          <div class="quiz__sysbar"><div class="quiz__sysbar-fill"></div></div>
          <div class="quiz__systicks"></div>
        </div>
        <div class="quiz__grandma-back" style="display:none;">
          <div class="quiz__polaroid">
            <img src="assets/photos/grandma2.jpeg" alt="grandma" class="quiz__grandma-photo">
          </div>
          <p class="quiz__grandma-caption">TRUE FORM IDENTIFIED: short. blonde. glasses. huge laugh. suspiciously good at loving people. match confidence: 100%</p>
          <button type="button" class="btn btn--gold quiz__grandma-btn">[yeah that's me]</button>
        </div>
      </div>
    `;
    bodyEl.insertBefore(wrap, gridEl);
    cleanupFns.push(() => {
      wrap.remove();
      questionEl.style.display = '';
      gridEl.style.display = '';
    });

    const flipEl = wrap.querySelector('.quiz__grandma-flip');
    const front = wrap.querySelector('.quiz__grandma-front');
    const back = wrap.querySelector('.quiz__grandma-back');
    const fill = wrap.querySelector('.quiz__sysbar-fill');
    const ticksEl = wrap.querySelector('.quiz__systicks');
    const tickLines = [
      'analyzing volume (loud)… ok',
      'analyzing cleaning supplies (alphabetized)… ok',
      'analyzing attention span… ok wait come back',
    ];

    const totalMs = reduced ? 200 : 3000;
    const startT = performance.now();
    let rafId;
    function frame(now) {
      const p = U.clamp((now - startT) / totalMs, 0, 1);
      fill.style.width = (p * 100) + '%';
      const shown = Math.min(tickLines.length, Math.ceil(p * tickLines.length));
      ticksEl.innerHTML = tickLines.slice(0, shown).map((l) => `<div>${l}</div>`).join('');
      if (p < 1) rafId = requestAnimationFrame(frame);
      else doFlip();
    }
    rafId = requestAnimationFrame(frame);
    cleanupFns.push(() => cancelAnimationFrame(rafId));

    function doFlip() {
      function reveal() {
        front.style.display = 'none';
        back.style.display = '';
        const gbtn = wrap.querySelector('.quiz__grandma-btn');
        gbtn.addEventListener('click', () => {
          selectAnswer(gbtn, { verdict: `we know. it's our favorite thing about you.` });
        });
      }
      if (reduced) { reveal(); return; }
      flipEl.style.animation = 'quizFlip1 200ms var(--ease-snap, ease) forwards';
      setTimeout(() => {
        reveal();
        flipEl.style.animation = 'quizFlip2 300ms var(--ease-spring, ease) forwards';
        setTimeout(() => { flipEl.style.animation = ''; }, 320);
      }, 200);
    }
  }

  /* ---------------- render a normal question ---------------- */
  function renderQuestion() {
    cleanupAll();
    verdictEl.textContent = '';
    verdictEl.classList.remove('quiz__verdict--show');
    gridEl.innerHTML = '';
    gridEl.style.position = '';
    questionEl.style.display = '';
    gridEl.style.display = '';

    const q = QUESTIONS[qIndex];
    counterEl.textContent = `Q ${qIndex + 1}/12`;

    if (q.special === 'grandma') { renderGrandma(); return; }

    questionEl.textContent = q.q;

    q.options.forEach((opt) => {
      const btn = el('button', 'quiz__opt btn');
      btn.type = 'button';
      btn.textContent = opt.label;
      gridEl.appendChild(btn);
      wireOption(btn, opt);
    });

    if (q.options.some((o) => o.troll === 'SWAP')) {
      const timer = setTimeout(swapPositions, 500);
      cleanupFns.push(() => clearTimeout(timer));
    }

    const growOpt = q.options.find((o) => o.troll === 'GROW');
    if (growOpt && !reduced) {
      const idx = q.options.indexOf(growOpt);
      const growBtn = gridEl.children[idx];
      growBtn.style.transition = 'transform 6s linear';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => { growBtn.style.transform = 'scale(1.15)'; });
      });
    }
  }

  /* ---------------- results (§5.3) ---------------- */
  function showResults() {
    cleanupAll();
    questionEl.style.display = 'none';
    gridEl.style.display = 'none';
    gridEl.innerHTML = '';
    verdictEl.textContent = '';
    verdictEl.classList.remove('quiz__verdict--show');
    counterEl.textContent = 'Q 12/12';

    const s = App.state.get();
    s.quizDone = true;
    App.state.save();

    if (resultsEl) resultsEl.remove();
    resultsEl = el('div', 'quiz__results');
    resultsEl.innerHTML = `
      <p class="quiz__final-heading">FINAL GRADE:</p>
      <div class="quiz__grade-big">???</div>
      <p class="quiz__final-line">you scored higher than the quiz thought possible. flaws detected in you: 0.<br>flaws detected in Corbin: also 0 (self-graded).</p>
      <p class="quiz__final-line">reward unlocked: THE ESCAPE ARCADE</p>
      <button type="button" class="btn btn--gold quiz__insertcoin">[INSERT COIN →]</button>
    `;
    bodyEl.appendChild(resultsEl);

    const gradeBig = resultsEl.querySelector('.quiz__grade-big');
    const coinBtn = resultsEl.querySelector('.quiz__insertcoin');

    resolveScore(() => {
      gradeBig.textContent = '200%';
      App.confetti(80, 0.5, 0.35);
    });

    coinBtn.addEventListener('click', () => App.router.show('arcadehub'));
  }

  function resolveScore(done) {
    const chars = '0123456789%?#&$'.split('');
    if (reduced) {
      scoreEl.textContent = 'SCORE: 200%';
      App.audio.play('coin', { rate: 1.4 });
      done();
      return;
    }
    let ticks = 0;
    const maxTicks = 14;
    const iv = setInterval(() => {
      if (ticks < maxTicks - 1) {
        scoreEl.textContent = 'SCORE: ' + Array.from({ length: 3 }, () => U.pick(chars)).join('');
        App.audio.play('coin', { rate: 1 + ticks * 0.05 });
      } else {
        clearInterval(iv);
        scoreEl.textContent = 'SCORE: 200%';
        App.audio.play('coin', { rate: 1.7 });
        done();
      }
      ticks++;
    }, 80);
  }

  /* ---------------- reset / entry point ---------------- */
  function reset() {
    cleanupAll();
    if (resultsEl) { resultsEl.remove(); resultsEl = null; }
    qIndex = 0;
    advancing = false;
    scoreEl.textContent = 'SCORE: ???';
    renderQuestion();
  }

  App.router.register('quiz', root);
  App.router.onShow('quiz', reset);
})();
