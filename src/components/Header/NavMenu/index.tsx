"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../animation";
// import Footer from "./Footer";
import NavLink from "./NavLink";
import { cn } from "@/lib/utils";
// import Footer from "@/components/Footer";
import Curve from "./Curve";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const navLinkClass = {
  base: "h-screen bg-[#292929] fixed right-0 top-0 z-[3]",
  body: cn("h-full p-[100px] flex flex-col justify-between"),
  nav: cn("flex flex-col text-[56px] gap-[12px] mt-[80px]"),
  header: cn(
    "text-[#999999] border-[1px] border-b-[#999999] uppercase text-[11px] mb-[40px]"
  ),
  indicator: cn(
    "absolute -left-[30%]",
    "w-[10px] h-[10px]",
    // "transition-transform duration-200 ease-in-out transform scale-0 -translate-x-1/2",
    "bg-white rounded-[50%]"
  ),
};

export default function NavMenu() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={navLinkClass.base}
    >
      <div className={navLinkClass.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={navLinkClass.nav}
        >
          <div className={navLinkClass.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
                className="text-white"
              />
            );
          })}
        </div>
        {/* <Footer /> */}
      </div>
      <Curve />
    </motion.div>
  );
}
