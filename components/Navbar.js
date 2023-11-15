import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Outfit } from "next/font/google";

import logo from "../public/assets/logo1.png";

const outfit = Outfit({ weight: "400", subsets: ["latin"] });

export default function Navbar() {
  return (
    <div className="z-10">
      <nav className="w-screen bg-[#0F0F0F] z-10  ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl items-center flex ">
          <div>
            <div className="flex w-full items-center justify-between py-3 md:py-5 ">
              <div className="flex items-center">
                <Image src={logo} width={200} />
              </div>
            </div>
          </div>
          <div>
            <div className={outfit.className}>
              <div>
                <div className="items-center flex   justify-between  space-x-2 md:space-y-0">
                  <div className="text-white cursor-pointer text-center text-xs md:text-base font-medium  leading-relaxed">
                    

                    <div className="cursor-pointer border-[#C80FB070] bg-transparent md:px-6 hover:bg-[#ffffff10] p-2 border rounded-xl text-xs md:text-base">
                      <Link href="https://presale.fanlyai.com">private sale</Link>
                    </div>
                  </div>
                  <div className="text-white cursor-pointer border-[#C80FB070] md:px-6 p-2 border hover:bg-[#ffffff10] rounded-xl  text-center text-xs md:text-base">
                    <Link href="https://chat.fanlyai.com">FAIN bot</Link>
                  </div>
                  <div className="cursor-pointer text-white border-[#C80FB070] md:px-6 p-2 border hover:bg-[#ffffff10] rounded-xl text-center text-xs md:text-base ">
                      <Link href="https://whitepaper.fanlyai.com">
                        whitepaper
                      </Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/12"></div>
      </nav>
    </div>
  );
}
