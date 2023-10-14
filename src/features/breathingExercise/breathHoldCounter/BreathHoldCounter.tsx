import { useEffect, useMemo, useState } from "react";
import { IBreathHoldCounterProps } from "./IBreathHoldCounterProps";
import styles from "./BreathHoldCounter.module.css";
import { style } from "../../../utils/style";
import { SoundPlayer } from "../../../components/soundPlayer/soundPlayer/SoundPlayer";
import { ISoundPlayer } from "../../../components/soundPlayer/soundPlayer/ISoundPlayer";
import { click } from "@testing-library/user-event/dist/click";

export const BreathHoldCounter: React.FC<IBreathHoldCounterProps> = (props) => {
  const [secondsBreathHold, setSecondsBreathHold] = useState(-1);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  const [showOverlay, setShowOverlay] = useState(false);
  const clickPlayer: ISoundPlayer = useMemo(
    () => new SoundPlayer("./assets/sounds/click.mp3"),
    []
  );

  const countUp = () => {
    setSecondsBreathHold((previous) => previous + 1);
    setTimeoutId(
      setTimeout(() => {
        countUp();
      }, 1000)
    );
  };

  useEffect(() => {
    countUp();
    setShowOverlay(true);
  }, []);

  return (
    <>
      <div className={style(styles.breathHoldCounter, props.className)}>
        <h5>{secondsBreathHold}s</h5>
      </div>
      {showOverlay && (
        <div
          className={styles.overlay}
          onClick={() => {
            clickPlayer.play();
            clearTimeout(timeoutId);
            setShowOverlay(false);
          }}
        ></div>
      )}
    </>
  );
};
