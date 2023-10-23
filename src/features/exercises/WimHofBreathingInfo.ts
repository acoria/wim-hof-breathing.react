import { texts } from "../../i18n/texts";
import { IInfoAreaProps } from "../core/infoArea/IInfoAreaProps";

export const WimHofBreathingInfo: IInfoAreaProps = {
  description: texts.wimHofBreathing.description,
  steps: [
    texts.wimHofBreathing.step1,
    texts.wimHofBreathing.step2,
    texts.wimHofBreathing.step3,
    texts.wimHofBreathing.step4,
    texts.wimHofBreathing.step5,
  ],
  additionalInfo: texts.wimHofBreathing.additionalInfo,
};
