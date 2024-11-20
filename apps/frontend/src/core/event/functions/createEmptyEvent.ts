import { Event, Id } from "@/core";

export default function createEmptyEvent(): Partial<Event> {
    return {
        id: Id.newId(),
        name: '',
        description: '',
        date: new Date(),
        locale: '',
        expectedAudience: 1,
        image: '',
        backgroundImage: ''
    }
}