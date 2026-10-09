import type { DestinationsPageContent } from "@/types/content";

export const destinationsContent: DestinationsPageContent = {
  meta: {
    title: "Fort Lauderdale Yacht Charter Destinations | HAVEN 550",
    description:
      "Explore Fort Lauderdale and South Florida's waterways aboard HAVEN 550. Private yacht charters operate between Haulover and Pompano Beach.",
    keywords: [
      "Fort Lauderdale yacht destinations",
      "South Florida yacht charter",
      "Pompano Beach boat charter",
      "Haulover inlet cruise",
      "Intracoastal Waterway yacht charter",
      "HAVEN 550",
    ],
    canonical: "/destinations",
  },
  hero: {
    eyebrow: "THE BEAUTY OF SOUTH FLORIDA",
    headline: "DISCOVER THE COAST FROM THE WATER.",
    paragraphs: [
      "Some of South Florida's most memorable views are best experienced from a private yacht.",
      "Explore the region's scenic waterways, waterfront architecture, and beautiful coastline aboard HAVEN 550.",
    ],
    image: {
      src: "/images/haven-aerial-stern.jpeg",
      alt: "Cruising destinations in South Florida aboard HAVEN 550",
    },
  },
  cruisingArea: {
    eyebrow: "WHERE WE CRUISE",
    headline: "South Florida, Your Way.",
    lead: [
      "HAVEN 550 primarily operates along the South Florida coastline between Haulover and Pompano Beach.",
      "Within this cruising area, guests can enjoy scenic coastal journeys and the waterfront atmosphere that makes South Florida a renowned yachting destination.",
    ],
    destinations: [
      {
        title: "Fort Lauderdale",
        description:
          "Known for its extensive waterways, waterfront estates, and vibrant marine culture, Fort Lauderdale offers an exceptional setting for private yacht cruising.",
        image: {
          src: "/images/haven-profile-speed.jpeg",
          alt: "Fort Lauderdale waterways and estate cruising",
        },
      },
      {
        title: "Pompano Beach",
        description:
          "Enjoy beautiful coastal scenery and a relaxed atmosphere along one of South Florida's distinctive waterfront destinations.",
        image: {
          src: "/images/haven-bow-sunpad.jpeg",
          alt: "Pompano Beach coastal scenery",
        },
      },
      {
        title: "Haulover",
        description:
          "Discover the coastal environment surrounding Haulover, with access to scenic waterways and views of South Florida's shoreline.",
        image: {
          src: "/images/haven-running-front.jpeg",
          alt: "Haulover coastal environment and waters",
        },
      },
      {
        title: "Intracoastal Waterway",
        description:
          "Experience South Florida's waterfront communities, impressive residences, and passing vessels while cruising its famous inland waterways.",
        image: {
          src: "/images/haven-aft-deck.jpeg",
          alt: "Intracoastal Waterway cruising aboard HAVEN 550",
        },
      },
    ],
    disclaimer:
      "Specific routes and destinations are subject to weather, navigation conditions, charter duration, and captain approval.",
  },
  boardingLocations: {
    eyebrow: "BEGIN YOUR JOURNEY",
    headline: "Convenient Boarding Options.",
    lead: "HAVEN 550 offers two designated boarding locations.",
    locations: [
      {
        name: "Swimming Hall of Fame Marina",
        city: "Fort Lauderdale, Florida",
      },
      {
        name: "Shooters Waterfront",
        city: "Fort Lauderdale, Florida",
      },
    ],
    notice:
      "Your confirmed boarding location and arrival instructions will be provided before departure.",
    pickupPolicy: "Pickup from other marinas is not offered.",
  },
  extendedCruising: {
    eyebrow: "BEYOND THE STANDARD ROUTE",
    headline: "Explore Further.",
    paragraphs: [
      "Requests for cruising beyond the standard Haulover-to-Pompano Beach area may be considered.",
      "Additional fuel charges apply to approved routes outside the standard operating area.",
      "All extended cruising requests are subject to availability, weather conditions, operational limitations, and captain approval.",
    ],
    cta: {
      label: "INQUIRE ABOUT YOUR ROUTE",
      href: "/contact?inquiry=extended-cruising",
    },
    image: {
      src: "/images/haven-aerial-topdown.jpeg",
      alt: "Aerial view of HAVEN 550 cruising coastal waters",
    },
  },
};
