import { Id } from "../../shared";
import Event from "../model/Event";

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