import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold" | "ghost";
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
      "inline-flex items-center justify-center font-medium tracking-[0.22em] uppercase transition-all duration-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-haven-gold";

    const variantStyles = {
      primary:
        "bg-haven-gold text-haven-navy hover:bg-haven-gold-light shadow-lg shadow-haven-gold/10",
      secondary:
        "bg-haven-navy-light text-haven-cream border border-white/10 hover:border-haven-gold/40 hover:text-haven-gold",
      outline:
        "border border-haven-gold text-haven-gold hover:bg-haven-gold hover:text-haven-navy",
      gold: "bg-haven-gold/15 backdrop-blur-sm border border-haven-cream/30 text-haven-cream hover:bg-haven-cream hover:text-haven-navy",
      ghost: "text-haven-cream/80 hover:text-haven-gold hover:bg-white/5",
    };

    const sizeStyles = {
      sm: "text-[0.65rem] px-5 py-2.5",
      md: "text-[0.72rem] px-8 py-3.5",
      lg: "text-[0.78rem] px-10 py-4",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
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
