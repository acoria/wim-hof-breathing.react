import { SoundPlayer } from "../SoundPlayer";
import { IIntervalSoundPlayer } from "./IIntervalSoundPlayer";

export class IntervalSoundPlayer implements IIntervalSoundPlayer {
  private soundPlayer: SoundPlayer;
  private intervalId?: NodeJS.Timeout;

  constructor(filePath: string, private intervalInMillis: number) {
    this.soundPlayer = new SoundPlayer(filePath);
  }

  play(): void {
    this.intervalId = setInterval(() => {
      this.soundPlayer.play();
    }, this.intervalInMillis);
  }
  stop(): void {
    this.soundPlayer.stop();
    clearInterval(this.intervalId);
  }
}
