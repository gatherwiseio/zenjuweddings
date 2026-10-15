import type { Metadata, Viewport } from "next";
import { Jost, Pinyon_Script } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
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
    <html lang="en" className={`${jost.variable} ${pinyon.variable}`}>
      <body>{children}</body>
    </html>
  );
}
