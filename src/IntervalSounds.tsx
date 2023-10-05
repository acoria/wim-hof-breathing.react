import { useEffect, useMemo, useState } from "react";
import { IntervalSoundPlayer } from "./components/soundPlayer/intervalSoundPlayer/IntervalSoundPlayer";

export const IntervalSounds: React.FC = () => {
  const [playSound, setPlaySound] = useState(false);

  useEffect(() => {
    if (playSound) {
      highSoundIntervalPlayer.play();
      setTimeout(() => {
        lowSoundIntervalPlayer.play();
      }, 1000);
    } else {
      highSoundIntervalPlayer.stop();
      lowSoundIntervalPlayer.stop();
    }
  }, [playSound]);

  const lowSoundIntervalPlayer = useMemo(
    () => new IntervalSoundPlayer("./assets/sounds/low_pop.mp3", 2000),
    []
  );

  const highSoundIntervalPlayer = useMemo(
    () => new IntervalSoundPlayer("./assets/sounds/high_pop.mp3", 2000),
    []
  );

  return (
    <button
      onClick={() => {
        setPlaySound((previous) => !previous);
      }}
    >
      Listen to me
    </button>
  );
};
