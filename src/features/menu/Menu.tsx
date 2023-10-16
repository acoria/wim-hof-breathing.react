import { ReactNode } from "react";
import { ExerciseTitle } from "../exerciseTitle/ExerciseTitle";
import { IMenuProps } from "./IMenuProps";
import styles from "./Menu.module.css";

export const Menu: React.FC<IMenuProps> = (props) => {
  const buildMenu = (): ReactNode[] => {
    return props.menuItems.map((menuItem) => {
      return (
        <div>
          <ExerciseTitle
            title={menuItem.title}
            onClick={() => props.onMenuItemSelected(menuItem.component)}
            className={styles.menuItem}
          />
        </div>
      );
    });
  };

  return <div className={styles.menu}>${buildMenu()}</div>;
};
