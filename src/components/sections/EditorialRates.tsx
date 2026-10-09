"use client";

import React from "react";
import Link from "next/link";
import { Container } from "../layout/Container";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface RateTier {
  name: string;
  duration: string;
  price: string;
  description?: string;
  popular?: boolean;
  inclusions?: string[];
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
    duration: "4 Hours",
    price: "$3,000",
    description: "An intimate introduction to private yachting along Fort Lauderdale's scenic waterways.",
    popular: false,
    inclusions: [
      "Licensed USCG Captain & Dedicated Steward",
      "Fort Lauderdale coastal & intracoastal cruising",
      "Local fuel, soft drinks, ice & crystal barware",
      "Teak swim platform & premium water mats",
    ],
  },
  {
    name: "The Experience",
    duration: "6 Hours",
    price: "$4,000",
    description: "Our signature cruise blending coastal cruising, sandbar anchorage, and leisurely dining.",
    popular: true,
    inclusions: [
      "Licensed USCG Captain & Dedicated Steward",
      "Extended coastal cruising & sandbar anchor time",
      "Ample time for catered dining & swimming",
      "Local fuel, premium amenities & water toys",
    ],
  },
  {
    name: "The Full Day",
    duration: "8 Hours",
    price: "$5,000",
    description: "An unhurried complete immersion into luxury yachting from morning sun to golden hour.",
    popular: false,
    inclusions: [
      "Licensed USCG Captain & Dedicated Steward",
      "Full coastal range (Miami or Boca options)",
      "Unhurried itinerary with sunset finale",
      "Complete vessel access & customized routing",
    ],
  },
];

