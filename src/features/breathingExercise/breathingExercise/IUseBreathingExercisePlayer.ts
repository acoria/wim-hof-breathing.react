export interface IUseBreathingExercisePlayer {
  startBreathing: () => void;
  stopBreathing: () => void;
  isBreathing: boolean;
  isBreathingIn: boolean;
  breathCount: number;
}
