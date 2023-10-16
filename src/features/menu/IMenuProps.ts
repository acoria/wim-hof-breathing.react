import { ReactNode } from "react";
import { IMenuItem } from "./IMenuItem";

export interface IMenuProps {
  menuItems: IMenuItem[];
  onMenuItemSelected: (selectedComponent: ReactNode) => void;
}
