import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins, Playfair_Display } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});
const playfair = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} ${playfair.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
