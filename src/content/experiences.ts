import type { ExperiencesPageContent } from "@/types/content";

export const experiencesContent: ExperiencesPageContent = {
  meta: {
    title: "Private Yacht Charter Experiences | HAVEN 550 Fort Lauderdale",
    description:
      "Celebrate birthdays, anniversaries, proposals, sunset cruises, and private gatherings aboard HAVEN 550, a luxury Ferretti yacht in South Florida.",
    keywords: [
      "yacht experiences",
      "Fort Lauderdale sunset cruise",
      "private yacht celebration",
      "coastal cruising charter",
      "HAVEN 550 experiences",
      "anniversary yacht charter",
      "birthday yacht party Fort Lauderdale",
    ],
    canonical: "/experiences",
  },
  hero: {
    eyebrow: "BEYOND THE ORDINARY",
    headline: "EXPERIENCES AS UNIQUE AS YOU.",
    description:
      "Every occasion feels different on the water. From relaxed afternoons to meaningful celebrations, HAVEN 550 provides an elegant setting for the moments that matter.",
    cta: {
      label: "PLAN YOUR CHARTER",
      href: "/contact",
    },
    image: {
      src: "/images/haven-profile-speed.jpeg",
      alt: "HAVEN 550 luxury yacht charter experience at sunset in Fort Lauderdale",
    },
  },
  possibilities: {
    eyebrow: "THE POSSIBILITIES",
    headline: "Make the Moment Yours.",
    subheadline:
      "Whether you're seeking adventure, relaxation or a special celebration, our curated experiences are designed to create unforgettable moments on the water.",
    items: [
      {
        title: "Private Coastal Escapes",
        description:
          "Leave the everyday behind and enjoy a peaceful journey through South Florida's scenic waterways. Whether you prefer leisurely cruising, relaxing aboard, or enjoying the surrounding coastal views, HAVEN 550 provides a comfortable private setting.",
        image: {
          src: "/images/haven-running-front.jpeg",
          alt: "Private Coastal Escapes aboard HAVEN 550",
        },
        ctaHref: "/contact?experience=coastal-escapes",
      },
      {
        title: "Birthdays & Celebrations",
        description:
          "Celebrate another year surrounded by friends, family, and the beauty of the water. HAVEN 550 offers a distinctive alternative to traditional celebration venues.",
        image: {
          src: "/images/haven-aft-deck.jpeg",
          alt: "Birthdays and Celebrations aboard HAVEN 550",
        },
        ctaHref: "/contact?experience=celebrations",
      },
      {
        title: "Anniversaries & Romantic Occasions",
        description:
          "Mark meaningful milestones in an intimate setting. From anniversaries to proposals, enjoy a private atmosphere with beautiful waterfront scenery.",
        image: {
          src: "/images/haven-bow-sunpad.jpeg",
          alt: "Anniversaries and Romantic Occasions on HAVEN 550",
        },
        ctaHref: "/contact?experience=romantic",
      },
      {
        title: "Corporate & Private Gatherings",
        description:
          "Step outside the traditional meeting environment. Host a small corporate outing, entertain associates, or spend quality time with colleagues aboard a private yacht.",
        image: {
          src: "/images/haven-salon-aft.jpeg",
          alt: "Corporate and Private Gatherings aboard HAVEN 550",
        },
        ctaHref: "/contact?experience=corporate",
      },
      {
        title: "Sunset Cruises",
        description:
          "Experience South Florida as the afternoon light gives way to evening. Enjoy the waterfront scenery, warm coastal atmosphere, and memorable views from the water.",
        image: {
          src: "/images/haven-profile-speed.jpeg",
          alt: "Sunset Cruises along South Florida waterways",
        },
        ctaHref: "/contact?experience=sunset-cruises",
      },
      {
        title: "Water Activities",
        description:
          "For guests seeking a more adventurous experience, HAVEN 550 offers snorkeling equipment, underwater scooters, and an optional Jet Ski rental. Jet Ski use requires applicable boating-safety documentation and completion of the required waiver.",
        image: {
          src: "/images/haven-aerial-topdown.jpeg",
          alt: "Water Activities, snorkeling, and water toys on HAVEN 550",
        },
        ctaHref: "/contact?experience=water-activities",
      },
    ],
  },
  dining: {
    eyebrow: "PERSONALIZE YOUR EXPERIENCE",
    headline: "A Charter Designed Around You.",
    paragraphs: [
      "Guests may bring their preferred food and beverages aboard HAVEN 550.",
      "For those who prefer additional convenience, food and beverage arrangements can be coordinated in advance with Lily, the yacht's steward.",
      "Whether enjoying light refreshments or planning a special celebration, advance arrangements help make your time aboard effortless.",
    ],
    note: "Alcohol is permitted. Smoking and illegal drugs are prohibited.",
    image: {
      src: "/images/haven-aft-deck.jpeg",
      alt: "Personalized dining and beverage arrangements aboard HAVEN 550",
      caption: "Steward Provisioning & Dining",
    },
  },
  ctaBanner: {
    eyebrow: "HAVEN 550",
    headline: "Make Your Next Occasion Unforgettable.",
    subtext: "The water is waiting.",
    brandTagline: "Your Time. Your Waters. Your Haven.",
    cta: {
      label: "PLAN YOUR CHARTER",
      href: "/contact",
    },
    backgroundImage: "/images/haven-aerial-stern.jpeg",
  },
};
