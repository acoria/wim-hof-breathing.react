import { useEffect, useMemo, useState } from "react";
import { IntervalSoundPlayer } from "./components/soundPlayer/intervalSoundPlayer/IntervalSoundPlayer";

export const IntervalSounds: React.FC = () => {
  const interval = 2000;
  const numberOfRuns = 4;
  const [playSound, setPlaySound] = useState(false);

  useEffect(() => {
    if (playSound) {
      highSoundIntervalPlayer.play(numberOfRuns - 2);
      setTimeout(() => {
        lowSoundIntervalPlayer.play(numberOfRuns);
      }, interval / 2);
      //set finishing timer to start 2 runs before the end
      setTimeout(() => {
        gongSoundIntervalPlayer.play(2);
      }, numberOfRuns * interval - interval * 2);
    } else {
      highSoundIntervalPlayer.stop();
      lowSoundIntervalPlayer.stop();
    }
  }, [playSound]);

  const lowSoundIntervalPlayer = useMemo(
    () => new IntervalSoundPlayer("./assets/sounds/low_pop.mp3", interval),
    []
  );

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
      {playSound ? "Stop" : "Play"}
    </button>
  );
};
