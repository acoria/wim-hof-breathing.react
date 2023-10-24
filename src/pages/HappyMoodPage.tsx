import { DetailScreen } from "../features/core/detailScreen/DetailScreen";
import { texts } from "../i18n/texts";

export const HappyMoodPage: React.FC = () => {
  return <DetailScreen title={texts.happyMood.title} />;
};
