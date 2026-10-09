import Link from "next/link";
import type { NavigationContent, SiteInfo } from "@/types/content";
import { Container } from "./Container";

export interface FooterProps {
  navigation: NavigationContent;
  site: SiteInfo;
}

export function Footer({ navigation, site }: FooterProps) {
  const cleanPhone = site.phone.replace(/[^0-9+]/g, "");

  return (
    <footer className="relative min-h-[60vh] flex flex-col justify-between bg-[#07111A] text-white border-t border-white/10 overflow-hidden">
      {/* Background subtle radial oceanic lighting */}
      <div className="absolute inset-0 ambient-glow-navy pointer-events-none opacity-50" />

      {/* Main Footer Container */}
      <div className="relative z-10 flex-1 flex flex-col justify-center py-20 lg:py-24 xl:py-28">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-stretch">
            {/* Column 1: Brand, Tagline & Vessel Badge (4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
              <div>
                <Link
                  href="/"
                  className="inline-block group mb-3"
                  aria-label="HAVEN 550 Home"
                >
                  <span className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-light tracking-[0.25em] text-white group-hover:text-[#B9A078] transition-colors duration-300">
                    HAVEN 550
                  </span>
                </Link>

                <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-[#B9A078] font-light mb-5">
                  {site.tagline || "Your Time. Your Waters. Your Haven."}
                </p>

                <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed max-w-sm mb-7">
                  Private luxury yacht charters along South Florida&apos;s most beautiful coastal waterways. Intimate, captained journeys tailored to you.
                </p>

                {/* Vessel Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-[#B9A078]/35 bg-[#0B141D]/80 backdrop-blur-sm text-[11px] sm:text-xs tracking-[0.22em] text-[#B9A078] uppercase font-medium">
                  <span>2021 FERRETTI 550</span>
                  <span className="text-white/30">|</span>
                  <span>57 FT</span>
                  <span className="text-white/30">|</span>
                  <span>8 GUESTS</span>
                </div>
              </div>

              {/* Company Entity Stamp */}
              <div className="pt-6 border-t border-white/5 space-y-1">
                <span className="text-[11px] sm:text-xs tracking-[0.22em] text-white/45 uppercase font-mono block">
                  {site.companyName}
                </span>
                <span className="text-xs sm:text-sm text-white/50 font-light block">
                  Founder: {site.founder}
                </span>
              </div>
            </div>

            {/* Column 2: Navigation / Explore (2 cols) */}
            <div className="lg:col-span-2">
              <div className="mb-7">
                <span className="text-xs tracking-[0.28em] uppercase text-[#B9A078] font-medium block">
                  EXPLORE
                </span>
                <div className="w-8 h-[1px] bg-[#B9A078]/60 mt-2.5" />
              </div>
              <ul className="space-y-4">
                {navigation.footer.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block text-sm sm:text-[15px] text-white/70 hover:text-white hover:translate-x-1.5 transition-all duration-200 font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Information & Policies (2 cols) */}
            <div className="lg:col-span-2">
              <div className="mb-7">
                <span className="text-xs tracking-[0.28em] uppercase text-[#B9A078] font-medium block">
                  INFORMATION
                </span>
                <div className="w-8 h-[1px] bg-[#B9A078]/60 mt-2.5" />
              </div>
              <ul className="space-y-4">
                {navigation.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block text-sm sm:text-[15px] text-white/70 hover:text-white hover:translate-x-1.5 transition-all duration-200 font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/charter-rates"
                    className="inline-block text-sm sm:text-[15px] text-white/70 hover:text-white hover:translate-x-1.5 transition-all duration-200 font-light"
                  >
                    Pricing &amp; Rates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinations"
                    className="inline-block text-sm sm:text-[15px] text-white/70 hover:text-white hover:translate-x-1.5 transition-all duration-200 font-light"
                  >
                    Cruising Grounds
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Charter Concierge — open typographic layout, no card box */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                {/* Section label */}
                <div className="mb-7">
                  <span className="text-xs tracking-[0.28em] uppercase text-[#B9A078] font-medium block">
                    CHARTER CONCIERGE
                  </span>
                  <div className="w-8 h-[1px] bg-[#B9A078]/60 mt-2.5" />
                </div>

                {/* Contact rows — clean divider style */}
                <div className="divide-y divide-white/[0.06]">
                  {/* Location */}
                  <div className="py-4">
                    <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/35 font-medium block mb-1">
                      Departure Marina
                    </span>
                    <p className="text-sm text-white/80 font-light leading-snug">
                      {site.location}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="py-4">
                    <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/35 font-medium block mb-1">
                      Direct Line
                    </span>
                    <a
                      href={`tel:${cleanPhone}`}
                      className="text-sm text-white/85 hover:text-[#B9A078] transition-colors duration-300 font-light"
                    >
                      {site.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="py-4">
                    <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/35 font-medium block mb-1">
                      Email
                    </span>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-sm text-white/85 hover:text-[#B9A078] transition-colors duration-300 font-light"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 group"
                >
                  <span className="text-xs tracking-[0.22em] uppercase font-medium text-[#B9A078] group-hover:text-white transition-colors duration-300">
                    Request a Charter
                  </span>
                  <span className="w-8 h-[1px] bg-[#B9A078] group-hover:w-12 transition-all duration-400" />
                  <span className="text-[#B9A078] group-hover:text-white transition-colors duration-300 text-sm">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-white/10 bg-[#050C13] py-7 sm:py-8">
        <Container size="wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-xs sm:text-[13px] text-white/50 tracking-wider font-light">
              &copy; 2026 {site.companyName}. All rights reserved.
            </p>
            <div className="flex items-center gap-3 text-xs sm:text-[13px] text-[#B9A078]/90 tracking-[0.22em] uppercase font-light">
              <span>26&deg;07&prime;N 80&deg;08&prime;W</span>
              <span className="text-white/20">&bull;</span>
              <span>FORT LAUDERDALE</span>
              <span className="text-white/20">&bull;</span>
              <span>SOUTH FLORIDA</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
