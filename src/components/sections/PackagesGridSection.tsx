import Link from "next/link";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface PackageCardItem {
  name: string;
  duration: string;
  price: string;
  description: string;
  cta: { label: string; href: string };
  popular?: boolean;
}

export interface PackagesGridSectionProps {
  content: {
    eyebrow: string;
    headline: string;
    items: PackageCardItem[];
  };
  background?: "navy" | "ivory";
}

export function PackagesGridSection({
  content,
  background = "ivory",
}: PackagesGridSectionProps) {
  const isLight = background === "ivory";

  return (
    <section
      className={`min-h-screen flex flex-col justify-center py-20 md:py-28 relative overflow-hidden transition-colors duration-300 ${isLight
          ? "bg-[#EFECE5] text-[#111A22] border-t border-b border-[#D8D2C6]"
          : "bg-[#101C29] text-white border-t border-b border-white/10"
        }`}
    >
      {!isLight && (
        <div className="absolute inset-0 ambient-glow-gold pointer-events-none" />
      )}
      <Container size="default">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={0.85} className="w-full flex justify-center">
          <div className="w-full max-w-3xl mx-auto text-center flex flex-col items-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#B9A078]" />
              <p
                className={`text-xs sm:text-sm tracking-[0.35em] uppercase font-light ${isLight ? "text-[#9E8357]" : "text-[#B9A078]"
                  }`}
              >
                {content.eyebrow}
              </p>
              <span className="w-8 h-[1px] bg-[#B9A078]" />
            </div>

            <h2
              className={`font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-center mx-auto w-full ${isLight ? "text-[#111A22]" : "text-white"
                }`}
            >
              {content.headline}
            </h2>
          </div>
        </ScrollReveal>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {content.items.map((pkg, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={0.8}
              delay={idx * 130}
              className="h-full"
            >
              <div
                className={`relative p-8 sm:p-10 flex flex-col justify-between h-full transition-all duration-500 luxury-card ${pkg.popular
                    ? isLight
                      ? "bg-[#FAF8F5] border-2 border-[#B9A078] shadow-2xl md:-translate-y-2 translate-y-0"
                      : "bg-[#0B141D] border-2 border-[#B9A078] shadow-2xl shadow-black/60 md:-translate-y-2 translate-y-0 ring-1 ring-[#B9A078]/25"
                    : isLight
                      ? "bg-[#FAF8F5] border border-[#D8D2C6] hover:border-[#B9A078]/70 shadow-lg"
                      : "bg-[#0B141D]/75 border border-white/10 hover:border-[#B9A078]/50 shadow-xl"
                  }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-8 px-4 py-1 text-[0.62rem] tracking-[0.25em] uppercase font-semibold text-white bg-[#B9A078] shadow-lg">
                    MOST POPULAR
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className={`font-serif text-2xl font-light tracking-wide ${isLight ? "text-[#111A22]" : "text-white"
                        }`}
                    >
                      {pkg.name}
                    </h3>
                    <span
                      className={`text-xs tracking-[0.2em] uppercase font-medium px-3 py-1 ${isLight
                          ? "bg-[#EFECE5] border border-[#D8D2C6] text-[#4F5862]"
                          : "bg-white/10 text-[#B9A078]"
                        }`}
                    >
                      {pkg.duration}
                    </span>
                  </div>

                  <div
                    className={`mb-6 pb-6 ${isLight ? "border-b border-[#D8D2C6]" : "border-b border-white/10"
                      }`}
                  >
                    <span
                      className={`font-serif text-4xl sm:text-5xl font-light ${isLight ? "text-[#111A22]" : "text-white"
                        }`}
                    >
                      {pkg.price}
                    </span>
                  </div>

                  <p
                    className={`text-sm sm:text-base font-light leading-relaxed mb-8 min-h-[54px] sm:min-h-[72px] ${isLight ? "text-[#4F5862]" : "text-white/75"
                      }`}
                  >
                    {pkg.description}
                  </p>
                </div>

                <div
                  className={`pt-6 ${isLight ? "border-t border-[#D8D2C6]" : "border-t border-white/10"
                    }`}
                >
                  <Link
                    href={pkg.cta.href}
                    className={`w-full py-3.5 text-center text-xs tracking-[0.22em] uppercase font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 group cursor-pointer ${pkg.popular
                        ? "bg-[#B9A078] text-[#0B141D] hover:bg-[#D4AF37] shadow-lg"
                        : isLight
                          ? "border border-[#D8D2C6] text-[#111A22] hover:bg-[#111A22] hover:text-white"
                          : "bg-white/10 text-white hover:bg-white hover:text-[#0B141D]"
                      }`}
                  >
                    <span>{pkg.cta.label}</span>
                    <span className="transition-transform group-hover:translate-x-1.5">→</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
