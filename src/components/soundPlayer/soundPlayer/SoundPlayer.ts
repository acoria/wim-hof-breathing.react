import { ISoundPlayer } from "./ISoundPlayer";
import { Howl } from "howler";

/**
 * filePath needs to be in public folder
 */
export class SoundPlayer implements ISoundPlayer {
  private sound: Howl;
  private onStopListeners: (() => void)[] = [];

  constructor(filePath: string) {
    this.sound = new Howl({ src: filePath, html5: true });
  }

  play() {
    this.sound.play();
  }

  registerOnStop(listener: () => void): void {
    this.onStopListeners.push(listener);
  }

  stop(): void {
    this.sound.stop();
    this.onStopListeners.forEach((listener) => {
      listener();
    });
  }
}
