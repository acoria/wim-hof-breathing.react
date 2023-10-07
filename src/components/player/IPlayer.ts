export interface IPlayer {
  onStop(handler: () => void): void;
  onStart(handler: () => void): void;
  start(): void;
  stop(): void;
}
