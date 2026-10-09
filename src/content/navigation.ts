import type { NavigationContent } from "@/types/content";

export const navigationContent: NavigationContent = {
  primary: [
    { href: "/", label: "Home" },
    { href: "/the-yacht", label: "The Yacht" },
    { href: "/experiences", label: "Experiences" },
    { href: "/destinations", label: "Destinations" },
    { href: "/charter-rates", label: "Charter Rates" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  footer: [
    { href: "/the-yacht", label: "The Yacht" },
    { href: "/experiences", label: "Experiences" },
    { href: "/destinations", label: "Destinations" },
    { href: "/charter-rates", label: "Charter Rates" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/charter-policies", label: "Charter Policies" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ],
  ctaButton: {
    label: "REQUEST A CHARTER",
    href: "/contact",
  },
};
