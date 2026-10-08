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
    <div className={cn("space-y-1.5", className)}>
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="block text-[0.7rem] tracking-[0.2em] uppercase font-light text-haven-slate"
        >
          {label} {required && <span className="text-haven-gold">*</span>}
        </label>
        {hint && (
          <span className="text-[0.65rem] text-haven-slate/60 font-light">
            {hint}
          </span>
        )}
      </div>

      {children}

      {error && (
        <p className="text-xs text-red-400 font-light mt-1 animate-fade-in" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
