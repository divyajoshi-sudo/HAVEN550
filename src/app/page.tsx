import type { Metadata } from "next";
import { contentService } from "@/lib/services/content.service";
import { constructMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { SpecsStrip } from "@/components/sections/SpecsStrip";
import { DualEditorialCards } from "@/components/sections/DualEditorialCards";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { EditorialExperiences } from "@/components/sections/EditorialExperiences";
import { EditorialRates } from "@/components/sections/EditorialRates";
import { EditorialDestinations } from "@/components/sections/EditorialDestinations";
import { CtaBanner } from "@/components/sections/CtaBanner";

export async function generateMetadata(): Promise<Metadata> {
  const page = await contentService.getHomePage();
  return constructMetadata(page.meta);
}

export default async function HomePage() {
  const page = await contentService.getHomePage();

  return (
    <>
      {/* 01 — Cinematic Hero */}
      <Hero content={page.hero} />

      {/* 02 — IYC-Style Specification Strip */}
      <SpecsStrip />

      {/* 03 — Dual Editorial Feature Cards (Exact 816 x 459 Side-by-Side Cards) */}
      <DualEditorialCards
        background="softWhite"
        cards={[
          {
            title: "A Different Kind of Escape.",
            description: page.introduction.paragraphs[0],
            cta: {
              label: "EXPLORE THE YACHT",
              href: "/the-yacht",
            },
            image: {
              src: "/images/haven-aft-deck.jpeg",
              alt: "Spacious aft deck and teak dining table of HAVEN 550",
            },
          },
          {
            title: "Looking for a Yacht to Charter?",
            description:
              "Discover the finest private yacht charters in Fort Lauderdale and South Florida. Our bespoke journeys include tailored itineraries, 5-star service, and unforgettable coastal views.",
            cta: {
              label: "SEARCH CHARTERS",
              href: "/experiences",
            },
            image: {
              src: "/images/haven-profile-speed.jpeg",
              alt: "HAVEN 550 Ferretti yacht running at speed with South Florida skyline",
            },
          },
        ]}
      />

      {/* 04 — The Vessel: Italian Craftsmanship (Asymmetric Large Photography) */}
      <GalleryGrid
        content={{
          eyebrow: page.vessel.eyebrow,
          headline: page.vessel.headline,
          items: [
            {
              src: page.vessel.mainImage.src,
              alt: page.vessel.mainImage.alt,
              isMain: true,
            },
            ...page.vessel.detailImages.map((img) => ({
              src: img.src,
              alt: img.alt,
            })),
          ],
        }}
        background="deep"
      />

      {/* 05 — Experience Stories (Large Horizontal Numbered Blocks) */}
      <EditorialExperiences
        eyebrow="EXPERIENCES"
        headline="Moments Worth Making."
        background="softWhite"
      />

      {/* 06 — Charter Rates (Minimalist Pricing on Ivory) */}
      <EditorialRates
        eyebrow="CHARTER RATES"
        headline="Simple, Transparent Pricing."
        background="ivory"
      />

      {/* 07 — Destinations: Image-First Visual Discovery */}
      <EditorialDestinations
        eyebrow="DESTINATIONS"
        headline="The Coast Is Calling."
        description={page.destinations.paragraphs[0]}
        image={page.destinations.image}
      />

      {/* 08 — Final Editorial Closing Statement */}
      <CtaBanner content={page.ctaBanner} />
    </>
  );
}

