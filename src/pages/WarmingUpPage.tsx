import { DetailScreen } from "../features/core/detailScreen/DetailScreen";
import { InfoDetailScreen } from "../features/core/infoDetailScreen/InfoDetailScreen";
import { WarmingUpInfo } from "../features/exercises/WarmingUpInfo";
import { texts } from "../i18n/texts";

export const WarmingUpPage: React.FC = () => {
  return (
    <DetailScreen title={texts.warmingUp.title}>
      <InfoDetailScreen {...WarmingUpInfo} />
    </DetailScreen>
  );
};
