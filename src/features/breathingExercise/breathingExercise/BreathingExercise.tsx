import { useEffect, useState } from "react";
import { BreathingCircle } from "../../breathingCircle/BreathingCircle";
import { BreathingExerciseCounter } from "../breathingCounter/BreathingExerciseCounter";
import styles from "./BreathingExercise.module.css";
import { IBreathingExerciseProps } from "./IBreathingExerciseProps";
import { useBreathingTimer } from "./useBreathingTimer";
import { BreathHoldCounter } from "../breathHoldCounter/BreathHoldCounter";

export const BreathingExercise: React.FC<IBreathingExerciseProps> = (props) => {
  const [numberOfFinishedExercises, setNumberOfFinishedExercises] = useState(2);
  const [showBreathHoldCounter, setShowBreathHoldCounter] = useState(false);

  const {
    startBreathing,
    stopBreathing,
    isBreathing,
    isBreathingIn,
    isFinished,
    breathCount,
  } = useBreathingTimer(
    props.breathDurationInMillis,
    props.numberOfBreaths,
    props.startDelayInMillis
  );
  useEffect(() => {
    if (isFinished) {
      setNumberOfFinishedExercises((previous) => previous + 1);
      setShowBreathHoldCounter(true);
    }
  }, [isFinished]);

  useEffect(() => {
    if (isBreathing) {
      setShowBreathHoldCounter(false);
    }
  }, [isBreathing]);

  return (
    <>
      <div className={styles.title}>
        <h1>Wim Hof Breathing</h1>
      </div>
      <div className={styles.breathingExerciseCounter}>
        <BreathingExerciseCounter
          maxNumberOfBreathingExercises={4}
          numberOfBreathingExercises={numberOfFinishedExercises}
          onReset={() => setNumberOfFinishedExercises(0)}
        />
      </div>
      {isBreathing && <h1 className={styles.breathCounter}>{breathCount}</h1>}
      {showBreathHoldCounter && (
        <BreathHoldCounter className={styles.breathCounter} />
      )}
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
