import type { MetadataRoute } from "next";
import { env } from "@/lib/config/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/the-yacht",
    "/experiences",
    "/destinations",
    "/charter-rates",
    "/about",
    "/contact",
    "/charter-policies",
    "/privacy-policy",
  ];

  return routes.map((route) => ({
    url: `${env.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/the-yacht" || route === "/experiences" || route === "/contact" ? 0.8 : 0.6,
  }));
}
