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
 * Contract for retrieving website content.
 * In Phase 1, implemented by StaticContentRepository.
 * In Phase 2, can be extended by CmsContentRepository without changing any UI code.
 */
export interface ContentRepository {
  getSiteInfo(): Promise<SiteInfo>;
  getNavigation(): Promise<NavigationContent>;
  getHomePage(): Promise<HomePageContent>;
  getYachtPage(): Promise<YachtPageContent>;
  getExperiencesPage(): Promise<ExperiencesPageContent>;
  getDestinationsPage(): Promise<DestinationsPageContent>;
  getRatesPage(): Promise<RatesPageContent>;
  getAboutPage(): Promise<AboutPageContent>;
  getContactPage(): Promise<ContactPageContent>;
  getCharterPoliciesPage(): Promise<PolicyContent>;
  getPrivacyPolicyPage(): Promise<PolicyContent>;
}
