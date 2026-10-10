import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  withChevron?: boolean;
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
      withChevron = true,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium tracking-[0.16em] uppercase transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-[1px] select-none group whitespace-nowrap gap-2";

    const variantStyles = {
      primary:
        "bg-[#101C29] text-[#F8F8F6] hover:bg-[#182A3E] active:bg-[#0B131C] shadow-md hover:shadow-lg",
      secondary:
        "bg-[#B9A078] text-[#101C29] hover:bg-[#C8B08A] active:bg-[#A88F66] shadow-md hover:shadow-lg",
      outline:
        "bg-transparent text-[#101C29] border border-[#101C29] hover:bg-[#101C29] hover:text-[#F8F8F6]",
      text:
        "bg-transparent text-[#101C29] hover:text-[#B9A078] p-0 h-auto tracking-[0.16em] gap-1",
    };

    const sizeStyles = {
      sm: "w-full sm:w-[180px] min-h-[48px] h-[50px] px-4 text-[12px]",
      md: "w-full sm:w-[180px] min-h-[48px] h-[50px] px-4 text-[12px] sm:text-[12.5px]",
      lg: "w-full sm:w-[180px] min-h-[48px] h-[52px] px-5 text-[13px]",
    };

    const appliedSizeStyle = variant === "text" ? "" : sizeStyles[size];

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      appliedSizeStyle,
      className
    );

    const innerContent = (
      <>
        <span>{children}</span>
        {withChevron && variant !== "text" && (
          <span className="text-[13px] font-light leading-none group-hover:translate-x-0.5 transition-transform">
            ›
          </span>
        )}
      </>
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
            {innerContent}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName}>
          {innerContent}
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
        {innerContent}
      </button>
    );
  }
);

Button.displayName = "Button";
