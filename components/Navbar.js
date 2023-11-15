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
                <div className="items-center flex   justify-between  space-x-6 md:space-y-0">
                  <div className="text-white text-base font-medium capitalize leading-relaxed">
                    

                    <div className="cursor-pointer">
                      <Link href="https://presale.fanlyai.com">Presale</Link>
                    </div>
                  </div>
                  <div className="text-white cursor-pointer text-base">
                    <Link href="https://chat.fanlyai.com">Demo</Link>
                  </div>
                  <div className="cursor-pointer text-white ">
                      <Link href="https://whitepaper.fanlyai.com">
                        Whitepaper
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
