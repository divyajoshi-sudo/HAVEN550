import React from "react";
import type { AmenitySectionContent } from "@/types/content";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { Heading } from "../ui/Heading";

function AmenityIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "crew":
      return (
        <svg
          className="w-7 h-7 text-haven-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          {/* Captain Hat / Officer Silhouette */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 14c0 3 4 5 8 5s8-2 8-5M12 4v4m0 0l-3-2m3 2l3-2M5 10c0-3.3 3.1-6 7-6s7 2.7 7 6H5z"
          />
          <circle cx="12" cy="14" r="2" />
        </svg>
      );
    case "refreshments":
      return (
        <svg
          className="w-7 h-7 text-haven-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          {/* Glass with straw / Ice */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 5h12l-1.5 13.5a2 2 0 01-2 1.5h-5a2 2 0 01-2-1.5L6 5zM4 5h16M14 2l-3 6"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 11h6" />
        </svg>
      );
    case "music":
      return (
        <svg
          className="w-7 h-7 text-haven-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          {/* Musical Notes */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19V6l12-3v13M9 19a3 3 0 11-6 0 3 3 0 016 0zm12 0a3 3 0 11-6 0 3 3 0 016 0zM9 10l12-3"
          />
        </svg>
      );
    case "water":
      return (
        <svg
          className="w-7 h-7 text-haven-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          {/* Snorkel & Mask */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10c0-2.5 2-4.5 4.5-4.5H11c2.5 0 4.5 2 4.5 4.5v1c0 2.5-2 4.5-4.5 4.5H7.5C5 15.5 3 13.5 3 11v-1z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 4v11a3 3 0 01-3 3h-1M6 10h6"
          />
        </svg>
      );
    case "food":
      return (
        <svg
          className="w-7 h-7 text-haven-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          viewBox="0 0 24 24"
        >
          {/* Fork and Knife */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 3v6a3 3 0 01-3 3M7 3v18M4 3v4M10 3v4M17 3v18M17 3a4 4 0 014 4v4h-4V3z"
          />
        </svg>
      );
    default:
      return null;
  }
}

export interface AmenityGridProps {
  content: AmenitySectionContent;
  background?: "navy" | "navyLight" | "deep";
}

export function AmenityGrid({
  content,
  background = "navyLight",
}: AmenityGridProps) {
  return (
    <Section background={background} border="bottom">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Eyebrow className="mb-3 text-haven-gold tracking-[0.35em]">
            {content.eyebrow}
          </Eyebrow>

          <Heading level={2} className="mb-4">
            {content.headline}
          </Heading>

          <div className="w-16 h-[2px] bg-haven-gold/70 mx-auto my-6" />

          {content.subheadline && (
            <p className="text-haven-cream/70 text-sm sm:text-base font-light leading-relaxed">
              {content.subheadline}
            </p>
          )}
        </div>

        {/* 5-Column Amenity Grid matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
          {content.items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center pt-6 sm:pt-0 ${
                index > 0 ? "lg:pl-6" : ""
              }`}
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-full bg-haven-deep border border-haven-gold/30 flex items-center justify-center mb-6 shadow-lg shadow-black/30">
                <AmenityIcon icon={item.icon} />
              </div>

              <h3 className="font-[family-name:var(--font-playfair)] font-serif text-xl font-medium text-haven-cream mb-3">
                {item.title}
              </h3>

              <p className="text-haven-cream/70 text-xs sm:text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
