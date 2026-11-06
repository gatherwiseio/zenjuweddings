import type { Metadata, Viewport } from "next";
import { Jost, Pinyon_Script } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { InquiryDialog } from "@/components/InquiryDialog";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { siteUrl } from "@/content/site";

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
  // Absolute base for canonical links and share images: her domain, even while the site is on vercel.app.
  metadataBase: new URL(siteUrl),
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
      <body>
        <SmoothScroll />
        {children}
        <InquiryDialog />
      </body>
    </html>
  );
}
