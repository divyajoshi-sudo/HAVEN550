"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);

  // Exact mouse coords
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing outer ring
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsEnabled(false);
      return;
    }

    // Check stored cursor preference
    const storedCursorPref = localStorage.getItem("haven-cursor-disabled");
    if (storedCursorPref === "true") {
      setIsEnabled(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute("data-cursor") || "");
        setIsHovered(true);
      } else {
        const interactive = target.closest("a, button, input, select, textarea, [role='button']");
        setCursorText("");
        setIsHovered(Boolean(interactive));
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleCursorToggle = (e: CustomEvent) => {
      setIsEnabled(!e.detail?.cursorDisabled);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("haven-cursor-toggle", handleCursorToggle as EventListener);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("haven-cursor-toggle", handleCursorToggle as EventListener);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isEnabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center transition-colors duration-200"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: cursorText ? 72 : isHovered ? 48 : 28,
          height: cursorText ? 72 : isHovered ? 48 : 28,
          backgroundColor: cursorText
            ? "rgba(11, 20, 29, 0.85)"
            : isHovered
            ? "rgba(185, 160, 120, 0.12)"
            : "rgba(185, 160, 120, 0.04)",
          borderColor: cursorText
            ? "rgba(185, 160, 120, 0.8)"
            : isHovered
            ? "rgba(185, 160, 120, 0.6)"
            : "rgba(185, 160, 120, 0.35)",
          borderWidth: 1,
          backdropFilter: cursorText ? "blur(6px)" : "blur(0px)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="text-[9px] uppercase tracking-[0.2em] font-sans font-medium text-[#B9A078] text-center px-1"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#B9A078]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible && !cursorText ? 1 : 0,
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
