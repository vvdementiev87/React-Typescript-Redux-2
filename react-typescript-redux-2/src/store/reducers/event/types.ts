import { IEvent } from "../../../models/IEvent";
import { Iuser } from "../../../models/IUser";

export interface EventState {
  guests: Iuser[];
  events: IEvent[];
}

export enum EventActionEnum {
  SET_GUESTS = "SET_GUESTS",
  SET_EVENTS = "SET_EVENTS",
}

export interface SetGuestsAction {
  type: EventActionEnum.SET_GUESTS;
  payload: Iuser[];
}
export interface SetEventsAction {
  type: EventActionEnum.SET_EVENTS;
  payload: IEvent[];
}

export type EventAction = SetEventsAction | SetGuestsAction;
