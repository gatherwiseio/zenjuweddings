import { servicePackages } from "@/content/services";
import { contact, siteUrl } from "@/content/site";

// Her business details in the form Google reads directly (schema.org JSON-LD, on the homepage):
// name, address, phone, founder, service area, social profiles and the six packages with prices.
// Helps her show up in local searches. Every value comes from the site's own content.
export function BusinessJsonLd() {
  const prices = servicePackages.map((p) => p.price);
  const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
  const [street, cityLine] = contact.address;
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,
    name: contact.legalName,
    alternateName: "Zenju Weddings and Events",
    description:
      "Wedding and event planning and design in Honolulu, Hawaii: elopements, day-of, partial and full coordination across Oahu, since 2010.",
    url: siteUrl,
    logo: `${siteUrl}/apple-icon.png`,
    image: `${siteUrl}/images/current-site/hero-video-still.jpg`,
    email: contact.email,
    telephone: contact.phoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: street,
      addressLocality: "Honolulu",
      addressRegion: "HI",
      postalCode: cityLine.match(/\d{5}/)?.[0],
      addressCountry: "US",
    },
    areaServed: { "@type": "Place", name: "Oahu, Hawaii" },
    foundingDate: "2010",
    founder: { "@type": "Person", name: "Yanicke Lim Sang" },
    sameAs: [contact.facebook, contact.instagram],
    priceRange: `${usd(Math.min(...prices))}–${usd(Math.max(...prices))}`,
    makesOffer: servicePackages.map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: p.summary,
      price: p.price,
      priceCurrency: "USD",
      url: `${siteUrl}/services#${p.id}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      // `<` escaped so the data can never close the script tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
