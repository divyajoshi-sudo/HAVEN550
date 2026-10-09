"use client";

import React, { useState, useEffect } from "react";

export function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [cursorDisabled, setCursorDisabled] = useState(false);
  const [largerText, setLargerText] = useState(false);

  useEffect(() => {
    // Read stored preferences
    const storedMotion = localStorage.getItem("haven-reduced-motion") === "true";
    const storedContrast = localStorage.getItem("haven-high-contrast") === "true";
    const storedCursor = localStorage.getItem("haven-cursor-disabled") === "true";
    const storedText = localStorage.getItem("haven-larger-text") === "true";

    const osReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setReducedMotion(storedMotion || osReducedMotion);
    setHighContrast(storedContrast);
    setCursorDisabled(storedCursor);
    setLargerText(storedText);

    if (storedContrast) {
      document.documentElement.classList.add("high-contrast-mode");
    }
    if (storedText) {
      document.documentElement.classList.add("larger-text-mode");
    }
  }, []);

  const toggleReducedMotion = () => {
    const next = !reducedMotion;
    setReducedMotion(next);
    localStorage.setItem("haven-reduced-motion", String(next));
    window.dispatchEvent(
      new CustomEvent("haven-motion-toggle", { detail: { reducedMotion: next } })
    );
  };

  const toggleHighContrast = () => {
    const next = !highContrast;
    setHighContrast(next);
    localStorage.setItem("haven-high-contrast", String(next));
    if (next) {
      document.documentElement.classList.add("high-contrast-mode");
    } else {
      document.documentElement.classList.remove("high-contrast-mode");
    }
  };

  const toggleCursor = () => {
    const next = !cursorDisabled;
    setCursorDisabled(next);
    localStorage.setItem("haven-cursor-disabled", String(next));
    window.dispatchEvent(
      new CustomEvent("haven-cursor-toggle", { detail: { cursorDisabled: next } })
    );
  };

  const toggleLargerText = () => {
    const next = !largerText;
    setLargerText(next);
    localStorage.setItem("haven-larger-text", String(next));
    if (next) {
      document.documentElement.classList.add("larger-text-mode");
    } else {
      document.documentElement.classList.remove("larger-text-mode");
    }
  };

  return (
    <>
      {/* Keyboard Skip to Content Anchor */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:px-5 focus:py-3 focus:bg-[#B9A078] focus:text-[#0B141D] focus:font-medium focus:text-xs focus:tracking-widest focus:uppercase focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white transition-all"
      >
        Skip to main content
      </a>

      {/* Floating Accessibility Trigger */}
      <div className="fixed bottom-6 left-6 z-[9000] hidden sm:block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Open Accessibility & Experience Preferences"
          className="w-10 h-10 rounded-full bg-[#0B141D]/90 backdrop-blur-md border border-[#B9A078]/40 hover:border-[#B9A078] text-[#B9A078] flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B9A078]"
          title="Accessibility & Experience Settings"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
            />
          </svg>
        </button>

        {/* Accessibility Flyout Panel */}
        {isOpen && (
          <div
            className="absolute bottom-12 left-0 w-72 bg-[#09121B]/95 backdrop-blur-xl border border-white/10 rounded-sm p-5 shadow-2xl space-y-4 animate-fade-in"
            role="dialog"
            aria-label="Accessibility & Experience Settings"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-[11px] tracking-[0.2em] uppercase font-sans font-medium text-white/90">
                Experience &amp; Access
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white text-xs p-1"
                aria-label="Close settings"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              {/* Reduced Motion Toggle */}
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-white font-light">Reduce Motion</p>
                  <p className="text-[10px] text-white/40">Disable smooth scroll &amp; animations</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={reducedMotion}
                  onClick={toggleReducedMotion}
                  className={`w-9 h-5 rounded-full transition-colors duration-200 relative p-0.5 ${
                    reducedMotion ? "bg-[#B9A078]" : "bg-white/20"
                  }`}
                >
                  <span
                    className={`block w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                      reducedMotion ? "translate-x-4 bg-[#070D14]" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Enhanced Contrast Toggle */}
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-white font-light">High Contrast</p>
                  <p className="text-[10px] text-white/40">Boost text contrast &amp; borders</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={highContrast}
                  onClick={toggleHighContrast}
                  className={`w-9 h-5 rounded-full transition-colors duration-200 relative p-0.5 ${
                    highContrast ? "bg-[#B9A078]" : "bg-white/20"
                  }`}
                >
                  <span
                    className={`block w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                      highContrast ? "translate-x-4 bg-[#070D14]" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Larger Text / Reading Mode */}
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-white font-light">Reading Mode</p>
                  <p className="text-[10px] text-white/40">Enhanced font size &amp; line height</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={largerText}
                  onClick={toggleLargerText}
                  className={`w-9 h-5 rounded-full transition-colors duration-200 relative p-0.5 ${
                    largerText ? "bg-[#B9A078]" : "bg-white/20"
                  }`}
                >
                  <span
                    className={`block w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                      largerText ? "translate-x-4 bg-[#070D14]" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Custom Cursor Follower */}
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-white font-light">Luxury Cursor</p>
                  <p className="text-[10px] text-white/40">Gold magnetic cursor follower</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={!cursorDisabled}
                  onClick={toggleCursor}
                  className={`w-9 h-5 rounded-full transition-colors duration-200 relative p-0.5 ${
                    !cursorDisabled ? "bg-[#B9A078]" : "bg-white/20"
                  }`}
                >
                  <span
                    className={`block w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                      !cursorDisabled ? "translate-x-4 bg-[#070D14]" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[10px] text-white/30 font-light">
              <span>HAVEN 550 Concierge</span>
              <span>WCAG 2.1 AA Compliant</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
