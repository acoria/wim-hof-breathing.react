import { useEffect, useState } from "react";
import { IBreathHoldCounterProps } from "./IBreathHoldCounterProps";
import styles from "./BreathHoldCounter.module.css";

export const BreathHoldCounter: React.FC<IBreathHoldCounterProps> = (props) => {
  const [secondsBreathHold, setSecondsBreathHold] = useState(-1);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

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
  }, []);

  return (
    <div
      className={`${styles.breathHoldCounter} ${props.className}`}
      onClick={() => clearTimeout(timeoutId)}
    >
      <h5>{secondsBreathHold}s</h5>
    </div>
  );
};
