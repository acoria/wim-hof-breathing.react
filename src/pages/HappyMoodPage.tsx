import { BreathingExercise } from "../features/breathingExercise/breathingExercise/BreathingExercise";
import { IBreathingExerciseProps } from "../features/breathingExercise/breathingExercise/IBreathingExerciseProps";
import { DetailScreen } from "../features/core/detailScreen/DetailScreen";
import { InfoArea } from "../features/core/infoArea/InfoArea";
import { useBreathDurationLocalStorage } from "../features/settings/breathDurationSetting/useBreathDurationLocalStorage";
import { texts } from "../i18n/texts";

export const HappyMoodPage: React.FC = () => {
  const [breathDuration] = useBreathDurationLocalStorage();

  const exerciseProps: IBreathingExerciseProps = {
    breathDurationInMillis: breathDuration,
    numberOfBreaths: 20,
    startDelayInMillis: 1000,
    maxNumberOfBreathingExercises: 3,
    localStorageIdForNumberOfFinishedExercises:
      "NUMBER_FINISHED_EXERCISES_HAPPY_MOOD",
  };

  return (
    <DetailScreen
      title={texts.happyMood.title}
      infoPopupContent={
        <InfoArea
          description={texts.happyMood.description}
          steps={[
            texts.happyMood.step1,
            texts.happyMood.step2,
            texts.happyMood.step3,
            texts.happyMood.step4,
            texts.happyMood.step5,
            texts.happyMood.step6,
            texts.happyMood.step7,
          ]}
        />
      }
    >
      <BreathingExercise {...exerciseProps} />
    </DetailScreen>
  );
};
