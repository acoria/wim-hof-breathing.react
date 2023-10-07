import { PlayerButton } from "../../playerButton/PlayerButton";
import { IBreathingExerciseProps } from "./IBreathingExerciseProps";
import { useBreathingExercisePlayer } from "./useBreathingExercisePlayer";
import { ReactComponent as Square } from "../../../assets/images/square.svg";
import styles from "./BreathingExercise.module.css";
import testStyle from "../../playerButton/PlayerButton.module.css";
import { PlayIcon } from "../../../components/icons/playIcon/PlayIcon";

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
