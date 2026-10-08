import type { ContentRepository } from "./content.repository";
import type {
  AboutPageContent,
  ContactPageContent,
  DestinationsPageContent,
  ExperiencesPageContent,
  HomePageContent,
  NavigationContent,
  PolicyContent,
  RatesPageContent,
  SiteInfo,
  YachtPageContent,
} from "@/types/content";

import { siteContent } from "@/content/site";
import { navigationContent } from "@/content/navigation";
import { homeContent } from "@/content/home";
import { yachtContent } from "@/content/yacht";
import { experiencesContent } from "@/content/experiences";
import { destinationsContent } from "@/content/destinations";
import { ratesContent } from "@/content/rates";
import { aboutContent } from "@/content/about";
import { contactContent } from "@/content/contact";
import { policiesContent } from "@/content/policies";
import { privacyContent } from "@/content/privacy";

/**
 * Static implementation of ContentRepository that reads from /content.
 * In Phase 2, an alternate CMS repository can implement ContentRepository
 * without requiring any changes to UI components or pages.
 */
export class StaticContentRepository implements ContentRepository {
  async getSiteInfo(): Promise<SiteInfo> {
    return siteContent;
  }

  async getNavigation(): Promise<NavigationContent> {
    return navigationContent;
  }

  async getHomePage(): Promise<HomePageContent> {
    return homeContent;
  }

  async getYachtPage(): Promise<YachtPageContent> {
    return yachtContent;
  }

  async getExperiencesPage(): Promise<ExperiencesPageContent> {
    return experiencesContent;
  }

  async getDestinationsPage(): Promise<DestinationsPageContent> {
    return destinationsContent;
  }

  async getRatesPage(): Promise<RatesPageContent> {
    return ratesContent;
  }

  async getAboutPage(): Promise<AboutPageContent> {
    return aboutContent;
  }

  async getContactPage(): Promise<ContactPageContent> {
    return contactContent;
  }

  async getCharterPoliciesPage(): Promise<PolicyContent> {
    return policiesContent;
  }

  async getPrivacyPolicyPage(): Promise<PolicyContent> {
    return privacyContent;
  }
}

export const staticContentRepository = new StaticContentRepository();
