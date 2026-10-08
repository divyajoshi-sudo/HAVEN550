"use client";

import Image from "next/image";
import { useState } from "react";
import type { CategorizedGalleryContent } from "@/types/content";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { Heading } from "../ui/Heading";

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
    <Section background={background} border="bottom">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Eyebrow className="mb-3 text-haven-gold tracking-[0.35em]">
            {content.eyebrow}
          </Eyebrow>

          <Heading level={2} className="mb-4">
            {content.headline}
          </Heading>

          <div className="w-16 h-[2px] bg-haven-gold/70 mx-auto my-6" />

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 mt-8">
            <button
              onClick={() => setActiveCategory("ALL")}
              className={`px-3 py-1.5 text-[0.68rem] tracking-[0.25em] uppercase font-medium transition-all duration-300 ${
                activeCategory === "ALL"
                  ? "text-haven-gold border-b-2 border-haven-gold"
                  : "text-haven-slate hover:text-haven-cream"
              }`}
            >
              ALL
            </button>
            {content.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-[0.68rem] tracking-[0.25em] uppercase font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "text-haven-gold border-b-2 border-haven-gold"
                    : "text-haven-slate hover:text-haven-cream"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 5-Photo Gallery Layout matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Large Photo (Left Span 6) */}
          {mainItem && (
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto min-h-[380px] lg:min-h-[520px] rounded-sm overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src={mainItem.src}
                alt={mainItem.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-haven-deep/60 via-transparent to-transparent pointer-events-none" />
              {mainItem.title && (
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs tracking-[0.2em] text-haven-cream/90 uppercase">
                  <span>{mainItem.title}</span>
                  <span className="text-haven-slate">{mainItem.subtitle}</span>
                </div>
              )}
            </div>
          )}

          {/* Right Column: 2x2 Grid (Span 6) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gridItems.map((item, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10 shadow-lg group min-h-[160px]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-haven-deep/50 via-transparent to-transparent pointer-events-none" />
                {item.title && (
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[0.65rem] tracking-[0.2em] text-haven-cream/90 uppercase">
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
