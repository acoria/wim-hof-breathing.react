import { PlayIcon } from "../../components/icons/playIcon/PlayIcon";
import { IBreathingCircleProps } from "./IBreathingCircleProps";
import styles from "./BreathingCircle.module.css";

export const BreathingCircle: React.FC<IBreathingCircleProps> = (props) => {
  const getStyle = () => {
    let style = "";
    if (props.isBreathing) {
      style = styles.moveCircleUp;
    }
    if (props.isBreathingIn) {
      style = style + styles.expandCircle;
    }
    return style;
  };

  return (
    <div className={`${styles.playCircle} ${props.className}`}>
      <PlayIcon
        className={`${styles.playIcon} ${getStyle()}`}
        width={props.width}
        isPlaying={props.isBreathing}
        hideState={props.isBreathing}
        onClick={() => {
          if (props.isBreathing) {
            props.onStopBreathing();
          } else {
            props.onStartBreathing();
          }
        }}
      />
    </div>
  );
};
