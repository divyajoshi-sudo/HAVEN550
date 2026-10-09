import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface CharterPolicyItem {
  title: string;
  body: string | string[];
}

export interface CharterPoliciesSectionProps {
  content: {
    headline: string;
    items: CharterPolicyItem[];
    closingNote: string;
  };
}

export function CharterPoliciesSection({
  content,
}: CharterPoliciesSectionProps) {
  return (
    <Section background="deep" className="py-24 md:py-32 text-white relative border-t border-b border-white/10 bg-[#0B141D] overflow-hidden">
      <div className="absolute inset-0 ambient-glow-gold pointer-events-none" />
      <Container size="default">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <ScrollReveal direction="up" duration={0.85}>
            <div className="text-center mb-16">
              <span className="text-xs sm:text-sm tracking-[0.35em] text-[#B9A078] uppercase font-light block mb-3">
                IMPORTANT INFORMATION
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
                {content.headline}
              </h2>
              <div className="w-16 h-[1.5px] bg-[#B9A078]/70 mx-auto mt-6" />
            </div>
          </ScrollReveal>

          {/* Policy Clauses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {content.items.map((item, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                duration={0.75}
                delay={idx * 100}
              >
                <div
                  className="p-7 bg-[#101C29]/80 border border-white/10 shadow-xl luxury-card h-full"
                >
                  <h3 className="font-serif text-xl sm:text-2xl text-[#B9A078] font-light mb-3">
                    {item.title}
                  </h3>

                  {Array.isArray(item.body) ? (
                    <div className="space-y-2 text-white/80 text-sm font-light leading-relaxed">
                      {item.body.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-white/80 text-sm font-light leading-relaxed">
                      {item.body}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Closing Note */}
          <ScrollReveal direction="up" duration={0.8} delay={180}>
            <div className="p-5 bg-white/5 border border-white/10 text-center">
              <p className="text-xs sm:text-sm text-white/70 italic font-light">
                {content.closingNote}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
