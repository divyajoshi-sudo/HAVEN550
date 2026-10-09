import type { Metadata } from "next";
import { contentService } from "@/lib/services/content.service";
import { constructMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { CruisingAreaSection } from "@/components/sections/CruisingAreaSection";
import { BoardingLocationsSection } from "@/components/sections/BoardingLocationsSection";
import { ExtendedCruisingSection } from "@/components/sections/ExtendedCruisingSection";

export async function generateMetadata(): Promise<Metadata> {
  const page = await contentService.getDestinationsPage();
  return constructMetadata(page.meta);
}

export default async function DestinationsPage() {
  const page = await contentService.getDestinationsPage();

  return (
    <>
      {/* SECTION 1 — HERO (NAVY) */}
      <PageHero content={page.hero as any} />

      {/* SECTION 2 — CRUISING AREA (IVORY #EFECE5) */}
      <CruisingAreaSection content={page.cruisingArea} background="ivory" />

      {/* SECTION 3 — BOARDING LOCATIONS (NAVY) */}
      <BoardingLocationsSection content={page.boardingLocations} />

      {/* SECTION 4 — EXTENDED CRUISING (IVORY #EFECE5) */}
      <ExtendedCruisingSection content={page.extendedCruising} background="ivory" />
    </>
  );
}
