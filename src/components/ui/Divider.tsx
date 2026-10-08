import React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "short" | "wide" | "full";
  centered?: boolean;
}

export function Divider({
  variant = "short",
  centered = false,
  className,
  ...props
}: DividerProps) {
  const variantStyles = {
    short: "w-16 h-[1px] bg-gradient-to-r from-transparent via-haven-gold to-transparent",
    wide: "w-32 h-[1px] bg-gradient-to-r from-transparent via-haven-gold to-transparent",
    full: "w-full h-[1px] bg-white/10",
  };

  return (
    <div
      className={cn(
        variantStyles[variant],
        centered && "mx-auto",
        "my-6",
        className
      )}
      role="separator"
      {...props}
    />
  );
}
