import { ReactNode } from "react";

export interface IDetailScreenProps {
  title: string;
  onHomeButtonClick?: () => void;
  children?: ReactNode | ReactNode[];
}
