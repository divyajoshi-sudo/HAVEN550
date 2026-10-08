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
      className={`fixed inset-0 z-40 bg-haven-navy/98 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <nav className="flex flex-col items-center gap-6">
        {links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="font-[family-name:var(--font-playfair)] font-serif text-2xl tracking-[0.15em] text-haven-cream/90 hover:text-haven-gold transition-all duration-300"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-haven-gold to-transparent mt-10 mb-6" />
      <p className="text-haven-slate text-xs tracking-[0.2em] uppercase">
        {location}
      </p>
    </div>
  );
}
