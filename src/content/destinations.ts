import type { DestinationsPageContent } from "@/types/content";

export const destinationsContent: DestinationsPageContent = {
  meta: {
    title: "Destinations | HAVEN 550 | Fort Lauderdale & South Florida",
    description:
      "Explore South Florida from the water aboard HAVEN 550. Private yacht charters throughout Fort Lauderdale, the Intracoastal Waterway, Haulover Inlet, and Pompano Beach.",
    keywords: [
      "Fort Lauderdale yacht destinations",
      "Intracoastal charter",
      "Haulover yacht charter",
      "Pompano Beach boat charter",
      "South Florida cruising grounds",
    ],
    canonical: "/destinations",
  },
  hero: {
    eyebrow: "EXPLORE SOUTH FLORIDA",
    headline: "The Coast Is Calling.",
    description:
      "From the world-renowned waterways of Fort Lauderdale to the pristine coastal waters between Haulover and Pompano Beach, HAVEN 550 opens up South Florida's most picturesque cruising grounds.",
    image: {
      src: "/images/haven-aerial-stern.jpeg",
      alt: "Cruising destinations in South Florida aboard HAVEN 550",
    },
  },
  destinations: {
    eyebrow: "CRUISING GROUNDS",
    headline: "Featured Waters & Anchorages",
    description:
      "Each destination offers a distinct atmosphere — from glamorous estate cruising to secluded ocean anchorages.",
    items: [
      {
        number: "01",
        title: "Fort Lauderdale & The Venice of America",
        description:
          "Known as the Yachting Capital of the World, navigate the historic New River and Intracoastal Waterway past world-famous mega-yachts and multi-million dollar waterfront estates.",
        image: {
          src: "/images/haven-profile-speed.jpeg",
          alt: "Fort Lauderdale waterways and estate cruising",
        },
      },
      {
        number: "02",
        title: "Haulover Inlet & North Miami Coast",
        description:
          "Cruise south toward the vibrant blue waters of Haulover Inlet and Biscayne Bay, ideal for ocean runs, anchoring out, and admiring the Miami coastal skyline.",
        image: {
          src: "/images/haven-running-front.jpeg",
          alt: "Haulover Inlet and North Miami coastal cruising",
        },
      },
      {
        number: "03",
        title: "Pompano Beach & Hillsboro Inlet",
        description:
          "Head north past Hillsboro Lighthouse and the quiet, pristine beaches of Pompano. Perfect for relaxing coastal cruising away from busy waterways.",
        image: {
          src: "/images/haven-bow-sunpad.jpeg",
          alt: "Pompano Beach and Hillsboro coastal waters",
        },
      },
      {
        number: "04",
        title: "Sandbars & Protected Anchorages",
        description:
          "Anchor in crystal-clear shallow waters for swimming, paddle boarding, and floating under the Florida sun with our steward attending to your group.",
        image: {
          src: "/images/haven-aft-deck.jpeg",
          alt: "Sandbar swimming and anchoring aboard HAVEN 550",
        },
      },
    ],
    columns: 2,
  },
  routeHighlight: {
    eyebrow: "YOUR PERSPECTIVE",
    headline: "A World Apart From the Shoreline.",
    paragraphs: [
      "From the waterways of Fort Lauderdale to the beautiful coastline between Haulover and Pompano Beach, HAVEN 550 offers an exceptional perspective on South Florida.",
      "Cruise past waterfront estates, enjoy scenic coastal views, or spend an afternoon discovering the beauty of the region from the water.",
    ],
    cta: {
      label: "REQUEST A CHARTER",
      href: "/contact",
    },
    image: {
      src: "/images/haven-aerial-topdown.jpeg",
      alt: "Aerial view of HAVEN 550 cruising coastal waters",
      caption: "South Florida Waters",
    },
    imagePosition: "right",
  },
  ctaBanner: {
    eyebrow: "DISCOVER SOUTH FLORIDA",
    headline: "Where Will Your Haven Take You?",
    subtext: "Connect with us to design your destination itinerary.",
    brandTagline: "Your Time. Your Waters. Your Haven.",
    cta: {
      label: "PLAN YOUR CRUISE",
      href: "/contact",
    },
    backgroundImage: "/images/haven-profile-speed.jpeg",
  },
};
