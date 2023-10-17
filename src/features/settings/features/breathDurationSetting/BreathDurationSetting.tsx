import { Slider } from "@mui/material";
import { Setting } from "../../setting/Setting";
import styles from "./BreathDurationSetting.module.css";
import { useBreathDurationLocalStorage } from "./useBreathDurationLocalStorage";

export const BreathDurationSetting: React.FC = () => {
  const [breathingDuration, updateBreathingDuration] =
    useBreathDurationLocalStorage();

  return (
    <Setting title="Your breathing time in seconds (in&out)">
      <div className={styles.breathDurationSetting}>
        <div className={styles.sliderWrapper}>
          <Slider
            className={styles.slider}
            slotProps={{
              thumb: { className: styles.thumb },
              track: { className: styles.track },
              rail: { className: styles.rail },
              mark: { className: styles.mark },
              valueLabel: { className: styles.valueLabel },
            }}
            defaultValue={breathingDuration / 1000}
            step={0.2}
            min={3}
            max={5}
            valueLabelDisplay="on"
            onChange={(_, value) =>
              updateBreathingDuration((value as number) * 1000)
            }
            marks={[
              { value: 3.0 },
              { value: 3.2 },
              { value: 3.4 },
              { value: 3.6 },
              { value: 3.8 },
              { value: 4.0 },
              { value: 4.2 },
              { value: 4.4 },
              { value: 4.6 },
              { value: 4.8 },
              { value: 5.0 },
            ]}
          />
        </div>
      </div>
    </Setting>
  );
};
