export interface IPlayer {
  onStart(handler: () => void): void;
  onStop(handler: () => void): void;
  start(): void;
  stop(): void;
}
