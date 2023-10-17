import { useEffect, useMemo, useState } from "react";
import { SoundPlayer } from "../../../services/soundPlayer/soundPlayer/SoundPlayer";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { BreathingCircle } from "../../breathingCircle/BreathingCircle";
import { BreathHoldCounter } from "../breathHoldCounter/BreathHoldCounter";
import { BreathingExerciseCounter } from "../breathingExerciseCounter/BreathingExerciseCounter";
import styles from "./BreathingExercise.module.css";
import { IBreathingExerciseProps } from "./IBreathingExerciseProps";
import { useBreathingTimer } from "./hooks/useBreathingTimer";

export const BreathingExercise: React.FC<IBreathingExerciseProps> = (props) => {
  const NUMBER_FINISHED_EXERCISES = "NUMBER_FINISHED_EXERCISES";
  const [
    numberOfFinishedExercises,
    updateNumberOfFinishedExercises,
    updateNumberOfFinishedExercisesUsingPreviousValue,
  ] = useLocalStorage(NUMBER_FINISHED_EXERCISES, 0);
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

  const clickPlayer = useMemo(
    () => new SoundPlayer("./assets/sounds/click.mp3"),
    []
  );

  useEffect(() => {
    if (isFinished) {
      updateNumberOfFinishedExercisesUsingPreviousValue(
        (previous) => previous + 1
      );
      setShowBreathHoldCounter(true);
    }
  }, [isFinished, updateNumberOfFinishedExercisesUsingPreviousValue]);

  useEffect(() => {
    if (isBreathing) {
      setShowBreathHoldCounter(false);
    }
  }, [isBreathing]);

  return (
    <>
      <div className={styles.breathingExerciseCounter}>
        <BreathingExerciseCounter
          maxNumberOfBreathingExercises={4}
          numberOfBreathingExercises={numberOfFinishedExercises}
          onReset={() => {
            clickPlayer.play();
            updateNumberOfFinishedExercises(0);
          }}
        />
      </div>
      {isBreathing && <h1 className={styles.breathCounter}>{breathCount}</h1>}
      {showBreathHoldCounter && (
        <BreathHoldCounter className={styles.breathCounter} />
      )}
      <BreathingCircle
        breathDurationInMillis={props.breathDurationInMillis}
        delayBeforeStartingAnimationsInMillis={props.startDelayInMillis}
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
