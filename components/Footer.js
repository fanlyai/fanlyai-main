
import logo from "../public/assets/logo.svg";
const outfit = Outfit({ weight: "300", subsets: ["latin"] });
import { Orbitron, Outfit } from "next/font/google";
import { FaXTwitter } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import Image from "next/image";


export default function Footer(){
    return(<div className="w-screen z-10 px-32 flex md:flex-row flex-col justify-between  items-center bg-black">
    <div>
      <Image src={logo} width={200} className="py-4"></Image>
    </div>
    <div className={outfit.className}>
      <div className="flex gap-4 text-[16px] text-white">
        <div>Presale</div>
        <div>Demo</div>
      </div>
    </div>
    <div className="text-white flex gap-4">
      <FaXTwitter className="cursor-pointer" size={28}></FaXTwitter>
      <BsTelegram className="cursor-pointer" size={28}></BsTelegram>
    </div>
  </div>)
}