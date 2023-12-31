import { Inter } from "next/font/google";
import Head from "next/head";
import Hero from "@/components/Hero";
import Curve from "@/components/Layout/Curve";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Trey's portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Curve backgroundColor={"#B0AD98"}>
        <Hero />
        <About />
        <Skills />
        <Testimonials />
        <Contact />
        <Footer />
      </Curve>
    </>
  );
}
