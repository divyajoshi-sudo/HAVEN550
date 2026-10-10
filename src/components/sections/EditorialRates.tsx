"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface RateTier {
  name: string;
  duration: string;
  price: string;
  description?: string;
  popular?: boolean;
  inclusions?: string[];
  image?: { src: string; alt: string };
  eyebrow?: string;
}

export interface EditorialRatesProps {
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  rates?: RateTier[];
  inclusionNote?: string;
  gratuityNote?: string;
  ctaButton?: { label: string; href: string };
  background?: "ivory" | "softWhite" | "navy" | "deep";
}

const DEFAULT_RATES: RateTier[] = [
  {
    name: "The Escape",
    duration: "4 HOURS",
    price: "$3,000",
    eyebrow: "01 // 4 HOURS CHARTER",
    description:
      "An intimate introduction to private yachting along Fort Lauderdale's scenic waterways. Perfect for an unhurried morning or golden afternoon coastal escape with personalized steward service and crystal barware.",
    popular: false,
    image: {
      src: "/images/haven-profile-speed.jpeg",
      alt: "HAVEN 550 running profile along Fort Lauderdale coast",
    },
    inclusions: [
      "Licensed USCG Captain & Dedicated Steward",
      "Fort Lauderdale coastal & intracoastal cruising",
      "Local cruising fuel, soft drinks, ice & crystal barware",
      "Teak swim platform access & premium water mats",
    ],
  },
  {
    name: "The Experience",
    duration: "6 HOURS",
    price: "$4,000",
    eyebrow: "SIGNATURE EXPERIENCE // 6 HOURS CHARTER",
    description:
      "Our signature charter blending open-water ocean cruising, secluded sandbar anchorage, and leisurely alfresco dining. Ample time to swim, deploy water toys, and immerse yourself in the private South Florida lifestyle.",
    popular: true,
    image: {
      src: "/images/haven-bow-sunpad.jpeg",
      alt: "Forward bow sunpad and ocean anchorage on HAVEN 550",
    },
    inclusions: [
      "Licensed USCG Captain & Dedicated Steward",
      "Extended coastal cruising & secluded sandbar anchor time",
      "Ample time for catered dining, swimming & relaxation",
      "Local cruising fuel, premium amenities & water toys",
    ],
  },
  {
    name: "The Full Day",
    duration: "8 HOURS",
    price: "$5,000",
    eyebrow: "03 // 8 HOURS CHARTER",
    description:
      "An unhurried complete immersion into luxury South Florida yachting from morning sunshine through golden hour. Tailor your itinerary with full coastal range to Miami or Boca Raton, anchored coves, and unforgettable sunset views.",
    popular: false,
    image: {
      src: "/images/haven-aft-deck.jpeg",
      alt: "Teak aft deck dining and sunset cruising on HAVEN 550",
    },
    inclusions: [
      "Licensed USCG Captain & Dedicated Steward",
      "Full coastal range (Fort Lauderdale, Miami, or Boca Raton)",
      "Bespoke unhurried itinerary with golden-hour sunset finale",
      "Complete vessel access, customized routing & full service",
    ],
  },
];

