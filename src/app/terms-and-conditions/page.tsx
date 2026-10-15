import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { termsAndConditions } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions | Zenju Weddings",
  description: termsAndConditions.description,
};

export default function TermsAndConditionsPage() {
  return <LegalPage doc={termsAndConditions} />;
}