export function EditorialRates({
  eyebrow = "THE PRIVILEGE OF PRIVACY",
  headline = "Your Private Charter Awaits.",
  subheadline = "Choose the journey that suits your schedule. Transparent pricing, no hidden extras.",
  rates = DEFAULT_RATES,
  inclusionNote = "Every charter includes a licensed USCG captain, private steward, local cruising fuel, soft drinks, and onboard amenities.",
  gratuityNote = "Customary crew gratuity of 20% is not included and is given directly to the crew.",
  ctaButton = {
    label: "VIEW ALL CHARTER RATES & POLICIES",
    href: "/charter-rates",
  },
  background = "navy",
}: EditorialRatesProps) {
  const isNavy = background === "navy" || background === "deep";

  return (
    <section
      className={`min-h-screen flex flex-col justify-center py-20 md:py-28 relative overflow-hidden transition-colors duration-300 ${
        isNavy
          ? "bg-[#0B141D] text-[#F7F5F0] border-t border-b border-white/10"
          : "bg-[#EFECE5] text-[#08182B] border-t border-b border-[#D8D2C6]"
      }`}
    >
      {isNavy && (
        <div className="absolute inset-0 ambient-glow-gold pointer-events-none opacity-30" />
      )}

      <Container size="default">
        {/* Header with proper vertical spacing */}
        <ScrollReveal direction="up" duration={0.85} className="w-full flex justify-center">
          <div
            className={`w-full max-w-4xl mx-auto text-center mb-14 pb-8 flex flex-col items-center ${
              isNavy ? "border-b border-white/10" : "border-b border-[#D8D2C6]"
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#B9A078]" />
              <p className="text-xs sm:text-[13px] tracking-[0.28em] text-[#B9A078] uppercase font-medium">
                {eyebrow}
              </p>
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#B9A078]" />
            </div>

            <h2
              className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal tracking-tight leading-[1.1] mb-3 text-center mx-auto w-full ${
                isNavy ? "text-[#F7F5F0]" : "text-[#08182B]"
              }`}
            >
              {headline}
            </h2>

            {subheadline && (
              <p
                className={`text-sm sm:text-base font-light max-w-xl mx-auto text-center mb-6 ${
                  isNavy ? "text-[#EFECE5]/80" : "text-[#0F243A]"
                }`}
              >
                {subheadline}
              </p>
            )}

            {/* Vessel Specs Pill */}
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full text-[11px] sm:text-xs tracking-[0.2em] uppercase font-medium whitespace-nowrap sm:whitespace-normal ${
                isNavy
                  ? "bg-white/5 border border-white/15 text-[#EFECE5]/90"
                  : "bg-[#FAF8F5] border border-[#D8D2C6] text-[#08182B]"
              }`}
            >
              <span>FERRETTI 550 &bull; UP TO 8 GUESTS &bull; FORT LAUDERDALE</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Staggered Pricing Cards with Inclusions Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-2 mb-12">
          {rates.map((rate, index) => {
            const inclusions =
              rate.inclusions ||
              DEFAULT_RATES[index % DEFAULT_RATES.length]?.inclusions ||
              [];

            return (
              <ScrollReveal
                key={index}
                direction="up"
                duration={0.8}
                delay={index * 140}
                className="h-full"
              >
                <div
                  className={`relative p-8 sm:p-9 flex flex-col justify-between h-full rounded-[3px] transition-all duration-500 group ${
                    rate.popular
                      ? isNavy
                        ? "bg-[#101C29] border-2 border-[#B9A078] shadow-2xl hover:shadow-[0_20px_50px_rgba(185,160,120,0.15)] md:-translate-y-2 z-10"
                        : "bg-[#FAF8F5] border-2 border-[#B9A078] shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] md:-translate-y-2 z-10"
                      : isNavy
                      ? "bg-[#0E1722] border border-white/10 hover:border-[#B9A078]/60 hover:-translate-y-1.5 hover:shadow-xl"
                      : "bg-[#FAF8F5] border border-[#D8D2C6] hover:border-[#B9A078]/60 hover:-translate-y-1.5 hover:shadow-xl"
                  }`}
                >
                  {/* Popular Signature Badge with subtle shimmer */}
                  {rate.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#B9A078] text-[#0B141D] text-[10px] sm:text-[11px] tracking-[0.24em] uppercase font-semibold rounded-[2px] shadow-md whitespace-nowrap animate-badge-shimmer">
                      SIGNATURE EXPERIENCE
                    </div>
                  )}

                  <div>
                    {/* Top Row: Name and Duration */}
                    <div className="flex items-center justify-between gap-2 mb-2 pt-1">
                      <h3
                        className={`font-serif text-2xl sm:text-[26px] font-normal ${
                          isNavy ? "text-[#F7F5F0]" : "text-[#08182B]"
                        }`}
                      >
                        {rate.name}
                      </h3>
                      <span
                        className={`px-3 py-1 text-[11px] tracking-[0.16em] uppercase font-medium rounded-[2px] shrink-0 ${
                          isNavy
                            ? "bg-white/10 border border-white/15 text-[#EFECE5]"
                            : "bg-[#EFECE5] border border-[#D8D2C6] text-[#08182B]"
                        }`}
                      >
                        {rate.duration}
                      </span>
                    </div>

                    {/* Rate Label */}
                    <span
                      className={`text-[10px] sm:text-[11px] tracking-[0.24em] uppercase font-light block mb-2 ${
                        isNavy ? "text-[#B9A078]" : "text-[#88837A]"
                      }`}
                    >
                      CHARTER RATE
                    </span>

                    {/* Price */}
                    <div
                      className={`font-serif text-4xl sm:text-[44px] font-normal tracking-tight mb-4 ${
                        isNavy ? "text-[#F7F5F0]" : "text-[#08182B]"
                      }`}
                    >
                      {rate.price}
                    </div>

                    {/* Short Description */}
                    {rate.description && (
                      <p
                        className={`text-sm font-light leading-relaxed mb-6 ${
                          isNavy ? "text-[#EFECE5]/85" : "text-[#0F243A]"
                        }`}
                      >
                        {rate.description}
                      </p>
                    )}

                    {/* Checklist of Inclusions */}
                    <div className="space-y-2.5 mb-8 pt-4 border-t border-white/10">
                      <span
                        className={`text-[10px] tracking-[0.2em] uppercase font-medium block mb-2 ${
                          isNavy ? "text-white/50" : "text-[#6E6A62]"
                        }`}
                      >
                        WHAT&apos;S INCLUDED:
                      </span>
                      {inclusions.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-relaxed font-light">
                          <span className="text-[#B9A078] shrink-0 mt-0.5">✓</span>
                          <span className={isNavy ? "text-[#EFECE5]/90" : "text-[#08182B]"}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Real Padded Button with clear hierarchy */}
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className={`w-full h-[48px] px-6 text-[11px] sm:text-xs tracking-[0.18em] uppercase font-medium transition-all duration-300 rounded-[2px] inline-flex items-center justify-center gap-2 group cursor-pointer shadow-md ${
                        rate.popular
                          ? "bg-[#B9A078] hover:bg-[#A88D60] text-[#0B141D]"
                          : isNavy
                          ? "border border-white/25 hover:border-[#B9A078] hover:bg-[#B9A078] hover:text-[#0B141D] text-[#F7F5F0]"
                          : "border border-[#D8D2C6] hover:border-[#B9A078] hover:bg-[#B9A078] hover:text-[#0B141D] text-[#08182B]"
                      }`}
                    >
                      <span>REQUEST THIS CHARTER</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Inclusions & Gratuity Note Bar + Prominent View All Rates Link */}
        <ScrollReveal direction="up" duration={0.8} delay={200}>
          <div
            className={`p-7 sm:p-9 rounded-[3px] flex flex-col md:flex-row items-center justify-between gap-6 relative shadow-lg ${
              isNavy
                ? "bg-[#101C29] border border-white/15"
                : "bg-[#FAF8F5] border border-[#D8D2C6]"
            }`}
          >
            <div className="text-center md:text-left space-y-1.5 max-w-2xl">
              <p
                className={`text-sm sm:text-[15px] font-medium leading-relaxed ${
                  isNavy ? "text-[#F7F5F0]" : "text-[#08182B]"
                }`}
              >
                {inclusionNote}
              </p>
              <p
                className={`text-xs sm:text-sm font-light ${
                  isNavy ? "text-[#EFECE5]/80" : "text-[#0F243A]"
                }`}
              >
                <span className="text-[#B9A078] font-medium">Note: </span>
                {gratuityNote}
              </p>
            </div>

            {ctaButton && (
              <Link
                href={ctaButton.href}
                className="whitespace-nowrap h-[48px] px-8 bg-transparent border border-[#B9A078] text-[#B9A078] hover:bg-[#B9A078] hover:text-[#0B141D] text-[11px] sm:text-xs tracking-[0.18em] uppercase font-medium transition-all duration-300 rounded-[2px] inline-flex items-center justify-center gap-2 group cursor-pointer shrink-0 shadow-md"
              >
                <span>{ctaButton.label}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
            )}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
