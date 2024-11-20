import { Id, Password } from "@/core";
import Event from "../model/Event";
import validateEvent from "./validateEvent";

export default function complementEvent(partitialEvent: Partial<Event>): Event {
    const errors = validateEvent(partitialEvent)
    if (errors.length) {
        throw new Error(errors.join('\n'))
    }

    const event: Event = {
        ...partitialEvent,
        id: partitialEvent.id ?? Id.newId(),
        password: partitialEvent.password ?? Password.create(20),
        expectedAudience: +(partitialEvent.expectedAudience ?? 1),
    } as Event

    return event;
}