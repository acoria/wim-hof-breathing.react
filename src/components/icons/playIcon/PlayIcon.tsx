import { ReactComponent as Circle } from "../../../assets/images/circle.svg";
import { ReactComponent as Triangle } from "../../../assets/images/triangle.svg";
import { ReactComponent as Square } from "../../../assets/images/square.svg";
import styles from "./PlayIcon.module.css";
import { IPlayIconProps } from "./IPlayIconProps";
import { style } from "../../../utils/style";

export const PlayIcon: React.FC<IPlayIconProps> = (props) => {
  return (
    <div
      className={style(styles.playIcon, props.className)}
      onClick={props.onClick}
      style={{ width: props.width }}
    >
      <Circle className={`${styles.circle}`}></Circle>
      {props.isPlaying && !props.hideState && (
        <Square className={styles.iconInside} />
      )}
      {!props.isPlaying && !props.hideState && (
        <Triangle className={styles.iconInside} />
      )}
    </div>
  );
};
