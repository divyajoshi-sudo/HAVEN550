import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";
import { ScrollReveal } from "../ui/ScrollReveal";

export interface PossibilityItem {
  title: string;
  description: string;
  image: { src: string; alt: string };
  ctaHref?: string;
  buttonLabel?: string;
}

export interface PossibilitiesGridProps {
  content: {
    eyebrow: string;
    headline: string;
    subheadline?: string;
    items: PossibilityItem[];
  };
}

// Helper to provide punchy action labels matching the reference design
function getDefaultButtonLabel(title: string): string {
  const t = title.toLowerCase();
  if (t.includes("coastal")) return "EXPLORE COASTAL ESCAPES";
  if (t.includes("birthday") || t.includes("celebration")) return "PLAN A CELEBRATION";
  if (t.includes("anniversary") || t.includes("romantic")) return "BOOK ROMANTIC CRUISE";
  if (t.includes("corporate")) return "PLAN CORPORATE OUTING";
  if (t.includes("sunset")) return "RESERVE SUNSET CRUISE";
  if (t.includes("water")) return "DISCOVER WATER ACTIVITIES";
  return "EXPLORE THIS CHARTER";
}

export function PossibilitiesGrid({ content }: PossibilitiesGridProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20 md:py-28 bg-[#EFECE5] text-[#08182B] relative overflow-hidden border-t border-b border-[#D8D2C6]">
      <Container size="default">
        {/* Centered Editorial Header (Matching Reference Image) */}
        <ScrollReveal direction="up" duration={0.85} className="w-full flex justify-center">
          <div className="w-full max-w-3xl mx-auto text-center flex flex-col items-center mb-16 md:mb-20">
            {content.eyebrow && (
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-8 h-[1.5px] bg-[#B9A078]" />
                <p className="text-xs sm:text-sm tracking-[0.28em] text-[#9E8357] uppercase font-sans font-medium">
                  {content.eyebrow}
                </p>
                <span className="w-8 h-[1.5px] bg-[#B9A078]" />
              </div>
            )}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-[#08182B] font-normal tracking-tight leading-[1.2] mb-4 text-center mx-auto w-full">
              {content.headline}
            </h2>
            {content.subheadline && (
              <p className="text-sm sm:text-base text-[#0F243A] font-light leading-relaxed max-w-2xl mx-auto text-center">
                {content.subheadline}
              </p>
            )}
          </div>
        </ScrollReveal>

        {/* 2-Column Grid (Matching Reference Image 2x2 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-16 lg:gap-y-20">
          {content.items.map((item, idx) => {
            const href = item.ctaHref || "/contact";
            const btnLabel = item.buttonLabel || getDefaultButtonLabel(item.title);

            return (
              <ScrollReveal
                key={idx}
                direction="up"
                duration={0.8}
                delay={idx * 80}
              >
                <div className="flex flex-col items-center group h-full">
                  {/* Top: 16:10 Landscape Photograph */}
                  <Link
                    href={href}
                    className="relative w-full aspect-[16/10] overflow-hidden rounded-[2px] shadow-md border border-black/5 bg-gray-100 block mb-6 cursor-pointer"
                  >
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </Link>

                  {/* Bottom: Centered Editorial Details & Dark Button */}
                  <div className="flex flex-col items-center text-center max-w-lg px-2 flex-1 justify-between w-full">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#08182B] font-normal mb-3 transition-colors group-hover:text-[#B9A078]">
                        {item.title}
                      </h3>

                      <p className="text-sm sm:text-[15px] text-[#0F243A] font-light leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    {/* Dark Solid Rectangular Button with White Text & Chevron Arrow */}
                    <div className="mt-auto pt-2">
                      <Link
                        href={href}
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0C141D] text-white hover:bg-[#B9A078] hover:text-[#0C141D] text-xs font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-[2px] shadow-sm group/btn cursor-pointer"
                      >
                        <span>{btnLabel}</span>
                        <span className="text-[11px] font-mono transition-transform duration-300 group-hover/btn:translate-x-1">
                          &gt;
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
