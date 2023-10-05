import { useEffect, useMemo, useState } from "react";
import { IntervalSoundPlayer } from "./components/soundPlayer/intervalSoundPlayer/IntervalSoundPlayer";

export const IntervalSounds: React.FC = () => {
  const interval = 4000;
  const [playSound, setPlaySound] = useState(false);

  useEffect(() => {
    if (playSound) {
      highSoundIntervalPlayer.play();
      setTimeout(() => {
        lowSoundIntervalPlayer.play();
      }, interval / 2);
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
