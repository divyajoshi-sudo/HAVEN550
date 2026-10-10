import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { contentService } from "@/lib/services/content.service";
import { constructMetadata, getOrganizationJsonLd } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const homeData = await contentService.getHomePage();
  return constructMetadata(homeData.meta);
}

import { Cormorant_Garamond, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { CustomCursor } from "@/components/motion/CustomCursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
      className={`h-full antialiased ${cormorant.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`min-h-full w-full flex flex-col bg-white text-[#262B30] selection:bg-[#101C29] selection:text-[#F8F8F6]`}>
        <SmoothScroll>
          <CustomCursor />
          <Header navigation={navigation} site={site} />
          <main id="main-content" className="w-full flex-1 pb-16 lg:pb-0">{children}</main>
          <Footer navigation={navigation} site={site} />
          <StickyMobileCta phone={site.phone} />
        </SmoothScroll>
      </body>
    </html>
  );
}
