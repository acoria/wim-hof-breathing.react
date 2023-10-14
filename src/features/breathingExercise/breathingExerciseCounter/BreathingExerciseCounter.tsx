import { ReactNode, useState } from "react";
import { style } from "../../../utils/style";
import styles from "./BreathingExerciseCounter.module.css";
import { IBreathingExerciseCounterProps } from "./IBreathingExerciseCounterProps";

export const BreathingExerciseCounter: React.FC<
  IBreathingExerciseCounterProps
> = (props) => {
  const [resetTimeoutId, setResetTimeoutId] = useState<NodeJS.Timeout>();

  let index = 0;
  let blocks: ReactNode[] = [];
  const buildIndicators = (): ReactNode[] => {
    let key = 0;
    while (index < props.numberOfBreathingExercises) {
      blocks.push(
        <div
          key={key}
          className={style(styles.indicator, styles.filledIndicator)}
          {...resetTimerEvents}
        ></div>
      );
      index++;
      key++;
    }
    //add empty blocks if necessary
    if (props.maxNumberOfBreathingExercises)
      while (blocks.length < props.maxNumberOfBreathingExercises) {
        blocks.push(
          <div
            key={key++}
            className={styles.indicator}
            {...resetTimerEvents}
          ></div>
        );
        key++;
      }
    return blocks;
  };

  const cancelResetTimer = () => clearTimeout(resetTimeoutId);

  const resetTimerEvents = {
    onMouseDown: () => startResetTimer(),
    onMouseUp: () => cancelResetTimer(),
    onTouchStart: () => startResetTimer(),
    onTouchMove: () => cancelResetTimer(),
    onTouchEnd: () => cancelResetTimer(),
  };

  const startResetTimer = () => {
    setResetTimeoutId(setTimeout(() => props.onReset(), 1000));
  };

  return (
    <div className={style(styles.breathingExerciseCounter, props.className)}>
      {buildIndicators()}
    </div>
  );
};
