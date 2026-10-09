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
    default: "max-w-full site-padding-x",
    narrow: "max-w-full site-padding-x",
    wide: "max-w-full site-padding-x",
    full: "w-full site-padding-x",
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
