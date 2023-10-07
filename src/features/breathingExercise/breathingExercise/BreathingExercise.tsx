import { PlayCircle } from "../../playCircle/PlayCircle";
import { IBreathingExerciseProps } from "./IBreathingExerciseProps";
import { useBreathingExercisePlayer } from "./useBreathingExercisePlayer";
import styles from './BreathingExercise.module.css'

export const BreathingExercise: React.FC<IBreathingExerciseProps> = (props) => {
  const { start, stop, isRunning, breathCount } = useBreathingExercisePlayer(
    props.breathDurationInMillis,
    props.numberOfRuns,
    props.startDelayInMillis
  );

  return (
    <>
      {/* {isRunning && <h1 style={{ color: "white" }}>Hello? anyone there?</h1>} */}
      <h1 style={{ color: "white" }}>{breathCount}</h1>
      <PlayCircle
        isPlaying={isRunning}
        onPlay={start}
        onStop={stop}
        width={"12rem"}
        className={styles.playCircle}
      />
    </>
  );
};
