import useEvents from "@/data/hooks/useEvents";
import { flex1 } from "@/style";

import { CameraView } from "expo-camera";
import { useRouter } from "expo-router";

export default function TelaQrCode() {
  const { addEventWithQrCode } = useEvents();
  const router = useRouter();
  return (
    <CameraView
      facing="back"
      style={flex1}
      onBarcodeScanned={({ data }) => {
          addEventWithQrCode(data);
        router.back();
      }}
    />
  );
}
