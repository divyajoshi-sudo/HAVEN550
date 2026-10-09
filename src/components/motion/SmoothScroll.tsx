"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

export interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Check if user disabled smooth scrolling in localStorage
    const storedPreference = localStorage.getItem("haven-reduced-motion");
    const isMotionDisabled =
      prefersReducedMotion || storedPreference === "true";

    if (isMotionDisabled) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animId = requestAnimationFrame(raf);

    // Listen to custom toggle events from accessibility panel
    const handleMotionChange = (e: CustomEvent) => {
      if (e.detail?.reducedMotion) {
        lenis.destroy();
        lenisRef.current = null;
      } else if (!lenisRef.current) {
        window.location.reload();
      }
    };

    window.addEventListener(
      "haven-motion-toggle",
      handleMotionChange as EventListener
    );

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
      lenisRef.current = null;
      window.removeEventListener(
        "haven-motion-toggle",
        handleMotionChange as EventListener
      );
    };
  }, []);

  return <>{children}</>;
}
