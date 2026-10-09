import React from "react";
import { cn } from "@/lib/utils";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "error" | "info";
  title?: string;
}

export function Alert({
  variant = "info",
  title,
  className,
  children,
  ...props
}: AlertProps) {
  const variantStyles = {
    success:
      "bg-emerald-950/40 border-emerald-500/40 text-emerald-200 shadow-lg shadow-emerald-950/20",
    error:
      "bg-red-950/40 border-red-500/40 text-red-200 shadow-lg shadow-red-950/20",
    info: "bg-haven-deep/90 border-haven-gold/30 text-haven-cream shadow-lg",
  };

  return (
    <div
      role="alert"
      className={cn(
        "p-5 rounded-none border text-sm leading-relaxed",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {title && (
        <h4 className="font-[family-name:var(--font-cormorant)] font-serif text-xl font-medium mb-1 tracking-wide">
          {title}
        </h4>
      )}
      <div className="font-light opacity-90">{children}</div>
    </div>
  );
}
