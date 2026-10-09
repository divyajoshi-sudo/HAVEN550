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
      {/* Section 1: Hero (Navy) */}
      <YachtHero content={page.hero} />

      {/* Section 2: Introduction (Ivory #EFECE5) */}
      <SplitContent content={page.introduction} background="ivory" />

      {/* Section 3: Yacht Specifications (Navy) */}
      <SpecsTable
        eyebrow={page.specs.eyebrow}
        headline={page.specs.headline}
        image={page.specs.image}
        items={page.specs.items}
        background="deep"
      />

      {/* Section 4: Onboard Amenities (Ivory #EFECE5) */}
      <AmenityGrid content={page.amenities} background="ivory" />

      {/* Section 5: Photo Gallery (Navy) */}
      <InteractiveGallery content={page.gallery} background="deep" />

      {/* Section 6: CTA Banner (Navy) */}
      <CtaBanner content={page.ctaBanner} background="navy" />
    </>
  );
}
