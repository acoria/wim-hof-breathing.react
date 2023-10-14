import { BreathingExercise } from "./features/breathingExercise/breathingExercise/BreathingExercise";
import { IBreathingExerciseProps } from "./features/breathingExercise/breathingExercise/IBreathingExerciseProps";

const exerciseProps: IBreathingExerciseProps = {
  breathDurationInMillis: 3200,
  numberOfBreaths: 40,
  startDelayInMillis: 1000,
};

const debugExerciseProps: IBreathingExerciseProps = {
  breathDurationInMillis: 3200,
  // breathDurationInMillis: 1000,
  numberOfBreaths: 5,
  startDelayInMillis: 1000,
};

export const App = () => {
  return (
    <BreathingExercise
      // {...exerciseProps}
      {...debugExerciseProps}
    />
  );
};
