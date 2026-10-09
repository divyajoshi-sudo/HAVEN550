import type { Metadata } from "next";
import { contentService } from "@/lib/services/content.service";
import { constructMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SplitContent } from "@/components/sections/SplitContent";
import { FounderSection } from "@/components/sections/FounderSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export async function generateMetadata(): Promise<Metadata> {
  const page = await contentService.getAboutPage();
  return constructMetadata(page.meta);
}

export default async function AboutPage() {
  const page = await contentService.getAboutPage();

  return (
    <>
      {/* SECTION 1 — HERO (NAVY) */}
      <PageHero content={page.hero as any} />

      {/* SECTION 2 — COMPANY INTRODUCTION (IVORY #EFECE5) */}
      <SplitContent
        content={{
          eyebrow: page.companyIntro.eyebrow,
          headline: page.companyIntro.headline,
          paragraphs: page.companyIntro.paragraphs,
          image: {
            src: page.companyIntro.image?.src || "/images/haven-aft-deck.jpeg",
            alt: page.companyIntro.image?.alt || "HAVEN 550 aft deck",
          },
          imagePosition: "right",
        }}
        background="ivory"
      />

      {/* SECTION 3 — FOUNDER (NAVY) */}
      <FounderSection content={page.founder} />

      {/* SECTION 4 — OUR APPROACH (IVORY #EFECE5) */}
      <SplitContent
        content={{
          eyebrow: page.approach.eyebrow,
          headline: page.approach.headline,
          paragraphs: page.approach.paragraphs,
          image: {
            src: page.approach.image?.src || "/images/haven-bow-sunpad.jpeg",
            alt: page.approach.image?.alt || "HAVEN 550 bow sunpad",
          },
          imagePosition: "left",
        }}
        background="ivory"
        border="both"
      />

      {/* SECTION 5 — CTA (NAVY) */}
      <CtaBanner content={page.ctaBanner} background="navy" />
    </>
  );
}
