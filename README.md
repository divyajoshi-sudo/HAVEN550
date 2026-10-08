# HAVEN 550 | Private Yacht Charters

> Boutique luxury yacht charters aboard a 57-foot Ferretti yacht based in Fort Lauderdale, Florida.  
> **Brand**: HAVEN 550 | Private Yacht Charters  
> **Entity**: Haven 550 LLC (Founder: Douglas Muhlbauer)  
> **Tagline**: *Your Time. Your Waters. Your Haven.*  
> **Domain**: haven550.com  

---

## 1. Tech Stack
- **Framework**: Next.js 16 (App Router) with React 19
- **Styling**: Tailwind CSS v4 with bespoke luxury tokens (navy, gold, cream, slate)
- **Typography**: Cormorant Garamond (headings) & Inter (body)
- **Validation**: Zod (shared schema)
- **Testing**: Vitest + Testing Library
- **Quality**: ESLint + TypeScript (strict mode)

---

## 2. Quick Start & Execution

### Install Dependencies
```bash
npm install --legacy-peer-deps
```

### Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### Run Tests
```bash
npm run test
```

### Run Linting & Type Checks
```bash
npm run lint
npm run type-check
```

### Production Build
```bash
npm run build
```

---

## 3. Project Architecture

The codebase follows a strict **unidirectional dependency flow**:
```
UI Layer (app/ & components/)
      ↓ (calls)
Service Layer (lib/services/content.service.ts)
      ↓ (delegates to)
Repository Layer (lib/repositories/content.static.ts)
      ↓ (reads)
Content Domain (src/content/*.ts)
```

- **UI Never Imports Content Directly**: Enforced via ESLint rule `no-restricted-imports`.
- **Form Submissions**: Routed strictly through `src/lib/api/client.ts` (`mock` mode for Phase 1).

---

## 4. How to Edit Copy
All website text is decoupled from JSX and stored in `src/content/`:
- `site.ts`: Company name, phone, email, location, vessel specs.
- `navigation.ts`: Header, footer, and policy navigation links.
- `home.ts`: All 7 sections of the Home page.
- `yacht.ts`: Specifications, onboard spaces, and gallery metadata.
- `experiences.ts`: Signature charter experiences and bespoke itineraries.
- `destinations.ts`: South Florida cruising grounds and routes.
- `rates.ts`: Package pricing, duration, inclusions, and FAQs.
- `about.ts`: Founder background, story, and philosophy.
- `contact.ts`: Inquiry form text, guest options, and response commitments.
- `policies.ts`: Charter operational standards and cancellation policies.
- `privacy.ts`: Privacy policy for Haven 550 LLC.

---

## 5. How to Add or Update Images
1. Place new real photography in `public/images/`.
2. Reference the image path in the relevant content file (e.g. `src/content/home.ts` or `src/content/yacht.ts`).
3. Components use the reusable `<ImageFrame />` or `<Image />` component with `sizes`, `priority`, and descriptive `alt` text.

---

## 6. How to Compose a New Page Using Shared Sections
All pages are server components that call `contentService` and compose reusable sections:

```tsx
import type { Metadata } from "next";
import { contentService } from "@/lib/services/content.service";
import { constructMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export async function generateMetadata(): Promise<Metadata> {
  const page = await contentService.getExperiencesPage();
  return constructMetadata(page.meta);
}

export default async function ExperiencesPage() {
  const page = await contentService.getExperiencesPage();

  return (
    <>
      <PageHero content={page.hero} />
      <FeatureGrid content={page.experiences} background="navy" />
      <CtaBanner content={page.ctaBanner} />
    </>
  );
}
```

---

## 7. Documentation
- [Architecture Details](docs/ARCHITECTURE.md)
- [Backend Blueprint for Phase 2](docs/BACKEND_BLUEPRINT.md)
