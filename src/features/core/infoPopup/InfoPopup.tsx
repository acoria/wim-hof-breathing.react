import { useEffect, useState } from "react";
import { Icon } from "../../../components/icons/Icon";
import { IconType } from "../../../components/icons/IconType";
import { style } from "../../../utils/style";
import { IInfoScreenProps } from "./IInfoPopupProps";
import styles from "./InfoPopup.module.css";
import { CSSTransition } from "react-transition-group";

export const InfoPopup: React.FC<IInfoScreenProps> = (props) => {
  const [showInfoArea, setShowInfoArea] = useState(props.showInfoArea);

  useEffect(() => {
    if (props.showInfoArea !== undefined) {
      changeInfoAreaVisibility(props.showInfoArea);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.showInfoArea]);

  const changeInfoAreaVisibility = (visible: boolean) => {
    setShowInfoArea(visible);
    props.onInfoAreaDisplayChange?.(visible);
  };

  return (
    <div className={style(styles.infoPopup, props.className)}>
      <CSSTransition
        in={showInfoArea}
        timeout={{ enter: 500, exit: 0 }}
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
            iconType={IconType.CLOSE}
            className={styles.infoIcon}
            onClick={() => changeInfoAreaVisibility(false)}
          />
          <div className={styles.infoDetails}>{props.children}</div>
        </div>
      </CSSTransition>
    </div>
  );
};
