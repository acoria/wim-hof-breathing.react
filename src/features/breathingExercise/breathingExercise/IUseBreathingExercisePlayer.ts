export interface IUseBreathingExercisePlayer {
  startBreathing: () => void;
  stopBreathing: () => void;
  isBreathing: boolean;
  isBreathingIn: boolean;
  isFinished: boolean;
  breathCount: number;
}
