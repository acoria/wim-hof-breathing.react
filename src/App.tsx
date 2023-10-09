import { BreathingExercise } from "./features/breathingExercise/breathingExercise/BreathingExercise";

export const App = () => {
  return (
    <BreathingExercise
      breathDurationInMillis={3200}
      numberOfBreaths={2}
      startDelayInMillis={1000}
    />
  );
};
