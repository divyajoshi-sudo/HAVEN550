import type { RatesPageContent } from "@/types/content";

export const ratesContent: RatesPageContent = {
  meta: {
    title: "Yacht Charter Rates & Reservations | HAVEN 550",
    description:
      "Explore private yacht charter rates aboard HAVEN 550. Four-hour charters start at $3,000 with a captain, steward, and local fuel included.",
    keywords: [
      "yacht charter rates",
      "Fort Lauderdale yacht price",
      "Ferretti charter cost",
      "private boat charter pricing",
      "HAVEN 550 rates",
      "charter reservations",
    ],
    canonical: "/charter-rates",
  },
  hero: {
    eyebrow: "YOUR TIME ON THE WATER",
    headline: "AN EXPERIENCE WORTH EVERY MOMENT.",
    paragraphs: [
      "Discover private charter experiences aboard HAVEN 550.",
      "Choose from flexible charter durations designed for relaxing afternoons, special celebrations, and memorable days on the water.",
    ],
    image: {
      src: "/images/haven-profile-speed.jpeg",
      alt: "Charter rates and reservations for HAVEN 550",
    },
  },
  packages: {
    eyebrow: "SELECT YOUR EXPERIENCE",
    headline: "Charter Rates.",
    items: [
      {
        name: "THE ESCAPE",
        duration: "4 HOURS",
        price: "$3,000",
        description:
          "A private getaway designed for those who want to enjoy South Florida's waterways without committing to an entire day. Ideal for relaxed cruising, intimate celebrations, and time away from the ordinary.",
        cta: {
          label: "REQUEST 4-HOUR CHARTER",
          href: "/contact?package=escape-4-hour",
        },
        popular: false,
      },
      {
        name: "THE EXPERIENCE",
        duration: "6 HOURS",
        price: "$4,000",
        description:
          "More time to enjoy the yacht, explore the surrounding waterways, and create memorable moments with your guests. An excellent choice for celebrations and extended coastal cruising.",
        cta: {
          label: "REQUEST 6-HOUR CHARTER",
          href: "/contact?package=experience-6-hour",
        },
        popular: true,
      },
      {
        name: "THE FULL DAY",
        duration: "8 HOURS",
        price: "$5,000",
        description:
          "Make the most of your time aboard HAVEN 550 with a full-day private charter. Enjoy a relaxed schedule with additional time for cruising, entertaining, and water activities.",
        cta: {
          label: "REQUEST 8-HOUR CHARTER",
          href: "/contact?package=full-day-8-hour",
        },
        popular: false,
      },
    ],
  },
  includedWithCharter: {
    eyebrow: "THE HAVEN 550 EXPERIENCE",
    headline: "Consider the Details Taken Care Of.",
    description:
      "Your charter includes a professional captain, steward, fuel within the standard cruising area, water, ice, coolers, towels, music, floats, snorkeling equipment, and underwater scooters.",
    optionalAddons: [
      { label: "Optional Jet Ski", price: "$500" },
      { label: "Additional Charter Time", price: "$650 per hour" },
    ],
    gratuityNote: "A customary 20% crew gratuity is not included in advertised charter rates.",
  },
  reservationInfo: {
    eyebrow: "PLANNING YOUR CHARTER",
    headline: "Simple. Personal. Seamless.",
    subheadline: "Follow our simple four-step reservation process to secure your private charter.",
    steps: [
      {
        number: "01",
        title: "Submit Your Inquiry",
        description:
          "Choose your preferred charter date, duration, boarding location, and number of guests.",
      },
      {
        number: "02",
        title: "Confirm Availability",
        description:
          "Our team will review your request and contact you to confirm availability and charter details.",
      },
      {
        number: "03",
        title: "Secure Your Reservation",
        description:
          "A 20% non-refundable deposit is required to confirm your reservation.",
      },
      {
        number: "04",
        title: "Prepare for Departure",
        description:
          "The remaining balance is due 48 hours before your scheduled charter.",
      },
    ],
    paymentNote:
      "Payments are accepted through Zelle or Venmo, with payment instructions provided directly following confirmation.",
  },
  policies: {
    headline: "Charter Policies.",
    items: [
      {
        title: "Deposits",
        body: "A 20% non-refundable deposit is required to confirm a reservation.",
      },
      {
        title: "Final Payment",
        body: "The remaining charter balance must be paid at least 48 hours before departure.",
      },
      {
        title: "Cancellations",
        body: [
          "The deposit is non-refundable. For cancellations made at least 24 hours before departure, payments beyond the deposit are refundable.",
          "Cancellations made within 24 hours of departure are non-refundable in full.",
        ],
      },
      {
        title: "Weather",
        body: "If HAVEN 550 cancels a charter because of unsafe weather conditions, guests may receive a full refund or reschedule their charter.",
      },
      {
        title: "Additional Time",
        body: "Additional charter hours are available at $650 per hour, subject to availability and crew approval.",
      },
      {
        title: "Guest Requirements",
        body: "The maximum charter capacity is eight guests. Children must be older than five years. Pets are not permitted.",
      },
      {
        title: "Onboard Conduct",
        body: "Smoking and illegal drugs are prohibited aboard the yacht.",
      },
    ],
    closingNote:
      "All charters are subject to the applicable charter agreement, operational requirements, and captain approval.",
  },
  ctaBanner: {
    eyebrow: "HAVEN 550",
    headline: "Your Private Charter Begins Here.",
    subtext: "The water is waiting.",
    brandTagline: "Your Time. Your Waters. Your Haven.",
    cta: {
      label: "REQUEST A CHARTER",
      href: "/contact",
    },
    backgroundImage: "/images/haven-profile-speed.jpeg",
  },
};
