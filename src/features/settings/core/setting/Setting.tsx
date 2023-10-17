import { ISettingProps } from "./ISettingProps";
import styles from "./Setting.module.css";

export const Setting: React.FC<ISettingProps> = (props) => {
  return (
    <div className={styles.setting}>
      <div className={styles.title}>{props.title}</div>
      {props.children}
    </div>
  );
};
