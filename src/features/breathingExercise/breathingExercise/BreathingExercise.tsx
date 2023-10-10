import { useEffect, useState } from "react";
import { BreathingCircle } from "../../breathingCircle/BreathingCircle";
import { BreathHoldCounter } from "../breathHoldCounter/BreathHoldCounter";
import { BreathingExerciseCounter } from "../breathingExerciseCounter/BreathingExerciseCounter";
import styles from "./BreathingExercise.module.css";
import { IBreathingExerciseProps } from "./IBreathingExerciseProps";
import { useBreathingTimer } from "./useBreathingTimer";

export const BreathingExercise: React.FC<IBreathingExerciseProps> = (props) => {
  const NUMBER_FINISHED_EXERCISES = "NUMBER_FINISHED_EXERCISES";
  const [numberOfFinishedExercises, setNumberOfFinishedExercises] = useState(
    () => {
      const locallyStoredFinishedExercises = localStorage.getItem(
        NUMBER_FINISHED_EXERCISES
      );
      let numberOfStoredFinishedExercises = 0;
      if (locallyStoredFinishedExercises) {
        numberOfStoredFinishedExercises = JSON.parse(
          locallyStoredFinishedExercises
        ) as number;
      }
      return numberOfStoredFinishedExercises;
    }
  );
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
      setNumberOfFinishedExercises((previous) => {
        const newNumber = previous + 1;
        writeFinishedExercisesIntoStorage(newNumber);
        return newNumber;
      });
      setShowBreathHoldCounter(true);
    }
  }, [isFinished]);

  useEffect(() => {
    if (isBreathing) {
      setShowBreathHoldCounter(false);
    }
  }, [isBreathing]);

  const writeFinishedExercisesIntoStorage = (finishedExercises: number) => {
    localStorage.setItem(
      NUMBER_FINISHED_EXERCISES,
      JSON.stringify(finishedExercises)
    );
  };

  return (
    <>
      <div className={styles.title}>
        <h1>Wim Hof Breathing</h1>
      </div>
      <div className={styles.breathingExerciseCounter}>
        <BreathingExerciseCounter
          maxNumberOfBreathingExercises={4}
          numberOfBreathingExercises={numberOfFinishedExercises}
          onReset={() => {
            setNumberOfFinishedExercises(0);
            writeFinishedExercisesIntoStorage(0);
          }}
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
