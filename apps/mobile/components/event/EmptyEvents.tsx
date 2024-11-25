import {
  bgZinc950,
  fontBold,
  gapY4,
  itemsCenter,
  py4,
  roundedLg,
  text3Xl,
  textLg,
  textWhite,
  textZinc400,
  wFull,
} from "@/style";
import { Image, Text, View } from "react-native";

export default function EmptyEvents() {
  return (
    <View style={itemsCenter}>
      <View style={[itemsCenter, py4, bgZinc950, wFull, roundedLg, gapY4]}>
        <Image
          source={require("@/assets/images/non-events.png")}
          style={{ width: 200, height: 200 }}
        />
        <Text style={[textWhite, text3Xl, fontBold]}>OOPS...</Text>
        <View>
          <Text style={[textZinc400, textLg]}>
            Nothing events here.
          </Text>
          <Text style={[textZinc400, textLg]}>Scan any QR code?</Text>
        </View>
        <Image
          source={require("@/assets/images/triangle.png")}
          style={{ width: 25, height: 17 }}
        />
      </View>
    </View>
  );
}
