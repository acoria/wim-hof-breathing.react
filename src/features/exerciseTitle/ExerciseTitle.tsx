import styles from "./ExerciseTitle.module.css";
import { IExerciseTitleProps } from "./IExerciseTitleProps";

export const ExerciseTitle: React.FC<IExerciseTitleProps> = (props) => {
  return (
    <div className={styles.exerciseTitle}>
      <h1>{props.title}</h1>
    </div>
  );
};
