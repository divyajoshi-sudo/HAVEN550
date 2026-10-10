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
    <section
      style={{ backgroundColor: "#081018", color: "#F8F8F6" }}
      className="relative min-h-screen lg:h-screen flex flex-col justify-center pt-24 pb-14 md:pt-28 md:pb-16 overflow-hidden bg-[#081018] text-[#F8F8F6] border-b border-white/10"
    >
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
          {/* Dynamic Scrim Gradient */}
          <div className="absolute inset-0 dynamic-scrim pointer-events-none" />
          <div className="absolute inset-0 bg-[#081018]/45 pointer-events-none" />
        </div>
      )}

      {/* Hero Content */}
      <Container size="default" className="relative z-10 text-center flex flex-col items-center">
        <div className="mb-4 inline-block animate-fade-in">
          <Eyebrow withLines>{content.eyebrow}</Eyebrow>
        </div>

        <h1
          style={{
            color: "#F8F8F6",
            textShadow: "0 2px 14px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.95)",
          }}
          className="mb-6 font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-light leading-[1.05] max-w-[850px] animate-fade-in-up text-[#F8F8F6]"
        >
          {content.headline}
        </h1>

        {(content as any).paragraphs ? (
          <div className="space-y-3 max-w-[620px] mx-auto text-base sm:text-lg text-[#F8F8F6] font-light leading-[1.7] animate-fade-in-up delay-100 text-center">
            {(content as any).paragraphs.map((p: string, idx: number) => (
              <p
                key={idx}
                style={{
                  color: "#F8F8F6",
                  textShadow: "0 1px 6px rgba(0,0,0,0.8)",
                }}
              >
                {p}
              </p>
            ))}
          </div>
        ) : content.description ? (
          <p
            style={{
              color: "#F8F8F6",
              textShadow: "0 1px 6px rgba(0,0,0,0.8)",
            }}
            className="text-base sm:text-lg text-[#F8F8F6] font-light leading-[1.7] max-w-[620px] mx-auto animate-fade-in-up delay-100 text-center"
          >
            {content.description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
