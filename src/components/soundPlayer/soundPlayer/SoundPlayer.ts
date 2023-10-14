import { Howl } from "howler";
import { ISoundPlayer } from "./ISoundPlayer";

/**
 * A player that can play the sound specified in the filePath.
 * The filePath needs to be in public folder.
 */
export class SoundPlayer implements ISoundPlayer {
  private sound: Howl;

  /**
   * @param filePath for a file in the public folder.
   * e.g. "./assets/sounds/bottle_pop.mp3"
   */
  constructor(filePath: string) {
    this.sound = new Howl({ src: filePath });
  }

  play() {
    this.sound.play();
  }

  stop(): void {
    this.sound.stop();
  }
}
