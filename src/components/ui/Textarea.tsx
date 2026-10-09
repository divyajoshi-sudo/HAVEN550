import React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasError, rows = 5, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        style={{ colorScheme: "dark" }}
        className={cn(
          "w-full bg-[#0C1622]/70 hover:bg-[#101D2D]/90 focus:bg-[#0A131E] border rounded-[2px] px-4 py-3.5 text-sm sm:text-base text-white placeholder:text-white/30 font-light transition-all duration-300 focus:outline-none resize-y min-h-[130px]",
          hasError
            ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            : "border-white/15 hover:border-white/30 focus:border-[#B9A078] focus:ring-1 focus:ring-[#B9A078]/40 focus:shadow-[0_0_15px_rgba(185,160,120,0.12)]",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
