import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface BoardingLocationsSectionProps {
  content: {
    eyebrow: string;
    headline: string;
    lead: string;
    locations: Array<{
      name: string;
      city: string;
    }>;
    notice: string;
    pickupPolicy: string;
  };
}

export function BoardingLocationsSection({
  content,
}: BoardingLocationsSectionProps) {
  return (
    <Section background="deep" className="py-24 md:py-32 text-white relative border-t border-b border-white/10 bg-[#0B141D] overflow-hidden">
      <div className="absolute inset-0 ambient-glow-gold pointer-events-none opacity-30" />
      <Container size="default">
        {/* Header */}
        <ScrollReveal direction="up" duration={0.85} className="w-full">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1.5px] bg-[#B9A078]" />
              <p className="text-xs sm:text-sm tracking-[0.28em] text-[#B9A078] uppercase font-sans font-medium">
                {content.eyebrow}
              </p>
              <span className="w-8 h-[1.5px] bg-[#B9A078]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-normal text-white tracking-tight leading-[1.2] mb-4 text-center">
              {content.headline}
            </h2>

            <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed text-center max-w-xl mx-auto">
              {content.lead}
            </p>
          </div>
        </ScrollReveal>

        {/* 2 Boarding Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-14">
          {content.locations.map((loc, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={0.8}
              delay={idx * 160}
              className="h-full"
            >
              <div className="relative h-full p-10 sm:p-12 bg-gradient-to-b from-[#101C29] to-[#0C1720] border border-white/[0.08] rounded-[3px] shadow-2xl flex flex-col items-center justify-center text-center group hover:border-[#B9A078]/50 transition-all duration-700 overflow-hidden">
                {/* Subtle shimmer accent at top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[1px] bg-gradient-to-r from-transparent via-[#B9A078]/50 to-transparent" />

                {/* Location number pill */}
                <span className="text-[0.6rem] tracking-[0.35em] uppercase text-[#B9A078]/80 font-sans font-medium mb-5 block">
                  LOCATION 0{idx + 1}
                </span>

                {/* Pin icon in elegant circle */}
                <div className="w-14 h-14 rounded-full border border-[#B9A078]/30 bg-[#B9A078]/[0.06] flex items-center justify-center mb-6 group-hover:border-[#B9A078]/60 group-hover:bg-[#B9A078]/[0.1] transition-all duration-500">
                  <svg
                    className="w-5 h-5 text-[#B9A078]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>

                {/* Location Name */}
                <h3 className="font-serif text-2xl sm:text-[28px] text-white font-normal tracking-tight leading-tight mb-3 group-hover:text-[#F7F5F0] transition-colors duration-300">
                  {loc.name}
                </h3>

                {/* Gold divider */}
                <div className="w-10 h-[1px] bg-[#B9A078]/40 mb-3 group-hover:w-14 transition-all duration-500" />

                {/* City */}
                <p className="text-white/55 text-xs sm:text-sm tracking-[0.18em] uppercase font-light">
                  {loc.city}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Notice & Pickup Policy */}
        <ScrollReveal direction="up" duration={0.8} delay={280} className="w-full">
          <div className="max-w-3xl mx-auto text-center space-y-2.5">
            <p className="text-sm text-white/65 font-light leading-relaxed">
              {content.notice}
            </p>
            <p className="text-xs text-[#B9A078]/80 italic font-light">
              {content.pickupPolicy}
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
