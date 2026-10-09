"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import type { NavigationContent, SiteInfo } from "@/types/content";
import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";

export interface HeaderProps {
  navigation: NavigationContent;
  site: SiteInfo;
}

export function Header({ navigation, site }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 80);

      // Hide navbar when scrolling down past 120px, reveal when scrolling up
      if (currentScrollY > 120 && currentScrollY > lastScrollYRef.current + 8) {
        setVisible(false);
      } else if (currentScrollY < lastScrollYRef.current - 6 || currentScrollY <= 80) {
        setVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isHomePage && !scrolled;

  const headerBgClass = isTransparent
    ? "bg-transparent border-transparent"
    : "bg-[#0C141D]/95 backdrop-blur-[12px] border-b border-white/10 shadow-lg";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${visible ? "translate-y-0" : "-translate-y-full"
          } ${headerBgClass}`}
      >
        <Container
          size="default"
          className="flex items-center justify-between gap-6"
        >
          {/* Brand Logo */}
          <div className="flex items-center shrink-0">
            <Link
              href="/"
              className="group flex flex-col items-start focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B9A078]"
              aria-label="HAVEN 550 Home"
            >
              <span className="font-serif text-2xl tracking-[0.22em] text-white group-hover:text-[#B9A078] transition-colors leading-none font-normal">
                {site.brand}
              </span>
              <span className="text-[10px] tracking-[0.28em] uppercase text-white/60 font-light mt-1">
                FORT LAUDERDALE
              </span>
            </Link>
          </div>

          {/* Right: Navigation Links & CTA Button Grouped Together */}
          <div className="flex items-center gap-6 xl:gap-8">
            {/* Desktop Navigation Links with Gold Underline Growing from Left on Hover */}
            <nav
              className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8"
              aria-label="Primary Navigation"
            >
              {navigation.primary.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(`${link.href}/`);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group relative text-[11px] xl:text-[13px] tracking-[0.14em] uppercase py-1.5 font-light whitespace-nowrap text-white/85 hover:text-white transition-colors"
                  >
                    <span className={isActive ? "text-[#B9A078] font-normal" : ""}>
                      {link.label}
                    </span>
                    {/* Gold underline growing from left on hover */}
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-[#B9A078] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right: Primary CTA Button & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href={navigation.ctaButton?.href || "/contact"}
                className="inline-flex items-center justify-center h-[42px] sm:h-[48px] px-4 sm:px-7 py-2.5 sm:py-3 bg-[#B9A078] hover:bg-[#A88D60] text-[#0C141D] text-[11px] sm:text-xs tracking-[0.14em] uppercase font-medium transition-all duration-300 rounded-[2px] shrink-0 whitespace-nowrap shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#B9A078]"
              >
                {navigation.ctaButton?.label || "REQUEST A CHARTER"}
              </Link>

              {/* Mobile / Tablet Hamburger Toggle — 48x48px WCAG Touch Target */}
              <button
                id="mobile-nav-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex items-center justify-center w-12 h-12 text-white hover:text-[#B9A078] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-[2px]"
                aria-label="Toggle navigation"
                aria-expanded={mobileOpen}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  {mobileOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </Container>
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
