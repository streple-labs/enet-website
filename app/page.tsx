import { montserrat, titillium_web } from "@/app/fonts";
import CtaCard from "@/components/layout/cta-card";
import Image from "next/image";
import Link from "next/link";
import Herosection from "./_component/herosection";

const servicesCards = [
  {
    icon: "/sheild.png",
    alt: "sheild",
    title: "Cybersecurity & Threat Defense",
    description: [
      "Protect your business with enterprise-grade security.",
      "From FaceDefend™ biometric protection to Quantum Vaults and",
      "24/7 threat response, we defend you against today's and",
      "tomorrow's attacks",
    ],
  },
  {
    icon: "/certificate.png",
    alt: "certificate",
    title: "Compliance & IT Consulting",
    description: [
      "Stay compliant. Stay confident.",
      "From ISO certifications to GDPR/NDPR alignment and vCISO",
      "advisory, we help you meet global regulations and strengthen",
      "your security posture.",
    ],
  },
  {
    icon: "/cloud-sun.png",
    alt: "cloud sun",
    title: "Cloud & Infrastructure Security",
    description: [
      "Secure, scalable, and seamless cloud solutions.",
      "We manage cloud migration, data protection, and disaster",
      "recovery ensuring your operations stay protected and always",
      "available.",
    ],
  },
  {
    icon: "/code-brackets.png",
    alt: "code brackets",
    title: "Blockchain & Fintech Security",
    description: [
      "Next-gen security for the fintech world.",
      "With smart contract audits, token protection, and VASP-ready",
      "compliance, we secure your digital assets and enable trusted",
      "innovation.",
    ],
  },
];

const cybersecurityCards = [
  {
    icon: "/customize.png",
    alt: "customize",
    title: "Threat Detection & Prevention",
    description:
      "Real-time monitoring and AI-powered tools to stop threats before they strike.",
  },
  {
    icon: "/threat.png",
    alt: "threat",
    title: "Vulnerability Assessment",
    description:
      "Identify and fix system weaknesses through expert testing and audits.",
  },
  {
    icon: "/24-hours-service.png",
    alt: "24 hours service",
    title: "24/7 Incident Response",
    description:
      "Round-the-clock monitoring and instant response to security breaches.",
  },
  {
    icon: "/training.png",
    alt: "training",
    title: "Security Awareness Training",
    description:
      "Educate your team to spot and avoid phishing, scams, and attacks.",
  },
];

