import { useMemo, useState } from "react";
import { BreathingExercisePlayer } from "../breathingExercisePlayer/BreathingExercisePlayer";
import { IUseBreathingExercisePlayer } from "./IUseBreathingExercisePlayer";
import { IBreathingExercisePlayer } from "../breathingExercisePlayer/IBreathingExercisePlayer";

export const useBreathingExercisePlayer = (
  breathDurationInMillis: number,
  numberOfRuns: number
): IUseBreathingExercisePlayer => {
  const [isRunning, setIsRunning] = useState(false);

  const breathingExercisePlayer = useMemo(() => {
    const player: IBreathingExercisePlayer = new BreathingExercisePlayer(
      breathDurationInMillis,
      numberOfRuns
    );
    player.onStart(() => setIsRunning(true));
    player.onStop(() => setIsRunning(false));
    return player;
  }, [breathDurationInMillis, numberOfRuns]);

  const start = () => {
    breathingExercisePlayer.start();
  };

  const stop = () => {
    breathingExercisePlayer.stop();
  };

  return {
    start,
    stop,
    isRunning,
  };
};
