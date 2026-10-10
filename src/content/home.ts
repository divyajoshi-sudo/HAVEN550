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
    eyebrow: "FORT LAUDERDALE · SOUTH FLORIDA",
    headline: "THE ART OF BEING AWAY.",
    subheadline: "Welcome Aboard HAVEN 550.",
    paragraphs: [
      "Experience South Florida from an entirely different perspective aboard HAVEN 550, a privately chartered 57-foot Ferretti yacht.",
      "Where the coastline becomes your backdrop, the ocean sets the pace, and every moment belongs to you.",
    ],
    primaryCta: {
      label: "EXPLORE THE YACHT",
      href: "/the-yacht",
    },
    secondaryCta: {
      label: "REQUEST A CHARTER",
      href: "/contact",
    },
    image: {
      src: "/images/haven-running-front.jpeg",
      alt: "HAVEN 550 privately chartered 57-foot Ferretti yacht on the water in Fort Lauderdale",
    },
  },
  introduction: {
    eyebrow: "AN INVITATION TO UNWIND",
    headline: "A Different Kind of Escape.",
    paragraphs: [
      "Some of life's finest moments happen when you leave the ordinary behind. HAVEN 550 offers an intimate luxury-yachting experience designed around privacy, relaxation, and the freedom of the open water. Whether celebrating a special occasion, entertaining friends, or simply escaping the everyday, your time aboard is yours to enjoy. With a professional captain and dedicated steward attending to the experience, all that's left is to settle in and enjoy the journey.",
    ],
    cta: {
      label: "DISCOVER HAVEN 550",
      href: "/the-yacht",
    },
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
    eyebrow: "YOUR DAY. YOUR WAY.",
    headline: "Moments Worth Making.",
    items: [
      {
        badge: "COASTAL ESCAPE",
        title: "COASTAL ESCAPE & BEYOND",
        description:
          "Islands, hidden sandbars, and overwater bliss. Whether you crave ocean speed or secluded anchorages, HAVEN 550 delivers your kind of escape.",
        image: {
          src: "/images/haven-profile-speed.jpeg",
          alt: "Private Coastal Cruising aboard HAVEN 550",
        },
        cta: {
          label: "TAKE ME THERE",
          href: "/experiences",
        },
      },
      {
        badge: "GOLDEN HOUR",
        title: "SUNSET STATE OF MIND",
        description:
          "Chic cocktails, golden-hour rosé, and ocean breezes. Watch the South Florida skyline glow from the privacy of your own teak deck.",
        image: {
          src: "/images/haven-aerial-stern.jpeg",
          alt: "Sunset Experiences with HAVEN 550",
        },
        cta: {
          label: "TAKE ME THERE",
          href: "/experiences",
        },
      },
      {
        badge: "CELEBRATIONS",
        title: "MOMENTS WORTH CELEBRATING",
        description:
          "Milestone birthdays, intimate anniversaries, and bespoke gatherings. Celebrate in timeless style with personalized steward service and alfresco dining.",
        image: {
          src: "/images/haven-aft-deck.jpeg",
          alt: "Celebrations & Special Occasions aboard HAVEN 550",
        },
        cta: {
          label: "TAKE ME THERE",
          href: "/experiences",
        },
      },
      {
        badge: "OCEAN PLAY",
        title: "WATER ADVENTURES & TOYS",
        description:
          "Seabob underwater scooters, snorkeling coves, and teak swim platform relaxation. Discover the turquoise waters with every luxury toy provided.",
        image: {
          src: "/images/haven-bow-sunpad.jpeg",
          alt: "Water Adventures on HAVEN 550",
        },
        cta: {
          label: "TAKE ME THERE",
          href: "/experiences",
        },
      },
    ],
    columns: 4,
    cta: {
      label: "EXPLORE EXPERIENCES",
      href: "/experiences",
    },
  },
  rates: {
    eyebrow: "THE PRIVILEGE OF PRIVACY",
    headline: "Your Private Charter Awaits.",
    subheadline: "Choose the experience that suits your day.",
    rates: [
      {
        name: "The Escape",
        duration: "4 Hours",
        price: "$3,000",
        eyebrow: "01 // 4 HOURS CHARTER",
        description:
          "An intimate introduction to private yachting along Fort Lauderdale's scenic waterways. Perfect for an unhurried morning or golden afternoon coastal escape with personalized steward service and crystal barware.",
        popular: false,
        image: {
          src: "/images/haven-profile-speed.jpeg",
          alt: "HAVEN 550 running profile along Fort Lauderdale coast",
        },
      },
      {
        name: "The Experience",
        duration: "6 Hours",
        price: "$4,000",
        eyebrow: "SIGNATURE EXPERIENCE // 6 HOURS CHARTER",
        description:
          "Our signature charter blending open-water ocean cruising, secluded sandbar anchorage, and leisurely alfresco dining. Ample time to swim, deploy water toys, and immerse yourself in the private South Florida lifestyle.",
        popular: true,
        image: {
          src: "/images/haven-bow-sunpad.jpeg",
          alt: "Forward bow sun lounge and ocean anchorage on HAVEN 550",
        },
      },
      {
        name: "The Full Day",
        duration: "8 Hours",
        price: "$5,000",
        eyebrow: "03 // 8 HOURS CHARTER",
        description:
          "An unhurried complete immersion into luxury South Florida yachting from morning sunshine through golden hour. Tailor your itinerary with full coastal range to Miami or Boca Raton, anchored coves, and unforgettable sunset views.",
        popular: false,
        image: {
          src: "/images/haven-aft-deck.jpeg",
          alt: "Teak aft deck dining and sunset cruising on HAVEN 550",
        },
      },
    ],
    inclusionNote:
      "Every charter includes a professional captain, steward, local cruising fuel, and selected onboard amenities.",
    gratuityNote: "Customary crew gratuity of 20% is not included.",
    cta: {
      label: "VIEW CHARTER RATES",
      href: "/charter-rates",
    },
  },
  destinations: {
    eyebrow: "EXPLORE SOUTH FLORIDA",
    headline: "The Coast Is Calling.",
    paragraphs: [
      "From the waterways of Fort Lauderdale to the beautiful coastline between Haulover and Pompano Beach, HAVEN 550 offers an exceptional perspective on South Florida.",
      "Cruise past waterfront estates, enjoy scenic coastal views, or spend an afternoon discovering the beauty of the region from the water.",
    ],
    cta: {
      label: "DISCOVER DESTINATIONS",
      href: "/destinations",
    },
    image: {
      src: "/images/haven-aerial-stern.jpeg",
      alt: "Aerial tracking shot of HAVEN 550 cruising along the South Florida coast",
    },
    imagePosition: "left",
  },
  ctaBanner: {
    eyebrow: "YOUR PRIVATE ESCAPE BEGINS HERE",
    headline: "Some Days Deserve Something Extraordinary.",
    subtext: "The water is waiting.",
    brandTagline: "Your Time. Your Waters. Your Haven.",
    cta: {
      label: "REQUEST YOUR CHARTER",
      href: "/contact",
    },
    backgroundImage: "/images/haven-profile-speed.jpeg",
    backgroundVideo: "/videos/aerial-view-of-open-ocean-under-blue-sky-2026-10-07-22-17-31-utc.mp4",
  },
};
