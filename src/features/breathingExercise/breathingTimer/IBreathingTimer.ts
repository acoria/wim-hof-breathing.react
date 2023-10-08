import { IPlayer } from "../../../components/player/IPlayer";

export interface IBreathingTimer extends IPlayer {
  onBreathingIn(
    handler: (breathCount: number, totalNumberOfTotalBreaths: number) => void
  ): void;
  onBreathingOut(
    handler: (breathCount: number, totalNumberOfTotalBreaths: number) => void
  ): void;
}
