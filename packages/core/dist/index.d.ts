interface Guest {
    id: string;
    name: string;
    email: string;
    confirmed: boolean;
    isAccompanied: boolean;
    numberCompanions: number;
}

interface Event {
    id: string;
    alias: string;
    password: string;
    name: string;
    date: Date;
    locale: string;
    description: string;
    image: string;
    backgroundImage: string;
    expectedAudience: number;
    guests: Guest[];
}

declare function complementEvent(partitialEvent: Partial<Event>): Event;

declare function createEmptyEvent(): Partial<Event>;

declare function createEmptyGuest(): Partial<Guest>;

declare function processGuest(partialGuest: Partial<Guest>): Guest;

declare class Alias {
    static format(value: string): string;
}

declare class EventDate {
    static format(date: Date): string;
    static parseToDate(date: string): Date;
}

declare class Id {
    static newId(): string;
    static isValid(id: string): boolean;
}

declare class Password {
    static create(size?: number): string;
}

export { Alias, type Event, EventDate, type Guest, Id, Password, complementEvent, createEmptyEvent, createEmptyGuest, processGuest as proccessGuest };
