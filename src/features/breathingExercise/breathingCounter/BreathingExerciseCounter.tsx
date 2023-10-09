import { ReactNode, useState } from "react";
import styles from "./BreathingExerciseCounter.module.css";
import { IBreathingExerciseCounterProps } from "./IBreathingExerciseCounterProps";

export const BreathingExerciseCounter: React.FC<
  IBreathingExerciseCounterProps
> = (props) => {
  const [timeTouchedScreen, setTimeTouchedScreen] = useState<number>(0);

  let index = 0;
  let blocks: ReactNode[] = [];
  const buildIndicators = (): ReactNode[] => {
    let key = 0;
    while (index < props.numberOfBreathingExercises) {
      blocks.push(
        <div
          key={key}
          className={`${styles.indicator} ${styles.filledIndicator}`}
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

  const checkForReset = (currentTime: number) => {
    if (currentTime - timeTouchedScreen >= 1500) {
      props.onReset();
    }
  };

  return (
    <div
      className={`${styles.breathingExerciseCounter} ${props.className}`}
      onMouseDown={() => setTimeTouchedScreen(Date.now())}
      onMouseUp={() => checkForReset(Date.now())}
      onTouchStart={() => setTimeTouchedScreen(Date.now())}
      onTouchEnd={() => checkForReset(Date.now())}
    >
      {buildIndicators()}
    </div>
  );
};
