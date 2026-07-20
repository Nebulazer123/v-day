// Audio: Glue Song loop (gesture-unlocked), the site's wav SFX pool, and a
// synthesized engine hum for driving.

import { engineProfile } from './vehicle';

const SFX_BASE = '../../assets/sfx/';
const MUSIC_URL = '../../music/gluesong.mp3';

export type SfxName =
  | 'bark' | 'boing' | 'quack' | 'coin' | 'sparkle' | 'splash' | 'howl'
  | 'fanfare' | 'heartbeat' | 'jump' | 'land' | 'whoosh' | 'pop' | 'ding'
  | 'hit' | 'impact' | 'powerdown' | 'insertcoin' | 'levelstart' | 'win'
  | 'wrong' | 'correct' | 'click' | 'catch' | 'error' | 'register' | 'growl'
  | 'reel' | 'chatter' | 'cast' | 'flag' | 'type' | 'gameover' | 'taskdone';

export class AudioBus {
  private ctx: AudioContext | null = null;
  private buffers = new Map<string, AudioBuffer>();
  private music: HTMLAudioElement;
  private engineOsc: OscillatorNode[] = [];
  private engineGain: GainNode | null = null;
  private engineFilter: BiquadFilterNode | null = null;
  private tireNoise: AudioBufferSourceNode | null = null;
  private tireGain: GainNode | null = null;
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
    if (this.engineGain) this.engineGain.gain.value = m ? 0 : 0.035;
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

  /** Layered procedural V8; speed/load/skid are normalized 0..1. */
  engine(on: boolean, speed = 0, throttle = 0, skid = 0, gear = 1, shifted = false): void {
    if (!this.unlocked) return;
    const ctx = this.ensureCtx();
    if (on && this.engineOsc.length === 0) {
      this.engineGain = ctx.createGain();
      this.engineGain.gain.value = 0;
      this.engineFilter = ctx.createBiquadFilter();
      this.engineFilter.type = 'lowpass';
      this.engineFilter.Q.value = 2.4;
      this.engineFilter.connect(this.engineGain).connect(ctx.destination);
      for (const [type, level] of [['sawtooth', 0.34], ['triangle', 0.52], ['square', 0.08]] as const) {
        const oscillator = ctx.createOscillator();
        oscillator.type = type;
        const layerGain = ctx.createGain();
        layerGain.gain.value = level;
        oscillator.connect(layerGain).connect(this.engineFilter);
        oscillator.start();
        this.engineOsc.push(oscillator);
      }

      // A filtered noise loop becomes tire scrub only during hard steering/braking.
      const noise = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
      const data = noise.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
      this.tireNoise = ctx.createBufferSource();
      this.tireNoise.buffer = noise;
      this.tireNoise.loop = true;
      this.tireGain = ctx.createGain();
      this.tireGain.gain.value = 0;
      const tireFilter = ctx.createBiquadFilter();
      tireFilter.type = 'bandpass';
      tireFilter.frequency.value = 1300;
      tireFilter.Q.value = 0.7;
      this.tireNoise.connect(tireFilter).connect(this.tireGain).connect(ctx.destination);
      this.tireNoise.start();
    }
    if (this.engineOsc.length > 0 && this.engineGain && this.engineFilter) {
      const profile = engineProfile(speed, throttle, gear);
      const now = ctx.currentTime;
      // Two slightly separated exhaust-bank layers keep the LS-style V8 from
      // sounding like one clean synthesizer note.
      const frequencies = [profile.exhaustHz, profile.exhaustHz * 1.012, profile.rumbleHz];
      this.engineOsc.forEach((oscillator, i) => oscillator.frequency.setTargetAtTime(frequencies[i], now, 0.045));
      this.engineFilter.frequency.setTargetAtTime(profile.filterHz, now, 0.08);
      if (shifted && !this.muted) {
        this.engineGain.gain.cancelScheduledValues(now);
        this.engineGain.gain.setValueAtTime(profile.gain * 0.35, now);
        this.engineGain.gain.linearRampToValueAtTime(profile.gain, now + 0.13);
        this.shiftThump(ctx, now);
      } else {
        this.engineGain.gain.setTargetAtTime(this.muted ? 0 : profile.gain, now, 0.07);
      }
      this.tireGain?.gain.setTargetAtTime(this.muted ? 0 : Math.min(0.055, skid * 0.055), now, 0.04);
    }
    if (!on && this.engineOsc.length > 0) {
      for (const oscillator of this.engineOsc) {
        oscillator.stop();
        oscillator.disconnect();
      }
      this.engineOsc = [];
      this.tireNoise?.stop();
      this.tireNoise?.disconnect();
      this.engineGain?.disconnect();
      this.engineFilter?.disconnect();
      this.engineGain = null;
      this.engineFilter = null;
      this.tireNoise = null;
      this.tireGain = null;
    }
  }

  private shiftThump(ctx: AudioContext, now: number): void {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(92, now);
    osc.frequency.exponentialRampToValueAtTime(48, now + 0.11);
    gain.gain.setValueAtTime(0.032, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.13);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.14);
  }

  /** Reliable stock two-note horn; novelty upgrades still use their own SFX. */
  horn(style: 'stock' | 'quack' | 'bark' = 'stock'): void {
    if (style !== 'stock') {
      void this.play(style, 0.75, 1);
      return;
    }
    if (this.muted || !this.unlocked) return;
    const ctx = this.ensureCtx();
    const now = ctx.currentTime;
    const master = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 720;
    filter.Q.value = 0.75;
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.12, now + 0.018);
    master.gain.setValueAtTime(0.12, now + 0.22);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 0.31);
    filter.connect(master).connect(ctx.destination);
    for (const frequency of [405, 510]) {
      const oscillator = ctx.createOscillator();
      oscillator.type = 'sawtooth';
      oscillator.frequency.value = frequency;
      oscillator.connect(filter);
      oscillator.start(now);
      oscillator.stop(now + 0.32);
    }
  }
}
