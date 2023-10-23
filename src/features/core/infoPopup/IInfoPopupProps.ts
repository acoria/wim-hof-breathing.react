import { ReactNode } from "react";

export interface IInfoScreenProps {
  children?: ReactNode;
  className?: string;
  showInfoArea?: boolean;
  onInfoAreaDisplayChange?: (visible: boolean) => void;
}
