import type { HomePageContent } from "@/types/content";

export const homeContent: HomePageContent = {
  meta: {
    title: "HAVEN 550 | Private Luxury Yacht Charters in Fort Lauderdale",
    description:
      "Discover HAVEN 550, a private 57-foot Ferretti yacht offering luxury charters in Fort Lauderdale and South Florida. Explore the yacht, charter experiences, and rates.",
    keywords: [
      "luxury yacht charter",
      "Fort Lauderdale yacht charter",
      "private yacht charter",
      "Ferretti 550",
      "South Florida yacht charter",
      "HAVEN 550",
    ],
    canonical: "/",
  },
  hero: {
    eyebrow: "PRIVATE YACHT CHARTERS",
    headline: "THE ART OF BEING AWAY",
    subheadline: "FORT LAUDERDALE, FLORIDA",
    paragraphs: [
      "A different kind of escape. Aboard Haven 550, every detail is designed for those who value privacy, freedom, and the extraordinary.",
    ],
    primaryCta: {
      label: "EXPLORE THE YACHT",
      href: "/the-yacht",
    },
    secondaryCta: {
      label: "INQUIRE NOW",
      href: "/contact",
    },
    image: {
      src: "/images/haven-running-front.jpeg",
      alt: "HAVEN 550 privately chartered 57-foot Ferretti yacht cruising in Fort Lauderdale",
    },
  },
  introduction: {
    eyebrow: "THE YACHT",
    headline: "A Different Kind of Escape.",
    paragraphs: [
      "Step aboard Haven 550, where luxury meets freedom. Designed for those who seek more than a destination, this private yacht charter offers an elevated experience on the open water. With spacious comfort, refined details, and a crew dedicated to your every need, Haven 550 is the perfect setting for unforgettable moments in Fort Lauderdale and beyond.",
    ],
    image: {
      src: "/images/haven-aft-deck.jpeg",
      alt: "Spacious aft deck and teak dining table of HAVEN 550",
    },
    imagePosition: "right",
  },
  vessel: {
    eyebrow: "THE VESSEL",
    headline: "Italian Craftsmanship. Timeless Elegance.",
    specsBadge: "2021 FERRETTI | 57 FEET | 8 GUESTS",
    paragraphs: [
      "Designed with the unmistakable sophistication of Italian yacht craftsmanship, HAVEN 550 combines refined styling with the comfort of a private retreat.",
      "Its thoughtfully designed spaces offer the perfect setting for entertaining, relaxing, and enjoying South Florida's spectacular waterfront scenery.",
      "From sunlit afternoons to memorable evenings on the water, HAVEN 550 provides an elegant setting for every occasion.",
    ],
    cta: {
      label: "EXPLORE THE YACHT",
      href: "/the-yacht",
    },
    mainImage: {
      src: "/images/haven-profile-speed.jpeg",
      alt: "HAVEN 550 Ferretti yacht running at speed with South Florida skyline",
      caption: "Ferretti 550 Profile",
    },
    detailImages: [
      {
        src: "/images/haven-bow-sunpad.jpeg",
        alt: "HAVEN 550 bow sunpad lounge",
        caption: "Bow Lounge & Sunpad",
      },
      {
        src: "/images/haven-salon-helm.jpeg",
        alt: "HAVEN 550 main salon with panoramic windows",
        caption: "Main Salon & Helm",
      },
      {
        src: "/images/haven-aerial-topdown.jpeg",
        alt: "HAVEN 550 flybridge and deck aerial overview",
        caption: "Flybridge & Deck Layout",
      },
    ],
  },
  experiences: {
    eyebrow: "MOMENTS WORTH MAKING",
    headline: "",
    items: [
      {
        title: "Private Charter Getaways",
        description:
          "Escape to a world of luxury and privacy with our exclusive yacht charters.",
        image: {
          src: "/images/haven-profile-speed.jpeg",
          alt: "Private Charter Getaways aboard HAVEN 550",
        },
      },
      {
        title: "Dining & Entertainment",
        description:
          "Enjoy world-class dining, premium amenities, and bespoke experiences on board.",
        image: {
          src: "/images/haven-aft-deck.jpeg",
          alt: "Dining & Entertainment aboard HAVEN 550",
        },
      },
      {
        title: "Tailored Experiences",
        description:
          "From sunset cruises to island hopping, every journey is crafted to your vision.",
        image: {
          src: "/images/haven-aerial-stern.jpeg",
          alt: "Tailored Experiences with HAVEN 550",
        },
      },
      {
        title: "Your Adventure",
        description:
          "Discover the freedom to explore, relax, and create unforgettable memories.",
        image: {
          src: "/images/haven-bow-sunpad.jpeg",
          alt: "Your Adventure on HAVEN 550",
        },
      },
    ],
    columns: 4,
  },
  rates: {
    eyebrow: "YOUR PRIVATE CHARTER AWAITS.",
    headline: "Your Private Charter Awaits.",
    rates: [
      {
        name: "HALF DAY",
        duration: "4 hours",
        price: "$3,000",
        description: "Perfect for a quick escape on the water.",
        popular: false,
      },
      {
        name: "FULL DAY",
        duration: "8 hours",
        price: "$4,000",
        description: "The ultimate experience for a full day of luxury.",
        popular: true,
      },
      {
        name: "SUNSET",
        duration: "4 hours",
        price: "$3,000",
        description: "Golden hour. Unforgettable views.",
        popular: false,
      },
    ],
    inclusionNote: "",
    gratuityNote: "",
  },
  destinations: {
    eyebrow: "DESTINATIONS",
    headline: "The Coast Is Calling.",
    paragraphs: [
      "From the vibrant shores of Fort Lauderdale to the hidden gems of the Florida coast, each destination offers a new perspective, a new adventure, and a deeper connection to the water.",
    ],
    cta: {
      label: "EXPLORE SOUTH FLORIDA",
      href: "/destinations",
    },
    image: {
      src: "/images/haven-aerial-stern.jpeg",
      alt: "Aerial tracking shot of HAVEN 550 cruising along the Florida coast",
    },
    imagePosition: "left",
  },
  ctaBanner: {
    eyebrow: "PRIVATE YACHT CHARTERS",
    headline: "Some Days Deserve Something Extraordinary.",
    subtext: "FORT LAUDERDALE, FLORIDA",
    brandTagline: "PRIVATE YACHT CHARTERS",
    cta: {
      label: "RESERVE YOUR CHARTER",
      href: "/contact",
    },
    backgroundImage: "/images/haven-profile-speed.jpeg",
  },
};
