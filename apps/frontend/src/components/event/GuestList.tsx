import { Guest } from "core/dist"
import ItemGuest from "./ItemGuest"

export interface GuestListProps {
    guests: Guest[]
}


export default function GuestList(props: GuestListProps) {
    return (
        <div>
            <ul className="flex flex-col gap-2">
                {props.guests.map((guest) => (
                    <ItemGuest guest={guest} key={guest.id}/>
                ))}
            </ul>
        </div>
    )
}