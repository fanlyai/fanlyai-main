


const orb = Outfit({ weight: "600", subsets: ["latin"] });

import { Outfit } from "next/font/google";

import Train from "../containers/Train";
import Vuzz from "../containers/Vuzz";
import Services from "@/containers/Services";
import Revolution from "@/containers/Revolution";
import Unleash from "@/containers/Unleash";
export default function Home() {
  return (
    <main
      className={`flex min-h-full flex-col bg-black text-white items-center justify-center px-4 md:px-24 lg:px-48 `}
    >
  <Train></Train>
  <Vuzz></Vuzz>
  <Services></Services>
  <Revolution></Revolution>
  <Unleash></Unleash>
    </main>
  );
}
