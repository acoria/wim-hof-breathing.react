import { IDetailScreenProps } from "./IDetailScreenProps";
import styles from "./DetailScreen.module.css";
import { ScreenTitle } from "../screenTitle/ScreenTitle";
import { Icon } from "../../../components/icons/Icon";
import { IconType } from "../../../components/icons/IconType";
import { InfoScreen } from "../infoScreen/InfoScreen";
import { useState } from "react";

export const DetailScreen: React.FC<IDetailScreenProps> = (props) => {
  const [showInfoArea, setShowInfoArea] = useState(false);

  return (
    <div>
      <Icon
        iconType={IconType.HOME}
        className={styles.homeIcon}
        onClick={props.onHomeButtonClick}
      />
      <ScreenTitle
        title={props.title}
        showInfoIcon
        onInfoIconClick={() => setShowInfoArea(true)}
      />
      <InfoScreen className={styles.infoScreen} showInfoArea={showInfoArea} />
      <div>{props.children}</div>
    </div>
  );
};
