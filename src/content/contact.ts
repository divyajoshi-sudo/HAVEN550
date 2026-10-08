import type { ContactPageContent } from "@/types/content";

export const contactContent: ContactPageContent = {
  meta: {
    title: "Contact & Charter Inquiry | HAVEN 550 | Fort Lauderdale",
    description:
      "Request a private charter aboard HAVEN 550. Connect directly with our team in Fort Lauderdale, Florida to reserve dates and customize your yachting experience.",
    keywords: [
      "charter inquiry",
      "book HAVEN 550",
      "Fort Lauderdale yacht contact",
      "private charter reservation",
      "Douglas Muhlbauer contact",
    ],
    canonical: "/contact",
  },
  hero: {
    eyebrow: "GET IN TOUCH",
    headline: "Request Your Charter.",
    description:
      "Every charter is tailored to your preferences. Please share your desired dates and group details below, and our team will respond promptly with availability and arrangements.",
    image: {
      src: "/images/haven-running-front.jpeg",
      alt: "Contact HAVEN 550 Private Yacht Charters",
    },
  },
  directContact: {
    eyebrow: "DIRECT COMMUNICATION",
    headline: "Speak With Our Team",
    paragraphs: [
      "We believe in personalized, prompt communication. Whether you have specific itinerary questions or wish to arrange a bespoke charter package, Douglas Muhlbauer and our team are here to assist.",
    ],
    email: "info@haven550.com",
    phone: "(954) 555-1234",
    location: "Fort Lauderdale, Florida",
    responsePromise: "Inquiries are typically answered within 2 to 4 business hours.",
  },
  form: {
    headline: "Charter Inquiry Form",
    description:
      "Complete the form below to check availability for your preferred date. No payment is required to submit an inquiry.",
    interests: [
      "Private Coastal Cruising (4, 6, or 8 Hours)",
      "Celebrations & Special Occasions",
      "Sunset Charter Experience",
      "Water Adventures & Sandbar Anchoring",
      "Custom / Bespoke Itinerary",
    ],
    guestOptions: [1, 2, 3, 4, 5, 6, 7, 8],
    successMessage: {
      title: "Thank You for Inquiring.",
      body: "We have received your charter request. A member of the HAVEN 550 team will review your preferred dates and contact you shortly with availability and details.",
    },
  },
};
