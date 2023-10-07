import { SoundPlayer } from "../soundPlayer/SoundPlayer";
import { IIntervalSoundPlayer } from "./IIntervalSoundPlayer";

export class IntervalSoundPlayer implements IIntervalSoundPlayer {
  private soundPlayer: SoundPlayer;
  private playInLoop = false;
  private intervalsLeftBeforeTermination?: number;

  constructor(filePath: string, private intervalInMillis: number) {
    this.soundPlayer = new SoundPlayer(filePath);
  }

  private terminateIntervalIfEndReached(): boolean {
    if (this.intervalsLeftBeforeTermination === 0) {
      this.soundPlayer.stop();
      return true;
    }
    return false;
  }

  private playSoundLoop() {
    if (!this.playInLoop) {
      return;
    }
    if (this.terminateIntervalIfEndReached()) {
      return;
    }
    this.soundPlayer.start();
    if (this.intervalsLeftBeforeTermination) {
      this.intervalsLeftBeforeTermination--;
      if (this.terminateIntervalIfEndReached()) {
        return;
      }
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
