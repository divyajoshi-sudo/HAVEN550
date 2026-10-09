import React from "react";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Divider } from "../ui/Divider";
import { Eyebrow } from "../ui/Eyebrow";
import { Heading } from "../ui/Heading";

export interface ProseBlockProps {
  eyebrow?: string;
  headline?: string;
  paragraphs?: string[];
  items?: string[];
  background?: "navy" | "navyLight" | "deep";
  children?: React.ReactNode;
}

export function ProseBlock({
  eyebrow,
  headline,
  paragraphs,
  items,
  background = "navyLight",
  children,
}: ProseBlockProps) {
  return (
    <Section background={background} border="top">
      <Container size="narrow">
        {(eyebrow || headline) && (
          <div className="text-center mb-10">
            {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
            <Divider variant="short" centered />
            {headline && <Heading level={2}>{headline}</Heading>}
          </div>
        )}

        {paragraphs && paragraphs.length > 0 && (
          <div className="space-y-4 text-haven-cream/75 text-sm sm:text-base leading-relaxed font-light mb-8 text-center max-w-2xl mx-auto">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        {items && items.length > 0 && (
          <ul className="space-y-3 mb-8">
            {items.map((item, i) => (
              <li
                key={i}
                className="text-sm sm:text-base text-haven-cream/80 font-light flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-haven-gold mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {children}
      </Container>
    </Section>
  );
}
