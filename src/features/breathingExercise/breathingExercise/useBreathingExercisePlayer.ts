import { useMemo, useState } from "react";
import { BreathingTimer } from "../breathingTimer/BreathingTimer";
import { IUseBreathingExercisePlayer } from "./IUseBreathingExercisePlayer";
import { IBreathingTimer } from "../breathingTimer/IBreathingTimer";
import { BreathingExerciseSoundPlayer } from "../breathingExerciseSoundPlayer/BreathingExerciseSoundPlayer";

export const useBreathingExercisePlayer = (
  breathDurationInMillis: number,
  numberOfBreaths: number,
  startDelayInMillis: number = 0
): IUseBreathingExercisePlayer => {
  const [isRunning, setIsRunning] = useState(false);
  const [breathCount, setBreathCount] = useState(0);

  const breathingExercisePlayer = useMemo(() => {
    const breathingTimer: IBreathingTimer = new BreathingTimer(
      numberOfBreaths,
      breathDurationInMillis,
      startDelayInMillis
    );

    breathingTimer.onStart(() => setIsRunning(true));
    breathingTimer.onStop(() => setIsRunning(false));
    breathingTimer.onNewBreath((breathCount) => setBreathCount(breathCount));
    new BreathingExerciseSoundPlayer(breathingTimer);
    return breathingTimer;
  }, [breathDurationInMillis, numberOfBreaths]);

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
