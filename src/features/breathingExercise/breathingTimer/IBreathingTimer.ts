import { IPlayer } from "../../../components/player/IPlayer";
import { BreathingInfo } from "./BreathingInfo";

export interface IBreathingTimer extends IPlayer {
  onBreathingIn(handler: (breathingInfo: BreathingInfo) => void): void;
  onBreathingOut(handler: (breathingInfo: BreathingInfo) => void): void;
}
