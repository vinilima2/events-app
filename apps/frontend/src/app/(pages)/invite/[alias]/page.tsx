"use client";

import GuestForm from "@/components/event/GuestForm";
import EventInfo from "@/components/event/EventInfo";
import Window from "@/components/shared/Window";
import Processing from "@/components/shared/Processing";
import useEvent from "@/data/hooks/useEvent";
import { Event } from "core/dist";
import { use, useEffect } from "react";

export default function InvitePage(props: any) {
  const params: any = use(props.params);
  const {
    event,
    guest,
    changeEvent,
    changeGuest,
    loadEvent,
    addGuest
  } = useEvent();

  useEffect(() => {
    loadEvent(params.alias).then();
  }, [params.alias]);

  return event?.alias ? (
      <div>
        <Window
            label="Your guest to:"
            title={event.name}
            image={event.image}
            background={event.backgroundImage}
        >
          <EventInfo showName event={event as Event} />
          <div className="flex flex-col gap-4 pt-10">
            <span className="text-xl font-bold">Put your data below</span>
            <div className="border-t border-zinc-800"></div>
            <GuestForm
                guest={guest}
                isGuestChanged={changeGuest}
            />
            <button
                className={`button self-center ${guest.confirmed ? "green" : "red"}`}
                onClick={addGuest}
            >
              Confirm {guest.confirmed ? "Present" : "Absent"}
            </button>
          </div>
        </Window>
      </div>
  ) : (
      <Processing />
  );
}
