import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface CharterInclusionsSectionProps {
  content: {
    eyebrow: string;
    headline: string;
    description: string;
    optionalAddons: Array<{ label: string; price: string }>;
    gratuityNote: string;
  };
}

export function CharterInclusionsSection({
  content,
}: CharterInclusionsSectionProps) {
  // Split inclusions from description for visual treatment
  const includedItems = [
    "Professional Captain",
    "Steward",
    "Fuel (Standard Area)",
    "Water & Ice",
    "Coolers & Towels",
    "Premium Sound System",
    "Floats & Inflatables",
    "Snorkeling Equipment",
    "Underwater Scooters",
  ];

  return (
    <Section background="deep" className="py-24 md:py-32 text-white relative border-t border-b border-white/10 bg-[#0B141D] overflow-hidden">
      <div className="absolute inset-0 ambient-glow-gold pointer-events-none opacity-30" />
      <Container size="default">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <ScrollReveal direction="up" duration={0.85} className="w-full">
            <div className="text-center mb-16 md:mb-20">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-8 h-[1.5px] bg-[#B9A078]" />
                <p className="text-xs sm:text-sm tracking-[0.28em] text-[#B9A078] uppercase font-sans font-medium">
                  {content.eyebrow}
                </p>
                <span className="w-8 h-[1.5px] bg-[#B9A078]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal text-white tracking-tight leading-[1.2] mb-5 text-center">
                {content.headline}
              </h2>

              <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto text-center">
                {content.description}
              </p>
            </div>
          </ScrollReveal>

          {/* Included Items Grid */}
          <ScrollReveal direction="up" duration={0.85} delay={80} className="w-full">
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-5 mb-14 max-w-3xl mx-auto">
              {includedItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center py-5 sm:py-6 group"
                >
                  {/* Checkmark icon */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#B9A078]/30 bg-[#B9A078]/[0.06] flex items-center justify-center mb-3 group-hover:border-[#B9A078]/60 group-hover:bg-[#B9A078]/[0.1] transition-all duration-500">
                    <svg
                      className="w-4 h-4 text-[#B9A078]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <span className="text-[11px] sm:text-xs text-white/75 font-light tracking-wide leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Optional Add-ons */}
          <ScrollReveal direction="up" duration={0.8} delay={160} className="w-full">
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[#B9A078]/70 font-sans font-medium text-center mb-5">
                OPTIONAL ENHANCEMENTS
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.optionalAddons.map((addon, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 bg-gradient-to-b from-[#101C29] to-[#0C1720] border border-white/[0.08] rounded-[3px] flex items-center justify-between group hover:border-[#B9A078]/40 transition-all duration-500"
                  >
                    <span className="text-sm text-white/90 font-light">
                      {addon.label}
                    </span>
                    <span className="font-serif text-lg sm:text-xl text-[#B9A078] font-normal tracking-tight">
                      {addon.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Gratuity Note */}
          <ScrollReveal direction="up" duration={0.8} delay={240} className="w-full">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs text-white/50 italic font-light">
                {content.gratuityNote}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
