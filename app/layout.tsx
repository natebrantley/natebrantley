import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nate Brantley | Modern Real Estate. Timeless Expertise.",
  description:
    "Premium real estate services with Nate Brantley. Listings, valuations, and personalized guidance.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1e3547",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{ WebkitTextSizeAdjust: "100%" }}>
      <body className={`${cormorant.variable} ${dmSans.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
