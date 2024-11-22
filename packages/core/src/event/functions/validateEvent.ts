import Event from "../model/Event";

export default function validateEvent(event: Partial<Event>): string[] {
    const errors: string[] = [];
    if (!event.name) {
        errors.push('Name is required!')
    }

    return errors;
}