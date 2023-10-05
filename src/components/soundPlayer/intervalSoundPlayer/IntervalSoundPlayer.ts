import { SoundPlayer } from "../SoundPlayer";
import { IIntervalSoundPlayer } from "./IIntervalSoundPlayer";

export class IntervalSoundPlayer implements IIntervalSoundPlayer {
  private soundPlayer: SoundPlayer;
  private playInLoop = false;
  private intervalsLeftBeforeTermination?: number;

  constructor(filePath: string, private intervalInMillis: number) {
    this.soundPlayer = new SoundPlayer(filePath);
  }

  private playSoundLoop() {
    if (this.intervalsLeftBeforeTermination === 0) {
      return;
    }
    this.soundPlayer.play();
    if (this.intervalsLeftBeforeTermination) {
      this.intervalsLeftBeforeTermination--;
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
  stop(): void {
    this.soundPlayer.stop();
    this.playInLoop = false;
  }
}
