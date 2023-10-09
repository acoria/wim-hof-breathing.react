import { EventHandler } from "./EventHandler";
import { IEvent } from "./IEvent";

export class Event<T> implements IEvent<T> {
  private eventHandlers: EventHandler<T>[] = [];

  raise(data: T): void {
    this.eventHandlers.forEach((handler) => handler(data));
  }

  onEvent(handler: EventHandler<T>): void {
    this.eventHandlers.push(handler);
  }
}
