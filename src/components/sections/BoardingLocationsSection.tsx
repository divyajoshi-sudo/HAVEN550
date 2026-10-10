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
    <Section background="navy" fullHeight={true} className="min-h-screen lg:h-screen flex flex-col justify-center py-10 lg:py-6 text-[#101C29] relative border-t border-b border-[#EAE6DF] bg-white overflow-hidden">
      <Container size="default">
        {/* Header */}
        <ScrollReveal direction="up" duration={0.85} className="w-full">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-8">
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

            <p className="text-[#101C29]/80 text-sm sm:text-base font-light leading-relaxed text-center max-w-xl mx-auto">
              {content.lead}
            </p>
          </div>
        </ScrollReveal>

        {/* 2 Boarding Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-8">
          {content.locations.map((loc, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={0.8}
              delay={idx * 160}
              className="h-full"
            >
              <div className="relative h-full p-8 sm:p-10 bg-white border border-[#EAE6DF] rounded-[3px] shadow-sm hover:shadow-md flex flex-col items-center justify-center text-center group hover:border-[#B9A078] transition-all duration-300 overflow-hidden">
                {/* Subtle gold accent at top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[1.5px] bg-[#B9A078]" />

                {/* Location number pill */}
                <span className="text-[0.6rem] tracking-[0.35em] uppercase text-[#9E8357] font-sans font-medium mb-4 block">
                  LOCATION 0{idx + 1}
                </span>

                {/* Pin icon in elegant circle */}
                <div className="w-12 h-12 rounded-full border border-[#B9A078]/40 bg-[#B9A078]/[0.08] flex items-center justify-center mb-5 group-hover:border-[#B9A078] group-hover:bg-[#B9A078]/[0.15] transition-all duration-300">
                  <svg
                    className="w-5 h-5 text-[#9E8357]"
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
                <h3 className="font-serif text-2xl sm:text-[28px] text-[#101C29] font-normal tracking-tight leading-tight mb-2.5">
                  {loc.name}
                </h3>

                {/* Gold divider */}
                <div className="w-10 h-[1px] bg-[#B9A078]/40 mb-2.5 group-hover:w-14 transition-all duration-300" />

                {/* City */}
                <p className="text-[#101C29]/75 text-xs sm:text-sm tracking-[0.18em] uppercase font-light">
                  {loc.city}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Notice & Pickup Policy */}
        <ScrollReveal direction="up" duration={0.8} delay={280} className="w-full">
          <div className="max-w-3xl mx-auto text-center space-y-2">
            <p className="text-sm text-[#101C29]/80 font-light leading-relaxed">
              {content.notice}
            </p>
            <p className="text-xs text-[#9E8357] italic font-light">
              {content.pickupPolicy}
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
