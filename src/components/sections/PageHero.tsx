import Image from "next/image";
import type { PageHeroContent } from "@/types/content";
import { Container } from "../layout/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Heading } from "../ui/Heading";

export interface PageHeroProps {
  content: PageHeroContent;
}

export function PageHero({ content }: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-haven-deep border-b border-white/5">
      {/* Background Image if present */}
      {content.image && (
        <div className="absolute inset-0">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-haven-deep via-haven-navy/80 to-haven-deep" />
        </div>
      )}

      {/* Hero Content */}
      <Container size="narrow" className="relative z-10 text-center">
        <div className="mb-4">
          <Eyebrow withLines>{content.eyebrow}</Eyebrow>
        </div>

        <Heading level={1} className="mb-6">
          {content.headline}
        </Heading>

        {content.description && (
          <p className="text-sm sm:text-base md:text-lg text-haven-cream/75 font-light leading-relaxed max-w-2xl mx-auto">
            {content.description}
          </p>
        )}
      </Container>
    </section>
  );
}
