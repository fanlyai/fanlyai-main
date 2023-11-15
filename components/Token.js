import {  Orbitron } from "next/font/google";
import Image from "next/image";

const orb = Orbitron({ weight: "500", subsets: ["latin"] });

export default function Token() {
  return (
    <div
      className={`flex flex-col  items-center  my-24 md:gap-12  justify-center   ${orb.className}`}
    >
      <Image
        src="/assets/light.png"
        width={400}
        height={300}
        className="w-[200px] md:w-[500px] absolute   top-[2200px] md:top-[600px] left-0 "
      ></Image>
      <div className="flex flex-col md:flex-row items-center">
        <div
          className={`md:min-w-[00px] md:space-x-20 h-full bg-[#C80FB020] items-center  rounded-3xl p-12 justify-center flex md:flex-row flex-col  ${orb.className}`}
        >
          <div>
            <p className="text-5xl text-[#C80FB0]">$FAIN</p>
            <p className="text-xl text-white pt-4">
              The $FAIN token offers a new way to share and monetize your AI
              capabilities. Users can interact with other AI's on the Fanly AI
              platform using $FAIN tokens. AI owners can make profit from these
              payments. This creates an ecosystem where Fanly AI provides real
              value to participants by facilitating interactions and financial
              rewards.
            </p>{" "}
          </div>
          <Image src="/assets/test4.png" width={200} height={200}></Image>
        </div>
      </div>
    </div>
  );
}
