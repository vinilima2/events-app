"use client";
import {Event} from "core/dist";
import {IconFingerprint, IconLink} from "@tabler/icons-react";
import {useEffect, useState} from "react";
import Window from "@/components/shared/Window";
import useEvent from "@/data/hooks/useEvent";
import EventInfo from "@/components/event/EventInfo";
import CopyClipboard from "@/components/shared/CopyClipboard";
import QrCodeAccess from "@/components/event/QrCodeAccess";

export default function SuccessPage() {
    const {event} = useEvent();

    const [actualURL, setActualURL] = useState("");

    useEffect(() => {
        setActualURL(window.location.origin);
    }, []);

    return event ? (
        <Window
            label="Your event was created:"
            title={event.name}
            image={event.image}
            background={event.backgroundImage}
        >
            <EventInfo showName event={event as Event}/>
            <div className="flex gap-5 items-center py-6">
                <div className="flex-1 flex flex-col gap-5">
                    <CopyClipboard
                        icon={IconLink}
                        label="Link for invite"
                        text={`${actualURL}/invite/${event.alias}`}
                    />
                    <CopyClipboard
                        icon={IconLink}
                        label="Link for Admin"
                        text={`${actualURL}/event/admin/${event.id}`}
                    />
                    <CopyClipboard
                        icon={IconFingerprint}
                        label="Admin Password"
                        text={event.password ?? ""}
                        observation="Take care with this data!"
                    />
                </div>
                <QrCodeAccess event={event as Event}/>
            </div>
        </Window>
    ) : null;
}
