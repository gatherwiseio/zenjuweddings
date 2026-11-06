import type { Metadata } from "next";
import { pageMetadata, seo } from "@/content/seo";
import { LegalPage } from "@/components/LegalPage";
import { privacyPolicy } from "@/content/legal";

export const metadata: Metadata = pageMetadata(seo.privacy);

export default function PrivacyPolicyPage() {
  return <LegalPage doc={privacyPolicy} />;
}
