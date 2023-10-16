import { ReactNode, useState } from "react";
import { BreathingExercise } from "../breathingExercise/breathingExercise/BreathingExercise";
import { IMenuItem } from "../components/menu/IMenuItem";
import { Menu } from "../components/menu/Menu";
import { IBreathingExerciseProps } from "../breathingExercise/breathingExercise/IBreathingExerciseProps";
import { Settings } from "../settings/Settings";

const exerciseProps: IBreathingExerciseProps = {
  breathDurationInMillis: 3200,
  numberOfBreaths: 40,
  startDelayInMillis: 1000,
};

const debugExerciseProps: IBreathingExerciseProps = {
  // breathDurationInMillis: 3200,
  breathDurationInMillis: 1000,
  numberOfBreaths: 2,
  startDelayInMillis: 1000,
};

export const Dashboard: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ReactNode>();

  const menuItems: IMenuItem[] = [
    {
      title: "Wim Hof Breathing",
      component: (
        <BreathingExercise
          {...exerciseProps}
          //    {...debugExerciseProps}
        />
      ),
    },
    { title: "Pain soothing", component: <></> },
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
