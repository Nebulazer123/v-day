/* ============================================================
   audio-assets.js — registers the SFX pack + music beds.
   Maps BOTH the real filenames and the design-spec's sound
   names (blip/clunk/teleport/stomp/fanfare-win/etc.) to files.
   Owned by orchestrator; loaded after core.js.
   ============================================================ */
(function () {
  'use strict';
  if (!window.App) return;
  const B = 'assets/sfx/';

  // real files -> url
  const files = [
    'bark','boing','cast','catch','chatter','click','coin','correct','ding','error',
    'fanfare','flag','gameover','growl','heartbeat','hit','howl','impact','insertcoin',
    'jump','land','levelstart','pop','powerdown','quack','reel','register','sparkle',
    'splash','taskdone','type','whoosh','win','wrong',
  ];
  const map = {};
  files.forEach((n) => (map[n] = B + n + '.wav'));

  // design-spec aliases -> existing files
  const alias = {
    blip: 'click',
    clunk: 'click',
    hover: 'click',
    teleport: 'whoosh',
    stomp: 'land',
    'fanfare-win': 'fanfare',
    fanfarewin: 'fanfare',
    lose: 'gameover',
    'sad-trombone-8bit': 'gameover',
    sadtrombone: 'gameover',
    typewriter: 'type',
    tick: 'type',
    crunch: 'impact',
    success: 'taskdone',
  };
  Object.keys(alias).forEach((k) => (map[k] = B + alias[k] + '.wav'));

  App.audio.register(map);

  // music beds
  App.music = {
    MENU: 'music/gluesong.mp3',
    start() { App.audio.music(this.MENU, { loop: true, volume: 0.28 }); },
    stop() { App.audio.stopMusic(); },
  };

  // preload the most common sfx early; rest load lazily on first play
  App.ready(() => {
    App.audio.preload([
      'click','coin','error','whoosh','boing','ding','pop','correct','wrong',
      'jump','land','fanfare','gameover','type',
    ]);
  });
})();
