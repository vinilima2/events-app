import EventNotFound from "@/components/event/EventNotFound";
import EventInfo from "@/components/event/EventInfo";
import GuestList from "@/components/event/GuestList";
import Statistic from "@/components/shared/Statistic";
import SectionTitle from "@/components/shared/SectionTitle";
import useEvents from "@/data/hooks/useEvents";
import {
    bgBlack,
    bgRed500,
    button,
    flex1,
    flexRow,
    fontBold,
    gapX2,
    gapY4,
    p4,
    py4,
    roundedLg,
    selfCenter,
    textWhite,
    w4_5,
    wFull,
} from "@/style";
import {AntDesign} from "@expo/vector-icons";
import {Guest} from "core/dist";
import {useLocalSearchParams, useRouter} from "expo-router";
import {useEffect} from "react";
import {
    SafeAreaView,
    ScrollView,
    Image,
    View,
    Pressable,
    Text,
} from "react-native";

export default function ScreenDetailEvent() {
    const {event, selectEvent, deleteEvent} = useEvents();
    const params = useLocalSearchParams();
    const router = useRouter();

    useEffect(() => {
        selectEvent(params.id as string);
    }, [params.id]);

    const confirmed =
        event?.guests?.filter((c: Guest) => c.confirmed) ?? [];
    const nonConfirmed =
        event?.guests?.filter((c: Guest) => !c.confirmed) ?? [];

    const totalGuests = confirmed.reduce((total, guest) => {
        return total + guest.numberCompanions + 1;
    }, 0);

    return event ? (
        <SafeAreaView style={[flex1, bgBlack, p4]}>
            <ScrollView contentContainerStyle={[gapY4, py4]}>
                <Image
                    source={{uri: event.image}}
                    style={[wFull, roundedLg, {height: 200}]}
                />
                <EventInfo event={event}/>
                <View style={[flexRow, gapX2, {marginTop: 40}]}>
                    <Statistic
                        text="Excpectative"
                        value={event.expectedAudience}
                        image={require("@/assets/images/guests.png")}
                    />
                    <Statistic
                        text="Confirmed"
                        value={confirmed.length}
                        image={require("@/assets/images/confirmed.png")}
                    />
                    <Statistic
                        text="Total"
                        value={totalGuests}
                        image={require("@/assets/images/escorts.png")}
                    />
                </View>
                <SectionTitle text="Confirmed"/>
                <GuestList guests={confirmed}/>

                <SectionTitle text="Non confirmed"/>
                <GuestList guests={nonConfirmed}/>

                <Pressable
                    style={[button, bgRed500, w4_5, selfCenter]}
                    onPress={() => {
                        deleteEvent(event.id);
                        router.back();
                    }}
                >
                    <AntDesign name="delete" size={20} color="white"/>
                    <Text style={[fontBold, textWhite]}>Delete Event</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    ) : (
        <EventNotFound/>
    );
}
