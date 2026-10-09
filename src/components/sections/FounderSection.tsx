import Image from "next/image";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface FounderSectionProps {
  content: {
    eyebrow: string;
    name: string;
    title: string;
    paragraphs: string[];
    image?: { src: string; alt: string };
  };
}

export function FounderSection({ content }: FounderSectionProps) {
  return (
    <Section background="deep" className="py-24 md:py-32 text-white relative border-t border-b border-white/10 bg-[#0B141D] overflow-hidden">
      <div className="absolute inset-0 ambient-glow-gold pointer-events-none" />
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          {content.image && (
            <div className="lg:col-span-5 order-1 lg:order-1">
              <ScrollReveal direction="left" duration={0.85}>
                <div className="relative aspect-[4/5] overflow-hidden border border-[#B9A078]/40 shadow-2xl group img-editorial">
                  <Image
                    src={content.image.src}
                    alt={content.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[0.62rem] tracking-[0.3em] uppercase text-[#B9A078] font-medium block mb-1">
                      LEADERSHIP
                    </span>
                    <span className="font-serif text-xl text-white font-light">
                      {content.name}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}

          {/* Text Column */}
          <div className="lg:col-span-7 order-2 lg:order-2">
            <ScrollReveal direction="right" duration={0.85} delay={120}>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[1px] bg-[#B9A078]" />
                <p className="text-xs sm:text-sm tracking-[0.35em] text-[#B9A078] uppercase font-light">
                  {content.eyebrow}
                </p>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-2">
                {content.name}
              </h2>

              <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#B9A078] font-medium mb-8">
                {content.title}
              </p>

              <div className="w-16 h-[1.5px] bg-[#B9A078]/70 mb-8" />

              <div className="space-y-4 text-white/80 text-base sm:text-lg font-light leading-relaxed max-w-xl text-left">
                {content.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
