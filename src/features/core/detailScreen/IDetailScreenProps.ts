import { ReactNode } from "react";

export interface IDetailScreenProps {
  children?: ReactNode | ReactNode[];
  infoArea?: ReactNode;
  onHomeButtonClick?: () => void;
  title: string;
}
