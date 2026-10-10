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
              className={`relative flex flex-col justify-between p-8 sm:p-10 rounded-sm transition-all duration-500 bg-white ${
                rate.popular
                  ? "border-2 border-haven-gold shadow-xl -translate-y-2 hover:-translate-y-3"
                  : "border border-[#EAE6DF] hover:border-[#00204E]/40 hover:-translate-y-1.5 hover:shadow-lg"
              }`}
            >
              {/* Most Popular Tag on top */}
              {rate.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-[0.62rem] tracking-[0.3em] uppercase font-semibold text-white bg-[#00204E] shadow-md">
                  MOST POPULAR
                </div>
              )}

              <div>
                {/* Tier Name */}
                <p className="text-[0.72rem] tracking-[0.3em] uppercase text-[#08182B] font-semibold mb-3">
                  {rate.name}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <span className="font-serif text-4xl sm:text-5xl font-normal text-[#08182B]">
                    {rate.price}
                  </span>
                </div>

                {/* Description & Duration */}
                <p className="text-xs sm:text-sm text-[#4A5568] font-light leading-relaxed">
                  {rate.description}
                </p>
                {rate.duration && (
                  <p className="text-xs text-[#717E8C] font-light mt-1">
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
              <p className="text-xs sm:text-sm text-[#4A5568] font-light leading-relaxed">
                {content.inclusionNote}
              </p>
            )}
            {content.gratuityNote && (
              <p className="text-xs sm:text-sm text-[#717E8C] font-light">
                {content.gratuityNote}
              </p>
            )}
            {content.cta && (
              <div className="pt-6">
                <Link
                  href={content.cta.href}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-[180px] h-[50px] px-3 bg-[#00204E] hover:bg-[#002D6E] text-white text-[11px] sm:text-[12px] tracking-[0.15em] uppercase font-medium transition-all duration-300 rounded-[1px] shadow-lg whitespace-nowrap group"
                >
                  <span>{content.cta.label}</span>
                  <span className="text-[13px] font-light leading-none group-hover:translate-x-0.5 transition-transform">›</span>
                </Link>
              </div>
            )}
          </div>
        )}
      </Container>
    </Section>
  );
}

