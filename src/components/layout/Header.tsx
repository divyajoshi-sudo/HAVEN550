"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { NavigationContent, SiteInfo } from "@/types/content";
import { MobileMenu } from "./MobileMenu";

export interface HeaderProps {
  navigation: NavigationContent;
  site: SiteInfo;
}

export function Header({ navigation, site }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white border-b border-[#E5E0D8]/80 h-[70px] min-h-[70px] flex items-center transition-all duration-200 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Left: Hamburger Button + 3 Main Links */}
          <div className="flex items-center gap-5 lg:gap-7 flex-1">
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center p-2 text-[#1C252B] hover:text-[#B79B6A] transition-colors focus:outline-none"
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            </button>

            {/* Left Nav: THE YACHT, EXPERIENCES, DESTINATIONS */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Primary Navigation">
              <Link
                href="/the-yacht"
                className={`text-[0.68rem] xl:text-[0.72rem] tracking-[0.22em] uppercase transition-colors py-1 ${
                  pathname === "/the-yacht"
                    ? "text-[#1C252B] font-semibold border-b border-[#1C252B]"
                    : "text-[#1C252B]/85 hover:text-[#B79B6A]"
                }`}
              >
                THE YACHT
              </Link>
              <Link
                href="/experiences"
                className={`text-[0.68rem] xl:text-[0.72rem] tracking-[0.22em] uppercase transition-colors py-1 ${
                  pathname === "/experiences"
                    ? "text-[#1C252B] font-semibold border-b border-[#1C252B]"
                    : "text-[#1C252B]/85 hover:text-[#B79B6A]"
                }`}
              >
                EXPERIENCES
              </Link>
              <Link
                href="/destinations"
                className={`text-[0.68rem] xl:text-[0.72rem] tracking-[0.22em] uppercase transition-colors py-1 ${
                  pathname === "/destinations"
                    ? "text-[#1C252B] font-semibold border-b border-[#1C252B]"
                    : "text-[#1C252B]/85 hover:text-[#B79B6A]"
                }`}
              >
                DESTINATIONS
              </Link>
            </nav>
          </div>

          {/* Center: Brand Logo */}
          <div className="flex flex-col items-center text-center px-4">
            <Link href="/" className="group flex flex-col items-center">
              <span className="font-serif text-2xl lg:text-3xl font-medium tracking-[0.25em] text-[#071B2A] group-hover:text-[#B79B6A] transition-colors leading-none">
                {site.brand}
              </span>
              <span className="text-[0.48rem] sm:text-[0.52rem] tracking-[0.35em] uppercase text-[#8A8A84] font-light mt-0.5">
                PRIVATE YACHT CHARTERS
              </span>
            </Link>
          </div>

          {/* Right: Utility Icons (Heart / Inquiries / Search) & Contact */}
          <div className="flex items-center justify-end gap-5 lg:gap-6 flex-1 text-[#1C252B]">
            {/* Heart / Saved */}
            <Link
              href="/experiences"
              className="relative p-1.5 hover:text-[#B79B6A] transition-colors hidden sm:block"
              aria-label="Saved charters"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#B79B6A] rounded-full" />
            </Link>

            {/* Inquiries Badge with 0 */}
            <Link
              href="/contact"
              className="relative p-1.5 hover:text-[#B79B6A] transition-colors flex items-center gap-1"
              aria-label="Inquiry bag"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span className="text-[0.65rem] font-medium text-[#1C252B]">0</span>
            </Link>

            {/* Search Icon */}
            <Link
              href="/destinations"
              className="p-1.5 hover:text-[#B79B6A] transition-colors"
              aria-label="Search destinations"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navigation.primary}
        location={site.location}
      />
    </>
  );
}
