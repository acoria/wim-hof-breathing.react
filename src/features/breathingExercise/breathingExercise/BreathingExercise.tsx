import { PlayCircle } from "../../playCircle/PlayCircle";
import styles from "./BreathingExercise.module.css";
import { IBreathingExerciseProps } from "./IBreathingExerciseProps";
import { useBreathingExercisePlayer } from "./useBreathingExercisePlayer";

export const BreathingExercise: React.FC<IBreathingExerciseProps> = (props) => {
  const { start, stop, isRunning, breathCount } = useBreathingExercisePlayer(
    props.breathDurationInMillis,
    props.numberOfBreaths,
    props.startDelayInMillis
  );

  return (
    <>
      {isRunning && <h1 className={styles.breathCounter}>{breathCount}</h1>}
      <PlayCircle
        isPlaying={isRunning}
        onPlay={start}
        onStop={stop}
        width={"12rem"}
        className={styles.playCircle}
      />
    </>
  )
};
