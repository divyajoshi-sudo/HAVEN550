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
    <section className="relative min-h-[90vh] lg:min-h-[95vh] w-full flex items-center overflow-hidden bg-haven-deep">
      {/* Full-width Background Image */}
      <div className="absolute inset-0">
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.72]"
        />
        {/* Cinematic dark luxury gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-haven-deep/95 via-haven-navy/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-haven-deep via-transparent to-haven-deep/60" />
      </div>

      <Container size="default" className="relative z-10 pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="max-w-2xl text-left">
          {/* Eyebrow with gold horizontal accent line */}
          <div className="mb-6 flex items-center gap-3">
            <span className="w-10 sm:w-14 h-[1px] bg-haven-gold/70" />
            <Eyebrow className="text-haven-gold tracking-[0.35em]">
              {content.eyebrow}
            </Eyebrow>
          </div>

          {/* Main Headline */}
          <Heading
            level={1}
            className="mb-8 uppercase tracking-[0.04em] text-haven-cream font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]"
          >
            {content.headline}
          </Heading>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg md:text-xl text-haven-cream/85 font-light leading-relaxed mb-10 max-w-xl">
            {content.description}
          </p>

          {/* Gold Outlined CTA Button */}
          <Link
            href={content.cta.href}
            className="inline-flex items-center gap-3 px-8 py-4 text-xs sm:text-sm tracking-[0.25em] uppercase font-medium text-haven-gold border border-haven-gold/60 bg-haven-deep/40 backdrop-blur-sm hover:bg-haven-gold hover:text-haven-deep transition-all duration-300 group shadow-lg"
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
