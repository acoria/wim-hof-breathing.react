import { ReactNode, useMemo } from "react";
import { IInfoAreaProps } from "./IInfoAreaProps";
import styles from "./InfoArea.module.css";
import { style } from "../../../utils/style";
import React from "react";

export const InfoArea: React.FC<IInfoAreaProps> = (props) => {
  const buildSteps = useMemo((): ReactNode | undefined => {
    return props.steps?.map((step, index) => {
      return (
        <React.Fragment key={index}>
          <div>{index + 1}.</div>
          <div>{step}</div>
        </React.Fragment>
      );
    });
  }, [props.steps]);

  return (
    <div className={style(styles.infoArea, props.className)}>
      {props.description && <p>{props.description}</p>}
      {props.steps && <div className={styles.steps}>{buildSteps}</div>}
      {props.additionalInfo && <p>{props.additionalInfo}</p>}
    </div>
  );
};
