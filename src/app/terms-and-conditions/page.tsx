import type { Metadata } from "next";
import { pageMetadata, seo } from "@/content/seo";
import { LegalPage } from "@/components/LegalPage";
import { termsAndConditions } from "@/content/legal";

export const metadata: Metadata = pageMetadata(seo.terms);

export default function TermsAndConditionsPage() {
  return <LegalPage doc={termsAndConditions} />;
}
