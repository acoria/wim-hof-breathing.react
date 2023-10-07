export interface IUseBreathingExercisePlayer {
  start: () => void;
  stop: () => void;
  isRunning: boolean;
  breathCount: number;
}
