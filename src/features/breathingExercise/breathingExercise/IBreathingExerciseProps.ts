export interface IBreathingExerciseProps {
  numberOfBreaths: number;
  breathDurationInMillis: number;
  startDelayInMillis?: number;
  maxNumberOfBreathingExercises: number;
  localStorageIdForNumberOfFinishedExercises: string;
}
