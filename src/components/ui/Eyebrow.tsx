import React from "react";
import { cn } from "@/lib/utils";

export interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  withLines?: boolean;
}

export function Eyebrow({
  withLines = false,
  className,
  children,
  ...props
}: EyebrowProps) {
  if (withLines) {
    return (
      <div className="inline-flex items-center gap-3">
        <span className="w-6 sm:w-8 h-[1px] bg-haven-gold/60" />
        <p
          className={cn(
            "text-[0.68rem] sm:text-xs tracking-[0.35em] uppercase text-haven-gold font-light",
            className
          )}
          {...props}
        >
          {children}
        </p>
        <span className="w-6 sm:w-8 h-[1px] bg-haven-gold/60" />
      </div>
    );
  }

  return (
    <p
      className={cn(
        "text-[0.68rem] sm:text-xs tracking-[0.35em] uppercase text-haven-gold font-light",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
