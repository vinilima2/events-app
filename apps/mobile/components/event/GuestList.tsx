import {
  border,
  borderZinc800,
  gapY2,
  px4,
  py2,
  roundedMd,
  textLg,
  textSm,
  textWhite,
  textZinc400,
} from "@/style";
import { Guest } from "core/dist";
import { Text, View } from "react-native";

export interface GuestListProps {
  guests: Guest[];
}

export default function GuestList(props: GuestListProps) {
  return (
    <View>
      {props.guests && props.guests.length > 0 ? (
        <View style={gapY2}>
          {props.guests.map((guest) => (
            <View
              key={guest.id}
              style={[border, borderZinc800, roundedMd, px4, py2]}
            >
              <Text style={[textWhite, textLg]}>{guest.name}</Text>
              <Text style={[textZinc400, textSm]}>{guest.email}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text style={[textZinc400]}>Nothing here...</Text>
      )}
    </View>
  );
}
