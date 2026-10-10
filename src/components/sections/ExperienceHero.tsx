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
    <section
      style={{ backgroundColor: "#081018", color: "#F8F8F6" }}
      className="relative min-h-screen lg:h-screen w-full flex items-center overflow-hidden bg-[#081018] text-[#F8F8F6]"
    >
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
        <div className="absolute inset-0 bg-[#081018]/45 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent pointer-events-none" />
      </div>

      <Container size="default" className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="max-w-2xl text-left">
          {/* Eyebrow with gold horizontal accent line */}
          <div className="mb-6 flex items-center gap-3">
            <span className="w-10 sm:w-14 h-[1px] bg-[#B9A078]" />
            <Eyebrow className="text-[#B9A078] tracking-[0.35em]">
              {content.eyebrow}
            </Eyebrow>
          </div>

          {/* Main Headline — Fluid clamp scaling */}
          <h1
            style={{
              color: "#F8F8F6",
              textShadow: "0 2px 14px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.95)",
            }}
            className="font-serif mb-8 uppercase tracking-[0.04em] font-light text-3xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.08] text-[#F8F8F6]"
          >
            {content.headline}
          </h1>

          {/* Subtitle / Description */}
          <p
            style={{
              color: "#F8F8F6",
              textShadow: "0 1px 6px rgba(0,0,0,0.8)",
            }}
            className="text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl text-left text-[#F8F8F6] font-sans"
          >
            {content.description}
          </p>

          {/* Luxury Champagne Gold CTA Button */}
          <Link
            href={content.cta.href}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-[200px] h-[50px] px-4 text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-semibold bg-[#B9A078] hover:bg-[#C8B08A] text-[#101C29] rounded-[2px] transition-all duration-300 group shadow-xl whitespace-nowrap"
          >
            <span>{content.cta.label}</span>
            <span className="text-[13px] font-bold leading-none group-hover:translate-x-1 transition-transform">
              ›
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
