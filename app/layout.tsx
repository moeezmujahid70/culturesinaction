import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Cultures in Action | Engineering Cultures That Work",
  description:
    "Cultures in Action helps teams design a Culture Operating System that turns values into an explicit, operational way of working.",
  metadataBase: new URL("https://culturesinaction.net"),
  openGraph: {
    title: "Cultures in Action | Engineering Cultures That Work",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
