const out = Outfit({ weight: "300", subsets: ["latin"] });
const out6 = Outfit({ weight: "600", subsets: ["latin"] });
import { motion } from "framer-motion";

import { Outfit } from "next/font/google";
import Image from "next/image";
import { FaCube } from "react-icons/fa";
export default function Revolution() {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration:0.3 }}
      className={`bg-black text-white text-center flex  flex-col ${out.className} md:space-x-10 w-full  min-h-[600px] py-12 justify-center items-center`}
    >
      <div className="text-center flex flex-col ">
        <p>Revolutionize</p>
        <p className={`w-full text-3xl md:text-4xl pt-2 ${out6.className}`}>
          Train, Share, and Use AI on VuzzAI
        </p>
        <p className="pt-6 md:px-12 lg:px-48">
          Discover the power of training, sharing, and utilizing artificial
          intelligence on the VuzzAI platform. With VuzzAI, you can unleash
          the potential of AI and connect with a vibrant community of AI
          enthusiasts.
        </p>
      </div>
      <div
        
        className="flex md:flex-row text-black flex-col pt-24 md:px-12 items-center md:items-start md:space-y-0 space-y-10 justify-center  md:space-x-10"
      >
        <div className="text-center bg-[#EFDFEF] md:h-[300px] lg:h-[400px] xl:h-[250px] p-4 lg:p-4  xl:p-6 rounded-3xl   flex flex-col w-full justify-center items-center">
          <FaCube size={36}></FaCube>
          <p className={` w-full text-lg md:text-2xl pt-4   ${out6.className}`}>
            Train Your Own AI Models
          </p>
          <p>Become an AI trainer and create your own intelligent models.</p>
        </div>
        <div className="text-center bg-[#EFDFEF] md:h-[300px] lg:h-[400px] p-4 xl:h-[250px]  lg:p-4  xl:p-6 rounded-3xl    flex flex-col w-full justify-center items-center">
          <FaCube size={36}></FaCube>
          <p className={`w-full text-lg md:text-2xl pt-4 ${out6.className}`}>
            Share and Collaborate with Others
          </p>
          <p>Connect with the AI community and share your AI models.</p>
        </div>
        <div className="text-center  bg-[#EFDFEF] md:h-[300px] lg:h-[400px] p-2  xl:h-[250px] lg:p-4  xl:p-6 rounded-3xl  flex flex-col w-full justify-center items-center">
          <FaCube size={36}></FaCube>
          <p className={`w-full text-lg md:text-2xl pt-4 ${out6.className}`}>
            Access AI Services with $VUZZ Tokens
          </p>
          <p>Use $VUZZ tokens to unlock a range of AI services.</p>
        </div>
      </div>
    </motion.div>
  );
}
