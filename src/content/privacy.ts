import type { PolicyContent } from "@/types/content";

export const privacyContent: PolicyContent = {
  meta: {
    title: "Privacy Policy | HAVEN 550 | Haven 550 LLC",
    description:
      "Privacy policy for Haven 550 LLC and haven550.com. Learn how we handle your inquiry information and protect your personal privacy.",
    keywords: ["privacy policy", "data protection", "Haven 550 LLC privacy", "haven550.com"],
    canonical: "/privacy-policy",
  },
  hero: {
    eyebrow: "LEGAL & COMPLIANCE",
    headline: "Privacy Policy.",
    description:
      "Haven 550 LLC respects your personal privacy. This policy explains how we collect, use, and safeguard information submitted through haven550.com.",
  },
  lastUpdated: "January 2026",
  sections: [
    {
      number: "01",
      title: "Information We Collect",
      body: [
        "When you submit a charter inquiry through our website, we collect personal details including your full name, email address, telephone number, preferred charter dates, guest count, and any personal messages or requests you provide.",
        "We do not collect payment or credit card details through this website. All financial transactions are handled directly through authorized secure invoicing upon contract execution.",
      ],
    },
    {
      number: "02",
      title: "How We Use Your Information",
      body: [
        "Information submitted through our inquiry form is used exclusively by Haven 550 LLC to verify yacht availability, provide tailored charter quotations, and communicate with you regarding your voyage.",
        "We never sell, rent, or trade your personal information with third-party marketing brokers or unrelated companies.",
      ],
    },
    {
      number: "03",
      title: "Data Retention & Security",
      body: [
        "We implement industry-standard organizational and technical measures to protect the personal information you share with us against unauthorized access or disclosure.",
        "Inquiry records are retained only for as long as necessary to fulfill charter bookings, maintain legitimate maritime business records, or comply with legal requirements.",
      ],
    },
    {
      number: "04",
      title: "Cookies & Analytics",
      body: [
        "haven550.com may use essential and privacy-focused performance cookies to ensure proper website functionality, page loading performance, and aggregate anonymous traffic statistics.",
      ],
    },
    {
      number: "05",
      title: "Contact Regarding Your Privacy",
      body: [
        "If you have questions about this Privacy Policy or wish to request the deletion or correction of your inquiry details, please contact Haven 550 LLC directly at info@haven550.com or by mail at Fort Lauderdale, Florida.",
      ],
    },
  ],
};
