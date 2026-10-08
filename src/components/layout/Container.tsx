import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide" | "full";
}

export function Container({
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  const sizeStyles = {
    default: "max-w-7xl px-6 lg:px-10",
    narrow: "max-w-4xl px-6 lg:px-8",
    wide: "max-w-[1440px] px-6 lg:px-12",
    full: "w-full px-6",
  };

  return (
    <div
      className={cn("mx-auto w-full", sizeStyles[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
