import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg" | "none";
  background?: "navy" | "navyLight" | "deep" | "transparent" | "ivory" | "softWhite";
  border?: "top" | "bottom" | "both" | "none";
  fullHeight?: boolean;
}

export function Section({
  spacing = "lg",
  background = "navy",
  border = "none",
  fullHeight = true,
  className,
  children,
  ...props
}: SectionProps) {
  const spacingStyles = {
    none: "py-0",
    sm: "py-12 md:py-16",
    md: "py-16 md:py-20",
    lg: "py-16 md:py-24 lg:py-28",
  };

  const backgroundStyles = {
    navy: "bg-haven-navy text-haven-cream",
    navyLight: "bg-haven-navy-light/40 text-haven-cream",
    deep: "bg-haven-deep text-haven-cream",
    transparent: "bg-transparent text-haven-cream",
    ivory: "bg-[#F5F3EE] text-[#1C252B]",
    softWhite: "bg-[#FAF9F6] text-[#1C252B]",
  };

  const borderStyles = {
    none: "",
    top: "border-t border-white/5",
    bottom: "border-b border-white/5",
    both: "border-y border-white/5",
  };

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden flex flex-col items-center justify-center",
        fullHeight && "min-h-screen",
        spacingStyles[spacing],
        backgroundStyles[background],
        borderStyles[border],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
