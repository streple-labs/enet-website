import Image from "next/image";
import Link from "next/link";
import { montserrat } from "../fonts";
import ServicePageHeroImg from "@/public/service-hero";
import CtaCard from "@/components/layout/cta-card";

const services = [
  {
    title: "Cybersecurity & Digital Protection",
    desc: "Enet delivers bank-grade security infrastructure designed to protect your data, systems, and users. From threat intelligence to quantum-safe vaults, we ensure your business is secure, compliant, and resilient.",
    services: [
      "Web, server & network defense",
      "Proactive offensive security (Red Teaming)",
      "SIEM & real-time threat intelligence",
      "Vulnerability assessments & penetration testing",
      "FaceDefend™ biometric identity protection",
    ],
    url: "#",
  },
  {
    title: "Blockchain Security & Crypto Compliance",
    desc: "We provide secure blockchain infrastructures and help businesses launch, audit, and scale in the crypto economy while staying compliant with global regulations.",
    services: [
      "Smart contract auditing",
      "Blockchain infrastructure protection",
      "Secure token launch frameworks",
      "VASP licensing & compliance support",
      "Alignment with DORA, MiCA, NDPR regulations",
    ],
    url: "#",
  },
  {
    title: "Cloud & Infrastructure Services",
    desc: "Migrate, secure, and scale confidently with our cloud-native solutions. Whether public, private, or hybrid, Enet ensures performance, uptime, and protection for your infrastructure.",
    services: [
      "Secure cloud migration",
      "Managed cloud services",
      "Disaster recovery solutions",
      "Business continuity planning",
      "Access control & privacy architecture",
    ],
    url: "#",
  },
  {
    title: "Software & Platform Development",
    desc: "Enet builds secure, scalable, and user-friendly applications tailored to your business needs from web and mobile apps to blockchain-powered platforms.",
    services: [
      "DevSecOps integration",
      "Secure API development",
      "Blockchain & wallet solutions",
      "Web & mobile app development",
      "Smart contract design & deployment",
    ],
    url: "#",
  },
  {
    title: "IT & Compliance Consulting",
    desc: "We guide businesses through global compliance requirements and cybersecurity governance to achieve full regulatory alignment and strengthen risk management.",
    services: [
      "Virtual CISO (vCISO) services",
      "Risk assessment & governance audits",
      "ISO certification advisory (e.g., ISO 27001)",
      "GDPR, NDPR & financial data compliance",
    ],
    url: "#",
  },
  {
    title: "Education & Capacity Building",
    desc: "Empowering businesses and individuals through training, workshops, and mentorship to build a stronger cybersecurity future.",
    services: [
      "Executive cyber risk workshops",
      "Cybersecurity awareness training",
      "Entry-level certification coaching",
      "Youth tech mentorship programs",
    ],
    url: "#",
  },
];

