import { style } from "../../../utils/style";
import styles from "./ScreenTitle.module.css";
import { IScreenTitleProps } from "./IScreenTitleProps";
import { Icon } from "../../../components/icons/Icon";
import { IconType } from "../../../components/icons/IconType";

export const ScreenTitle: React.FC<IScreenTitleProps> = (props) => {
  return (
    <div
      className={style(styles.screenTitle, props.className)}
      onClick={props.onClick}
    >
      <div className={styles.screenTitleBar}>
        <h1 className={styles.screenTitleBarText}>{props.title}</h1>
        {props.showInfoIcon && (
          <Icon
            iconType={IconType.INFO}
            className={styles.icon}
            onClick={props.onInfoIconClick}
          />
        )}
      </div>
    </div>
  );
};
