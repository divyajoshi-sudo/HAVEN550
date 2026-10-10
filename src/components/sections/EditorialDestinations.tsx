"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface EditorialDestinationsProps {
  eyebrow?: string;
  headline?: string;
  paragraphs?: string[];
  image?: { src: string; alt: string };
  secondaryImage?: { src: string; alt: string };
  ctaHref?: string;
  ctaLabel?: string;
  background?: "ivory" | "navy";
}

const DESTINATION_TAGS = [
  { name: "FORT LAUDERDALE", desc: "Intracoastal & River" },
  { name: "HAULOVER SANDBAR", desc: "Social Anchorage" },
  { name: "POMPANO BEACH", desc: "Coastal Cruising" },
  { name: "SOUTH FLORIDA", desc: "Secluded Coves" },
];

export function EditorialDestinations({
  eyebrow = "EXPLORE SOUTH FLORIDA",
  headline = "The Coast Is Calling.",
  paragraphs = [
    "From the waterways of Fort Lauderdale to the beautiful coastline between Haulover and Pompano Beach, HAVEN 550 offers an exceptional perspective on South Florida.",
    "Cruise past waterfront estates, enjoy scenic coastal views, or spend an afternoon discovering the beauty of the region from the water.",
  ],
  image = {
    src: "/images/haven-aerial-topdown.jpeg",
    alt: "Top-down aerial tracking shot of HAVEN 550 cruising along the South Florida coast",
  },
  secondaryImage = {
    src: "/images/haven-aerial-stern.jpeg",
    alt: "HAVEN 550 cruising coastal waterways",
  },
  ctaHref = "/destinations",
  ctaLabel = "DISCOVER DESTINATIONS",
  background = "navy",
}: EditorialDestinationsProps) {
  const isNavy = background === "navy";

  return (
    <section
      style={{
        backgroundColor: isNavy ? "#101C29" : "#F7F5F0",
      }}
      className={`relative w-full min-h-screen lg:h-screen overflow-hidden flex flex-col lg:flex-row items-stretch border-t border-b transition-colors duration-300 ${
        isNavy
          ? "bg-[#101C29] text-[#F8F8F6] border-white/10"
          : "bg-[#F7F5F0] text-[#101C29] border-[#EAE6DF]"
      }`}
    >
      {/* =========================================================================
          LEFT HALF: Main Feature Image (occupies complete space of section: top, bottom, full bleed)
      ========================================================================= */}
      <div
        className={`relative w-full lg:w-1/2 h-[380px] sm:h-[460px] lg:h-full shrink-0 overflow-hidden group ${
          isNavy
            ? "border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0B131C]"
            : "border-b lg:border-b-0 lg:border-r border-[#EAE6DF] bg-white"
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={false}
          className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
        />
      </div>

      {/* =========================================================================
          RIGHT HALF: Secondary Image (complete top space) + Content (unboxed, NO card)
      ========================================================================= */}
      <div className="w-full lg:w-1/2 flex flex-col lg:h-full justify-between overflow-hidden">
        {/* Top: Landscape Image occupying complete top space of right half */}
        <div
          className={`relative w-full h-[220px] sm:h-[260px] lg:h-[36%] shrink-0 overflow-hidden group border-b ${
            isNavy ? "border-white/10 bg-[#0B131C]" : "border-[#EAE6DF] bg-white"
          }`}
        >
          <Image
            src={secondaryImage.src}
            alt={secondaryImage.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={false}
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        </div>

        {/* Bottom: Editorial Content — cleanly unboxed (NO card wrapper) */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-8 text-left">
          <ScrollReveal direction="up" duration={0.85}>
            {/* Eyebrow Header with Gold Accent Line */}
            {eyebrow && (
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[1.5px] bg-[#B9A078]" />
                <p className="text-xs sm:text-[13px] tracking-[0.24em] text-[#B9A078] uppercase font-sans font-semibold">
                  {eyebrow}
                </p>
              </div>
            )}

            {/* Headline */}
            <h2
              className={`font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight leading-[1.12] mb-4 ${
                isNavy ? "text-[#F8F8F6]" : "text-[#101C29]"
              }`}
            >
              {headline}
            </h2>

            {/* Body Paragraphs */}
            <div
              className={`space-y-3 text-[15px] sm:text-base leading-relaxed font-sans font-normal mb-6 max-w-xl ${
                isNavy ? "text-[#F8F8F6]" : "text-[#101C29]"
              }`}
            >
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Featured Cruising Grounds Tags */}
            <div
              className={`pt-5 border-t mb-7 max-w-xl ${
                isNavy ? "border-white/10" : "border-[#EAE6DF]"
              }`}
            >
              <span
                className={`text-[10.5px] tracking-[0.22em] uppercase font-sans font-semibold block mb-3 ${
                  isNavy ? "text-[#B9A078]" : "text-[#717E8C]"
                }`}
              >
                FEATURED CRUISING GROUNDS:
              </span>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {DESTINATION_TAGS.map((tag) => (
                  <span
                    key={tag.name}
                    className={`px-3 py-1.5 text-[10px] sm:text-[11px] tracking-[0.16em] uppercase font-sans font-medium rounded-[1px] border transition-colors ${
                      isNavy
                        ? "bg-[#101C29] text-[#F8F8F6] border-white/15 hover:border-[#B9A078]"
                        : "bg-[#F7F5F0] text-[#101C29] border-[#EAE6DF] hover:border-[#101C29]"
                    }`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href={ctaHref}
                className={`inline-flex items-center justify-center gap-2 w-full sm:w-[220px] min-h-[48px] h-[50px] px-6 rounded-[1px] text-[12px] tracking-[0.16em] uppercase font-semibold transition-all duration-300 shadow-xl group cursor-pointer whitespace-nowrap ${
                  isNavy
                    ? "bg-[#B9A078] hover:bg-[#C8B08A] text-[#101C29]"
                    : "bg-[#101C29] hover:bg-[#182A3E] text-[#F8F8F6]"
                }`}
              >
                <span>{ctaLabel}</span>
                <span className="text-[13px] font-bold leading-none group-hover:translate-x-0.5 transition-transform">
                  ›
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
