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
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-[#0C141D] border-b border-white/10">
      {/* Background Image if present */}
      {content.image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center animate-ken-burns"
          />
          {/* Dynamic Scrim Gradient — Guarantees 7:1 contrast while preserving rich ocean imagery */}
          <div className="absolute inset-0 dynamic-scrim pointer-events-none" />
        </div>
      )}

      {/* Hero Content */}
      <Container size="default" className="relative z-10 text-center flex flex-col items-center">
        <div className="mb-4 inline-block animate-fade-in">
          <Eyebrow withLines>{content.eyebrow}</Eyebrow>
        </div>

        <Heading
          level={1}
          className="mb-6 font-serif font-hero-fluid font-light text-white leading-[1.05] max-w-[850px] animate-fade-in-up"
        >
          {content.headline}
        </Heading>

        {(content as any).paragraphs ? (
          <div className="space-y-3 max-w-[620px] mx-auto text-base sm:text-lg text-white/85 font-light leading-[1.7] animate-fade-in-up delay-100 text-center">
            {(content as any).paragraphs.map((p: string, idx: number) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        ) : content.description ? (
          <p className="text-base sm:text-lg text-white/85 font-light leading-[1.7] max-w-[620px] mx-auto animate-fade-in-up delay-100 text-center">
            {content.description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
