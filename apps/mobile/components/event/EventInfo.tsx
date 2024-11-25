import { gapY2 } from "@/style";
import { Event } from "core/dist";
import { View } from "react-native";
import Info from "../shared/Info";

export interface InfoProps {
  event: Event;
}

export default function EventInfo(props: InfoProps) {
  return (
    <View style={gapY2}>
      <Info label="Nome">{props.event.name}</Info>
      <Info label="Data">
        {new Date(props.event.date).toLocaleDateString("pt-BR")}
        {" às "}
        {new Date(props.event.date).toLocaleTimeString("pt-BR")}
      </Info>
      <Info label="Local">{props.event.locale}</Info>
      <Info label="Descrição">{props.event.description}</Info>
    </View>
  );
}
