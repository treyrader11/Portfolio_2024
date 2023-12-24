import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Header from "@/components/Header";

export default function App({ Component, pageProps, router }: AppProps) {
  console.log("pageProps", pageProps);
  console.log("pageProps destructured:", pageProps);
  return (
    <div>
      <Header />
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
