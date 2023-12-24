"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import { text, curve, translate } from "./animation";
import { cn } from "@/lib/utils";

type RouteObject = {
  [key: string]: string;
};

type Dimensions = {
  width: number | null;
  height: number | null;
};

type CurveProps = {
  children: React.ReactNode;
  backgroundColor?: string;
};

const routes: RouteObject = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
};

const anim = (variants: Variants) => {
  console.log("Variants props", variants);
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};


console.log('anim function:', {...anim(text)});
const curveClass = {
  curve: cn("p-[40px] min-h-screen"),
  background: cn(
    "fixed left-0 top-0",
    "w-screen",
    "h-[calc(100vh_+_600px)]",
    "pointer-events-none",
    "bg-black"
    // "transition-opacity duration-0 ease-linear delay-100"
  ),
  route: cn(
    "absolute left-[50%] top-[40%]",
    "text-white text-[46px] z-[3] text-center",
    "transform translate-x-[-50%]"
  ),
};

export default function Curve({ children, backgroundColor }: CurveProps) {
  const router = useRouter();
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={curveClass.curve} style={{ backgroundColor }}>
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className={curveClass.background}
      />
      <motion.p className={curveClass.route} {...anim(text)}>
        {routes[router.route]}
      </motion.p>
      {dimensions.width != null && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

type SVGProps = {
  height: number | null;
  width: number | null;
};

function SVG({ height, width }: SVGProps) {
  if (width === null || height === null) {
    return null;
  }
  const initialPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height! + 300}
        Q${width / 2} ${height! + 600} 0 ${height! + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width! / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg {...anim(translate)} className={curveClass.background}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
}
