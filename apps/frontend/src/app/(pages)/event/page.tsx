"use client";
import Window from "@/components/shared/Window";
import useEvent from "@/data/hooks/useEvent";
import EventForm from "@/components/event/EventForm";

export default function EventPage() {
    const { event } = useEvent();
    return (
        <div>
            <Window
                label="What's your new event?"
                title={event?.name ? event?.name : "New Event"}
                image={event?.image}
                background={event?.backgroundImage}
            >
                <EventForm />
            </Window>
        </div>
    );
}
