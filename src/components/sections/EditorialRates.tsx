import Link from "next/link";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

export interface RateTier {
  name: string;
  duration: string;
  price: string;
  description?: string;
  popular?: boolean;
}

export interface EditorialRatesProps {
  eyebrow?: string;
  headline?: string;
  rates?: RateTier[];
  background?: "ivory" | "softWhite" | "navy" | "deep";
}

export function EditorialRates({
  eyebrow = "CHARTER RATES",
  headline = "Simple, Transparent Pricing.",
  rates = [
    {
      name: "HALF DAY",
      duration: "4 hours",
      price: "$3,000",
      description: "A refined morning or afternoon coastal escape.",
      popular: false,
    },
    {
      name: "FULL DAY",
      duration: "8 hours",
      price: "$4,000",
      description: "The ultimate unhurried full-day experience on the water.",
      popular: true,
    },
    {
      name: "SUNSET",
      duration: "4 hours",
      price: "$3,000",
      description: "Golden hour and twilight cruising along Fort Lauderdale.",
      popular: false,
    },
  ],
  background = "ivory",
}: EditorialRatesProps) {
  const isLight = background === "ivory" || background === "softWhite";

  return (
    <Section background={background} className="py-16 md:py-20 min-h-screen flex flex-col justify-center">
      <Container size="wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#D8D2C5]">
          <div>
            <p className="text-xs sm:text-sm tracking-[0.35em] text-[#B79B6A] uppercase font-medium mb-3">
              {eyebrow}
            </p>
            <h2
              className={`font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight ${
                isLight ? "text-[#1C252B]" : "text-haven-cream"
              }`}
            >
              {headline}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#8A8A84] font-light mt-4 md:mt-0 tracking-wider">
            PRIVATE CHARTER · UP TO 8 GUESTS
          </p>
        </div>

        {/* 3 Editorial Horizontal / Minimalist Rate Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 mb-16">
          {rates.map((rate, index) => (
            <div
              key={index}
              className={`relative p-8 md:p-10 flex flex-col justify-between transition-all duration-500 ${
                rate.popular
                  ? "bg-white shadow-xl shadow-black/5 border border-[#B79B6A]/50 -translate-y-1"
                  : "bg-transparent border border-[#E0DBD0]"
              }`}
            >
              {rate.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 text-[0.6rem] tracking-[0.25em] uppercase font-semibold text-white bg-[#B79B6A]">
                  MOST POPULAR
                </span>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs tracking-[0.25em] uppercase font-medium text-[#B79B6A]">
                    {rate.name}
                  </span>
                  <span className="text-xs text-[#8A8A84] font-light tracking-wider">
                    {rate.duration}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="font-serif text-4xl sm:text-5xl font-normal text-[#1C252B]">
                    {rate.price}
                  </span>
                </div>

                {rate.description && (
                  <p className="text-base text-[#5A626A] font-normal leading-relaxed mb-6">
                    {rate.description}
                  </p>
                )}
              </div>

              <div className="pt-6 border-t border-[#EAE5DC]">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-medium text-[#1C252B] hover:text-[#B79B6A] transition-colors"
                >
                  <span>REQUEST YOUR CHARTER</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
