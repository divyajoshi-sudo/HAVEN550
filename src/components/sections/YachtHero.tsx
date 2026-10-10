import Image from "next/image";
import { Container } from "../layout/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Heading } from "../ui/Heading";

export interface YachtHeroProps {
  content: {
    eyebrow: string;
    headline: string;
    badge: string;
    description: string;
    image: { src: string; alt: string };
  };
}

export function YachtHero({ content }: YachtHeroProps) {
  return (
    <section
      style={{ backgroundColor: "#081018", color: "#F8F8F6" }}
      className="relative min-h-screen lg:h-screen w-full flex items-center justify-center overflow-hidden bg-[#081018] text-[#F8F8F6]"
    >
      {/* Background Yacht Photo */}
      <div className="absolute inset-0">
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dynamic Scrim Gradient */}
        <div className="absolute inset-0 dynamic-scrim pointer-events-none" />
        <div className="absolute inset-0 bg-[#081018]/45 pointer-events-none" />
      </div>

      <Container size="default" className="relative z-10 text-center pt-32 pb-20 md:pt-40 md:pb-24 flex flex-col items-center">
        {/* Eyebrow with gold horizontal lines */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="w-8 sm:w-12 h-[1px] bg-[#B9A078]" />
          <Eyebrow className="text-[#B9A078] tracking-[0.35em]">
            {content.eyebrow}
          </Eyebrow>
          <span className="w-8 sm:w-12 h-[1px] bg-[#B9A078]" />
        </div>

        {/* Main Headline */}
        <h1
          style={{
            color: "#F8F8F6",
            textShadow: "0 2px 14px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.95)",
          }}
          className="font-serif mb-6 uppercase tracking-[0.04em] font-light text-3xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.05] max-w-4xl mx-auto text-center"
        >
          {content.headline}
        </h1>

        {/* Specs Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-2.5 border border-[#B9A078]/50 bg-[#101C29]/80 mb-8 rounded-[2px] backdrop-blur-sm">
          <span
            style={{ color: "#F8F8F6" }}
            className="text-xs sm:text-[13px] tracking-[0.22em] uppercase font-sans font-medium"
          >
            {content.badge}
          </span>
        </div>

        {/* Subtitle / Description */}
        <p
          style={{
            color: "#F8F8F6",
            textShadow: "0 1px 6px rgba(0,0,0,0.8)",
          }}
          className="text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto text-center font-sans"
        >
          {content.description}
        </p>
      </Container>
    </section>
  );
}
