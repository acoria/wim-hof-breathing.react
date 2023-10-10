import { PlayIcon } from "../../components/icons/playIcon/PlayIcon";
import { IBreathingCircleProps } from "./IBreathingCircleProps";
import styles from "./BreathingCircle.module.css";
import { CSSTransition } from "react-transition-group";
import { style } from "../../utils/style";

export const BreathingCircle: React.FC<IBreathingCircleProps> = (props) => {
  return (
    <div className={style(styles.playCircle, props.className)}>
      <CSSTransition
        in={props.isBreathingIn}
        addEndListener={() => {}}
        classNames={{
          enter: styles.moveCircleUp,
          enterActive: styles.expandCircle,
          enterDone: styles.expandCircle,
          exit: styles.expandCircle,
          exitActive: styles.decreaseCircle,
          exitDone: styles.decreaseCircle,
        }}
      >
        <PlayIcon
          className={`${styles.playIcon} ${
            !props.isBreathing && styles.moveCircleDown
          }`}
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
      </CSSTransition>
    </div>
  );
};
