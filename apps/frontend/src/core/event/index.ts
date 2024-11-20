import Event from "./model/Event";
import Guest from "./model/Guest";

import complementEvent from "./functions/complementEvent";
import createEmptyEvent from "./functions/createEmptyEvent";
import createEmptyGuest from "./functions/createEmptyGuest";
import proccessGuest from "./functions/proccessGuest";

export type { Event, Guest }
export { complementEvent, proccessGuest, createEmptyEvent, createEmptyGuest }