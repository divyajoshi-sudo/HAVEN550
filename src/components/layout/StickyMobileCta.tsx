"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export interface StickyMobileCtaProps {
  phone?: string;
}

export function StickyMobileCta({ phone = "+1 (516) 375-1093" }: StickyMobileCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal sticky bar after scrolling 350px past the hero
      setIsVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cleanPhone = phone.replace(/[^0-9+]/g, "");
  const whatsappUrl = `https://wa.me/15163751093?text=${encodeURIComponent(
    "Hello HAVEN 550 Concierge, I would like to inquire about chartering the yacht."
  )}`;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-[#EAE6DF] px-4 py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between gap-2.5 max-w-md mx-auto">
          {/* Direct Call Button — 48x48px WCAG Touch Target */}
          <a
            href={`tel:${cleanPhone}`}
            aria-label="Call Haven 550 Concierge"
            className="w-12 h-12 shrink-0 rounded-[2px] bg-white hover:bg-neutral-50 border border-[#EAE6DF] text-[#08182B] flex items-center justify-center transition-colors active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00204E]"
          >
            <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </a>

          {/* Primary Request a Charter Button — 48px Height */}
          <Link
            href="/contact"
            className="flex-1 h-12 px-4 bg-[#00204E] hover:bg-[#002D6E] active:bg-[#001738] text-white text-[11px] sm:text-xs tracking-[0.16em] uppercase font-semibold rounded-[1px] inline-flex items-center justify-center gap-2 shadow-md transition-all whitespace-nowrap active:scale-98 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00204E]"
          >
            <span>REQUEST A CHARTER</span>
            <span>›</span>
          </Link>

          {/* WhatsApp Direct Chat — 48x48px WCAG Touch Target */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-12 h-12 shrink-0 rounded-[2px] bg-white hover:bg-neutral-50 border border-[#EAE6DF] text-[#25D366] flex items-center justify-center transition-colors active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00204E]"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.78 14.07c-.24.68-1.4 1.25-1.92 1.33-.5.08-1.13.11-3.64-.93-3.21-1.33-5.26-4.57-5.42-4.78-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.11-2.66.29-.32.63-.4.85-.4.21 0 .43.01.62.02.2.01.47-.08.74.56.27.65.92 2.25 1 2.42.08.16.14.36.03.57-.11.22-.16.35-.32.55-.16.19-.34.43-.49.58-.16.16-.33.34-.14.67.19.32.84 1.39 1.81 2.25 1.24 1.11 2.29 1.45 2.62 1.62.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.32.43-.27.73-.16.29.11 1.87.88 2.19 1.04.32.16.54.24.62.38.08.13.08.79-.16 1.47z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
