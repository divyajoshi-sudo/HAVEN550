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
  background?: "navy" | "navyLight" | "deep" | "ivory" | "softWhite";
}

export function AmenityGrid({
  content,
  background = "ivory",
}: AmenityGridProps) {
  const isLight = background === "ivory" || background === "softWhite";

  return (
    <Section background={background} border="bottom" fullHeight={true} className="min-h-screen lg:h-screen flex flex-col justify-center py-10 lg:py-6 overflow-hidden">
      <Container size="default">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-8">
          <Eyebrow className="mb-3 text-[#9E8357] tracking-[0.35em]">
            {content.eyebrow}
          </Eyebrow>

          <Heading
            level={2}
            style={{ color: isLight ? "#101C29" : "#F8F8F6" }}
            className={`mb-4 ${isLight ? "text-[#101C29]" : "text-[#F8F8F6]"}`}
          >
            {content.headline}
          </Heading>

          <div className="w-16 h-[2px] bg-[#B9A078]/80 mx-auto my-6" />

          {content.subheadline && (
            <p
              style={{ color: isLight ? "#101C29" : "#F8F8F6" }}
              className={`text-sm sm:text-base font-light leading-relaxed ${
                isLight ? "text-[#101C29]" : "text-[#F8F8F6]/80"
              }`}
            >
              {content.subheadline}
            </p>
          )}
        </div>

        {/* 5-Column Amenity Editorial Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 pt-4 items-stretch"
        >
          {content.items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 sm:p-7 rounded-[2px] transition-all duration-300 border bg-white border-[#EAE6DF] hover:border-[#B9A078] shadow-sm hover:shadow-md"
            >
              {/* Refined Minimalist Icon Framing */}
              <div
                className="w-12 h-12 flex items-center justify-center mb-6 text-[#9E8357] border border-[#B9A078]/40 bg-white"
              >
                <AmenityIcon icon={item.icon} />
              </div>

              <h3
                style={{ color: "#101C29" }}
                className="font-[family-name:var(--font-cormorant)] text-xl lg:text-2xl font-light mb-3 tracking-wide text-[#101C29]"
              >
                {item.title}
              </h3>

              <p
                style={{ color: "#101C29" }}
                className="text-xs sm:text-sm leading-relaxed font-light text-[#101C29]"
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
