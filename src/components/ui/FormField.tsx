import React from "react";
import { cn } from "@/lib/utils";

export interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  variant?: "dark" | "light";
  children: React.ReactNode;
}

export function FormField({
  id,
  label,
  required,
  error,
  hint,
  className,
  variant = "light",
  children,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-1.5 group", className)}>
      <div className="flex items-baseline justify-between gap-3 mb-1">
        <label
          htmlFor={id}
          className={cn(
            "block text-[13px] font-sans font-medium tracking-[0.08em] leading-[1.4] transition-colors duration-200",
            variant === "light"
              ? "text-[#292524] group-focus-within:text-[#8C7A5E]"
              : "text-white/85 group-focus-within:text-[#B9A078]"
          )}
        >
          {label}{" "}
          {required && (
            <span
              className={
                variant === "light"
                  ? "text-[#DC2626] ml-0.5 font-bold"
                  : "text-[#B9A078] ml-0.5 font-bold"
              }
            >
              *
            </span>
          )}
        </label>
        {hint && (
          <span
            className={cn(
              "text-[11px] font-light tracking-wide shrink-0",
              variant === "light" ? "text-[#78716C]" : "text-white/45"
            )}
          >
            {hint}
          </span>
        )}
      </div>

      {children}

      {error && (
        <p
          className="text-xs text-red-600 font-light mt-1.5 flex items-center gap-1.5 animate-fade-in"
          role="alert"
        >
          <svg
            className="w-3.5 h-3.5 shrink-0 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
