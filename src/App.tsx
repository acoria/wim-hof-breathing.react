import { BreathingExercise } from "./features/breathingExercise/breathingExercise/BreathingExercise";

export const App = () => {
  return (
    <BreathingExercise
      breathDurationInMillis={3200}
      numberOfBreaths={40}
      startDelayInMillis={1000}
    />
  );
};
