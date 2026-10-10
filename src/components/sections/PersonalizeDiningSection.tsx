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
    <section className="min-h-screen lg:h-screen flex flex-col justify-center py-10 lg:py-6 bg-white border-t border-b border-[#EAE6DF] relative overflow-hidden text-[#101C29]">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
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
                  <span className="text-xs text-[#9E8357] tracking-widest uppercase font-light">
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
              <div className="mb-3 flex items-center gap-3">
                <Eyebrow className="text-[#9E8357] tracking-[0.3em]">
                  {content.eyebrow}
                </Eyebrow>
                <span className="w-8 h-[1px] bg-[#B9A078]/40" />
              </div>

              {/* Headline */}
              <Heading level={2} className="mb-4 text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#101C29]">
                {content.headline}
              </Heading>

              {/* Paragraphs */}
              <div className="space-y-3 mb-6 text-sm sm:text-base text-[#101C29] font-light leading-relaxed text-left max-w-xl">
                {content.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Accent divider */}
              <div className="w-16 h-[1.5px] bg-[#B9A078]/50 mb-5" />

              {/* Policy & Provisioning Note */}
              {content.note && (
                <div className="p-4 border border-[#EAE6DF] bg-white shadow-sm mb-6">
                  <p className="text-xs sm:text-sm text-[#101C29]/85 font-light leading-relaxed italic">
                    {content.note}
                  </p>
                </div>
              )}

              <div>
                <Link
                  href="/contact?service=steward-provisioning"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-[180px] h-[50px] px-3 bg-[#101C29] hover:bg-[#182A3E] text-white text-[11px] sm:text-[12px] tracking-[0.14em] uppercase font-medium transition-all duration-300 shadow-xl group cursor-pointer rounded-[1px] whitespace-nowrap"
                >
                  <span>COORDINATE WITH LILY</span>
                  <span className="text-[13px] font-light leading-none group-hover:translate-x-0.5 transition-transform">›</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
