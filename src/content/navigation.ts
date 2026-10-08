import type { NavigationContent } from "@/types/content";

export const navigationContent: NavigationContent = {
  primary: [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/the-yacht", label: "THE YACHT" },
    { href: "/experiences", label: "EXPERIENCES" },
    { href: "/charter-rates", label: "PRICING" },
    { href: "/destinations", label: "DESTINATIONS" },
    { href: "/contact", label: "CONTACT" },
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
    label: "Request a Charter",
    href: "/contact",
  },
};
