import { lato, montserrat } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-[116px] px-[80px] w-full flex justify-between mw">
      <p
        className={`${montserrat.className} opacity-[7%] font-extrabold text-[120px] tracking-[4%] absolute -bottom-12 whitespace-nowrap left-[7.5%]`}
      >
        Enet Technologies
      </p>

      <div className="space-y-16">
        <div className="space-y-8 max-w-[440px]">
          <Image
            src={"/enet-logo-footer.png"}
            aria-label="enet logo"
            alt="enet logo"
            width={300}
            height={95}
          />

          <p className="text-lg/[27px]">
            Protecting your business today while powering your growth for
            tomorrow.
          </p>

          <div className="flex items-center gap-6">
            <Link href={"#"}>
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.869004"
                  y="0.60875"
                  width="28.7823"
                  height="28.7823"
                  rx="5.53506"
                  stroke="white"
                  strokeWidth="0.738007"
                />
                <path
                  d="M15.2601 17.9524C16.0431 17.9524 16.7939 17.6414 17.3475 17.0878C17.9011 16.5342 18.2122 15.7833 18.2122 15.0004C18.2122 14.2174 17.9011 13.4666 17.3475 12.913C16.7939 12.3594 16.0431 12.0483 15.2601 12.0483C14.4772 12.0483 13.7263 12.3594 13.1727 12.913C12.6191 13.4666 12.3081 14.2174 12.3081 15.0004C12.3081 15.7833 12.6191 16.5342 13.1727 17.0878C13.7263 17.6414 14.4772 17.9524 15.2601 17.9524V17.9524Z"
                  stroke="white"
                  strokeWidth="1.10701"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.61816 17.9525V12.0484C8.61816 11.0698 9.00693 10.1312 9.69895 9.43919C10.391 8.74717 11.3295 8.3584 12.3082 8.3584H18.2123C19.1909 8.3584 20.1295 8.74717 20.8215 9.43919C21.5135 10.1312 21.9023 11.0698 21.9023 12.0484V17.9525C21.9023 18.9312 21.5135 19.8697 20.8215 20.5617C20.1295 21.2538 19.1909 21.6425 18.2123 21.6425H12.3082C11.3295 21.6425 10.391 21.2538 9.69895 20.5617C9.00693 19.8697 8.61816 18.9312 8.61816 17.9525Z"
                  stroke="white"
                  strokeWidth="1.10701"
                />
                <path
                  d="M19.3193 10.949L19.3267 10.9409"
                  stroke="white"
                  strokeWidth="1.10701"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href={"#"}>
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.00572"
                  y="0.60875"
                  width="28.7823"
                  height="28.7823"
                  rx="5.53506"
                  fill="#030E14"
                />
                <rect
                  x="1.00572"
                  y="0.60875"
                  width="28.7823"
                  height="28.7823"
                  rx="5.53506"
                  stroke="white"
                  strokeWidth="0.738007"
                />
                <path
                  d="M19.0863 7.62012H16.8723C15.8937 7.62012 14.9551 8.00889 14.2631 8.7009C13.5711 9.39292 13.1823 10.3315 13.1823 11.3102V13.5242H10.9683V16.4762H13.1823V22.3803H16.1343V16.4762H18.3483L19.0863 13.5242H16.1343V11.3102C16.1343 11.1144 16.2121 10.9267 16.3505 10.7883C16.4889 10.6499 16.6766 10.5721 16.8723 10.5721H19.0863V7.62012Z"
                  stroke="white"
                  strokeWidth="1.10701"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href={"#"}>
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.14195"
                  y="0.60875"
                  width="28.7823"
                  height="28.7823"
                  rx="5.53506"
                  stroke="white"
                  strokeWidth="0.738007"
                />
                <path
                  d="M23.6517 8.36582C23.6517 8.36582 22.1624 9.24552 21.3343 9.49497C20.8899 8.98391 20.2992 8.62168 19.6421 8.45728C18.9851 8.29288 18.2934 8.33423 17.6606 8.57575C17.0278 8.81727 16.4845 9.2473 16.1041 9.80768C15.7237 10.3681 15.5245 11.0318 15.5336 11.709V12.447C14.2367 12.4806 12.9515 12.193 11.7927 11.6097C10.6338 11.0264 9.63716 10.1656 8.89154 9.10383C8.89154 9.10383 5.93951 15.7459 12.5816 18.6979C11.0617 19.7296 9.25107 20.2469 7.41553 20.1739C14.0576 23.864 22.1757 20.1739 22.1757 11.6869C22.1757 11.4817 22.155 11.2765 22.1166 11.0743C22.8694 10.3319 23.6517 8.36582 23.6517 8.36582Z"
                  stroke="white"
                  strokeWidth="1.10701"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href={"#"}>
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.27867"
                  y="0.60875"
                  width="28.7823"
                  height="28.7823"
                  rx="5.53506"
                  stroke="white"
                  strokeWidth="0.738007"
                />
                <path
                  d="M17.1455 15.0004L14.5625 16.4764V13.5244L17.1455 15.0004Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="1.10701"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.28955 15.5224V14.4781C8.28955 12.3416 8.28955 11.2729 8.95745 10.5858C9.62608 9.89801 10.6785 9.86849 12.7825 9.80871C13.7789 9.78067 14.7973 9.76074 15.6696 9.76074C16.5412 9.76074 17.5597 9.78067 18.5567 9.80871C20.6608 9.86849 21.7132 9.89801 22.3811 10.5858C23.0497 11.2729 23.0497 12.3423 23.0497 14.4781V15.5224C23.0497 17.6596 23.0497 18.7275 22.3818 19.4154C21.7132 20.1024 20.6615 20.1327 18.5567 20.1917C17.5604 20.2205 16.5419 20.2404 15.6696 20.2404C14.7071 20.2376 13.7446 20.2213 12.7825 20.1917C10.6785 20.1327 9.62608 20.1032 8.95745 19.4154C8.28955 18.7275 8.28955 17.6589 8.28955 15.5231V15.5224Z"
                  stroke="white"
                  strokeWidth="1.10701"
                />
              </svg>
            </Link>
          </div>
        </div>

        <p className={`${lato.className} text-sm text-[#B1B5BB] font-light`}>
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>

      <div className="flex flex-wrap gap-[26px]">
        <div className="space-y-4 w-40">
          <p className={`text-lg font-semibold ${montserrat.className}`}>
            Quick Links
          </p>
          <div className="space-y-2 [&>*]:font-normal [&>*]:text-base/6">
            <Link href={"#"}>
              <p>Home</p>
            </Link>
            <Link href={"#"}>
              <p>About us</p>
            </Link>
            <Link href={"#"}>
              <p>Services</p>
            </Link>
            <Link href={"#"}>
              <p>Solution</p>
            </Link>
            <Link href={"#"}>
              <p>Blog</p>
            </Link>
            <Link href={"#"}>
              <p>Contact us</p>
            </Link>
          </div>
        </div>
        <div className="space-y-4 w-40">
          <p className={`text-lg font-semibold ${montserrat.className}`}>
            Solutions
          </p>
          <div className="space-y-2 [&>*]:font-normal [&>*]:text-base/6">
            <Link href={"#"}>
              <p>Cybersecurity</p>
            </Link>
            <Link href={"#"}>
              <p>Cloud Solutions</p>
            </Link>
            <Link href={"#"}>
              <p>DevSecOps</p>
            </Link>
            <Link href={"#"}>
              <p>Compliance</p>
            </Link>
            <Link href={"#"}>
              <p>IT Consultancy</p>
            </Link>
          </div>
        </div>
        <div className="space-y-4 w-40">
          <p className={`text-lg font-semibold ${montserrat.className}`}>
            Resources
          </p>
          <div className="space-y-2 [&>*]:font-normal [&>*]:text-base/6">
            <Link href={"#"}>
              <p>FAQs</p>
            </Link>
            <Link href={"#"}>
              <p>Case Studies</p>
            </Link>
            <Link href={"#"}>
              <p>Whitepapers</p>
            </Link>
            <Link href={"#"}>
              <p>Learning Hub</p>
            </Link>
          </div>
        </div>
        <div className="space-y-4 w-40">
          <p className={`text-lg font-semibold ${montserrat.className}`}>
            Company
          </p>
          <div className="space-y-2 [&>*]:font-normal [&>*]:text-base/6">
            <Link href={"#"}>
              <p>Who we are</p>
            </Link>
            <Link href={"#"}>
              <p>Join our team</p>
            </Link>
            <Link href={"#"}>
              <p>Partnerships</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
