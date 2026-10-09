import type { AboutPageContent } from "@/types/content";

export const aboutContent: AboutPageContent = {
  meta: {
    title: "About HAVEN 550 LLC | Private Yacht Charters",
    description:
      "Learn about HAVEN 550 LLC, a Fort Lauderdale-based private yacht charter company founded by Douglas Muhlbauer.",
    keywords: [
      "About HAVEN 550 LLC",
      "Douglas Muhlbauer",
      "Fort Lauderdale yacht charter company",
      "Ferretti 57 private charter",
      "HAVEN 550",
    ],
    canonical: "/about",
  },
  hero: {
    eyebrow: "THE STORY BEHIND THE EXPERIENCE",
    headline: "A PASSION FOR LIFE ON THE WATER.",
    description:
      "HAVEN 550 brings together the elegance of Italian yacht craftsmanship and the natural beauty of South Florida.",
    image: {
      src: "/images/haven-running-front.jpeg",
      alt: "HAVEN 550 cruising off Fort Lauderdale",
    },
  },
  companyIntro: {
    eyebrow: "WELCOME TO HAVEN 550",
    headline: "Private Yachting, Personally Considered.",
    paragraphs: [
      "HAVEN 550 LLC is a Fort Lauderdale-based private yacht-charter company offering experiences aboard a 2021 Ferretti 57.",
      "Created for those who appreciate privacy, comfort, and memorable moments, HAVEN 550 provides an intimate setting for exploring South Florida's waterways.",
      "With accommodations for up to eight charter guests and a professional captain and steward, the yacht offers a personalized alternative to larger group-charter experiences.",
    ],
    image: {
      src: "/images/haven-aft-deck.jpeg",
      alt: "HAVEN 550 spacious aft deck and teak dining area",
    },
  },
  founder: {
    eyebrow: "THE PERSON BEHIND HAVEN 550",
    name: "Douglas Muhlbauer",
    title: "Founder | HAVEN 550 LLC",
    paragraphs: [
      "HAVEN 550 was established by Douglas Muhlbauer with a focus on offering a distinctive private-yachting experience in South Florida.",
      "Centered around a 57-foot Ferretti yacht, the company combines the comfort of a private vessel with the convenience of professionally crewed charter services.",
      "Douglas's vision for HAVEN 550 is reflected in the company's straightforward approach: a beautiful yacht, thoughtful hospitality, and the freedom to enjoy South Florida from the water.",
    ],
    image: {
      src: "/images/haven-salon-helm.jpeg",
      alt: "Main salon and helm reflecting Douglas Muhlbauer's vision",
    },
  },
  approach: {
    eyebrow: "THE HAVEN PHILOSOPHY",
    headline: "Luxury Is Personal.",
    paragraphs: [
      "We believe the finest experiences are often the simplest.",
      "A beautiful setting. Good company. Time to unwind.",
      "HAVEN 550 is designed around those moments, offering a private environment where guests can enjoy the water without the distractions of everyday life.",
      "Our approach emphasizes comfort, privacy, and attentive service throughout the charter experience.",
    ],
    image: {
      src: "/images/haven-bow-sunpad.jpeg",
      alt: "Bow sun lounge relaxation on HAVEN 550",
    },
  },
  ctaBanner: {
    eyebrow: "HAVEN 550",
    headline: "Discover Your Haven.",
    subtext: "The water is waiting.",
    brandTagline: "Your Time. Your Waters. Your Haven.",
    cta: {
      label: "EXPLORE THE YACHT",
      href: "/the-yacht",
    },
    backgroundImage: "/images/haven-profile-speed.jpeg",
  },
};
