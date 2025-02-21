import useEvents from "@/data/hooks/useEvents";
import { flex1 } from "@/style";

import { CameraView } from "expo-camera";
import { useRouter } from "expo-router";

export default function QrCodeScreen() {
  const useEventsHook = useEvents();
  const router = useRouter();
  return (
    <CameraView
      facing="back"
      style={flex1}
      barcodeScannerSettings={{
        barcodeTypes:['qr']
      }}
      onBarcodeScanned={async ({ data }) => {
        await useEventsHook.addEventWithQrCodeScan(data);
        router.back();
      }}
    />
  );
}
