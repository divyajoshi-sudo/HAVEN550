import type { Metadata } from "next";
import { contentService } from "@/lib/services/content.service";
import { constructMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { CharterInquiryForm } from "@/components/forms/CharterInquiryForm";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { Heading } from "@/components/ui/Heading";

export async function generateMetadata(): Promise<Metadata> {
  const page = await contentService.getContactPage();
  return constructMetadata(page.meta);
}

export default async function ContactPage() {
  const [page, site] = await Promise.all([
    contentService.getContactPage(),
    contentService.getSiteInfo(),
  ]);

  return (
    <>
      <PageHero content={page.hero} />

      <Section background="navy">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Direct Communication Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <Eyebrow className="mb-3">{page.directContact.eyebrow}</Eyebrow>
                <Divider variant="short" />
                <Heading level={2} className="mb-6">
                  {page.directContact.headline}
                </Heading>

                <div className="space-y-4 text-haven-cream/75 text-sm sm:text-base leading-relaxed font-light mb-8">
                  {page.directContact.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Direct Details Card */}
              <div className="bg-haven-deep/70 border border-white/10 p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-[0.68rem] tracking-[0.25em] uppercase text-haven-gold font-light block mb-1">
                    Home Port & Base
                  </span>
                  <p className="text-haven-cream font-light text-base">
                    {site.location}
                  </p>
                </div>

                <div className="w-12 h-[1px] bg-white/10" />

                <div>
                  <span className="text-[0.68rem] tracking-[0.25em] uppercase text-haven-gold font-light block mb-1">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-haven-cream font-light text-base hover:text-haven-gold transition-colors"
                  >
                    {site.email}
                  </a>
                </div>

                <div className="w-12 h-[1px] bg-white/10" />

                <div>
                  <span className="text-[0.68rem] tracking-[0.25em] uppercase text-haven-gold font-light block mb-1">
                    Telephone Inquiry
                  </span>
                  <a
                    href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-haven-cream font-light text-base hover:text-haven-gold transition-colors"
                  >
                    {site.phone}
                  </a>
                </div>

                <div className="w-12 h-[1px] bg-white/10" />

                <p className="text-xs text-haven-slate font-light leading-relaxed">
                  {page.directContact.responsePromise}
                </p>
              </div>
            </div>

            {/* Inquiry Form Column */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <h3 className="font-[family-name:var(--font-playfair)] font-serif text-2xl sm:text-3xl font-light text-haven-cream mb-2">
                  {page.form.headline}
                </h3>
                <p className="text-sm text-haven-cream/70 font-light">
                  {page.form.description}
                </p>
              </div>

              <CharterInquiryForm
                interests={page.form.interests}
                guestOptions={page.form.guestOptions}
                successMessage={page.form.successMessage}
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
