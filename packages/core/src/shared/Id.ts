import { v4 as uuid, validate } from 'uuid';

export default class Id {

    static newId(): string {
        return uuid()
    }

    static isValid(id: string): boolean {
        return validate(id);
    }
}