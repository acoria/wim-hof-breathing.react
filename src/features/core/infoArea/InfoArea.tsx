import { ReactNode } from "react";
import { IInfoAreaProps } from "./IInfoAreaProps";
import styles from "./InfoArea.module.css";
import { style } from "../../../utils/style";

export const InfoArea: React.FC<IInfoAreaProps> = (props) => {
  const buildSteps = (): ReactNode[] | undefined => {
    return props.steps?.map((step, index) => {
      return (
        <>
          <div>{index + 1}.</div>
          <div>{step}</div>
        </>
      );
    });
  };

  return (
    <div className={style(styles.infoArea, props.className)}>
      {props.description && <p>{props.description}</p>}
      {props.steps && <div className={styles.steps}>{buildSteps()}</div>}
      {props.additionalInfo && <p>{props.additionalInfo}</p>}
    </div>
  );
};
