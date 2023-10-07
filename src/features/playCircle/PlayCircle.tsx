import { useState } from "react";
import { PlayIcon } from "../../components/icons/playIcon/PlayIcon";
import { IPlayerButtonProps } from "./IPlayCircleProps";
import styles from "./PlayCircle.module.css";

export const PlayerButton: React.FC<IPlayerButtonProps> = (props) => {
  const [animate, setAnimate] = useState(false);

  return (
    <div className={styles.playCircle}>
      <PlayIcon
        className={`${styles.playIcon} ${animate && styles.animateCircle}`}
        isPlaying={props.isPlaying}
        hideState={animate}
        onClick={() => {
          if (props.isPlaying) {
            props.onStop();
            setAnimate(false);
          } else {
            props.onPlay();
            setAnimate(true);
          }
        }}
      />
    </div>
  );
};
