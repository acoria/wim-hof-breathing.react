import { BreathingExercise } from "../features/breathingExercise/breathingExercise/BreathingExercise";
import { IBreathingExerciseProps } from "../features/breathingExercise/breathingExercise/IBreathingExerciseProps";
import { DetailScreen } from "../features/core/detailScreen/DetailScreen";
import { InfoArea } from "../features/core/infoArea/InfoArea";
import { useBreathDurationLocalStorage } from "../features/settings/breathDurationSetting/useBreathDurationLocalStorage";
import { texts } from "../i18n/texts";

export const PowerBreathingPage: React.FC = () => {
  const [breathDuration] = useBreathDurationLocalStorage();

  const exerciseProps: IBreathingExerciseProps = {
    breathDurationInMillis: breathDuration,
    numberOfBreaths: 60,
    startDelayInMillis: 1000,
    maxNumberOfBreathingExercises: 1,
    localStorageIdForNumberOfFinishedExercises:
      "NUMBER_FINISHED_EXERCISES_POWER_BREATHING",
  };

  return (
    <DetailScreen
      title={texts.powerBreathing.title}
      infoPopupContent={
        <InfoArea
          description={texts.powerBreathing.description}
          steps={[
            texts.powerBreathing.step1,
            texts.powerBreathing.step2,
            texts.powerBreathing.step3,
            texts.powerBreathing.step4,
            texts.powerBreathing.step5,
            texts.powerBreathing.step6,
          ]}
        />
      }
    >
      <BreathingExercise {...exerciseProps} />
    </DetailScreen>
  );
};
