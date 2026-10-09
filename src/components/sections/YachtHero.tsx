import Image from "next/image";
import { Container } from "../layout/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Heading } from "../ui/Heading";

export interface YachtHeroProps {
  content: {
    eyebrow: string;
    headline: string;
    badge: string;
    description: string;
    image: { src: string; alt: string };
  };
}

export function YachtHero({ content }: YachtHeroProps) {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-haven-deep">
      {/* Background Yacht Photo */}
      <div className="absolute inset-0">
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dynamic Scrim Gradient — Guarantees 7:1 contrast while preserving rich ocean imagery */}
        <div className="absolute inset-0 dynamic-scrim pointer-events-none" />
      </div>

      <Container size="default" className="relative z-10 text-center pt-32 pb-20 md:pt-40 md:pb-24 flex flex-col items-center">
        {/* Eyebrow with gold horizontal lines */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="w-8 sm:w-12 h-[1px] bg-haven-gold/60" />
          <Eyebrow className="text-haven-gold tracking-[0.35em]">
            {content.eyebrow}
          </Eyebrow>
          <span className="w-8 sm:w-12 h-[1px] bg-haven-gold/60" />
        </div>

        {/* Main Headline */}
        <Heading level={1} className="mb-6 uppercase tracking-[0.04em] text-haven-cream font-light font-hero-fluid">
          {content.headline}
        </Heading>

        {/* Specs Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-2.5 border border-haven-gold/30 bg-haven-void/60 mb-8 rounded-[2px] backdrop-blur-sm">
          <span className="text-xs sm:text-[13px] tracking-[0.22em] uppercase text-haven-gold font-medium">
            {content.badge}
          </span>
        </div>

        {/* Subtitle / Description */}
        <p className="text-sm sm:text-base md:text-lg text-haven-cream/80 font-light leading-relaxed max-w-2xl mx-auto text-center">
          {content.description}
        </p>
      </Container>
    </section>
  );
}
