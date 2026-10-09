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

  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);

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

  // Handle scroll-based slide progression
  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const containerHeight = containerRef.current.offsetHeight - window.innerHeight;

    if (containerHeight <= 0) return;

    // Calculate how far into the container we have scrolled (0 to 1)
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / containerHeight));

    // Determine target slide based on progress
    const slideCount = SLIDES.length;
    const targetIndex = Math.min(slideCount - 1, Math.floor(progress * slideCount));

    setActiveSlide(targetIndex);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Video play/pause toggle
  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  // Video mute/unmute toggle
  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  }, []);

  // Navigate to slide by index and smooth scroll container
  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index);

    if (containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
      const targetScroll = containerTop + (index / (SLIDES.length - 1)) * containerHeight;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide((activeSlide + 1) % SLIDES.length);
  }, [activeSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((activeSlide - 1 + SLIDES.length) % SLIDES.length);
  }, [activeSlide, goToSlide]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#070D14] text-white selection:bg-[#B9A078] selection:text-black"
      style={{ height: "340vh" }}
      aria-label="Yacht Specifications Showcase"
    >
      {/* Sticky Fullscreen Viewport Window */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        
        {/* Background Ambient Luxury Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#132233]/40 via-[#070D14] to-[#050A0F] pointer-events-none z-0" />

        {/* =========================================================================
            TOP HUD: Camper & Nicholsons Inspired Editorial Header
        ========================================================================= */}
        <div className="relative z-30 pt-6 md:pt-8 site-padding-x flex items-center justify-between border-b border-white/10 bg-gradient-to-b from-[#070D14]/90 via-[#070D14]/50 to-transparent backdrop-blur-sm">
          {/* Left: Vessel Brand & Category */}
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-[#B9A078] animate-pulse" />
            <div>
              <p className="text-[10px] sm:text-xs tracking-[0.25em] text-[#B9A078] uppercase font-sans">
                {eyebrow} // FERRETTI 57
              </p>
              <h2 className="text-sm sm:text-base font-serif tracking-wider text-white">
                HAVEN 550 SPECIFICATIONS
              </h2>
            </div>
          </div>


        </div>

        {/* =========================================================================
            CENTER MEDIA STAGE: Fullscreen Yacht Images with Scroll-Driven Transitions
        ========================================================================= */}
        <div className="relative flex-1 w-full h-full overflow-hidden">
          {/* SLIDE 0: HAVEN 550 Running Profile */}
          <div
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              activeSlide === 0
                ? "opacity-100 scale-100 pointer-events-auto z-10"
                : "opacity-0 scale-105 pointer-events-none z-0"
            }`}
          >
            <Image
              src={SLIDES[0].src}
              alt={SLIDES[0].alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Dynamic Scrim & Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/30 pointer-events-none" />
            <div className="absolute inset-0 dynamic-scrim pointer-events-none opacity-40" />

            {/* In-Image Floating Specs Overlay Card */}
            <div
              className={`absolute bottom-24 sm:bottom-28 left-[var(--site-px)] right-6 sm:right-auto z-20 max-w-xl lg:max-w-2xl pointer-events-auto transition-all duration-700 delay-100 ${
                activeSlide === 0 ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <div className="bg-[#070D14]/85 backdrop-blur-xl border border-[#B9A078]/35 p-5 sm:p-7 md:p-8 shadow-2xl relative">
                <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#B9A078]" />
                <div className="absolute top-0 left-0 w-[2px] h-8 bg-[#B9A078]" />

                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-[1px] bg-[#B9A078]" />
                  <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#B9A078] font-sans">
                    {SLIDES[0].tag}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-light text-white tracking-wide mb-2">
                  {headline}
                </h1>
                <p className="text-xs sm:text-sm text-white/80 font-light mb-6 max-w-lg">
                  {SLIDES[0].subtitle}
                </p>

                {/* 4 Core Quick Spec Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-4 border-t border-white/10">
                  <div className="bg-white/[0.04] border border-white/10 p-2.5">
                    <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#8A95A5] block">
                      LENGTH
                    </span>
                    <span className="text-sm sm:text-base font-serif text-white">57 Feet</span>
                  </div>
                  <div className="bg-white/[0.04] border border-white/10 p-2.5">
                    <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#8A95A5] block">
                      GUESTS
                    </span>
                    <span className="text-sm sm:text-base font-serif text-white">8 Max</span>
                  </div>
                  <div className="bg-white/[0.04] border border-white/10 p-2.5">
                    <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#8A95A5] block">
                      SPEED
                    </span>
                    <span className="text-sm sm:text-base font-serif text-white">26 Knots</span>
                  </div>
                  <div className="bg-white/[0.04] border border-white/10 p-2.5">
                    <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#8A95A5] block">
                      BUILDER
                    </span>
                    <span className="text-sm sm:text-base font-serif text-[#B9A078]">Ferretti</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 1: Aerial Topdown (Scale & Capacity) */}
          <div
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              activeSlide === 1
                ? "opacity-100 scale-100 pointer-events-auto z-10"
                : "opacity-0 scale-105 pointer-events-none z-0"
            }`}
          >
            <Image
              src={SLIDES[1].src}
              alt={SLIDES[1].alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/30 pointer-events-none" />
            <div className="absolute inset-0 dynamic-scrim pointer-events-none opacity-40" />

            {/* In-Image Floating Specs Overlay Card */}
            <div
              className={`absolute bottom-24 sm:bottom-28 left-[var(--site-px)] right-6 sm:right-auto z-20 max-w-xl pointer-events-auto transition-all duration-700 delay-100 ${
                activeSlide === 1 ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <div className="bg-[#070D14]/85 backdrop-blur-xl border border-[#B9A078]/35 p-6 sm:p-8 shadow-2xl relative">
                <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#B9A078]" />
                <div className="absolute top-0 left-0 w-[2px] h-8 bg-[#B9A078]" />

                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-[1px] bg-[#B9A078]" />
                  <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#B9A078] font-sans">
                    02 // SCALE &amp; CAPACITY
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-serif font-light text-white tracking-wide mb-1">
                  {SLIDES[1].title}
                </h2>
                <p className="text-xs sm:text-sm text-white/75 font-light mb-6">
                  {SLIDES[1].subtitle}
                </p>

                {/* Paired Specifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 mb-6">
                  <div className="bg-white/[0.03] border border-white/10 p-3.5">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#8A95A5] block mb-1">
                      {specPairs[1].itemA.label}
                    </span>
                    <p className="text-xl sm:text-2xl font-serif text-white font-light">
                      {specPairs[1].itemA.value}
                    </p>
                    <p className="text-xs text-white/50 mt-1">
                      {specPairs[1].itemA.detail}
                    </p>
                  </div>

                  <div className="bg-white/[0.03] border border-white/10 p-3.5">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#8A95A5] block mb-1">
                      {specPairs[1].itemB.label}
                    </span>
                    <p className="text-xl sm:text-2xl font-serif text-[#B9A078] font-light">
                      {specPairs[1].itemB.value}
                    </p>
                    <p className="text-xs text-white/50 mt-1">
                      {specPairs[1].itemB.detail}
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase font-sans text-[#B9A078] hover:text-white transition-colors"
                >
                  <span>Request Private Charter</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* SLIDE 2: Running Profile at Speed (Performance & Speed) */}
          <div
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              activeSlide === 2
                ? "opacity-100 scale-100 pointer-events-auto z-10"
                : "opacity-0 scale-105 pointer-events-none z-0"
            }`}
          >
            <Image
              src={SLIDES[2].src}
              alt={SLIDES[2].alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/30 pointer-events-none" />
            <div className="absolute inset-0 dynamic-scrim pointer-events-none opacity-40" />

            {/* In-Image Floating Specs Overlay Card */}
            <div
              className={`absolute bottom-24 sm:bottom-28 left-[var(--site-px)] right-6 sm:right-auto z-20 max-w-xl pointer-events-auto transition-all duration-700 delay-100 ${
                activeSlide === 2 ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <div className="bg-[#070D14]/85 backdrop-blur-xl border border-[#B9A078]/35 p-6 sm:p-8 shadow-2xl relative">
                <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#B9A078]" />
                <div className="absolute top-0 left-0 w-[2px] h-8 bg-[#B9A078]" />

                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-[1px] bg-[#B9A078]" />
                  <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#B9A078] font-sans">
                    03 // PERFORMANCE &amp; SPEED
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-serif font-light text-white tracking-wide mb-1">
                  {SLIDES[2].title}
                </h2>
                <p className="text-xs sm:text-sm text-white/75 font-light mb-6">
                  {SLIDES[2].subtitle}
                </p>

                {/* Paired Specifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 mb-6">
                  <div className="bg-white/[0.03] border border-white/10 p-3.5">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#8A95A5] block mb-1">
                      {specPairs[0].itemA.label} &amp; {specPairs[0].itemB.label}
                    </span>
                    <p className="text-xl sm:text-2xl font-serif text-white font-light">
                      {specPairs[0].itemA.value} · {specPairs[0].itemB.value}
                    </p>
                    <p className="text-xs text-white/50 mt-1">
                      {specPairs[0].itemA.detail}
                    </p>
                  </div>

                  <div className="bg-white/[0.03] border border-white/10 p-3.5">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#8A95A5] block mb-1">
                      {specPairs[3].itemB.label}
                    </span>
                    <p className="text-xl sm:text-2xl font-serif text-[#B9A078] font-light">
                      {specPairs[3].itemB.value}
                    </p>
                    <p className="text-xs text-white/50 mt-1">
                      {specPairs[3].itemB.detail}
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase font-sans text-[#B9A078] hover:text-white transition-colors"
                >
                  <span>Request Private Charter</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* SLIDE 3: Aft Deck & Salon Living (Service & Sanctuary) */}
          <div
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              activeSlide === 3
                ? "opacity-100 scale-100 pointer-events-auto z-10"
                : "opacity-0 scale-105 pointer-events-none z-0"
            }`}
          >
            <Image
              src={SLIDES[3].src}
              alt={SLIDES[3].alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/30 pointer-events-none" />
            <div className="absolute inset-0 dynamic-scrim pointer-events-none opacity-40" />

            {/* In-Image Floating Specs Overlay Card */}
            <div
              className={`absolute bottom-24 sm:bottom-28 left-[var(--site-px)] right-6 sm:right-auto z-20 max-w-xl pointer-events-auto transition-all duration-700 delay-100 ${
                activeSlide === 3 ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <div className="bg-[#070D14]/85 backdrop-blur-xl border border-[#B9A078]/35 p-6 sm:p-8 shadow-2xl relative">
                <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#B9A078]" />
                <div className="absolute top-0 left-0 w-[2px] h-8 bg-[#B9A078]" />

                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-[1px] bg-[#B9A078]" />
                  <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#B9A078] font-sans">
                    04 // SERVICE &amp; SANCTUARY
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-serif font-light text-white tracking-wide mb-1">
                  {SLIDES[3].title}
                </h2>
                <p className="text-xs sm:text-sm text-white/75 font-light mb-6">
                  {SLIDES[3].subtitle}
                </p>

                {/* Paired Specifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 mb-6">
                  <div className="bg-white/[0.03] border border-white/10 p-3.5">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#8A95A5] block mb-1">
                      {specPairs[2].itemA.label}
                    </span>
                    <p className="text-xl sm:text-2xl font-serif text-white font-light">
                      {specPairs[2].itemA.value}
                    </p>
                    <p className="text-xs text-white/50 mt-1">
                      {specPairs[2].itemA.detail}
                    </p>
                  </div>

                  <div className="bg-white/[0.03] border border-white/10 p-3.5">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#8A95A5] block mb-1">
                      {specPairs[3].itemA.label}
                    </span>
                    <p className="text-xl sm:text-2xl font-serif text-[#B9A078] font-light">
                      {specPairs[3].itemA.value}
                    </p>
                    <p className="text-xs text-white/50 mt-1">
                      {specPairs[2].itemB.detail}
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase font-sans text-[#B9A078] hover:text-white transition-colors"
                >
                  <span>Request Private Charter</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FLOATING BOTTOM HUD: Translucent Specs Indicator Overlay (Over Media)
            NO separate table below images — full-bleed photography remains visible
        ========================================================================= */}
        <div className="absolute bottom-5 sm:bottom-7 left-[var(--site-px)] right-[var(--site-px)] z-30 pointer-events-auto">
          <div className="bg-[#070D14]/80 backdrop-blur-xl border border-white/15 px-4 sm:px-6 py-2.5 sm:py-3 shadow-2xl flex items-center justify-between gap-3">
            {/* Quick interactive tabs */}
            <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
              {specPairs.map((pair, idx) => (
                <button
                  key={pair.pairId}
                  onClick={() => goToSlide(idx)}
                  className={`flex items-center gap-2 px-3 py-1.5 text-[10px] sm:text-xs tracking-[0.2em] uppercase transition-all duration-300 font-sans whitespace-nowrap ${
                    activeSlide === idx
                      ? "text-white bg-white/10 border-b-2 border-[#B9A078] font-medium"
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="text-[#B9A078] font-mono">// 0{idx + 1}</span>
                  <span>{pair.category.split(" ")[0]}</span>
                </button>
              ))}
            </div>

            {/* Quick Charter CTA */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <span className="text-xs font-serif text-white/70">Ferretti 57 · 8 Guests</span>
              <Link
                href="/contact"
                className="px-4 py-1.5 bg-[#B9A078] text-[#070D14] text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-[#D4AF37] transition-all"
              >
                Inquire
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
