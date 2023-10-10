import { ReactNode, useState } from "react";
import styles from "./BreathingExerciseCounter.module.css";
import { IBreathingExerciseCounterProps } from "./IBreathingExerciseCounterProps";
import { style } from "../../../utils/style";

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
        ></div>
      );
      index++;
      key++;
    }
    //add empty blocks if necessary
    if (props.maxNumberOfBreathingExercises)
      while (blocks.length < props.maxNumberOfBreathingExercises) {
        blocks.push(<div key={key++} className={styles.indicator}></div>);
        key++;
      }
    return blocks;
  };

  const startResetTimer = () =>
    setResetTimeoutId(
      setTimeout(() => {
        props.onReset();
      }, 1000)
    );

  const cancelResetTimer = () => {
    clearTimeout(resetTimeoutId);
  };

  return (
    <div
      className={style(styles.breathingExerciseCounter, props.className)}
      onMouseDown={startResetTimer}
      onMouseMove={cancelResetTimer}
      onMouseUp={cancelResetTimer}
      onTouchStart={startResetTimer}
      onTouchMove={cancelResetTimer}
      onTouchEnd={cancelResetTimer}
    >
      {buildIndicators()}
    </div>
  );
};
