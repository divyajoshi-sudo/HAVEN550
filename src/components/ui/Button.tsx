import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium tracking-[0.12em] uppercase transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-[2px] select-none group";

    const variantStyles = {
      primary:
        "bg-[#B9A078] text-[#0C141D] hover:bg-[#A88D60] active:bg-[#967C52]",
      secondary:
        "bg-transparent text-white border border-white/40 hover:bg-white hover:text-[#0C141D] hover:border-white",
      outline:
        "bg-transparent text-[#B9A078] border border-[#B9A078]/60 hover:bg-[#B9A078] hover:text-[#0C141D]",
      text:
        "bg-transparent text-[#B9A078] hover:text-white p-0 h-auto tracking-[0.16em]",
    };

    const sizeStyles = {
      sm: "h-[42px] px-5 text-[12px]",
      md: "h-[48px] sm:h-[50px] px-6 sm:px-8 text-[13px]",
      lg: "h-[52px] sm:h-[54px] px-8 sm:px-10 text-[14px]",
    };

    const appliedSizeStyle = variant === "text" ? "" : sizeStyles[size];

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      appliedSizeStyle,
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
