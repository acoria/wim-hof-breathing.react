import { IIconProps } from "./IIconProps";
import styles from "./Icon.module.css";

export const Icon: React.FC<IIconProps> = (props) => {
  return (
    <span
      className={`material-symbols-outlined ${styles.icon} ${props.className}`}
      onClick={props.onClick}
    >
      {props.iconType}
    </span>
  );
};
