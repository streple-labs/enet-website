import Link from "next/link";
import { geist_mono, montserrat } from "@/app/fonts";

export default function CtaCard() {
  return (
    <section className="relative flex items-center justify-center w-full">
      <div className="mw px-8 lg:px-20 py-8 md:py-24 flex items-center justify-center w-full min-h-[500px]">
        <div className="absolute max-w-[calc(100%-32px)] left-1/2 -translate-x-1/2 -bottom-[60px] z-10 flex flex-col items-center w-full rounded-[19px] bg-[url('/cta-background.png')] bg-no-repeat bg-center p-4 sm:p-8 md:p-10 lg:p-[61px]">
          <div className="mb-4 md:mb-10 py-1 px-4 md:py-[11px] md:px-11 w-auto flex items-center gap-2.5 md:gap-[15px] rounded-[20px] backdrop-blur-2xl bg-white/[14%]">
            <span>
              <svg
                width="19"
                height="24"
                viewBox="0 0 19 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0087 4.50398L17.0768 4.45381C14.5496 4.31606 12.3588 3.36421 11.0655 1.84049L9.49998 0L7.93412 1.84049C6.64079 3.36421 4.44959 4.31606 1.92276 4.45381L0 4.55816V13.2738C0 14.5134 0.382633 15.6821 0.991266 16.7509C3.09269 20.4702 7.87468 23.0163 8.55519 23.3668L9.49998 23.8511L10.4444 23.3668C11.3206 22.9159 19 18.8172 19 13.2738V4.55816L18.0087 4.50398ZM2.03334 12.1634C2.03334 10.0053 2.03334 6.44873 2.03334 6.44873C5.0878 6.28201 7.80246 5.11745 9.50002 3.11797V12.1634H16.966V13.2738C16.966 17.7692 9.50002 21.5969 9.50002 21.5969V12.1634H2.03334Z"
                  fill="white"
                />
              </svg>
            </span>
            <p
              className={`${geist_mono.className} font-medium text-[6px]/2.5 sm:text-xs/4 md:text-base/[23px]`}
            >
              Enet Secured
            </p>
          </div>
          <div className="flex flex-col items-center gap-[18px] max-w-4xl text-center mb-5 md:mb-12">
            <h4
              className={`${montserrat.className} font-bold text-[22px]/[26px] sm:text-3xl md:text-5xl lg:text-[67px]/[70px]`}
            >
              Secure Your Business And Scale Up
            </h4>
            <p className="text-[#EEEDFFCC] text-[10px]/4 md:text-sm/5 lg:text-base/[26px]">
              Partner with Enet Technologies to protect your business, optimize
              your infrastructure, and stay compliant. all with one trusted
              partner.
            </p>
          </div>
          <div className="flex items-center justify-center gap-2.5 md:gap-6 lg:gap-[30px]">
            <Link href={"#"}>
              <button
                className="py-3 px-6 rounded-lg font-bold text-base text-[#004C99] bg-white w-[232px]"
                title="Book Audit"
                aria-label="Book Audit"
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
