import type { Metadata } from "next";
import { openSans } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "ENET - Innovate Securely, Scale Fearlessly.",
  description: "Enet Technologies empowers businesses to stay secure, scale faster, and comply effortlessly with next-gen cybersecurity, cloud solutions, and DevSecOps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
