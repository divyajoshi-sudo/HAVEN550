import type { AboutPageContent } from "@/types/content";

export const aboutContent: AboutPageContent = {
  meta: {
    title: "About HAVEN 550 | Douglas Muhlbauer | Private Yacht Charters",
    description:
      "Learn about HAVEN 550 and founder Douglas Muhlbauer. A boutique private yacht charter operation in Fort Lauderdale dedicated to understated luxury, privacy, and personal service.",
    keywords: [
      "About HAVEN 550",
      "Douglas Muhlbauer",
      "Haven 550 LLC",
      "Fort Lauderdale yacht company",
      "boutique yacht charter",
    ],
    canonical: "/about",
  },
  hero: {
    eyebrow: "OUR STORY",
    headline: "The Art of Being Away.",
    description:
      "Founded by Douglas Muhlbauer, HAVEN 550 was created to offer an intimate, private yachting experience that stands apart from conventional charters.",
    image: {
      src: "/images/haven-running-front.jpeg",
      alt: "HAVEN 550 cruising off Fort Lauderdale",
    },
  },
  story: {
    eyebrow: "FOUNDER'S VISION",
    headline: "A Boutique Yachting Perspective.",
    paragraphs: [
      "HAVEN 550 was established by Douglas Muhlbauer with a straightforward vision: to create a boutique yacht-charter operation rooted in the standards of a private yacht club.",
      "Rather than operating as a high-volume boat rental service, HAVEN 550 caters to discerning clients who value privacy, impeccable presentation, and genuine hospitality.",
      "Every charter is approached as an individual, private experience where your time on the water is unhurried, comfortable, and completely under your control.",
    ],
    cta: {
      label: "EXPLORE THE YACHT",
      href: "/the-yacht",
    },
    image: {
      src: "/images/haven-salon-helm.jpeg",
      alt: "HAVEN 550 main salon reflecting understated luxury",
      caption: "Italian Craftsmanship & Understated Luxury",
    },
    imagePosition: "right",
  },
  philosophy: {
    eyebrow: "OUR PHILOSOPHY",
    headline: "Privacy, Exclusivity, and Comfort.",
    paragraphs: [
      "We believe that true luxury lies in simplicity, seamless execution, and the space to unwind without distraction.",
      "From the moment you step onto the teak deck of our 57-foot Ferretti, our licensed captain and dedicated steward attend to every detail — navigating South Florida's premier waters while ensuring your group enjoys total seclusion.",
      "No crowds, no fixed tour itineraries, no compromises. Just your time, your waters, and your private haven.",
    ],
    image: {
      src: "/images/haven-aft-deck.jpeg",
      alt: "Aft cockpit dining and relaxation area",
      caption: "Exclusive Private Setting",
    },
    imagePosition: "left",
  },
  values: {
    eyebrow: "THE HAVEN DIFFERENCE",
    headline: "What Sets Us Apart",
    items: [
      {
        number: "01",
        title: "Boutique Scale",
        description:
          "We operate one meticulously maintained 57-foot Ferretti yacht, allowing us to dedicate 100% of our focus and standards to your voyage.",
      },
      {
        number: "02",
        title: "Dedicated Crew",
        description:
          "Every charter includes both a USCG licensed Master Captain and a private steward for seamless service throughout your time aboard.",
      },
      {
        number: "03",
        title: "Total Privacy",
        description:
          "Your charter is 100% private. We never combine parties or rush transitions between outings.",
      },
      {
        number: "04",
        title: "Professional Standards",
        description:
          "Haven 550 LLC operates with full maritime insurance, rigorous safety protocols, and transparent all-inclusive charter rates.",
      },
    ],
    columns: 4,
  },
  ctaBanner: {
    eyebrow: "EXPERIENCE THE DIFFERENCE",
    headline: "Your Private Escape Awaits.",
    subtext: "Connect with founder Douglas Muhlbauer and our charter team.",
    brandTagline: "Your Time. Your Waters. Your Haven.",
    cta: {
      label: "REQUEST A CHARTER",
      href: "/contact",
    },
    backgroundImage: "/images/haven-profile-speed.jpeg",
  },
};
