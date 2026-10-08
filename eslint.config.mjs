import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["src/app/**/*.{ts,tsx}", "src/components/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/content", "@/content/*", "../content/*", "../../content/*", "*/content/*"],
              message:
                "UI layer must not import /content directly. Use the service layer (lib/services/content.service.ts) instead.",
            },
            {
              group: [
                "@/lib/repositories/*",
                "../lib/repositories/*",
                "../../lib/repositories/*",
              ],
              message:
                "UI layer must not import repositories directly. Use the service layer instead.",
            },
          ],
        },
      ],
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
