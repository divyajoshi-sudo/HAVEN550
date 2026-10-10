import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  variant?: "dark" | "light";
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, variant = "light", ...props }, ref) => {
    return (
      <input
        ref={ref}
        style={{ colorScheme: variant === "light" ? "light" : "dark" }}
        className={cn(
          "w-full rounded-xl px-4 py-3.5 text-base font-light transition-all duration-300 focus:outline-none bg-white text-[#08182B] placeholder:text-[#9CA3AF] border border-[#DDD6CC] focus:border-[#00204E] focus:ring-2 focus:ring-[#00204E]/15 shadow-sm",
          hasError && "border-red-500 focus:border-red-500 focus:ring-red-200",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
