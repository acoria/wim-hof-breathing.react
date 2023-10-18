import { IDetailScreenProps } from "./IDetailScreenProps";
import styles from "./DetailScreen.module.css";
import { ScreenTitle } from "../screenTitle/ScreenTitle";
import { Icon } from "../../../components/icons/Icon";
import { IconType } from "../../../components/icons/IconType";
import { InfoScreen } from "../infoScreen/InfoScreen";

export const DetailScreen: React.FC<IDetailScreenProps> = (props) => {
  return (
    <div>
      <Icon
        iconType={IconType.HOME}
        className={styles.homeIcon}
        onClick={props.onHomeButtonClick}
      />
      <div className={styles.titleWrapper}>
        <ScreenTitle title={props.title} />
        <InfoScreen className={styles.infoScreen} />
      </div>
      <div>{props.children}</div>
    </div>
  );
};
