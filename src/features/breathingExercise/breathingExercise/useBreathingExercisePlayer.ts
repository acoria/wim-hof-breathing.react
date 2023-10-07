import { useMemo, useState } from "react";
import { BreathingExercisePlayer } from "../breathingExercisePlayer/BreathingExercisePlayer";

export const useBreathingExercisePlayer = (
  breathDurationInMillis: number,
  numberOfRuns: number
) => {
  const [isRunning, setIsRunning] = useState(false);
  const breathingExercisePlayer = useMemo(() => {
    const player = new BreathingExercisePlayer(
      breathDurationInMillis,
      numberOfRuns
    );
    player.onStart(() => setIsRunning(true));
    player.onStop(() => setIsRunning(false));
    return player;
  }, [breathDurationInMillis, numberOfRuns]);

  return {
    start: breathingExercisePlayer.start,
    stop: breathingExercisePlayer.stop,
    isRunning,
  };
};
