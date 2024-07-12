"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";


import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className={`flex justify-between items-center p-8 mb-12`}>
      <div
        className={`flex justify-between items-center  w-4/5 lg:w-7/12 gap-4 max-w-[34rem] lg:max-w-full`}
      >
        <h1 className="text-[#140000] hover:scale-105 transi text-4xl">
          <Link href={`/`}>LOGO</Link>
        </h1>
        <div className="hidden md:flex items-center gap-5 text-lg text-[#310E0E] tracking-wider">
          <Link href={"/"} className="hover:scale-105 transition-all">Home</Link>
          <Link href={"/"} className="hover:scale-105 transition-all">Contact Us</Link>
          <Link href={"/"} className="hover:scale-105 transition-all">About Us</Link>
        </div>
      </div>
      <div>
        <Link href={"/"} className="hidden md:inline-block">
          <button className="hover:text-zinc-100 hover:bg-[#828282] font-[500] transition-all px-4 py-1 rounded-full border-[2px] border-[#828282]">
            Login
          </button>
        </Link>
        <div className="md:hidden">
          <Popover>
            <PopoverTrigger className="flex justify-center items-center text-[#310E0E]">
              <GiHamburgerMenu className="text-[#310E0E]" size={30} />
            </PopoverTrigger>
            <PopoverContent className="font-semibold rounded-2xl md:hidden border-2 border-white text-white bg-[#310E0E] gap-1 mr-7 flex flex-col w-auto text-lg  tracking-wider">
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Contact Us</Link>
              <Link href={"/"}>About Us</Link>
              <Link href={`/`} className="mt-3">
                <button className="w-full py-1 rounded-full border-[2px] border-[#828282]">
                  Login
                </button>
              </Link>
            </PopoverContent>
          </Popover>

        </div>
      </div>
    </nav>
  );
}
