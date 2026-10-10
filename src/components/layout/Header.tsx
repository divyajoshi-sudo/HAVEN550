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

  const headerBgClass =
    "bg-[#081018]/95 backdrop-blur-md border-b border-white/10 shadow-lg";

  return (
    <>
      <header
        style={{ height: "76px" }}
        className={`sticky top-0 left-0 right-0 z-50 h-[76px] w-full flex items-center transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${headerBgClass}`}
      >
        <div
          id="nav-header-container"
          className="nav-header-container w-full h-full max-w-[1600px] mx-auto flex items-center justify-between"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 40px",
          }}
        >
          {/* 1. Brand Logo Block with flex-shrink: 0 and 60px Right Separation */}
          <div
            id="haven-logo"
            className="logo"
            style={{
              marginRight: "60px",
              flexShrink: 0,
            }}
          >
            <Link
              href="/"
              className="group flex flex-col items-start focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B9A078]"
              aria-label="HAVEN 550 Home"
            >
              <span
                style={{
                  fontWeight: 500,
                  WebkitTextStroke: "0.25px currentColor",
                }}
                className="font-serif text-2xl lg:text-[26px] tracking-[0.24em] text-[#F8F8F6] group-hover:text-[#B9A078] transition-colors leading-none font-medium"
              >
                {site.brand || "HAVEN 550"}
              </span>
              <span className="text-[9.5px] sm:text-[10px] tracking-[0.32em] uppercase text-[#A0ACB9] group-hover:text-[#B9A078] transition-colors font-sans font-light mt-1.5">
                FORT LAUDERDALE
              </span>
            </Link>
          </div>

          {/* 2. Desktop Navigation Links Container (gap: 32px, align-items: center) */}
          <nav
            id="nav-links"
            className="primary-nav hidden lg:flex"
            style={{
              gap: "32px",
              alignItems: "center",
            }}
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
                  className="group relative text-[11.5px] xl:text-[12.5px] tracking-[0.16em] uppercase py-2 font-sans font-normal whitespace-nowrap text-[#D6D2CA] hover:text-[#B9A078] transition-colors"
                >
                  <span className={isActive ? "text-[#B9A078] font-medium" : ""}>
                    {link.label}
                  </span>
                  {/* Gold underline growing on hover or active */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#B9A078] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* 3. Action / CTA Button & Mobile Toggle */}
          <div
            className="header-actions flex items-center shrink-0 gap-3"
            style={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              gap: "12px",
            }}
          >
            <Link
              href={navigation.ctaButton?.href || "/contact"}
              className="hidden sm:inline-flex items-center justify-center px-7 h-[42px] bg-[#CBB188] hover:bg-[#D8C29D] text-[#101C29] text-[11px] xl:text-[12px] tracking-[0.16em] uppercase font-sans font-semibold transition-all duration-300 rounded-[2px] shrink-0 whitespace-nowrap shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9A078]"
            >
              <span>{navigation.ctaButton?.label || "REQUEST A CHARTER"}</span>
            </Link>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 text-[#F8F8F6] hover:text-[#B9A078] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9A078] rounded-[2px]"
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
