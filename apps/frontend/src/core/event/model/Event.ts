import Guest from "./Guest";

export default interface Event {
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