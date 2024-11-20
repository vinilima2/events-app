import Guest from "../model/Guest";

export default function validateGuest(guest: Partial<Guest>): string[] {
    const errors: string[] = [];
    if (!guest.name) {
        errors.push('Name is required!')
    }

    return errors;
}