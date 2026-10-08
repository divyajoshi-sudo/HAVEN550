import type { Metadata } from "next";
import { contentService } from "@/lib/services/content.service";
import { constructMetadata } from "@/lib/seo";
import { ExperienceHero } from "@/components/sections/ExperienceHero";
import { PossibilitiesGrid } from "@/components/sections/PossibilitiesGrid";
import { PersonalizeDiningSection } from "@/components/sections/PersonalizeDiningSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export async function generateMetadata(): Promise<Metadata> {
  const page = await contentService.getExperiencesPage();
  return constructMetadata(page.meta);
}

export default async function ExperiencesPage() {
  const page = await contentService.getExperiencesPage();

  return (
    <>
      <ExperienceHero content={page.hero} />
      <PossibilitiesGrid content={page.possibilities} />
      <PersonalizeDiningSection content={page.dining} />
      <CtaBanner content={page.ctaBanner} />
    </>
  );
}

