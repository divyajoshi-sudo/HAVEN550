/**
 * Content domain models for all 9 pages of haven550.com.
 */

export interface MetaContent {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}

export interface SiteInfo {
  brand: string;
  companyName: string;
  founder: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  domain: string;
  vessel: {
    year: number;
    builder: string;
    model: string;
    lengthFeet: number;
    guestCapacity: number;
  };
}

export interface NavLink {
  href: string;
  label: string;
  highlight?: boolean;
}

export interface NavigationContent {
  primary: NavLink[];
  footer: NavLink[];
  legal: NavLink[];
  ctaButton: {
    label: string;
    href: string;
  };
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  paragraphs: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: { src: string; alt: string };
}

export interface PageHeroContent {
  eyebrow: string;
  headline: string;
  description?: string;
  image?: { src: string; alt: string };
}

export interface SplitSectionContent {
  eyebrow?: string;
  headline: string;
  paragraphs: string[];
  cta?: { label: string; href: string };
  image: {
    src: string;
    alt: string;
    caption?: string;
  };
  imagePosition?: "left" | "right";
}

export interface FeatureCard {
  number?: string;
  title: string;
  description: string;
  image?: { src: string; alt: string };
  badge?: string;
  cta?: { label: string; href: string };
}

export interface FeatureGridContent {
  eyebrow?: string;
  headline: string;
  description?: string;
  items: FeatureCard[];
  cta?: { label: string; href: string };
  columns?: 2 | 3 | 4;
}

export interface GalleryItem {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  badge?: string;
  isMain?: boolean;
}

export interface GalleryGridContent {
  eyebrow?: string;
  headline?: string;
  items: GalleryItem[];
}

export interface RateItem {
  name: string;
  duration: string;
  price: string;
  description: string;
  popular?: boolean;
  inclusions?: string[];
}

export interface RatesContent {
  eyebrow: string;
  headline: string;
  subheadline?: string;
  rates: RateItem[];
  inclusionNote: string;
  gratuityNote: string;
  cta?: { label: string; href: string };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqContent {
  eyebrow?: string;
  headline: string;
  items: FaqItem[];
}

export interface CtaBannerContent {
  eyebrow: string;
  headline: string;
  subtext?: string;
  brandTagline?: string;
  cta: { label: string; href: string };
  backgroundImage?: string;
}

export interface PolicyClause {
  number?: string;
  title: string;
  body: string[];
}

export interface PolicyContent {
  meta: MetaContent;
  hero: PageHeroContent;
  lastUpdated: string;
  sections: PolicyClause[];
}

export interface HomePageContent {
  meta: MetaContent;
  hero: HeroContent;
  introduction: SplitSectionContent;
  vessel: {
    eyebrow: string;
    headline: string;
    specsBadge: string;
    paragraphs: string[];
    cta: { label: string; href: string };
    mainImage: { src: string; alt: string; caption?: string };
    detailImages: Array<{ src: string; alt: string; caption?: string }>;
  };
  experiences: FeatureGridContent;
  rates: RatesContent;
  destinations: SplitSectionContent;
  ctaBanner: CtaBannerContent;
}

export interface AmenityItem {
  icon: "crew" | "refreshments" | "music" | "water" | "food";
  title: string;
  description: string;
}

export interface AmenitySectionContent {
  eyebrow: string;
  headline: string;
  subheadline?: string;
  items: AmenityItem[];
}

export interface CategorizedGalleryItem {
  src: string;
  alt: string;
  category: "Exterior" | "Deck & Outdoor Spaces" | "Interior" | "Cruising" | "Onboard Experience";
  title?: string;
  subtitle?: string;
}

export interface CategorizedGalleryContent {
  eyebrow: string;
  headline: string;
  categories: Array<"Exterior" | "Deck & Outdoor Spaces" | "Interior" | "Cruising" | "Onboard Experience">;
  items: CategorizedGalleryItem[];
}

export interface YachtPageContent {
  meta: MetaContent;
  hero: {
    eyebrow: string;
    headline: string;
    badge: string;
    description: string;
    image: { src: string; alt: string };
  };
  introduction: SplitSectionContent;
  specs: {
    eyebrow: string;
    headline: string;
    image: { src: string; alt: string; caption?: string };
    items: Array<{ label: string; value: string }>;
  };
  amenities: AmenitySectionContent;
  gallery: CategorizedGalleryContent;
  ctaBanner: CtaBannerContent;
}

export interface ExperiencesPageContent {
  meta: MetaContent;
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    cta: { label: string; href: string };
    image: { src: string; alt: string };
  };
  possibilities: {
    eyebrow: string;
    headline: string;
    subheadline?: string;
    items: Array<{
      title: string;
      description: string;
      image: { src: string; alt: string };
      ctaHref?: string;
    }>;
  };
  dining: {
    eyebrow: string;
    headline: string;
    paragraphs: string[];
    note?: string;
    image: { src: string; alt: string; caption?: string };
  };
  ctaBanner: CtaBannerContent;
}

export interface DestinationsPageContent {
  meta: MetaContent;
  hero: PageHeroContent;
  destinations: FeatureGridContent;
  routeHighlight: SplitSectionContent;
  ctaBanner: CtaBannerContent;
}

export interface RatesPageContent {
  meta: MetaContent;
  hero: PageHeroContent;
  rates: RatesContent;
  inclusions: {
    headline: string;
    items: string[];
  };
  policiesNote: {
    headline: string;
    paragraphs: string[];
  };
  faq: FaqContent;
  ctaBanner: CtaBannerContent;
}

export interface AboutPageContent {
  meta: MetaContent;
  hero: PageHeroContent;
  story: SplitSectionContent;
  philosophy: SplitSectionContent;
  values: FeatureGridContent;
  ctaBanner: CtaBannerContent;
}

export interface ContactPageContent {
  meta: MetaContent;
  hero: PageHeroContent;
  directContact: {
    eyebrow: string;
    headline: string;
    paragraphs: string[];
    email: string;
    phone: string;
    location: string;
    responsePromise: string;
  };
  form: {
    headline: string;
    description: string;
    interests: string[];
    guestOptions: number[];
    successMessage: {
      title: string;
      body: string;
    };
  };
}
