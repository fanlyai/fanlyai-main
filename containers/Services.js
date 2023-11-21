const out = Outfit({ weight: "300", subsets: ["latin"] });
const out6 = Outfit({ weight: "600", subsets: ["latin"] });
import { motion } from "framer-motion";

import { Outfit } from "next/font/google";
import Image from "next/image";

export default function Services() {
  return (
    <div
      className={`bg-black text-white flex md:flex-row flex-col ${out.className} space-x-10 w-full  min-h-full py-12 justify-center items-center`}
    >
      <motion.div  initial={{ opacity: 0, scale: 0.5 , x:-100 }}
      transition={{ ease: "easeOut", duration:0.3 }}
      
        whileInView={{ opacity: 1, scale: 1, x:0 }} className="w-full flex justify-center">
        <Image
          src="/aifanly.png"
          width={600}
          height={600}
          className="rounded-3xl"
        ></Image>
      </motion.div>

      <div className="flex flex-col space-y-8">
        <div className="border-l-2 hover:bg-[#EFDFEF] hover:text-black rounded-r-lg border-white px-6">
          <p className={`w-full text-2xl  ${out6.className}`}>
            Profit from AI creations
          </p>
          <p className="pt-2">
            With fanlyAI, AI trainers can monetize their creations and earn
            profits by sharing their artificial intelligences with others. This
            provides a unique opportunity for trainers to turn their expertise
            into a sustainable source of income.
          </p>
        </div>
        <div className="border-l-2 hover:bg-[#EFDFEF] hover:text-black rounded-r-lg border-white px-6">
          <p className={`w-full text-2xl  ${out6.className}`}>
            Access to AI services
          </p>
          <p className="pt-2">
            By using $FAIN tokens, AI trainers gain access to a wide range of AI
            services offered by other users on the fanlyAI platform. This allows
            trainers to leverage the expertise of others and enhance their own
            AI creations.
          </p>
        </div>
        <div className="border-l-2 hover:bg-[#EFDFEF] hover:text-black rounded-r-lg border-white px-6">
          <p className={`w-full text-2xl  ${out6.className}`}>
            Connect with AI community
          </p>
          <p className="pt-2">
            fanlyAI provides a vibrant community of AI trainers, offering
            opportunities to connect, collaborate, and learn from like-minded
            individuals. By joining the fanlyAI community, trainers can expand
            their network and stay updated with the latest advancements in AI.
          </p>
        </div>
      </div>
    </div>
  );
}
