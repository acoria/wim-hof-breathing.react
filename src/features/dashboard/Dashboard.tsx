import { ReactNode, useState } from "react";
import { texts } from "../../i18n/texts";
import { BreathingExercise } from "../breathingExercise/breathingExercise/BreathingExercise";
import { IBreathingExerciseProps } from "../breathingExercise/breathingExercise/IBreathingExerciseProps";
import { DetailScreen } from "../core/detailScreen/DetailScreen";
import { IInfoAreaProps } from "../core/infoArea/IInfoAreaProps";
import { InfoArea } from "../core/infoArea/InfoArea";
import { InfoDetailScreen } from "../core/infoDetailScreen/InfoDetailScreen";
import { IMenuItem } from "../core/menu/IMenuItem";
import { Menu } from "../core/menu/Menu";
import { InteroceptionBreathingInfo } from "../exercises/InteroceptionBreathingInfo";
import { InteroceptionHeartBeatInfo } from "../exercises/InteroceptionHeartBeatInfo";
import { WarmingUpInfo } from "../exercises/WarmingUpInfo";
import { WimHofBreathingInfo } from "../exercises/WimHofBreathingInfo";
import { useBreathDurationLocalStorage } from "../settings/breathDurationSetting/useBreathDurationLocalStorage";
import { Settings } from "../settings/settings/Settings";

const debugExerciseProps: IBreathingExerciseProps = {
  breathDurationInMillis: 1000,
  numberOfBreaths: 2,
  startDelayInMillis: 1000,
};

export const Dashboard: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ReactNode>();
  const [breathDuration] = useBreathDurationLocalStorage();

  const exerciseProps: IBreathingExerciseProps = {
    breathDurationInMillis: breathDuration,
    numberOfBreaths: 40,
    startDelayInMillis: 1000,
  };

  const buildMenuItemWithDetailScreen = (
    title: string,
    children?: ReactNode | ReactNode[],
    infoArea?: ReactNode
  ): IMenuItem => {
    return {
      title: title,
      component: (
        <DetailScreen
          title={title}
          onHomeButtonClick={() => setSelectedItem(undefined)}
          infoArea={infoArea}
        >
          {children}
        </DetailScreen>
      ),
    };
  };

  const buildMenuItemWithInfoDetailScreen = (
    title: string,
    infoAreaProps: IInfoAreaProps
  ): IMenuItem => {
    return buildMenuItemWithDetailScreen(
      `${title} - ${texts.general.info}`,
      <InfoDetailScreen {...infoAreaProps} />
    );
  };

  const menuItems: IMenuItem[] = [
    buildMenuItemWithDetailScreen(
      texts.wimHofBreathing.title,
      <BreathingExercise
        {...exerciseProps}
        // {...debugExerciseProps}
      />,
      <InfoArea {...WimHofBreathingInfo} />
    ),
    buildMenuItemWithDetailScreen(texts.painSoothing.title),
    buildMenuItemWithDetailScreen(texts.happyMood.title),
    buildMenuItemWithDetailScreen(texts.settings.title, <Settings />),
    buildMenuItemWithInfoDetailScreen(texts.warmingUp.title, WarmingUpInfo),
    buildMenuItemWithInfoDetailScreen(
      texts.wimHofBreathing.title,
      WimHofBreathingInfo
    ),
    buildMenuItemWithInfoDetailScreen(
      texts.interoceptionBreathing.title,
      InteroceptionBreathingInfo
    ),
    buildMenuItemWithInfoDetailScreen(
      texts.interoceptionHeartBeat.title,
      InteroceptionHeartBeatInfo
    ),
  ];

  const menuItemSelectedHandler = (component: ReactNode) => {
    setSelectedItem(component);
  };

  return (
    <div>
      {!selectedItem && (
        <Menu
          menuItems={menuItems}
          onMenuItemSelected={menuItemSelectedHandler}
        />
      )}
      {selectedItem && selectedItem}
    </div>
  );
};
