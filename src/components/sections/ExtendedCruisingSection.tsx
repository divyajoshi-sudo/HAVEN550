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
      className={`min-h-screen flex flex-col justify-center py-20 md:py-28 relative overflow-hidden transition-colors duration-300 ${isLight
          ? "bg-[#EFECE5] text-[#111A22] border-t border-b border-[#D8D2C6]"
          : "bg-[#101C29] text-white border-t border-b border-white/10"
        }`}
    >
      {!isLight && (
        <div className="absolute inset-0 ambient-glow-navy pointer-events-none" />
      )}
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" duration={0.85}>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[1px] bg-[#B9A078]" />
                <p
                  className={`text-xs sm:text-sm tracking-[0.35em] uppercase font-light ${isLight ? "text-[#9E8357]" : "text-[#B9A078]"
                    }`}
                >
                  {content.eyebrow}
                </p>
              </div>

              <h2
                className={`font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-8 ${isLight ? "text-[#111A22]" : "text-white"
                  }`}
              >
                {content.headline}
              </h2>

              <div
                className={`space-y-4 text-base sm:text-lg font-light leading-relaxed mb-10 max-w-xl text-left ${isLight ? "text-[#4F5862]" : "text-white/80"
                  }`}
              >
                {content.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <Link
                href={content.cta.href}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#B9A078] text-[#0B141D] text-[0.7rem] tracking-[0.25em] uppercase font-medium hover:bg-[#D4AF37] transition-all duration-300 shadow-xl group cursor-pointer"
              >
                <span>{content.cta.label}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
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
