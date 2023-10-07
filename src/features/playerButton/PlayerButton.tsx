import { PlayIcon } from "../../components/icons/playIcon/PlayIcon";
import { IPlayerButtonProps } from "./IPlayerButtonProps";
import styles from "./PlayerButton.module.css";

export const PlayerButton: React.FC<IPlayerButtonProps> = (props) => {
  return (
    <div className={styles.playerButton}>
      <PlayIcon
        className={styles.playIcon}
        isPlaying={props.isPlaying}
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
