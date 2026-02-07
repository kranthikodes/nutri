// Tiny sound effects via Web Audio API - no external files needed

let audioCtx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  }
  return audioCtx;
}

function playTone(freq: number, duration: number, type: OscillatorType = 'sine', volume = 0.15) {
  const ctx = getCtx();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.value = volume;
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + duration);
}

/** Subtle pop when user taps an option */
export function playTap() {
  playTone(600, 0.08, 'sine', 0.1);
}

/** Two-note chime when a step completes */
export function playStepComplete() {
  playTone(523, 0.15, 'sine', 0.12);
  setTimeout(() => playTone(784, 0.2, 'sine', 0.12), 120);
}

/** Three-note celebration when plan is ready */
export function playCelebration() {
  playTone(523, 0.15, 'sine', 0.12);
  setTimeout(() => playTone(659, 0.15, 'sine', 0.12), 150);
  setTimeout(() => playTone(784, 0.3, 'sine', 0.15), 300);
}

/** Quick click for button presses */
export function playClick() {
  playTone(800, 0.05, 'square', 0.05);
}
