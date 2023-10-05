import { SoundPlayer } from "../SoundPlayer";
import { IIntervalSoundPlayer } from "./IIntervalSoundPlayer";

export class IntervalSoundPlayer implements IIntervalSoundPlayer {
  private soundPlayer: SoundPlayer;
  // private intervalId?: NodeJS.Timeout;
  private playInLoop = false;

  constructor(filePath: string, private intervalInMillis: number) {
    this.soundPlayer = new SoundPlayer(filePath);
  }

  private playSoundLoop() {
    this.soundPlayer.play();

    setTimeout(() => {
      if (this.playInLoop) {
        this.playSoundLoop();
      }
    }, this.intervalInMillis);
  }

  play(): void {
    this.playInLoop = true;
    this.playSoundLoop();
  }
  stop(): void {
    this.soundPlayer.stop();
    this.playInLoop = false;
  }
}
