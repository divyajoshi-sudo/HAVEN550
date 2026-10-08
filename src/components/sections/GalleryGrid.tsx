"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { GalleryGridContent } from "@/types/content";

export interface GalleryGridProps {
  content: GalleryGridContent;
  background?: "navy" | "navyLight" | "deep";
}

export function GalleryGrid({
  content,
}: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Column metadata derived from items and content
  const defaultLabels = [
    { title: "ITALIAN CRAFTSMANSHIP", cta: "EXPLORE THE YACHT", href: "/the-yacht" },
    { title: "BOW SUNPAD LOUNGE", cta: "VIEW AMENITIES", href: "/the-yacht" },
    { title: "SALON & DINING", cta: "DISCOVER LUXURY", href: "/experiences" },
    { title: "PERFORMANCE & RETREAT", cta: "CHARTER HAVEN 550", href: "/contact" },
  ];

  return (
    <section
      id="vessel-gallery"
      className="relative w-full h-screen min-h-screen bg-[#071B2A] overflow-hidden flex flex-col justify-between"
    >
      {/* 01 — Full-Screen Background Image Layer with Crossfade */}
      <div className="absolute inset-0 z-0">
        {content.items.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center transition-transform duration-[3s] ease-out"
              />
              {/* Subtle top and bottom gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/60" />
            </div>
          );
        })}
      </div>

      {/* 02 — Floating Section Header at Top */}
      <div className="absolute top-10 md:top-14 left-0 right-0 z-30 w-full px-6 sm:px-10 lg:px-16 text-center pointer-events-none">
        {content.eyebrow && (
          <p className="text-[0.7rem] sm:text-xs md:text-sm tracking-[0.35em] text-[#B79B6A] font-light uppercase mb-2">
            {content.eyebrow}
          </p>
        )}

        {content.headline && (
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-white font-light leading-tight whitespace-normal md:whitespace-nowrap drop-shadow-lg">
            {content.headline}
          </h2>
        )}

        <div className="w-16 h-[2px] bg-[#B79B6A]/80 mx-auto mt-4" />
      </div>

      {/* 03 — Full-Height Interactive Column Slices (Spans 100% Screen Height) */}
      <div className="relative z-20 w-full h-full min-h-screen flex flex-col md:flex-row items-stretch">
        {content.items.map((item, index) => {
          const isActive = index === activeIndex;
          const meta = defaultLabels[index] || {
            title: item.title || `GALLERY 0${index + 1}`,
            cta: "EXPLORE",
            href: "/the-yacht",
          };

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className={`relative flex flex-col justify-end pb-12 sm:pb-16 lg:pb-20 px-6 sm:px-8 lg:px-10 border-b md:border-b-0 md:border-r border-white/20 last:border-r-0 cursor-pointer transition-all duration-700 ease-out group ${
                isActive
                  ? "bg-transparent md:flex-[4.5] shadow-2xl"
                  : "bg-black/65 hover:bg-black/45 backdrop-blur-[1px] md:flex-1"
              }`}
            >
              {/* Column Content Box at Bottom */}
              <div className="flex flex-col items-center text-center transition-transform duration-300">
                <h3
                  className={`font-sans tracking-[0.2em] uppercase font-medium text-xs sm:text-sm lg:text-base mb-4 transition-all duration-300 ${
                    isActive ? "text-white font-semibold scale-105" : "text-white/70 group-hover:text-white"
                  }`}
                >
                  {meta.title}
                </h3>

                {/* Outline CTA Button (Prominently shown on Active / Hovered Column) */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isActive
                      ? "opacity-100 max-h-16 translate-y-0"
                      : "opacity-0 max-h-0 translate-y-2 pointer-events-none md:group-hover:opacity-100 md:group-hover:max-h-16 md:group-hover:translate-y-0"
                  }`}
                >
                  <Link
                    href={meta.href}
                    className="inline-block px-7 py-3 text-[0.68rem] tracking-[0.25em] uppercase font-medium border border-white/80 text-white bg-black/30 backdrop-blur-sm hover:bg-white hover:text-[#071B2A] transition-all duration-300 shadow-2xl"
                  >
                    {meta.cta}
                  </Link>
                </div>
              </div>

              {/* Active Column Indicator Line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[3px] bg-[#B79B6A] transition-all duration-500 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

