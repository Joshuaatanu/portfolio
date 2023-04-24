import Navbar from "@/components/Navbar";
import React from "react";

export default function home() {
  return (
    <div className="hero-img h-full  w-full">
      <Navbar />
      <div className="px-16">
        <h3 className="text-white text-[128px]">
          Making magic <br />
          happen <span className="text-"></span>
        </h3>
      </div>
    </div>
  );
}
