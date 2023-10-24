import { DetailScreen } from "../features/core/detailScreen/DetailScreen";
import { Settings } from "../features/settings/settings/Settings";
import { texts } from "../i18n/texts";

export const SettingsPage: React.FC = () => {
  return (
    <DetailScreen title={texts.settings.title}>
      <Settings />
    </DetailScreen>
  );
};
