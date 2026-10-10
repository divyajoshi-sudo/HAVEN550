"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface ExperienceStoryItem {
  number?: string;
  eyebrow?: string;
  title: string;
  headline?: string;
  description: string;
  image: { src: string; alt: string };
  href?: string;
  ctaText?: string;
}

export interface EditorialExperiencesProps {
  eyebrow?: string;
  headline?: string;
  items?: ExperienceStoryItem[];
  ctaButton?: { label: string; href: string };
  background?: "softWhite" | "ivory" | "navy" | "deep";
}

const DEFAULT_EXPERIENCES: ExperienceStoryItem[] = [
  {
    number: "01",
    eyebrow: "COASTAL ESCAPE",
    title: "Private Coastal Cruising",
    headline: "COASTAL ESCAPE & BEYOND",
    description:
      "Islands, hidden sandbars, and overwater bliss. Whether you crave ocean breeze or secluded anchorages, HAVEN 550 delivers your kind of escape.",
    image: {
      src: "/images/haven-profile-speed.jpeg",
      alt: "Private Coastal Cruising aboard HAVEN 550 in South Florida",
    },
    href: "/experiences",
    ctaText: "EXPLORE EXPERIENCE",
  },
  {
    number: "02",
    eyebrow: "ST. BARTHS VIBE",
    title: "Sunset Experiences",
    headline: "SUNSET STATE OF MIND",
    description:
      "Chic cocktails, rooftop rosé, and golden-hour cool. This is the charter where luxury meets the sunset and every evening is unforgettable.",
    image: {
      src: "/images/haven-aerial-stern.jpeg",
      alt: "Sunset Experiences aboard HAVEN 550",
    },
    href: "/experiences",
    ctaText: "EXPLORE EXPERIENCE",
  },
  {
    number: "03",
    eyebrow: "CELEBRATIONS",
    title: "Celebrations & Special Occasions",
    headline: "MOMENTS WORTH CELEBRATING",
    description:
      "Milestone birthdays, intimate anniversaries, and bespoke gatherings. Celebrate life on the water with full crew service and alfresco dining.",
    image: {
      src: "/images/haven-aft-deck.jpeg",
      alt: "Celebrations & Special Occasions aboard HAVEN 550",
    },
    href: "/experiences",
    ctaText: "EXPLORE EXPERIENCE",
  },
  {
    number: "04",
    eyebrow: "OCEAN PLAY",
    title: "Water Adventures",
    headline: "WATER ADVENTURES & BEYOND",
    description:
      "Underwater scooters, snorkeling coves, and teak swim platform adventures. Discover the crystal-clear South Florida water at your own pace.",
    image: {
      src: "/images/haven-bow-sunpad.jpeg",
      alt: "Water Adventures on HAVEN 550",
    },
    href: "/experiences",
    ctaText: "EXPLORE EXPERIENCE",
  },
];

