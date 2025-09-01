import Link from "next/link";
import { montserrat } from "../fonts";
import Image from "next/image";
import OnesAndZeros from "@/components/icons/ones-and-zeros";

export default function page() {
  return (
    <main className="flex flex-col">
      <section className="relative flex items-center justify-center w-full">
        <span className="top-0 right-0 absolute -z-10">
          <svg
            width="548"
            height="785"
            viewBox="0 0 548 785"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_118_488)">
              <path
                d="M682.259 349.846C774.148 297.404 704.11 120.287 560.536 186.572L511.24 207.974L351.3 296.184C347.319 321.299 360.824 418.455 459.298 434.101C478.537 437.158 671.445 356.018 682.259 349.846Z"
                fill="#004C99"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_118_488"
                x="0.696289"
                y="-178.079"
                width="1072.97"
                height="962.264"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="175"
                  result="effect1_foregroundBlur_118_488"
                />
              </filter>
            </defs>
          </svg>
        </span>
        <span className="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 absolute -z-10">
          <svg
            width="974"
            height="864"
            viewBox="0 0 974 864"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_118_492)">
              <path
                d="M632.454 478.846C724.342 426.404 654.304 249.287 510.73 315.572L461.435 336.974L301.494 425.184C297.513 450.299 311.018 547.455 409.492 563.101C428.731 566.158 621.64 485.018 632.454 478.846Z"
                fill="#004C99"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_118_492"
                x="0.890625"
                y="0.921463"
                width="972.969"
                height="862.264"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="150"
                  result="effect1_foregroundBlur_118_492"
                />
              </filter>
            </defs>
          </svg>
        </span>
        <span className="left-0 bottom-0 absolute -z-10">
          <svg
            width="684"
            height="456"
            viewBox="0 0 684 456"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_118_490)">
              <path
                d="M292.259 528.846C384.148 476.404 314.11 299.287 170.536 365.572L121.24 386.974L-38.7004 475.184C-42.6811 500.299 -29.1763 597.455 69.298 613.101C88.5365 616.158 281.445 535.018 292.259 528.846Z"
                fill="#004C99"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_118_490"
                x="-389.304"
                y="0.921448"
                width="1072.97"
                height="962.264"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="175"
                  result="effect1_foregroundBlur_118_490"
                />
              </filter>
            </defs>
          </svg>
        </span>

        <div className="px-20 pb-20 relative mw flex flex-col gap-8 w-full">
          <h1
            className={`${montserrat.className} font-bold text-[75px]/[85px]`}
          >
            Our Story
          </h1>

          <div className="flex gap-10">
            <Image
              loading="lazy"
              src="/about-us-hero.png"
              alt="about us"
              aria-label="about us"
              width={535}
              height={594}
              className="size-auto rounded-[19px] flex-shrink-0"
            />

            <div className="w-full space-y-4">
              <p className="text-base/[25px] font-bold">
                With years of expertise, Enet Technologies delivers cutting-edge
                cybersecurity, scalable cloud solutions, and compliant fintech
                infrastructures tailored to empower your business in a
                digital-first world.
              </p>
              <div className="flex gap-8 justify-between">
                <Image
                  loading="lazy"
                  src="/about-us-hero-1.png"
                  alt="security"
                  aria-label="security"
                  width={335}
                  height={365}
                  className="size-auto rounded-[14px] flex-shrink-0"
                />
                <Image
                  loading="lazy"
                  src="/about-us-hero-2.png"
                  alt="security"
                  aria-label="security"
                  width={335}
                  height={365}
                  className="size-auto rounded-[14px] flex-shrink-0"
                />
              </div>
              <p className="text-base/[25px]">
                Our commitment to innovation and security drives everything we
                do. From protecting critical systems to enabling growth, Enet
                Technologies provides reliable, scalable, and future-ready
                solutions.
              </p>
              <Link
                href={"#"}
                className="flex gap-2.5 items-center text-[#004C99] text-[22px]/[25px] font-semibold"
              >
                View All Services
                <svg
                  width="19"
                  height="15"
                  viewBox="0 0 19 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 7.5H17M17 7.5L10.75 1.25M17 7.5L10.75 13.75"
                    stroke="#004C99"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex items-center justify-center w-full">
        <div className="mw px-[43px] py-[58px] flex items-center justify-center w-full">
          <div
            className="border border-[#B9B8B84D] w-full rounded-[20px] backdrop-blur-[50px] px-[38px] py-[82px] relative overflow-hidden"
            style={{
              background:
                "linear-gradient(96.79deg, rgba(0, 76, 153, 0.6) -62.94%, rgba(0, 76, 153, 0.45) -62.92%, rgba(90, 90, 90, 0) 54.42%, rgba(0, 76, 153, 0.6) 174.24%)",
            }}
          >
            <div className="relative z-10 flex items-center gap-[50px] justify-between w-full">
              <div className="flex items-center flex-col justify-center gap-4">
                <h4
                  className={`${montserrat.className} font-bold text-[50px]/[63px]`}
                >
                  Our Mission
                </h4>
                <p className="text-base/[26px] text-center">
                  To empower businesses with secure, scalable, and compliant
                  technology solutions, driving innovation while safeguarding
                  digital assets in an evolving cyber landscape.
                </p>
              </div>

              <div>
                <svg
                  width="174"
                  height="201"
                  viewBox="0 0 174 201"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M173.333 150.5V50.5L86.6666 0.5L0 50.5V150.5L86.6666 200.5L173.333 150.5Z"
                    fill="url(#paint0_linear_143_2340)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_143_2340"
                      x1="86.6666"
                      y1="0.5"
                      x2="86.6666"
                      y2="200.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.39" stopColor="#004C99" />
                      <stop offset="1" stopColor="#A2FFC8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="flex items-center flex-col justify-center gap-4">
                <h4
                  className={`${montserrat.className} font-bold text-[50px]/[63px]`}
                >
                  Our Vision
                </h4>
                <p className="text-base/[26px] text-center">
                  To be Africa&apos;s leading force in cybersecurity, fintech
                  infrastructure, and digital transformation enabling a future
                  where businesses innovate securely and thrive globally.
                </p>
              </div>
            </div>

            <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-1/2">
              <svg
                width="1074"
                height="365"
                viewBox="0 0 1074 365"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_143_2334)">
                  <path
                    d="M682.259 239.846C774.148 187.404 704.11 10.2866 560.536 76.5721L511.24 97.9743L351.3 186.184C347.319 211.299 360.824 308.455 459.298 324.101C478.537 327.158 671.445 246.018 682.259 239.846Z"
                    fill="#004C99"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_143_2334"
                    x="0.696289"
                    y="-288.079"
                    width="1072.97"
                    height="962.264"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="175"
                      result="effect1_foregroundBlur_143_2334"
                    />
                  </filter>
                </defs>
              </svg>
            </span>
            <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-1/2">
              <OnesAndZeros />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
