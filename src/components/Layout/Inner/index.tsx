import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { slide, opacity, perspective } from './animation';

type InnerProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
};

export default function Layout({
  children,
  backgroundColor,
  className,
}: InnerProps) {
  const innerClass = {
    inner: cn(
      "bg-black p-[40px] min-h-[calc(100vh_-_80px)]",
      backgroundColor,
      className
    ),
    page: cn("bg-white"),
    slide: cn(
      "fixed top-0 left-0 z-[1]",
      "w-screen h-screen",
      "bg-white"
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

  return (
    <div className={innerClass.inner}>
      <motion.div {...anim(slide)} className={innerClass.slide} />
      <motion.div className={innerClass.page} {...anim(perspective)}>
        <motion.div {...anim(opacity)} className={innerClass.page}>
          <Header />
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
