import type { PolicyContent } from "@/types/content";

export const policiesContent: PolicyContent = {
  meta: {
    title: "Charter Terms & Policies | HAVEN 550 Fort Lauderdale Yacht Charters",
    description:
      "Review the operational terms, reservation deposits, payment terms, cancellation policies, and cruising guidelines for HAVEN 550 luxury yacht charters in Fort Lauderdale.",
    keywords: [
      "charter terms",
      "charter policies",
      "yacht reservation deposit",
      "cancellation policy",
      "HAVEN 550",
      "Fort Lauderdale yacht charter rules",
      "Douglas Muhlbauer",
    ],
    canonical: "/charter-policies",
  },
  hero: {
    eyebrow: "OPERATIONAL STANDARDS & GUIDELINES",
    headline: "Charter Terms & Policies.",
    description:
      "This page contains the complete operational terms for HAVEN 550 private charters. All charters are subject to clear operating standards designed to ensure passenger safety, transparent expectations, and an exceptional time on the water.",
    image: {
      src: "/images/haven-exterior-profile.jpeg",
      alt: "HAVEN 550 luxury yacht cruising off Fort Lauderdale",
    },
  },
  lastUpdated: "January 2026",
  highlights: [
    {
      label: "Reservation Deposit",
      value: "20% Deposit",
      detail: "Required to confirm and secure your charter date.",
    },
    {
      label: "Payment Balance",
      value: "48 Hours Prior",
      detail: "Final balance payable via Zelle or Venmo.",
    },
    {
      label: "Guest Limit",
      value: "Up to 8 Guests",
      detail: "Intimate private group setting; children age 5+.",
    },
    {
      label: "Weather Policy",
      value: "Full Refund / Reschedule",
      detail: "If HAVEN 550 cancels due to unsafe marine conditions.",
    },
  ],
  sections: [
    {
      number: "01",
      title: "Charter Reservations",
      body: [
        "All charter reservations are subject to availability, confirmation by HAVEN 550 LLC, and acceptance of the applicable charter agreement.",
      ],
    },
    {
      number: "02",
      title: "Reservation Deposit",
      body: [
        "A 20% non-refundable deposit is required to confirm a charter reservation.",
      ],
    },
    {
      number: "03",
      title: "Payment Terms",
      body: [
        "The remaining charter balance is due no later than 48 hours before scheduled departure.",
        "Accepted payment methods are Zelle and Venmo.",
      ],
    },
    {
      number: "04",
      title: "Cancellation Policy",
      body: [
        "The reservation deposit is non-refundable.",
        "For cancellations made at least 24 hours before scheduled departure, payments received beyond the deposit are refundable.",
        "Cancellations within 24 hours of departure are non-refundable.",
      ],
    },
    {
      number: "05",
      title: "Weather Cancellations",
      body: [
        "The captain and operator retain authority to determine whether weather and operating conditions permit a safe departure.",
        "If HAVEN 550 cancels a charter because of unsafe weather, the customer may receive a full refund or reschedule.",
      ],
    },
    {
      number: "06",
      title: "Guest Capacity",
      body: [
        "The maximum number of charter guests is eight.",
        "Children must be older than five years of age.",
      ],
    },
    {
      number: "07",
      title: "Prohibited Activities",
      body: [
        "Smoking, illegal drugs, and unlawful activities are strictly prohibited aboard the yacht.",
        "Pets are not permitted.",
      ],
    },
    {
      number: "08",
      title: "Water Activities",
      body: [
        "Use of Jet Skis and other water equipment is subject to applicable safety requirements, operating conditions, and crew instructions.",
        "Jet Ski rentals require a signed waiver and applicable boating-safety documentation.",
      ],
    },
    {
      number: "09",
      title: "Additional Charter Time",
      body: [
        "Additional charter hours are charged at $650 per hour, subject to availability and approval.",
      ],
    },
    {
      number: "10",
      title: "Cruising Area",
      body: [
        "Standard charter rates include local fuel for cruising between Haulover and Pompano Beach.",
        "Additional fuel charges may apply to approved routes outside the standard cruising area.",
      ],
    },
    {
      number: "11",
      title: "Gratuities",
      body: [
        "Crew gratuities are not included in advertised charter rates. A gratuity of 20% is customary.",
      ],
    },
  ],
  disclaimer: {
    badge: "OPERATOR & REGULATORY NOTICE",
    title: "Charter Agreement & Passenger Capacity",
    body: "These are proposed customer-facing terms based on Douglas's answers. They should be reviewed against the actual charter agreement and applicable Florida and maritime requirements before publication. In particular, the operator should verify the charter structure and legal passenger capacity.",
  },
  cta: {
    eyebrow: "LET'S PLAN YOUR TIME ON THE WATER",
    headline: "Ready to Discuss Your Charter?",
    description:
      "Whether you are planning a relaxed coastal escape, celebrating a milestone, or inquiring about custom cruising routes, we are pleased to assist.",
    primaryCta: {
      label: "REQUEST A CHARTER",
      href: "/contact",
    },
    secondaryCta: {
      label: "CALL +1 (516) 375-1093",
      href: "tel:+15163751093",
    },
  },
};
