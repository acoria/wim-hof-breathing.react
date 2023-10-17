import { BreathDurationSetting } from "../breathDurationSetting/BreathDurationSetting";
import { ISettingsProps } from "./ISettingsProps";
import styles from "./Settings.module.css";

export const Settings: React.FC<ISettingsProps> = () => {
  return (
    <div className={styles.settings}>
      <BreathDurationSetting />
    </div>
  );
};
