import Image from "next/image";
import Link from "next/link";
import type { HeroContent } from "@/types/content";

export interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {
  return (
    <section id="hero" className="w-full bg-white flex flex-col">
      {/* 01 — White Editorial Headline Block below Header (Exact 104px Height: 1905 x 104) */}
      <div className="w-full px-4 sm:px-8 lg:px-12 h-[104px] min-h-[104px] max-h-[104px] flex flex-col justify-center bg-white border-b border-[#E5E0D8]/40">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-[2.65rem] lg:text-[2.85rem] font-normal text-[#1C252B] tracking-tight leading-[1.05] mb-1 animate-fade-in">
          {content.headline === "THE ART OF BEING AWAY"
            ? "The Art of Being Away."
            : content.headline}
        </h1>
        <p className="text-[0.82rem] sm:text-[0.88rem] text-[#5A626A] font-normal tracking-wide leading-tight animate-fade-in-up delay-100">
          A different kind of escape. We help you make the right one.
        </p>
      </div>

      {/* 02 — Large Cinematic Image & Video Media Canvas */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] lg:aspect-[21/9] min-h-[480px] lg:min-h-[660px] overflow-hidden group">
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-transform duration-[2.5s] ease-out group-hover:scale-105"
        />

        {/* Subtle bottom shadow overlay to anchor CTAs */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* Center-Bottom Navy Rectangular CTAs matching IYC */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-row items-center gap-4 sm:gap-6 z-20">
          <Link
            href="/the-yacht"
            className="min-w-[140px] text-center px-7 sm:px-9 py-3 sm:py-3.5 bg-[#071B2A] text-white text-[0.7rem] sm:text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#0d283e] transition-all duration-300 shadow-xl inline-flex items-center justify-center gap-2"
          >
            <span>EXPLORE</span>
            <span className="text-sm">›</span>
          </Link>
          <Link
            href="/contact"
            className="min-w-[140px] text-center px-7 sm:px-9 py-3 sm:py-3.5 bg-[#071B2A] text-white text-[0.7rem] sm:text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#0d283e] transition-all duration-300 shadow-xl inline-flex items-center justify-center gap-2"
          >
            <span>CHARTER</span>
            <span className="text-sm">›</span>
          </Link>
        </div>
      </div>
    </section>
  );
}


