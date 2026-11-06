import type { Metadata, Viewport } from "next";
import { Jost, Pinyon_Script } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { InquiryDialog } from "@/components/InquiryDialog";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { seo } from "@/content/seo";
import { businessName, siteUrl } from "@/content/site";

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
  // Fallbacks for any page without its own (each page sets its own from src/content/seo.ts).
  title: seo.home.title,
  description: seo.home.description,
  applicationName: businessName,
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