export default function page() {
  return (
    <main className="flex flex-col">
      <section className="homepage-hero-bg relative overflow-hidden flex items-center justify-center w-full py-10 xl:py-40">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-0 w-full justify-between mw px-8 lg:px-20">
          <Herosection />
        </div>
      </section>

      <section className="bg-[#030E14] flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-12 w-full mw px-8 lg:px-20 py-8 lg:py-[60px]">
          <div className="flex flex-col items-center gap-[18px]">
            <span className="font-semibold text-sm/6 md:text-[21px]/6 text-center text-[#00C853]">
              OUR SERVICES
            </span>

            <h2
              className={`${montserrat.className} max-w-4xl font-bold text-2xl/[34px] sm:text-4xl md:text-6xl lg:text-[67px]/[70px] text-center capitalize `}
            >
              Redefining Security. Empowering Innovation.
            </h2>

            <p className="max-w-4xl font-normal text-sm/6 md:text-base/[26px] text-center capitalize text-[#EEEDFFCC]">
              We deliver next-gen cybersecurity, cloud solutions, DevSecOps, and
              compliance services — designed to protect your business and
              accelerate growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {servicesCards.map((card) => (
              <div
                key={card.alt}
                className="rounded-[15px] bg-[#030C11] hover:bg-[url('/card-background.png')] bg-cover bg-center bg-no-repeat"
              >
                <div className="flex flex-col px-5 py-7 lg:px-10 lg:py-[51px] gap-7 lg:gap-[65px]">
                  <Image
                    loading="lazy"
                    src={card.icon}
                    alt={card.alt}
                    width={60}
                    height={60}
                    className="size-[30px] md:size-[60px]"
                  />

                  <div className="flex flex-col gap-[15px]">
                    <h4
                      className={`${montserrat.className} font-bold text-sm/4 md:text-xl/5 lg:text-2xl/6  `}
                    >
                      {card.title}
                    </h4>

                    <p className="font-normal text-sm/[22px] md:text-base/[25px]  whitespace-pre-line">
                      {card.description.join("\n")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href={"#"}
            className="w-full flex mw items-center justify-center"
          >
            <button
              title="our services"
              aria-label="our services"
              className="md-8 md:mt-12 w-full sm:w-[258px] md:w-[309px] p-5 bg-[#004C99] rounded-md md:rounded-lg font-bold text-base/6 md:text-lg/6"
            >
              View More
            </button>
          </Link>
        </div>
      </section>

      <section className="why-enet-bg">
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-8 px-8 lg:px-20 py-8 lg:py-20 mw">
          <div className="flex flex-col justify-between flex-shrink-0 gap-8 max-w-[483px]">
            <h4
              className={`${montserrat.className} font-bold text-2xl/[34px] md:text-4xl/14 lg:text-[50px]/[60px] capitalize `}
            >
              Why Choose Enet Technologies?
            </h4>

            <p className="font-normal text-sm/6 md:text-base/[26px] text-[#EEEDFFCC] mt-auto">
              At Enet Technologies, we blend cybersecurity expertise, scalable
              cloud solutions, and compliance strategies to help businesses
              innovate securely and thrive in a digital world.
            </p>
          </div>

          <Image
            loading="lazy"
            src={"/trusted-expertise.png"}
            alt={"trusted expertise"}
            width={427}
            height={499}
            className="size-auto max-w-[315px] max-h-[320px] md:max-w-[427px] md:max-h-[499px]"
          />

          <div className="flex flex-col gap-9">
            {[
              {
                title: "Trusted Expertise",
                desc: "Backed by years of industry experience, we deliver proven strategies that keep your business ahead of security threats.",
              },
              {
                title: "Innovation-Driven",
                desc: "We leverage modern technologies and agile approaches to provide future-ready solutions tailored to your goals.",
              },
              {
                title: "End-to-End Security",
                desc: "From cybersecurity to compliance and cloud protection, we safeguard your entire digital ecosystem.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="space-y-[15px] pb-5 border-b border-b-[#30393E]"
              >
                <h5
                  className={`${montserrat.className} font-bold text-xl/[27px] md:text-2xl/[27px] text-[#004C99]`}
                >
                  {item.title}
                </h5>
                <p className="text-base/[27px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cybersecyrity-bg flex flex-col items-center justify-center relative">
        <div className="flex items-center lg:items-start flex-col-reverse lg:flex-row mw p-8 md:px-20 lg:py-20 gap-8 lg:gap-10">
          <Image
            loading="lazy"
            src={"/penetration-tester.png"}
            alt={"penetration tester"}
            width={521}
            height={955}
            className="size-full max-w-[315px] max-h-[355px] md:max-h-[955px] md:max-w-[521px]"
          />

          <div className="flex flex-col gap-3 md:gap-6">
            <div className="flex flex-col gap-2">
              <h6
                className={`${titillium_web.className} font-semibold text-xs md:text-base lg:text-[21px]/6  text-[#00C853]`}
              >
                CYBERSECURITY
              </h6>

              <h4
                className={`${montserrat.className} font-semibold text-2xl/[34px] sm:text-4xl md:text-5xl lg:text-[50px]/[70px] capitalize`}
              >
                Next-Gen Cybersecurity, Built for Tomorrow
              </h4>
            </div>

            <p className="font-normal textsm/6 md:text-base/6 text-[#EEEDFFCC]">
              At Enet Technologies, we deliver advanced cybersecurity solutions
              designed to <br />
              safeguard your data, networks, and applications. From proactive
              threat detection to <br />
              rapid incident response, we ensure your business stays secure in
              an evolving digital <br />
              landscape.
            </p>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-6 lg:gap-10">
              {cybersecurityCards.map((card) => (
                <div
                  key={card.alt}
                  className="colour-card rounded-2xl p-4 md:p-8 gap-2"
                >
                  <Image
                    loading="lazy"
                    src={card.icon}
                    alt={card.alt}
                    width={64}
                    height={64}
                    className="size-8 md:size-16"
                  />

                  <div className="flex flex-col gap-4">
                    <span
                      className={`${montserrat.className} font-semibold text-sm/5 md:text-2xl/8`}
                    >
                      {card.title}
                    </span>

                    <p className="font-normal text-[10px]/4 md:text-base/6 text-[#EEEDFFCC]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex mw items-center justify-center px-8">
          <Link
            href={"#"}
            className="flex justify-center md:mb-28 md:px-28 w-full md:w-fit py-4 bg-[#004C99] rounded-lg font-bold text-lg/6"
          >
            View More
          </Link>
        </div>
      </section>

      {/* <section className="bg-[#030E14] flex flex-row px-32 py-28 w-full justify-between">
        <div className="flex flex-col">
          <Image
            loading="lazy"
            src={"/mobile-app.png"}
            alt={"mobile app"}
            width={490}
            height={674}
          />
        </div>

        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-4">
            <h6 className="font-semibold text-[21px] leading-[24px]  text-[#00C853]">
              WHAT WE&apos;VE BUILT
            </h6>

            <span className={`${montserrat.className} font-bold text-[48px] leading-[60px]  text-[#F5F5F5]`}>
              Powering the Future of <br />
              Secure <span className="text-[#004C99]">Digital Finance</span>
            </span>

            <p className="font-normal text-[16px] leading-[24px]  text-[#EEEDFFCC]">
              Streple is Enet Technologies&apos; flagship fintech platform, built to deliver secure, <br />
              scalable, and compliant digital finance solutions with bank-grade security and <br />
              zero-trust architecture.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-6">
              <span className="w-[52px] h-[52px] rounded-xl bg-[#F1F5F9]"></span>
              <div className="flex flex-col gap-4">
                <span className={`${montserrat.className} font-semibold text-[24px] leading-[30px]  text-[#F5F5F5]`}>
                  Regulation-Compliant Crypto Finance
                </span>
                <p className="font-normal text-[16px] leading-[24px]  text-[#EEEDFFCC]">
                  Launch and manage digital financial services with full alignment to <br />
                  global regulatory standards and VASP licensing.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-6">
              <span className="w-[52px] h-[52px] rounded-xl bg-[#F1F5F9]"></span>
              <div className="flex flex-col gap-4">
                <span className={`${montserrat.className} font-semibold text-[24px] leading-[30px]  text-[#F5F5F5]`}>
                  Bank-Grade Security
                </span>
                <p className="font-normal text-[16px] leading-[24px]  text-[#EEEDFFCC]">
                  Streple leverages end-to-end encryption, multi-factor authentication, <br />
                  and zero-trust infrastructure to secure transactions and data.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-6">
              <span className="w-[52px] h-[52px] rounded-xl bg-[#F1F5F9]"></span>
              <div className="flex flex-col gap-4">
                <span className={`${montserrat.className} font-semibold text-[24px] leading-[30px]  text-[#F5F5F5]`}>
                  Smart Trading & Performance Tools
                </span>
                <p className="font-normal text-[16px] leading-[24px]  text-[#EEEDFFCC]">
                  Access automated trading dashboards, performance tracking, and <br />
                  community-driven Trade Circles to maximize growth potential.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-6">
              <span className="w-[52px] h-[52px] rounded-xl bg-[#F1F5F9]"></span>
              <div className="flex flex-col gap-4">
                <span className={`${montserrat.className} font-semibold text-[24px] leading-[30px]  text-[#F5F5F5]`}>
                  Scalable & Future-Ready
                </span>
                <p className="font-normal text-[16px] leading-[24px]  text-[#EEEDFFCC]">
                  Built to adapt and grow, Streple ensures high-speed performance and <br />
                  enterprise-level reliability as your operations expand.
                </p>
              </div>
            </div>
          </div>

          <Link
            href={"#"}
            className="px-20 py-4 bg-[#F5F5F5] rounded-[8px] w-max font-bold text-[16px] leading-[24px]  items-center text-[#004C99]"
          >
            View More
          </Link>
        </div>
      </section> */}

      <section className="testimonials-bg py-8 md:py-20 flex flex-col items-center justify-center gap-8 md:gap-16">
        <div className="flex flex-col gap-2 items-center text-center">
          <h6
            className={`${titillium_web.className} font-semibold text-xs md:text-base lg:text-[21px]/6  text-[#00C853]`}
          >
            TESTIMONIALS
          </h6>

          <h4
            className={`${montserrat.className} font-semibold text-2xl/[34px] sm:text-4xl md:text-5xl lg:text-[50px]/[70px] capitalize`}
          >
            Real Stories. Real Security.
          </h4>
        </div>

        <div className="relative w-full mw px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 scrollbar-hide">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="bg-[#AAAAAA0F] backdrop-blur-2x lg:backdrop-blur-[50px] rounded-xl flex flex-col p-6 lg:p-8 gap-[18px] lg:gap-6 flex-shrink-0"
              >
                <p className="font-normal text-[base/6">
                  &quot;We were scaling fast, and compliance requirements
                  started piling up — HIPAA, ISO, and local data laws. E-Net
                  came in, simplified everything, and helped us get audit-ready
                  in just weeks. Their team was like having an internal security
                  squad without the full-time cost.&quot;
                </p>

                <div className="flex items-center gap-4">
                  <Image
                    loading="lazy"
                    src={"/testimonial.jpg"}
                    alt={"nuru health"}
                    width={60}
                    height={60}
                    className="size-[47px] md:size-[50px] rounded-full"
                  />
                  <div className="space-y-1.5 md:space-y-2">
                    <h6
                      className={`${montserrat.className} text-[22px]/6 md:text-[28px]/8 font-semibold`}
                    >
                      Mke Tamba
                    </h6>
                    <p className="text-[9px]/3 md:text-xs/4">
                      Nuru Health - Co-Founder & COO
                    </p>

                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          viewBox="0 0 16 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-3 md:size-4"
                        >
                          <path
                            d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                            fill="#FFA41B"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="flex flex-row gap-4 items-center justify-center">
          <button className="size-[25px] rounded-full bg-[#B9B8B8] cursor-pointer" />
          <button className="size-[20px] rounded-full bg-[#3B3B41] cursor-pointer" />
          <button className="size-[20px] rounded-full bg-[#3B3B41] cursor-pointer" />
          <button className="size-[20px] rounded-full bg-[#3B3B41] cursor-pointer" />
        </div> */}
      </section>

      <CtaCard />
    </main>
  );
}
