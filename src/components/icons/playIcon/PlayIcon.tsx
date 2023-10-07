import { ReactComponent as Circle } from "../../../assets/images/circle.svg";
import { ReactComponent as Triangle } from "../../../assets/images/triangle.svg";
import { ReactComponent as Square } from "../../../assets/images/square.svg";
import styles from "./PlayIcon.module.css";
import { IPlayIconProps } from "./IPlayIconProps";

export const PlayIcon: React.FC<IPlayIconProps> = (props) => {
  return (
    <div
      className={`${styles.playIcon} ${props.className}`}
      onClick={props.onClick}
    >
      <Circle className={styles.circle} />
      {props.isPlaying && !props.hideState && (
        <Square className={styles.iconInside} />
      )}
      {!props.isPlaying && !props.hideState && (
        <Triangle className={styles.iconInside} />
      )}
    </div>
  );
};
