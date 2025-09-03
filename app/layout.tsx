import type { Metadata } from "next";
import { openSans } from "@/app/fonts";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "ENET - Innovate Securely, Scale Fearlessly.",
  description:
    "Enet Technologies empowers businesses to stay secure, scale faster, and comply effortlessly with next-gen cybersecurity, cloud solutions, and DevSecOps.",
  keywords: [
    "cybersecurity",
    "cloud solutions",
    "DevSecOps",
    "IT security",
    "managed security",
    "cloud services",
    "vulnerability assessment",
    "penetration testing",
    "compliance support",
    "blockchain security",
    "digital transformation",
    "IT solutions",
    "cloud computing",
  ],
  openGraph: {
    title: "ENET - Innovate Securely, Scale Fearlessly.",
    description:
      "Enet Technologies empowers businesses to stay secure, scale faster, and comply effortlessly with next-gen cybersecurity, cloud solutions, and DevSecOps.",
    url: "https://enetinnovative.com",
    siteName: "ENET Technologies",
    type: "website",
    images: [
      {
        url: "https://enetinnovative.com/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "ENET Technologies Open Graph Image",
      },
    ],
  },
  metadataBase: new URL("https://enetinnovative.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
