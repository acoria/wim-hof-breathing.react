import { Icon } from "../../components/icons/Icon";
import { IconType } from "../../components/icons/IconType";
import { IPlayerButtonProps } from "./IPlayerButtonProps";
import styles from "./PlayerButton.module.css";

export const PlayerButton: React.FC<IPlayerButtonProps> = (props) => {
  return (
    <div className={styles.playerButton}>
      <Icon
        iconType={props.isPlaying ? IconType.STOP : IconType.PLAY}
        onClick={() => {
          if (props.isPlaying) {
            props.onStop();
          } else {
            props.onPlay();
          }
        }}
        className={styles.icon}
      />
    </div>
  );
};
