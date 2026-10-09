import Image from "next/image";
import type { FeatureGridContent } from "@/types/content";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Heading } from "../ui/Heading";

export interface FeatureGridProps {
  content: FeatureGridContent;
  background?: "navy" | "navyLight" | "deep";
  border?: "top" | "bottom" | "both" | "none";
}

export function FeatureGrid({
  content,
  background = "navy",
  border = "none",
}: FeatureGridProps) {
  const columnStyles = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  const columns = content.columns || 4;

  return (
    <Section background={background} border={border} className="py-20 md:py-28">
      <Container size="default">
        {/* Header: Left aligned if no headline, or centered if full headline */}
        {content.eyebrow && (
          <div className="mb-10 text-left">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-haven-gold uppercase font-light">
              {content.eyebrow}
            </p>
            {content.headline && (
              <Heading level={2} className="mt-4 mb-4">
                {content.headline}
              </Heading>
            )}
            {content.description && (
              <p className="text-haven-cream/70 text-sm sm:text-base font-light leading-relaxed mt-2 text-left max-w-2xl">
                {content.description}
              </p>
            )}
          </div>
        )}

        {/* 4 Cards Grid */}
        <div className={`grid ${columnStyles[columns]} gap-6`}>
          {content.items.map((item, index) => (
            <div
              key={item.title || index}
              className="group flex flex-col bg-haven-deep/70 backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden transition-all duration-500 hover:border-haven-gold/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-haven-gold/5"
            >
              {/* Image Frame */}
              {item.image && (
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-haven-deep">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-haven-deep/50 via-transparent to-transparent pointer-events-none group-hover:opacity-40 transition-opacity duration-300" />
                </div>
              )}

              {/* Card Text Content */}
              <div className="p-6 flex-1 flex flex-col justify-start">
                <h3 className="font-serif text-xl sm:text-2xl text-haven-cream font-normal mb-3 leading-snug group-hover:text-haven-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-haven-cream/70 text-xs sm:text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
