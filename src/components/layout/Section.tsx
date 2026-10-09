import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg" | "xl" | "none";
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
    md: "py-16 md:py-24",
    lg: "py-20 md:py-28 lg:py-32",
    xl: "py-24 md:py-36",
  };

  const isLight = background === "ivory" || background === "softWhite";

  const backgroundStyles = {
    navy: "bg-[#101C29] text-[#F7F5F0]",
    navyLight: "bg-[#162738]/50 text-[#F7F5F0]",
    deep: "bg-[#0B141D] text-[#F7F5F0]",
    transparent: "bg-transparent text-[#F7F5F0]",
    ivory: "bg-[#EFECE5] text-[#08182B]",
    softWhite: "bg-[#FAF8F5] text-[#08182B]",
  };

  const borderStyles = {
    none: "",
    top: isLight ? "border-t border-[#D8D2C6]" : "border-t border-white/10",
    bottom: isLight ? "border-b border-[#D8D2C6]" : "border-b border-white/10",
    both: isLight ? "border-y border-[#D8D2C6]" : "border-y border-white/10",
  };

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden flex flex-col justify-center",
        fullHeight ? "min-h-screen" : "",
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
