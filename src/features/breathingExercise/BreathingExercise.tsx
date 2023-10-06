import { useEffect, useMemo, useState } from "react";
import { IntervalSoundPlayer } from "../../components/soundPlayer/intervalSoundPlayer/IntervalSoundPlayer";
import { IBreathingExerciseProps } from "./IBreathingExerciseProps";
import { PlayerButton } from "../playerButton/PlayerButton";

export const BreathingExercise: React.FC<IBreathingExerciseProps> = (props) => {
  const numberOfFinishBreaths = 3;
  const [playSound, setPlaySound] = useState(false);
  const [isPlayerRunning, setIsPlayerRunning] = useState(false);
  const [timeoutIds, setTimeoutIds] = useState<NodeJS.Timeout[]>([]);

  const lowSoundIntervalPlayer = useMemo(() => {
    const intervalSoundPlayer = new IntervalSoundPlayer(
      "./assets/sounds/low_pop.mp3",
      props.breathDurationInMillis
    );
    intervalSoundPlayer.registerOnStop(() => setIsPlayerRunning(false));
    return intervalSoundPlayer;
  }, []);

  const highSoundIntervalPlayer = useMemo(
    () =>
      new IntervalSoundPlayer(
        "./assets/sounds/high_pop.mp3",
        props.breathDurationInMillis
      ),
    []
  );

  const finishSoundIntervalPlayer = useMemo(
    () =>
      new IntervalSoundPlayer(
        "./assets/sounds/bottle_pop.mp3",
        props.breathDurationInMillis
      ),
    []
  );

  /**
   * Set a timer for playing the low breathing sounds.
   * It starts after half the breathingDurationInMillis.
   */
  const setLowSoundIntervalPlayer = (): NodeJS.Timeout => {
    return setTimeout(() => {
      lowSoundIntervalPlayer.play(props.numberOfRuns);
    }, props.breathDurationInMillis / 2);
  };

  /**
   * Sets a timer for playing the finishing breath sound.
   * It starts after the entire time minus the finishing breaths duration
   */
  const setFinishingSoundIntervalPlayer = (): NodeJS.Timeout => {
    return setTimeout(() => {
      finishSoundIntervalPlayer.play(numberOfFinishBreaths);
    }, props.numberOfRuns * props.breathDurationInMillis - props.breathDurationInMillis * numberOfFinishBreaths);
  };

  useEffect(() => {
    if (playSound) {
      const timeoutIds = [];
      setIsPlayerRunning(true);
      //only play the high sound until the finishing sound plays
      highSoundIntervalPlayer.play(props.numberOfRuns - numberOfFinishBreaths);
      timeoutIds.push(setLowSoundIntervalPlayer());
      timeoutIds.push(setFinishingSoundIntervalPlayer());
      setTimeoutIds(timeoutIds);
    } else {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
      highSoundIntervalPlayer.stop();
      lowSoundIntervalPlayer.stop();
      finishSoundIntervalPlayer.stop();
    }
  }, [playSound]);

  return (
    <>
      isPlayerRunning && (
      <PlayerButton
        isPlayerRunning={isPlayerRunning}
        onPlay={() => {
          setTimeout(() => setPlaySound(true), 1000);
        }}
        onStop={() => setPlaySound(false)}
      />
      )
    </>
  );
};
