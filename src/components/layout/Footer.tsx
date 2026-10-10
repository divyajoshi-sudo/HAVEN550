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
    <footer
      style={{ backgroundColor: "#101C29", color: "#F8F8F6" }}
      className="relative min-h-[50vh] flex flex-col justify-between bg-[#101C29] text-[#F8F8F6] border-t border-white/10 overflow-hidden"
    >
      {/* Main Footer Container */}
      <div className="relative z-10 flex-1 flex flex-col justify-center py-16 sm:py-20 lg:py-24">
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
                  <span
                    style={{
                      fontWeight: 500,
                      WebkitTextStroke: "0.25px currentColor",
                      color: "#F8F8F6",
                    }}
                    className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-[0.25em] text-[#F8F8F6] group-hover:text-[#B9A078] transition-colors duration-300"
                  >
                    HAVEN 550
                  </span>
                </Link>

                <p
                  style={{ color: "#F8F8F6" }}
                  className="font-serif italic text-lg sm:text-xl lg:text-2xl text-[#F8F8F6] font-light mb-5"
                >
                  {site.tagline || "Your Time. Your Waters. Your Haven."}
                </p>

                <p
                  style={{ color: "#F8F8F6" }}
                  className="text-[#F8F8F6] text-sm sm:text-base font-light leading-relaxed max-w-sm mb-7"
                >
                  Private luxury yacht charters along South Florida&apos;s most beautiful coastal waterways. Intimate, captained journeys tailored to you.
                </p>

                {/* Vessel Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-white/20 bg-[#101C29] text-[#F8F8F6] text-[11px] sm:text-xs tracking-[0.22em] uppercase font-medium">
                  <span style={{ color: "#F8F8F6" }}>2021 FERRETTI 550</span>
                  <span className="text-white/40">|</span>
                  <span style={{ color: "#F8F8F6" }}>57 FT</span>
                  <span className="text-white/40">|</span>
                  <span style={{ color: "#F8F8F6" }}>8 GUESTS</span>
                </div>
              </div>

              {/* Company Entity Stamp */}
              <div className="pt-6 border-t border-white/10 space-y-1">
                <span
                  style={{ color: "#F8F8F6" }}
                  className="text-[11px] sm:text-xs tracking-[0.22em] text-[#F8F8F6] uppercase font-mono block opacity-90"
                >
                  {site.companyName}
                </span>
                <span
                  style={{ color: "#F8F8F6" }}
                  className="text-xs sm:text-sm text-[#F8F8F6] font-light block"
                >
                  Founder: {site.founder}
                </span>
              </div>
            </div>

            {/* Column 2: Navigation / Explore (2 cols) */}
            <div className="lg:col-span-2">
              <div className="mb-7">
                <span
                  style={{ color: "#F8F8F6" }}
                  className="text-xs tracking-[0.28em] uppercase text-[#F8F8F6] font-medium block"
                >
                  EXPLORE
                </span>
                <div className="w-8 h-[1px] bg-white/30 mt-2.5" />
              </div>
              <ul className="space-y-4">
                {navigation.footer.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{ color: "#F8F8F6" }}
                      className="inline-block text-sm sm:text-[15px] text-[#F8F8F6] hover:text-[#B9A078] hover:translate-x-1.5 transition-all duration-200 font-normal"
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
                <span
                  style={{ color: "#F8F8F6" }}
                  className="text-xs tracking-[0.28em] uppercase text-[#F8F8F6] font-medium block"
                >
                  INFORMATION
                </span>
                <div className="w-8 h-[1px] bg-white/30 mt-2.5" />
              </div>
              <ul className="space-y-4">
                {navigation.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{ color: "#F8F8F6" }}
                      className="inline-block text-sm sm:text-[15px] text-[#F8F8F6] hover:text-[#B9A078] hover:translate-x-1.5 transition-all duration-200 font-normal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/charter-rates"
                    style={{ color: "#F8F8F6" }}
                    className="inline-block text-sm sm:text-[15px] text-[#F8F8F6] hover:text-[#B9A078] hover:translate-x-1.5 transition-all duration-200 font-normal"
                  >
                    Pricing &amp; Rates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinations"
                    style={{ color: "#F8F8F6" }}
                    className="inline-block text-sm sm:text-[15px] text-[#F8F8F6] hover:text-[#B9A078] hover:translate-x-1.5 transition-all duration-200 font-normal"
                  >
                    Cruising Grounds
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Charter Concierge */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                {/* Section label */}
                <div className="mb-7">
                  <span
                    style={{ color: "#F8F8F6" }}
                    className="text-xs tracking-[0.28em] uppercase text-[#F8F8F6] font-medium block"
                  >
                    CHARTER CONCIERGE
                  </span>
                  <div className="w-8 h-[1px] bg-white/30 mt-2.5" />
                </div>

                {/* Contact rows */}
                <div className="divide-y divide-white/10">
                  {/* Location */}
                  <div className="py-4">
                    <span
                      style={{ color: "#F8F8F6" }}
                      className="text-[0.6rem] tracking-[0.3em] uppercase text-[#F8F8F6] font-medium block mb-1 opacity-90"
                    >
                      Departure Marina
                    </span>
                    <p
                      style={{ color: "#F8F8F6" }}
                      className="text-sm text-[#F8F8F6] font-normal leading-snug"
                    >
                      {site.location}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="py-4">
                    <span
                      style={{ color: "#F8F8F6" }}
                      className="text-[0.6rem] tracking-[0.3em] uppercase text-[#F8F8F6] font-medium block mb-1 opacity-90"
                    >
                      Direct Line
                    </span>
                    <a
                      href={`tel:${cleanPhone}`}
                      style={{ color: "#F8F8F6" }}
                      className="text-sm text-[#F8F8F6] hover:text-[#B9A078] transition-colors duration-300 font-normal block"
                    >
                      {site.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="py-4">
                    <span
                      style={{ color: "#F8F8F6" }}
                      className="text-[0.6rem] tracking-[0.3em] uppercase text-[#F8F8F6] font-medium block mb-1 opacity-90"
                    >
                      Email
                    </span>
                    <a
                      href={`mailto:${site.email}`}
                      style={{ color: "#F8F8F6" }}
                      className="text-sm text-[#F8F8F6] hover:text-[#B9A078] transition-colors duration-300 font-normal block"
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
                  className="inline-flex items-center gap-2.5 group cursor-pointer"
                >
                  <span
                    style={{ color: "#F8F8F6" }}
                    className="text-xs tracking-[0.22em] uppercase font-medium text-[#F8F8F6] group-hover:text-[#B9A078] transition-colors duration-300"
                  >
                    Request a Charter
                  </span>
                  <span className="w-8 h-[1px] bg-[#F8F8F6] group-hover:w-12 group-hover:bg-[#B9A078] transition-all duration-400" />
                  <span
                    style={{ color: "#F8F8F6" }}
                    className="text-[#F8F8F6] group-hover:text-[#B9A078] transition-colors duration-300 text-sm"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div
        style={{ backgroundColor: "#0B131C" }}
        className="border-t border-white/10 bg-[#0B131C] py-6 sm:py-7"
      >
        <Container size="wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p
              style={{ color: "#F8F8F6" }}
              className="text-xs sm:text-[13px] text-[#F8F8F6] tracking-wider font-light"
            >
              &copy; 2026 {site.companyName}. All rights reserved.
            </p>
            <div
              style={{ color: "#F8F8F6" }}
              className="flex items-center gap-3 text-xs sm:text-[13px] text-[#F8F8F6] tracking-[0.22em] uppercase font-light"
            >
              <span style={{ color: "#F8F8F6" }}>26&deg;07&prime;N 80&deg;08&prime;W</span>
              <span className="text-white/40">&bull;</span>
              <span style={{ color: "#F8F8F6" }}>FORT LAUDERDALE</span>
              <span className="text-white/40">&bull;</span>
              <span style={{ color: "#F8F8F6" }}>SOUTH FLORIDA</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
