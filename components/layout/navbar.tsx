"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  // { href: "/solution", label: "Solution" },
  // { href: "/blog", label: "Blog" },
  // { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex justify-center relative">
      <nav className="flex mw items-center bg-[#0000001A] backdrop-blur-[50px] py-3 md:py-5 px-[30px] lg:px-20 w-full justify-between">
        <Link href={"/"}>
          <Image
            loading="lazy"
            src="/enet-logo-nav.png"
            alt="navbar logo"
            width={160}
            height={51}
            className="w-[75px] h-6 lg:w-[160px] lg:h-[51px] flex-shrink-0"
          />
        </Link>

        <div className="hidden lg:flex flex-row items-center gap-12 font-normal text-[18px] leading-[100%] tracking-[0%] capitalize text-white">
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
          className="hidden lg:block py-[12px] px-[26px] border border-white rounded-[8px] font-bold text-[18px] leading-[100%] tracking-[0%] text-white"
        >
          Book a Call
        </Link>

        <div className="lg:hidden">
          <svg
            width="18"
            height="11"
            viewBox="0 0 18 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.8984 0.930892L1.89844 0.9375"
              stroke="white"
              strokeWidth="1.875"
              strokeLinecap="round"
            />
            <path
              d="M16.9004 5.43089L1.90039 5.4375"
              stroke="white"
              strokeWidth="1.875"
              strokeLinecap="round"
            />
            <path
              d="M16.9023 9.93089L1.90234 9.9375"
              stroke="white"
              strokeWidth="1.875"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}
