import { ISoundPlayer } from "../soundPlayer/ISoundPlayer";

export interface IIntervalSoundPlayer extends ISoundPlayer {
  start(terminateAfterIntervals?: number): void;
}
