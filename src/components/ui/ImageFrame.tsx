import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

export interface ImageFrameProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: "video" | "square" | "portrait" | "wide" | "auto";
  sizes?: string;
  priority?: boolean;
  className?: string;
  overlay?: boolean;
}

export function ImageFrame({
  src,
  alt,
  caption,
  aspectRatio = "wide",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
  className,
  overlay = true,
}: ImageFrameProps) {
  const aspectStyles = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/10]",
    auto: "h-full w-full min-h-[300px]",
  };

  return (
    <figure className="relative w-full">
      <div
        className={cn(
          "relative overflow-hidden rounded-sm border border-white/10 shadow-2xl group",
          aspectStyles[aspectRatio],
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-haven-deep/40 via-transparent to-transparent pointer-events-none" />
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 flex items-center justify-between text-xs text-haven-slate/70 tracking-widest uppercase">
          <span>{caption}</span>
          <span>HAVEN 550</span>
        </figcaption>
      )}
    </figure>
  );
}
