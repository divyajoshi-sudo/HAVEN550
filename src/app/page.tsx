import type { Metadata } from "next";
import { contentService } from "@/lib/services/content.service";
import { constructMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { SplitContent } from "@/components/sections/SplitContent";
import { VesselSection } from "@/components/sections/VesselSection";
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
      {/* SECTION 1 — HERO (NAVY) */}
      <Hero content={page.hero} />

      {/* SECTION 2 — INTRODUCTION (IVORY #EFECE5) */}
      <SplitContent
        content={page.introduction}
        background="ivory"
      />

      {/* SECTION 3 — THE YACHT (NAVY) */}
      <VesselSection
        eyebrow={page.vessel.eyebrow}
        headline={page.vessel.headline}
        specsBadge={page.vessel.specsBadge}
        paragraphs={page.vessel.paragraphs}
        cta={page.vessel.cta}
        mainImage={page.vessel.mainImage}
        detailImages={page.vessel.detailImages}
      />

      {/* SECTION 4 — THE EXPERIENCE (IVORY #EFECE5) */}
      <EditorialExperiences
        eyebrow={page.experiences.eyebrow}
        headline={page.experiences.headline}
        items={page.experiences.items.map((item, idx) => ({
          number: `0${idx + 1}`,
          eyebrow: item.badge || ["COASTAL ESCAPE", "GOLDEN HOUR", "CELEBRATIONS", "OCEAN PLAY"][idx] || "EXPERIENCE",
          headline: item.title,
          title: item.title,
          description: item.description,
          image: item.image!,
          href: item.cta?.href || "/experiences",
          ctaText: "TAKE ME THERE",
        }))}
        ctaButton={page.experiences.cta}
        background="ivory"
      />

      {/* SECTION 5 — CHARTER RATES (NAVY) */}
      <EditorialRates
        eyebrow={page.rates.eyebrow}
        headline={page.rates.headline}
        subheadline={page.rates.subheadline}
        rates={page.rates.rates}
        inclusionNote={page.rates.inclusionNote}
        gratuityNote={page.rates.gratuityNote}
        ctaButton={page.rates.cta}
        background="navy"
      />

      {/* SECTION 6 — DESTINATIONS (IVORY #EFECE5) */}
      <EditorialDestinations
        eyebrow={page.destinations.eyebrow}
        headline={page.destinations.headline}
        paragraphs={page.destinations.paragraphs}
        image={page.destinations.image}
        ctaHref={page.destinations.cta?.href || "/destinations"}
        ctaLabel={page.destinations.cta?.label || "DISCOVER DESTINATIONS"}
        background="ivory"
      />

      {/* SECTION 7 — FINAL CTA (NAVY) */}
      <CtaBanner content={page.ctaBanner} background="navy" />
    </>
  );
}
