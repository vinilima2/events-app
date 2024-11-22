'use client'
import EventDashboard from "@/components/event/EventDashboard";
import PasswordEventForm from "@/components/event/PasswordEventForm";
import { Event, Guest } from "@/core";
import { use, useEffect, useState } from "react";

export default function EventAdminPage(props: any) {
    const params: any = use(props.params)
    const id = params.all[0];
    const [event, setEvent] = useState<Event | null>(null);
    const [password, setPassword] = useState<string | null>(params.all[1] ?? null);

    const confirmed = event?.guests.filter(guest => guest.confirmed) ?? []
    const nonConfirmed = event?.guests.filter(guest => !guest.confirmed) ?? []
    const totalGuests = confirmed.reduce((total: number, guest: Guest) => {
        return total + (guest.numberCompanions + 1)
    }, 0)

    function loadEvent(): any {
        setEvent({

        } as Event)
    }

    useEffect(() => {
        loadEvent()
    }, [id])

    return (
        <div className="flex flex-col items-center">
            {event ? (
                <EventDashboard event={event} total={totalGuests ?? 0} confirmed={confirmed} nonConfirmed={nonConfirmed} />
            ) : <PasswordEventForm />}
        </div>
    );
}