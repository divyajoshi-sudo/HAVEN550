import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

export interface EditorialDestinationsProps {
  eyebrow?: string;
  headline?: string;
  description?: string;
  image?: { src: string; alt: string };
  ctaHref?: string;
}

export function EditorialDestinations({
  eyebrow = "DESTINATIONS",
  headline = "The Coast Is Calling.",
  description = "From the vibrant shores of Fort Lauderdale to the hidden gems of the Florida coast, each destination offers a new perspective, a new adventure, and a deeper connection to the water.",
  image = {
    src: "/images/haven-aerial-stern.jpeg",
    alt: "Aerial perspective of HAVEN 550 cruising coastal waters",
  },
  ctaHref = "/destinations",
}: EditorialDestinationsProps) {
  return (
    <Section background="softWhite" className="py-16 md:py-20 min-h-screen flex flex-col justify-center">
      <Container size="wide">
        {/* Header with locations */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm tracking-[0.35em] text-[#B79B6A] uppercase font-medium mb-3">
              {eyebrow}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1C252B] font-light leading-[1.1] mb-6">
              {headline}
            </h2>
            <p className="text-base text-[#5A626A] font-normal leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end">
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
              {["FORT LAUDERDALE", "HAULOVER", "POMPANO BEACH", "SOUTH FLORIDA"].map(
                (loc) => (
                  <span
                    key={loc}
                    className="px-3.5 py-1.5 text-[0.65rem] tracking-[0.25em] uppercase text-[#1C252B] bg-[#EFECE5] rounded-none font-medium"
                  >
                    {loc}
                  </span>
                )
              )}
            </div>

            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-medium text-[#1C252B] hover:text-[#B79B6A] transition-colors border-b border-[#1C252B]/40 pb-1"
            >
              <span>EXPLORE ALL DESTINATIONS</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Large Editorial Full-Width Image */}
        <div className="relative aspect-[21/9] min-h-[360px] md:min-h-[500px] w-full overflow-hidden shadow-2xl group">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white">
            <span className="text-xs tracking-[0.3em] uppercase text-[#B79B6A] font-medium block mb-2">
              CRUISING GROUNDS
            </span>
            <span className="font-serif text-2xl md:text-4xl font-light">
              South Florida Waterways & Ocean Escapes
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
