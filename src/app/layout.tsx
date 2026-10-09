import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { contentService } from "@/lib/services/content.service";
import { constructMetadata, getOrganizationJsonLd } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const homeData = await contentService.getHomePage();
  return constructMetadata(homeData.meta);
}

import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { AccessibilityPanel } from "@/components/ui/AccessibilityPanel";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navigation, site] = await Promise.all([
    contentService.getNavigation(),
    contentService.getSiteInfo(),
  ]);

  const jsonLd = getOrganizationJsonLd();

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full w-full flex flex-col bg-haven-navy text-haven-cream selection:bg-[#B9A078]/30 selection:text-white">
        <SmoothScroll>
          <CustomCursor />
          <AccessibilityPanel />
          <Header navigation={navigation} site={site} />
          <main id="main-content" className="w-full flex-1 pb-16 lg:pb-0">{children}</main>
          <Footer navigation={navigation} site={site} />
          <StickyMobileCta phone={site.phone} />
        </SmoothScroll>
      </body>
    </html>
  );
}
