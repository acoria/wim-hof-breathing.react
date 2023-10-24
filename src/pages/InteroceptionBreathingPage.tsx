import { DetailScreen } from "../features/core/detailScreen/DetailScreen";
import { InfoDetailScreen } from "../features/core/infoDetailScreen/InfoDetailScreen";
import { InteroceptionBreathingInfo } from "../features/exercises/InteroceptionBreathingInfo";
import { texts } from "../i18n/texts";

export const InteroceptionBreathingPage: React.FC = () => {
  return (
    <DetailScreen title={texts.interoceptionBreathing.title}>
      <InfoDetailScreen {...InteroceptionBreathingInfo} />
    </DetailScreen>
  );
};
