"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { cn } from "@/lib/utils";
import Navbar from "../Navbar";
import RoundedButton from "../common/RoundedButton";

const headerClass = {
  base: cn(
    "justify-between flex items-center",
    "absolute z-[1] top-0",
    "text-white font-base",
    "p-[35px] w-full "
  ),
  logo: "flex cursor-pointer",
  copyright: "transform rotate-360",
  button: cn(
    "flex items-center justify-center",
    "relative",
    "m-5 w-[80px] h-[80px] rounded-[50%] bg-[#1c1d20]",
    "cursor-pointer"
  ),
  burger: {
    base: cn("w-full relative z-[1]", ""),
    after: "",
    before: "",
    isActive: cn("transform  rotate-45", "-top-[1px]"),
  },
};

<span className="after:content-['*'] block h-[1px] after:w-[40%] after:m-auto after:ng-white after:relative transition-transform duration-300"></span>;

export default function Header() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scale: 0,
      duration: 0,
    });

    const scrollTrigger = {
      trigger: document.documentElement,
      start: 0,
      end: window.innerHeight,
      onLeave: () => {
        gsap.to(button.current, {
          scale: 1,
          duration: 0.25,
          ease: "power1.out",
        });
      },
      onEnterBack: () => {
        gsap.to(button.current, {
          scale: 0,
          duration: 0.25,
          ease: "power1.out",
          onComplete: () => {
            setIsActive(false);
          },
        });
      },
    };

    gsap.to(button.current, { scrollTrigger });
  }, []);

  return (
    <>
      {/* <div ref={header} className={headerClass.base}>
        <div className={headerClass.logo}>
          <p className={headerClass.copyright}>©</p>
          <div className="pr-[30px]">
            <p className="transform -translate-x-full">Code by</p>
            <p className="transform -translate-x-[65px]">Trey</p>
            <p className="transform -translate-x-[82.5px]">Rader</p>
          </div>
        </div>
      </div> */}
      <div ref={button} className="transform scale-0 fixed right-0 z-[4]">
        <RoundedButton
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={headerClass.button}
        >
          <div
            className={cn(
              headerClass.burger,
              `${isActive ? headerClass.burger.isActive : ""}`
            )}
          ></div>
        </RoundedButton>
      </div>
      <AnimatePresence mode="wait">{isActive && <Navbar />}</AnimatePresence>
    </>
  );
}
