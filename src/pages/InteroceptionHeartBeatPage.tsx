import { DetailScreen } from "../features/core/detailScreen/DetailScreen";
import { InfoDetailScreen } from "../features/core/infoDetailScreen/InfoDetailScreen";
import { texts } from "../i18n/texts";

export const InteroceptionHeartBeatPage: React.FC = () => {
  return (
    <DetailScreen title={texts.interoceptionHeartBeat.title}>
      <InfoDetailScreen
        description={texts.interoceptionHeartBeat.description}
        steps={[
          texts.interoceptionHeartBeat.step1,
          texts.interoceptionHeartBeat.step2,
          texts.interoceptionHeartBeat.step3,
          texts.interoceptionHeartBeat.step4,
          texts.interoceptionHeartBeat.step5,
          texts.interoceptionHeartBeat.step6,
          texts.interoceptionHeartBeat.step7,
        ]}
        additionalInfo={texts.interoceptionHeartBeat.additionalInfo}
      />
    </DetailScreen>
  );
};
