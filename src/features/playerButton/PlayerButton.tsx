import { Icon } from "../../components/icons/Icon";
import { IconType } from "../../components/icons/IconType";
import { IPlayerButtonProps } from "./IPlayerButtonProps";
import "./PlayerButton.css";

export const PlayerButton: React.FC<IPlayerButtonProps> = (props) => {
  return (
    <div className="playerButton">
      <Icon
        iconType={props.isPlayerRunning ? IconType.STOP : IconType.PLAY}
        onClick={
          props.isPlayerRunning ? () => props.onStop() : () => props.onPlay()
        }
      />
    </div>
  );
};
