import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Heading } from "../ui/Heading";

export interface ExperienceHeroProps {
  content: {
    eyebrow: string;
    headline: string;
    description: string;
    cta: { label: string; href: string };
    image: { src: string; alt: string };
  };
}

export function ExperienceHero({ content }: ExperienceHeroProps) {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-haven-deep">
      {/* Full-width Background Image */}
      <div className="absolute inset-0">
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dynamic Scrim & Horizontal Readability Gradient */}
        <div className="absolute inset-0 dynamic-scrim pointer-events-none opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none" />
      </div>

      <Container size="default" className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="max-w-2xl text-left">
          {/* Eyebrow with gold horizontal accent line */}
          <div className="mb-6 flex items-center gap-3">
            <span className="w-10 sm:w-14 h-[1px] bg-haven-gold/70" />
            <Eyebrow className="text-haven-gold tracking-[0.35em]">
              {content.eyebrow}
            </Eyebrow>
          </div>

          {/* Main Headline — Fluid clamp scaling */}
          <Heading
            level={1}
            className="mb-8 uppercase tracking-[0.04em] text-haven-cream font-light font-hero-fluid leading-[1.08]"
          >
            {content.headline}
          </Heading>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg md:text-xl text-haven-cream/85 font-light leading-relaxed mb-10 max-w-xl text-left">
            {content.description}
          </p>

          {/* Gold Outlined CTA Button with WCAG Focus States */}
          <Link
            href={content.cta.href}
            className="inline-flex items-center justify-center gap-3 h-[50px] px-8 text-[13px] tracking-[0.14em] uppercase font-semibold text-haven-gold border border-haven-gold/50 bg-haven-void/40 rounded-[2px] backdrop-blur-sm hover:bg-haven-gold hover:text-[#0C141D] transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <span>{content.cta.label}</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
