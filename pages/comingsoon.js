const out = Outfit({ weight: "300", subsets: ["latin"] });
const out6 = Outfit({ weight: "600", subsets: ["latin"] });
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

import { Outfit } from "next/font/google";

export default function comingsoon() {
  return (
    <div className="min-h-screen mt-[-110px] flex justify-center items-center">
      <div className="text-center text-black flex flex-col ">
        <p>Wait for the revolution</p>
        <p className={`w-full capitalize text-3xl md:text-4xl pt-2 ${out6.className}`}>
          All Features Will be Live Soon
        </p>
        <p className="pt-6 md:px-12 lg:px-48">
          Discover the power of training, sharing, and utilizing artificial
          intelligence on the VuzzAI platform. With VuzzAI, you can unleash
          the potential of AI and connect with a vibrant community of AI
          enthusiasts.
        </p>
      </div>
    </div>
  );
}
