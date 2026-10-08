import Image from "next/image";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { Heading } from "../ui/Heading";

export interface SpecsTableProps {
  eyebrow: string;
  headline: string;
  image: {
    src: string;
    alt: string;
    caption?: string;
  };
  items: Array<{ label: string; value: string }>;
  background?: "navy" | "navyLight" | "deep";
}

export function SpecsTable({
  eyebrow,
  headline,
  image,
  items,
  background = "deep",
}: SpecsTableProps) {
  return (
    <Section background={background} border="both">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Framed Running Profile Photo */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-white/10 shadow-2xl group">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-haven-deep/40 via-transparent to-transparent pointer-events-none" />
            </div>
            {image.caption && (
              <p className="mt-3 text-xs text-haven-slate/70 tracking-widest uppercase">
                {image.caption}
              </p>
            )}
          </div>

          {/* Right Column: Specifications Table */}
          <div className="lg:col-span-6">
            <Eyebrow className="mb-3 text-haven-gold tracking-[0.3em]">
              {eyebrow}
            </Eyebrow>

            <Heading level={2} className="mb-8">
              {headline}
            </Heading>

            {/* Specification Rows */}
            <div className="divide-y divide-white/10 border-y border-white/10">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="py-3.5 sm:py-4 flex items-center justify-between gap-4"
                >
                  <span className="text-xs sm:text-sm font-light text-haven-slate uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm font-light text-haven-cream text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
