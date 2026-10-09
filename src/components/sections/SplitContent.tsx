import Image from "next/image";
import Link from "next/link";
import type { SplitSectionContent } from "@/types/content";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Heading } from "../ui/Heading";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface SplitContentProps {
  content: SplitSectionContent;
  background?: "navy" | "navyLight" | "deep" | "ivory" | "softWhite";
  border?: "top" | "bottom" | "both" | "none";
  variant?: "standard" | "boxed";
}

export function SplitContent({
  content,
  background = "navy",
  border = "none",
  variant = "standard",
}: SplitContentProps) {
  const isImageRight = content.imagePosition !== "left";

  if (variant === "boxed") {
    return (
      <Section background={background} border={border} className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 ambient-glow-gold pointer-events-none" />
        <Container size="default">
          <ScrollReveal direction="up" duration={0.9}>
            <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/10 hover:border-[#B9A078]/40 bg-[#0B141D]/80 backdrop-blur-md rounded-none overflow-hidden shadow-2xl transition-all duration-500 group">
              {/* Image Column */}
              <div className="lg:col-span-4 relative min-h-[320px] lg:min-h-[420px] overflow-hidden bg-[#0B141D] img-editorial">
                <Image
                  src={content.image.src}
                  alt={content.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B141D]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Text Content Column */}
              <div className="lg:col-span-8 p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-left">
                {content.eyebrow && (
                  <p className="text-xs sm:text-sm tracking-[0.35em] text-[#B9A078] uppercase font-light mb-4">
                    {content.eyebrow}
                  </p>
                )}

                <Heading level={2} className="text-3xl sm:text-4xl md:text-5xl mb-6 font-serif font-light text-[#F7F5F0]">
                  {content.headline}
                </Heading>

                <div className="space-y-4 text-[#EFECE5]/90 text-sm sm:text-base leading-relaxed font-light mb-6 text-left">
                  {content.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Gold horizontal underline accent */}
                <div className="w-16 h-[1.5px] bg-[#B9A078]/80 mb-8" />

                {content.cta && (
                  <div>
                    <Link
                      href={content.cta.href}
                      className="inline-block text-xs tracking-[0.3em] uppercase font-medium text-[#B9A078] hover:text-white transition-colors border-b border-[#B9A078]/50 hover:border-white pb-1"
                    >
                      {content.cta.label}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    );
  }

  const isLight = background === "ivory" || background === "softWhite";

  return (
    <Section background={background} border={border} className="py-20 md:py-28 relative overflow-hidden">
      {!isLight && (
        <div className="absolute inset-0 ambient-glow-navy pointer-events-none" />
      )}
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div
            className={`lg:col-span-6 ${isImageRight ? "order-1" : "order-1 lg:order-2"
              }`}
          >
            <ScrollReveal direction={isImageRight ? "right" : "left"} duration={0.85}>
              {content.eyebrow && (
                <div className="flex items-center gap-3 mb-3">
                  <span className={`w-6 h-[1px] ${isLight ? "bg-[#B9A078]" : "bg-[#B9A078]"}`} />
                  <p
                    className={`text-xs sm:text-sm tracking-[0.35em] uppercase font-medium ${
                      isLight ? "text-[#9E8357]" : "text-[#B9A078]"
                    }`}
                  >
                    {content.eyebrow}
                  </p>
                </div>
              )}

              <h2
                className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[2.5rem] xl:text-[3rem] font-light tracking-tight mb-6 leading-[1.15] max-w-xl ${
                  isLight ? "text-[#08182B]" : "text-[#F7F5F0]"
                }`}
              >
                {content.headline}
              </h2>

              <div
                className={`space-y-5 text-sm sm:text-base leading-relaxed font-light text-left ${
                  isLight ? "text-[#0F243A]" : "text-[#EFECE5]/90"
                }`}
              >
                {content.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-sm sm:text-base leading-relaxed ${
                      isLight ? "!text-[#0F243A]" : "!text-[#EFECE5]/90"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Gold horizontal underline accent at bottom */}
              <div className="w-16 h-[1.5px] bg-[#B9A078]/80 my-6" />

              {content.cta && (
                <div>
                  <Link
                    href={content.cta.href}
                    className={`inline-flex items-center gap-2 px-8 py-3.5 text-xs tracking-[0.22em] uppercase font-bold transition-all duration-300 shadow-xl group cursor-pointer ${
                      isLight
                        ? "bg-[#08182B] text-[#F7F5F0] hover:bg-[#B9A078] hover:text-[#08182B]"
                        : "bg-[#B9A078] text-[#0B141D] hover:bg-[#D4AF37]"
                    }`}
                  >
                    <span>{content.cta.label}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </Link>
                </div>
              )}
            </ScrollReveal>
          </div>

          {/* Image Column */}
          <div
            className={`lg:col-span-6 flex items-center justify-center lg:justify-end ${isImageRight ? "order-2" : "order-2 lg:order-1"
              }`}
          >
            <ScrollReveal direction={isImageRight ? "left" : "right"} duration={0.85} delay={150}>
              <div className="relative w-full max-w-[816px] aspect-[816/459] overflow-hidden shadow-2xl border border-white/10 group img-editorial">
                <Image
                  src={content.image.src}
                  alt={content.image.alt}
                  width={816}
                  height={459}
                  priority
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
