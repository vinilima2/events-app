"use client";

import {
  Guest,
  createEmptyGuest,
  createEmptyEvent,
  EventDate,
  Event,
} from "core/dist";
import { createContext, useCallback, useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";
import { useRouter } from "next/navigation";
import useMessage from "../hooks/useMessage";

export interface EventContextProps {
  event: Partial<Event>;
  guest: Partial<Guest>;
  isValidAlias: boolean;

  changeEvent(event: Partial<Event>): void;
  changeGuest(guest: Partial<Guest>): void;

  loadEvent(idOrAlias: string): Promise<void>;
  saveEvent(): Promise<void>;

  addGuest(): void;
}

const EventContext = createContext<EventContextProps>({} as any);

export function EventProvider(props: any) {
  const { httpGet, httpPost } = useAPI();
  const { addError } = useMessage();
  const router = useRouter();

  const [isValidAlias, setIsValidAlias] = useState(true);
  const [event, setEvent] = useState<Partial<Event>>(createEmptyEvent());
  const [guest, setGuest] = useState<Partial<Guest>>(
    createEmptyGuest()
  );

  const saveEvent = useCallback(
    async function () {
      try {
        const createdEvent = await httpPost("/events", event);
        router.push("/event/success");
        setEvent({
          ...createdEvent,
          date: EventDate.parseToDate(createdEvent.date),
        });
      } catch (error: any) {
        addError(error.messagem ?? "Unexpected result!");
      }
    },
    [event, httpPost, router]
  );

  const loadEvent = useCallback(
    async function (idOrAlias: string) {
      try {
        const event = await httpGet(`/events/${idOrAlias}`);
        if (!event) return;
        setEvent({
          ...event,
            date: EventDate.parseToDate(event.date),
        });
      } catch (error: any) {
        addError(error.messagem ?? "Unexpected result!");
      }
    },
    [httpGet, setEvent]
  );

  const addGuest = useCallback(
    async function () {
      try {
        await httpPost(`/events/${event.alias}/guest`, guest);
        router.push("/invite/congrats");
      } catch (error: any) {
        addError(error.messagem ?? "Unexpected result!");
      }
    },
    [httpPost, event, guest, router]
  );

  const validateAlias = useCallback(
    async function () {
      try {
        const { valid } = await httpGet(
          `/events/validate/${event.alias}/${event.id}`
        );
        setIsValidAlias(valid);
      } catch (error: any) {
        addError(error.message ?? "Unexpected result!");
      }
    },
    [httpGet, event]
  );

  useEffect(() => {
    if (event?.alias) validateAlias().then();
  }, [event?.alias, validateAlias]);

  return (
    <EventContext.Provider
      value={{
        event: event,
        guest: guest,
        isValidAlias: isValidAlias,
        changeEvent: setEvent,
        changeGuest: setGuest,
        saveEvent: saveEvent,
        loadEvent: loadEvent,
        addGuest: addGuest,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
}

export default EventContext;
