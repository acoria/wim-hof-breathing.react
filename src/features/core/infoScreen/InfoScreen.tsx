import { useState } from "react";
import { Icon } from "../../../components/icons/Icon";
import { IconType } from "../../../components/icons/IconType";
import { style } from "../../../utils/style";
import { IInfoScreenProps } from "./IInfoScreenProps";
import styles from "./InfoScreen.module.css";
import { CSSTransition } from "react-transition-group";

export const InfoScreen: React.FC<IInfoScreenProps> = (props) => {
  const [showInfoArea, setShowInfoArea] = useState(props.showInfoArea);

  return (
    <div className={style(styles.infoScreen, props.className)}>
      <Icon
        iconType={IconType.INFO}
        className={`${styles.infoIcon} ${
          showInfoArea && styles.infoIconInvisible
        }`}
        onClick={() => setShowInfoArea(true)}
      />
      <CSSTransition
        in={showInfoArea}
        timeout={{ enter: 1000, exit: 0 }}
        classNames={{
          enter: styles.infoAreaOutOfView,
          enterActive: styles.infoAreaComeIntoView,
          enterDone: styles.infoAreaComeIntoView,
          exit: styles.infoAreaComeIntoView,
          exitActive: styles.infoAreaOutOfView,
          exitDone: styles.infoAreaOutOfView,
        }}
      >
        <div className={styles.infoArea}>
          <Icon
            iconType={IconType.INFO}
            className={styles.infoIcon}
            onClick={() => setShowInfoArea(false)}
          />
          <div className={styles.infoDetails}>
            <h1>Test</h1>
            <p>Some descriptive text</p>
            <p>Some descriptive text</p>
            <p>Some descriptive text</p>
            <p>Some descriptive text</p>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};
