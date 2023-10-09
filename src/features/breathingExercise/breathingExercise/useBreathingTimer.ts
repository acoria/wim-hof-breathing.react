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
  const [isFinished, setIsFinished] = useState(false);
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
    breathingTimer.onFinished(() => {
      setIsFinished(true);
      setIsRunning(false);
    });
    return breathingTimer;
  }, [breathDurationInMillis, numberOfBreaths, startDelayInMillis]);

  const initialize = () => {
    setIsRunning(false);
    setIsFinished(false);
    setIsBreathingIn(false);
    setBreathCount(0);
  };

  const start = () => {
    initialize();
    breathingExercisePlayer.start();
  };

  const stop = () => {
    breathingExercisePlayer.stop();
  };

  return {
    startBreathing: start,
    stopBreathing: stop,
    isBreathing: isRunning,
    isFinished,
    isBreathingIn,
    breathCount,
  };
};
