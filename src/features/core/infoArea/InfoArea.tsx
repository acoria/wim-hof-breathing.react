import { ReactNode } from "react";
import { IInfoAreaProps } from "./IInfoAreaProps";
import styles from "./InfoArea.module.css";

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
    <div className={styles.infoArea}>
      {props.description && <p className={styles.description}>{props.description}</p>}
      {props.steps && <div className={styles.steps}>{buildSteps()}</div>}
    </div>
  );
};
