import Link from "next/link";
import type {
  PolicyClause,
  PolicyDisclaimer,
  PolicyHighlight,
} from "@/types/content";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Card } from "../ui/Card";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface PolicySectionProps {
  sections: PolicyClause[];
  lastUpdated?: string;
  highlights?: PolicyHighlight[];
  disclaimer?: PolicyDisclaimer;
  cta?: {
    eyebrow?: string;
    headline: string;
    description?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  };
}

export function PolicySection({
  sections,
  lastUpdated,
  highlights,
  disclaimer,
  cta,
}: PolicySectionProps) {
  return (
    <Section background="navy" className="py-16 md:py-24 relative overflow-hidden bg-white text-[#101C29] border-t border-b border-[#EAE6DF]">
      <Container size="default">
        {/* Optional Last Updated */}
        {lastUpdated && (
          <div className="max-w-4xl mx-auto flex items-center justify-end mb-8">
            <span className="text-[0.68rem] tracking-[0.25em] uppercase text-[#9E8357] font-light">
              Effective Date: {lastUpdated}
            </span>
          </div>
        )}

        {/* Highlights Grid (if provided) */}
        {highlights && highlights.length > 0 && (
          <div className="mb-16">
            <ScrollReveal direction="up" duration={0.85}>
              <div className="text-center mb-8">
                <span className="text-xs tracking-[0.35em] text-[#9E8357] uppercase font-light block mb-2">
                  AT A GLANCE
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#101C29] font-light">
                  Key Guidelines
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {highlights.map((item, idx) => (
                <ScrollReveal
                  key={idx}
                  direction="up"
                  duration={0.75}
                  delay={idx * 100}
                >
                  <div
                    className="bg-white border border-[#EAE6DF] p-6 flex flex-col justify-between hover:border-[#B9A078] transition-all duration-300 shadow-sm hover:shadow-md h-full rounded-[2px]"
                  >
                    <span className="text-[0.62rem] tracking-[0.22em] uppercase text-[#101C29]/70 block mb-2 font-medium">
                      {item.label}
                    </span>
                    <div className="font-serif text-xl sm:text-2xl text-[#9E8357] font-light mb-2">
                      {item.value}
                    </div>
                    <p className="text-xs sm:text-sm text-[#101C29]/80 font-light leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* Policy Clauses Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          <ScrollReveal direction="up" duration={0.85}>
            <div className="border-b border-[#EAE6DF] pb-4 mb-8">
              <span className="text-xs tracking-[0.35em] text-[#9E8357] uppercase font-light block mb-1">
                OPERATIONAL PROVISIONS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#101C29] font-light">
                Complete Terms &amp; Policies
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {sections.map((clause, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                duration={0.75}
                delay={index * 60}
              >
                <Card
                  className="p-6 sm:p-8 bg-white border border-[#EAE6DF] hover:border-[#B9A078] transition-all duration-300 shadow-sm text-[#101C29]"
                  hoverable={false}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    {clause.number && (
                      <span className="shrink-0 w-8 h-8 rounded-none border border-[#B9A078]/40 flex items-center justify-center text-xs font-mono tracking-wider text-[#9E8357] bg-[#B9A078]/10 mt-0.5">
                        {clause.number}
                      </span>
                    )}
                    <div className="flex-1 space-y-3">
                      <h3 className="font-serif text-xl sm:text-2xl font-light text-[#101C29] tracking-wide">
                        {clause.title}
                      </h3>
                      <div className="space-y-2 text-[#101C29]/80 text-sm sm:text-base leading-relaxed font-light">
                        {clause.body.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Disclaimer / Regulatory Note Box */}
        {disclaimer && (
          <ScrollReveal direction="up" duration={0.85} delay={150}>
            <div className="max-w-4xl mx-auto mt-12">
              <div className="bg-white border border-[#B9A078]/40 p-6 sm:p-8 shadow-sm rounded-[2px]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-[1px] bg-[#B9A078]" />
                  <span className="text-[0.65rem] tracking-[0.25em] uppercase text-[#9E8357] font-medium">
                    {disclaimer.badge || "IMPORTANT NOTICE"}
                  </span>
                </div>
                <h4 className="font-serif text-lg sm:text-xl text-[#101C29] font-light mb-3">
                  {disclaimer.title}
                </h4>
                <p className="text-[#101C29]/80 text-sm sm:text-base font-light leading-relaxed">
                  {disclaimer.body}
                </p>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* CTA Footer */}
        {cta && (
          <ScrollReveal direction="up" duration={0.85} delay={200}>
            <div className="max-w-4xl mx-auto mt-16 text-center bg-white border border-[#EAE6DF] p-8 sm:p-12 shadow-sm rounded-[2px]">
              {cta.eyebrow && (
                <span className="text-xs tracking-[0.35em] text-[#9E8357] uppercase font-light block mb-3">
                  {cta.eyebrow}
                </span>
              )}
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#101C29] font-light mb-4">
                {cta.headline}
              </h3>
              {cta.description && (
                <p className="text-[#101C29]/80 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto mb-8">
                  {cta.description}
                </p>
              )}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {cta.primaryCta && (
                  <Link
                    href={cta.primaryCta.href}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-[180px] h-[50px] px-3 bg-[#101C29] hover:bg-[#182A3E] text-white text-[11px] sm:text-[12px] tracking-[0.15em] uppercase font-medium transition-all duration-300 text-center shadow-lg cursor-pointer rounded-[1px] whitespace-nowrap group"
                  >
                    <span>{cta.primaryCta.label}</span>
                    <span className="text-[13px] font-light leading-none group-hover:translate-x-0.5 transition-transform">›</span>
                  </Link>
                )}
                {cta.secondaryCta && (
                  <a
                    href={cta.secondaryCta.href}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-[180px] h-[50px] px-3 bg-[#101C29] hover:bg-[#182A3E] text-white text-[11px] sm:text-[12px] tracking-[0.15em] uppercase font-medium transition-all duration-300 text-center shadow-lg cursor-pointer rounded-[1px] whitespace-nowrap group"
                  >
                    <span>{cta.secondaryCta.label}</span>
                    <span className="text-[13px] font-light leading-none group-hover:translate-x-0.5 transition-transform">›</span>
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>
        )}
      </Container>
    </Section>
  );
}
