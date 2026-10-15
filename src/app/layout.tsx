import type { Metadata, Viewport } from "next";
import { Barlow_Semi_Condensed, Jost, Pinyon_Script } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

// Fallback for the logo's Avenir Next Condensed (an Apple system font, not on Google Fonts)
// on Windows and Android.
const barlowCondensed = Barlow_Semi_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: "600",
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Zenju Weddings | Wedding Planner in Honolulu, Hawaii",
  description:
    "Zenju Weddings and Events of Hawaii plans unique, elegant and memorable weddings across Oahu, from full coordination to oceanfront elopements. Founded in 2010 by Yanicke Lim Sang.",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jost.variable} ${barlowCondensed.variable} ${pinyon.variable}`}>
      <body>{children}</body>
    </html>
  );
}
