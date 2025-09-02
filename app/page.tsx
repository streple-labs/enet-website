import { montserrat, titillium_web } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

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
    description: "Real-time monitoring and AI-powered tools to stop threats before they strike.",
  },
  {
    icon: "/threat.png",
    alt: "threat",
    title: "Vulnerability Assessment",
    description: "Identify and fix system weaknesses through expert testing and audits.",
  },
  {
    icon: "/24-hours-service.png",
    alt: "24 hours service",
    title: "24/7 Incident Response",
    description: "Round-the-clock monitoring and instant response to security breaches.",
  },
  {
    icon: "/training.png",
    alt: "training",
    title: "Security Awareness Training",
    description: "Educate your team to spot and avoid phishing, scams, and attacks.",
  },
];

export default function page() {
  return (
    <main className="flex flex-col">
      <section className="homepage-hero-bg">
        <div className="flex flex-col lg:flex-row w-full justify-between mt-10">
          <div className="flex flex-col gap-[30px] mt-10 ml-26">
            <h1
              className={`${montserrat.className} font-bold text-[70px] leading-[90px] tracking-[0%] text-white`}
            >
              Innovate Securely.
              <br />
              Scale Fearlessly.
            </h1>

            <p className="font-normal text-[18px] leading-[30px] tracking-[0%] text-[#EEEDFFCC]">
              Enet Technologies empowers businesses to stay secure, scale
              faster, and
              <br />
              comply effortlessly with next-gen cybersecurity, cloud solutions,
              and
              <br />
              DevSecOps.
            </p>

            <div className="flex flex-row gap-[44px] mt-5">
              <Link
                href={"#"}
                className="rounded-[8px] px-18 py-4 font-bold text-[18px] leading-[24px] tracking-[0%] text-white bg-gradient-to-r from-[#004C99] to-[#00C85380]"
              >
                Get Started
              </Link>
              <Link
                href={"#"}
                className="rounded-[8px] px-18 py-4 font-bold text-[18px] leading-[24px] tracking-[0%] text-[#00C853] border border-[#00C853]"
              >
                Book Audit
              </Link>
            </div>
          </div>

          <Image
            loading="lazy"
            src="/innovate-securely.png"
            alt={"innovate securely"}
            width={530}
            height={530}
            className="mr-10"
          />
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-[#030E14] py-[59px]">
        <div className="flex flex-col gap-[18px]">
          <span className="font-semibold text-[21px] leading-[24px] tracking-[0%] text-center text-[#00C853]">
            OUR SERVICES
          </span>

          <h2
            className={`${montserrat.className} font-bold text-[67px] leading-[70px] tracking-[0%] text-center capitalize text-white`}
          >
            Redefining Security.
            <br />
            Empowering Innovation.
          </h2>

          <p className="font-normal text-[16px] leading-[26px] tracking-[0%] text-center capitalize text-[#EEEDFFCC]">
            We deliver next-gen cybersecurity, cloud solutions, DevSecOps, and
            compliance services — designed to protect your business
            <br />
            and accelerate growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto px-24 mt-12">
          {servicesCards.map((card) => (
            <div
              key={card.alt}
              className="rounded-[15px] bg-[#030C11] hover:bg-[url('/card-background.png')] bg-cover bg-center bg-no-repeat w-full h-full transition-all duration-500"
            >
              <div className="flex flex-col py-[51px] ml-[40px] gap-[65px]">
                <Image
                  loading="lazy"
                  src={card.icon}
                  alt={card.alt}
                  width={60}
                  height={60}
                  className="mr-10"
                />

                <div className="flex flex-col gap-[15px]">
                  <h4
                    className={`${montserrat.className} font-bold text-[24px] leading-[24px] tracking-[0%] text-white`}
                  >
                    {card.title}
                  </h4>

                  <p className="font-normal text-[16px] leading-[25px] tracking-[0%] text-white whitespace-pre-line">
                    {card.description.join("\n")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          href={"#"}
          className="flex flex-col mx-auto mt-12 px-28 py-4 bg-[#004C99] rounded-[8px] w-max font-bold text-[18px] leading-[24px] tracking-[0%] items-center text-white"
        >
          View More
        </Link>
      </section>

      <section className="flex flex-row gap-12 px-20 py-28 why-enet-bg">
        <div className="relative">
          <span className={`${montserrat.className} font-bold text-[50px] leading-[60px] tracking-[0%] capitalize text-white`}>
            Why Choose Enet<br />
            Technologies?
          </span>

          <p className="absolute bottom-0 font-normal text-[16px] leading-[26px] tracking-[0%] text-[#EEEDFFCC]">
            At Enet Technologies, we blend cybersecurity expertise,<br />
            scalable cloud solutions, and compliance strategies to help<br />
            businesses innovate securely and thrive in a digital world.
          </p>
        </div>

        <Image
          loading="lazy"
          src={"/trusted-expertise.png"}
          alt={"trusted expertise"}
          width={427}
          height={499}
        />

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-[15px] border-b border-b-[#30393E]">
            <span className={`${montserrat.className} font-bold text-[24px] leading-[27px] tracking-[0%] text-[#004C99]`}>
              Trusted Expertise
            </span>
            <p className="pb-6">
              Backed by years of industry experience,<br />
              we deliver proven strategies that keep<br />
              your business ahead of security threats.
            </p>
          </div>
          <div className="flex flex-col gap-[15px] border-b border-b-[#30393E]">
            <span className={`${montserrat.className} font-bold text-[24px] leading-[27px] tracking-[0%] text-[#004C99]`}>
              Innovation-Driven
            </span>
            <p className="pb-6">
              We leverage modern technologies and<br />
              agile approaches to provide future-ready<br />
              solutions tailored to your goals.
            </p>
          </div>
          <div className="flex flex-col gap-[15px]">
            <span className={`${montserrat.className} font-bold text-[24px] leading-[27px] tracking-[0%] text-[#004C99]`}>
              End-to-End Security
            </span>
            <p className="pb-6">
              From cybersecurity to compliance and<br />
              cloud protection, we safeguard your<br />
              entire digital ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="cybersecyrity-bg">
        <div className="flex flex-row w-full p-20 gap-28">
          <Image
            loading="lazy"
            src={"/penetration-tester.png"}
            alt={"penetration tester"}
            width={521}
            height={955}
          />

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h6 className={`${titillium_web.className} font-semibold text-[21px] leading-[24px] tracking-[0%] text-[#00C853]`}>
                CYBERSECURITY
              </h6>

              <span className={`${montserrat.className} font-semibold text-[50px] leading-[70px] tracking-[0%] capitalize text-white`}>
                Next-Gen Cybersecurity,<br />
                Built for Tomorrow
              </span>
            </div>

            <p className="font-normal text-[16px] leading-[23px] tracking-[0%] text-[#EEEDFFCC]">
              At Enet Technologies, we deliver advanced cybersecurity solutions designed to <br />
              safeguard your data, networks, and applications. From proactive threat detection to <br />
              rapid incident response, we ensure your business stays secure in an evolving digital <br />
              landscape.
            </p>

            <div className="grid grid-cols-2 gap-10">
              {cybersecurityCards.map((card) => (
                <div key={card.alt} className="colour-card w-[302px] h-[294px] rounded-2xl p-8 gap-2">
                  <Image
                    loading="lazy"
                    src={card.icon}
                    alt={card.alt}
                    width={64}
                    height={64}
                  />

                  <div className="flex flex-col gap-4">
                    <span className={`${montserrat.className} font-semibold text-[24px] leading-[32px] tracking-[0%] text-white`}>
                      {card.title}
                    </span>

                    <p className="font-normal text-[16px] leading-[23px] tracking-[0%] text-[#EEEDFFCC]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link
          href={"#"}
          className="flex flex-col mx-auto mb-28 px-28 py-4 bg-[#004C99] rounded-[8px] w-max font-bold text-[18px] leading-[24px] tracking-[0%] items-center text-white"
        >
          View More
        </Link>
      </section>

      <section className="bg-[#030E14] flex flex-row px-32 py-28 w-full justify-between">
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
            <h6 className="font-semibold text-[21px] leading-[24px] tracking-[0%] text-[#00C853]">
              WHAT WE&apos;VE BUILT
            </h6>

            <span className={`${montserrat.className} font-bold text-[48px] leading-[60px] tracking-[0%] text-[#F5F5F5]`}>
              Powering the Future of <br />
              Secure <span className="text-[#004C99]">Digital Finance</span>
            </span>

            <p className="font-normal text-[16px] leading-[24px] tracking-[0%] text-[#EEEDFFCC]">
              Streple is Enet Technologies&apos; flagship fintech platform, built to deliver secure, <br />
              scalable, and compliant digital finance solutions with bank-grade security and <br />
              zero-trust architecture.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-6">
              <span className="w-[52px] h-[52px] rounded-xl bg-[#F1F5F9]"></span>
              <div className="flex flex-col gap-4">
                <span className={`${montserrat.className} font-semibold text-[24px] leading-[30px] tracking-[0%] text-[#F5F5F5]`}>
                  Regulation-Compliant Crypto Finance
                </span>
                <p className="font-normal text-[16px] leading-[24px] tracking-[0%] text-[#EEEDFFCC]">
                  Launch and manage digital financial services with full alignment to <br />
                  global regulatory standards and VASP licensing.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-6">
              <span className="w-[52px] h-[52px] rounded-xl bg-[#F1F5F9]"></span>
              <div className="flex flex-col gap-4">
                <span className={`${montserrat.className} font-semibold text-[24px] leading-[30px] tracking-[0%] text-[#F5F5F5]`}>
                  Bank-Grade Security
                </span>
                <p className="font-normal text-[16px] leading-[24px] tracking-[0%] text-[#EEEDFFCC]">
                  Streple leverages end-to-end encryption, multi-factor authentication, <br />
                  and zero-trust infrastructure to secure transactions and data.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-6">
              <span className="w-[52px] h-[52px] rounded-xl bg-[#F1F5F9]"></span>
              <div className="flex flex-col gap-4">
                <span className={`${montserrat.className} font-semibold text-[24px] leading-[30px] tracking-[0%] text-[#F5F5F5]`}>
                  Smart Trading & Performance Tools
                </span>
                <p className="font-normal text-[16px] leading-[24px] tracking-[0%] text-[#EEEDFFCC]">
                  Access automated trading dashboards, performance tracking, and <br />
                  community-driven Trade Circles to maximize growth potential.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-6">
              <span className="w-[52px] h-[52px] rounded-xl bg-[#F1F5F9]"></span>
              <div className="flex flex-col gap-4">
                <span className={`${montserrat.className} font-semibold text-[24px] leading-[30px] tracking-[0%] text-[#F5F5F5]`}>
                  Scalable & Future-Ready
                </span>
                <p className="font-normal text-[16px] leading-[24px] tracking-[0%] text-[#EEEDFFCC]">
                  Built to adapt and grow, Streple ensures high-speed performance and <br />
                  enterprise-level reliability as your operations expand.
                </p>
              </div>
            </div>
          </div>

          <Link
            href={"#"}
            className="px-20 py-4 bg-[#F5F5F5] rounded-[8px] w-max font-bold text-[16px] leading-[24px] tracking-[0%] items-center text-[#004C99]"
          >
            View More
          </Link>
        </div>
      </section>

      <section className="testimonials-bg px-18 py-20">
        <div className="flex flex-col gap-2 items-center">
          <span className="font-semibold text-[21px] leading-[24px] tracking-[0%] text-[#00C853]">
            TESTIMONIALS
          </span>
          <span className={`${montserrat.className} font-bold text-[54px] leading-[70px] tracking-[0%] text-white`}>
            Real Stories. Real Security.
          </span>
        </div>

        <div className="flex flex-row w-full justify-center gap-[48px] mt-16">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-[#AAAAAA0F] backdrop-blur-[50px] w-[400px] h-[329px] rounded-2xl flex flex-col p-8 gap-6">
              <p className="font-normal text-[16px] leading-[23px] tracking-[0%] text-white">
                &quot;We were scaling fast, and compliance <br />
                requirements started piling up — HIPAA, <br />
                ISO, and local data laws. E-Net came in, <br />
                simplified everything, and helped us get <br />
                audit-ready in just weeks. Their team was<br />
                like having an internal security squad <br />
                without the full-time cost.&quot;
              </p>

              <Image
                loading="lazy"
                src={"/nuru-health.png"}
                alt={"nuru health"}
                width={336}
                height={80}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4 items-center justify-center mt-16">
          <button className="w-[25px] h-[25px] rounded-full bg-[#B9B8B8] cursor-pointer"></button>
          <button className="w-[20px] h-[20px] rounded-full bg-[#3B3B41] cursor-pointer"></button>
          <button className="w-[20px] h-[20px] rounded-full bg-[#3B3B41] cursor-pointer"></button>
          <button className="w-[20px] h-[20px] rounded-full bg-[#3B3B41] cursor-pointer"></button>
        </div>
      </section>

      <section className="bg-[#030E14] p-20">
        <div className="cta-bg flex flex-col py-14 items-center gap-10">
          <div className="flex flex-row gap-3 rounded-[20px] bg-[#FFFFFF24] backdrop-blur-[40px] items-center px-14 py-3">
            <Image
              loading="lazy"
              src={"/sheild-vector.png"}
              alt={"sheild vector"}
              width={19}
              height={24}
            />
            <span className="font-bold text-[16px] leading-[23px] tracking-[0%] text-[#00C853]">Enet Secured</span>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className={`${montserrat.className} font-bold text-[67px] leading-[70px] tracking-[0%] text-center capitalize text-white`}>
              Ready to Secure, Scale, <br />
              and Succeed?
            </h2>

            <p className="font-normal text-[16px] leading-[26px] tracking-[0%] text-center capitalize text-[#EEEDFFCC]">
              Partner with Enet Technologies to protect your business, optimize your infrastructure, and stay <br />
              compliant. all with one trusted partner.
            </p>
          </div>

          <div className="flex flex-row gap-[30px]">
            <Link href={"#"} className="bg-[#004C99] py-4 px-20 rounded-[8px] font-bold text-[16px] leading-[22px] tracking-[0%] text-white">
              Get Started
            </Link>

            <Link href={"#"} className="border border-[#F5F5F5] py-4 px-20 rounded-[8px] font-bold text-[16px] leading-[22px] tracking-[0%] text-white">
              Book Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
