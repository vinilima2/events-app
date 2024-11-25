import {createContext, useEffect, useState} from "react";
import {Event} from "core/dist";
import useAPI from "../hooks/useAPI";
import useLocalStorage from "../hooks/useLocalStorage";

interface EvnetsContextProps {
  event: Event | null;
  events: Event[];

  selectEvent(id: string): void;
  deleteEvent(id: string): void;
  addEventWithQrCode(qrcode: string): void;
}

const EventsContext = createContext<EvnetsContextProps>({} as any);

export function EventsProvider(props: any) {
  const { httpPost } = useAPI();
  const { saveItem, getItem } = useLocalStorage();

  const [event, setEvent] = useState<Event | null>(null);
  const [events, setEvents] = useState<Event[]>([]);

  async function selectEvent(id: string) {
    if (!events) return;
    const selectedEvent = events.find((e) => e.id === id);
    const loadedEvent = await loadEvent(id, selectedEvent?.password || "");
    setEvent(loadedEvent ?? null);
  }

  async function addEventWithQrCode(qrcode: string) {
    try {
      const idAndPassword = JSON.parse(qrcode);

      const event = await loadEvent(idAndPassword.id, idAndPassword.senha);
      if (!event) {
        return deleteEvent(idAndPassword.id);
      }

      const newEvents = events.filter((e) => e.id !== idAndPassword.id);
      newEvents.push(event);

      saveItem("events", newEvents);
      setEvents(newEvents);
    } catch (error: any) {
      alert(JSON.stringify(error));
    }
  }

  function deleteEvent(id: string) {
    const newEvents = events.filter((e) => e.id !== id);
    saveItem("events", newEvents).then();
    setEvents(newEvents);
  }

  async function loadEvent(id: string, password: string) {
    return await httpPost("events/access", {id, password: password});
  }

  async function loadEvents() {
    const events = await getItem("events");
    setEvents(events || []);
  }

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <EventsContext.Provider
      value={{
        event: event,
        events: events,
        selectEvent: selectEvent,
        addEventWithQrCode: addEventWithQrCode,
        deleteEvent: deleteEvent,
      }}
    >
      {props.children}
    </EventsContext.Provider>
  );
}

export default EventsContext;
