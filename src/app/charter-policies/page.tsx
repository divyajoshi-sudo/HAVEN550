import type { Metadata } from "next";
import { contentService } from "@/lib/services/content.service";
import { constructMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { PolicySection } from "@/components/sections/PolicySection";

export async function generateMetadata(): Promise<Metadata> {
  const page = await contentService.getCharterPoliciesPage();
  return constructMetadata(page.meta);
}

export default async function CharterPoliciesPage() {
  const page = await contentService.getCharterPoliciesPage();

  return (
    <>
      <PageHero content={page.hero} />
      <PolicySection
        sections={page.sections}
        lastUpdated={page.lastUpdated}
        highlights={page.highlights}
        disclaimer={page.disclaimer}
        cta={page.cta}
      />
    </>
  );
}
