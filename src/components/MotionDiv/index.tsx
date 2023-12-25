"use client";

import { useEffect, useState, ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { text, curve, translate } from "./animation";

const anim = (variants: Variants) => {
  console.log("Variants props", variants);
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

const motionClass = {
  base: cn("p-[40px] min-h-screen"),
};

type MotionDivProps = {
  children: ReactNode;
  backgroundColor?: string;
};

export default function MotionDiv({
  children,
  backgroundColor,
}: MotionDivProps) {
  return <motion.div {...anim(text)}>{children}</motion.div>;
}
