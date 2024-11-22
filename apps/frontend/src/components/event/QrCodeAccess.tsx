import { Event } from "core"
import QRCode from "react-qr-code";

export interface QrCodeAccessProps {
    event: Event
}

export default function QrCodeAccess(props: QrCodeAccessProps) {
    const event = props.event;
    return (
        <div className="flex flex-col items-center justify-center gap-4 border border-zinc-800 px-10">
            <span className="text-sm font-light text-zinc-400">Mobile Access</span>
            <QRCode value={JSON.stringify({ id: event.id, password: event.password })} />
        </div>
    )
}