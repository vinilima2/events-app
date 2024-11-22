import { Righteous } from "next/font/google"
import Image from "next/image";
import Link from "next/link";

const font = Righteous({
    subsets: ['latin'],
    weight: '400'
})

export default function BigLogo() {
    return (
        <Link href="/" className={`flex flex-col items-center gap-2 ${font.className}`}>
            <Image src={"/logo.svg"} alt="App Logo" width={100} height={100} />
            <h1 className="leading-5 flex flex-col items-center text-5xl">
                DIGITAL INVIT<span className="text-blue-500">3</span>
            </h1>
        </Link>
    );
}