export default function page() {
  return (
    <main className="flex flex-col">
      <section className="relative overflow-hidden flex items-center justify-center pt-10 pb-20">
        <span className="absolute bottom-0 left-0">
          <svg
            width="727"
            height="503"
            viewBox="0 0 727 503"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_173_2432)">
              <path
                d="M335.454 528.846C427.342 476.404 357.304 299.287 213.73 365.572L164.435 386.974L4.49395 475.184C0.513238 500.299 14.018 597.455 112.492 613.101C131.731 616.158 324.64 535.018 335.454 528.846Z"
                fill="#004C99"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_173_2432"
                x="-346.109"
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
                  result="effect1_foregroundBlur_173_2432"
                />
              </filter>
            </defs>
          </svg>
        </span>
        <span className="absolute top-0 left-1/2 -translate-x-1/2">
          <svg
            width="1074"
            height="586"
            viewBox="0 0 1074 586"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_173_1906)">
              <path
                d="M682.259 150.846C774.148 98.4037 704.11 -78.7134 560.536 -12.4279L511.24 8.97431L351.3 97.1841C347.319 122.299 360.824 219.455 459.298 235.101C478.537 238.158 671.445 157.018 682.259 150.846Z"
                fill="#004C99"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_173_1906"
                x="0.696289"
                y="-377.079"
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
                  result="effect1_foregroundBlur_173_1906"
                />
              </filter>
            </defs>
          </svg>
        </span>

        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-0 items-center w-full justify-between px-8 md:px-20 mw">
          <div className="flex flex-col gap-3 md:gap-5">
            <div className="mb-4 md:mb-10 py-1 px-4 md:py-[11px] md:px-11 w-fit flex items-center gap-2.5 md:gap-[15px] rounded-[20px] backdrop-blur-2xl bg-[#FFFFFF24]">
              <span>
                <svg
                  viewBox="0 0 19 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-4 md:w-5 md:h-6"
                >
                  <path
                    d="M18.0087 4.50398L17.0768 4.45381C14.5496 4.31606 12.3588 3.36421 11.0655 1.84049L9.49998 0L7.93412 1.84049C6.64079 3.36421 4.44959 4.31606 1.92276 4.45381L0 4.55816V13.2738C0 14.5134 0.382633 15.6821 0.991266 16.7509C3.09269 20.4702 7.87468 23.0163 8.55519 23.3668L9.49998 23.8511L10.4444 23.3668C11.3206 22.9159 19 18.8172 19 13.2738V4.55816L18.0087 4.50398ZM2.03334 12.1634C2.03334 10.0053 2.03334 6.44873 2.03334 6.44873C5.0878 6.28201 7.80246 5.11745 9.50002 3.11797V12.1634H16.966V13.2738C16.966 17.7692 9.50002 21.5969 9.50002 21.5969V12.1634H2.03334Z"
                    fill="#00C853"
                  />
                </svg>
              </span>
              <p className="font-bold text-xs/4 md:text-base/[23px] text-[#00C853]">
                Enet Secured
              </p>
            </div>

            <h1
              className={`${montserrat.className} font-bold text-2xl/8 sm:text-3xl/9 md:text-5xl/14 lg:text-6xl xl:text-[66px]/[90px]`}
            >
              Empowering Your Digital Transformation
            </h1>

            <p className="font-normal mt-4 text-sm/6 md:text-lg/[30px] text-[#EEEDFFCC]">
              Enet Technologies delivers cybersecurity, cloud, and compliance
              solutions to help businesses innovate securely and grow
              confidently.
            </p>

            <Link href={"#"}>
              <button
                title="book a free consultation"
                aria-label="book a free consultation"
                className="rounded-md mt-4 p-5 md:p-6 font-bold text-xs/4 md:text-lg/6 bg-[#004C99] w-[250px] md:w-auto h-[45px] md:h-auto flex justify-center items-center"
              >
                Book a free Consultation
              </button>
            </Link>
          </div>

          <div>
            <ServicePageHeroImg />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden flex flex-col gap-5 md:gap-[30px] items-center justify-center w-full">
        {services.map((service, i) => (
          <div
            key={i}
            className="relative flex flex-col items-center justify-center w-full mw px-8 md:px-20"
          >
            <span className="absolute left-0 bottom-0">
              <svg
                width="658"
                height="602"
                viewBox="0 0 658 602"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_146_3165)">
                  <path
                    d="M266.259 528.846C358.148 476.404 288.11 299.287 144.536 365.572L95.2405 386.974L-64.7004 475.184C-68.6811 500.299 -55.1763 597.455 43.298 613.101C62.5365 616.158 255.445 535.018 266.259 528.846Z"
                    fill="#004C99"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_146_3165"
                    x="-415.304"
                    y="0.921509"
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
                      result="effect1_foregroundBlur_146_3165"
                    />
                  </filter>
                </defs>
              </svg>
            </span>
            <span className="absolute right-0 bottom-0">
              <svg
                width="624"
                height="731"
                viewBox="0 0 624 731"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_146_3163)">
                  <path
                    d="M682.259 528.846C774.148 476.404 704.11 299.287 560.536 365.572L511.24 386.974L351.3 475.184C347.319 500.299 360.824 597.455 459.298 613.101C478.537 616.158 671.445 535.018 682.259 528.846Z"
                    fill="#004C99"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_146_3163"
                    x="0.696289"
                    y="0.921509"
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
                      result="effect1_foregroundBlur_146_3163"
                    />
                  </filter>
                </defs>
              </svg>
            </span>

            {i == 0 && (
              <div className="py-10 md:pt-20 flex flex-col gap-3 md:gap-6 max-w-4xl items-center justify-center text-center">
                <h1
                  className={`${montserrat.className} font-bold text-2xl/8 sm:text-3xl/9 md:text-5xl/14 lg:text-6xl xl:text-[66px]/[90px]`}
                >
                  Our Services
                </h1>

                <p className="font-normal mt-4 text-sm/5 md:text-lg/[30px] text-[#EEEDFFCC]">
                  At Enet Technologies, we deliver innovative, security-first
                  solutions designed to help your business stay protected,
                  compliant, and ready for the future.
                </p>
              </div>
            )}

            <div
              className={`relative py-8 md:py-[96px] flex items-center justify-between ${
                i % 2 ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
              } gap-10 md:gap-20`}
            >
              <div className="lg:w-1/2 flex flex-col gap-5">
                <div className="space-y-4">
                  <h4
                    className={`${montserrat.className} font-bold text-2xl/8 sm:text-3xl/9 md:text-5xl/14 lg:text-[50px]/[63px]`}
                  >
                    {service.title}
                  </h4>
                  <p className="text-xs/5 md:text-base/[26px] text-[#EEEDFFCC]">
                    {service.desc}
                  </p>
                </div>
                <div className="space-y-[29px]">
                  <h6
                    className={`${montserrat.className} font-bold text-sm/[26px] md:text-xl/[26px]`}
                  >
                    Key Services;
                  </h6>
                  {service.services.map((item) => (
                    <div
                      key={item}
                      className="bg-[#30393E73] border-[0.7px] border-[#EEEDFFCC] py-2 px-[22px] flex items-center gap-2.5 rounded-[20px] backdrop-blur-[50px]"
                    >
                      <span className="size-2 md:size-[13px] bg-[#004C99] rounded-full" />
                      <p className="text-[10px]/4 md:text-base/[26px] font-bold">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href={service.url}
                  className="flex items-center gap-[14px] font-semibold text-lg md:text-[22px] text-[#00C853]"
                >
                  Get started
                  <svg
                    viewBox="0 0 22 18"
                    fill="none"
                    className="w-[14px] h-3 md:w-[22px] md:h-[18px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 9H2M20 9L12.5 16.5M20 9L12.5 1.5"
                      stroke="#00C853"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              <Image
                loading="lazy"
                src={"/why-client-trust-us.png"}
                alt="why client trust us"
                aria-label="why client trust us"
                width={649}
                height={616}
                className="rounded-[20px] relative"
              />
            </div>
          </div>
        ))}
      </section>

      <CtaCard />
    </main>
  );
}
