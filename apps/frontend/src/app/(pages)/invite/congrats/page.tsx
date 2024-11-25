import Image from "next/image";

export default function CongratsPage() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Image
        src="/mascot.png"
        alt="Mascot of Digital Invite"
        width={300}
        height={300}
      />
      <span className="text-3xl font-black">Thank You!</span>
      <span className="text-zinc-400 -mt-5">
        Your confirmation is very important for us, enjoy your event!
      </span>
    </div>
  );
}
