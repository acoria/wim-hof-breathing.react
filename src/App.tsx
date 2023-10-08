import { BreathingExercise } from "./features/breathingExercise/breathingExercise/BreathingExercise";

export const App = () => {
  // return ( <BreathingExercise breathDurationInMillis={1000} numberOfBreaths={2} />);
  return <BreathingExercise breathDurationInMillis={3200} numberOfBreaths={5} />;
};
