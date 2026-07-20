export interface DriveState {
  speed: number;
  steering: number;
  gear: number;
}

export interface DriveInput {
  throttle: number;
  steer: number;
  handbrake: boolean;
}

export interface DriveTuning {
  maxForwardSpeed: number;
  maxReverseSpeed: number;
  acceleration: number;
  reverseAcceleration: number;
  serviceBrake: number;
  handbrake: number;
  rollingDrag: number;
  aeroDrag: number;
  steeringResponse: number;
  lateralSpeed: number;
}

export interface DriveStep {
  distance: number;
  lateral: number;
  braking: boolean;
  skid: number;
  shifted: boolean;
}

export interface EngineProfile {
  rpm: number;
  load: number;
  gain: number;
  rumbleHz: number;
  exhaustHz: number;
  filterHz: number;
  gear: number;
}

/** Hydra-Matic 6L80 ratios used by automatic C6 Corvettes. */
export const C6_6L80_RATIOS = [4.03, 2.36, 1.53, 1.15, 0.85, 0.67] as const;
const UPSHIFT_SPEEDS = [0.16, 0.30, 0.46, 0.64, 0.82] as const;
const DOWNSHIFT_SPEEDS = [0, 0.11, 0.25, 0.41, 0.59, 0.77] as const;
const GEAR_BANDS = [
  [0, 0.18], [0.10, 0.34], [0.24, 0.50],
  [0.40, 0.67], [0.57, 0.84], [0.74, 1],
] as const;

export const DEFAULT_DRIVE: DriveTuning = {
  maxForwardSpeed: 29,
  maxReverseSpeed: 10,
  acceleration: 9.5,
  reverseAcceleration: 7,
  serviceBrake: 24,
  handbrake: 34,
  rollingDrag: 1.1,
  aeroDrag: 0.016,
  steeringResponse: 7.5,
  lateralSpeed: 10.5,
};

const clamp = (value: number, min: number, max: number): number => Math.max(min, Math.min(max, value));
const approach = (value: number, target: number, amount: number): number =>
  value < target ? Math.min(value + amount, target) : Math.max(value - amount, target);

export function initialDriveState(): DriveState {
  return { speed: 0, steering: 0, gear: 1 };
}

/** Deterministic arcade-road handling. Positive speed is forward along +Z. */
export function stepDrive(
  state: DriveState,
  input: DriveInput,
  tuning: DriveTuning,
  dt: number,
): DriveStep {
  const frame = clamp(dt, 0, 0.05);
  const throttle = clamp(input.throttle, -1, 1);
  const steer = clamp(input.steer, -1, 1);
  let braking = input.handbrake;

  if (input.handbrake) {
    state.speed = approach(state.speed, 0, tuning.handbrake * frame);
  } else if (throttle > 0) {
    if (state.speed < -0.1) {
      state.speed = approach(state.speed, 0, tuning.serviceBrake * throttle * frame);
      braking = true;
    } else {
      const pull = 1 - Math.pow(Math.max(0, state.speed) / tuning.maxForwardSpeed, 1.7);
      state.speed += tuning.acceleration * throttle * Math.max(0.12, pull) * frame;
    }
  } else if (throttle < 0) {
    if (state.speed > 0.1) {
      state.speed = approach(state.speed, 0, tuning.serviceBrake * -throttle * frame);
      braking = true;
    } else {
      const pull = 1 - Math.abs(Math.min(0, state.speed)) / tuning.maxReverseSpeed;
      state.speed -= tuning.reverseAcceleration * -throttle * Math.max(0.15, pull) * frame;
    }
  } else {
    const drag = tuning.rollingDrag + tuning.aeroDrag * state.speed * state.speed;
    state.speed = approach(state.speed, 0, drag * frame);
  }

  state.speed = clamp(state.speed, -tuning.maxReverseSpeed, tuning.maxForwardSpeed);
  const steeringAlpha = 1 - Math.exp(-tuning.steeringResponse * frame);
  state.steering += (steer - state.steering) * steeringAlpha;
  if (Math.abs(steer) < 0.01) state.steering = approach(state.steering, 0, 3.5 * frame);

  const speedRatio = Math.min(1, Math.abs(state.speed) / tuning.maxForwardSpeed);
  let shifted = false;
  if (state.speed <= 0) {
    shifted = state.gear !== 1;
    state.gear = 1;
  } else {
    const current = clamp(Math.round(state.gear || 1), 1, 6);
    state.gear = current;
    const upshiftAt = current < 6
      ? UPSHIFT_SPEEDS[current - 1] - (1 - Math.abs(throttle)) * 0.025
      : Infinity;
    if (current < 6 && speedRatio >= upshiftAt) {
      state.gear = current + 1;
      shifted = true;
    } else if (current > 1 && speedRatio < DOWNSHIFT_SPEEDS[current - 1]) {
      state.gear = current - 1;
      shifted = true;
    }
  }
  const authority = 1 - speedRatio * 0.68;
  const direction = Math.sign(state.speed || 1);
  const lateral = state.steering * tuning.lateralSpeed * authority * direction * frame;
  const skid = input.handbrake && Math.abs(state.speed) > 7
    ? Math.min(1, Math.abs(state.steering) * Math.abs(state.speed) / 18)
    : 0;
  return { distance: state.speed * frame, lateral, braking, skid, shifted };
}

/** Maps normalized road speed/load to the layers used by the procedural V8. */
export function engineProfile(speed: number, throttle: number, gear = 1): EngineProfile {
  const road = clamp(Math.abs(speed), 0, 1);
  const load = clamp(Math.abs(throttle), 0, 1);
  const selectedGear = clamp(Math.round(gear), 1, 6);
  const [bandStart, bandEnd] = GEAR_BANDS[selectedGear - 1];
  const bandProgress = clamp((road - bandStart) / Math.max(0.01, bandEnd - bandStart), 0, 1);
  // The real base C6 cuts fuel around 6500 rpm. Keep a little margin so the
  // synth climbs hard, drops on shift, and never becomes a shrill alarm.
  const rpm = clamp(800 + bandProgress * 5000 + load * 350, 780, 6400);
  return {
    rpm,
    load,
    gain: 0.026 + road * 0.018 + load * 0.026,
    rumbleHz: rpm / 60,
    // A four-stroke V8 has four combustion events per crank revolution.
    exhaustHz: rpm / 15,
    filterHz: 190 + road * 720 + load * 500,
    gear: selectedGear,
  };
}
