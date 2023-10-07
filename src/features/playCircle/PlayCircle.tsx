import { PlayIcon } from "../../components/icons/playIcon/PlayIcon";
import { IPlayCircleProps } from "./IPlayCircleProps";
import styles from "./PlayCircle.module.css";

export const PlayCircle: React.FC<IPlayCircleProps> = (props) => {
  return (
    <div className={`${styles.playCircle} ${props.className}`}>
      <PlayIcon
        className={`${styles.playIcon} ${
          props.isPlaying && styles.animateCircle
        }`}
        width={props.width}
        isPlaying={props.isPlaying}
        hideState={props.isPlaying}
        onClick={() => {
          if (props.isPlaying) {
            props.onStop();
          } else {
            props.onPlay();
          }
        }}
      />
    </div>
  );
};
