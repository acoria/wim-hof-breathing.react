import { IconType } from "./IconType";

export interface IIconProps {
  className?: string;
  iconType: IconType;
  onClick?: () => void;
}
