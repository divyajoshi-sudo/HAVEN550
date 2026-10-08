import React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasError, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          "w-full bg-haven-deep/80 border rounded-none px-4 py-3 text-sm text-haven-cream placeholder:text-haven-slate/50 font-light transition-all duration-300 focus:outline-none resize-y",
          hasError
            ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500"
            : "border-white/15 focus:border-haven-gold focus:ring-1 focus:ring-haven-gold/50",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
