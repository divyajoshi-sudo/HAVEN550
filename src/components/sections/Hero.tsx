import Image from "next/image";
import Link from "next/link";
import type { HeroContent } from "@/types/content";
import { Container } from "../layout/Container";

export interface HeroProps {
  content: HeroContent;
}

import { TextReveal } from "../motion/TextReveal";

export function Hero({ content }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen lg:h-screen w-full flex items-center justify-center overflow-hidden bg-[#0C141D]"
    >
      {/* 01 — Full-Screen Yacht Background Image with Cinematic 16:9 / 21:9 Framing */}
      <div className="absolute inset-0 z-0" data-cursor="explore">
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center animate-ken-burns"
        />
        {/* Dynamic Scrim Gradient — Guarantees 7:1 contrast while preserving rich ocean imagery */}
        <div className="absolute inset-0 dynamic-scrim pointer-events-none" />
      </div>

      {/* 02 — Minimal Editorial Text Composition */}
      <Container size="default" className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-24 text-center flex flex-col items-center">
        {/* Small Editorial Label */}
        <div className="flex items-center gap-3 mb-4 animate-fade-in">
          <span className="w-6 sm:w-10 h-[1.5px] bg-[#D4AF37]/80" />
          <p className="eyebrow-luxury">
            {content.eyebrow}
          </p>
          <span className="w-6 sm:w-10 h-[1.5px] bg-[#D4AF37]/80" />
        </div>

        {/* Primary Headline — Fluid clamp scaling without layout shifts */}
        <TextReveal
          as="h1"
          className="font-serif font-hero-fluid font-light text-[#F7F5F0] leading-tight mb-4 w-full max-w-6xl mx-auto drop-shadow-sm sm:whitespace-nowrap"
        >
          {content.headline}
        </TextReveal>

        {/* Welcome Aboard Line — Expanded */}
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#F7F5F0] font-light mb-6 tracking-wide drop-shadow-sm animate-fade-in-up delay-100 max-w-5xl mx-auto w-full">
          {content.subheadline}
        </p>

        {/* Descriptive Body Copy — Expanded Full Screen Justified Content */}
        <div className="w-full max-w-5xl lg:max-w-6xl mx-auto space-y-4 mb-10 text-[#EFECE5] text-base sm:text-lg md:text-[19px] lg:text-[20px] font-light leading-[1.75] drop-shadow-sm animate-fade-in-up delay-200 text-justify">
          {content.paragraphs.map((p, idx) => (
            <p key={idx} className="text-justify">{p}</p>
          ))}
        </div>

        {/* Action Buttons — Unified 50px Squared Luxury Buttons with WCAG Focus States */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-xl mx-auto animate-fade-in-up delay-300">
          <Link
            href={content.primaryCta.href}
            data-cursor="charter"
            className="w-full sm:w-auto min-w-[210px] h-[50px] px-8 bg-[#B9A078] hover:bg-[#D4AF37] text-[#0C141D] text-[13px] tracking-[0.14em] uppercase font-semibold transition-all duration-300 rounded-[2px] inline-flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <span>{content.primaryCta.label}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
          <Link
            href={content.secondaryCta.href}
            data-cursor="view"
            className="w-full sm:w-auto min-w-[210px] h-[50px] px-8 bg-transparent border border-white/40 text-white text-[13px] tracking-[0.14em] uppercase font-semibold hover:bg-white hover:text-[#0C141D] hover:border-white transition-all duration-300 rounded-[2px] backdrop-blur-sm inline-flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <span>{content.secondaryCta.label}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
        </div>
      </Container>

      {/* Subtle Editorial Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 pointer-events-none opacity-70 animate-float">
        <span className="text-[10px] tracking-[0.24em] uppercase text-white/70 font-light">
          SCROLL
        </span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#B9A078] via-[#B9A078]/50 to-transparent" />
      </div>
    </section>
  );
}
