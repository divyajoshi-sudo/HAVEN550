import Image from "next/image";
import Link from "next/link";
import type { SplitSectionContent } from "@/types/content";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Heading } from "../ui/Heading";

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
      <Section background={background} border={border} className="py-20 md:py-28">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/15 hover:border-haven-gold/40 bg-haven-deep/60 backdrop-blur-sm rounded-sm overflow-hidden shadow-2xl transition-all duration-500 group">
            {/* Image Column */}
            <div className="lg:col-span-4 relative min-h-[320px] lg:min-h-[420px] overflow-hidden bg-haven-deep">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-haven-deep/50 via-transparent to-transparent pointer-events-none group-hover:opacity-40 transition-opacity duration-300" />
            </div>

            {/* Text Content Column */}
            <div className="lg:col-span-8 p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-left">
              {content.eyebrow && (
                <p className="text-xs sm:text-sm tracking-[0.35em] text-haven-gold uppercase font-light mb-4">
                  {content.eyebrow}
                </p>
              )}

              <Heading level={2} className="text-3xl sm:text-4xl md:text-5xl mb-6">
                {content.headline}
              </Heading>

              <div className="space-y-4 text-haven-cream/80 text-sm sm:text-base leading-relaxed font-light mb-6">
                {content.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Gold horizontal underline accent */}
              <div className="w-16 h-[2px] bg-haven-gold/80 mb-8" />

              {content.cta && (
                <div>
                  <Link
                    href={content.cta.href}
                    className="inline-block text-xs tracking-[0.3em] uppercase font-medium text-haven-gold hover:text-haven-cream transition-colors border-b border-haven-gold/50 hover:border-haven-gold pb-1"
                  >
                    {content.cta.label}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  const isLight = background === "ivory" || background === "softWhite";

  return (
    <Section background={background} border={border} className="py-16 md:py-24 min-h-screen flex flex-col justify-center">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Text Column */}
          <div
            className={`lg:col-span-5 ${
              isImageRight ? "order-1" : "order-1 lg:order-2"
            }`}
          >
            {content.eyebrow && (
              <p className="text-xs sm:text-sm tracking-[0.35em] text-[#B79B6A] uppercase font-medium mb-3">
                {content.eyebrow}
              </p>
            )}

            <h2
              className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 ${
                isLight ? "text-[#1C252B]" : "text-haven-cream"
              }`}
            >
              {content.headline}
            </h2>

            <div
              className={`space-y-5 text-base leading-relaxed font-normal ${
                isLight ? "text-[#5A626A]" : "text-haven-cream/80"
              }`}
            >
              {content.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Gold horizontal underline accent at bottom */}
            <div className="w-16 h-[2px] bg-[#B79B6A]/80 mt-8" />

            {content.cta && (
              <div className="mt-8">
                <Link
                  href={content.cta.href}
                  className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-medium text-[#B79B6A] hover:text-[#1C252B] transition-colors py-2 border-b border-[#B79B6A]/40 hover:border-[#B79B6A]"
                >
                  <span>{content.cta.label}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* Image Column: Exact 816 x 459 */}
          <div
            className={`lg:col-span-7 flex items-center justify-center lg:justify-end ${
              isImageRight ? "order-2" : "order-2 lg:order-1"
            }`}
          >
            <div className="relative w-full max-w-[816px] aspect-[816/459] overflow-hidden shadow-2xl group">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                width={816}
                height={459}
                priority
                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