export function EditorialRates({
  eyebrow = "THE PRIVILEGE OF PRIVACY",
  headline = "Your Private Charter Awaits.",
  subheadline = "Choose the experience that suits your day.",
  rates = DEFAULT_RATES,
  inclusionNote = "Every charter includes a professional captain, steward, local cruising fuel, and selected onboard amenities.",
  gratuityNote = "Customary crew gratuity of 20% is not included and is given directly to the crew.",
  ctaButton = {
    label: "VIEW ALL CHARTER RATES",
    href: "/charter-rates",
  },
  background = "ivory",
}: EditorialRatesProps) {
  const displayRates = rates.map((rate, idx) => {
    const defaultFallback = DEFAULT_RATES[idx % DEFAULT_RATES.length];
    return {
      ...defaultFallback,
      ...rate,
      image: rate.image || defaultFallback.image,
      eyebrow: rate.eyebrow || defaultFallback.eyebrow,
      inclusions:
        rate.inclusions && rate.inclusions.length > 0
          ? rate.inclusions
          : defaultFallback.inclusions,
      description: rate.description || defaultFallback.description,
    };
  });

  const isNavy = background === "navy" || background === "deep";

  return (
    <section
      className={`relative w-full border-t transition-colors duration-300 min-h-screen flex flex-col justify-center py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-14 xl:px-18 ${
        isNavy
          ? "bg-[#101C29] text-[#F8F8F6] border-white/10"
          : "bg-[#F7F5F0] text-[#101C29] border-[#EAE6DF]"
      }`}
      style={{
        backgroundColor: isNavy ? "#101C29" : "#F7F5F0",
      }}
    >
      <div className="max-w-[1440px] mx-auto w-full flex flex-col justify-center gap-8 sm:gap-10 lg:gap-12 my-auto">
        {/* =========================================================================
            1. MAIN HEADER (Eyebrow with gold accent lines, Title, Subtitle, Specs Badge)
        ========================================================================= */}
        <ScrollReveal direction="up" duration={0.85} className="w-full shrink-0">
          <div className="w-full max-w-3xl mx-auto text-center flex flex-col items-center">
            {/* Eyebrow with centered thin horizontal accent lines */}
            <div className="flex items-center justify-center gap-3 mb-2 mx-auto">
              <span className="w-8 sm:w-12 h-[1px] bg-[#B9A078]" />
              <p className="text-xs sm:text-[12.5px] tracking-[0.24em] uppercase font-sans font-semibold text-[#B9A078]">
                {eyebrow}
              </p>
              <span className="w-8 sm:w-12 h-[1px] bg-[#B9A078]" />
            </div>

            {/* Title: Cormorant Garamond serif */}
            <h2
              className={`font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight leading-[1.12] mb-2 ${
                isNavy ? "text-[#F8F8F6]" : "text-[#101C29]"
              }`}
            >
              {headline}
            </h2>

            {/* Sub-header */}
            {subheadline && (
              <p
                style={{ color: isNavy ? "#F8F8F6" : "#101C29" }}
                className={`text-sm sm:text-base font-normal leading-relaxed mb-2 max-w-xl mx-auto ${
                  isNavy ? "text-[#F8F8F6]" : "text-[#101C29]"
                }`}
              >
                {subheadline}
              </p>
            )}

            {/* Badge Text */}
            <p
              style={{ color: isNavy ? "#B9A078" : "#101C29" }}
              className={`text-[10px] sm:text-[11px] tracking-[0.24em] uppercase font-sans font-semibold ${
                isNavy ? "text-[#B9A078]" : "text-[#101C29]"
              }`}
            >
              FERRETTI 550 &bull; UP TO 8 GUESTS &bull; FORT LAUDERDALE
            </p>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            2. CARDS GRID: Generously spaced cards across the section
        ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 xl:gap-8 items-stretch w-full">
          {displayRates.map((tier, index) => {
            return (
              <ScrollReveal
                key={tier.name}
                direction="up"
                duration={0.85}
                delay={index * 120}
                className="w-full flex"
              >
                <div
                  className={`flex flex-col h-full w-full rounded-[2px] border transition-all duration-300 overflow-hidden group ${
                    isNavy
                      ? "border-white/10 bg-[#0B131C] shadow-xl hover:border-[#B9A078]/50"
                      : "border-[#EAE6DF] bg-white shadow-md hover:shadow-xl hover:border-[#101C29]/30"
                  }`}
                >
                  {/* ── UPPER IMAGE ── */}
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:h-[180px] xl:h-[200px] overflow-hidden bg-[#F4F1EA] shrink-0 border-b border-[#EAE6DF]/40">
                    {tier.image && (
                      <Image
                        src={tier.image.src}
                        alt={tier.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    )}

                    {/* Signature Experience Ribbon / Badge */}
                    {tier.popular && (
                      <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-[#B9A078] text-[#101C29] text-[9.5px] tracking-[0.20em] uppercase font-semibold rounded-[1px] shadow-md">
                        SIGNATURE EXPERIENCE
                      </div>
                    )}
                  </div>

                  {/* ── CONTENT UNDERNEATH ── */}
                  <div className="p-5 sm:p-6 lg:p-6 flex-1 flex flex-col justify-between text-left">
                    <div>
                      {/* Eyebrow Tag */}
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-4 h-[1.5px] bg-[#B9A078]" />
                        <span className="text-[10.5px] font-semibold tracking-[0.22em] uppercase font-sans text-[#B9A078]">
                          {tier.eyebrow}
                        </span>
                      </div>

                      {/* Package Name */}
                      <h3
                        className={`font-serif text-2xl lg:text-[26px] font-normal tracking-tight leading-[1.15] mb-1.5 ${
                          isNavy ? "text-[#F8F8F6]" : "text-[#101C29]"
                        }`}
                      >
                        {tier.name}
                      </h3>

                      {/* Price Display */}
                      <div className="flex items-baseline gap-2 mb-3">
                        <span
                          className={`font-serif text-3xl lg:text-[36px] font-bold tracking-tight leading-none ${
                            isNavy ? "text-[#F8F8F6]" : "text-[#101C29]"
                          }`}
                        >
                          {tier.price}
                        </span>
                        <span className="text-[10.5px] tracking-[0.16em] uppercase font-sans font-medium text-[#B9A078]">
                          / {tier.duration} CHARTER
                        </span>
                      </div>

                      {/* Body Description */}
                      <p
                        style={{ color: isNavy ? "#F8F8F6" : "#101C29" }}
                        className={`text-xs sm:text-[13px] font-normal leading-[1.6] mb-3.5 ${
                          isNavy ? "text-[#F8F8F6]" : "text-[#101C29]"
                        }`}
                      >
                        {tier.description}
                      </p>

                      {/* Checklist Section */}
                      {tier.inclusions && tier.inclusions.length > 0 && (
                        <div
                          className={`pt-3 pb-3 border-t mb-4 ${
                            isNavy ? "border-white/10" : "border-[#EAE6DF]"
                          }`}
                        >
                          <span className="text-[9.5px] tracking-[0.20em] uppercase font-semibold text-[#B9A078] block mb-2">
                            WHAT&apos;S INCLUDED:
                          </span>
                          <div className="space-y-1.5">
                            {tier.inclusions.map((item, idx) => (
                              <div
                                key={idx}
                                style={{ color: isNavy ? "#F8F8F6" : "#101C29" }}
                                className={`flex items-start gap-2 text-[11.5px] sm:text-[12px] font-normal leading-snug ${
                                  isNavy ? "text-[#F8F8F6]" : "text-[#101C29]"
                                }`}
                              >
                                <span className="text-[#B9A078] font-bold shrink-0 text-[11px] mt-0.5">
                                  ✓
                                </span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2 mt-auto">
                      <Link
                        href="/contact"
                        className={`inline-flex items-center justify-center gap-2 w-full h-[46px] px-4 text-[11.5px] sm:text-[12px] tracking-[0.16em] uppercase font-semibold transition-all duration-300 rounded-[1px] shadow-sm hover:shadow-md group whitespace-nowrap ${
                          isNavy
                            ? "bg-[#B9A078] hover:bg-[#C8B08A] text-[#101C29]"
                            : "bg-[#101C29] hover:bg-[#182A3E] text-[#F8F8F6]"
                        }`}
                      >
                        <span>REQUEST THIS CHARTER</span>
                        <span className="text-[13px] font-bold leading-none group-hover:translate-x-1 transition-transform">
                          &gt;
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* =========================================================================
            BOTTOM INCLUSIONS & GRATUITY NOTE BAR
        ========================================================================= */}
        <div
          className={`pt-4 border-t flex flex-col lg:flex-row items-center justify-between gap-4 shrink-0 ${
            isNavy ? "border-white/10" : "border-[#EAE6DF]"
          }`}
        >
          <p
            className={`text-xs sm:text-[13px] font-sans font-normal leading-relaxed text-center lg:text-left flex-1 ${
              isNavy ? "text-[#F8F8F6]" : "text-[#101C29]"
            }`}
          >
            <span>{inclusionNote}</span>{" "}
            <span className="text-[#B9A078] font-semibold">Note: </span>
            <span className={isNavy ? "text-[#F8F8F6]/80" : "text-[#101C29]/80"}>
              {gratuityNote}
            </span>
          </p>

          {ctaButton && (
            <Link
              href={ctaButton.href}
              className={`inline-flex items-center justify-center gap-2 px-6 h-[44px] text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-semibold transition-all duration-300 rounded-[2px] shadow-md shrink-0 whitespace-nowrap group ${
                isNavy
                  ? "bg-[#B9A078] hover:bg-[#C8B08A] text-[#101C29]"
                  : "bg-[#101C29] hover:bg-[#182A3E] text-[#F8F8F6]"
              }`}
            >
              <span>{ctaButton.label}</span>
              <span className="text-[13px] font-bold leading-none group-hover:translate-x-1 transition-transform">
                &gt;
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
