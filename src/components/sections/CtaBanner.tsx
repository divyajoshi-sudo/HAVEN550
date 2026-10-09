import Image from "next/image";
import Link from "next/link";
import type { CtaBannerContent } from "@/types/content";
import { Container } from "../layout/Container";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface CtaBannerProps {
  content: CtaBannerContent;
  backgroundVideo?: string;
  background?: "navy" | "ivory";
}

export function CtaBanner({
  content,
  backgroundVideo,
}: CtaBannerProps) {
  const videoSrc = content.backgroundVideo || backgroundVideo;

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 md:py-28 overflow-hidden bg-[#0B141D] text-white border-t border-white/10">
      {/* Background Video or Image — Showing exact image color with light subtle overlay */}
      {videoSrc ? (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={content.backgroundImage}
            className="w-full h-full object-cover object-center scale-105"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        </div>
      ) : content.backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={content.backgroundImage}
            alt="HAVEN 550 luxury charter"
            fill
            sizes="100vw"
            className="object-cover object-center animate-ken-burns"
          />
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        </div>
      ) : null}

      <Container size="default" className="relative z-10 flex flex-col items-center justify-center text-center">
        <ScrollReveal
          direction="up"
          duration={0.9}
          className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-4 mx-auto text-center">
            <span className="w-8 sm:w-14 h-[1px] bg-[#B9A078]/70" />
            <p className="text-[0.68rem] sm:text-xs tracking-[0.38em] uppercase font-light text-center text-[#B9A078]">
              {content.eyebrow || "YOUR PRIVATE ESCAPE BEGINS HERE"}
            </p>
            <span className="w-8 sm:w-14 h-[1px] bg-[#B9A078]/70" />
          </div>

          {/* Main Headline */}
          <h2 className="w-full font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-light leading-[1.15] mb-6 max-w-4xl mx-auto text-center text-balance text-[#F7F5F0] drop-shadow-lg">
            {content.headline}
          </h2>

          {/* Subtitle */}
          <p className="w-full font-serif italic text-xl sm:text-2xl font-light mb-10 text-center mx-auto max-w-2xl text-balance text-[#F7F5F0]/90 drop-shadow-sm">
            {content.subtext || "The water is waiting."}
          </p>

          {/* Center Brand Block with gold lines */}
          <div className="flex flex-col items-center justify-center mb-12 mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="w-10 sm:w-16 h-[1px] bg-[#B9A078]/60" />
              <span className="font-serif text-2xl sm:text-3xl font-normal tracking-[0.25em] text-center text-[#B9A078]">
                HAVEN 550
              </span>
              <span className="w-10 sm:w-16 h-[1px] bg-[#B9A078]/60" />
            </div>
            <span className="text-xs sm:text-sm tracking-[0.3em] uppercase font-light text-center text-[#EFECE5]/85">
              {content.brandTagline || "Your Time. Your Waters. Your Haven."}
            </span>
          </div>

          {/* Prominent Minimal CTA Button */}
          <div className="flex items-center justify-center w-full mx-auto text-center">
            <Link
              href={content.cta.href}
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#B9A078] text-[#0B141D] text-[0.72rem] sm:text-xs tracking-[0.28em] uppercase font-medium hover:bg-[#D4AF37] transition-all duration-300 shadow-2xl group cursor-pointer"
            >
              <span>{content.cta.label}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
