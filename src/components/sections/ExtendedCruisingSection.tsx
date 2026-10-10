import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface ExtendedCruisingSectionProps {
  content: {
    eyebrow: string;
    headline: string;
    paragraphs: string[];
    cta: { label: string; href: string };
    image?: { src: string; alt: string };
  };
  background?: "navy" | "ivory";
}

export function ExtendedCruisingSection({
  content,
  background = "ivory",
}: ExtendedCruisingSectionProps) {
  const isLight = background === "ivory";

  return (
    <section
      className="min-h-screen lg:h-screen flex flex-col justify-center py-10 lg:py-6 relative overflow-hidden transition-colors duration-300 bg-white text-[#101C29] border-t border-b border-[#EAE6DF]"
    >
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" duration={0.85}>
              <div className="flex items-center gap-3 mb-2.5">
                <span className="w-8 h-[1px] bg-[#B9A078]" />
                <p
                  className={`text-xs sm:text-sm tracking-[0.35em] uppercase font-light ${isLight ? "text-[#9E8357]" : "text-[#B9A078]"
                    }`}
                >
                  {content.eyebrow}
                </p>
              </div>

              <h2
                className={`font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 ${isLight ? "text-[#101C29]" : "text-white"
                  }`}
              >
                {content.headline}
              </h2>

              <div
                className={`space-y-3 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-6 max-w-xl text-left ${isLight ? "text-[#101C29]/80" : "text-white/80"
                  }`}
              >
                {content.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <Link
                href={content.cta.href}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-[180px] h-[50px] px-3 bg-[#101C29] hover:bg-[#182A3E] text-white text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-medium transition-all duration-300 shadow-xl group cursor-pointer rounded-[1px] whitespace-nowrap"
              >
                <span>{content.cta.label}</span>
                <span className="text-[13px] font-light leading-none group-hover:translate-x-0.5 transition-transform">›</span>
              </Link>
            </ScrollReveal>
          </div>

          {/* Image Column */}
          {content.image && (
            <div className="lg:col-span-5">
              <ScrollReveal direction="right" duration={0.85} delay={120}>
                <div className="relative aspect-[4/3] overflow-hidden border border-[#B9A078]/30 shadow-2xl group img-editorial">
                  <Image
                    src={content.image.src}
                    alt={content.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </ScrollReveal>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
