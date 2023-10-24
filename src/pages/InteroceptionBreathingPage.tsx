import { DetailScreen } from "../features/core/detailScreen/DetailScreen";
import { InfoDetailScreen } from "../features/core/infoDetailScreen/InfoDetailScreen";
import { texts } from "../i18n/texts";

export const InteroceptionBreathingPage: React.FC = () => {
  return (
    <DetailScreen title={texts.interoceptionBreathing.title}>
      <InfoDetailScreen
        description={texts.interoceptionBreathing.description}
        steps={[
          texts.interoceptionBreathing.step1,
          texts.interoceptionBreathing.step2,
          texts.interoceptionBreathing.step3,
          texts.interoceptionBreathing.step4,
          texts.interoceptionBreathing.step5,
          texts.interoceptionBreathing.step6,
          texts.interoceptionBreathing.step7,
          texts.interoceptionBreathing.step8,
        ]}
      />
    </DetailScreen>
  );
};
