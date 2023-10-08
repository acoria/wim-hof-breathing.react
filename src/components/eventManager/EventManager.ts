import { IEventManager } from "./IEventManager";

export class EventManager<T> implements IEventManager<T> {
  callEvent(data: T): void;
  callEvent(): void;
  callEvent(data?: unknown): void {
    this.eventHandlers.forEach((handler) => handler(data as T));
  }

  private eventHandlers: ((data: T) => void)[] = [];

  onEvent(handler: (data: T) => void): void {
    this.eventHandlers.push(handler);
  }
}
