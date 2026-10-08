import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

export interface ExperienceStoryItem {
  number: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  href?: string;
}

export interface EditorialExperiencesProps {
  eyebrow?: string;
  headline?: string;
  items?: ExperienceStoryItem[];
  background?: "softWhite" | "ivory" | "navy" | "deep";
}

export function EditorialExperiences({
  eyebrow = "EXPERIENCES",
  headline = "Moments Worth Making.",
  items = [
    {
      number: "01",
      title: "Private Charter Getaways",
      description:
        "Escape to a world of luxury and privacy with our exclusive yacht charters across South Florida's premier waters.",
      image: {
        src: "/images/haven-profile-speed.jpeg",
        alt: "Private Charter Getaways aboard HAVEN 550",
      },
      href: "/experiences",
    },
    {
      number: "02",
      title: "Dining & Entertainment",
      description:
        "Enjoy world-class dining, premium amenities, and bespoke steward provisioning tailored precisely to your taste.",
      image: {
        src: "/images/haven-aft-deck.jpeg",
        alt: "Dining & Entertainment aboard HAVEN 550",
      },
      href: "/experiences",
    },
    {
      number: "03",
      title: "Tailored Experiences",
      description:
        "From sunset cruises to sandbar anchoring and secluded coves, every journey is crafted around your personal vision.",
      image: {
        src: "/images/haven-aerial-stern.jpeg",
        alt: "Tailored Experiences with HAVEN 550",
      },
      href: "/experiences",
    },
    {
      number: "04",
      title: "Your Adventure",
      description:
        "Discover the freedom to explore, relax, and create unforgettable memories with water toys and snorkeling gear.",
      image: {
        src: "/images/haven-bow-sunpad.jpeg",
        alt: "Your Adventure on HAVEN 550",
      },
      href: "/experiences",
    },
  ],
  background = "softWhite",
}: EditorialExperiencesProps) {
  const isLight = background === "softWhite" || background === "ivory";

  return (
    <Section background={background} className="py-16 md:py-20 min-h-screen flex flex-col justify-center">
      <Container size="wide">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24 text-left">
          <p className="text-xs sm:text-sm tracking-[0.35em] text-[#B79B6A] uppercase font-medium mb-3">
            {eyebrow}
          </p>
          <h2
            className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight ${
              isLight ? "text-[#1C252B]" : "text-haven-cream"
            }`}
          >
            {headline}
          </h2>
          <div className="w-16 h-[2px] bg-[#B79B6A]/70 mt-6" />
        </div>

        {/* 4 Large Editorial Story Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href || "/experiences"}
              className="group flex flex-col justify-between"
            >
              {/* Image Frame: Exact 516 x 290.25 (16:9) */}
              <div className="relative aspect-[516/290.25] w-full overflow-hidden mb-6 bg-haven-deep/10 shadow-md group-hover:shadow-xl transition-shadow duration-500">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Number + Content */}
              <div>
                <span className="text-xs tracking-[0.25em] text-[#B79B6A] font-medium block mb-2">
                  {item.number}
                </span>
                <h3
                  className={`font-sans text-[28px] font-normal leading-snug mb-3 transition-colors ${
                    isLight
                      ? "text-[#1C252B] group-hover:text-[#B79B6A]"
                      : "text-haven-cream group-hover:text-haven-gold"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-base font-normal leading-relaxed mb-4 ${
                    isLight ? "text-[#5A626A]" : "text-haven-cream/80"
                  }`}
                >
                  {item.description}
                </p>
                <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-medium text-[#B79B6A] group-hover:translate-x-1 transition-transform">
                  <span>DISCOVER</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
