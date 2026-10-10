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
    <Section background="navy" fullHeight={true} className="min-h-screen lg:h-screen flex flex-col justify-center py-10 lg:py-6 text-[#101C29] relative border-t border-b border-[#EAE6DF] bg-white overflow-hidden">
      <Container size="default">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <ScrollReveal direction="up" duration={0.85} className="w-full">
            <div className="text-center mb-8 sm:mb-10 lg:mb-8">
              <div className="flex items-center justify-center gap-3 mb-2.5">
                <span className="w-8 h-[1.5px] bg-[#B9A078]" />
                <p className="text-xs sm:text-sm tracking-[0.28em] text-[#9E8357] uppercase font-sans font-medium">
                  {content.eyebrow}
                </p>
                <span className="w-8 h-[1.5px] bg-[#B9A078]" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal text-[#101C29] tracking-tight leading-[1.2] mb-3 text-center">
                {content.headline}
              </h2>

              <p className="text-[#101C29]/80 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto text-center">
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
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#B9A078]/40 bg-[#B9A078]/[0.08] flex items-center justify-center mb-3 group-hover:border-[#B9A078] group-hover:bg-[#B9A078]/[0.15] transition-all duration-500">
                    <svg
                      className="w-4 h-4 text-[#9E8357]"
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
                  <span className="text-[11px] sm:text-xs text-[#101C29] font-light tracking-wide leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Optional Add-ons */}
          <ScrollReveal direction="up" duration={0.8} delay={160} className="w-full">
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[#9E8357] font-sans font-medium text-center mb-5">
                OPTIONAL ENHANCEMENTS
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.optionalAddons.map((addon, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 bg-white border border-[#EAE6DF] rounded-[3px] flex items-center justify-between group hover:border-[#B9A078] shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-sm text-[#101C29] font-light">
                      {addon.label}
                    </span>
                    <span className="font-serif text-lg sm:text-xl text-[#9E8357] font-normal tracking-tight">
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
              <p className="text-xs text-[#101C29]/75 italic font-light">
                {content.gratuityNote}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
