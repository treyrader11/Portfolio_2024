import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { opacity, expand } from "./animation";
import { cn } from "@/lib/utils";

type LayoutProps = {
  children: ReactNode;
  backgroundColor?: string;
};

export default function Stairs({ children, backgroundColor }: LayoutProps) {
  const stairsClass = {
    base: cn(backgroundColor),
    transitionBackground: cn(
      "fixed z-[1] top-0 left-0",
      "h-screen w-full",
      "pointer-events-none"
    ),
    transitionContainer: cn(
      "fixed left-0 top-0 z-[2]",
      "w-screen h-screen",
      "flex",
      "pointer-events-none"
    ),
  };
  const anim = (variants: Variants, custom: any = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  const nbOfColumns = 5;
  return (
    <div className={stairsClass.base}>
      <motion.div
        {...anim(opacity)}
        className={stairsClass.transitionBackground}
      />
      <div className={stairsClass.transitionContainer}>
        {[...Array(nbOfColumns)].map((_, i) => {
          return (
            <motion.div
              className="relative h-full w-full bg-black"
              key={i}
              {...anim(expand, nbOfColumns - i)}
            />
          );
        })}
      </div>
      {children}
    </div>
  );
}
