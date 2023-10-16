import { IDetailScreenProps } from "./IDetailScreenProps";
import styles from "./DetailScreen.module.css";
import { ScreenTitle } from "../screenTitle/ScreenTitle";

export const DetailScreen: React.FC<IDetailScreenProps> = (props) => {
  return (
    <div className={styles.detailScreen}>
      {/* <div className={styles.title}>{props.title}</div> */}
      <ScreenTitle title={props.title} />
      <div className={styles.children}>{props.children}E</div>
    </div>
  );
};
