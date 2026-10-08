import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { contentService } from "@/lib/services/content.service";
import { constructMetadata, getOrganizationJsonLd } from "@/lib/seo";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const homeData = await contentService.getHomePage();
  return constructMetadata(homeData.meta);
}

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
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full w-full flex flex-col bg-haven-navy text-haven-cream">
        <Header navigation={navigation} site={site} />
        <main className="w-full flex-1">{children}</main>
        <Footer navigation={navigation} site={site} />
      </body>
    </html>
  );
}
