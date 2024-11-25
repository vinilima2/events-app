import {
  button,
  gapY4,
  itemsCenter,
  py1,
  roundedFull,
  textWhite,
} from "@/style";
import { Image, Pressable, Text, View } from "react-native";
import { useCameraPermissions } from "expo-camera";
import { Link } from "expo-router";

export default function NewEvent() {
  const [permission, handlePermission] = useCameraPermissions();

  if (!permission || !permission.granted) {
    return (
      <View>
        <Text>Wrong access to camera!</Text>
        <Pressable onPress={handlePermission} style={button}>
          <Text style={textWhite}>Request Permission</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={[itemsCenter, gapY4]}>
      <Link href={"/qrcode" as any} asChild>
        <Pressable>
          <Image
            source={require("@/assets/images/qrcode.png")}
            style={{ width: 80, height: 80 }}
          />
        </Pressable>
      </Link>
      <View style={[button, py1, roundedFull]}>
        <Text style={textWhite}>New Event</Text>
      </View>
    </View>
  );
}
