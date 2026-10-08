import type { ContentRepository } from "../repositories/content.repository";
import { staticContentRepository } from "../repositories/content.static";
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

/**
 * Service layer for content retrieval.
 * UI components and pages interact ONLY with this service layer,
 * never directly importing repositories or raw content files.
 */
class ContentService {
  private repository: ContentRepository;

  constructor(repository: ContentRepository = staticContentRepository) {
    this.repository = repository;
  }

  // =========================================================================
  // PHASE2: If CONTENT_SOURCE=cms is enabled, this repository can be swapped
  // via a factory method without touching any page or UI component.
  // =========================================================================
  public setRepository(repository: ContentRepository): void {
    this.repository = repository;
  }

  async getSiteInfo(): Promise<SiteInfo> {
    return this.repository.getSiteInfo();
  }

  async getNavigation(): Promise<NavigationContent> {
    return this.repository.getNavigation();
  }

  async getHomePage(): Promise<HomePageContent> {
    return this.repository.getHomePage();
  }

  async getYachtPage(): Promise<YachtPageContent> {
    return this.repository.getYachtPage();
  }

  async getExperiencesPage(): Promise<ExperiencesPageContent> {
    return this.repository.getExperiencesPage();
  }

  async getDestinationsPage(): Promise<DestinationsPageContent> {
    return this.repository.getDestinationsPage();
  }

  async getRatesPage(): Promise<RatesPageContent> {
    return this.repository.getRatesPage();
  }

  async getAboutPage(): Promise<AboutPageContent> {
    return this.repository.getAboutPage();
  }

  async getContactPage(): Promise<ContactPageContent> {
    return this.repository.getContactPage();
  }

  async getCharterPoliciesPage(): Promise<PolicyContent> {
    return this.repository.getCharterPoliciesPage();
  }

  async getPrivacyPolicyPage(): Promise<PolicyContent> {
    return this.repository.getPrivacyPolicyPage();
  }
}

export const contentService = new ContentService();
