import React from "react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean;
  variant?: "dark" | "light";
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, hasError, variant = "light", children, ...props }, ref) => {
    return (
      <div className="relative group">
        <select
          ref={ref}
          style={{ colorScheme: variant === "light" ? "light" : "dark" }}
          className={cn(
            "w-full rounded-xl px-4 py-3.5 pr-11 text-base font-light transition-all duration-300 focus:outline-none appearance-none cursor-pointer bg-white text-[#08182B] border border-[#DDD6CC] focus:border-[#00204E] focus:ring-2 focus:ring-[#00204E]/15 shadow-sm [&>option]:bg-white [&>option]:text-[#08182B] [&>option]:py-2",
            hasError && "border-red-500 focus:border-red-500 focus:ring-red-200",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <div
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 transition-transform duration-200 group-hover:translate-y-0.5",
            variant === "light" ? "text-[#8C8479]" : "text-[#B9A078]"
          )}
        >
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
