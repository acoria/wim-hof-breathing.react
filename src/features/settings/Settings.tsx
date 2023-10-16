import { DetailScreen } from "../components/detailScreen/DetailScreen";
import { ISettingsProps } from "./ISettingsProps";
import styles from "./Settings.module.css";
import { BreathDurationSetting } from "./features/breathDurationSetting/BreathDurationSetting";

export const Settings: React.FC<ISettingsProps> = () => {
  return (
    <DetailScreen title={"Settings"}>
      <div className={styles.settings}>
        <BreathDurationSetting />
      </div>
    </DetailScreen>
  );
};
