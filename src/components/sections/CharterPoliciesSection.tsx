"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface CharterPolicyItem {
  title: string;
  body: string | string[];
}

export interface CharterPoliciesSectionProps {
  content: {
    headline: string;
    items: CharterPolicyItem[];
    closingNote: string;
  };
}

function getPolicyIcon(title: string) {
  const t = title.toLowerCase();
  if (t.includes("deposit")) {
    return (
      <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    );
  }
  if (t.includes("final") || t.includes("payment")) {
    return (
      <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  if (t.includes("cancel")) {
    return (
      <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    );
  }
  if (t.includes("weather")) {
    return (
      <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    );
  }
  if (t.includes("time") || t.includes("additional")) {
    return (
      <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    );
  }
  if (t.includes("guest") || t.includes("capacity")) {
    return (
      <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    );
  }
  // Default / Onboard Conduct
  return (
    <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  );
}

export function CharterPoliciesSection({
  content,
}: CharterPoliciesSectionProps) {
  return (
    <Section
      background="deep"
      fullHeight={true}
      className="min-h-screen lg:h-screen flex flex-col justify-center py-10 lg:py-6 text-[#101C29] relative border-t border-b border-[#EAE6DF] bg-white overflow-hidden"
    >
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* LEFT COLUMN: Policies & Terms Stack with Luxury Icons (Matching Reference Image 2) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" duration={0.85}>
              <div>
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 sm:w-12 h-[1.5px] bg-[#B9A078]" />
                  <p className="text-xs sm:text-[13px] tracking-[0.28em] text-[#9E8357] uppercase font-sans font-medium">
                    IMPORTANT INFORMATION
                  </p>
                </div>

                {/* Main Headline */}
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-normal text-[#101C29] tracking-tight leading-[1.14] mb-3">
                  {content.headline || "Charter Policies."}
                </h2>

                {/* Intro Paragraph */}
                <p className="font-sans text-sm sm:text-base text-[#101C29]/80 font-light leading-relaxed mb-6 max-w-xl">
                  We believe in complete transparency and clarity. Our policies ensure every charter aboard HAVEN 550 is safe, seamless, and tailored to your expectations.
                </p>

                {/* Policies List with Custom Luxury Icons */}
                <div className="space-y-4 mb-6">
                  {content.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 sm:gap-4 group"
                    >
                      {/* Luxury Gold Icon Badge */}
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#B9A078]/15 border border-[#B9A078]/30 flex items-center justify-center shrink-0 shadow-sm group-hover:border-[#D4AF37] group-hover:bg-[#B9A078]/25 transition-all duration-300">
                        {getPolicyIcon(item.title)}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-0.5">
                        <h3 className="font-sans font-bold text-sm sm:text-[15px] uppercase tracking-[0.14em] text-[#101C29] mb-1 group-hover:text-[#9E8357] transition-colors">
                          {item.title}
                        </h3>

                        {Array.isArray(item.body) ? (
                          <div className="space-y-1 text-[#101C29]/80 text-xs sm:text-sm font-sans font-light leading-relaxed">
                            {item.body.map((p, pIdx) => (
                              <p key={pIdx}>{p}</p>
                            ))}
                          </div>
                        ) : (
                          <p className="text-[#101C29]/80 text-xs sm:text-sm font-sans font-light leading-relaxed">
                            {item.body}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Closing Note Pill */}
                {content.closingNote && (
                  <div className="p-3.5 rounded-xl bg-white shadow-sm border border-[#EAE6DF] mb-6 max-w-xl">
                    <p className="text-xs text-[#101C29]/75 font-sans font-light italic leading-relaxed">
                      {content.closingNote}
                    </p>
                  </div>
                )}

                {/* Action CTA Button */}
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-[180px] h-[50px] px-3 bg-[#101C29] hover:bg-[#182A3E] text-white text-[11px] sm:text-[12px] font-sans font-medium tracking-[0.15em] uppercase transition-all duration-300 rounded-[1px] shadow-xl group cursor-pointer whitespace-nowrap"
                  >
                    <span>CONTACT CONCIERGE</span>
                    <span className="text-[13px] font-light leading-none group-hover:translate-x-0.5 transition-transform">›</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: Overlapping Dual Luxury Images (Matching Reference Image 2) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <ScrollReveal direction="right" duration={0.9} delay={120}>
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none mx-auto">
                {/* Top / Background Image (Aerial water sports / top-down ocean shot) */}
                <div className="relative aspect-[4/3] w-[88%] ml-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-black group">
                  <Image
                    src="/images/haven-aerial-topdown.jpeg"
                    alt="Aerial view of HAVEN 550 cruising crystal waters"
                    fill
                    sizes="(max-width: 1024px) 80vw, 40vw"
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bottom / Overlapping Foreground Image (Aft deck dining / luxury amenities) */}
                <div className="relative aspect-[4/3] w-[88%] -mt-20 sm:-mt-28 md:-mt-32 mr-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] border-2 border-[#070D14] ring-1 ring-white/20 bg-black group z-10">
                  <Image
                    src="/images/haven-aft-deck.jpeg"
                    alt="Teak aft deck dining and steward hospitality aboard HAVEN 550"
                    fill
                    sizes="(max-width: 1024px) 80vw, 40vw"
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Luxury Stamp */}
                  <div className="absolute bottom-5 left-5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[10px] tracking-[0.2em] uppercase font-mono">
                    FERRETTI 550 &bull; FORT LAUDERDALE
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </Container>
    </Section>
  );
}
