import {
  alignCenter,
  flexRow,
  text3Xl,
  textBlue500,
  textCenter,
  textWhite,
  textZinc400,
  w4_5,
} from "@/style";
import { useFonts } from "expo-font";
import { Image, Text, View } from "react-native";

export default function Logo() {
  const [loadedFont] = useFonts({
    Righteous: require("@/assets/fonts/Righteous-Regular.ttf"),
  });

  if (!loadedFont) return null;

  const fonte = { fontFamily: "Righteous" };

  return (
    <View style={alignCenter}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={{ width: 80, height: 80 }}
      />
      <View style={flexRow}>
        <Text style={[text3Xl, textWhite, fonte]}>DIGITAL</Text>
        <Text style={[text3Xl, textWhite, fonte]}>INVIT</Text>
         <Text style={[text3Xl, textBlue500, fonte]}>3</Text>
      </View>
      <View style={w4_5}>
        <Text style={[textZinc400, textCenter]}>
          Create and manage your events here!
        </Text>
      </View>
    </View>
  );
}
