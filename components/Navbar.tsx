/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="">
      <nav className=" z-40 w-full pt-6 ">
        <div className="px-3 md:px-16 py-3 rounded-full  flex flex-row items-center h-fit bg-opacity-50 pt-4 mx-[35%] bg-slate-100  duration-500">
          <a href="home">
            <img src="Ja.svg" className="" alt="logo" />
          </a>
          <div className="flex-row ml-4 gap-7 space-x-4 border-0">
            <Link href="about" className="text-headline">
              ABOUT ME
            </Link>
            <Link href="#">MY WORKS</Link>
            <Link href="#">CONTACT ME</Link>
          </div>
          <img
            src="toggle-lite.svg"
            height="26.5px"
            width="52.5px"
            alt=""
            className=""
          />
        </div>
      </nav>
    </div>
  );
}
