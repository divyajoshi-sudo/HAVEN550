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
    default: "bg-white border border-[#EAE6DF] text-[#08182B]",
    elevated: "bg-white border border-[#EAE6DF] text-[#08182B] shadow-md",
    bordered: "bg-white border border-[#EAE6DF] text-[#08182B]",
    gold: "bg-white border border-[#B9A078]/50 text-[#08182B]",
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
