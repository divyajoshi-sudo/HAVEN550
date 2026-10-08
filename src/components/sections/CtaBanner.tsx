import Image from "next/image";
import Link from "next/link";
import type { CtaBannerContent } from "@/types/content";
import { Container } from "../layout/Container";

export interface CtaBannerProps {
  content: CtaBannerContent;
}

export function CtaBanner({ content }: CtaBannerProps) {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 md:py-28 bg-haven-deep overflow-hidden border-t border-white/5">
      {/* Background Real Yacht Image with dark oceanic mood */}
      {content.backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={content.backgroundImage}
            alt="HAVEN 550 luxury charter"
            fill
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-haven-deep via-haven-navy/85 to-haven-deep" />
        </div>
      )}

      <Container size="default" className="relative z-10 text-center">
        {/* Main Headline (2-Line Wrapped) */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-haven-cream font-light leading-[1.15] mb-8 max-w-3xl mx-auto">
          {content.headline === "Some Days Deserve Something Extraordinary." ? (
            <>
              <span>Some Days Deserve Something</span>
              <br />
              <span>Extraordinary.</span>
            </>
          ) : (
            content.headline
          )}
        </h2>

        {/* Center Brand Eyebrow with gold horizontal lines */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-1">
            <span className="w-12 sm:w-16 h-[1px] bg-haven-gold/70" />
            <span className="font-serif text-lg sm:text-xl font-medium tracking-[0.25em] text-haven-gold">
              HAVEN 550
            </span>
            <span className="w-12 sm:w-16 h-[1px] bg-haven-gold/70" />
          </div>
          <span className="text-[0.65rem] sm:text-[0.7rem] tracking-[0.35em] uppercase text-haven-gold/80 font-light">
            PRIVATE YACHT CHARTERS
          </span>
        </div>

        {/* Bottom 3-Part Horizontal Information Bar */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          {/* Left: Brand */}
          <div className="flex flex-col items-center sm:items-start group cursor-default">
            <span className="font-serif text-base tracking-[0.2em] text-haven-cream font-medium group-hover:text-haven-gold transition-colors">
              HAVEN 550
            </span>
            <span className="text-[0.55rem] tracking-[0.3em] uppercase text-haven-slate font-light">
              PRIVATE YACHT CHARTERS
            </span>
          </div>

          {/* Divider */}
          <span className="hidden sm:block w-[1px] h-8 bg-haven-gold/30" />

          {/* Middle: Location */}
          <div className="text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-haven-cream/80 font-light">
              {content.subtext || "FORT LAUDERDALE, FLORIDA"}
            </span>
          </div>

          {/* Divider */}
          <span className="hidden sm:block w-[1px] h-8 bg-haven-gold/30" />

          {/* Right: CTA Link */}
          <div>
            <Link
              href={content.cta.href}
              className="text-xs tracking-[0.3em] uppercase font-medium text-haven-cream hover:text-haven-gold transition-all duration-300 py-2 border-b border-haven-gold/40 hover:border-haven-gold hover:shadow-[0_4px_15px_rgba(201,168,108,0.2)]"
            >
              {content.cta.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

