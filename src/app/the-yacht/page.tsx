import type { Metadata } from "next";
import { contentService } from "@/lib/services/content.service";
import { constructMetadata } from "@/lib/seo";
import { YachtHero } from "@/components/sections/YachtHero";
import { SplitContent } from "@/components/sections/SplitContent";
import { SpecsTable } from "@/components/sections/SpecsTable";
import { AmenityGrid } from "@/components/sections/AmenityGrid";
import { InteractiveGallery } from "@/components/sections/InteractiveGallery";
import { CtaBanner } from "@/components/sections/CtaBanner";

export async function generateMetadata(): Promise<Metadata> {
  const page = await contentService.getYachtPage();
  return constructMetadata(page.meta);
}

export default async function TheYachtPage() {
  const page = await contentService.getYachtPage();

  return (
    <>
      {/* Section 1: Hero */}
      <YachtHero content={page.hero} />

      {/* Section 2: Introduction */}
      <SplitContent content={page.introduction} background="navy" />

      {/* Section 3: Yacht Specifications */}
      <SpecsTable
        eyebrow={page.specs.eyebrow}
        headline={page.specs.headline}
        image={page.specs.image}
        items={page.specs.items}
        background="deep"
      />

      {/* Section 4: Onboard Amenities */}
      <AmenityGrid content={page.amenities} background="navy" />

      {/* Section 5: Photo Gallery */}
      <InteractiveGallery content={page.gallery} background="deep" />

      {/* Section 6: CTA Banner */}
      <CtaBanner content={page.ctaBanner} />
    </>
  );
}
