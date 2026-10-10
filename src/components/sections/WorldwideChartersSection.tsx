"use client";

import React from "react";
import Image from "next/image";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface WorldwideChartersSectionProps {
  eyebrow?: string;
  headline?: string;
  description?: string;
  background?: "ivory" | "navy";
}

export function WorldwideChartersSection({
  eyebrow = "LUXURY",
  background = "ivory",
}: WorldwideChartersSectionProps) {
  const isNavy = background === "navy";

  return (
    <section
      className={`relative w-full border-t transition-colors duration-300 ${
        isNavy
          ? "bg-[#101C29] text-[#F8F8F6] border-white/10"
          : "bg-[#F7F5F0] text-[#262B30] border-[#EAE6DF]"
      }`}
      style={{ padding: "80px 5%" }}
    >
      <div className="max-w-[1360px] mx-auto w-full">
        {/* =========================================================================
            2-ROW STAGGERED GALLERY GRID WITH LEFT HERO COLUMN
            Column 1: Left Hero (Row 1 & 2 spanned on desktop)
            Column 2: Row 1 = Image, Row 2 = Text ("Tailored to you from start to finish")
            Column 3: Row 1 = Text ("Unique Activities"), Row 2 = Image (Hydrofoil)
            Column 4: Row 1 = Image (Superyacht), Row 2 = Text ("Our luxury yacht selection")
        ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 xl:gap-x-10 gap-y-8 lg:gap-y-10 items-start">
          
          {/* =========================================================================
              COLUMN 1: Left Hero Column (spans both rows on desktop)
          ========================================================================= */}
          <div className="lg:row-span-2 flex flex-col justify-start pr-0 lg:pr-2">
            <ScrollReveal direction="up" duration={0.8} className="w-full">
              {/* Eyebrow with centered thin gold accent line */}
              <div className="mb-5 flex flex-col items-start">
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.38em] uppercase font-sans text-[#9E8357]">
                  {eyebrow.split("").join(" ")}
                </span>
                <span className="w-10 h-[1.5px] bg-[#B9A078] mt-2 block" />
              </div>

              {/* Stacked Serif Header */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[34px] xl:text-[38px] font-normal tracking-[0.05em] uppercase leading-[1.15] text-[#101C29] mb-5">
                YACHT<br />
                CHARTERS<br />
                ANYWHERE IN<br />
                THE WORLD
              </h2>

              {/* Editorial Paragraph with Underlined Destination Highlights */}
              <p className="text-[13.5px] sm:text-[14px] font-normal leading-[1.7] text-[#262B30]">
                Imagine dining on the deck of your luxury private yacht with the sunset over{" "}
                <span className="underline decoration-[#B9A078] underline-offset-4 decoration-1">
                  Santorini
                </span>{" "}
                and its dramatic volcano for company. Picture yourself and your family diving the reefs and cays of the{" "}
                <span className="underline decoration-[#B9A078] underline-offset-4 decoration-1">
                  Caribbean Islands
                </span>
                , tracking wildlife across the{" "}
                <span className="underline decoration-[#B9A078] underline-offset-4 decoration-1">
                  Norwegian fjords
                </span>
                , perusing the boutiques of{" "}
                <span className="underline decoration-[#B9A078] underline-offset-4 decoration-1">
                  Capri
                </span>
                , or waking up to the hum of racing cars as morning breaks over{" "}
                <span className="underline decoration-[#B9A078] underline-offset-4 decoration-1">
                  Monte Carlo
                </span>
                .
              </p>
            </ScrollReveal>
          </div>

          {/* =========================================================================
              ROW 1, COLUMN 2: Top Image (Caribbean Cays)
          ========================================================================= */}
          <div className="flex flex-col group">
            <ScrollReveal direction="up" duration={0.8} delay={100} className="w-full">
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[2px] border border-[#EAE6DF] shadow-md bg-[#F4F1EA]">
                <Image
                  src="/images/caribbean-cays.jpg"
                  alt="Aerial view of crystal turquoise Caribbean cays and sandbars"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* =========================================================================
              ROW 1, COLUMN 3: Top Image (Hydrofoil Watersports)
          ========================================================================= */}
          <div className="flex flex-col group">
            <ScrollReveal direction="up" duration={0.8} delay={150} className="w-full">
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[2px] border border-[#EAE6DF] shadow-md bg-[#F4F1EA]">
                <Image
                  src="/images/hydrofoil-watersports.jpg"
                  alt="Exciting water activities and flyboard watersports behind luxury yacht"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* =========================================================================
              ROW 1, COLUMN 4: Top Image (Superyacht Sea Pool)
          ========================================================================= */}
          <div className="flex flex-col group">
            <ScrollReveal direction="up" duration={0.8} delay={200} className="w-full">
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[2px] border border-[#EAE6DF] shadow-md bg-[#F4F1EA]">
                <Image
                  src="/images/luxury-superyacht-pool.jpg"
                  alt="Superyacht with water slide and inflatable sea pool"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* =========================================================================
              ROW 2, COLUMN 2: Bottom Text ("Tailored to you from start to finish")
          ========================================================================= */}
          <div className="flex flex-col justify-start">
            <ScrollReveal direction="up" duration={0.8} delay={120} className="w-full">
              <h3 className="font-serif text-xl sm:text-2xl lg:text-[23px] font-normal tracking-tight text-[#101C29] leading-snug mb-2.5">
                Tailored to you from start to finish
              </h3>
              <p className="text-[13.5px] sm:text-[14px] font-normal leading-[1.65] text-[#262B30]">
                Tailored to you from start to finish, a luxury yacht charter enables you to carve out your dream itinerary aboard the yacht of your choosing in a destination you&apos;ve longed to explore.
              </p>
            </ScrollReveal>
          </div>

          {/* =========================================================================
              ROW 2, COLUMN 3: Bottom Text ("Unique Activities")
          ========================================================================= */}
          <div className="flex flex-col justify-start">
            <ScrollReveal direction="up" duration={0.8} delay={170} className="w-full">
              <h3 className="font-serif text-xl sm:text-2xl lg:text-[23px] font-normal tracking-tight text-[#101C29] leading-snug mb-2.5">
                Unique Activities
              </h3>
              <p className="text-[13.5px] sm:text-[14px] font-normal leading-[1.65] text-[#262B30]">
                On a charter vacation, you and your family can choose from a wide variety of activities on board, on land and in the water, delectable cuisine served both on deck and in local restaurants ashore, and an impeccable level of service from your knowledgeable and professional crew.
              </p>
            </ScrollReveal>
          </div>

          {/* =========================================================================
              ROW 2, COLUMN 4: Bottom Text ("Our luxury yacht selection")
          ========================================================================= */}
          <div className="flex flex-col justify-start">
            <ScrollReveal direction="up" duration={0.8} delay={220} className="w-full">
              <h3 className="font-serif text-xl sm:text-2xl lg:text-[23px] font-normal tracking-tight text-[#101C29] leading-snug mb-2.5">
                Our luxury yacht selection
              </h3>
              <p className="text-[13.5px] sm:text-[14px] font-normal leading-[1.65] text-[#262B30]">
                Our extensive luxury yacht selection represents some of the best builds, the most experienced crews and the most competitive rates of the season. So where will your yacht charter vacation take you?
              </p>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
