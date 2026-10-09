"use client";

import Link from "next/link";
import { useEffect } from "react";
import type { NavLink } from "@/types/content";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  location: string;
}

export function MobileMenu({ isOpen, onClose, links, location }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#071B2A]/98 backdrop-blur-2xl flex flex-col items-center justify-center px-6 transition-all duration-300 lg:hidden ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-white/80 hover:text-white focus:outline-none"
        aria-label="Close menu"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Brand in drawer */}
      <div className="mb-8 text-center">
        <span className="font-serif text-2xl tracking-[0.25em] text-white block">
          HAVEN 550
        </span>
        <span className="text-[0.55rem] tracking-[0.35em] uppercase text-[#B79B6A] font-light">
          FORT LAUDERDALE
        </span>
      </div>

      <nav className="flex flex-col items-center gap-5 my-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="font-[family-name:var(--font-cormorant)] text-2xl tracking-[0.16em] uppercase text-white hover:text-haven-gold transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Primary CTA Button */}
      <div className="mt-8 w-full max-w-xs">
        <Link
          href="/contact"
          onClick={onClose}
          className="w-full h-[50px] inline-flex items-center justify-center bg-haven-gold hover:bg-[#A88D60] text-[#0C141D] text-[13px] tracking-[0.14em] uppercase font-medium rounded-[2px] transition-colors duration-300"
        >
          REQUEST A CHARTER
        </Link>
      </div>

      <div className="w-16 h-[1px] bg-white/10 mt-8 mb-4" />
      <p className="text-white/50 text-[0.65rem] tracking-[0.2em] uppercase text-center">
        {location}
      </p>
    </div>
  );
}
