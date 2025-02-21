import { Stack } from "expo-router";
import { EventsProvider } from "../data/contexts/EventsContext";

export default function RootLayout() {
  return (
    <EventsProvider>
      <Stack >
        <Stack.Screen name="(tabs)" options={{
          headerShown: false
        }} />
      </Stack>
    </EventsProvider>);
}
