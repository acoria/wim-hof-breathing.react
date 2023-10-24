import { BreathingExercise } from "../features/breathingExercise/breathingExercise/BreathingExercise";
import { IBreathingExerciseProps } from "../features/breathingExercise/breathingExercise/IBreathingExerciseProps";
import { DetailScreen } from "../features/core/detailScreen/DetailScreen";
import { InfoArea } from "../features/core/infoArea/InfoArea";
import { WimHofBreathingInfo } from "../features/exercises/WimHofBreathingInfo";
import { useBreathDurationLocalStorage } from "../features/settings/breathDurationSetting/useBreathDurationLocalStorage";
import { texts } from "../i18n/texts";

const debugExerciseProps: IBreathingExerciseProps = {
  breathDurationInMillis: 1000,
  numberOfBreaths: 2,
  startDelayInMillis: 1000,
};

export const WimHofBreathingPage = () => {
  const [breathDuration] = useBreathDurationLocalStorage();

  const exerciseProps: IBreathingExerciseProps = {
    breathDurationInMillis: breathDuration,
    numberOfBreaths: 40,
    startDelayInMillis: 1000,
  };

  return (
    <DetailScreen
      title={texts.wimHofBreathing.title}
      infoPopupContent={<InfoArea {...WimHofBreathingInfo} />}
    >
      <BreathingExercise
        {...exerciseProps}
        // {...debugExerciseProps}
      />
    </DetailScreen>
  );
};