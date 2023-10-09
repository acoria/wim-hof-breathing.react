import { ReactNode } from "react";
import styles from "./BreathingExerciseCounter.module.css";
import { IBreathingExerciseCounterProps } from "./IBreathingExerciseCounterProps";

export const BreathingExerciseCounter: React.FC<
  IBreathingExerciseCounterProps
> = (props) => {
  let index = 0;
  let blocks: ReactNode[] = [];
  const buildIndicators = (): ReactNode[] => {
    while (index < props.numberOfBreathingExercises) {
      blocks.push(<div className={`${styles.indicator} ${styles.filledIndicator}`}></div>);
      index++;
    }
    //add empty blocks if necessary
    if (props.maxNumberOfBreathingExercises)
      while (blocks.length < props.maxNumberOfBreathingExercises) {
        blocks.push(<div className={styles.indicator}></div>);
      }
    return blocks;
  };

  return (
    <div className={`${styles.breathingExerciseCounter} ${props.className}`}>
      {buildIndicators()}
    </div>
  );
};
