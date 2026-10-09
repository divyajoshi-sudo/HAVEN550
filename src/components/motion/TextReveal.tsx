"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
}

export function TextReveal({
  children,
  as: Component = "h2",
  className = "",
  delay = 0.1,
  duration = 0.85,
  stagger = 0.035,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const isReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      localStorage.getItem("haven-reduced-motion") === "true";
    setPrefersReducedMotion(isReduced);
  }, []);

  const words = children.split(" ");

  // If reduced motion is requested, render without animation
  if (prefersReducedMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component className={className} aria-label={children}>
      <span ref={ref} className="inline-block" aria-hidden="true">
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block overflow-hidden align-top mr-[0.25em] last:mr-0"
          >
            <motion.span
              className="inline-block"
              initial={{ y: "115%", opacity: 0, filter: "blur(4px)" }}
              animate={
                isInView
                  ? { y: "0%", opacity: 1, filter: "blur(0px)" }
                  : { y: "115%", opacity: 0, filter: "blur(4px)" }
              }
              transition={{
                duration,
                delay: delay + index * stagger,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Component>
  );
}
