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
      <Section background={background} border={border} fullHeight={true} className="min-h-screen lg:h-screen flex flex-col justify-center py-10 lg:py-16 relative overflow-hidden bg-white text-[#101C29]">
        <Container size="default">
          <ScrollReveal direction="up" duration={0.9}>
            <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#EAE6DF] hover:border-[#00204E]/40 bg-white rounded-none overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 group">
              {/* Image Column */}
              <div className="lg:col-span-4 relative min-h-[320px] lg:min-h-[420px] overflow-hidden bg-white">
                <Image
                  src={content.image.src}
                  alt={content.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>

              {/* Text Content Column */}
              <div className="lg:col-span-8 p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-left">
                {content.eyebrow && (
                  <p className="text-xs sm:text-sm tracking-[0.35em] text-[#9E8357] uppercase font-light mb-4">
                    {content.eyebrow}
                  </p>
                )}

                <Heading
                  level={2}
                  style={{ color: "#101C29" }}
                  className="text-3xl sm:text-4xl md:text-5xl mb-6 font-serif font-light text-[#101C29]"
                >
                  {content.headline}
                </Heading>

                <div className="space-y-4 text-[#101C29] text-sm sm:text-base leading-relaxed font-light mb-6 text-left">
                  {content.paragraphs.map((paragraph, index) => (
                    <p key={index} style={{ color: "#101C29" }}>{paragraph}</p>
                  ))}
                </div>

                <div className="w-16 h-[1.5px] bg-[#B9A078]/80 mb-8" />

                {content.cta && (
                  <div>
                    <Link
                      href={content.cta.href}
                      style={{ color: "#101C29", borderColor: "#101C29" }}
                      className="inline-block text-xs tracking-[0.3em] uppercase font-medium text-[#101C29] hover:text-[#B9A078] transition-colors border-b border-[#101C29]/50 hover:border-[#B9A078] pb-1"
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

  const isIvory = background === "ivory" || background === "softWhite";

  return (
    <Section
      background={background}
      border={border}
      fullHeight={true}
      spacing="none"
      style={{
        backgroundColor: isIvory ? "#F7F5F0" : "#101C29",
      }}
      className={`w-full min-h-screen lg:h-screen flex flex-col justify-center py-12 lg:py-8 px-4 sm:px-8 lg:px-12 relative overflow-hidden transition-colors duration-300 ${
        isIvory ? "bg-[#F7F5F0] text-[#101C29]" : "bg-[#101C29] text-[#F8F8F6]"
      }`}
    >
      <Container size="wide" className="w-full">
        {/* =========================================================================
            HEADINGS: Generously padded header
        ========================================================================= */}
        <ScrollReveal direction="up" duration={0.8} className="w-full flex justify-center shrink-0">
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center mb-8 sm:mb-12 lg:mb-14">
            {content.eyebrow && (
              <div className="flex items-center justify-center gap-3.5 mb-4 sm:mb-5 mx-auto">
                <span className="w-8 sm:w-14 h-[1px] bg-[#B9A078]" />
                <p className="text-xs sm:text-[13px] tracking-[0.32em] uppercase font-sans font-semibold text-[#B9A078]">
                  {content.eyebrow}
                </p>
                <span className="w-8 sm:w-14 h-[1px] bg-[#B9A078]" />
              </div>
            )}

            <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal tracking-tight leading-[1.12] text-center w-full mx-auto ${
              isIvory ? "text-[#101C29]" : "text-[#F8F8F6]"
            }`}>
              {content.headline}
            </h2>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            TWO COLUMNS GRID: Fills remaining height gracefully
        ========================================================================= */}
        <div className="w-full flex-1 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-center w-full">
            {/* Subcontent Column (Left side) */}
            <div
              className={`lg:col-span-6 flex flex-col items-center lg:items-start justify-center ${
                isImageRight ? "order-1" : "order-1 lg:order-2"
              }`}
            >
              <ScrollReveal direction={isImageRight ? "right" : "left"} duration={0.85} className="w-full flex flex-col items-center lg:items-start">
                <div className="max-w-[540px] w-full text-left">
                  <p className={`text-[15px] sm:text-[16px] md:text-[17px] lg:text-[17.5px] leading-[1.85] font-normal text-left font-sans ${
                    isIvory ? "text-[#101C29]" : "text-[#F8F8F6]"
                  }`}>
                    {Array.isArray(content.paragraphs)
                      ? content.paragraphs.join(" ")
                      : content.paragraphs}
                  </p>

                  {/* Left-aligned Button below paragraph */}
                  {content.cta && (
                    <div className="flex justify-start items-center w-full mt-8 sm:mt-10 lg:mt-12">
                      <Link
                        href={content.cta.href}
                        className={`inline-flex items-center justify-center gap-2 w-full sm:w-[190px] h-[50px] px-4 text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-medium transition-all duration-300 shadow-md hover:shadow-lg group cursor-pointer rounded-[1px] whitespace-nowrap ${
                          isIvory
                            ? "bg-[#101C29] hover:bg-[#182A3E] text-[#F8F8F6]"
                            : "bg-[#B9A078] hover:bg-[#C8B08A] text-[#101C29]"
                        }`}
                      >
                        <span>{content.cta.label}</span>
                        <span className="text-[13px] font-light leading-none group-hover:translate-x-0.5 transition-transform">
                          ›
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Image Column (Right side) */}
            <div
              className={`lg:col-span-6 flex items-center justify-center lg:justify-end ${
                isImageRight ? "order-2" : "order-2 lg:order-1"
              }`}
            >
              <ScrollReveal direction={isImageRight ? "left" : "right"} duration={0.85} delay={150} className="w-full flex justify-center lg:justify-end">
                <div
                  style={{ maxWidth: "636px", aspectRatio: "636 / 357.75" }}
                  className="relative w-full max-w-[636px] aspect-[636/357.75] lg:w-[636px] lg:h-[357.75px] overflow-hidden rounded-[2px] shadow-[0_25px_60px_rgba(0,0,0,0.18)] border border-[#EAE6DF]/60 group bg-white"
                >
                  <Image
                    src={content.image.src}
                    alt={content.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 636px"
                    priority
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
