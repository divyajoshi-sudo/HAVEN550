import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "bordered" | "gold";
  hoverable?: boolean;
}

export function Card({
  variant = "default",
  hoverable = false,
  className,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    default: "bg-[#101C29]/70 border border-white/10",
    elevated: "bg-[#0B141D]/90 border border-white/10",
    bordered: "bg-transparent border border-white/10",
    gold: "bg-[#0B141D] border border-[#B9A078]/50",
  };

  return (
    <div
      className={cn(
        "relative rounded-[2px] overflow-hidden transition-all duration-300",
        variantStyles[variant],
        hoverable && "hover:border-[#B9A078]/40 hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
