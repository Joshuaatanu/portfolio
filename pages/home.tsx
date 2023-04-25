/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import React from "react";

export default function home() {
  return (
    <div className='h-full  w-full bg-[url("/hero-bg.png")] bg-cover bg-no-repeat bg-center '>
      <div className="    ">
        <Navbar />

        <div className="px-16">
          <h3 className="text-white text-[128px] ">
            Making magic <br />
            happen{" "}
            <span className="text-">
              behind the <br /> scenes
            </span>
          </h3>

          <hr className="p-6 mt-10" />
          <button className="bg-white rounded-full flex px-5 py-2 ">
            LET’S START A PROJECT{" "}
            <img src="ARROW.svg" className="h-6 ml-5   w-5" />
          </button>

          <br />
          <br />
          <br />
          <br />
        </div>
        <section className="pt-20 bg-slate-50 px-16 ">
          <h1 className="text-[96px] text-gray-950 italic"> I'm Joshua ... </h1>
          <p className="text-[48px]">
            a web & mobile developer. Browse through my <br /> selected projects
            and watch code being brought to <br /> life, one project at a time.
          </p>
        </section>
        
      </div>
    </div>
  );
}
