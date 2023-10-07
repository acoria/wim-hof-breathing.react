import { IPlayer } from "../../../components/player/IPlayer";

export interface IBreathingExercisePlayer extends IPlayer {
  onNewBreath(handler: (breathCount: number) => void): void;
}
