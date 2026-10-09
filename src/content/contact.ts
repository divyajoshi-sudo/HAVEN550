import type { ContactPageContent } from "@/types/content";

export const contactContent: ContactPageContent = {
  meta: {
    title: "Contact HAVEN 550 | Fort Lauderdale Yacht Charters",
    description:
      "Contact HAVEN 550 LLC to inquire about private yacht charters in Fort Lauderdale. Explore availability, charter rates, and boarding locations.",
    keywords: [
      "Contact HAVEN 550",
      "Fort Lauderdale yacht charters",
      "Douglas Muhlbauer",
      "charter inquiry",
      "private yacht booking",
    ],
    canonical: "/contact",
  },
  hero: {
    eyebrow: "WE LOOK FORWARD TO WELCOMING YOU",
    headline: "LET'S PLAN YOUR TIME ON THE WATER.",
    paragraphs: [
      "Whether you're considering a private getaway, planning a celebration, or simply exploring charter options, we'd be pleased to hear from you.",
      "Complete the inquiry form below, and we'll be in touch to discuss your preferred experience.",
    ],
    image: {
      src: "/images/haven-running-front.jpeg",
      alt: "Contact HAVEN 550 Private Yacht Charters",
    },
  },
  form: {
    headline: "Request a Private Charter.",
    description:
      "Tell us a little about your plans, and we'll help you explore the available options.",
    occasions: [
      "Birthday Celebration",
      "Anniversary",
      "Romantic / Proposal",
      "Sunset Cruise",
      "Corporate Gathering",
      "Family Outing",
      "Coastal Cruising / Leisure",
      "Other Special Occasion",
    ],
    guestOptions: [1, 2, 3, 4, 5, 6, 7, 8],
    successMessage: {
      title: "Thank You for Your Interest in HAVEN 550.",
      body: "Your inquiry has been received. A member of our team will review your request and contact you regarding availability and next steps. Submitting an inquiry does not constitute a confirmed reservation.",
    },
  },
  directContact: {
    eyebrow: "GET IN TOUCH",
    headline: "We'd Love to Hear From You.",
    companyName: "HAVEN 550 LLC",
    email: "doug@hgsfl.com",
    phone: "+1 (516) 375-1093",
    businessAddress: {
      street: "3101 Bayshore Dr",
      cityStateZip: "Fort Lauderdale, FL 33304",
      country: "United States",
    },
    boardingLocations: [
      {
        name: "Swimming Hall of Fame Marina",
        city: "Fort Lauderdale, Florida",
      },
      {
        name: "Shooters Waterfront",
        city: "Fort Lauderdale, Florida",
      },
    ],
    boardingNote: "Boarding arrangements are confirmed individually for each charter.",
    responsePromise: "Inquiries are reviewed and answered promptly by our leadership team.",
  },
};
