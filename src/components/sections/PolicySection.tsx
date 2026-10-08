import type { PolicyClause } from "@/types/content";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Card } from "../ui/Card";

export interface PolicySectionProps {
  sections: PolicyClause[];
  lastUpdated?: string;
}

export function PolicySection({ sections, lastUpdated }: PolicySectionProps) {
  return (
    <Section background="navy">
      <Container size="narrow">
        {lastUpdated && (
          <p className="text-xs text-haven-slate/70 tracking-widest uppercase mb-10 text-right">
            Last Updated: {lastUpdated}
          </p>
        )}

        <div className="space-y-8">
          {sections.map((clause, index) => (
            <Card key={index} className="p-8 sm:p-10" hoverable={false}>
              <div className="flex items-baseline gap-4 mb-4">
                {clause.number && (
                  <span className="text-sm font-mono tracking-widest text-haven-gold">
                    {clause.number}
                  </span>
                )}
                <h2 className="font-[family-name:var(--font-playfair)] font-serif text-2xl sm:text-3xl font-light text-haven-cream">
                  {clause.title}
                </h2>
              </div>
              <div className="space-y-4 text-haven-cream/75 text-sm sm:text-base leading-relaxed font-light pl-0 sm:pl-8">
                {clause.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
