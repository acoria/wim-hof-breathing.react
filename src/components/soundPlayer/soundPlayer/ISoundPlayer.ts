export interface ISoundPlayer {
  play(): void;
  registerOnStop(listener: () => void): void;
  stop(): void;
}
