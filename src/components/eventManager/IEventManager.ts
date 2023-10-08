export interface IEventManager<T = unknown> {
  onEvent(handler: (data: T) => void): void;
  callEvent(data: T): void;
  callEvent(): void;
}
