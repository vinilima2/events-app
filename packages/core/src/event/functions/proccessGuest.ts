import Guest from "../model/Guest";
import validateGuest from "./validateGuest";

export default function processGuest(partialGuest: Partial<Guest>): Guest {
    const errors = validateGuest(partialGuest)
    if (errors.length) {
        throw new Error(errors.join('\n'))
    }

    const numberCompanions = partialGuest.numberCompanions ?? 0;
    const isAccompanied = partialGuest.isAccompanied && partialGuest.confirmed && numberCompanions > 0;

    const guest: Guest = {
        ...partialGuest,
        numberCompanions: isAccompanied ? numberCompanions : 0,
        isAccompanied: isAccompanied ?? false
    } as Guest

    return guest;
}