import Image from "next/image";


import Typewriter from "typewriter-effect";



const orb = Outfit({ weight: "600", subsets: ["latin"] });

import { Outfit } from "next/font/google";
import About from "@/components/About";
import Token from "@/components/Token";
export default function Home() {
  return (
    <main
      className={`flex min-h-full flex-col bg-[#0F0F0F] items-center justify-center px-4 md:px-64 `}
    >
      <Image
        src="/assets/back5.svg"
        width={1000}
        height={600}
        className=" md:w-[1200px] absolute z-0 md:left-0 right-0  top-[100px]  "
      ></Image>

      <div className="flex  flex-col pt-4">
        <div className="flex  px-4  w-full items-center justify-center ">
          <div className="w-full md:px-0 ml-[-150px] mt-[-40px]  flex flex-col justify-start items-start">
        
            
              <Image
                src="/assets/ball.svg"
                width={200}
                height={200}
                className="md:w-[200px] w-[100px] mt-[50px]  md:mt-[0px] md:ml-[0px] ml-[200px]  md:mr-[300px]   "
              ></Image>
       
            <Image
              src="/assets/star.svg"
              width={200}
              height={200}
              className="md:w-[200px] w-[80px] mt-[200px]  md:mt-[250px] md:ml-[100px] ml-[200px]  md:mr-[300px]   "
            ></Image>
          </div>
          <div className="z-10   text-[50px] md:text-[80px]  text-white h-full  flex flex-col w-full md:justify-start md:items-start ">
            <div className={orb.className}>
              be
              <span className="text-[#C80FB0]">
                <Typewriter
                  options={{
                    strings: ["social", "secure", "fast", "private"],
                    autoStart: true,
                    loop: true,
                  }}
                ></Typewriter>
              </span>
              with fanly<span className="text-[#C80FB0]">AI</span>
            </div>
          </div>

          <div className="w-full md:px-0 ml-[-150px] mt-[-40px]  lg:flex justify-start items-start">
            <Image
              src="/assets/abs.svg"
              width={200}
              height={200}
              className="md:w-[200px] w-[80px] mt-[100px] ml-[100px]  "
            ></Image>
          </div>
         {/*  <Image
              src="/assets/maka.svg"
              width={650}
              height={200}
              className="absolute xl:w-[600px] w-[300px]  xl:right-0 hidden xl:block  bottom-0  "
            ></Image> */}
        </div>
      </div>
      <About></About>
      <Token></Token>
    </main>
  );
}
