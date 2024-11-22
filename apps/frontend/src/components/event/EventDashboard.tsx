import { Event, Guest } from "@/core";
import EventInfo from "./EventInfo";
import QrCodeAccess from "./QrCodeAccess";
import Statistic from "../shared/Statistic";
import GuestList from "./GuestList";

export interface EventDashboardProps {
    event: Event;
    confirmed: Guest[];
    nonConfirmed: Guest[];
    total: number;
}

export default function EventDashboard(props: EventDashboardProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2 self-stretch">
                <EventInfo event={props.event} className="flex-1" />
                <QrCodeAccess event={props.event} />
            </div>
            <div className="grid grid-cols- gap-6 mt-4">
                <Statistic text="Expected Audience:" value={props.event.expectedAudience} image="/icons/guests.svg" />
                <Statistic text="Total Confirmed" value={props.confirmed.length} image="/icons/confirmed.svg" />
                <Statistic text="Total Guests" value={props.total} image="/icons/escorts.svg" />
            </div>

            <button className="button green self-end mt-12">
                <span>Refresh guest list</span>
            </button>
            
            <span className="flex py-2 text-xl font-bold text-white/80 ">
                CONFIRMED guests
            </span>
            <GuestList guests={props.confirmed} />

            <span className="flex py-2 text-xl font-bold text-white/80 ">
                NON confirmed guests
            </span>
            <GuestList guests={props.nonConfirmed} />
        </div>
    );
}