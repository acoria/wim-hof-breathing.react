import { InfoArea } from "../infoArea/InfoArea";
import { IInfoDetailScreenProps } from "./IInfoDetailScreenProps";
import styles from "./InfoDetailScreen.module.css";

export const InfoDetailScreen: React.FC<IInfoDetailScreenProps> = (props) => {
  return <InfoArea className={styles.infoDetailScreen} {...props} />;
};
