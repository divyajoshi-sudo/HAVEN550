import React from "react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, hasError, children, ...props }, ref) => {
    return (
      <div className="relative group">
        <select
          ref={ref}
          style={{ colorScheme: "dark" }}
          className={cn(
            "w-full bg-[#0C1622]/70 hover:bg-[#101D2D]/90 focus:bg-[#0A131E] border rounded-[2px] px-4 py-3.5 pr-11 text-sm sm:text-base text-white font-light transition-all duration-300 focus:outline-none appearance-none cursor-pointer [&>option]:bg-[#0B141D] [&>option]:text-white [&>option]:py-2",
            hasError
              ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500"
              : "border-white/15 hover:border-white/30 focus:border-[#B9A078] focus:ring-1 focus:ring-[#B9A078]/40 focus:shadow-[0_0_15px_rgba(185,160,120,0.12)]",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-[#B9A078] transition-transform duration-200 group-hover:translate-y-0.5">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.75"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";
