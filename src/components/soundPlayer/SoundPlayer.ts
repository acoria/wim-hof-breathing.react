import { ISoundPlayer } from "./ISoundPlayer";
import { Howl } from "howler";

/**
 * filePath needs to be in public folder
 */
export class SoundPlayer implements ISoundPlayer {
  private sound: Howl;

  constructor(filePath: string) {
    this.sound = new Howl({ src: filePath, html5: true });
  }
  stop(): void {
    this.sound.stop();
  }

  play() {
    this.sound.play();
  }
}
