import type { Metadata } from "next";
import { contentService } from "@/lib/services/content.service";
import { constructMetadata } from "@/lib/seo";
import { ContactPageContent } from "@/components/sections/ContactPageContent";

export async function generateMetadata(): Promise<Metadata> {
  const page = await contentService.getContactPage();
  return constructMetadata(page.meta);
}

export default function ContactPage() {
  return <ContactPageContent />;
}
