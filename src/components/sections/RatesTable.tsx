import Link from "next/link";
import type { RatesContent } from "@/types/content";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Heading } from "../ui/Heading";

export interface RatesTableProps {
  content: RatesContent;
  background?: "navy" | "navyLight" | "deep";
  border?: "top" | "bottom" | "both" | "none";
}

export function RatesTable({
  content,
  background = "navy",
  border = "none",
}: RatesTableProps) {
  return (
    <Section background={background} border={border} className="py-20 md:py-28">
      <Container size="default">
        {/* Section Header (Left-Aligned) */}
        <div className="text-left mb-10">
          {content.eyebrow && (
            <p className="text-xs sm:text-sm tracking-[0.35em] text-haven-gold uppercase font-light mb-3">
              {content.eyebrow}
            </p>
          )}

          <Heading level={2} className="text-3xl sm:text-4xl md:text-5xl">
            {content.headline}
          </Heading>

          <div className="w-16 h-[2px] bg-haven-gold/80 mt-4 mb-8" />
        </div>

        {/* 3 Pricing Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {content.rates.map((rate) => (
            <div
              key={rate.name}
              className={`relative flex flex-col justify-between p-8 sm:p-10 rounded-sm transition-all duration-500 bg-haven-deep/60 backdrop-blur-sm ${
                rate.popular
                  ? "border-2 border-haven-gold shadow-2xl shadow-haven-gold/10 -translate-y-2 hover:-translate-y-3"
                  : "border border-white/10 hover:border-haven-gold/50 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-haven-gold/5"
              }`}
            >
              {/* Most Popular Tag on top */}
              {rate.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-[0.62rem] tracking-[0.3em] uppercase font-semibold text-haven-navy bg-haven-gold shadow-md">
                  MOST POPULAR
                </div>
              )}

              <div>
                {/* Tier Name */}
                <p className="text-[0.72rem] tracking-[0.3em] uppercase text-haven-cream font-light mb-3">
                  {rate.name}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <span className="font-serif text-4xl sm:text-5xl font-normal text-haven-cream">
                    {rate.price}
                  </span>
                </div>

                {/* Description & Duration */}
                <p className="text-xs sm:text-sm text-haven-cream/70 font-light leading-relaxed">
                  {rate.description}
                </p>
                {rate.duration && (
                  <p className="text-xs text-haven-cream/60 font-light mt-1">
                    ({rate.duration})
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Optional notes if present */}
        {(content.inclusionNote || content.gratuityNote || content.cta) && (
          <div className="max-w-2xl mx-auto text-center space-y-2 mt-12">
            {content.inclusionNote && (
              <p className="text-xs sm:text-sm text-haven-cream/80 font-light leading-relaxed">
                {content.inclusionNote}
              </p>
            )}
            {content.gratuityNote && (
              <p className="text-xs sm:text-sm text-haven-slate font-light">
                {content.gratuityNote}
              </p>
            )}
            {content.cta && (
              <div className="pt-6">
                <Link
                  href={content.cta.href}
                  className="inline-block px-8 py-3.5 text-[0.72rem] tracking-[0.25em] uppercase font-medium border border-haven-gold text-haven-gold hover:bg-haven-gold hover:text-haven-navy transition-all duration-500"
                >
                  {content.cta.label}
                </Link>
              </div>
            )}
          </div>
        )}
      </Container>
    </Section>
  );
}

