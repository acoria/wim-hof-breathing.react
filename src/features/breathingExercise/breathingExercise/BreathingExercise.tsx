import { PlayerButton } from "../../playCircle/PlayCircle";
import { IBreathingExerciseProps } from "./IBreathingExerciseProps";
import { useBreathingExercisePlayer } from "./useBreathingExercisePlayer";

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
      <PlayerButton isPlaying={isRunning} onPlay={start} onStop={stop} />
    </>
  );
};
