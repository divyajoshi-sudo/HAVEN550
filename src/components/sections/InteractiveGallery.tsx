"use client";

import Image from "next/image";
import { useState } from "react";
import type { CategorizedGalleryContent } from "@/types/content";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { Heading } from "../ui/Heading";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface InteractiveGalleryProps {
  content: CategorizedGalleryContent;
  background?: "navy" | "navyLight" | "deep";
}

export function InteractiveGallery({
  content,
  background = "deep",
}: InteractiveGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  // Show all or filter by category
  const filteredItems =
    activeCategory === "ALL"
      ? content.items
      : content.items.filter((item) => item.category === activeCategory);

  const mainItem = filteredItems[0] || content.items[0];
  const gridItems = filteredItems.slice(1, 5);

  return (
    <Section
      background="deep"
      border="bottom"
      fullHeight={true}
      style={{ backgroundColor: "#101C29", color: "#F8F8F6" }}
      className="min-h-screen lg:h-screen flex flex-col justify-center py-10 lg:py-6 relative overflow-hidden bg-[#101C29] text-[#F8F8F6]"
    >
      <Container size="default">
        {/* Section Header - Perfectly Centered */}
        <ScrollReveal direction="up" duration={0.85} className="w-full flex justify-center">
          <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center mb-6 sm:mb-8 lg:mb-6">
            {/* Eyebrow with flanking gold lines */}
            <div className="flex items-center justify-center gap-3 mb-3.5">
              <span className="w-8 sm:w-12 h-[1.5px] bg-[#B9A078]" />
              <p className="text-xs sm:text-[13px] tracking-[0.3em] text-[#B9A078] uppercase font-sans font-medium">
                {content.eyebrow}
              </p>
              <span className="w-8 sm:w-12 h-[1.5px] bg-[#B9A078]" />
            </div>

            {/* Headline */}
            <h2
              style={{ color: "#F8F8F6" }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#F8F8F6] font-normal tracking-tight leading-[1.14] mb-6 text-center mx-auto w-full"
            >
              {content.headline}
            </h2>

            {/* Interactive Category Filter Tabs - Centered */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6">
              <button
                onClick={() => setActiveCategory("ALL")}
                style={{
                  color: activeCategory === "ALL" ? "#B9A078" : "#F8F8F6",
                  borderColor: activeCategory === "ALL" ? "#B9A078" : "transparent",
                }}
                className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs tracking-[0.22em] uppercase font-sans font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === "ALL"
                    ? "border-b-2 font-semibold"
                    : "opacity-80 hover:opacity-100 hover:text-[#B9A078]"
                }`}
              >
                ALL
              </button>
              {content.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    color: activeCategory === cat ? "#B9A078" : "#F8F8F6",
                    borderColor: activeCategory === cat ? "#B9A078" : "transparent",
                  }}
                  className={`px-3 sm:px-4 py-2 text-[11px] sm:text-xs tracking-[0.22em] uppercase font-sans font-medium transition-all duration-300 cursor-pointer ${
                    activeCategory === cat
                      ? "border-b-2 font-semibold"
                      : "opacity-80 hover:opacity-100 hover:text-[#B9A078]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 5-Photo Gallery Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Large Photo (Left Span 6) */}
          {mainItem && (
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto min-h-[380px] lg:min-h-[520px] overflow-hidden border border-white/10 rounded-[2px] group img-editorial">
              <Image
                key={mainItem.src}
                src={mainItem.src}
                alt={mainItem.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              {mainItem.title && (
                <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-xs tracking-[0.2em] text-white/90 uppercase">
                  <span className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl text-white font-light">{mainItem.title}</span>
                  <span className="text-haven-gold text-[11px] font-medium tracking-[0.2em]">{mainItem.subtitle}</span>
                </div>
              )}
            </div>
          )}

          {/* Right Column: 2x2 Grid (Span 6) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gridItems.map((item, index) => (
              <div
                key={item.src + index}
                className="relative aspect-[4/3] overflow-hidden border border-white/10 rounded-[2px] group min-h-[160px] img-editorial"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                {item.title && (
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] tracking-[0.18em] text-white uppercase font-light">
                    <span>{item.title}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
