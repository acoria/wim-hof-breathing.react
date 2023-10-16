import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { BreathDurationInfo } from "./BreathDurationInfo";

export const useBreathDurationLocalStorage = () => {
  return useLocalStorage<number>(
    BreathDurationInfo.BREATHING_DURATION,
    BreathDurationInfo.defaultBreathDuration
  );
};
