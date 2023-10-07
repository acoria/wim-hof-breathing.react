import { ReactComponent as Circle } from "../../../assets/images/circle.svg";
import { ReactComponent as Triangle } from "../../../assets/images/triangle.svg";
import styles from "./PlayIcon.module.css";

export const PlayIcon: React.FC = () => {
  return (
    <div className={styles.playIcon}>
      <Circle className={styles.circle} />
      <Triangle className={styles.triangle} />
    </div>
  );
};
