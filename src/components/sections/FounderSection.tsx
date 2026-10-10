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
    <Section background="navy" fullHeight={true} className="min-h-screen lg:h-screen flex flex-col justify-center py-10 lg:py-6 text-[#101C29] relative border-t border-b border-[#EAE6DF] bg-white overflow-hidden">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Image Column */}
          {content.image && (
            <div className="lg:col-span-5 order-1 lg:order-1">
              <ScrollReveal direction="left" duration={0.85}>
                <div className="relative aspect-[4/5] max-h-[460px] overflow-hidden border border-[#EAE6DF] shadow-md hover:shadow-lg transition-all group img-editorial">
                  <Image
                    src={content.image.src}
                    alt={content.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

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
              <div className="flex items-center gap-3 mb-2.5">
                <span className="w-8 h-[1px] bg-[#B9A078]" />
                <p className="text-xs sm:text-sm tracking-[0.35em] text-[#9E8357] uppercase font-light">
                  {content.eyebrow}
                </p>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#101C29] tracking-tight mb-2">
                {content.name}
              </h2>

              <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#9E8357] font-medium mb-6">
                {content.title}
              </p>

              <div className="w-16 h-[1.5px] bg-[#B9A078]/70 mb-6" />

              <div className="space-y-3 text-[#101C29]/80 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl text-left">
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
