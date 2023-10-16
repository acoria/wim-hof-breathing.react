import styles from "./ExerciseList.module.css";
import { IExerciseListProps } from "./IExerciseListProps";

export const ExerciseList: React.FC<IExerciseListProps> = (props) => {
  return <div className={styles.exerciseList}></div>;
};
