"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import Magnetic from "./Magnetic";
import { cn } from "@/lib/utils";

type RoundedButtonProps = {
  children: ReactNode;
  backgroundColor?: string;
  className?: string;
  onClick?: () => void;
};

const buttonClass = {
  base: cn(
    "relative py-[15px] px-[60px]",
    "rounded-[3em] border-[1px] border-[#888888]",
    "cursor-pointer",
    "flex items-center justify-center"
  ),
  circle: "w-full h-[150%] absolute rounded-[50%] top-full",
};

export default function RoundedButton({
  children,
  backgroundColor = "#455CE9",
  className,
  ...attributes
}: RoundedButtonProps) {
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });

    if (circle.current) {
      timeline.current
        .to(
          circle.current,
          { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
          "enter"
        )
        .to(
          circle.current,
          { top: "-150%", width: "125%", duration: 0.25 },
          "exit"
        );
    }
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    if (timeline.current) {
      timeline.current.tweenFromTo("enter", "exit");
    }
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      if (timeline.current) {
        timeline.current.play();
      }
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={cn(buttonClass.base, className)}
        style={{ overflow: "hidden" }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className={buttonClass.circle}
        ></div>
      </div>
    </Magnetic>
  );
}
