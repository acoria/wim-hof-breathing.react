import { style } from "../../utils/style";
import styles from "./ExerciseTitle.module.css";
import { IExerciseTitleProps } from "./IExerciseTitleProps";

export const ExerciseTitle: React.FC<IExerciseTitleProps> = (props) => {
  return (
    <div
      className={style(styles.exerciseTitle, props.className)}
      onClick={props.onClick}
    >
      <h1>{props.title}</h1>
    </div>
  );
};
