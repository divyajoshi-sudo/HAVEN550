"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

export interface SpecsTableProps {
  eyebrow?: string;
  headline?: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  items?: Array<{ label: string; value: string }>;
  background?: "navy" | "navyLight" | "deep";
}

interface SlideMedia {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  tag: string;
}

const SLIDES: SlideMedia[] = [
  {
    src: "/images/haven-running-front.jpeg",
    alt: "HAVEN 550 Ferretti luxury motor yacht running at speed in South Florida",
    title: "Meet HAVEN 550.",
    subtitle: "South Florida coastal cruising aboard a pristine 57-foot Ferretti luxury motor yacht.",
    tag: "01 // VESSEL & HERITAGE",
  },
  {
    src: "/images/haven-aerial-topdown.jpeg",
    alt: "HAVEN 550 top-down aerial flybridge and teak deck",
    title: "Flybridge & Sun Lounge",
    subtitle: "Bird's-eye view of expansive outdoor living spaces and teak craftsmanship.",
    tag: "02 // SCALE & CAPACITY",
  },
  {
    src: "/images/haven-profile-speed.jpeg",
    alt: "HAVEN 550 Ferretti running profile at speed",
    title: "Italian Naval Architecture",
    subtitle: "57 feet of refined power and offshore capability reaching 26 knots.",
    tag: "03 // PERFORMANCE & SPEED",
  },
  {
    src: "/images/haven-aft-deck.jpeg",
    alt: "HAVEN 550 aft deck and salon living area",
    title: "Aft Deck & Interior Living",
    subtitle: "Handcrafted Italian interiors and shaded alfresco dining.",
    tag: "04 // SERVICE & SANCTUARY",
  },
];

// 2-2-2-2 Paired Yacht Specifications (Camper & Nicholsons Luxury Layout)
interface SpecPair {
  pairId: string;
  category: string;
  itemA: { label: string; value: string; detail?: string };
  itemB: { label: string; value: string; detail?: string };
}

const DEFAULT_SPEC_PAIRS: SpecPair[] = [
  {
    pairId: "01",
    category: "VESSEL & HERITAGE",
    itemA: {
      label: "YACHT BUILDER",
      value: "Ferretti",
      detail: "Italian Luxury Craftsmanship",
    },
    itemB: {
      label: "MODEL YEAR",
      value: "2021",
      detail: "Modern Contemporary Vessel",
    },
  },
  {
    pairId: "02",
    category: "SCALE & CAPACITY",
    itemA: {
      label: "LENGTH OVERALL",
      value: "57 Feet",
      detail: "17.4 Meters LOA",
    },
    itemB: {
      label: "MAXIMUM CHARTER GUESTS",
      value: "8 Guests",
      detail: "Coast Guard Compliant Luxury",
    },
  },
  {
    pairId: "03",
    category: "SERVICE & EXPERIENCE",
    itemA: {
      label: "CREW COMPLEMENT",
      value: "Captain & Steward",
      detail: "Professional Licensed Crew",
    },
    itemB: {
      label: "CHARTER TYPE",
      value: "Private Charter",
      detail: "Exclusive Bespoke Itinerary",
    },
  },
  {
    pairId: "04",
    category: "DESTINATION & PERFORMANCE",
    itemA: {
      label: "HOME REGION",
      value: "Fort Lauderdale",
      detail: "Florida Yachting Capital",
    },
    itemB: {
      label: "STATEROOMS / SPEED",
      value: "3 Cabins · 26 Knots",
      detail: "Cruising Performance at Sea",
    },
  },
];

