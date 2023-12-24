import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

type InnerProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
};

export default function Inner({
  children,
  backgroundColor,
  className,
}: InnerProps) {
  const innerClass = {
    base: cn("bg-black", backgroundColor, className),
    page: cn("bg-white"),
    slide: cn(
      "fixed top-0 left-0 z-[1]",
      "w-screen h-screen",
      "bg-red-600"
      // "bg-white"
    ),
  };

  const anim = (variants: Variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 1,
    },
  };

  const slide = {
    initial: {
      top: "100vh",
    },
    enter: {
      top: "100vh",
    },
    exit: {
      top: "0",
    },
  };

  return (
    <div className={innerClass.base}>
      <div {...anim(slide)} className={innerClass.slide} />
      <motion.div {...anim(opacity)} className={innerClass.page}>
        {children}
      </motion.div>
    </div>
  );
}
