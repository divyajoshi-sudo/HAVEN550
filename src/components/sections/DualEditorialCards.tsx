import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

export interface EditorialCardItem {
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
}

export interface DualEditorialCardsProps {
  cards?: [EditorialCardItem, EditorialCardItem];
  background?: "softWhite" | "ivory" | "deep" | "navy" | "navyLight" | "transparent";
}

const defaultCards: [EditorialCardItem, EditorialCardItem] = [
  {
    title: "Step Aboard HAVEN 550",
    description:
      "Experience Italian yacht craftsmanship at its finest. Designed with spacious luxury, panoramic salon windows, and refined teak decks for an elevated escape.",
    cta: {
      label: "EXPLORE THE YACHT",
      href: "/the-yacht",
    },
    image: {
      src: "/images/haven-aft-deck.jpeg",
      alt: "Spacious aft deck and teak dining table of HAVEN 550",
    },
  },
  {
    title: "Looking for a Yacht to Charter?",
    description:
      "Discover the finest private yacht charters in Fort Lauderdale and South Florida. Our bespoke journeys include tailored itineraries, 5-star service, and unforgettable coastal views.",
    cta: {
      label: "SEARCH CHARTERS",
      href: "/experiences",
    },
    image: {
      src: "/images/haven-profile-speed.jpeg",
      alt: "HAVEN 550 Ferretti yacht running at speed in Fort Lauderdale",
    },
  },
];

export function DualEditorialCards({
  cards = defaultCards,
  background = "softWhite",
}: DualEditorialCardsProps) {
  return (
    <Section background={background} className="py-16 md:py-24">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Image Frame: Exact 816 x 459 Dimensions */}
              <div className="relative w-full aspect-[816/459] overflow-hidden bg-[#EAE8E3] shadow-md group-hover:shadow-xl transition-shadow duration-500">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  width={816}
                  height={459}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Text Content Block */}
              <div className="pt-8 sm:pt-10 flex flex-col items-center max-w-xl mx-auto">
                <h3 className="font-serif text-2xl sm:text-3xl md:text-[2.2rem] font-light text-[#1C252B] tracking-tight mb-4 group-hover:text-[#B79B6A] transition-colors">
                  {card.title}
                </h3>

                <p className="text-[0.92rem] sm:text-base text-[#5A626A] leading-relaxed font-normal mb-8">
                  {card.description}
                </p>

                <Link
                  href={card.cta.href}
                  className="min-w-[200px] sm:min-w-[240px] text-center px-8 sm:px-10 py-3.5 sm:py-4 bg-[#071B2A] text-white text-[0.7rem] sm:text-xs tracking-[0.22em] uppercase font-medium hover:bg-[#0d283e] transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <span>{card.cta.label}</span>
                  <span className="text-sm">›</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