export function EditorialExperiences({
  eyebrow = "YOUR DAY. YOUR WAY.",
  headline = "Moments Worth Making.",
  items = DEFAULT_EXPERIENCES,
  ctaButton = {
    label: "EXPLORE ALL EXPERIENCES",
    href: "/experiences",
  },
  background = "ivory",
}: EditorialExperiencesProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Touch & Drag state
  const isDraggingRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const startScrollLeftRef = useRef<number>(0);

  const normalizedItems = (items && items.length > 0 ? items : DEFAULT_EXPERIENCES).map(
    (item, idx) => {
      const defaultItem = DEFAULT_EXPERIENCES[idx % DEFAULT_EXPERIENCES.length];
      return {
        ...item,
        eyebrow: item.eyebrow || defaultItem.eyebrow || "EXPERIENCE",
        headline: item.headline || item.title || defaultItem.headline || "LUXURY EXPERIENCE",
        ctaText: item.ctaText || "EXPLORE EXPERIENCE",
      };
    }
  );

  // Triple items array for seamless continuous infinite motion
  const displayItems = [...normalizedItems, ...normalizedItems, ...normalizedItems];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const initTimeout = setTimeout(() => {
      if (el) {
        const oneSetWidth = el.scrollWidth / 3;
        if (oneSetWidth > 0) {
          el.scrollLeft = oneSetWidth;
          scrollPosRef.current = oneSetWidth;
        }
      }
    }, 150);

    let animationFrameId: number;

    const step = () => {
      const target = trackRef.current;
      if (target) {
        if (!isPausedRef.current && !isDraggingRef.current) {
          scrollPosRef.current += 0.7;
          const oneSetWidth = target.scrollWidth / 3;

          if (oneSetWidth > 0) {
            if (scrollPosRef.current >= oneSetWidth * 2) {
              scrollPosRef.current -= oneSetWidth;
            } else if (scrollPosRef.current <= 0) {
              scrollPosRef.current += oneSetWidth;
            }
            target.scrollLeft = scrollPosRef.current;
          }
        } else {
          scrollPosRef.current = target.scrollLeft;
        }

        const oneSetWidth = target.scrollWidth / 3;
        if (oneSetWidth > 0 && normalizedItems.length > 0) {
          const card = target.children[0] as HTMLElement | undefined;
          const cardWidth = card ? card.offsetWidth + 24 : 520;
          const offsetWithinSet = scrollPosRef.current % oneSetWidth;
          const active = Math.floor(offsetWithinSet / cardWidth) % normalizedItems.length;
          setActiveIndex(Math.max(0, Math.min(active, normalizedItems.length - 1)));
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      clearTimeout(initTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [normalizedItems.length]);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!trackRef.current) return;
    const card = trackRef.current.children[0] as HTMLElement | undefined;
    const scrollAmount = card ? card.offsetWidth + 24 : 520;
    const newPos =
      direction === "left"
        ? trackRef.current.scrollLeft - scrollAmount
        : trackRef.current.scrollLeft + scrollAmount;

    trackRef.current.scrollTo({
      left: newPos,
      behavior: "smooth",
    });
    scrollPosRef.current = newPos;
  }, []);

  const goToSlide = (idx: number) => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const card = el.children[0] as HTMLElement | undefined;
    const cardWidth = card ? card.offsetWidth + 24 : 520;
    const oneSetWidth = el.scrollWidth / 3;
    const newPos = oneSetWidth + idx * cardWidth;

    el.scrollTo({
      left: newPos,
      behavior: "smooth",
    });
    scrollPosRef.current = newPos;
    setActiveIndex(idx);
  };

  // Touch and pointer interaction handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    isPausedRef.current = true;
    setIsPaused(true);
    startXRef.current = e.pageX;
    if (trackRef.current) {
      startScrollLeftRef.current = trackRef.current.scrollLeft;
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    const x = e.pageX;
    const walk = (x - startXRef.current) * 1.5;
    trackRef.current.scrollLeft = startScrollLeftRef.current - walk;
    scrollPosRef.current = trackRef.current.scrollLeft;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const isLight = background === "ivory" || background === "softWhite";

  return (
    <section
      style={{
        backgroundColor: isLight ? "#F7F5F0" : "#101C29",
        color: isLight ? "#101C29" : "#F8F8F6",
      }}
      className={`w-full min-h-screen lg:h-screen flex flex-col justify-center py-10 lg:py-6 relative overflow-hidden transition-colors duration-300 ${
        isLight ? "bg-[#F7F5F0] text-[#101C29]" : "bg-[#101C29] text-[#F8F8F6]"
      } border-t border-b border-[#EAE6DF]`}
    >
      {/* Top Header - Truly Centered in Section */}
      <div className="w-full site-padding-x flex flex-col items-center justify-center text-center pt-2 mb-6 sm:mb-8 lg:mb-6 relative z-10 shrink-0">
        <ScrollReveal direction="up" duration={0.85} className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center gap-3 mb-2.5 mx-auto text-center">
            <span className="w-8 h-[1.5px] bg-[#B9A078]" />
            <p className="text-xs sm:text-[13px] tracking-[0.26em] uppercase font-semibold text-center text-[#9E8357]">
              {eyebrow}
            </p>
            <span className="w-8 h-[1.5px] bg-[#B9A078]" />
          </div>
          <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-normal tracking-tight leading-[1.12] text-center mx-auto w-full ${
            isLight ? "text-[#101C29]" : "text-[#F8F8F6]"
          }`}>
            {headline}
          </h2>
        </ScrollReveal>
      </div>

      {/* Horizontal Continuous Moving Slider Track with Touch/Swipe */}
      <div className="w-full">
        <div
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none site-padding-x pb-2 select-none cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {displayItems.map((item, idx) => (
            <div
              key={idx}
              className="w-[88vw] sm:w-[440px] md:w-[480px] lg:w-[500px] flex-shrink-0"
            >
              <div
                className={`relative h-[400px] sm:h-[440px] md:h-[460px] lg:h-[480px] rounded-[3px] overflow-hidden group shadow-2xl bg-black border ${isLight ? "border-black/15" : "border-white/15"
                  }`}
              >
                {/* 100% Full-bleed Image */}
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 540px"
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Refined Bottom-Only Gradient Scrim: Image is 100% bright & clear across the top/middle, gently shaded only behind the text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 via-35% to-transparent pointer-events-none" />

                {/* Editorial Content Overlay Aligned to Bottom */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10 z-10 text-left">
                  {/* Micro Eyebrow */}
                  <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#D4AF37] uppercase font-sans mb-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
                    {item.eyebrow}
                  </span>

                  {/* Elegant Pure White Serif Headline */}
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-[34px] tracking-normal !text-white text-white font-normal leading-tight mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                    {item.headline || item.title}
                  </h3>

                  {/* Description in Crisp White with Graphik font */}
                  <p className="text-xs sm:text-sm md:text-[15px] font-sans !text-white/95 text-white/95 font-light leading-relaxed mb-6 max-w-lg line-clamp-3 drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]">
                    {item.description}
                  </p>

                  {/* Action Link / Button */}
                  <div>
                    <Link
                      href={item.href || "/experiences"}
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-[180px] h-[50px] px-3 bg-[#00204E] hover:bg-[#002D6E] text-white text-[11px] sm:text-[12px] tracking-[0.15em] uppercase font-medium transition-all duration-300 rounded-[1px] shadow-lg group-hover:shadow-xl cursor-pointer whitespace-nowrap"
                    >
                      <span>{item.ctaText}</span>
                      <span className="text-[13px] font-light leading-none group-hover:translate-x-0.5 transition-transform">›</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
