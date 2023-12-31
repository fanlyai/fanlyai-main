const out = Outfit({ weight: "300", subsets: ["latin"] });
const out6 = Outfit({ weight: "600", subsets: ["latin"] });
import { FaCube } from "react-icons/fa";
import { motion } from "framer-motion";

import { Outfit } from "next/font/google";
import Image from "next/image";

export default function Social() {
  return (
    <div
      className={`bg-black  text-white flex md:flex-row flex-col ${out.className} md:space-x-10 w-full  min-h-full py-12 justify-center items-center`}
    >
      
      <div className="flex flex-col ">
      <div className="absolute left-0 h-full w-full overflow-hidden ">
        <div className="absolute left-1/2 top-[620px] md:top-[300px] ml-[-2000px] h-[4000px] w-[4000px] rounded-full bg-transparent shadow-[0px_10px_100px_0px_rgba(255,255,255)_inset] "></div>
</div>
        <p className={`w-full text-3xl  ${out6.className}`}>
          Integration of Personal Chatbots in Social Interaction
        </p>
       
        <div className="flex items-center space-x-2 pt-4">
          vuzz.app represents a groundbreaking advancement in social
          technology, introducing the innovative integration of user-created
          personal chatbots. This unique feature empowers users to maintain an
          active presence on the platform, even when they are not online,
          through their personalized chatbots. These chatbots, crafted to
          reflect individual users' characteristics, enable a continuous and
          interactive digital footprint on the vuzz.app platform.
        </div>
      </div>
      <motion.div
        className="w-full flex justify-center md:pt-0 pt-12"
        initial={{ opacity: 0, scale: 0.5, x: 100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        <Image
          src="/vuzzV.png"
          width={300}
          height={600}
          className="rounded-3xl min-w-[300px] transform transition duration-200 hover:scale-110"
        ></Image>
      </motion.div>
    </div>
  );
}
