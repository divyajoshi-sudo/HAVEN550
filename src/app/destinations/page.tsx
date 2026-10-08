import type { Metadata } from "next";
import { contentService } from "@/lib/services/content.service";
import { constructMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { SplitContent } from "@/components/sections/SplitContent";
import { CtaBanner } from "@/components/sections/CtaBanner";

export async function generateMetadata(): Promise<Metadata> {
  const page = await contentService.getDestinationsPage();
  return constructMetadata(page.meta);
}

export default async function DestinationsPage() {
  const page = await contentService.getDestinationsPage();

  return (
    <>
      <PageHero content={page.hero} />
      <FeatureGrid content={page.destinations} background="navy" />
      <SplitContent content={page.routeHighlight} background="navyLight" border="both" />
      <CtaBanner content={page.ctaBanner} />
    </>
  );
}
