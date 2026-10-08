import type { YachtPageContent } from "@/types/content";

export const yachtContent: YachtPageContent = {
  meta: {
    title: "The Yacht | 57-Foot Ferretti Luxury Charter | HAVEN 550",
    description:
      "Explore HAVEN 550, a 2021 Ferretti 57-foot private yacht accommodating up to eight guests in Fort Lauderdale, Florida.",
    keywords: [
      "Ferretti 57 yacht",
      "Ferretti 550 charter",
      "luxury yacht Fort Lauderdale",
      "HAVEN 550 specifications",
      "private yacht rental Fort Lauderdale",
    ],
    canonical: "/the-yacht",
  },
  hero: {
    eyebrow: "INTRODUCING HAVEN 550",
    headline: "A PRIVATE WORLD ON THE WATER.",
    badge: "2021 Ferretti | 57 Feet",
    description:
      "Discover the sophistication of Italian yacht design, where elegant styling and contemporary comfort create an exceptional setting for life on the water.",
    image: {
      src: "/images/haven-running-front.jpeg",
      alt: "HAVEN 550 57-foot Ferretti luxury yacht exterior on the water",
    },
  },
  introduction: {
    eyebrow: "THE YACHT",
    headline: "DESIGNED FOR THE JOURNEY.",
    paragraphs: [
      "The Ferretti name is associated with Italian craftsmanship, thoughtful design, and an enduring passion for life at sea.",
      "HAVEN 550 brings that heritage to South Florida, offering a beautifully appointed private yacht for coastal cruising, relaxation, and intimate gatherings.",
      "With comfortable spaces for socializing and enjoying the surrounding scenery, the vessel offers a welcoming environment for guests seeking a refined experience on the water.",
    ],
    image: {
      src: "/images/haven-aft-deck.jpeg",
      alt: "Aft deck and teak outdoor dining area aboard HAVEN 550",
      caption: "Aft Deck & Alfresco Lounge",
    },
    imagePosition: "right",
  },
  specs: {
    eyebrow: "THE DETAILS",
    headline: "Meet HAVEN 550.",
    image: {
      src: "/images/haven-profile-speed.jpeg",
      alt: "HAVEN 550 Ferretti yacht running profile with city skyline",
      caption: "Ferretti 57 Running Profile",
    },
    items: [
      { label: "Yacht", value: "Ferretti" },
      { label: "Model Year", value: "2021" },
      { label: "Length", value: "57 Feet" },
      { label: "Maximum Charter Guests", value: "8" },
      { label: "Crew", value: "Professional Captain & Steward" },
      { label: "Home Region", value: "Fort Lauderdale, Florida" },
      { label: "Charter Type", value: "Private Yacht Charter" },
    ],
  },
  amenities: {
    eyebrow: "THOUGHTFULLY PROVIDED",
    headline: "Everything You Need to Unwind.",
    subheadline:
      "Aboard HAVEN 550, the details are taken care of so you can focus on enjoying your time on the water.",
    items: [
      {
        icon: "crew",
        title: "Professional Crew",
        description:
          "A dedicated captain and steward provide assistance throughout your charter.",
      },
      {
        icon: "refreshments",
        title: "Refreshments & Comfort",
        description:
          "Complimentary water, ice, coolers, and towels are provided for guests.",
      },
      {
        icon: "music",
        title: "Music & Entertainment",
        description:
          "Enjoy your favorite music while cruising the beautiful South Florida waterways.",
      },
      {
        icon: "water",
        title: "On-Water Activities",
        description:
          "Floating equipment, snorkeling masks, snorkels, and underwater scooters are available for guest enjoyment.",
      },
      {
        icon: "food",
        title: "Food & Beverages",
        description:
          "Guests are welcome to bring their own food and beverages or coordinate provisioning in advance with the yacht's steward.",
      },
    ],
  },
  gallery: {
    eyebrow: "LIFE ABOARD",
    headline: "A Closer Look at HAVEN 550.",
    categories: [
      "Exterior",
      "Deck & Outdoor Spaces",
      "Interior",
      "Cruising",
      "Onboard Experience",
    ],
    items: [
      {
        src: "/images/haven-running-front.jpeg",
        alt: "HAVEN 550 front running profile",
        category: "Exterior",
        title: "Open Water Elegance",
        subtitle: "South Florida Waters",
      },
      {
        src: "/images/haven-profile-speed.jpeg",
        alt: "HAVEN 550 side profile at speed",
        category: "Cruising",
        title: "Coastal Cruising",
        subtitle: "Fort Lauderdale Coastline",
      },
      {
        src: "/images/haven-aft-deck.jpeg",
        alt: "Aft deck dining and teak steps",
        category: "Deck & Outdoor Spaces",
        title: "Aft Deck Lounge",
        subtitle: "Alfresco Dining & Shade",
      },
      {
        src: "/images/haven-bow-sunpad.jpeg",
        alt: "Bow sunpad lounge with Haven pillow",
        category: "Deck & Outdoor Spaces",
        title: "Bow Sun Lounge",
        subtitle: "Forward Sunpad Sanctuary",
      },
      {
        src: "/images/haven-salon-aft.jpeg",
        alt: "Main salon looking aft",
        category: "Interior",
        title: "Main Salon Living",
        subtitle: "Bespoke Italian Craftsmanship",
      },
      {
        src: "/images/haven-salon-helm.jpeg",
        alt: "Main salon helm and panoramic windows",
        category: "Interior",
        title: "Helm & Panoramic Windows",
        subtitle: "Climate Controlled Sanctuary",
      },
      {
        src: "/images/haven-aerial-topdown.jpeg",
        alt: "Flybridge top-down drone shot",
        category: "Exterior",
        title: "Flybridge Layout",
        subtitle: "Bird's-Eye Perspective",
      },
      {
        src: "/images/haven-aerial-stern.jpeg",
        alt: "Aerial tracking shot over open water",
        category: "Onboard Experience",
        title: "Private Haven",
        subtitle: "Unrestricted Ocean Views",
      },
    ],
  },
  ctaBanner: {
    eyebrow: "RESERVE YOUR VOYAGE",
    headline: "Experience HAVEN 550 for Yourself.",
    subtext:
      "Discover what makes a private yacht charter a truly distinctive way to experience South Florida.",
    brandTagline: "Your Time. Your Waters. Your Haven.",
    cta: {
      label: "REQUEST A PRIVATE CHARTER",
      href: "/contact",
    },
    backgroundImage: "/images/haven-running-front.jpeg",
  },
};
