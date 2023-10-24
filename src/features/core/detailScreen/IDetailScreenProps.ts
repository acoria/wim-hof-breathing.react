import { ReactNode } from "react";

export interface IDetailScreenProps {
  children?: ReactNode | ReactNode[];
  infoPopupContent?: ReactNode;
  title: string;
}
