import { ReactNode } from "react";
import { ScreenTitle } from "../screenTitle/ScreenTitle";
import { IMenuProps } from "./IMenuProps";
import styles from "./Menu.module.css";

export const Menu: React.FC<IMenuProps> = (props) => {
  const buildMenu = (): ReactNode[] => {
    return props.menuItems.map((menuItem, index) => {
      return (
        <ScreenTitle
          key={index}
          title={menuItem.title}
          onClick={() => props.onMenuItemSelected(menuItem.component)}
          className={styles.menuItem}
        />
      );
    });
  };

  return <div className={styles.menu}>{buildMenu()}</div>;
};
