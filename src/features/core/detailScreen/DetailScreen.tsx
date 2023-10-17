import { IDetailScreenProps } from "./IDetailScreenProps";
import styles from "./DetailScreen.module.css";
import { ScreenTitle } from "../screenTitle/ScreenTitle";
import { Icon } from "../../../components/icons/Icon";
import { IconType } from "../../../components/icons/IconType";

export const DetailScreen: React.FC<IDetailScreenProps> = (props) => {
  return (
    <div>
      <Icon
        iconType={IconType.HOME}
        className={styles.homeIcon}
        onClick={props.onHomeButtonClick}
      />
      <ScreenTitle title={props.title} />
      <div>{props.children}</div>
    </div>
  );
};
