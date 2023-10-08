import { ISoundPlayer } from "../../../components/soundPlayer/soundPlayer/ISoundPlayer";
import { SoundPlayer } from "../../../components/soundPlayer/soundPlayer/SoundPlayer";
import { IBreathingTimer } from "../breathingTimer/IBreathingTimer";

export class BreathingExerciseSoundPlayer {
  private breathInSound: ISoundPlayer = new SoundPlayer(
    "./assets/sounds/high_pop.mp3"
  );
  private breathOutSound: ISoundPlayer = new SoundPlayer(
    "./assets/sounds/low_pop.mp3"
  );
  private finishingBreathsSound: ISoundPlayer = new SoundPlayer(
    "./assets/sounds/bottle_pop.mp3"
  );

  constructor(
    breathingTimer: IBreathingTimer,
    private numberOfFinishingBreaths: number = 3
  ) {
    breathingTimer.onBreathingIn((breathCount, totalNumberOfBreaths) => {
      if (this.isFinishingBreath(breathCount, totalNumberOfBreaths)) {
        this.finishingBreathsSound.play();
      } else {
        this.breathInSound.play();
      }
    });
    breathingTimer.onBreathingOut(() => {
      this.breathOutSound.play();
    });
  }

  private isFinishingBreath(
    breathCount: number,
    totalNumberOfBreaths: number
  ): boolean {
    return totalNumberOfBreaths - breathCount < this.numberOfFinishingBreaths;
  }
}
