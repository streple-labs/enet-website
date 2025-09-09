"use client";

import { motion } from "framer-motion";
import { montserrat } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Herosection() {
  return (
    <>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        className="flex flex-col gap-5 md:gap-7 lg:gap-[30px] w-fit"
      >
        <h1
          className={`${montserrat.className} font-bold text-2xl/[34px] sm:text-4xl md:text-6xl[70px] max-w-3xl`}
        >
          Innovate Securely. Scale Fearlessly.
        </h1>

        <p className="font-normal text-sm/6 md:text-base/6 lg:text-lg/[30px] text-[#EEEDFFCC] max-w-[653px]">
          Enet Technologies empowers businesses to stay secure, scale faster,
          and comply effortlessly with next-gen cybersecurity, cloud solutions,
          and DevSecOps.
        </p>

        <div className="flex gap-4 lg:gap-11 mt-5">
          <Link
            href={"#"}
            className="rounded-sm md:rounded-lg p-3 md:px-18 md:py-4 font-bold text-[9px]/3 md:text-lg/6 bg-gradient-to-r from-[#004C99] to-[#00C85380]"
          >
            Get Started
          </Link>
          <Link
            href={"#"}
            className="rounded-sm md:rounded-lg p-3 md:px-18 md:py-4 font-bold text-[9px]/3 md:text-lg/6 text-[#00C853] border border-[#00C853]"
          >
            Book Audit
          </Link>
        </div>
      </motion.div>

      <motion.div initial={{ y: "100vh" }} animate={{ y: 0 }}>
        <Image
          loading="lazy"
          src="/innovate-securely.png"
          alt={"innovate securely"}
          width={530}
          height={530}
          className="size-auto lg:w-[530px] lg:h-[530px]"
        />
      </motion.div>
    </>
  );
}
