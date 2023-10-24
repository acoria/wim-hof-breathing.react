import { IMenuItem } from "./IMenuItem";

export interface IMenuProps {
  menuItems: IMenuItem[];
  onMenuItemSelected: (path: string) => void;
}
