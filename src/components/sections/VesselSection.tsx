"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface AccordionPanelItem {
  id: string;
  tag?: string;
  title: string;
  subtitle?: string;
  buttonLabel: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface VesselSectionProps {
  eyebrow?: string;
  headline?: string;
  specsBadge?: string;
  paragraphs?: string[];
  cta?: { label: string; href: string };
  mainImage?: { src: string; alt: string; caption?: string };
  detailImages?: Array<{ src: string; alt: string; caption?: string }>;
  panels?: AccordionPanelItem[];
}

// Default 3 Pillars matching Fraser Yachts Reference
const DEFAULT_PILLAR_PANELS: AccordionPanelItem[] = [
  {
    id: "what-to-do",
    tag: "01 // EXPERIENCES",
    title: "WHAT TO DO",
    subtitle: "Coastal sandbars, sunset dining & bespoke celebrations",
    buttonLabel: "CHARTER EXPERIENCES",
    href: "/experiences",
    image: {
      src: "/images/haven-bow-sunpad.jpeg",
      alt: "What To Do aboard HAVEN 550 luxury yacht charter",
    },
  },
  {
    id: "where-to-go",
    tag: "02 // DESTINATIONS",
    title: "WHERE TO GO",
    subtitle: "Fort Lauderdale waterways, Miami coast & ocean escapes",
    buttonLabel: "CHARTER DESTINATIONS",
    href: "/destinations",
    image: {
      src: "/images/haven-aerial-stern.jpeg",
      alt: "Where To Go in South Florida waters with HAVEN 550",
    },
  },
  {
    id: "choose-your-yacht",
    tag: "03 // THE VESSEL",
    title: "CHOOSE YOUR YACHT",
    subtitle: "2021 Ferretti 57-foot motor yacht with professional crew",
    buttonLabel: "YACHTS FOR CHARTER",
    href: "/the-yacht",
    image: {
      src: "/images/haven-profile-speed.jpeg",
      alt: "Choose Your Yacht - 57-Foot Ferretti luxury yacht HAVEN 550",
    },
  },
];

// Optional Vessel Spaces mode (for exploring the Ferretti 550 onboard spaces)
const VESSEL_SPACES_PANELS: AccordionPanelItem[] = [
  {
    id: "running-profile",
    tag: "PROFILE",
    title: "FERRETTI 550 PROFILE",
    subtitle: "57 feet of pure Italian naval architecture & open-water capability",
    buttonLabel: "VIEW VESSEL SPECS",
    href: "/the-yacht",
    image: {
      src: "/images/haven-profile-speed.jpeg",
      alt: "Ferretti 550 running profile with South Florida skyline",
    },
  },
  {
    id: "salon-helm",
    tag: "INTERIOR",
    title: "MAIN SALON & HELM",
    subtitle: "Panoramic ocean windows, climate-controlled salon & Italian leather",
    buttonLabel: "VIEW INTERIOR",
    href: "/the-yacht",
    image: {
      src: "/images/haven-salon-helm.jpeg",
      alt: "Main salon and helm aboard HAVEN 550",
    },
  },
  {
    id: "flybridge-bow",
    tag: "OUTDOOR",
    title: "FLYBRIDGE & SUNPADS",
    subtitle: "Expansive teak deck, elevated flybridge helm & forward sun lounge",
    buttonLabel: "VIEW DECK SPACES",
    href: "/the-yacht",
    image: {
      src: "/images/haven-aerial-topdown.jpeg",
      alt: "Flybridge and deck layout aboard HAVEN 550",
    },
  },
];

