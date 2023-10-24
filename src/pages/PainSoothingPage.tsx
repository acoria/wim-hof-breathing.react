import { BreathingExercise } from "../features/breathingExercise/breathingExercise/BreathingExercise";
import { IBreathingExerciseProps } from "../features/breathingExercise/breathingExercise/IBreathingExerciseProps";
import { DetailScreen } from "../features/core/detailScreen/DetailScreen";
import { InfoArea } from "../features/core/infoArea/InfoArea";
import { useBreathDurationLocalStorage } from "../features/settings/breathDurationSetting/useBreathDurationLocalStorage";
import { texts } from "../i18n/texts";

export const PainSoothingPage: React.FC = () => {
  const [breathDuration] = useBreathDurationLocalStorage();

  const exerciseProps: IBreathingExerciseProps = {
    breathDurationInMillis: breathDuration,
    numberOfBreaths: 20,
    startDelayInMillis: 1000,
    maxNumberOfBreathingExercises: 1,
    localStorageIdForNumberOfFinishedExercises:
      "NUMBER_FINISHED_EXERCISES_PAIN_SOOTHING",
  };

  return (
    <DetailScreen
      title={texts.painSoothing.title}
      infoPopupContent={
        <InfoArea
          description={texts.painSoothing.description}
          steps={[
            texts.painSoothing.step1,
            texts.painSoothing.step2,
            texts.painSoothing.step3,
            texts.painSoothing.step4,
            texts.painSoothing.step5,
          ]}
          additionalInfo={texts.painSoothing.additionalInfo}
        />
      }
    >
      <BreathingExercise {...exerciseProps} />
    </DetailScreen>
  );
};
