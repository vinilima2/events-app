import { Id } from "@/core/shared";
import Guest from "../model/Guest";

export default function createEmptyGuest(): Partial<Guest> {
    return {
        id: Id.newId(),
        name: '',
        email: '',
        confirmed: true,
        isAccompanied: false,
        numberCompanions: 0
    }
}