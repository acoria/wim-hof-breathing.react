import { texts } from "../../i18n/texts";
import { IInfoAreaProps } from "../core/infoArea/IInfoAreaProps";

export const WarmingUpInfo: IInfoAreaProps = {
  description: texts.warmingUp.description,
  steps: [
    texts.warmingUp.step1,
    texts.warmingUp.step2,
    texts.warmingUp.step3,
    texts.warmingUp.step4,
    texts.warmingUp.step5,
    texts.warmingUp.step6,
    texts.warmingUp.step7,
    texts.warmingUp.step8,
  ],
  additionalInfo: texts.warmingUp.additionalInfo,
};
