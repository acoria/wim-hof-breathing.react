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
  private finishingBreathsInSound: ISoundPlayer = new SoundPlayer(
    "./assets/sounds/bottle_pop.mp3"
  );
  private finishingBreathInSound: ISoundPlayer = new SoundPlayer(
    "./assets/sounds/gong.mp3"
    // "./assets/sounds/long_soft_gong.mp3"
  );

  constructor(
    breathingTimer: IBreathingTimer,
    numberOfFinishingBreaths: number = 3
  ) {
    breathingTimer.onBreathingIn((breathingInfo) => {
      //the last breathing in sounds like a gong
      if (
        this.isFinishingBreath(
          breathingInfo.index,
          breathingInfo.totalNumberOfBreaths,
          1
        )
      ) {
        this.finishingBreathInSound.play();
      } else if (
        this.isFinishingBreath(
          breathingInfo.index,
          breathingInfo.totalNumberOfBreaths,
          numberOfFinishingBreaths
        )
      ) {
        this.finishingBreathsInSound.play();
      } else {
        this.breathInSound.play();
      }
    });
    breathingTimer.onBreathingOut((breathingInfo) => {
      //do not play the last sound, since a gong is playing to indicate the last breath
      if (
        !this.isFinishingBreath(
          breathingInfo.index,
          breathingInfo.totalNumberOfBreaths,
          1
        )
      ) {
        this.breathOutSound.play();
      }
    });
  }

  private isFinishingBreath(
    breathCount: number,
    totalNumberOfBreaths: number,
    numberOfFinishingBreaths: number
  ): boolean {
    return totalNumberOfBreaths - breathCount < numberOfFinishingBreaths;
  }
}
