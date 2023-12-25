"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import man from "/public/man.png";
import externalLinkIcon from "/public/external-link-icon.png";
import gmailIcon from "/public/email-icon.png";
import Image from "next/image";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import { cn, scrollTo } from "@/lib/utils";
import useFollowPointer from "@/hooks/useFollowPointer";
import Magnetic from "../common/Magnetic";
import Navbar from "../Navbar";
import RoundedButton from "../common/RoundedButton";

const heroClass = {
  base: "",
  navItem: "flex flex-col relative z-[1] p-[15px] text-white cursor-pointer",
  indicator: cn(
    "top-[45px] absolute left-[50%]",
    "w-[5px] h-[5px]",
    "transition-transform duration-200 ease-in-out transform scale-0 -translate-x-1/2",
    "bg-white rounded-1/2"
  ),
};

export default function Hero() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <div
      id="hero"
      className="w-full h-[100vh] relative bg-[#111111] overflow-hidden"
    >
      <motion.span
        ref={ref}
        animate={{ x, y }}
        className="hidden md:block sec-1-bg-gradient-1-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute md:left-[1000px] 2xl:left-[1309px] -top-[709px]"
      />
      <span className="hidden md:block sec-1-bg-gradient-2-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute left-[105px] top-[672px] md:top-[500px] 2xl:top-[672px]" />
      <span className="md:hidden sec-1-bg-gradient-1-mobile absolute w-[212px] h-[211px] left-[285px] -top-[25px]" />
      <span className="md:hidden sec-1-bg-gradient-2-mobile absolute w-[636px] h-[635px] -left-[334px] top-[672px]" />

      <MaxWidthWrapper>
        <motion.div
          className="hidden md:flex items-center justify-between mt-[40px] 2xl:mt-[63px] relative"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div className="flex items-center gap-[6px]">
            <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
              <Image src={gmailIcon} alt="" className="w-[18px]" />
            </div>
            <div className="text-white">info@treyrader.com</div>
          </div>

          <Navbar />
        </motion.div>

        <motion.div
          className="flex justify-center text-center mt-14 mb-10 relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[50px] md:text-[120px] 2xl:text-[189px] leading-[50px] md:leading-[125px]  2xl:leading-[192px] font-oswald uppercase">
            I Am A Creative
            <br className="invisible md:visible" />
            Designer
          </h1>
        </motion.div>

        <motion.div
          className="flex flex-col mb-10 text-center md:text-left text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] relative"
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        ></motion.div>

        <motion.div
          className="hidden md:flex gap-8 relative z-10"
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div className="flex items-center gap-3">
            <div className="text-[80px] font-light">80+</div>
            <div className="leading-[22px]">
              SUCCESSFULLY
              <br />
              COMPLETED
              <br />
              PROJECTS
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-[80px] font-light">15+</div>
            <div className="leading-[22px]">
              YEARS OF
              <br />
              EXPERIENCE
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-[300px] md:w-[360px] 2xl:w-[475px] absolute bottom-0 left-[50%] -translate-x-1/2"
          initial={{ y: 200, x: "-50%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={man} priority alt="" />
          <RoundedButton
            onClick={() => scrollTo("contact")}
            className={cn(
              "backdrop-blur-sm",
              "flex flex-col justify-center items-center gap-2",
              "absolute top-[140px] -right-10 2xl:top-[240px] 2xl:-right-10 w-[140px]",
              "h-[140px] rounded-full bg-white/[0.7] cursor-pointer"
            )}
          >
            <div className="">
              <Image src={externalLinkIcon} alt="" className="w-[15px]" />
              <div className="text-black whitespace-nowrap">Hire Me</div>
            </div>
          </RoundedButton>
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
}
