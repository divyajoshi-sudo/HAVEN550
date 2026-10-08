import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full bg-haven-deep/80 border rounded-none px-4 py-3 text-sm text-haven-cream placeholder:text-haven-slate/50 font-light transition-all duration-300 focus:outline-none",
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

Input.displayName = "Input";
