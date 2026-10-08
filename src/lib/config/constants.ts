/**
 * Core brand and technical constants.
 */

export const BRAND = {
  name: "HAVEN 550",
  fullName: "HAVEN 550 | Private Yacht Charters",
  company: "Haven 550 LLC",
  founder: "Douglas Muhlbauer",
  tagline: "Your Time. Your Waters. Your Haven.",
  location: "Fort Lauderdale, Florida",
  email: "info@haven550.com",
  phone: "(954) 555-1234",
  maxGuests: 8,
  yachtLengthFeet: 57,
  yachtBuilder: "Ferretti",
  yachtYear: 2021,
} as const;

export const ROUTES = {
  home: "/",
  theYacht: "/the-yacht",
  experiences: "/experiences",
  destinations: "/destinations",
  charterRates: "/charter-rates",
  about: "/about",
  contact: "/contact",
  charterPolicies: "/charter-policies",
  privacyPolicy: "/privacy-policy",
} as const;
