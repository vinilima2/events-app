import { fontBold, py4, selfStart, textXl, textZinc400 } from "@/style";
import { Text } from "react-native";

export interface SectionTitleProps {
  text: string;
}

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <Text style={[textXl, fontBold, py4, textZinc400, selfStart]}>
      {props.text}
    </Text>
  );
}
