/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Footer } from "@/components/Footer";
import Meta from "@/components/Meta";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";
const title: string = "about";
export default function about() {
  return (
    <div>
      <Head>
        <Meta />
      </Head>

      <section>
        <div className='h-[1020px]   w-full bg-[url("/hero-bg.png")] bg-cover bg-no-repeat bg-center '>
          <div className="    ">
            <Navbar />

            <div className="px-16 mb-[100px]">
              <h3 className="text-white text-[100px] text-playfair">
                Passionate about <br />
                creating &nbsp;
                <span className="text-playfair-italic font-semibold ">
                  meaningful design <br /> solutions
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
                Who am I?{" "}
              </h1>
              <p className="text-[32px] text-poppins  ml-3 font-light">
                I’m Joshua Atanu, a web developer who is passionate about
                creating amazing <br /> digital experiences. I specialize in
                developing custom websites that are both <br /> functional and
                visually stunning. I have the skills and expertise to bring your
                vision <br /> to life. So take a look around and let's get
                started on your next web project!
              </p>
            </section>
            <section className="pt-20 bg-white px-16 mb-[75px] ">
              <h1 className="text-[96px] text-gray-950 text-playfair-italic font-bold">
                {" "}
                How can i help you?
              </h1>
              <div className="flex flex-row space-x-56 mt-10 ">
                <div className="w-[372px] h-[243px] ">
                  <p className="text-poppins font-light italic text-[24px]">
                    01
                  </p>
                  <hr className="mt-3 " />
                  <h3 className="text-playfair-italic text-[32px]">
                    Web development
                  </h3>
                  <p className="text-poppins font-light  text-[16px]">
                    I develop custom websites and web <br /> applications from
                    scratch using a variety of <br /> programming languages and
                    frameworks. <br />
                    From landing pages to complex web <br /> applications, I can
                    help you create a web <br /> presence that is tailored to
                    your needs and <br />
                    goals.
                  </p>
                </div>

                <div className="w-[372px] h-[243px] ">
                  <p className="text-poppins font-light italic text-[24px]">
                    02
                  </p>
                  <hr className="mt-3 " />
                  <h3 className="text-playfair-italic text-[32px]">
                    Web Design
                  </h3>
                  <p className="text-poppins font-light  text-[16px]">
                    I also offer web design services, which include <br />{" "}
                    creating custom designs that are visually <br /> appealing,
                    user-friendly, and optimized for <br /> conversion. Whatever
                    you may need, I can <br />
                    help you create a design that aligns with your <br /> brand
                    and achieves your goals.
                  </p>
                </div>

                <div className="w-[372px] h-[243px] ">
                  <p className="text-poppins font-light italic text-[24px]">
                    03
                  </p>
                  <hr className="mt-3 " />
                  <h3 className="text-playfair-italic text-[32px]">
                    Mobile Development
                  </h3>
                  <p className="text-poppins font-light  text-[16px]">
                    In addition to web development, I also offer <br /> mobile
                    development services. I can help you <br /> develop mobile
                    applications that are <br /> compatible with both iOS and Android
                    platforms.
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-20 bg-white px-16 ">
              <h1 className="text-[96px] text-gray-950 text-playfair-italic font-bold">
                {" "}
                let’s collaborate{" "}
              </h1>
              <p className="text-[32px] text-poppins font-light">
                I'd love to hear about your web project and <br /> chat about
                how we can collaborate to bring your ideas to <br /> life. Feel
                free to reach out to me anytime and let's start <br /> the
                conversation!
              </p>
              <button className="bg-black text-white rounded-full font-medium text-poppins flex px-5 py-2 ">
                CONTACT ME{" "}
                <img src="ARROW-white.svg" alt="" className="h-6 ml-5   w-5" />
              </button>
            </section>
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}