export function SpecsTable({
  eyebrow = "THE DETAILS",
  headline = "Meet HAVEN 550.",
  items,
}: SpecsTableProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [progress, setProgress] = useState<number>(0);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  // Map incoming items if provided into the 2-2-2-2 combinations
  const specPairs: SpecPair[] = React.useMemo(() => {
    if (!items || items.length < 8) return DEFAULT_SPEC_PAIRS;
    return [
      {
        pairId: "01",
        category: "VESSEL & HERITAGE",
        itemA: { label: items[0].label, value: items[0].value, detail: "Italian Luxury Craftsmanship" },
        itemB: { label: items[1].label, value: items[1].value, detail: "Modern Contemporary Vessel" },
      },
      {
        pairId: "02",
        category: "SCALE & CAPACITY",
        itemA: { label: items[2].label, value: items[2].value, detail: "17.4 Meters LOA" },
        itemB: { label: items[3].label, value: items[3].value, detail: "Coast Guard Compliant Luxury" },
      },
      {
        pairId: "03",
        category: "SERVICE & EXPERIENCE",
        itemA: { label: items[4].label, value: items[4].value, detail: "Professional Licensed Crew" },
        itemB: { label: items[5].label, value: items[5].value, detail: "Exclusive Bespoke Itinerary" },
      },
      {
        pairId: "04",
        category: "DESTINATION & PERFORMANCE",
        itemA: { label: items[6].label, value: items[6].value, detail: "Florida Yachting Capital" },
        itemB: {
          label: items[7]?.label || "STATEROOMS / SPEED",
          value: items[7]?.value || "3 Cabins · 26 Knots",
          detail: "Cruising Performance at Sea",
        },
      },
    ];
  }, [items]);

  // Handle scroll-based slide progression and horizontal translation
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const containerHeight = containerRef.current.offsetHeight - window.innerHeight;

    if (containerHeight <= 0) return;

    // Calculate how far into the container we have scrolled (0 to 1)
    const scrolled = -rect.top;
    const currentProgress = Math.max(0, Math.min(1, scrolled / containerHeight));

    setProgress(currentProgress);

    const slideCount = SLIDES.length;
    const targetIndex = Math.min(slideCount - 1, Math.round(currentProgress * (slideCount - 1)));
    setActiveSlide(targetIndex);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#081018] text-[#F8F8F6] selection:bg-[#B9A078] selection:text-[#101C29]"
      style={{ height: "380vh", backgroundColor: "#081018", color: "#F8F8F6" }}
      aria-label="Yacht Specifications Showcase"
    >
      {/* Sticky Fullscreen Viewport Window */}
      <div
        style={{ backgroundColor: "#081018", color: "#F8F8F6" }}
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between bg-[#081018]"
      >
        
        {/* Background Layer */}
        <div className="absolute inset-0 bg-[#081018] pointer-events-none z-0" />

        {/* =========================================================================
            TOP HUD: Camper & Nicholsons Inspired Editorial Header
        ========================================================================= */}
        <div className="relative z-30 pt-6 md:pt-8 pb-3 site-padding-x flex items-center justify-between border-b border-white/10 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-sm">
          {/* Left: Vessel Brand & Category */}
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-[#B9A078] animate-pulse" />
            <div>
              <p className="text-[10px] sm:text-xs tracking-[0.25em] text-[#B9A078] uppercase font-sans">
                {eyebrow} // FERRETTI 57
              </p>
              <h2
                style={{ color: "#F8F8F6" }}
                className="text-sm sm:text-base font-serif tracking-wider text-[#F8F8F6]"
              >
                HAVEN 550 SPECIFICATIONS
              </h2>
            </div>
          </div>

          {/* Right: Slide Counter */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-xs sm:text-sm font-mono text-[#B9A078] tracking-widest font-medium">
              0{activeSlide + 1}
            </span>
            <span className="text-xs text-white/30">/</span>
            <span className="text-xs sm:text-sm font-mono text-white/50 tracking-widest">04</span>
          </div>

          {/* Subtle gold progress line across the header */}
          <div
            className="absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-[#B9A078] via-[#D4AF37] to-[#B9A078] transition-all duration-150"
            style={{ width: `${Math.max(5, progress * 100)}%` }}
          />
        </div>

        {/* =========================================================================
            CENTER MEDIA STAGE: Continuous Horizontal Scrolling Filmstrip
        ========================================================================= */}
        <div className="relative flex-1 w-full h-full overflow-hidden">
          {/* Horizontal Track: Smoothly translates to the left as user scrolls down */}
          <div
            className="flex h-full w-[400vw] will-change-transform"
            style={{
              transform: `translate3d(-${progress * 300}vw, 0, 0)`,
              transition: "transform 0.08s ease-out",
            }}
          >
            {/* SLIDE 0: HAVEN 550 Running Profile */}
            <div className="relative w-screen h-full flex-shrink-0 overflow-hidden">
              <Image
                src={SLIDES[0].src}
                alt={SLIDES[0].alt}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
              {/* Scrim Gradient for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />

              {/* In-Image Floating Specs Overlay */}
              <div className="absolute bottom-20 sm:bottom-28 left-[var(--site-px)] right-6 sm:right-auto z-20 max-w-xl lg:max-w-2xl pointer-events-auto">
                <div className="relative py-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-[1.5px] bg-[#D4AF37]" />
                    <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-sans drop-shadow-sm">
                      {SLIDES[0].tag}
                    </span>
                  </div>

                  <h1
                    style={{
                      color: "#F8F8F6",
                      textShadow: "0 2px 10px rgba(0,0,0,0.85)",
                    }}
                    className="text-2xl sm:text-4xl md:text-5xl font-serif font-light text-[#F8F8F6] tracking-wide mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
                  >
                    {headline}
                  </h1>
                  <p
                    style={{
                      color: "#F8F8F6",
                      textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                    }}
                    className="text-xs sm:text-sm text-[#F8F8F6] font-light mb-6 max-w-lg drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
                  >
                    {SLIDES[0].subtitle}
                  </p>

                  {/* 4 Core Quick Specs */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-5 border-t border-white/20">
                    <div>
                      <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-[#B9A078] block mb-1 drop-shadow-sm">
                        LENGTH
                      </span>
                      <span style={{ color: "#F8F8F6" }} className="text-base sm:text-lg font-serif text-[#F8F8F6] font-light drop-shadow-sm">57 Feet</span>
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-[#B9A078] block mb-1 drop-shadow-sm">
                        GUESTS
                      </span>
                      <span style={{ color: "#F8F8F6" }} className="text-base sm:text-lg font-serif text-[#F8F8F6] font-light drop-shadow-sm">8 Max</span>
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-[#B9A078] block mb-1 drop-shadow-sm">
                        SPEED
                      </span>
                      <span style={{ color: "#F8F8F6" }} className="text-base sm:text-lg font-serif text-[#F8F8F6] font-light drop-shadow-sm">26 Knots</span>
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-[#B9A078] block mb-1 drop-shadow-sm">
                        BUILDER
                      </span>
                      <span style={{ color: "#B9A078" }} className="text-base sm:text-lg font-serif text-[#B9A078] font-light drop-shadow-sm">Ferretti</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SLIDE 1: Aerial Topdown (Scale & Capacity) */}
            <div className="relative w-screen h-full flex-shrink-0 overflow-hidden">
              <Image
                src={SLIDES[1].src}
                alt={SLIDES[1].alt}
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />

              <div className="absolute bottom-20 sm:bottom-28 left-[var(--site-px)] right-6 sm:right-auto z-20 max-w-xl pointer-events-auto">
                <div className="relative py-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-[1.5px] bg-[#B9A078]" />
                    <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#B9A078] font-sans drop-shadow-sm">
                      02 // SCALE &amp; CAPACITY
                    </span>
                  </div>

                  <h2
                    style={{
                      color: "#F8F8F6",
                      textShadow: "0 2px 10px rgba(0,0,0,0.85)",
                    }}
                    className="text-2xl sm:text-4xl font-serif font-light text-[#F8F8F6] tracking-wide mb-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
                  >
                    {SLIDES[1].title}
                  </h2>
                  <p
                    style={{
                      color: "#F8F8F6",
                      textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                    }}
                    className="text-xs sm:text-sm text-[#F8F8F6] font-light mb-6 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
                  >
                    {SLIDES[1].subtitle}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 pt-5 border-t border-white/20 mb-6">
                    <div>
                      <span className="text-[10px] tracking-[0.22em] uppercase text-[#B9A078] block mb-1 drop-shadow-sm">
                        {specPairs[1].itemA.label}
                      </span>
                      <p
                        style={{ color: "#F8F8F6" }}
                        className="text-xl sm:text-2xl font-serif text-[#F8F8F6] font-light drop-shadow-sm"
                      >
                        {specPairs[1].itemA.value}
                      </p>
                      <p
                        style={{ color: "#F8F8F6" }}
                        className="text-xs text-[#F8F8F6]/80 mt-1 font-light drop-shadow-sm"
                      >
                        {specPairs[1].itemA.detail}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] tracking-[0.22em] uppercase text-[#B9A078] block mb-1 drop-shadow-sm">
                        {specPairs[1].itemB.label}
                      </span>
                      <p
                        style={{ color: "#F8F8F6" }}
                        className="text-xl sm:text-2xl font-serif text-[#F8F8F6] font-light drop-shadow-sm"
                      >
                        {specPairs[1].itemB.value}
                      </p>
                      <p
                        style={{ color: "#F8F8F6" }}
                        className="text-xs text-[#F8F8F6]/80 mt-1 font-light drop-shadow-sm"
                      >
                        {specPairs[1].itemB.detail}
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase font-sans text-[#D4AF37] hover:text-white transition-colors group cursor-pointer drop-shadow-sm"
                  >
                    <span>Request Private Charter</span>
                    <span className="transition-transform group-hover:translate-x-1.5">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* SLIDE 2: Running Profile at Speed (Performance & Speed) */}
            <div className="relative w-screen h-full flex-shrink-0 overflow-hidden">
              <Image
                src={SLIDES[2].src}
                alt={SLIDES[2].alt}
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />

              <div className="absolute bottom-20 sm:bottom-28 left-[var(--site-px)] right-6 sm:right-auto z-20 max-w-xl pointer-events-auto">
                <div className="relative py-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-[1.5px] bg-[#D4AF37]" />
                    <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-sans drop-shadow-sm">
                      03 // PERFORMANCE &amp; SPEED
                    </span>
                  </div>

                  <h2
                    style={{
                      color: "#F8F8F6",
                      textShadow: "0 2px 10px rgba(0,0,0,0.85)",
                    }}
                    className="text-2xl sm:text-4xl font-serif font-light text-[#F8F8F6] tracking-wide mb-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
                  >
                    {SLIDES[2].title}
                  </h2>
                  <p
                    style={{
                      color: "#F8F8F6",
                      textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                    }}
                    className="text-xs sm:text-sm text-[#F8F8F6] font-light mb-6 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
                  >
                    {SLIDES[2].subtitle}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 pt-5 border-t border-white/20 mb-6">
                    <div>
                      <span className="text-[10px] tracking-[0.22em] uppercase text-[#B9A078] block mb-1 drop-shadow-sm">
                        {specPairs[0].itemA.label} &amp; {specPairs[0].itemB.label}
                      </span>
                      <p
                        style={{ color: "#F8F8F6" }}
                        className="text-xl sm:text-2xl font-serif text-[#F8F8F6] font-light drop-shadow-sm"
                      >
                        {specPairs[0].itemA.value} · {specPairs[0].itemB.value}
                      </p>
                      <p
                        style={{ color: "#F8F8F6" }}
                        className="text-xs text-[#F8F8F6]/80 mt-1 font-light drop-shadow-sm"
                      >
                        {specPairs[0].itemA.detail}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] tracking-[0.22em] uppercase text-[#B9A078] block mb-1 drop-shadow-sm">
                        {specPairs[3].itemB.label}
                      </span>
                      <p
                        style={{ color: "#F8F8F6" }}
                        className="text-xl sm:text-2xl font-serif text-[#F8F8F6] font-light drop-shadow-sm"
                      >
                        {specPairs[3].itemB.value}
                      </p>
                      <p
                        style={{ color: "#F8F8F6" }}
                        className="text-xs text-[#F8F8F6]/80 mt-1 font-light drop-shadow-sm"
                      >
                        {specPairs[3].itemB.detail}
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase font-sans text-[#B9A078] hover:text-[#F8F8F6] transition-colors group cursor-pointer drop-shadow-sm"
                  >
                    <span>Request Private Charter</span>
                    <span className="transition-transform group-hover:translate-x-1.5">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* SLIDE 3: Aft Deck & Salon Living (Service & Sanctuary) */}
            <div className="relative w-screen h-full flex-shrink-0 overflow-hidden">
              <Image
                src={SLIDES[3].src}
                alt={SLIDES[3].alt}
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />

              <div className="absolute bottom-20 sm:bottom-28 left-[var(--site-px)] right-6 sm:right-auto z-20 max-w-xl pointer-events-auto">
                <div className="relative py-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-[1.5px] bg-[#B9A078]" />
                    <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#B9A078] font-sans drop-shadow-sm">
                      04 // SERVICE &amp; SANCTUARY
                    </span>
                  </div>

                  <h2
                    style={{
                      color: "#F8F8F6",
                      textShadow: "0 2px 10px rgba(0,0,0,0.85)",
                    }}
                    className="text-2xl sm:text-4xl font-serif font-light text-[#F8F8F6] tracking-wide mb-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
                  >
                    {SLIDES[3].title}
                  </h2>
                  <p
                    style={{
                      color: "#F8F8F6",
                      textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                    }}
                    className="text-xs sm:text-sm text-[#F8F8F6] font-light mb-6 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
                  >
                    {SLIDES[3].subtitle}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 pt-5 border-t border-white/20 mb-6">
                    <div>
                      <span className="text-[10px] tracking-[0.22em] uppercase text-[#B9A078] block mb-1 drop-shadow-sm">
                        {specPairs[2].itemA.label}
                      </span>
                      <p
                        style={{ color: "#F8F8F6" }}
                        className="text-xl sm:text-2xl font-serif text-[#F8F8F6] font-light drop-shadow-sm"
                      >
                        {specPairs[2].itemA.value}
                      </p>
                      <p
                        style={{ color: "#F8F8F6" }}
                        className="text-xs text-[#F8F8F6]/80 mt-1 font-light drop-shadow-sm"
                      >
                        {specPairs[2].itemA.detail}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] tracking-[0.22em] uppercase text-[#B9A078] block mb-1 drop-shadow-sm">
                        {specPairs[3].itemA.label}
                      </span>
                      <p
                        style={{ color: "#F8F8F6" }}
                        className="text-xl sm:text-2xl font-serif text-[#F8F8F6] font-light drop-shadow-sm"
                      >
                        {specPairs[3].itemA.value}
                      </p>
                      <p
                        style={{ color: "#F8F8F6" }}
                        className="text-xs text-[#F8F8F6]/80 mt-1 font-light drop-shadow-sm"
                      >
                        {specPairs[2].itemB.detail}
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase font-sans text-[#D4AF37] hover:text-white transition-colors group cursor-pointer drop-shadow-sm"
                  >
                    <span>Request Private Charter</span>
                    <span className="transition-transform group-hover:translate-x-1.5">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
