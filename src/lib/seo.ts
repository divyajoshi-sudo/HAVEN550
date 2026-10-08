import type { Metadata } from "next";
import { env } from "./config/env";
import { BRAND } from "./config/constants";
import type { MetaContent } from "@/types/content";

export function constructMetadata(meta: MetaContent): Metadata {
  const url = `${env.siteUrl}${meta.canonical || ""}`;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords || [
      "luxury yacht charter",
      "Fort Lauderdale yacht charter",
      "private yacht",
      "Ferretti yacht",
      "HAVEN 550",
    ],
    metadataBase: new URL(env.siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: BRAND.fullName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/images/haven-running-front.jpeg",
          width: 1920,
          height: 1080,
          alt: `${BRAND.name} 57-foot Ferretti luxury yacht`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/images/haven-running-front.jpeg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND.fullName,
    legalName: BRAND.company,
    url: env.siteUrl,
    founder: {
      "@type": "Person",
      name: BRAND.founder,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fort Lauderdale",
      addressRegion: "FL",
      addressCountry: "US",
    },
    telephone: BRAND.phone,
    email: BRAND.email,
    description:
      "HAVEN 550 is a boutique luxury yacht charter offering private experiences aboard a 57-foot Ferretti yacht in Fort Lauderdale and South Florida.",
    priceRange: "$$$$",
  };
}
