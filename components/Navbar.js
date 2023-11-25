import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Outfit } from "next/font/google";

import logo from "../public/assets/logo1.png";

const outfit = Outfit({ weight: "200", subsets: ["latin"] });

export default function Navbar() {
  return (
    <div className="z-10">
      <nav className="w-screen bg-black z-10  ">
        <div className="justify-start px-4 mx-auto lg:max-w-7xl items-center flex ">
          <div> <Link href="/">
            <div className="flex w-full items-center justify-between py-3 md:py-2 ">
              <div className="flex items-center">
              <Image src="/vuzzAIlogo.png" width={60} height={60}></Image>
              </div>
            </div> </Link>
          </div>
          <div>
            <div className={outfit.className}>
              <div>
                <div className="items-center flex pl-8  justify-between  md:space-y-0">
                  <div className="text-white cursor-pointer text-center text-xs md:text-base font-medium  leading-relaxed">
                    

                    <div className="cursor-pointer text-white  bg-transparent md:px-6 hover:bg-[#ffffff10] rounded-xl  p-2  text-xs md:text-base">
                      <Link href="https://social.vuzz.app" target="_blank">vuzz social</Link>
                    </div>
                  </div>
                  <div className="text-white cursor-pointer  md:px-6 p-2 hover:bg-[#ffffff10] rounded-xl   text-center text-xs md:text-base">
                    <Link href="https://ai.vuzz.app">vuzz AI Tools </Link>
                  </div>
                  <div className="cursor-pointer text-white md:px-6 p-2 hover:bg-[#ffffff10]  rounded-xl text-center text-xs md:text-base ">
                      <Link href="https://whitepaper.vuzz.app">
                        whitepaper
                      </Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/12">
          
        </div>
      </nav>
    </div>
  );
}
