import Image from "next/image";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface CruisingAreaItem {
  title: string;
  description: string;
  image?: { src: string; alt: string };
}

export interface CruisingAreaSectionProps {
  content: {
    eyebrow: string;
    headline: string;
    lead: string[];
    destinations: CruisingAreaItem[];
    disclaimer: string;
  };
  background?: "navy" | "ivory";
}

export function CruisingAreaSection({
  content,
  background = "ivory",
}: CruisingAreaSectionProps) {
  const isLight = background === "ivory";

  return (
    <section
      className={`min-h-screen flex flex-col justify-center py-20 md:py-28 relative overflow-hidden transition-colors duration-300 ${
        isLight
          ? "bg-[#EFECE5] text-[#111A22] border-t border-b border-[#D8D2C6]"
          : "bg-[#101C29] text-white border-t border-b border-white/10"
      }`}
    >
      {!isLight && (
        <div className="absolute inset-0 ambient-glow-navy pointer-events-none" />
      )}
      <Container size="default">
        {/* Section Header - Centered */}
        <ScrollReveal direction="up" duration={0.85} className="w-full flex justify-center">
          <div className="w-full max-w-3xl mx-auto text-center flex flex-col items-center mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1.5px] bg-[#B9A078]" />
              <p
                className={`text-xs sm:text-sm tracking-[0.28em] uppercase font-sans font-medium ${
                  isLight ? "text-[#9E8357]" : "text-[#B9A078]"
                }`}
              >
                {content.eyebrow}
              </p>
              <span className="w-8 h-[1.5px] bg-[#B9A078]" />
            </div>

            <h2
              className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal tracking-tight leading-[1.2] mb-4 text-center mx-auto w-full ${
                isLight ? "text-[#111A22]" : "text-white"
              }`}
            >
              {content.headline}
            </h2>

            <div
              className={`space-y-3 text-sm sm:text-base font-light leading-relaxed text-center max-w-2xl mx-auto ${
                isLight ? "text-[#4F5862]" : "text-white/80"
              }`}
            >
              {content.lead.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Cruising Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {content.destinations.map((dest, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={0.8}
              delay={idx * 120}
            >
              <div
                className={`overflow-hidden group transition-all duration-500 shadow-xl ${
                  isLight
                    ? "bg-[#FAF8F5] border border-[#D8D2C6] hover:border-[#B9A078]"
                    : "bg-[#0B141D]/80 border border-white/10 hover:border-[#B9A078]/50"
                }`}
              >
                {dest.image && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40 img-editorial">
                    <Image
                      src={dest.image.src}
                      alt={dest.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 ${
                        isLight ? "from-[#FAF8F5]" : "from-[#0B141D]"
                      }`}
                    />
                  </div>
                )}

                <div className="p-7 sm:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-xs tracking-[0.25em] font-medium ${
                        isLight ? "text-[#9E8357]" : "text-[#B9A078]"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <div className="w-6 h-[1px] bg-[#B9A078]/50" />
                    <h3
                      className={`font-serif text-2xl font-normal transition-colors ${
                        isLight
                          ? "text-[#111A22] group-hover:text-[#9E8357]"
                          : "text-white group-hover:text-[#B9A078]"
                      }`}
                    >
                      {dest.title}
                    </h3>
                  </div>

                  <p
                    className={`text-sm sm:text-base font-light leading-relaxed ${
                      isLight ? "text-[#4F5862]" : "text-white/75"
                    }`}
                  >
                    {dest.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Navigation Disclaimer */}
        <ScrollReveal direction="up" duration={0.8} delay={200}>
          <div
            className={`p-4 sm:p-5 text-center ${
              isLight
                ? "bg-[#FAF8F5] border border-[#D8D2C6]"
                : "bg-white/5 border border-white/10"
            }`}
          >
            <p
              className={`text-xs sm:text-sm italic font-light ${
                isLight ? "text-[#6E6A62]" : "text-white/70"
              }`}
            >
              {content.disclaimer}
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
