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

  const levelStyles = {
    1: "text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-light tracking-[-0.01em] leading-[1.02] text-white",
    2: "text-3xl sm:text-4xl md:text-5xl font-light tracking-[-0.01em] leading-[1.12] text-white",
    3: "text-2xl sm:text-[32px] font-light leading-[1.22] text-white",
    4: "text-xl sm:text-2xl font-light leading-[1.25] text-white",
  };

  return (
    <Component
      className={cn(
        "font-[family-name:var(--font-cormorant)] font-serif",
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
