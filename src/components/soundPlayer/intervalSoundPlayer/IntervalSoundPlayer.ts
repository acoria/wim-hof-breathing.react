import { SoundPlayer } from "../soundPlayer/SoundPlayer";
import { IIntervalSoundPlayer } from "./IIntervalSoundPlayer";

export class IntervalSoundPlayer implements IIntervalSoundPlayer {
  private soundPlayer: SoundPlayer;
  private playInLoop = false;
  private intervalsLeftBeforeTermination?: number;

  constructor(filePath: string, private intervalInMillis: number) {
    this.soundPlayer = new SoundPlayer(filePath);
  }

  private checkForIntervalTermination() {
    if (this.intervalsLeftBeforeTermination === 0) {
      this.soundPlayer.stop();
      return;
    }
  }

  private playSoundLoop() {
    if (!this.playInLoop) {
      return;
    }
    this.checkForIntervalTermination();
    this.soundPlayer.start();
    if (this.intervalsLeftBeforeTermination) {
      this.intervalsLeftBeforeTermination--;
      this.checkForIntervalTermination();
    }

    setTimeout(() => {
      if (this.playInLoop) {
        this.playSoundLoop();
      }
    }, this.intervalInMillis);
  }

  start(terminateAfterIntervals?: number): void {
    this.playInLoop = true;
    this.intervalsLeftBeforeTermination = terminateAfterIntervals;
    this.playSoundLoop();
  }

  onStart(handler: () => void): void {
    this.soundPlayer.onStop(handler);
  }

  onStop(handler: () => void): void {
    this.soundPlayer.onStop(handler);
  }

  stop(): void {
    this.soundPlayer.stop();
    this.playInLoop = false;
  }
}
