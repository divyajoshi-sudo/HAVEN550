import React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
  variant?: "dark" | "light";
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasError, variant = "light", rows = 5, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        style={{ colorScheme: variant === "light" ? "light" : "dark" }}
        className={cn(
          "w-full rounded-xl px-4 py-3.5 text-base font-light transition-all duration-300 focus:outline-none resize-y min-h-[120px] bg-white text-[#08182B] placeholder:text-[#9CA3AF] border border-[#DDD6CC] focus:border-[#00204E] focus:ring-2 focus:ring-[#00204E]/15 shadow-sm",
          hasError && "border-red-500 focus:border-red-500 focus:ring-red-200",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
