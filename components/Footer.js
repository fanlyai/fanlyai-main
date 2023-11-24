
import logo from "../public/assets/logo.svg";
const outfit = Outfit({ weight: "200", subsets: ["latin"] });
import { Outfit } from "next/font/google";
import { FaXTwitter } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";


export default function Footer(){
    return(<div className="w-screen z-10 md:px-32 px-12 flex md:flex-row flex-col justify-between  items-center bg-black">
    <div>
    <Image src="/vuzzAIlogo.png" width={60} height={60}></Image>
    </div>
    <div className={outfit.className}>
     <p >© 2023 VuzzAI. All rights reserved. All website design generated with AI</p>
    </div>
    <div className="text-white flex gap-4 md:py-0 py-8">
    <Link href="https://twitter.com/FanlyAI" target="_blank"> <FaXTwitter size={28}></FaXTwitter></Link>
      <BsTelegram className="cursor-pointer" size={28}></BsTelegram>
    </div>
  </div>)
}