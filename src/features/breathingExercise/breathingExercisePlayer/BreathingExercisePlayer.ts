import { Player } from "../../../components/player/Player";
import { IIntervalSoundPlayer } from "../../../components/soundPlayer/intervalSoundPlayer/IIntervalSoundPlayer";
import { IntervalSoundPlayer } from "../../../components/soundPlayer/intervalSoundPlayer/IntervalSoundPlayer";
import { IBreathingExercisePlayer } from "./IBreathingExercisePlayer";

export class BreathingExercisePlayer
  extends Player
  implements IBreathingExercisePlayer
{
  private numberOfFinishBreaths = 3;
  private breathInSoundPlayer: IIntervalSoundPlayer;
  private breathOutSoundPlayer: IIntervalSoundPlayer;
  private finishingBreathsSoundPlayer: IIntervalSoundPlayer;
  private timeoutIds: NodeJS.Timeout[] = [];

  constructor(
    private breathDurationInMillis: number,
    private numberOfRuns: number
  ) {
    super();
    this.breathInSoundPlayer = this.createSoundIntervalPlayer(
      "./assets/sounds/low_pop.mp3"
    );
    this.breathOutSoundPlayer = this.createSoundIntervalPlayer(
      "./assets/sounds/high_pop.mp3"
    );
    this.finishingBreathsSoundPlayer = this.createSoundIntervalPlayer(
      "./assets/sounds/bottle_pop.mp3"
    );
    this.finishingBreathsSoundPlayer.onStop(() => super.stop());
  }

  private createSoundIntervalPlayer(filePath: string): IIntervalSoundPlayer {
    return new IntervalSoundPlayer(filePath, this.breathDurationInMillis);
  }

  /**
   * Sets a timer for playing the high breathing sounds
   * It only plays until the finishing sound starts playing
   */
  private setupBreathOutSoundIntervalPlayer() {
    this.breathOutSoundPlayer.start(
      this.numberOfRuns - this.numberOfFinishBreaths
    );
  }

  /**
   * Set a timer for playing the low breathing sounds.
   * It starts after half the breathingDurationInMillis.
   */
  private setupBreathInIntervalPlayer(): NodeJS.Timeout {
    return setTimeout(() => {
      this.breathInSoundPlayer.start(this.numberOfRuns);
    }, this.breathDurationInMillis / 2);
  }

  /**
   * Sets a timer for playing the finishing breath sound.
   * It starts after the entire time minus the finishing breaths duration
   */
  private setupFinishingBreathSoundIntervalPlayer(): NodeJS.Timeout {
    return setTimeout(() => {
      this.finishingBreathsSoundPlayer.start(this.numberOfFinishBreaths);
    }, this.numberOfRuns * this.breathDurationInMillis - this.breathDurationInMillis * this.numberOfFinishBreaths);
  }

  private stopAllPlayers() {
    this.breathOutSoundPlayer.stop();
    this.breathInSoundPlayer.stop();
    this.finishingBreathsSoundPlayer.stop();
  }

  start() {
    super.start();
    this.setupBreathOutSoundIntervalPlayer();
    this.timeoutIds.push(this.setupBreathInIntervalPlayer());
    this.timeoutIds.push(this.setupFinishingBreathSoundIntervalPlayer());
  }

  stop() {
    this.timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    this.stopAllPlayers();
  }
}
