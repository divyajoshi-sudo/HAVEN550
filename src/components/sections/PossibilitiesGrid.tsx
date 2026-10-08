import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Heading } from "../ui/Heading";

export interface PossibilityItem {
  title: string;
  description: string;
  image: { src: string; alt: string };
  ctaHref?: string;
}

export interface PossibilitiesGridProps {
  content: {
    eyebrow: string;
    headline: string;
    subheadline?: string;
    items: PossibilityItem[];
  };
}

export function PossibilitiesGrid({ content }: PossibilitiesGridProps) {
  return (
    <section className="py-24 md:py-32 bg-haven-navy relative">
      <Container size="default">
        {/* Header split row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16 pb-8 border-b border-white/10">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <Eyebrow className="text-haven-gold tracking-[0.3em]">
                {content.eyebrow}
              </Eyebrow>
              <span className="w-10 h-[1px] bg-haven-gold/50" />
            </div>
            <Heading level={2} className="text-3xl sm:text-4xl md:text-5xl">
              {content.headline}
            </Heading>
          </div>

          {content.subheadline && (
            <div className="lg:col-span-6 lg:pl-6">
              <p className="text-sm sm:text-base text-haven-cream/70 font-light leading-relaxed">
                {content.subheadline}
              </p>
            </div>
          )}
        </div>

        {/* 6-Card Grid (3 Columns on Desktop, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items.map((item, idx) => {
            const href = item.ctaHref || "/contact";
            return (
              <Link
                key={idx}
                href={href}
                className="group flex flex-col bg-haven-deep/50 border border-white/10 rounded-sm overflow-hidden hover:border-haven-gold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-haven-gold/5"
              >
                {/* Card Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-haven-deep">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-haven-deep via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Title + Arrow */}
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <h3 className="font-serif text-xl sm:text-2xl text-haven-cream group-hover:text-haven-gold transition-colors duration-300">
                        {item.title}
                      </h3>
                      <span className="text-haven-gold text-lg transform transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>

                    {/* Gold Accent Line */}
                    <div className="w-8 h-[1px] bg-haven-gold/40 mb-4 group-hover:w-16 group-hover:bg-haven-gold transition-all duration-300" />

                    {/* Description */}
                    <p className="text-sm text-haven-cream/70 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
