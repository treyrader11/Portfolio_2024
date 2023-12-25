"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { scale, slide } from "../animation";

const navLinkClass = {
  base: "relative flex items-center",
  indicator: cn(
    "absolute -left-[30%]",
    "w-[10px] h-[10px]",
    // "transition-transform duration-200 ease-in-out transform scale-0 -translate-x-1/2",
    "bg-white rounded-[50%]"
  ),
};

type Data = {
  title: string;
  href: string;
  index: number;
};
type NavLinkProps = {
  data: Data;
  isActive: boolean;
  setSelectedIndicator?: any;
  className?: string;
};
export default function NavLink({
  data,
  isActive,
  setSelectedIndicator,
  className,
}: NavLinkProps) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={navLinkClass.base}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={navLinkClass.indicator}
      ></motion.div>
      <Link href={href} className={className}>
        {title}
      </Link>
    </motion.div>
  );
}
