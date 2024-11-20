import { Righteous } from "next/font/google"
import Image from "next/image";
import Link from "next/link";

const font = Righteous({
    subsets:['latin'],
    weight:'400'
})

export default function Logo(){
    return (
       <Link href="/" className={`flex items-center gap-2 ${font.className}`}>
         <Image src={"/logo.svg"} alt="App Logo" width={50} height={50}/>
         <h1 className="leading-5 flex flex-col items-center text-lg">
            <div>
                DIGITAL
            </div>
            <div>
                INVIT<span className="text-blue-500">3</span>
            </div>
         </h1>
       </Link>
    );
}