import { bgBlack, flex1 } from "@/style";
import { ImageBackground } from "react-native";

export default function Index() {
  return (
    <ImageBackground
      resizeMode="cover"
      style={[flex1, bgBlack]}
      source={require('@/assets/images/background.png')}>

    </ImageBackground>
  );
}
