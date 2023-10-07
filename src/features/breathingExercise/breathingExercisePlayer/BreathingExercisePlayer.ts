import { Player } from "../../../components/player/Player";
import { IIntervalSoundPlayer } from "../../../components/soundPlayer/intervalSoundPlayer/IIntervalSoundPlayer";
import { IntervalSoundPlayer } from "../../../components/soundPlayer/intervalSoundPlayer/IntervalSoundPlayer";
import { IBreathingExercisePlayer } from "./IBreathingExercisePlayer";

export class BreathingExercisePlayer
  extends Player
  implements IBreathingExercisePlayer
{
  private numberOfFinishBreaths = 3;
  private lowSoundIntervalPlayer: IIntervalSoundPlayer;
  private highSoundIntervalPlayer: IIntervalSoundPlayer;
  private finishSoundIntervalPlayer: IIntervalSoundPlayer;
  private timeoutIds: NodeJS.Timeout[] = [];

  constructor(
    private breathDurationInMillis: number,
    private numberOfRuns: number
  ) {
    super();
    this.lowSoundIntervalPlayer = this.createSoundIntervalPlayer(
      "./assets/sounds/low_pop.mp3"
    );
    this.lowSoundIntervalPlayer.onStop(() => super.stop());
    this.highSoundIntervalPlayer = this.createSoundIntervalPlayer(
      "./assets/sounds/high_pop.mp3"
    );
    this.finishSoundIntervalPlayer = this.createSoundIntervalPlayer(
      "./assets/sounds/bottle_pop.mp3"
    );
  }

  private createSoundIntervalPlayer(filePath: string): IIntervalSoundPlayer {
    return new IntervalSoundPlayer(filePath, this.breathDurationInMillis);
  }

  /**
   *  Sets a timer for playing the high breathing sounds
   * It only plays until the finishing sound starts playing
   */
  private setupHighSoundIntervalPlayer() {
    this.highSoundIntervalPlayer.start(
      this.numberOfRuns - this.numberOfFinishBreaths
    );
  }

  /**
   * Set a timer for playing the low breathing sounds.
   * It starts after half the breathingDurationInMillis.
   */
  private setupLowSoundIntervalPlayer(): NodeJS.Timeout {
    return setTimeout(() => {
      this.lowSoundIntervalPlayer.start(this.numberOfRuns);
    }, this.breathDurationInMillis / 2);
  }

  /**
   * Sets a timer for playing the finishing breath sound.
   * It starts after the entire time minus the finishing breaths duration
   */
  private setupFinishingSoundIntervalPlayer(): NodeJS.Timeout {
    return setTimeout(() => {
      this.finishSoundIntervalPlayer.start(this.numberOfFinishBreaths);
    }, this.numberOfRuns * this.breathDurationInMillis - this.breathDurationInMillis * this.numberOfFinishBreaths);
  }

  private stopAllPlayers() {
    this.highSoundIntervalPlayer.stop();
    this.lowSoundIntervalPlayer.stop();
    this.finishSoundIntervalPlayer.stop();
  }

  start() {
    super.start();
    this.setupHighSoundIntervalPlayer();
    this.timeoutIds.push(this.setupLowSoundIntervalPlayer());
    this.timeoutIds.push(this.setupFinishingSoundIntervalPlayer());
  }

  stop() {
    this.timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    this.stopAllPlayers();
  }
}
