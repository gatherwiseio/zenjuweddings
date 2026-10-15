import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacyPolicy } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Zenju Weddings",
  description: privacyPolicy.description,
};

export default function PrivacyPolicyPage() {
  return <LegalPage doc={privacyPolicy} />;
}
