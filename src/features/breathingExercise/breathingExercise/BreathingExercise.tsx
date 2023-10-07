import { PlayerButton } from "../../playerButton/PlayerButton";
import { IBreathingExerciseProps } from "./IBreathingExerciseProps";
import { useBreathingExercisePlayer } from "./useBreathingExercisePlayer";

export const BreathingExercise: React.FC<IBreathingExerciseProps> = (props) => {
  const { start, stop, isRunning } = useBreathingExercisePlayer(
    props.breathDurationInMillis,
    props.numberOfRuns
  );

  return (
    <>
      <PlayerButton isPlaying={isRunning} onPlay={start} onStop={stop} />
    </>
  );
};
