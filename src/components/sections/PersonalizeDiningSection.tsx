import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Heading } from "../ui/Heading";
import { ScrollReveal } from "../ui/ScrollReveal";

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
    <section className="min-h-screen flex flex-col justify-center py-20 md:py-28 bg-[#0B141D] border-t border-b border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 ambient-glow-gold pointer-events-none" />
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with frame & caption */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="left" duration={0.85}>
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#B9A078]/40 shadow-2xl img-editorial">
                <Image
                  src={content.image.src}
                  alt={content.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {content.image.caption && (
                <div className="mt-3 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-[#B9A078]/60" />
                  <span className="text-xs text-[#B9A078]/90 tracking-widest uppercase font-light">
                    {content.image.caption}
                  </span>
                </div>
              )}
            </ScrollReveal>
          </div>

          {/* Right Column: Copy & Policy note */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <ScrollReveal direction="right" duration={0.85} delay={120}>
              {/* Eyebrow */}
              <div className="mb-4 flex items-center gap-3">
                <Eyebrow className="text-[#B9A078] tracking-[0.3em]">
                  {content.eyebrow}
                </Eyebrow>
                <span className="w-8 h-[1px] bg-[#B9A078]/40" />
              </div>

              {/* Headline */}
              <Heading level={2} className="mb-6 text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white">
                {content.headline}
              </Heading>

              {/* Paragraphs */}
              <div className="space-y-4 mb-8 text-sm sm:text-base text-white/80 font-light leading-relaxed text-left max-w-xl">
                {content.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Accent divider */}
              <div className="w-16 h-[1.5px] bg-[#B9A078]/50 mb-6" />

              {/* Policy & Provisioning Note */}
              {content.note && (
                <div className="p-4 border border-[#B9A078]/25 bg-[#101C29]/60 backdrop-blur-sm mb-6">
                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed italic">
                    {content.note}
                  </p>
                </div>
              )}

              <div>
                <Link
                  href="/contact?service=steward-provisioning"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#B9A078] text-[#0B141D] text-[0.7rem] tracking-[0.25em] uppercase font-medium hover:bg-[#D4AF37] transition-all duration-300 shadow-xl group cursor-pointer"
                >
                  <span>COORDINATE WITH LILY</span>
                  <span className="transition-transform group-hover:translate-x-1.5">→</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
