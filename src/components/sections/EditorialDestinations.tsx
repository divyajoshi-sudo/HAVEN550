"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface EditorialDestinationsProps {
  eyebrow?: string;
  headline?: string;
  paragraphs?: string[];
  image?: { src: string; alt: string };
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
    "From the historic waterways of Fort Lauderdale to the pristine coastline between Haulover and Pompano Beach, HAVEN 550 offers an unrivaled perspective on South Florida.",
    "Cruise past magnificent waterfront architecture, anchor at secluded sandbars, or spend an unhurried afternoon discovering the vibrant blue waters of the Atlantic.",
  ],
  image = {
    src: "/images/haven-aerial-stern.jpeg",
    alt: "Aerial tracking shot of HAVEN 550 cruising along the South Florida coast",
  },
  ctaHref = "/destinations",
  ctaLabel = "DISCOVER ALL DESTINATIONS",
  background = "ivory",
}: EditorialDestinationsProps) {
  const isLight = background === "ivory";

  return (
    <section
      className={`relative min-h-screen w-full flex flex-col justify-center overflow-hidden transition-colors duration-300 ${
        isLight
          ? "bg-[#EFECE5] text-[#08182B] border-t border-b border-[#D8D2C6]"
          : "bg-[#07111A] text-[#F7F5F0] border-t border-b border-white/10"
      }`}
    >
      {/* 01 — Full-Bleed Ocean Photography with Crisp Contrast (NO washed-out white fog) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          priority={false}
          className="object-cover object-[70%_center] lg:object-[80%_center] contrast-[1.02] transition-transform duration-1000 ease-out hover:scale-105"
        />

        {/* Soft edge gradient to ensure crisp contrast without any card box */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* 02 — Open Content Composition (No card box) */}
      <Container size="default" className="relative z-10 py-16 lg:py-24">
        <div className="max-w-xl lg:max-w-[620px]">
          <ScrollReveal direction="up" duration={0.85}>
            <div className="relative text-[#F7F5F0] py-4">
              {/* Eyebrow Header with Gold Accent Line */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1.5px] bg-[#B9A078]" />
                <p className="text-xs sm:text-[13px] tracking-[0.28em] uppercase font-sans font-medium text-[#B9A078]">
                  {eyebrow}
                </p>
              </div>

              {/* Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-normal tracking-tight leading-[1.14] mb-5 text-[#F7F5F0] drop-shadow-md">
                {headline}
              </h2>

              {/* Body Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base leading-[1.72] font-light text-[#EFECE5]/95 mb-7 text-left drop-shadow-sm">
                {paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Location Badges with Divider */}
              <div className="pt-5 border-t border-white/15 mb-7">
                <span className="text-[10px] tracking-[0.22em] uppercase font-medium text-white/60 block mb-3">
                  FEATURED CRUISING GROUNDS:
                </span>
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  {DESTINATION_TAGS.map((tag) => (
                    <span
                      key={tag.name}
                      className="px-3.5 py-1.5 text-[11px] tracking-[0.16em] uppercase font-medium rounded-[4px] border border-white/20 bg-black/25 text-white backdrop-blur-sm hover:border-[#B9A078] hover:text-white transition-colors"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pill-Style Transparent Outline CTA Button */}
              <div>
                <Link
                  href={ctaHref}
                  className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full border border-white/50 hover:border-white bg-black/30 hover:bg-white hover:text-[#070D14] text-white text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 backdrop-blur-sm shadow-lg group cursor-pointer"
                >
                  <span>{ctaLabel}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
