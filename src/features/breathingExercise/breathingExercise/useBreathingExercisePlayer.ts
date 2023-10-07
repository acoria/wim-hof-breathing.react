import { useMemo, useState } from "react";
import { BreathingExercisePlayer } from "../breathingExercisePlayer/BreathingExercisePlayer";
import { IUseBreathingExercisePlayer } from "./IUseBreathingExercisePlayer";
import { IBreathingExercisePlayer } from "../breathingExercisePlayer/IBreathingExercisePlayer";

export const useBreathingExercisePlayer = (
  breathDurationInMillis: number,
  numberOfRuns: number,
  startDelayInMillis: number = 0
): IUseBreathingExercisePlayer => {
  const [isRunning, setIsRunning] = useState(false);
  const [breathCount, setBreathCount] = useState(0);

  const breathingExercisePlayer = useMemo(() => {
    const player: IBreathingExercisePlayer = new BreathingExercisePlayer(
      breathDurationInMillis,
      numberOfRuns,
      startDelayInMillis
    );
    player.onStart(() => setIsRunning(true));
    player.onStop(() => setIsRunning(false));
    player.onNewBreath((breathCount) => setBreathCount(breathCount));
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
    breathCount,
  };
};
