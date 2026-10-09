import React from "react";
import { cn } from "@/lib/utils";

export interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}

export function FormField({
  id,
  label,
  required,
  error,
  hint,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2 group", className)}>
      <div className="flex items-baseline justify-between gap-3 mb-1">
        <label
          htmlFor={id}
          className="block text-[11px] tracking-[0.2em] uppercase font-sans font-medium text-white/85 group-focus-within:text-[#B9A078] transition-colors duration-200"
        >
          {label} {required && <span className="text-[#B9A078] ml-0.5 font-bold">*</span>}
        </label>
        {hint && (
          <span className="text-[10px] text-white/45 font-light tracking-wide shrink-0">
            {hint}
          </span>
        )}
      </div>

      {children}

      {error && (
        <p className="text-xs text-red-400 font-light mt-1.5 flex items-center gap-1.5 animate-fade-in" role="alert">
          <svg className="w-3.5 h-3.5 shrink-0 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
