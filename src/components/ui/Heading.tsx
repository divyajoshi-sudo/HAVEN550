import React from "react";
import { cn } from "@/lib/utils";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  italic?: boolean;
}

export function Heading({
  level = 2,
  as,
  italic = false,
  className,
  children,
  ...props
}: HeadingProps) {
  const Component = as || (`h${level}` as const);

  const isSubheading = level >= 3;

  const levelStyles = {
    1: "text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.03em] leading-[1.05] text-haven-cream",
    2: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.02em] leading-[1.15] text-haven-cream",
    3: "text-[28px] font-normal tracking-[0.01em] leading-snug text-haven-cream",
    4: "text-[28px] font-normal leading-snug text-haven-cream",
  };

  return (
    <Component
      className={cn(
        isSubheading
          ? "font-sans font-normal"
          : "font-[family-name:var(--font-playfair)] font-serif",
        levelStyles[level],
        italic && "italic",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
