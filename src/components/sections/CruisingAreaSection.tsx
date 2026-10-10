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
      className="min-h-screen lg:h-screen flex flex-col justify-center py-10 lg:py-6 relative overflow-hidden transition-colors duration-300 bg-white text-[#101C29] border-t border-b border-[#EAE6DF]"
    >
      <Container size="default">
        {/* Section Header - Centered & Expanded to Full Section Width */}
        <ScrollReveal direction="up" duration={0.85} className="w-full flex justify-center">
          <div className="w-full max-w-7xl mx-auto text-center flex flex-col items-center mb-8 sm:mb-10 lg:mb-8">
            <div className="flex items-center justify-center gap-3 mb-2.5">
              <span className="w-8 sm:w-12 h-[1.5px] bg-[#B9A078]" />
              <p
                className={`text-xs sm:text-sm tracking-[0.28em] uppercase font-sans font-medium ${
                  isLight ? "text-[#9E8357]" : "text-[#B9A078]"
                }`}
              >
                {content.eyebrow}
              </p>
              <span className="w-8 sm:w-12 h-[1.5px] bg-[#B9A078]" />
            </div>

            <h2
              className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal tracking-tight leading-[1.18] mb-3 text-center mx-auto w-full ${
                isLight ? "text-[#101C29]" : "text-white"
              }`}
            >
              {content.headline}
            </h2>

            <div
              className={`space-y-2.5 text-sm sm:text-base md:text-[16px] font-sans font-light leading-relaxed text-center w-full max-w-5xl mx-auto ${
                isLight ? "text-[#101C29]/80" : "text-white/80"
              }`}
            >
              {content.lead.map((paragraph, index) => (
                <p key={index} className="w-full text-center">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Cruising Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {content.destinations.map((dest, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={0.8}
              delay={idx * 120}
            >
              <div
                className="overflow-hidden group transition-all duration-300 shadow-sm hover:shadow-md bg-white border border-[#EAE6DF] hover:border-[#B9A078] rounded-[2px]"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                )}

                <div className="p-5 sm:p-6 lg:p-7">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="text-xs tracking-[0.25em] font-medium text-[#9E8357]">
                      0{idx + 1}
                    </span>
                    <div className="w-6 h-[1px] bg-[#B9A078]/50" />
                    <h3 className="font-serif text-2xl font-normal transition-colors text-[#101C29] group-hover:text-[#9E8357]">
                      {dest.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base font-light leading-relaxed text-[#101C29]/80">
                    {dest.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Navigation Disclaimer */}
        <ScrollReveal direction="up" duration={0.8} delay={200}>
          <div className="p-4 sm:p-5 text-center bg-white border border-[#EAE6DF] rounded-[2px]">
            <p className="text-xs sm:text-sm italic font-light text-[#717E8C]">
              {content.disclaimer}
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
