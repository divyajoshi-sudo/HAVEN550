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
    <section className="relative min-h-[85vh] lg:min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-haven-deep">
      {/* Background Yacht Photo */}
      <div className="absolute inset-0">
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.75]"
        />
        {/* Layered dark luxury gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-haven-navy/80 via-haven-navy/40 to-haven-navy/95" />
        <div className="absolute inset-0 bg-radial from-transparent via-haven-navy/30 to-haven-navy/80" />
      </div>

      <Container size="narrow" className="relative z-10 text-center pt-32 pb-20">
        {/* Eyebrow with gold horizontal lines */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="w-8 sm:w-12 h-[1px] bg-haven-gold/60" />
          <Eyebrow className="text-haven-gold tracking-[0.35em]">
            {content.eyebrow}
          </Eyebrow>
          <span className="w-8 sm:w-12 h-[1px] bg-haven-gold/60" />
        </div>

        {/* Main Headline */}
        <Heading level={1} className="mb-6 uppercase tracking-[0.04em] text-haven-cream font-light">
          {content.headline}
        </Heading>

        {/* Specs Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-haven-gold/40 bg-haven-deep/60 mb-8 backdrop-blur-sm">
          <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-haven-gold font-medium">
            {content.badge}
          </span>
        </div>

        {/* Subtitle / Description */}
        <p className="text-sm sm:text-base md:text-lg text-haven-cream/80 font-light leading-relaxed max-w-2xl mx-auto">
          {content.description}
        </p>
      </Container>
    </section>
  );
}
