import { bgBlack, centerGrow, textWhite } from "@/style";
import { View, Text } from "react-native";

export default function EventNotFound() {
  return (
    <View style={[centerGrow, bgBlack]}>
      <Text style={[textWhite]}>Event not found!</Text>
    </View>
  );
}
