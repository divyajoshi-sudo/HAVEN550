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
      "bg-emerald-50 border-emerald-300 text-emerald-900 shadow-sm",
    error:
      "bg-red-50 border-red-300 text-red-900 shadow-sm",
    info: "bg-white border-[#EAE6DF] text-[#08182B] shadow-sm",
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
