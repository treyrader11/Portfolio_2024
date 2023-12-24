import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Header() {
  return (
    <div
      className={cn(
        "fixed left-0 top-0",
        "flex gap-[15px]",
        "p-[40px]",
        "h-[30px]"
      )}
    >
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
