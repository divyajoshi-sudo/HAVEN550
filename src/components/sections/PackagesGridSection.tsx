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
      className="min-h-screen lg:h-screen flex flex-col justify-center py-10 lg:py-6 relative overflow-hidden transition-colors duration-300 bg-white text-[#101C29] border-t border-b border-[#EAE6DF]"
    >
      <Container size="default">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={0.85} className="w-full flex justify-center">
          <div className="w-full max-w-3xl mx-auto text-center flex flex-col items-center mb-8 sm:mb-10 lg:mb-8">
            <div className="flex items-center justify-center gap-3 mb-2.5">
              <span className="w-8 h-[1px] bg-[#B9A078]" />
              <p className="text-xs sm:text-sm tracking-[0.35em] uppercase font-light text-[#9E8357]">
                {content.eyebrow}
              </p>
              <span className="w-8 h-[1px] bg-[#B9A078]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-center mx-auto w-full text-[#101C29]">
              {content.headline}
            </h2>
          </div>
        </ScrollReveal>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {content.items.map((pkg, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={0.8}
              delay={idx * 120}
              className="h-full"
            >
              <div
                className={`relative p-6 sm:p-8 lg:p-7 flex flex-col justify-between h-full transition-all duration-500 luxury-card ${
                  pkg.popular
                    ? "bg-white border-2 border-[#B9A078] shadow-2xl md:-translate-y-2 translate-y-0"
                    : "bg-white border border-[#EAE6DF] hover:border-[#B9A078]/70 shadow-lg"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-8 px-4 py-1 text-[0.62rem] tracking-[0.25em] uppercase font-semibold text-white bg-[#B9A078] shadow-lg">
                    MOST POPULAR
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-2xl font-light tracking-wide text-[#101C29]">
                      {pkg.name}
                    </h3>
                    <span className="text-xs tracking-[0.2em] uppercase font-medium px-3 py-1 bg-white border border-[#EAE6DF] text-[#101C29]">
                      {pkg.duration}
                    </span>
                  </div>

                  <div
                    className={`mb-4 pb-4 ${isLight ? "border-b border-[#D8D2C6]" : "border-b border-white/10"
                      }`}
                  >
                    <span
                      className={`font-serif text-3xl sm:text-4xl font-light ${isLight ? "text-[#101C29]" : "text-white"
                        }`}
                    >
                      {pkg.price}
                    </span>
                  </div>

                  <p
                    className={`text-sm sm:text-base font-light leading-relaxed mb-6 min-h-[48px] ${isLight ? "text-[#101C29]" : "text-white/75"
                      }`}
                  >
                    {pkg.description}
                  </p>
                </div>

                <div
                  className={`pt-5 ${isLight ? "border-t border-[#D8D2C6]" : "border-t border-white/10"
                    }`}
                >
                  <div className="flex justify-center">
                    <Link
                      href={pkg.cta.href}
                      className="w-full sm:w-[180px] h-[50px] px-3 text-center text-[11px] sm:text-[12px] tracking-[0.15em] uppercase font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 group cursor-pointer bg-[#101C29] hover:bg-[#182A3E] text-white rounded-[1px] shadow-md whitespace-nowrap"
                    >
                      <span>{pkg.cta.label}</span>
                      <span className="text-[13px] font-light leading-none group-hover:translate-x-0.5 transition-transform">›</span>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
