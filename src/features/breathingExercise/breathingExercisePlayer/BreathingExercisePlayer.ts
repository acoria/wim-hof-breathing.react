import { Player } from "../../../components/player/Player";
import { IIntervalSoundPlayer } from "../../../components/soundPlayer/intervalSoundPlayer/IIntervalSoundPlayer";
import { IntervalSoundPlayer } from "../../../components/soundPlayer/intervalSoundPlayer/IntervalSoundPlayer";
import { IBreathingExercisePlayer } from "./IBreathingExercisePlayer";

export class BreathingExercisePlayer
  extends Player
  implements IBreathingExercisePlayer
{
  private numberOfFinishBreaths = 3;
  private breathOutSoundPlayer: IIntervalSoundPlayer;
  private breathInSoundPlayer: IIntervalSoundPlayer;
  private finishingBreathsSoundPlayer: IIntervalSoundPlayer;
  private timeoutIds: NodeJS.Timeout[] = [];
  private newBreathHandlers: ((breathCount: number) => void)[] = [];
  private exerciseRunning = false;
  private breathCount = 0;

  constructor(
    private breathDurationInMillis: number,
    private numberOfRuns: number,
    private startDelayInMillis: number = 0
  ) {
    super();
    this.breathOutSoundPlayer = this.createSoundIntervalPlayer(
      "./assets/sounds/low_pop.mp3"
    );
    this.breathInSoundPlayer = this.createSoundIntervalPlayer(
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
  private setupBreathInSoundIntervalPlayer() {
    this.breathInSoundPlayer.start(
      this.numberOfRuns - this.numberOfFinishBreaths
    );
  }

  /**
   * Set a timer for playing the low breathing sounds.
   * It starts after half the breathingDurationInMillis.
   */
  private setupBreathOutIntervalPlayer(): NodeJS.Timeout {
    return setTimeout(() => {
      this.breathOutSoundPlayer.start(this.numberOfRuns);
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

  private informAboutNewBreath() {
    this.breathCount++;
    this.newBreathHandlers.forEach((handler) => handler(this.breathCount));
    setTimeout(() => {
      if (this.exerciseRunning) {
        this.informAboutNewBreath();
      }
    }, this.breathDurationInMillis);
  }

  private stopAll() {
    this.exerciseRunning = false;
    this.breathInSoundPlayer.stop();
    this.breathOutSoundPlayer.stop();
    this.finishingBreathsSoundPlayer.stop();
  }

  onNewBreath(handler: (breathCount: number) => void): void {
    this.newBreathHandlers.push(handler);
  }

  start() {
    setTimeout(() => {
      super.start();
      this.exerciseRunning = true;
      this.breathCount = 0;
      this.informAboutNewBreath();
      this.setupBreathInSoundIntervalPlayer();
      this.timeoutIds.push(this.setupBreathOutIntervalPlayer());
      this.timeoutIds.push(this.setupFinishingBreathSoundIntervalPlayer());
    }, this.startDelayInMillis);
  }

  stop() {
    this.timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    this.stopAll();
  }
}
