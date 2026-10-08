import Image from "next/image";
import { Container } from "../layout/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Heading } from "../ui/Heading";

export interface PersonalizeDiningSectionProps {
  content: {
    eyebrow: string;
    headline: string;
    paragraphs: string[];
    note?: string;
    image: {
      src: string;
      alt: string;
      caption?: string;
    };
  };
}

export function PersonalizeDiningSection({ content }: PersonalizeDiningSectionProps) {
  return (
    <section className="py-24 md:py-32 bg-haven-deep border-t border-b border-white/5 relative">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with frame & caption */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden border border-haven-gold/30 shadow-2xl">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-haven-deep/60 via-transparent to-transparent" />
            </div>

            {content.image.caption && (
              <div className="mt-3 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-haven-gold/60" />
                <span className="text-xs text-haven-gold/80 tracking-widest uppercase font-light">
                  {content.image.caption}
                </span>
              </div>
            )}
          </div>

          {/* Right Column: Copy & Policy note */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3">
              <Eyebrow className="text-haven-gold tracking-[0.3em]">
                {content.eyebrow}
              </Eyebrow>
              <span className="w-8 h-[1px] bg-haven-gold/40" />
            </div>

            {/* Headline */}
            <Heading level={2} className="mb-6 text-3xl sm:text-4xl md:text-5xl">
              {content.headline}
            </Heading>

            {/* Paragraphs */}
            <div className="space-y-4 mb-8 text-sm sm:text-base text-haven-cream/80 font-light leading-relaxed">
              {content.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Accent divider */}
            <div className="w-16 h-[1px] bg-haven-gold/30 mb-6" />

            {/* Policy & Provisioning Note */}
            {content.note && (
              <div className="p-4 rounded-sm border border-haven-gold/20 bg-haven-navy/40 backdrop-blur-sm">
                <p className="text-xs sm:text-sm text-haven-cream/65 font-light leading-relaxed italic">
                  {content.note}
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
