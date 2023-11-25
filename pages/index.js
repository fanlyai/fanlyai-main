


const orb = Outfit({ weight: "600", subsets: ["latin"] });

import { Outfit } from "next/font/google";

import Train from "../containers/Train";
import Vuzz from "../containers/Vuzz";
import Services from "@/containers/Services";
import Revolution from "@/containers/Revolution";
import Unleash from "@/containers/Unleash";
import Social from "@/containers/Social";
export default function Home() {
  return (
    <main
      className={`flex min-h-full flex-col bg-black text-white items-center justify-center px-4 md:px-24 lg:px-48 `}
    >
  <Train></Train>
  <Vuzz></Vuzz>
 
  <Services></Services> 
  <div className="absolute left-0 top-0 h-full w-full overflow-hidden ">
        <div className="absolute left-1/2 top-16 ml-[-2000px] h-[4000px] w-[4000px] rounded-full bg-transparent shadow-[0px_10px_100px_0px_rgba(255,255,255)] "></div>
</div>
  <Social></Social>
  <Revolution></Revolution>
  <Unleash></Unleash>
    </main>
  );
}
