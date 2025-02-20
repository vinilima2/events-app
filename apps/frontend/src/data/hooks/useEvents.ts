import { useContext } from "react";
import EventsContext from "@/data/contexts/EventsContext";

const useEvents = () => useContext(EventsContext);
export default useEvents;
