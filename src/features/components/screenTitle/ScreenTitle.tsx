import { style } from "../../../utils/style";
import styles from "./ScreenTitle.module.css";
import { IScreenTitleProps } from "./IScreenTitleProps";

export const ScreenTitle: React.FC<IScreenTitleProps> = (props) => {
  return (
    <div
      className={style(styles.screenTitle, props.className)}
      onClick={props.onClick}
    >
      <h1>{props.title}</h1>
    </div>
  );
};
