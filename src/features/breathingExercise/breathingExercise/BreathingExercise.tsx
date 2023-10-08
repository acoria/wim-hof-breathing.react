import { BreathingCircle } from "../../breathingCircle/BreathingCircle";
import styles from "./BreathingExercise.module.css";
import { IBreathingExerciseProps } from "./IBreathingExerciseProps";
import { useBreathingTimer } from "./useBreathingTimer";

export const BreathingExercise: React.FC<IBreathingExerciseProps> = (props) => {
  const {
    startBreathing,
    stopBreathing,
    isBreathing,
    isBreathingIn,
    breathCount,
  } = useBreathingTimer(
    props.breathDurationInMillis,
    props.numberOfBreaths,
    props.startDelayInMillis
  );

  return (
    <>
      {isBreathing && <h1 className={styles.breathCounter}>{breathCount}</h1>}
      <BreathingCircle
        isBreathing={isBreathing}
        onStartBreathing={startBreathing}
        onStopBreathing={stopBreathing}
        isBreathingIn={isBreathingIn}
        width={"12rem"}
        className={styles.playCircle}
      />
    </>
  );
};