export function VesselSection({
  eyebrow = "THE VESSEL",
  headline = "Italian Craftsmanship. Timeless Elegance.",
  specsBadge = "2021 FERRETTI | 57 FEET | 8 GUESTS",
  paragraphs = [
    "Designed with the unmistakable sophistication of Italian yacht craftsmanship, HAVEN 550 combines refined styling with the comfort of a private retreat.",
    "Its thoughtfully designed spaces offer the perfect setting for entertaining, relaxing, and enjoying South Florida's spectacular waterfront scenery.",
    "From sunlit afternoons to memorable evenings on the water, HAVEN 550 provides an elegant setting for every occasion.",
  ],
  cta = { label: "EXPLORE THE YACHT", href: "/the-yacht" },
  panels,
}: VesselSectionProps) {
  // Mode switcher: Pillars (Reference) vs Vessel Spaces
  const [activeMode, setActiveMode] = useState<"pillars" | "spaces">("pillars");

  // Hovered panel index: null = default balanced state (Image 2)
  // 0, 1, 2 = expanded panel (Image 3 & 4)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const currentPanels = panels || (activeMode === "pillars" ? DEFAULT_PILLAR_PANELS : VESSEL_SPACES_PANELS);

  return (
    <Section background="deep" className="pt-16 pb-0 md:pt-24 md:pb-0 text-[#F7F5F0] relative overflow-hidden bg-[#070D14]">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute inset-0 ambient-glow-gold pointer-events-none opacity-40" />

      {/* Screen-filling Header Stage */}
      <Container size="wide" className="relative z-10 min-h-[85vh] lg:min-h-screen flex flex-col justify-center items-center py-12 md:py-20">
        <ScrollReveal direction="up" duration={0.85} className="w-full flex justify-center">
          <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
            {/* Eyebrow with flanking gold lines */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 sm:w-16 h-[1.5px] bg-[#B9A078]" />
              <p className="text-xs sm:text-sm tracking-[0.32em] text-[#B9A078] uppercase font-sans font-medium">
                {eyebrow}
              </p>
              <span className="w-10 sm:w-16 h-[1.5px] bg-[#B9A078]" />
            </div>

            {/* Headline — Strictly one single line */}
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] text-[#F7F5F0] font-normal tracking-tight leading-tight mb-6 text-center mx-auto w-full max-w-none sm:whitespace-nowrap">
              {headline}
            </h2>

            {/* Specs Badge */}
            <div className="flex justify-center items-center mx-auto mb-8">
              <div className="inline-flex items-center px-6 py-2.5 bg-[#101C29]/80 backdrop-blur-md border border-[#B9A078]/40 text-xs sm:text-sm tracking-[0.28em] text-[#B9A078] uppercase font-medium">
                {specsBadge}
              </div>
            </div>

            {/* Paragraphs — Expanded Across Entire Screen */}
            <div className="space-y-6 text-[#EFECE5]/90 text-base sm:text-lg md:text-[19px] leading-[1.8] font-light max-w-5xl mx-auto text-justify mb-12 w-full">
              {paragraphs.map((para, index) => (
                <p key={index} className="text-justify">{para}</p>
              ))}
            </div>

            {/* CTA & Mode Switcher */}
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 mx-auto">
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 px-9 py-4 bg-[#B9A078] text-[#070D14] text-xs tracking-[0.25em] uppercase font-semibold hover:bg-[#D4AF37] transition-all duration-300 shadow-xl group cursor-pointer"
              >
                <span>{cta.label}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>

              {/* Mode Switcher */}
              <div className="inline-flex items-center p-1.5 border border-white/10 bg-white/[0.03]">
                <button
                  onClick={() => {
                    setActiveMode("pillars");
                    setHoveredIndex(null);
                  }}
                  className={`px-4 py-2 text-[11px] sm:text-xs tracking-[0.2em] uppercase font-sans transition-all ${activeMode === "pillars"
                      ? "bg-[#B9A078] text-[#070D14] font-medium"
                      : "text-white/60 hover:text-white"
                    }`}
                >
                  Charter Pillars
                </button>
                <button
                  onClick={() => {
                    setActiveMode("spaces");
                    setHoveredIndex(null);
                  }}
                  className={`px-4 py-2 text-[11px] sm:text-xs tracking-[0.2em] uppercase font-sans transition-all ${activeMode === "spaces"
                      ? "bg-[#B9A078] text-[#070D14] font-medium"
                      : "text-white/60 hover:text-white"
                    }`}
                >
                  Vessel Spaces
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>

      {/* =========================================================================
          EXPANDING HORIZONTAL ACCORDION (Full bleed edge-to-edge)
          Takes complete space from left and right
      ========================================================================= */}
      <div className="w-full relative z-10 mt-10 md:mt-16">
        <ScrollReveal direction="up" duration={0.9} delay={120} className="w-full">
          <div
            className="relative w-full min-h-[560px] sm:h-[620px] md:h-[680px] lg:h-[720px] overflow-hidden border-y border-white/15 bg-black shadow-2xl flex flex-col md:flex-row select-none"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {currentPanels.map((panel, idx) => {
              // Determine if this panel is currently active/expanded
              const isHovered = hoveredIndex === idx;
              const hasAnyHover = hoveredIndex !== null;

              // Flex ratios:
              // When none hovered: equal (flex: 1)
              // When one is hovered: hovered has flex: 3.2, non-hovered have flex: 0.85
              const flexGrowStyle = hasAnyHover
                ? isHovered
                  ? "md:flex-[3.2] flex-[2.5]"
                  : "md:flex-[0.85] flex-[0.7]"
                : "flex-1";

              return (
                <div
                  key={panel.id}
                  data-cursor="view"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onClick={() => setHoveredIndex(idx)}
                  className={`relative overflow-hidden cursor-pointer border-b md:border-b-0 md:border-r border-white/20 last:border-r-0 last:border-b-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${flexGrowStyle} group`}
                >
                  {/* Full-bleed Background Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={panel.image.src}
                      alt={panel.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 70vw"
                      className={`object-cover object-center transition-transform duration-1000 ease-out ${isHovered ? "scale-105" : "scale-100"
                        }`}
                    />

                    {/* Subtle light overlay — shows exact image color and vibrance */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-700 ${hasAnyHover
                          ? isHovered
                            ? "bg-gradient-to-t from-black/55 via-transparent to-black/20 opacity-90"
                            : "bg-black/40 backdrop-blur-[0.5px]"
                          : "bg-gradient-to-t from-black/50 via-transparent to-black/20"
                        }`}
                    />
                  </div>

                  {/* Panel Content Overlay */}
                  <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 md:p-10 z-10">
                    {/* Top Tag / Pill (Shown on expanded or idle state) */}
                    <div
                      className={`transition-opacity duration-500 ${hasAnyHover && !isHovered ? "opacity-0" : "opacity-100"
                        }`}
                    >
                      {panel.tag && (
                        <span className="inline-block text-[10px] sm:text-xs tracking-[0.25em] uppercase font-sans text-[#B9A078] bg-[#070D14]/70 px-2.5 py-1 border border-white/10 backdrop-blur-sm">
                          {panel.tag}
                        </span>
                      )}
                    </div>

                    {/* Center / Bottom Content Area */}
                    <div className="w-full flex flex-col items-center justify-center text-center my-auto">
                      {/* Big Bold Headline (Matching reference style) */}
                      <h3
                        className={`font-sans font-extrabold uppercase text-[#F7F5F0] transition-all duration-500 ${
                          hasAnyHover && !isHovered
                            ? "text-sm sm:text-base md:text-lg tracking-[0.18em] opacity-80"
                            : "text-2xl sm:text-3xl md:text-4xl lg:text-[40px] tracking-[0.16em] mb-3 leading-tight"
                        }`}
                      >
                        {panel.title}
                      </h3>

                      {/* Subtitle (Shown on expanded panel) */}
                      {panel.subtitle && isHovered && (
                        <p className="text-xs sm:text-sm text-[#EFECE5]/85 font-light max-w-md mx-auto mb-6 leading-relaxed hidden sm:block animate-fadeIn">
                          {panel.subtitle}
                        </p>
                      )}

                      {/* Rectangular Bordered Button (Reference accurate) */}
                      {/* Visible in idle state (Image 2) and on active expanded panel (Image 3 & 4) */}
                      <div
                        className={`transition-all duration-500 ${hasAnyHover && !isHovered
                            ? "opacity-0 scale-95 pointer-events-none h-0 overflow-hidden"
                            : "opacity-100 scale-100 mt-2 sm:mt-4"
                          }`}
                      >
                        <Link
                          href={panel.href}
                          className="inline-block border border-white/90 bg-black/20 hover:bg-white hover:text-[#070D14] text-white text-xs sm:text-sm font-sans font-bold tracking-[0.22em] uppercase px-7 sm:px-9 py-3 sm:py-3.5 backdrop-blur-sm transition-all duration-300 shadow-lg"
                        >
                          {panel.buttonLabel}
                        </Link>
                      </div>
                    </div>

                    {/* Bottom Collapsed Title Anchor (For collapsed columns in Images 3 & 4) */}
                    <div
                      className={`text-center pb-2 transition-opacity duration-300 ${hasAnyHover && !isHovered ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
                        }`}
                    >
                      <span className="text-[10px] tracking-[0.2em] uppercase text-[#B9A078] font-mono">
                        EXPAND +
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
