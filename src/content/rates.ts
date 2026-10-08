import type { RatesPageContent } from "@/types/content";

export const ratesContent: RatesPageContent = {
  meta: {
    title: "Charter Rates & Pricing | HAVEN 550 | Fort Lauderdale",
    description:
      "Transparent private charter rates for HAVEN 550 Ferretti yacht: 4-hour Escape ($3,000), 6-hour Experience ($4,000), and 8-hour Full Day ($5,000). Includes captain & steward.",
    keywords: [
      "yacht charter rates",
      "Fort Lauderdale yacht price",
      "Ferretti charter cost",
      "private boat charter pricing",
      "HAVEN 550 rates",
    ],
    canonical: "/charter-rates",
  },
  hero: {
    eyebrow: "THE PRIVILEGE OF PRIVACY",
    headline: "Your Private Charter Awaits.",
    description:
      "Transparent, all-inclusive yachting rates. No hidden marina charges or unexpected fuel surcharges for standard local cruising.",
    image: {
      src: "/images/haven-profile-speed.jpeg",
      alt: "Charter rates and pricing for HAVEN 550",
    },
  },
  rates: {
    eyebrow: "CHARTER PACKAGES",
    headline: "Choose the Experience That Suits Your Day.",
    subheadline: "All rates are for the private charter of the entire yacht (up to 8 guests).",
    rates: [
      {
        name: "The Escape",
        duration: "4 Hours",
        price: "$3,000",
        description: "A refined morning or afternoon coastal escape along Fort Lauderdale waterways.",
        popular: false,
        inclusions: [
          "4 hours private charter",
          "Up to 8 guests",
          "USCG licensed captain & steward",
          "Local cruising fuel included",
          "Ice, bottled water & soft drinks",
          "Standard water sports gear",
        ],
      },
      {
        name: "The Experience",
        duration: "6 Hours",
        price: "$4,000",
        description: "The quintessential half-day journey with ample time to cruise, anchor, and swim.",
        popular: true,
        inclusions: [
          "6 hours private charter",
          "Up to 8 guests",
          "USCG licensed captain & steward",
          "Local cruising fuel included",
          "Ice, bottled water & soft drinks",
          "Snorkeling gear & water scooter",
          "Extended anchorage time",
        ],
      },
      {
        name: "The Full Day",
        duration: "8 Hours",
        price: "$5,000",
        description: "An unhurried full-day immersion along the South Florida coastline from dawn to dusk.",
        popular: false,
        inclusions: [
          "8 hours private charter",
          "Up to 8 guests",
          "USCG licensed captain & steward",
          "Local cruising fuel included",
          "Ice, bottled water & soft drinks",
          "Full water adventure setup",
          "Custom destination itinerary",
        ],
      },
    ],
    inclusionNote:
      "Every charter includes a professional captain, steward, local cruising fuel, and selected onboard amenities.",
    gratuityNote: "Customary crew gratuity of 20% is not included.",
    cta: {
      label: "INQUIRE ABOUT AVAILABILITY",
      href: "/contact",
    },
  },
  inclusions: {
    headline: "What Is Included in Every Charter",
    items: [
      "Exclusive private use of HAVEN 550 for up to 8 guests",
      "USCG licensed Master Captain and dedicated professional steward",
      "Standard fuel for local cruising routes",
      "Complimentary bottled water, soft drinks, ice, and glassware",
      "Bluetooth sound system with zoned controls throughout the yacht",
      "Snorkeling gear and safety equipment for all guests",
      "Post-charter yacht cleaning and sanitation",
    ],
  },
  policiesNote: {
    headline: "Gratuity & Charter Notes",
    paragraphs: [
      "Crew Gratuity: A customary 20% crew gratuity is not included in the charter fee and is paid directly to the captain at the conclusion of your voyage.",
      "Provisions & Catering: Guests are welcome to bring their preferred beverages and gourmet provisions, or we can assist in arranging private catering prior to departure.",
    ],
  },
  faq: {
    eyebrow: "COMMON QUESTIONS",
    headline: "Frequently Asked Questions",
    items: [
      {
        question: "How many guests can HAVEN 550 accommodate?",
        answer:
          "HAVEN 550 is certified and comfortable for up to 8 guests. This ensures an exclusive, uncrowded, and premium atmosphere for everyone aboard.",
      },
      {
        question: "What is the departure and return location?",
        answer:
          "Our primary dockage is in Fort Lauderdale, Florida. Specific marina departure instructions and parking details will be provided upon confirmation of your charter.",
      },
      {
        question: "What happens in the event of inclement weather?",
        answer:
          "Safety is our utmost priority. In the event of severe weather or unsafe marine conditions as determined by the captain, we will work with you to reschedule your charter or process a full refund in accordance with our Charter Policies.",
      },
      {
        question: "Can we bring our own food and alcohol?",
        answer:
          "Yes. You are welcome to bring any food, wine, and spirits you wish. Our steward will assist with chilling, uncorking, and serving throughout your time aboard.",
      },
    ],
  },
  ctaBanner: {
    eyebrow: "READY TO RESERVE?",
    headline: "Secure Your Preferred Charter Date.",
    subtext: "Charters are booked on a first-inquired basis.",
    brandTagline: "Your Time. Your Waters. Your Haven.",
    cta: {
      label: "REQUEST A CHARTER",
      href: "/contact",
    },
    backgroundImage: "/images/haven-profile-speed.jpeg",
  },
};
