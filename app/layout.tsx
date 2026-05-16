import type { Metadata } from "next";
import { Cormorant_Garamond, Instrument_Sans } from "next/font/google";
import { ScrollReveal } from "@/components/scroll-reveal";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cultures in Action | Culture Operating Systems",
  description:
    "Cultures in Action helps teams design a Culture Operating System that turns values into an explicit, operational way of working.",
  metadataBase: new URL("https://culturesinaction.net"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Cultures in Action | Culture Operating Systems",
    description:
      "Explore the Culture Quest Kickstart and the Culture Operating System framework for teams that want culture to work in practice.",
    images: ["/culture-precision-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${instrumentSans.variable}`}>
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
