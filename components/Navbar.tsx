/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="">
      <nav className=" z-40 w-full pt-6">
        <div className="px-3 md:px-16 py-3 rounded-full w-[1026px]  flex flex-row items-center h-fit bg-opacity-50 pt-4 mx-[20%] bg-slate-100  duration-500">
          <a href="/">
            <img src="Ja.svg" className="" height="36px" width="37px" alt="logo" />
          </a>
          <div className="flex-row ml-[20%] gap-7 space-x-28 border-0">
            <Link href="about"   className=" text-zinc-600 hover:text-gray-300  text-poppins  transition"> ABOUT ME</Link>
            <Link href="work"  className=" text-zinc-600 hover:text-gray-300 text-poppins transition">MY WORKS</Link>
            <Link href="#"  className=" text-zinc-600 hover:text-gray-300 text-poppins transition">CONTACT ME</Link>
          </div>
          <img
            src="toggle-lite.svg"
            height="26.5px"
            width="52.5px"
            alt=""
            className="ml-[13%]"
          />
        </div>
      </nav>
    </div>
  );
}
