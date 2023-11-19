

const out = Outfit({ weight: "300", subsets: ["latin"] });
const out6 = Outfit({ weight: "600", subsets: ["latin"] });
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

import { Outfit } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export default function Unleash(){
    return(
        <div className={`bg-white flex md:flex-row flex-col ${out.className} space-x-10 w-full  min-h-[500px] py-12 justify-center items-center`}>
             <div className="text-center flex flex-col justify-center items-center ">
        
        <p className={`w-full text-3xl md:text-4xl pt-2 lg:px-24 ${out6.className}`}>
        Join fanlyAI and unleash your potential
        </p>
        <p className="pt-2 md:px-12 lg:px-48">
        Train your own AI or access a wide range of AI services on fanlyAI
        </p>
        <div className="my-4 flex space-x-4">
          <Link href="https://twitter.com/FanlyAI" target="_blank"> <FaXTwitter size={36}></FaXTwitter></Link>
       
        <FaTelegram size={36}></FaTelegram>

        </div>
        
        <div className="flex space-x-4 pt-2">
        <Link href="/comingsoon">
            <button  className="border border-black flex text-white bg-black justify-center items-center p-2 w-32">
              get started
            </button></Link>
            <Link href="https://whitepaper.fanlyai.com" target="_blank">
            <button className="border border-black flex justify-center items-center p-2 w-32">
              learn more
            </button></Link>
        </div>
      </div>
        </div>
    )
}