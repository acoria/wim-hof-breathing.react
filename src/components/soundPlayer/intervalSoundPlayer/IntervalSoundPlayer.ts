import { SoundPlayer } from "../soundPlayer/SoundPlayer";
import { IIntervalSoundPlayer } from "./IIntervalSoundPlayer";

export class IntervalSoundPlayer implements IIntervalSoundPlayer {
  private soundPlayer: SoundPlayer;
  private playInLoop = false;
  private intervalsLeftBeforeTermination?: number;

  constructor(filePath: string, private intervalInMillis: number) {
    this.soundPlayer = new SoundPlayer(filePath);
  }

  private playSoundLoop() {
    if (!this.playInLoop) {
      return;
    }
    if (this.intervalsLeftBeforeTermination === 0) {
      this.soundPlayer.stop();
      return;
    }
    this.soundPlayer.play();
    if (this.intervalsLeftBeforeTermination) {
      this.intervalsLeftBeforeTermination--;
      if (this.intervalsLeftBeforeTermination === 0) {
        this.soundPlayer.stop();
        return;
      }
    }

    setTimeout(() => {
      if (this.playInLoop) {
        this.playSoundLoop();
      }
    }, this.intervalInMillis);
  }

  play(terminateAfterIntervals?: number): void {
    this.playInLoop = true;
    this.intervalsLeftBeforeTermination = terminateAfterIntervals;
    this.playSoundLoop();
  }

  registerOnStop(listener: () => void): void {
    this.soundPlayer.registerOnStop(listener);
  }

  stop(): void {
    this.soundPlayer.stop();
    this.playInLoop = false;
  }
}
