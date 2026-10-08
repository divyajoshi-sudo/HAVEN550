import type { Metadata } from "next";
import { contentService } from "@/lib/services/content.service";
import { constructMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SplitContent } from "@/components/sections/SplitContent";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export async function generateMetadata(): Promise<Metadata> {
  const page = await contentService.getAboutPage();
  return constructMetadata(page.meta);
}

export default async function AboutPage() {
  const page = await contentService.getAboutPage();

  return (
    <>
      <PageHero content={page.hero} />
      <SplitContent content={page.story} background="navy" />
      <SplitContent content={page.philosophy} background="navyLight" border="both" />
      <FeatureGrid content={page.values} background="navy" />
      <CtaBanner content={page.ctaBanner} />
    </>
  );
}
