import {alignCenter, bgBlack, flex1, gapY4, p4, py8} from "@/style";
import {Pressable, SafeAreaView, ScrollView} from "react-native";
import {useRouter} from "expo-router";
import EventCard from "@/components/event/EventCard";
import useEvents from "@/data/hooks/useEvents";
import EmptyEvents from "@/components/event/EmptyEvents";
import NewEvent from "@/components/event/NewEvent";

export default function EventsScreen() {
    const {events} = useEvents();
    const router = useRouter();

    return (
        <SafeAreaView style={[flex1, bgBlack, p4]}>
            {(events?.length ?? 0) === 0 ? <EmptyEvents/> :
                <ScrollView contentContainerStyle={[gapY4, py8, alignCenter]}>
                    {events.map((event) => (
                        <Pressable
                            key={event.id}
                            onPress={() => router.push(`/events/${event.id}` as any)}
                        >
                            <EventCard event={event}/>
                        </Pressable>
                    ))}
                    <NewEvent/>
                </ScrollView>}

        </SafeAreaView>
    );
}
