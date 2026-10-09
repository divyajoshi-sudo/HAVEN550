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
  const textStyles = "text-[11px] sm:text-[12px] tracking-[0.16em] uppercase text-[#B9A078] font-medium";

  if (withLines) {
    return (
      <div className="inline-flex items-center gap-3">
        <span className="w-5 sm:w-8 h-[1px] bg-[#B9A078]/60" />
        <p className={cn(textStyles, className)} {...props}>
          {children}
        </p>
        <span className="w-5 sm:w-8 h-[1px] bg-[#B9A078]/60" />
      </div>
    );
  }

  return (
    <p className={cn(textStyles, className)} {...props}>
      {children}
    </p>
  );
}
