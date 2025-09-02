import { montserrat } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

const cards = [
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

export default function page() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="homepage-hero-bg relative flex items-center justify-center h-screen 2xl:h-auto 2xl:py-40">
        {/* Hero Content */}
        <div className="flex w-full justify-between mt-10 mw">
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
        <div className="mw w-full">
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
            {cards.map((card) => (
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

          <Link href={"#"}>
            <button
              title="our services"
              aria-label="our services"
              className="flex flex-col mx-auto mt-12 px-28 py-4 bg-[#004C99] rounded-[8px] w-max font-bold text-[18px] leading-[24px] tracking-[0%] items-center text-white"
            >
              View More
            </button>
          </Link>
        </div>
      </section>

      <section className="why-enet-bg"></section>
    </main>
  );
}
