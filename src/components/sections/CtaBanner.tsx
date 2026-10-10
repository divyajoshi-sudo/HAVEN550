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
    <section className="relative min-h-screen lg:h-screen w-full flex flex-col items-center justify-center py-12 lg:py-0 overflow-hidden bg-[#101C29] text-[#F8F8F6] border-t border-white/10">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/40 pointer-events-none" />
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/40 pointer-events-none" />
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
            <span className="w-8 sm:w-14 h-[1px] bg-[#B9A078]" />
            <p
              style={{ color: "#F8F8F6", textShadow: "0 2px 10px rgba(0,0,0,0.85)" }}
              className="text-[0.68rem] sm:text-xs tracking-[0.38em] uppercase font-sans font-medium text-center text-[#F8F8F6]"
            >
              {content.eyebrow || "YOUR PRIVATE ESCAPE BEGINS HERE"}
            </p>
            <span className="w-8 sm:w-14 h-[1px] bg-[#B9A078]" />
          </div>

          {/* Main Headline in Cormorant Garamond and Soft White #F8F8F6 */}
          <h2
            style={{ color: "#F8F8F6", textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.8)" }}
            className="w-full font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-light leading-[1.15] mb-6 max-w-4xl mx-auto text-center text-balance text-[#F8F8F6] drop-shadow-xl"
          >
            {content.headline}
          </h2>

          {/* Subtitle */}
          <p
            style={{ color: "#F8F8F6", textShadow: "0 2px 12px rgba(0,0,0,0.85)" }}
            className="w-full font-serif italic text-xl sm:text-2xl font-light mb-10 text-center mx-auto max-w-2xl text-balance text-[#F8F8F6]/95"
          >
            {content.subtext || "The water is waiting."}
          </p>

          {/* Center Brand Block with gold lines */}
          <div className="flex flex-col items-center justify-center mb-12 mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="w-10 sm:w-16 h-[1px] bg-[#B9A078]" />
              <span
                style={{
                  color: "#F8F8F6",
                  fontWeight: 600,
                  WebkitTextStroke: "0.45px #F8F8F6",
                  textShadow: "0 1px 3px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.5)",
                }}
                className="font-serif text-2xl sm:text-3xl font-semibold tracking-[0.25em] text-center text-[#F8F8F6]"
              >
                HAVEN 550
              </span>
              <span className="w-10 sm:w-16 h-[1px] bg-[#B9A078]" />
            </div>
            <span
              style={{ color: "#F8F8F6", textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
              className="text-xs sm:text-sm tracking-[0.3em] uppercase font-sans font-light text-center text-[#F8F8F6]/90"
            >
              {content.brandTagline || "Your Time. Your Waters. Your Haven."}
            </span>
          </div>

          {/* Prominent Minimal CTA Button */}
          <div className="flex items-center justify-center w-full mx-auto text-center">
            <Link
              href={content.cta.href}
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto sm:min-w-[240px] h-[50px] px-8 bg-[#B9A078] hover:bg-[#C8B08A] text-[#101C29] text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-semibold transition-all duration-300 shadow-2xl group cursor-pointer rounded-[1px] whitespace-nowrap"
            >
              <span>{content.cta.label}</span>
              <span className="text-[13px] font-bold leading-none group-hover:translate-x-0.5 transition-transform">›</span>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
