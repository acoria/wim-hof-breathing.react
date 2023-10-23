import { IDetailScreenProps } from "./IDetailScreenProps";
import styles from "./DetailScreen.module.css";
import { ScreenTitle } from "../screenTitle/ScreenTitle";
import { Icon } from "../../../components/icons/Icon";
import { IconType } from "../../../components/icons/IconType";
import { InfoPopup } from "../infoPopup/InfoPopup";
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
        showInfoIcon={props.infoArea !== undefined}
        onInfoIconClick={() => setShowInfoArea((previous) => !previous)}
      />
      {props.infoArea && (
        <InfoPopup
          className={styles.infoScreen}
          showInfoArea={showInfoArea}
          onInfoAreaDisplayChange={(visible) => setShowInfoArea(visible)}
          children={props.infoArea}
        />
      )}
      <div>{props.children}</div>
    </div>
  );
};
