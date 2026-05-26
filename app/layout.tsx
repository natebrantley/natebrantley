import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SiteFooter from "./components/SiteFooter";

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
  metadataBase: new URL("https://natebrantley.com"),
  title: {
    default: "Nate Brantley",
    template: "%s | Nate Brantley",
  },
  description:
    "A cohesive personal stream on business, trading cards, stocks, and real estate.",
  keywords: [
    "Nate Brantley",
    "business",
    "trading cards",
    "stocks",
    "real estate",
    "Oregon real estate",
    "Washington real estate",
  ],
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  openGraph: {
    title: "Nate Brantley",
    description:
      "A cohesive personal stream on business, trading cards, stocks, and real estate.",
    url: "/",
    siteName: "Nate Brantley",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nate Brantley",
    description:
      "A cohesive personal stream on business, trading cards, stocks, and real estate.",
  },
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
        <main className="min-h-screen pt-14">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
