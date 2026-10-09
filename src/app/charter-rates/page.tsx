import type { Metadata } from "next";
import { contentService } from "@/lib/services/content.service";
import { constructMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { PackagesGridSection } from "@/components/sections/PackagesGridSection";
import { CharterInclusionsSection } from "@/components/sections/CharterInclusionsSection";
import { ReservationStepsSection } from "@/components/sections/ReservationStepsSection";
import { CharterPoliciesSection } from "@/components/sections/CharterPoliciesSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export async function generateMetadata(): Promise<Metadata> {
  const page = await contentService.getRatesPage();
  return constructMetadata(page.meta);
}

export default async function CharterRatesPage() {
  const page = await contentService.getRatesPage();

  return (
    <>
      {/* SECTION 1 — HERO (NAVY) */}
      <PageHero content={page.hero as any} />

      {/* SECTION 2 — CHARTER PACKAGES (IVORY #EFECE5) */}
      <PackagesGridSection content={page.packages} background="ivory" />

      {/* SECTION 3 — INCLUDED WITH EVERY CHARTER (NAVY) */}
      <CharterInclusionsSection content={page.includedWithCharter} />

      {/* SECTION 4 — RESERVATION INFORMATION (IVORY #EFECE5) */}
      <ReservationStepsSection content={page.reservationInfo} background="ivory" />

      {/* SECTION 5 — IMPORTANT INFORMATION (NAVY) */}
      <CharterPoliciesSection content={page.policies} />

      {/* SECTION 6 — CTA (NAVY) */}
      <CtaBanner content={page.ctaBanner} background="navy" />
    </>
  );
}
