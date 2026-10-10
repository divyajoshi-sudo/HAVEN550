"use client";

import Image from "next/image";
import Link from "next/link";
import type { HeroContent } from "@/types/content";

export interface HeroProps {
  content?: HeroContent;
}

export function Hero({ content }: HeroProps) {
  const eyebrow = content?.eyebrow || "FORT LAUDERDALE · SOUTH FLORIDA";
  const headline = content?.headline || "THE ART OF BEING AWAY.";
  const subheadline = content?.subheadline || "Welcome Aboard HAVEN 550.";
  const paragraphs = content?.paragraphs || [
    "Experience South Florida from an entirely different perspective aboard HAVEN 550, a privately chartered 57-foot Ferretti yacht.",
    "Where the coastline becomes your backdrop, the ocean sets the pace, and every moment belongs to you.",
  ];
  const primaryCta = content?.primaryCta || {
    label: "EXPLORE THE YACHT",
    href: "/the-yacht",
  };
  const secondaryCta = content?.secondaryCta || {
    label: "REQUEST A CHARTER",
    href: "/contact",
  };
  const imageSrc = content?.image?.src || "/images/haven-running-front.jpeg";
  const imageAlt =
    content?.image?.alt || "HAVEN 550 privately chartered 57-foot Ferretti yacht on the water";

  return (
    <section
      id="hero"
      style={{ backgroundColor: "#081018", color: "#F8F8F6" }}
      className="relative w-full min-h-[calc(100vh-76px)] lg:h-[calc(100vh-76px)] flex items-center justify-center bg-[#081018] text-[#F8F8F6] overflow-hidden"
    >
      {/* =========================================================================
          FULL-SCREEN PHOTOGRAPH OF THE YACHT ON THE WATER
      ========================================================================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle dark gradient overlay for optimal readability while showing photography */}
        <div className="absolute inset-0 bg-[#081018]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081018]/65 via-[#081018]/25 to-[#081018]/75" />
      </div>

      {/* =========================================================================
          HERO EDITORIAL CONTENT: Minimal text overlay, elegant typography
      ========================================================================= */}
      <div
        style={{ color: "#F8F8F6" }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 py-16 sm:py-20 md:py-24 flex flex-col items-center text-center"
      >
        {/* 1. Eyebrow: FORT LAUDERDALE · SOUTH FLORIDA */}
        <div className="flex items-center justify-center gap-3.5 sm:gap-5 mb-4 sm:mb-5">
          <span className="w-8 sm:w-14 h-[1px] bg-[#B9A078]" />
          <p
            style={{ color: "#F8F8F6" }}
            className="text-xs sm:text-[13px] tracking-[0.3em] uppercase font-sans font-medium text-[#F8F8F6]"
          >
            {eyebrow}
          </p>
          <span className="w-8 sm:w-14 h-[1px] bg-[#B9A078]" />
        </div>

        {/* 2. Main Title: THE ART OF BEING AWAY. (Cormorant Garamond) */}
        <h1
          style={{
            color: "#F8F8F6",
            textShadow: "0 2px 14px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.95)",
          }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-normal uppercase tracking-[0.02em] leading-[1.08] sm:leading-[1.03] text-[#F8F8F6] mb-3 sm:mb-4"
        >
          {headline}
        </h1>

        {/* 3. Subheadline: Welcome Aboard HAVEN 550. */}
        <p
          style={{
            color: "#B9A078",
            textShadow: "0 1px 8px rgba(0,0,0,0.85)",
          }}
          className="font-serif italic text-lg sm:text-xl lg:text-2xl text-[#B9A078] font-light mb-6 tracking-wide"
        >
          {subheadline}
        </p>

        {/* 4. Narrative Paragraphs in Soft White (#F8F8F6) */}
        <div className="max-w-[720px] mx-auto text-center space-y-2 mb-8 sm:mb-10">
          {paragraphs.map((paragraph, idx) => (
            <p
              key={idx}
              style={{
                color: "#F8F8F6",
                textShadow: "0 1px 8px rgba(0,0,0,0.85)",
              }}
              className="font-sans text-sm sm:text-base md:text-[16.5px] text-[#F8F8F6] font-light leading-[1.7]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* 5. Minimal Rectangular Buttons with subtle hover effects */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
          {/* Button 1: EXPLORE THE YACHT */}
          <Link
            href={primaryCta.href}
            className="w-full sm:w-[210px] h-[48px] inline-flex items-center justify-center gap-2 px-6 border border-white/30 hover:border-[#B9A078] bg-[#101C29]/65 hover:bg-[#101C29] text-[#F8F8F6] text-[11.5px] sm:text-[12px] tracking-[0.18em] uppercase font-sans font-medium rounded-[2px] transition-all duration-300 shadow-md backdrop-blur-xs group"
          >
            <span>{primaryCta.label}</span>
            <span className="text-[13px] font-light leading-none group-hover:translate-x-0.5 transition-transform">
              ›
            </span>
          </Link>

          {/* Button 2: REQUEST A CHARTER */}
          <Link
            href={secondaryCta.href}
            className="w-full sm:w-[210px] h-[48px] inline-flex items-center justify-center gap-2 px-6 bg-[#B9A078] hover:bg-[#C8B08A] text-[#101C29] text-[11.5px] sm:text-[12px] tracking-[0.18em] uppercase font-sans font-semibold rounded-[2px] transition-all duration-300 shadow-lg group"
          >
            <span>{secondaryCta.label}</span>
            <span className="text-[13px] font-bold leading-none group-hover:translate-x-0.5 transition-transform">
              ›
            </span>
          </Link>
        </div>
      </div>

      {/* Subtle bottom scroll indicator line */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center pointer-events-none opacity-60">
        <div className="w-[1px] h-5 bg-white/40" />
      </div>
    </section>
  );
}
