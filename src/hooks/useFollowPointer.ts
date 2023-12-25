import { useState, useEffect, RefObject } from "react";

type Point = {
  x: number;
  y: number;
};

export default function useFollowPointer(ref: RefObject<HTMLElement>): Point {
  const [point, setPoint] = useState<Point>({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current;

      if (element) {
        const x = clientX - element.offsetLeft - element.offsetWidth / 2;
        const y = clientY - element.offsetTop - element.offsetHeight / 2;
        setPoint({ x, y });
      }
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [ref]);

  return point;
}
