/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Navbar";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className='h-[1020px]   w-full bg-[url("/hero-bg.png")] bg-cover bg-no-repeat bg-center '>
      <div className="    ">
        <Navbar />

        <div className="px-16 mb-[100px]">
          <h3 className="text-white text-[100px] text-playfair">
            Making magic <br />
            happen{" "}
            <span className="text-playfair-italic font-semibold ">
              behind the <br /> scenes
            </span>
          </h3>

          <hr className="p-6 mt-10" />
          <button className="bg-black text-white rounded-full font-medium text-poppins flex px-5 py-2 ">
            LET’S START A PROJECT{" "}
            <img src="ARROW-white.svg" alt="" className="h-6 ml-5   w-5" />
          </button>
        </div>
        <section className="pt-20 bg-white px-16 mb-[75px] ">
          <h1 className="text-[96px] text-gray-950 text-playfair-italic font-bold">
            {" "}
            I'm Joshua ...{" "}
          </h1>
          <p className="text-[40px] text-poppins font-light">
            a web & mobile developer. Browse through my <br /> selected projects
            and watch code being brought to <br /> life, one project at a time.
          </p>
        </section>
        <div className="space-y-3">
          <section className=" flex mt-10 flex-row justify-center items-center space-x-3 px-16">
            <div className=" w-[502px] h-[550px] bg-black rounded-3xl "></div>
            <div className=" w-[502px] h-[550px] bg-black rounded-3xl "></div>
            <div className=" w-[502px] h-[550px] bg-black rounded-3xl "></div>
          </section>
          <section className="flex mt-5 flex-row justify-center items-center space-x-3 px-16">
            <div className="w-[764px] h-[550px]  rounded-3xl">
              <img src="/netflix-clone.png" className="rounded-3xl" alt="" />
            </div>
            <div className="w-[764px] h-[550px] bg-zinc-500 rounded-3xl"></div>
          </section>
        </div>

        <section className="pt-20 bg-white px-16 ">
          <h1 className="text-[96px] text-gray-950 text-playfair-italic font-bold">
            {" "}
            let’s collaborate{" "}
          </h1>
          <p className="text-[40px] text-poppins font-light">
            I'd love to hear about your web project and <br /> chat about how we
            can collaborate to bring your ideas to <br /> life. Feel free to
            reach out to me anytime and let's start <br /> the conversation!
          </p>
        </section>
        <Footer/>
     
      </div>
    </div>
  );
}
