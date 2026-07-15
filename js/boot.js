/* ============================================================
   boot.js — resume logic + first screen (Agent A / shell)
   Runs LAST, after every screen module has self-registered.
   ============================================================ */
(function () {
  'use strict';
  if (!window.App) return;

  App.ready(function () {
    const params = new URLSearchParams(window.location.search);
    const skip = params.get('skipto'); // undocumented: ?skipto=<screenId>
    const state = App.state.get();
    const returning = !!(state && state.seen && Object.keys(state.seen).length > 0);

    if (skip && App.router.has(skip)) {
      App.router.show(skip);
    } else if (App.router.has('gate')) {
      App.router.show('gate');
      if (returning) {
        setTimeout(() => App.toast('welcome back. the button also remembers.'), 900);
      }
    }

    // Music can't autoplay — start it on the very first real user gesture.
    function startMusicOnce() {
      if (App.music) App.music.start();
      window.removeEventListener('pointerdown', startMusicOnce);
      window.removeEventListener('touchstart', startMusicOnce);
      window.removeEventListener('keydown', startMusicOnce);
    }
    window.addEventListener('pointerdown', startMusicOnce);
    window.addEventListener('touchstart', startMusicOnce);
    window.addEventListener('keydown', startMusicOnce);
  });
})();
