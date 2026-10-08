import type { Metadata } from "next";
import { contentService } from "@/lib/services/content.service";
import { constructMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { RatesTable } from "@/components/sections/RatesTable";
import { ProseBlock } from "@/components/sections/ProseBlock";
import { FaqList } from "@/components/sections/FaqList";
import { CtaBanner } from "@/components/sections/CtaBanner";

export async function generateMetadata(): Promise<Metadata> {
  const page = await contentService.getRatesPage();
  return constructMetadata(page.meta);
}

export default async function CharterRatesPage() {
  const page = await contentService.getRatesPage();

  return (
    <>
      <PageHero content={page.hero} />
      <RatesTable content={page.rates} background="navy" border="none" />

      {/* Inclusions Block */}
      <ProseBlock
        eyebrow="INCLUSIONS"
        headline={page.inclusions.headline}
        items={page.inclusions.items}
        background="navyLight"
      />

      {/* Gratuity & Policy Note */}
      <ProseBlock
        eyebrow="IMPORTANT DETAILS"
        headline={page.policiesNote.headline}
        paragraphs={page.policiesNote.paragraphs}
        background="navy"
      />

      <FaqList content={page.faq} background="navyLight" />
      <CtaBanner content={page.ctaBanner} />
    </>
  );
}
