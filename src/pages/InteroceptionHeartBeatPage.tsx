import { DetailScreen } from "../features/core/detailScreen/DetailScreen";
import { InfoDetailScreen } from "../features/core/infoDetailScreen/InfoDetailScreen";
import { InteroceptionHeartBeatInfo } from "../features/exercises/InteroceptionHeartBeatInfo";
import { texts } from "../i18n/texts";

export const InteroceptionHeartBeatPage: React.FC = () => {
  return (
    <DetailScreen title={texts.interoceptionHeartBeat.title}>
      <InfoDetailScreen {...InteroceptionHeartBeatInfo} />
    </DetailScreen>
  );
};
