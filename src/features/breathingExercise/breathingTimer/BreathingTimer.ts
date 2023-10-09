import { EventManager } from "../../../components/eventManager/EventManager";
import { IEventManager } from "../../../components/eventManager/IEventManager";
import { IBreathingTimer } from "./IBreathingTimer";

export class BreathingTimer implements IBreathingTimer {
  private breathInEventManager: IEventManager = new EventManager();
  private breathOutEventManager: IEventManager = new EventManager();
  private startEventManager: IEventManager = new EventManager();
  private stopEventManager: IEventManager = new EventManager();
  private halfBreathCount = 0;
  private breathingRunning = false;
  private breathingTimeout: NodeJS.Timeout | undefined;

  constructor(
    private numberOfBreaths: number,
    private breathDurationInMillis: number,
    private startDelayInMillis: number = 0
  ) {}

  initialize() {
    this.halfBreathCount = 0;
  }

  private breath() {
    this.halfBreathCount++;
    if (!this.breathingRunning) {
      return;
    }
    if (this.isNewBreathingCycle(this.halfBreathCount)) {
      this.breathInEventManager.callEvent();
    } else {
      this.breathOutEventManager.callEvent();
    }

    if (!this.totalNumberOfBreathsReached(this.halfBreathCount)) {
      this.breathingTimeout = setTimeout(
        () => this.breath(),
        this.breathDurationInMillis / 2
      );
    } else {
      this.stop();
    }
  }

  private isNewBreathingCycle(halfBreathCount: number): boolean {
    return halfBreathCount % 2 !== 0;
  }

  private getNumberOfBreaths(halfBreathCount: number): number {
    return Math.ceil(halfBreathCount / 2);
  }

  private totalNumberOfBreathsReached(halfBreathCount: number): boolean {
    return (
      !this.isNewBreathingCycle(halfBreathCount) &&
      this.getNumberOfBreaths(halfBreathCount) >= this.numberOfBreaths
    );
  }

  onBreathingIn(
    handler: (breathCount: number, totalNumberOfBreaths: number) => void
  ): void {
    this.breathInEventManager.onEvent(() =>
      handler(
        this.getNumberOfBreaths(this.halfBreathCount),
        this.numberOfBreaths
      )
    );
  }
  onBreathingOut(
    handler: (breathCount: number, totalNumberOfTotalBreaths: number) => void
  ): void {
    this.breathOutEventManager.onEvent(() =>
      handler(
        this.getNumberOfBreaths(this.halfBreathCount),
        this.numberOfBreaths
      )
    );
  }

  onStart(handler: () => void): void {
    this.startEventManager.onEvent(handler);
  }

  onStop(handler: () => void): void {
    this.stopEventManager.onEvent(handler);
  }

  start() {
    this.startEventManager.callEvent();
    setTimeout(() => {
      this.initialize();
      this.breathingRunning = true;
      this.breath();
    }, this.startDelayInMillis);
  }

  stop() {
    this.breathingRunning = false;
    clearTimeout(this.breathingTimeout);
    this.stopEventManager.callEvent();
  }
}
