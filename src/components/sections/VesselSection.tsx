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
    <Section
      background="deep"
      fullHeight={true}
      spacing="none"
      className="min-h-screen lg:h-screen flex flex-col justify-between pt-10 sm:pt-12 md:pt-14 lg:pt-8 pb-0 text-[#F8F8F6] relative overflow-hidden bg-[#101C29]"
    >
      <Container size="wide" className="relative z-10 flex flex-col items-center mb-6 sm:mb-8 lg:mb-6">
        {/* Header Section */}
        <ScrollReveal direction="up" duration={0.85} className="w-full flex justify-center">
          <div className="w-full mx-auto flex flex-col items-center text-center pt-2 sm:pt-4">
            {/* Eyebrow with flanking gold lines */}
            <div className="flex items-center justify-center gap-3.5 mb-3 mx-auto">
              <span className="w-8 sm:w-12 h-[1px] bg-[#B9A078]" />
              <p className="text-xs sm:text-[13px] tracking-[0.32em] text-[#B9A078] uppercase font-sans font-semibold">
                {eyebrow}
              </p>
              <span className="w-8 sm:w-12 h-[1px] bg-[#B9A078]" />
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-[#F8F8F6] font-normal tracking-tight leading-[1.12] mb-3 text-center mx-auto w-full max-w-5xl">
              {headline}
            </h2>

            {/* Specs Subtitle */}
            <p className="text-[11px] sm:text-xs tracking-[0.24em] text-[#B9A078] uppercase font-sans font-medium mb-5 text-center">
              {specsBadge}
            </p>

            {/* Paragraphs */}
            <div className="w-full mx-auto text-center mb-8 px-2 sm:px-6 lg:px-8">
              <p className="text-[#F8F8F6] text-sm sm:text-[15px] lg:text-base leading-relaxed font-sans font-normal text-center w-full">
                {paragraphs.join(" ")}
              </p>
            </div>

            {/* Action Row: CTA Button + Clean Text Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mx-auto mb-12 sm:mb-14 lg:mb-16">
              <Link
                href={cta.href}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-[190px] h-[50px] px-4 bg-[#B9A078] hover:bg-[#C8B08A] text-[#101C29] text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-semibold transition-all duration-300 rounded-[1px] shadow-lg group cursor-pointer whitespace-nowrap"
              >
                <span>{cta.label}</span>
                <span className="text-[13px] font-bold leading-none group-hover:translate-x-0.5 transition-transform">›</span>
              </Link>

              {/* Mode Switcher: Clean text tabs */}
              <div className="flex items-center gap-6 text-[11px] sm:text-xs tracking-[0.22em] uppercase font-sans">
                <button
                  onClick={() => {
                    setActiveMode("pillars");
                    setHoveredIndex(null);
                  }}
                  className={`transition-colors cursor-pointer py-1 ${
                    activeMode === "pillars"
                      ? "text-[#F8F8F6] font-semibold border-b-2 border-[#B9A078]"
                      : "text-[#F8F8F6]/70 hover:text-[#F8F8F6]"
                  }`}
                >
                  Charter Pillars
                </button>
                <button
                  onClick={() => {
                    setActiveMode("spaces");
                    setHoveredIndex(null);
                  }}
                  className={`transition-colors cursor-pointer py-1 ${
                    activeMode === "spaces"
                      ? "text-[#F8F8F6] font-semibold border-b-2 border-[#B9A078]"
                      : "text-[#F8F8F6]/70 hover:text-[#F8F8F6]"
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
          FULL-BLEED HORIZONTAL ACCORDION (0px Gap, Edge-to-Edge from Left to Right)
          Occupies complete section space matching reference
      ========================================================================= */}
      <div className="w-full relative z-10">
        <ScrollReveal direction="up" duration={0.9} delay={100} className="w-full">
          <div
            className="w-full min-h-[460px] sm:h-[500px] md:h-[540px] lg:h-[580px] xl:h-[620px] overflow-hidden border-t border-b border-[#EAE6DF] bg-black flex flex-col md:flex-row select-none"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {currentPanels.map((panel, idx) => {
              const isHovered = hoveredIndex === idx;
              const hasAnyHover = hoveredIndex !== null;

              // Flex ratios for expanding accordion:
              // Idle state: equal flex-1
              // Hovered state: expanded card gets flex: 3.2, compressed cards get flex: 0.85
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
                  style={{
                    flex: hasAnyHover ? (isHovered ? 3.2 : 0.85) : 1,
                  }}
                  className={`relative overflow-hidden cursor-pointer border-b md:border-b-0 md:border-r border-white/20 last:border-r-0 last:border-b-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${flexGrowStyle} group`}
                >
                  {/* Full-bleed Background Image */}
                  <Image
                    src={panel.image.src}
                    alt={panel.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 70vw"
                    className={`object-cover object-center transition-transform duration-1000 ease-out ${
                      isHovered ? "scale-105" : "scale-100"
                    }`}
                  />

                  {/* Gradient Overlay for high readability */}
                  <div
                    className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                      hasAnyHover
                        ? isHovered
                          ? "bg-gradient-to-t from-black/90 via-black/40 to-black/25 opacity-100"
                          : "bg-black/55 backdrop-blur-[0.5px]"
                        : "bg-gradient-to-t from-black/85 via-black/35 to-black/20"
                    }`}
                  />

                  {/* Center / Lower Content */}
                  <div className="relative w-full h-full flex flex-col justify-end items-center text-center p-6 sm:p-8 md:p-10 pb-12 z-10 text-[#F8F8F6]">
                    {/* Title in Cormorant Garamond and Soft White */}
                    <h3
                      style={{ color: "#F8F8F6", textShadow: "0 2px 14px rgba(0,0,0,0.95), 0 1px 3px rgba(0,0,0,0.9)" }}
                      className={`font-serif font-normal uppercase text-[#F8F8F6] transition-all duration-500 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] ${
                        hasAnyHover && !isHovered
                          ? "text-lg sm:text-xl lg:text-2xl tracking-[0.14em] opacity-90 mb-2"
                          : "text-2xl sm:text-3xl md:text-4xl lg:text-[42px] tracking-[0.16em] mb-4"
                      }`}
                    >
                      {panel.title}
                    </h3>

                    {/* Subtitle in Soft White (reveals smoothly on expanded panel) */}
                    {panel.subtitle && isHovered && (
                      <p
                        style={{ color: "#F8F8F6", textShadow: "0 2px 10px rgba(0,0,0,0.9)" }}
                        className="text-xs sm:text-sm md:text-base text-[#F8F8F6] font-sans font-light max-w-lg mx-auto mb-6 leading-relaxed hidden sm:block animate-fadeIn"
                      >
                        {panel.subtitle}
                      </p>
                    )}

                    {/* Button (visible when idle or expanded) */}
                    <div
                      className={`transition-all duration-500 ${
                        hasAnyHover && !isHovered
                          ? "opacity-0 scale-95 pointer-events-none h-0 overflow-hidden"
                          : "opacity-100 scale-100 mt-2"
                      }`}
                    >
                      <Link
                        href={panel.href}
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-[210px] h-[50px] px-4 bg-[#101C29] hover:bg-[#182A3E] text-[#F8F8F6] text-[11px] sm:text-[12px] font-sans font-medium tracking-[0.16em] uppercase rounded-[1px] transition-all duration-300 shadow-xl whitespace-nowrap group/btn cursor-pointer border border-[#B9A078]/40"
                      >
                        <span style={{ color: "#F8F8F6" }} className="text-[#F8F8F6]">
                          {panel.buttonLabel}
                        </span>
                        <span
                          style={{ color: "#F8F8F6" }}
                          className="text-[13px] font-light leading-none group-hover/btn:translate-x-0.5 transition-transform text-[#F8F8F6]"
                        >
                          ›
                        </span>
                      </Link>
                    </div>

                    {/* Collapsed indicator when other panel is hovered */}
                    <div
                      className={`transition-opacity duration-300 mt-2 ${
                        hasAnyHover && !isHovered ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
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
