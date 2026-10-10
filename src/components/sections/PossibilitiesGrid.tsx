"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface PossibilityItem {
  title: string;
  description: string;
  image: { src: string; alt: string };
  ctaHref?: string;
  buttonLabel?: string;
  category?: string;
}

export interface PossibilitiesGridProps {
  content: {
    eyebrow: string;
    headline: string;
    subheadline?: string;
    items: PossibilityItem[];
  };
}

function getCategoryForTitle(title: string): string {
  const t = title.toLowerCase();
  if (t.includes("coastal")) return "COASTAL ESCAPE";
  if (t.includes("birthday") || t.includes("celebration")) return "SPECIAL CELEBRATION";
  if (t.includes("anniversary") || t.includes("romantic")) return "ROMANTIC MOMENTS";
  if (t.includes("corporate") || t.includes("gathering")) return "EXECUTIVE CHARTERS";
  if (t.includes("sunset")) return "GOLDEN HOUR CRUISE";
  if (t.includes("water") || t.includes("toy")) return "OCEAN PLAY & WATER TOYS";
  return "CHARTER EXPERIENCE";
}

export function PossibilitiesGrid({ content }: PossibilitiesGridProps) {
  const items = content.items || [];

  // Split items evenly between Row 1 and Row 2
  const midPoint = Math.ceil(items.length / 2);
  const row1Items = items.slice(0, midPoint);
  const row2Items = items.slice(midPoint);

  // If either row has fewer than 3 items, provide balanced sets
  const safeRow1 = row1Items.length > 0 ? row1Items : items;
  const safeRow2 = row2Items.length > 0 ? row2Items : items;

  // Quadruple items to create a continuous, infinite 100% seamless marquee loop
  const row1Display = [...safeRow1, ...safeRow1, ...safeRow1, ...safeRow1];
  const row2Display = [...safeRow2, ...safeRow2, ...safeRow2, ...safeRow2];

  return (
    <section className="min-h-screen lg:h-screen flex flex-col justify-between py-6 sm:py-8 lg:py-6 bg-white text-[#101C29] relative overflow-hidden border-t border-b border-[#EAE6DF]">
      {/* Centered Editorial Section Header */}
      <Container size="default" className="relative z-10 shrink-0">
        <ScrollReveal direction="up" duration={0.85} className="w-full flex justify-center">
          <div className="w-full max-w-3xl mx-auto text-center flex flex-col items-center mb-3 sm:mb-4 lg:mb-3">
            {content.eyebrow && (
              <div className="flex items-center justify-center gap-3 mb-1.5">
                <span className="w-8 sm:w-12 h-[1.5px] bg-[#B9A078]" />
                <p className="text-xs sm:text-[12.5px] tracking-[0.28em] text-[#9E8357] uppercase font-sans font-semibold">
                  {content.eyebrow}
                </p>
                <span className="w-8 sm:w-12 h-[1.5px] bg-[#B9A078]" />
              </div>
            )}

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#101C29] font-normal tracking-tight leading-[1.14] mb-1.5 text-center mx-auto w-full">
              {content.headline}
            </h2>

            {content.subheadline && (
              <p className="text-xs sm:text-sm font-sans text-[#101C29]/80 font-light leading-relaxed max-w-2xl mx-auto text-center">
                {content.subheadline}
              </p>
            )}
          </div>
        </ScrollReveal>
      </Container>

      {/* Dual Continuous Moving Rows Stage */}
      <div className="relative w-full overflow-hidden marquee-dual-stage flex-1 flex flex-col justify-center my-auto">

        {/* =========================================================================
            ROW 1: Continuous smooth movement to the left (never pauses on hover)
        ========================================================================= */}
        <div className="w-full overflow-hidden">
          <div className="animate-marquee-left select-none cursor-pointer">
            {row1Display.map((item, idx) => {
              const category = item.category || getCategoryForTitle(item.title);
              const href = item.ctaHref || "/contact";

              return (
                <Link
                  key={`r1-${idx}`}
                  href={href}
                  className="marquee-card-item group relative flex-shrink-0 rounded-[3px] overflow-hidden bg-black shadow-2xl border border-black/20 transition-transform duration-300 hover:shadow-[0_25px_50px_rgba(0,0,0,0.35)]"
                >
                  {/* Full-bleed rich photography */}
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 768px) 82vw, 520px"
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-108"
                  />

                  {/* Centered editorial text block with ample padding */}
                  <div className="absolute inset-0 p-5 sm:p-7 md:p-8 flex flex-col justify-center items-center text-center z-10 bg-black/20 hover:bg-black/10 transition-colors">
                    <span className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.28em] text-white/95 uppercase mb-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                      {category}
                    </span>

                    <h3 className="font-sans font-black text-xl sm:text-2xl md:text-3xl lg:text-[32px] uppercase tracking-[0.06em] !text-white text-white leading-[1.08] mb-2 drop-shadow-[0_3px_10px_rgba(0,0,0,1)] drop-shadow-[0_6px_24px_rgba(0,0,0,0.95)] group-hover:text-[#F3E5AB] transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm !text-white/95 text-white/95 font-medium leading-relaxed max-w-sm drop-shadow-[0_2px_6px_rgba(0,0,0,1)] line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            ROW 2: Continuous smooth movement to the right (never pauses on hover)
        ========================================================================= */}
        <div className="w-full overflow-hidden">
          <div className="animate-marquee-right select-none cursor-pointer">
            {row2Display.map((item, idx) => {
              const category = item.category || getCategoryForTitle(item.title);
              const href = item.ctaHref || "/contact";

              return (
                <Link
                  key={`r2-${idx}`}
                  href={href}
                  className="marquee-card-item group relative flex-shrink-0 rounded-[3px] overflow-hidden bg-black shadow-2xl border border-black/20 transition-transform duration-300 hover:shadow-[0_25px_50px_rgba(0,0,0,0.35)]"
                >
                  {/* Full-bleed rich photography */}
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 768px) 82vw, 520px"
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-108"
                  />

                  {/* Centered editorial text block with ample padding */}
                  <div className="absolute inset-0 p-5 sm:p-7 md:p-8 flex flex-col justify-center items-center text-center z-10 bg-black/20 hover:bg-black/10 transition-colors">
                    <span className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.28em] text-white/95 uppercase mb-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                      {category}
                    </span>

                    <h3 className="font-sans font-black text-xl sm:text-2xl md:text-3xl lg:text-[32px] uppercase tracking-[0.06em] !text-white text-white leading-[1.08] mb-2 drop-shadow-[0_3px_10px_rgba(0,0,0,1)] drop-shadow-[0_6px_24px_rgba(0,0,0,0.95)] group-hover:text-[#F3E5AB] transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm !text-white/95 text-white/95 font-medium leading-relaxed max-w-sm drop-shadow-[0_2px_6px_rgba(0,0,0,1)] line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
