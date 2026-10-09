import type { Metadata } from "next";
import { contentService } from "@/lib/services/content.service";
import { constructMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { CharterInquiryForm } from "@/components/forms/CharterInquiryForm";
import { DirectContactSection } from "@/components/sections/DirectContactSection";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export async function generateMetadata(): Promise<Metadata> {
  const page = await contentService.getContactPage();
  return constructMetadata(page.meta);
}

export default async function ContactPage() {
  const page = await contentService.getContactPage();

  return (
    <>
      {/* SECTION 1 — HERO */}
      <PageHero content={page.hero as any} />

      {/* SECTIONS 2 & 3 — CHARTER INQUIRY FORM & DIRECT CONTACT */}
      <Section
        background="navy"
        className="relative overflow-hidden bg-[#0B141D]"
      >
        {/* Ambient background texture */}
        <div className="absolute inset-0 ambient-glow-gold pointer-events-none opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B9A078]/30 to-transparent" />

        <Container size="default">
          <div className="py-20 md:py-28 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">

            {/* Left: DIRECT CONTACT — sticky sidebar */}
            <div className="lg:col-span-4 xl:col-span-4 lg:sticky lg:top-28">
              <ScrollReveal direction="left" duration={0.9}>
                <DirectContactSection content={page.directContact} />
              </ScrollReveal>
            </div>

            {/* Vertical divider */}
            <div className="hidden lg:block lg:col-span-1 self-stretch">
              <div className="h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent mx-auto" />
            </div>

            {/* Right: CHARTER INQUIRY FORM */}
            <div className="lg:col-span-7 xl:col-span-7">
              <ScrollReveal direction="right" duration={0.9} delay={100} className="w-full">
                <div className="relative rounded-[2px] bg-[#09121B]/85 backdrop-blur-md border border-white/[0.08] p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
                  {/* Subtle top champagne accent hairline */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B9A078] to-transparent" />
                  <div className="pointer-events-none absolute -top-32 -right-32 w-80 h-80 bg-[#B9A078]/5 rounded-full blur-3xl" />

                  {/* Form header */}
                  <div className="mb-10 relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-[1.5px] bg-[#B9A078]" />
                      <p className="text-xs tracking-[0.28em] text-[#B9A078] uppercase font-sans font-medium">
                        CHARTER INQUIRY
                      </p>
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-[1.15] mb-4">
                      {page.form.headline}
                    </h2>
                    <p className="text-white/65 text-sm sm:text-base font-light leading-relaxed">
                      {page.form.description}
                    </p>
                  </div>

                  <div className="relative z-10">
                    <CharterInquiryForm
                      occasions={page.form.occasions}
                      guestOptions={page.form.guestOptions}
                      successMessage={page.form.successMessage}
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </Container>
      </Section>
    </>
  );
}
