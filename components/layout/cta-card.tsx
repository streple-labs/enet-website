import Link from "next/link";
import { montserrat } from "@/app/fonts";

export default function CtaCard() {
  return (
    <section className="relative flex items-center justify-center w-full">
      <div className="mw px-20 py-24 flex items-center justify-center w-full">
        <div className="flex flex-col items-center w-full rounded-[19px] bg-[url('/cta-background.png')] bg-no-repeat bg-center p-[61px]">
          <div className="mb-10 py-[11px] px-11 w-auto flex items-center gap-[15px] rounded-[20px] backdrop-blur-2xl bg-[#FFFFFF24]">
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
                  fill="#00C853"
                />
              </svg>
            </span>
            <p className="font-bold text-base/[23px] text-[#00C853]">
              Enet Secured
            </p>
          </div>
          <div className="flex flex-col items-center gap-[18px] max-w-4xl text-center mb-12">
            <h4
              className={`${montserrat.className} font-bold text-[67px]/[70px]`}
            >
              Ready to Secure, Scale, and Succeed?
            </h4>
            <p className="text-[#EEEDFFCC] text-base/[26px]">
              Partner with Enet Technologies to protect your business, optimize
              your infrastructure, and stay compliant. all with one trusted
              partner.
            </p>
          </div>
          <div className="flex items-center justify-center gap-[30px]">
            <Link href={"#"}>
              <button
                title="get started"
                aria-label="get started"
                className="flex flex-col w-[230px] py-4 bg-[#004C99] rounded-[8px] font-bold text-lg/[21px] tracking-[0%] items-center text-white"
              >
                Get Started
              </button>
            </Link>
            <Link href={"#"}>
              <button
                title="book audit"
                aria-label="book audit"
                className="flex flex-col w-[230px] py-4 border border-[#F5F5F5] rounded-[8px] font-bold text-lg/[21px] tracking-[0%] items-center text-[#F5F5F5]"
              >
                Book Audit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
