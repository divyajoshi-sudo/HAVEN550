import type { FaqContent } from "@/types/content";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Card } from "../ui/Card";
import { Divider } from "../ui/Divider";
import { Eyebrow } from "../ui/Eyebrow";
import { Heading } from "../ui/Heading";

export interface FaqListProps {
  content: FaqContent;
  background?: "navy" | "navyLight" | "deep";
}

export function FaqList({ content, background = "navy" }: FaqListProps) {
  return (
    <Section background={background}>
      <Container size="narrow">
        <div className="text-center mb-16">
          {content.eyebrow && (
            <Eyebrow className="mb-3">{content.eyebrow}</Eyebrow>
          )}
          <Divider variant="short" centered />
          <Heading level={2}>{content.headline}</Heading>
        </div>

        <div className="space-y-6">
          {content.items.map((item, index) => (
            <Card key={index} className="p-6 sm:p-8" hoverable={false}>
              <h3 className="font-[family-name:var(--font-cormorant)] font-serif text-xl sm:text-2xl font-medium text-haven-cream mb-3">
                {item.question}
              </h3>
              <p className="text-sm sm:text-base text-haven-cream/75 font-light leading-relaxed">
                {item.answer}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
