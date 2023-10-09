import { Event } from "../../../components/eventManager/Event";
import { EventHandler } from "../../../components/eventManager/EventHandler";
import { IEvent } from "../../../components/eventManager/IEvent";
import { BreathingInfo } from "./BreathingInfo";
import { IBreathingTimer } from "./IBreathingTimer";

export class BreathingTimer implements IBreathingTimer {
  private breathInEventManager: IEvent<BreathingInfo> = new Event();
  private breathOutEventManager: IEvent<BreathingInfo> = new Event();
  private startEventManager: IEvent<BreathingInfo> = new Event();
  private stopEventManager: IEvent<undefined> = new Event();
  private finishedEventManager: IEvent<undefined> = new Event();
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
      this.breathInEventManager.raise(this.getBreathingInfo());
    } else {
      this.breathOutEventManager.raise(this.getBreathingInfo());
    }

    if (!this.totalNumberOfBreathsReached(this.halfBreathCount)) {
      this.breathingTimeout = setTimeout(
        () => this.breath(),
        this.breathDurationInMillis / 2
      );
    } else {
      this.finish();
    }
  }

  private finish() {
    this.stopTimer();
    this.finishedEventManager.raise(undefined);
  }

  private getBreathingInfo(): BreathingInfo {
    return {
      index: this.getNumberOfBreaths(this.halfBreathCount),
      totalNumberOfBreaths: this.numberOfBreaths,
    };
  }

  private getNumberOfBreaths(halfBreathCount: number): number {
    return Math.ceil(halfBreathCount / 2);
  }

  private isNewBreathingCycle(halfBreathCount: number): boolean {
    return halfBreathCount % 2 !== 0;
  }

  private stopTimer() {
    this.breathingRunning = false;
    clearTimeout(this.breathingTimeout);
  }

  private totalNumberOfBreathsReached(halfBreathCount: number): boolean {
    return (
      !this.isNewBreathingCycle(halfBreathCount) &&
      this.getNumberOfBreaths(halfBreathCount) >= this.numberOfBreaths
    );
  }

  onBreathingIn(handler: EventHandler<BreathingInfo>): void {
    this.breathInEventManager.onEvent(handler);
  }
  onBreathingOut(handler: EventHandler<BreathingInfo>): void {
    this.breathOutEventManager.onEvent(handler);
  }

  onFinished(handler: () => void): void {
    this.finishedEventManager.onEvent(handler);
  }

  onStart(handler: () => void): void {
    this.startEventManager.onEvent(handler);
  }

  onStop(handler: () => void): void {
    this.stopEventManager.onEvent(handler);
  }

  start() {
    this.startEventManager.raise(this.getBreathingInfo());
    setTimeout(() => {
      this.initialize();
      this.breathingRunning = true;
      this.breath();
    }, this.startDelayInMillis);
  }

  stop() {
    this.stopTimer();
    this.stopEventManager.raise(undefined);
  }
}
