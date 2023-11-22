const out = Outfit({ weight: "300", subsets: ["latin"] });
const out6 = Outfit({ weight: "600", subsets: ["latin"] });
import { motion } from "framer-motion";

import { Outfit } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export default function Train() {
  return (
    <div
      className={`bg-black flex text-white flex-col ${out.className}  h-full md:h-screen justify-center items-center`}
    >
      <div className="flex flex-col md:flex-row px-8 justify-center items-center md:px-12 md:space-x-4 my-16">
        <p className={`w-full text-3xl md:text-5xl  ${out6.className}`}>
          train and share your own AI with fanlyAI
        </p>
        <div className="w-full flex flex-col pt-4 md:pt-0">
          <p>
            Unlock the power of artificial intelligence with fanlyAI. Train your
            own AI models and share them with the community to make a
            difference.
          </p>
          <div className="flex space-x-4 mt-2">
            <Link href="/comingsoon">
            <button  className="border border-white flex text-white bg-black justify-center items-center p-2 w-32">
              get started
            </button></Link>
            <Link href="https://whitepaper.fanlyai.com" target="_blank">
            <button className="border border-white bg-white text-black flex justify-center items-center p-2 w-32">
              learn more
            </button></Link>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        <Image
          src="/hero.png"
          width={1000}
          className="rounded-3xl mb-12"
          height={500}
        ></Image>
      </motion.div>
    </div>
  );
}