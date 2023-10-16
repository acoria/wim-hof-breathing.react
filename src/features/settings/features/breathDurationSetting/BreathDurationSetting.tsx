import { Slider } from "@mui/material";
import { Setting } from "../../setting/Setting";
import styles from "./BreathDuration.module.css";

export const BreathDurationSetting: React.FC = () => {
  return (
    <Setting title="Breath duration in seconds (in&out)">
      <Slider
        className={styles.slider}
        slotProps={{
          thumb: { className: styles.thumb },
          track: { className: styles.track },
          rail: { className: styles.rail },
          mark: { className: styles.mark },
          valueLabel: { className: styles.valueLabel },
        }}
        defaultValue={3.2}
        step={0.2}
        min={3}
        max={5}
        valueLabelDisplay="on"
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
    </Setting>
  );
};
