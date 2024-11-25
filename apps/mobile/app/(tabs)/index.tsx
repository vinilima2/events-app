import Logo from "@/components/template/Logo";
import { bgBlack, centerGrow } from "@/style";
import { ImageBackground } from "react-native";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("@/assets/images/background.png")}
      resizeMode="cover"
      style={[centerGrow, bgBlack]}
    >
      <Logo />
    </ImageBackground>
  );
}
