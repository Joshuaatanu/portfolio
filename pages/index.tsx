import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container-snap">
      <Head>
        
      </Head>
      <Hero />
    </div>
  );
}
