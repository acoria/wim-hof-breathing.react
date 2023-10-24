import { IDetailScreenProps } from "./IDetailScreenProps";
import styles from "./DetailScreen.module.css";
import { ScreenTitle } from "../screenTitle/ScreenTitle";
import { Icon } from "../../../components/icons/Icon";
import { IconType } from "../../../components/icons/IconType";
import { InfoPopup } from "../infoPopup/InfoPopup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const DetailScreen: React.FC<IDetailScreenProps> = (props) => {
  const [showInfoArea, setShowInfoArea] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Icon
        iconType={IconType.HOME}
        className={styles.homeIcon}
        onClick={() => navigate("/")}
      />
      <ScreenTitle
        title={props.title}
        showInfoIcon={props.infoPopupContent !== undefined}
        onInfoIconClick={() => setShowInfoArea((previous) => !previous)}
      />
      {props.infoPopupContent && (
        <InfoPopup
          className={styles.infoScreen}
          showInfoArea={showInfoArea}
          onInfoAreaDisplayChange={(visible) => setShowInfoArea(visible)}
          children={props.infoPopupContent}
        />
      )}
      <div>{props.children}</div>
    </div>
  );
};
