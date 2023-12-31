const out = Outfit({ weight: "300", subsets: ["latin"] });
const out6 = Outfit({ weight: "600", subsets: ["latin"] });
import { FaCube } from "react-icons/fa";
import { motion } from "framer-motion";

import { Outfit } from "next/font/google";
import Image from "next/image";

export default function Vuzz({id}) {
  return (
    <div 
      className={`bg-transparent text-white flex md:flex-row flex-col ${out.className} md:space-x-10 w-full  min-h-full pt-48 justify-center items-center`}
    >
      <div  className="flex flex-col">
        <p className={`w-full text-3xl  ${out6.className}`}>
          Unlock the Power of AI Services with $VUZZ Tokens
        </p>
        <p className="pt-6">
          Experience the future of artificial intelligence with VuzzAI. With
          $VUZZ tokens, you can access a wide range of AI services and unleash
          the potential of your own AI creations.
        </p>
        <div id={id} className="flex items-center space-x-2 pt-4">
          <FaCube></FaCube>
          <p>Discover AI services like never before</p>
        </div>
        <div className="flex items-center space-x-2 pt-4">
          <FaCube></FaCube>
          <p>Monetize your AI creations and earn profits</p>
        </div>
        <div className="flex items-center space-x-2 pt-4">
          <FaCube></FaCube>
          <p>Connect with the AI community and share knowledge</p>
        </div>
      </div>
      <motion.div
        className="w-full flex justify-center md:pt-0 pt-12"
        initial={{ opacity: 0, scale: 0.5 , x:100}}
        whileInView={{ opacity: 1, scale: 1, x:0 }}
        transition={{ ease: "easeOut", duration:0.3 }}
      >
        <Image
          src="/Brain22.png"
          width={500}
          height={600}
          
        ></Image>
      </motion.div>
    </div>
  );
}
