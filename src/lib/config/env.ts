/**
 * Validated client environment variables.
 */

export const env = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://haven550.com",
  apiMode: (process.env.NEXT_PUBLIC_API_MODE || "mock") as "mock" | "live",
  isProduction: process.env.NODE_ENV === "production",
} as const;
