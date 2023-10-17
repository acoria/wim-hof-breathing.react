import { EventHandler } from "./EventHandler";

export interface IEvent<T> {
  onEvent(handler: EventHandler<T>): void;
  raise(data: T): void;
}
