"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header className="flex flex-col justify-center relative">
      <motion.nav
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        className="hidden lg:flex mw items-center bg-[#0000001A] backdrop-blur-[50px] py-3 md:py-5 px-[30px] lg:px-20 w-full justify-between"
      >
        <Link href={"/"}>
          <Image
            loading="lazy"
            src="/enet-logo-nav.png"
            alt="navbar logo"
            width={160}
            height={51}
            className="flex-shrink-0"
          />
        </Link>

        <div className="flex items-center gap-12 font-normal text-[18px] capitalize">
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

        <Link href={"#"}>
          <button
            className="py-[12px] px-[26px] border border-white rounded-[8px] font-bold text-[18px]"
            title="book a call"
            aria-label="book a call"
          >
            Book a Call
          </button>
        </Link>
      </motion.nav>
      <motion.nav
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        className="flex lg:hidden mw items-center bg-[#0000001A] backdrop-blur-[50px] py-3 md:py-5 px-[30px] lg:px-20 w-full justify-between"
      >
        <Link href={"/"}>
          <Image
            loading="lazy"
            src="/enet-logo-nav.png"
            alt="navbar logo"
            width={75}
            height={24}
            className="flex-shrink-0"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-12 font-normal text-[18px] capitalize">
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
          className="hidden lg:block py-[12px] px-[26px] border border-white rounded-[8px] font-bold text-[18px]"
        >
          Book a Call
        </Link>

        <button onClick={toggleMenu}>
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
        </button>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            // exit={{ x: "-100%", opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-[#030e14] px-4 pt-6"
          >
            <div className="flex justify-end">
              <button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="text-[#FFFFFFCC] cursor-pointer"
                type="button"
              >
                <IoCloseOutline size={28} />
              </button>
            </div>

            {/* mobile menu items */}
            <div className="my-auto">
              <div className="flex flex-col text-center gap-6 font-normal text-base">
                {navItems.map((item) => (
                  <Link
                    key={Math.random()}
                    href={item.href}
                    onClick={toggleMenu}
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

              <div className="flex flex-col gap-3 mt-12 text-center">
                <Link
                  href={"#"}
                  className="hidden lg:block py-[12px] px-[26px] border border-white rounded-[8px] font-bold text-[18px]"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
