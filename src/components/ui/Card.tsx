import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "bordered" | "gold";
  hoverable?: boolean;
}

export function Card({
  variant = "default",
  hoverable = true,
  className,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    default: "bg-haven-navy-light/60 border border-white/5",
    elevated: "bg-haven-deep/90 border border-white/10 shadow-xl shadow-black/40",
    bordered: "bg-transparent border border-white/10",
    gold: "bg-haven-deep/90 border-2 border-haven-gold shadow-2xl shadow-haven-gold/10",
  };

  return (
    <div
      className={cn(
        "relative rounded-sm overflow-hidden transition-all duration-500",
        variantStyles[variant],
        hoverable && "hover:border-haven-gold/40 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
