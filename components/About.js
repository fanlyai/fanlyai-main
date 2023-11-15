import { Inter, Orbitron, Outfit } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
const orb = Outfit({ weight: "300", subsets: ["latin"] });

export default function About() {
  return (
    <div
      className={`flex flex-col  items-center  mt-48 md:gap-12  justify-center  md:px-16 ${orb.className}`}
    >
      <Image
        src="/assets/light.png"
        width={400}
        height={300}
        className="w-[200px] md:w-[500px] absolute   top-[2200px] md:top-[600px] left-0 "
      ></Image>
      
      <div className="flex flex-col md:flex-row items-center">
        <div
          className={`w-full h-full bg-[#C80FB020] md:mt-48  rounded-3xl p-12 flex-wrap justify-center flex flex-col ${orb.className}`}
        >
          <p className="text-5xl text-[#C80FB0]">about</p>
          <p className="text-2xl text-white pt-4">
            fanlyAI is a revolutionary platform that enables people to train and
            share their own artificial intelligences. With{" "}
            <span className="text-[#C80FB0]">$FAIN</span> tokens, users can
            access other AI services. additionally, AI trainers can make profit
            from their own AI. fanlyAI connects the AI community by establishing
            an open ecosystem that encourages communication and cooperation
            amongst users.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col w-full item-center justify-center md:justify-between">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-[#ffffff0c] filter border min-h-[270px] mt-4 border-[#ffffff10] rounded-xl p-8  text-center md:px-0  backdrop-blur-lg m-4 md:w-[220px] lg:w-[300px] "
        >
          <p className="text-[#C80FB0] text-4xl  px-2">create your AI</p>
          <p className="text-white text-xl pt-4 px-4">
            fanlyAI gets to know users by asking them questions and creates a
            special artificial intelligence conversation bot for them according
            to their characteristics.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-[#ffffff0c]  filter  border min-h-[300px] mt-4 border-[#ffffff10] rounded-xl p-8 text-center backdrop-blur-lg  m-4 md:w-[220px] lg:w-[300px] h-full"
        >
          <p className="text-[#C80FB0] text-4xl px-2 ">sell/buy AI's</p>
          <p className="text-white text-xl pt-4">
            users can sell their AI bots based on their own characteristics in
            the marketplace or buy other user's AI's with $FAIN
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-[#ffffff0c] border border-[#ffffff10] mt-4 filter min-h-[300px] rounded-xl p-8 text-center backdrop-blur-lg md:w-[220px]  m-4 lg:w-[300px] h-full"
        >
          <p className="text-[#C80FB0] text-4xl ">chat</p>
          <p className="text-white text-xl pt-4">
            users who buys an artificial intelligence can talk to it as if
            it were the person they bought the artificial intelligence from.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
