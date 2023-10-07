import { useState } from "react";
import { PlayIcon } from "../../components/icons/playIcon/PlayIcon";
import { IPlayCircleProps } from "./IPlayCircleProps";
import styles from "./PlayCircle.module.css";

export const PlayCircle: React.FC<IPlayCircleProps> = (props) => {
  const [animate, setAnimate] = useState(false);

  return (
    <div className={`${styles.playCircle} ${props.className}`}>
      <PlayIcon
        className={`${styles.playIcon} ${animate && styles.animateCircle}`}
        width={props.width}
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
