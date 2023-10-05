import { useEffect, useMemo, useState } from "react";
import { SoundPlayer } from "./components/soundPlayer/soundPlayer/SoundPlayer";
import { IntervalSoundPlayer } from "./components/soundPlayer/intervalSoundPlayer/IntervalSoundPlayer";
import { IntervalSounds } from "./IntervalSounds";

export const App = () => {
  return <IntervalSounds />;
  // const [playSound, setPlaySound] = useState(false);
  // const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  // const lowPop = "./assets/sounds/low_pop.mp3";

  // useEffect(() => {
  //   if (playSound) {
  //     startPlayingSound();
  //   } else {
  //     stopPlayingSound();
  //   }
  // }, [playSound]);

  // const soundPlayer = useMemo(() => new SoundPlayer(lowPop), []);

  // const startPlayingSound = () => {
  //   const intervalId = setInterval(() => soundPlayer.play(), 1000);
  //   setIntervalId(intervalId);
  // };

  // const stopPlayingSound = () => {
  //   soundPlayer.stop();
  //   clearInterval(intervalId);
  // };

  // return (
  //   <>
  //     <button onClick={() => setPlaySound((previous) => !previous)}>
  //       Do you hear that?
  //     </button>
  //     <button onClick={() => new SoundPlayer(lowPop).play()}>
  //       Use sound player
  //     </button>
  //   </>
  // );
};
