import { useEffect, useMemo, useState } from "react";
import { IntervalSoundPlayer } from "./components/soundPlayer/intervalSoundPlayer/IntervalSoundPlayer";

export const IntervalSounds: React.FC = () => {
  const interval = 2000;
  const numberOfRuns = 4;
  const [playSound, setPlaySound] = useState(false);
  const [playerRunning, setPlayerRunning] = useState(false);
  const [timeoutIds, setTimeoutIds] = useState<NodeJS.Timeout[]>([]);

  useEffect(() => {
    if (playSound) {
      const timeoutIds = [];
      setPlayerRunning(true);
      highSoundIntervalPlayer.play(numberOfRuns - 2);
      timeoutIds.push(
        setTimeout(() => {
          lowSoundIntervalPlayer.play(numberOfRuns);
        }, interval / 2)
      );
      //set finishing timer to start 2 runs before the end
      timeoutIds.push(
        setTimeout(() => {
          gongSoundIntervalPlayer.play(2);
        }, numberOfRuns * interval - interval * 2)
      );
      setTimeoutIds(timeoutIds);
    } else {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
      highSoundIntervalPlayer.stop();
      lowSoundIntervalPlayer.stop();
      gongSoundIntervalPlayer.stop();
    }
  }, [playSound]);

  const lowSoundIntervalPlayer = useMemo(() => {
    const intervalSoundPlayer = new IntervalSoundPlayer(
      "./assets/sounds/low_pop.mp3",
      interval
    );
    intervalSoundPlayer.registerOnStop(() => setPlayerRunning(false));
    return intervalSoundPlayer;
  }, []);

  const highSoundIntervalPlayer = useMemo(
    () => new IntervalSoundPlayer("./assets/sounds/high_pop.mp3", interval),
    []
  );

  const gongSoundIntervalPlayer = useMemo(
    () => new IntervalSoundPlayer("./assets/sounds/bottle_pop.mp3", interval),
    []
  );

  return (
    <button
      onClick={() => {
        setPlaySound((previous) => !previous);
      }}
    >
      {playerRunning ? "Stop" : "Play"}
    </button>
  );
};
