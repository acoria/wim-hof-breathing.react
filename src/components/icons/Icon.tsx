import { IIconProps } from "./IIconProps";
import './Icon.css'

export const Icon: React.FC<IIconProps> = (props) => {
  return (
    <span
      className={`material-symbols-outlined ${props.className} icon`}
      onClick={props.onClick}
    >
      {props.iconType}
    </span>
  );
};
