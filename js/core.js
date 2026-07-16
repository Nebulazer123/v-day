/* ============================================================
   core.js — the engine everything plugs into.
   Global namespace: window.App
   Design-agnostic backbone (owned by orchestrator).
   Screens/games render their own DOM and register with the router.
   ============================================================ */
(function () {
  'use strict';

  const App = (window.App = window.App || {});

  /* ---------- util ---------- */
  App.util = {
    rand: (a, b) => a + Math.random() * (b - a),
    randInt: (a, b) => Math.floor(a + Math.random() * (b - a + 1)),
    clamp: (v, a, b) => Math.max(a, Math.min(b, v)),
    pick: (arr) => arr[Math.floor(Math.random() * arr.length)],
    lerp: (a, b, t) => a + (b - a) * t,
    el(tag, cls, html) {
      const e = document.createElement(tag);
      if (cls) e.className = cls;
      if (html != null) e.innerHTML = html;
      return e;
    },
    // ms delay -> promise
    wait: (ms) => new Promise((r) => setTimeout(r, ms)),
    isTouch:
      'ontouchstart' in window ||
      (navigator.maxTouchPoints || 0) > 0,
  };

  /* ---------- persistent progress state ---------- */
  const STORE_KEY = 'lainie_escape_v1';
  const defaultState = { seen: {}, levelsDone: [], quizDone: false, finished: false };
  let _state;
  try {
    _state = Object.assign({}, defaultState, JSON.parse(localStorage.getItem(STORE_KEY) || '{}'));
  } catch (e) {
    _state = Object.assign({}, defaultState);
  }
  App.state = {
    get: () => _state,
    save() {
      try { localStorage.setItem(STORE_KEY, JSON.stringify(_state)); } catch (e) {}
    },
    markLevel(id) {
      if (!_state.levelsDone.includes(id)) _state.levelsDone.push(id);
      this.save();
    },
    reset() { _state = Object.assign({}, defaultState); this.save(); },
  };

  /* ---------- router ----------
     Screens register a DOM element (already built by their module).
     Only one screen visible at a time; CSS drives the transition via
     the .screen / .screen--active classes.
  */
  const screens = {};
  let currentId = null;
  const rootSel = '#app';

  App.router = {
    root() { return document.querySelector(rootSel); },
    /** register(id, el)  — el is a fully-built screen element */
    register(id, el) {
      el.classList.add('screen');
      el.dataset.screen = id;
      // inline display:none wins over any module-injected `.foo{display:flex}`
      // (injected <style> blocks load after the linked stylesheet, same specificity)
      el.style.display = 'none';
      if (!el.parentNode) this.root().appendChild(el);
      screens[id] = el;
      return el;
    },
    has(id) { return !!screens[id]; },
    get current() { return currentId; },
    /** show(id, opts) — opts.onShown callback after transition */
    async show(id, opts = {}) {
      const next = screens[id];
      if (!next) { console.warn('no screen', id); return; }
      const prev = currentId && screens[currentId];
      if (prev === next) return;
      _state.seen[id] = true; App.state.save();
      // exit previous
      if (prev) {
        prev.classList.add('screen--exit');
        prev.classList.remove('screen--active');
        setTimeout(() => {
          prev.classList.remove('screen--exit');
          prev.style.display = 'none';
          if (prev._onHide) prev._onHide();
        }, opts.instant ? 0 : 380);
      }
      next.style.display = 'flex';
      // force reflow so transition plays
      void next.offsetWidth;
      next.classList.add('screen--active');
      currentId = id;
      if (next._onShow) next._onShow();
      if (opts.onShown) setTimeout(opts.onShown, 400);
      document.dispatchEvent(new CustomEvent('screen:show', { detail: { id } }));
    },
    /** attach lifecycle hooks to a registered screen */
    onShow(id, fn) { if (screens[id]) screens[id]._onShow = fn; },
    onHide(id, fn) { if (screens[id]) screens[id]._onHide = fn; },
  };

  /* ---------- audio manager ----------
     - sfx via WebAudio buffers (low latency), registered by name->url
     - music via HTMLAudio element
     - global mute toggle; starts allowed after first user gesture
  */
  const AudioMgr = (function () {
    let ctx = null;
    const buffers = {};       // name -> AudioBuffer
    const urls = {};          // name -> url (lazy)
    let muted = false;
    let musicEl = null;
    let masterGain = null;
    let unlocked = false;

    function ensureCtx() {
      if (!ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        ctx = new AC();
        masterGain = ctx.createGain();
        masterGain.gain.value = 0.9;
        masterGain.connect(ctx.destination);
      }
      return ctx;
    }

    async function loadOne(name) {
      const c = ensureCtx();
      if (!c || !urls[name]) return null;
      try {
        const res = await fetch(urls[name]);
        const arr = await res.arrayBuffer();
        const buf = await c.decodeAudioData(arr);
        buffers[name] = buf;
        return buf;
      } catch (e) { return null; }
    }

    return {
      /** register a map of name -> url (does not load yet) */
      register(map) { Object.assign(urls, map); },
      /** preload a list (or all) of names */
      async preload(names) {
        const list = names || Object.keys(urls);
        await Promise.all(list.map((n) => (buffers[n] ? null : loadOne(n))));
      },
      unlock() {
        if (unlocked) return;
        const c = ensureCtx();
        if (c && c.state === 'suspended') c.resume();
        unlocked = true;
      },
      /** play(name, {rate, gain}) — synthesized fallback if missing */
      play(name, opts = {}) {
        if (muted) return;
        const c = ensureCtx();
        if (!c) return;
        if (c.state === 'suspended') c.resume();
        const buf = buffers[name];
        if (!buf) {
          // lazy load for next time; synth fallback now
          if (urls[name] && !buffers[name]) loadOne(name);
          App.audio._synth(name, opts);
          return;
        }
        const src = c.createBufferSource();
        src.buffer = buf;
        src.playbackRate.value = opts.rate || 1;
        const g = c.createGain();
        g.gain.value = opts.gain == null ? 1 : opts.gain;
        src.connect(g); g.connect(masterGain);
        src.start(0);
      },
      music(src, { loop = true, volume = 0.3 } = {}) {
        if (!musicEl) {
          musicEl = new Audio();
          musicEl.loop = loop;
          musicEl.id = 'app-music';
        }
        if (musicEl.src.indexOf(src) === -1) musicEl.src = src;
        musicEl.loop = loop;
        musicEl.volume = volume;
        if (!muted) musicEl.play().catch(() => {});
      },
      stopMusic() { if (musicEl) musicEl.pause(); },
      toggleMute() {
        muted = !muted;
        if (masterGain) masterGain.gain.value = muted ? 0 : 0.9;
        if (musicEl) { muted ? musicEl.pause() : musicEl.play().catch(() => {}); }
        document.dispatchEvent(new CustomEvent('audio:mute', { detail: { muted } }));
        return muted;
      },
      get muted() { return muted; },
      _ctx: ensureCtx,
      _master: () => masterGain,
    };
  })();

  App.audio = AudioMgr;

  /* ---- tiny synth fallback so nothing is silent before sfx load ---- */
  App.audio._synth = function (name, opts = {}) {
    const c = App.audio._ctx();
    if (!c) return;
    const master = App.audio._master();
    const t = c.currentTime;
    const map = {
      click:   { f: 520, type: 'square', d: 0.06, g: 0.15 },
      boing:   { f: 300, type: 'sine', d: 0.18, g: 0.2, slide: 900 },
      whoosh:  { f: 800, type: 'sawtooth', d: 0.16, g: 0.12, slide: 120 },
      error:   { f: 160, type: 'square', d: 0.25, g: 0.2 },
      coin:    { f: 880, type: 'square', d: 0.09, g: 0.2, slide: 1320 },
      jump:    { f: 420, type: 'square', d: 0.12, g: 0.18, slide: 720 },
      hit:     { f: 120, type: 'sawtooth', d: 0.2, g: 0.22 },
      win:     { f: 660, type: 'triangle', d: 0.4, g: 0.22, slide: 1180 },
      splash:  { f: 240, type: 'sine', d: 0.2, g: 0.15, slide: 90 },
      quack:   { f: 300, type: 'sawtooth', d: 0.16, g: 0.2, slide: 260 },
      bark:    { f: 200, type: 'square', d: 0.14, g: 0.22, slide: 380 },
      chime:   { f: 1040, type: 'sine', d: 0.3, g: 0.18, slide: 1560 },
      howl:    { f: 180, type: 'sawtooth', d: 0.5, g: 0.22, slide: 360 },
      ding:    { f: 1320, type: 'sine', d: 0.18, g: 0.18 },
      wrong:   { f: 140, type: 'square', d: 0.3, g: 0.2, slide: 90 },
      type:    { f: 660, type: 'square', d: 0.03, g: 0.08 },
      pop:     { f: 700, type: 'triangle', d: 0.07, g: 0.16, slide: 1200 },
    };
    const s = map[name] || map.click;
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = s.type;
    osc.frequency.setValueAtTime(s.f, t);
    if (s.slide) osc.frequency.exponentialRampToValueAtTime(s.slide, t + s.d);
    g.gain.setValueAtTime(s.g * (opts.gain == null ? 1 : opts.gain), t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + s.d);
    osc.connect(g); g.connect(master || c.destination);
    osc.start(t); osc.stop(t + s.d + 0.02);
  };

  /* ---------- arcade level registry ----------
     Each level module registers:
       App.arcade.register(id, {
         title, blurb,               // for the hub card
         mount(container, api),      // build + start; call api.win()/api.lose()
         unmount()                   // teardown (stop loops/listeners)
       })
     The hub calls startLevel(id); the level calls api.win() when done.
  */
  const levels = {};
  const order = [];
  App.arcade = {
    register(id, def) { levels[id] = def; if (!order.includes(id)) order.push(id); },
    get order() { return order.slice(); },
    get defs() { return levels; },
    def(id) { return levels[id]; },
    isDone(id) { return _state.levelsDone.includes(id); },
    // called by the hub (arcade.js) — provided at integration time
    _startHook: null,
    onStart(fn) { this._startHook = fn; },
    start(id) { if (this._startHook) this._startHook(id); },
  };

  /* ---------- first-gesture audio unlock ---------- */
  function unlockOnce() {
    App.audio.unlock();
    window.removeEventListener('pointerdown', unlockOnce);
    window.removeEventListener('keydown', unlockOnce);
    window.removeEventListener('touchstart', unlockOnce);
  }
  window.addEventListener('pointerdown', unlockOnce);
  window.addEventListener('keydown', unlockOnce);
  window.addEventListener('touchstart', unlockOnce);

  App.ready = function (fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  };
})();
