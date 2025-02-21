import { Event } from "core/dist";
import Info from "../shared/Info";

export interface EventInfoProps {
    event: Event;
    className?: string;
    showName?: boolean;
}

export default function EventInfo(props: EventInfoProps) {
    const event = props.event;

    return (
        <div className={`flex flex-col gap-2 ${props.className ?? ''}`}>
            <div className="flex-1 flex items-center gap-4 border border-zinc-800 px-6 py-3 rounded-lg">
                <span className="text-2xl font-black">{event.alias}:</span>
                <span className="text-xl text-zinc-300">{event.name}</span>
            </div>
            <div className="flex gap-2">
                <Info label="Date:">
                    {new Date(event.date!).toLocaleDateString()}
                    {" at "}
                    {new Date(event.date!).toLocaleTimeString()}
                </Info>
                <Info label="Locale:">{event.locale}</Info>
            </div>
            <Info label="Description:">{event.description}</Info>
        </div>
    );
}