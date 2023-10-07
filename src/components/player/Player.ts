import { IPlayer } from "./IPlayer";

export class Player implements IPlayer {
  private onStartHandlers: (() => void)[] = [];
  private onStopHandlers: (() => void)[] = [];

  onStart(handler: () => void): void {
    this.onStartHandlers.push(handler);
  }

  onStop(handler: () => void): void {
    this.onStopHandlers.push(handler);
  }

  start() {
    this.onStartHandlers.forEach((handler) => handler());
  }

  stop(): void {
    this.onStopHandlers.forEach((handler) => handler());
  }
}
