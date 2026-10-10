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

  const bgHexColors: Record<string, string> = {
    navy: "#101C29",
    navyLight: "#182A3E",
    deep: "#101C29",
    transparent: "transparent",
    ivory: "#F7F5F0",
    softWhite: "#F8F8F6",
  };

  const backgroundStyles = {
    navy: "bg-[#101C29] text-[#F8F8F6]",
    navyLight: "bg-[#182A3E] text-[#F8F8F6]",
    deep: "#101C29 text-[#F8F8F6]",
    transparent: "bg-transparent text-inherit",
    ivory: "bg-[#F7F5F0] text-[#101C29]",
    softWhite: "bg-[#F8F8F6] text-[#101C29]",
  };

  const borderStyles = {
    none: "",
    top: "border-t border-[#EAE6DF]",
    bottom: "border-b border-[#EAE6DF]",
    both: "border-y border-[#EAE6DF]",
  };

  return (
    <section
      style={{
        backgroundColor: bgHexColors[background] || (isLight ? "#F7F5F0" : "#101C29"),
        color: isLight ? "#101C29" : "#F8F8F6",
        ...props.style,
      }}
      className={cn(
        "relative w-full overflow-hidden flex flex-col justify-center",
        fullHeight ? "min-h-screen lg:h-screen flex flex-col justify-center" : "",
        fullHeight && spacing !== "none" ? "py-10 md:py-14 lg:py-8" : spacingStyles[spacing],
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
