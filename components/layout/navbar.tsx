"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/solution", label: "Solution" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex justify-center relative">
      <nav className="flex mw items-center bg-[#0000001A] backdrop-blur-[50px] py-[20px] px-[80px] w-full justify-between">
        <Link href={"/"}>
          <Image
            loading="lazy"
            src="/enet-logo-nav.png"
            alt="navbar logo"
            width={160}
            height={51}
          />
        </Link>

        <div className="flex flex-row items-center gap-12 font-normal text-[18px] leading-[100%] tracking-[0%] capitalize text-white">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${
                pathname === item.href
                  ? "font-bold uppercase"
                  : "font-normal capitalize"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href={"#"}
          className="py-[12px] px-[26px] border border-white rounded-[8px] font-bold text-[18px] leading-[100%] tracking-[0%] text-white"
        >
          Book a Call
        </Link>
      </nav>
    </header>
  );
}
