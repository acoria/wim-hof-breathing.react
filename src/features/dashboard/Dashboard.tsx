import { ReactNode, useState } from "react";
import { BreathingExercise } from "../breathingExercise/breathingExercise/BreathingExercise";
import { IMenuItem } from "../core/menu/IMenuItem";
import { Menu } from "../core/menu/Menu";
import { IBreathingExerciseProps } from "../breathingExercise/breathingExercise/IBreathingExerciseProps";
import { Settings } from "../settings/settings/Settings";
import { useBreathDurationLocalStorage } from "../settings/breathDurationSetting/useBreathDurationLocalStorage";
import { DetailScreen } from "../core/detailScreen/DetailScreen";

const debugExerciseProps: IBreathingExerciseProps = {
  // breathDurationInMillis: 3200,
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

  const menuItems: IMenuItem[] = [
    buildMenuItemWithDetailScreen(
      "Breath like Wim Hof ",
      <BreathingExercise
        {...exerciseProps}
        // {...debugExerciseProps}
      />,
      <>
        <h1>Test</h1>
        <p>Some descriptive text</p>
        <p>Some descriptive text</p>
        <p>Some descriptive text</p>
        <p>Some descriptive text</p>
      </>
    ),
    buildMenuItemWithDetailScreen("Outch..sooth the pain"),
    buildMenuItemWithDetailScreen("Happy Mood!"),
    buildMenuItemWithDetailScreen("Settings", <Settings />),
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
