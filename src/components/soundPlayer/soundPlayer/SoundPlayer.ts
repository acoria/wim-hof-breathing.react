import { Player } from "../../player/Player";
import { ISoundPlayer } from "./ISoundPlayer";
import { Howl } from "howler";

/**
 * filePath needs to be in public folder
 */
export class SoundPlayer extends Player implements ISoundPlayer {
  private sound: Howl;

  constructor(filePath: string) {
    super();
    this.sound = new Howl({ src: filePath, html5: true });
  }

  start() {
    this.sound.play();
    super.start();
  }

  stop(): void {
    this.sound.stop();
    super.stop();
  }
}
