import { ReactNode, useState } from "react";
import { BreathingExercise } from "../breathingExercise/breathingExercise/BreathingExercise";
import { IMenuItem } from "../components/menu/IMenuItem";
import { Menu } from "../components/menu/Menu";
import { IBreathingExerciseProps } from "../breathingExercise/breathingExercise/IBreathingExerciseProps";
import { Settings } from "../settings/settings/Settings";
import { useBreathDurationLocalStorage } from "../settings/features/breathDurationSetting/useBreathDurationLocalStorage";
import { DetailScreen } from "../components/detailScreen/DetailScreen";

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
    children?: ReactNode | ReactNode[]
  ): IMenuItem => {
    return {
      title: title,
      component: <DetailScreen title={title}>{children}</DetailScreen>,
    };
  };

  const menuItems: IMenuItem[] = [
    buildMenuItemWithDetailScreen(
      "Wim Hof Breathing",
      <BreathingExercise
        {...exerciseProps}
        // {...debugExerciseProps}
      />
    ),
    buildMenuItemWithDetailScreen("Pain soothing"),
    buildMenuItemWithDetailScreen("Good mood practice"),
    { title: "Settings", component: <Settings /> },
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
