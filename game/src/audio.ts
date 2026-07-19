// Audio: Glue Song loop (gesture-unlocked), the site's wav SFX pool, and a
// synthesized engine hum for driving.

const SFX_BASE = '../../assets/sfx/';
const MUSIC_URL = '../../music/gluesong.mp3';

export type SfxName =
  | 'bark' | 'boing' | 'quack' | 'coin' | 'sparkle' | 'splash' | 'howl'
  | 'fanfare' | 'heartbeat' | 'jump' | 'land' | 'whoosh' | 'pop' | 'ding'
  | 'hit' | 'impact' | 'powerdown' | 'insertcoin' | 'levelstart' | 'win'
  | 'wrong' | 'correct' | 'click' | 'catch' | 'error' | 'register' | 'growl';

export class AudioBus {
  private ctx: AudioContext | null = null;
  private buffers = new Map<string, AudioBuffer>();
  private music: HTMLAudioElement;
  private engineOsc: OscillatorNode | null = null;
  private engineGain: GainNode | null = null;
  muted: boolean;
  private unlocked = false;

  constructor(muted: boolean, private onMuteChange: (m: boolean) => void) {
    this.muted = muted;
    this.music = new Audio(new URL(MUSIC_URL, document.baseURI).href);
    this.music.loop = true;
    this.music.volume = 0.28;
    // muted-autoplay trick from the site: start muted, unmute after play() resolves
    this.music.muted = true;
    void this.music.play().then(() => {
      if (!this.muted) this.music.muted = false;
    }).catch(() => { /* wait for first gesture */ });

    const unlock = (): void => {
      this.unlocked = true;
      this.ensureCtx();
      if (!this.muted) {
        this.music.muted = false;
        void this.music.play().catch(() => undefined);
      }
      removeEventListener('pointerdown', unlock);
      removeEventListener('keydown', unlock);
    };
    addEventListener('pointerdown', unlock);
    addEventListener('keydown', unlock);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this.music.pause();
      else if (!this.muted && this.unlocked) void this.music.play().catch(() => undefined);
    });
  }

  private ensureCtx(): AudioContext {
    if (!this.ctx) {
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') void this.ctx.resume();
    return this.ctx;
  }

  setMuted(m: boolean): void {
    this.muted = m;
    this.music.muted = m;
    if (!m && this.unlocked) void this.music.play().catch(() => undefined);
    if (this.engineGain) this.engineGain.gain.value = m ? 0 : 0.05;
    this.onMuteChange(m);
  }

  musicVolume(v: number): void {
    this.music.volume = v;
  }

  async play(name: SfxName, volume = 0.5, rate = 1): Promise<void> {
    if (this.muted || !this.unlocked) return;
    const ctx = this.ensureCtx();
    let buf = this.buffers.get(name);
    if (!buf) {
      try {
        const res = await fetch(new URL(`${SFX_BASE}${name}.wav`, document.baseURI).href);
        buf = await ctx.decodeAudioData(await res.arrayBuffer());
        this.buffers.set(name, buf);
      } catch {
        return; // missing wav: silently skip
      }
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.playbackRate.value = rate;
    const g = ctx.createGain();
    g.gain.value = volume;
    src.connect(g).connect(ctx.destination);
    src.start();
  }

  /** Engine hum while driving; speed 0..1. */
  engine(on: boolean, speed = 0): void {
    if (!this.unlocked) return;
    const ctx = this.ensureCtx();
    if (on && !this.engineOsc) {
      this.engineOsc = ctx.createOscillator();
      this.engineOsc.type = 'sawtooth';
      this.engineGain = ctx.createGain();
      this.engineGain.gain.value = this.muted ? 0 : 0.05;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 260;
      this.engineOsc.connect(filter).connect(this.engineGain).connect(ctx.destination);
      this.engineOsc.start();
    }
    if (this.engineOsc) {
      this.engineOsc.frequency.value = 46 + speed * 60;
    }
    if (!on && this.engineOsc) {
      this.engineOsc.stop();
      this.engineOsc.disconnect();
      this.engineOsc = null;
    }
  }
}
