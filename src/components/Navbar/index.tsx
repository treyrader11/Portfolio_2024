import { cn, scrollTo } from "@/lib/utils";
import Link from "next/link";
import Magnetic from "../common/Magnetic";
import { routes } from "./routes";

const navClass = {
  base: "flex",
  navItem: "flex flex-col relative z-[1] p-[15px] text-white cursor-pointer",
  indicator: cn(
    "top-[45px] absolute left-[50%]",
    "w-[5px] h-[5px]",
    "transition-transform duration-200 ease-in-out transform scale-0 -translate-x-1/2",
    "bg-white rounded-1/2"
  ),
};
export default function Navbar() {
  return (
    <nav className={navClass.base}>
      {routes.map(({ label, href }) => (
        <Magnetic key={href} onClick={() => scrollTo(label)}>
          <div className={navClass.navItem}>
            <Link href={href}>{label}</Link>
            {/* <a>{label}</a> */}
            <div className={navClass.indicator}></div>
          </div>
        </Magnetic>
      ))}
    </nav>
  );
}
