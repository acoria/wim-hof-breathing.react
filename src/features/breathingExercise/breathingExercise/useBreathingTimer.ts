import { useMemo, useState } from "react";
import { BreathingTimer } from "../breathingTimer/BreathingTimer";
import { IUseBreathingExercisePlayer as IUseBreathingTimer } from "./IUseBreathingExercisePlayer";
import { IBreathingTimer } from "../breathingTimer/IBreathingTimer";
import { BreathingExerciseSoundPlayer } from "../breathingExerciseSoundPlayer/BreathingExerciseSoundPlayer";

export const useBreathingTimer = (
  breathDurationInMillis: number,
  numberOfBreaths: number,
  startDelayInMillis: number = 0
): IUseBreathingTimer => {
  const [isRunning, setIsRunning] = useState(false);
  const [isBreathingIn, setIsBreathingIn] = useState(false);
  const [breathCount, setBreathCount] = useState(0);

  const breathingExercisePlayer = useMemo(() => {
    const breathingTimer: IBreathingTimer = new BreathingTimer(
      numberOfBreaths,
      breathDurationInMillis,
      startDelayInMillis
    );

    breathingTimer.onStart(() => setIsRunning(true));
    breathingTimer.onStop(() => setIsRunning(false));
    breathingTimer.onBreathingIn((breathingInfo) => {
      setIsBreathingIn(true);
      setBreathCount(breathingInfo.index);
    });
    breathingTimer.onBreathingOut(() => setIsBreathingIn(false));
    new BreathingExerciseSoundPlayer(breathingTimer);
    return breathingTimer;
  }, [breathDurationInMillis, numberOfBreaths, startDelayInMillis]);

  const start = () => {
    breathingExercisePlayer.start();
  };

  const stop = () => {
    breathingExercisePlayer.stop();
  };

  return {
    startBreathing: start,
    stopBreathing: stop,
    isBreathing: isRunning,
    isBreathingIn,
    breathCount,
  };
};
