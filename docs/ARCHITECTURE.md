# HAVEN 550 Architecture Documentation

## 1. System Overview
**HAVEN 550** is built as a modular, decoupled Next.js application designed with strict separation of concerns, zero duplication, and full readiness for backend integration (Phase 2) without requiring any UI component or page modifications.

---

## 2. Layer Hierarchy & Unidirectional Dependency Flow

```
┌─────────────────────────────────────────────────────────────┐
│                       1. UI Layer                           │
│        (src/app/**/page.tsx & src/components/**)             │
│   • Presentational only                                      │
│   • Never imports raw content directly                       │
│   • Never calls fetch() directly                            │
└──────────────────────────────┬──────────────────────────────┘
                               │ calls
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                    2. Service Layer                         │
│             (src/lib/services/content.service.ts)           │
│   • Asynchronous contracts for all data access               │
│   • Swappable repository injection                          │
└──────────────────────────────┬──────────────────────────────┘
                               │ delegates to
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                  3. Repository Layer                        │
│          (src/lib/repositories/content.repository.ts)        │
│          (src/lib/repositories/content.static.ts)            │
│   • Interface-driven data source access                      │
│   • Reads from /content (or future headless CMS)            │
└──────────────────────────────┬──────────────────────────────┘
                               │ reads
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                   4. Content Domain                         │
│                    (src/content/*.ts)                       │
│   • Single source of truth for all copy & brand data        │
│   • Strictly structured and fully typed                      │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  5. API Client Layer                        │
│                (src/lib/api/client.ts)                      │
│   • The ONLY point of outbound form submission              │
│   • Mock Mode: simulates network delay (800ms)              │
│   • Live Mode: POST /api/inquiries (Phase 2 switch)         │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Directory Structure

```
src/
├── app/                      # Next.js App Router (9 Routes)
│   ├── page.tsx              # Home
│   ├── the-yacht/page.tsx    # The Yacht
│   ├── experiences/page.tsx  # Experiences
│   ├── destinations/page.tsx # Destinations
│   ├── charter-rates/page.tsx# Charter Rates
│   ├── about/page.tsx        # About
│   ├── contact/page.tsx      # Contact
│   ├── charter-policies/page.tsx # Charter Policies
│   ├── privacy-policy/page.tsx   # Privacy Policy
│   ├── layout.tsx            # Global Layout & JSON-LD schema
│   ├── not-found.tsx         # Custom 404 page
│   ├── error.tsx             # Error boundary
│   ├── loading.tsx           # Global loading state
│   ├── sitemap.ts            # Dynamic sitemap generator
│   ├── robots.ts             # Robots.txt generator
│   └── globals.css           # Design tokens & base styles
├── components/
│   ├── layout/               # Header, Footer, MobileMenu, Container, Section
│   ├── ui/                   # Button, Heading, Eyebrow, Card, Divider, ImageFrame, Input, Textarea, Select, FormField, Alert
│   ├── sections/             # Hero, PageHero, FeatureGrid, SplitContent, CtaBanner, GalleryGrid, FaqList, PolicySection, ProseBlock, RatesTable
│   └── forms/                # CharterInquiryForm
├── content/                  # Single source of truth for all copy
│   ├── site.ts               # Global brand, founder, and contact specs
│   ├── navigation.ts         # Navigation items
│   ├── home.ts               # Home page content
│   ├── yacht.ts              # The Yacht specifications & spaces
│   ├── experiences.ts        # Charter experiences
│   ├── destinations.ts       # South Florida destinations
│   ├── rates.ts              # Transparent rates & packages
│   ├── about.ts              # Founder Douglas Muhlbauer & philosophy
│   ├── contact.ts            # Contact page & inquiry form text
│   ├── policies.ts           # Charter policies
│   └── privacy.ts            # Privacy policy
├── lib/
│   ├── api/                  # Unified client and response envelope helpers
│   ├── config/               # Validated env and brand constants
│   ├── repositories/         # Repository contracts & static implementation
│   ├── services/             # Content service layer
│   ├── validation/           # Shared Zod inquiry schema
│   ├── seo.ts                # Metadata & JSON-LD helpers
│   └── utils.ts              # Utility helpers
└── types/                    # Shared TypeScript domain contracts
    ├── api.ts                # Envelope response types
    ├── content.ts            # Content domain models
    └── inquiry.ts            # Inquiry form DTOs
```

---

## 4. Lint & Layering Enforcements
- ESLint rule `no-restricted-imports` strictly forbids `src/app/**` and `src/components/**` from importing `src/content/**` or `src/lib/repositories/**`.
- UI components consume data exclusively via props passed from page server components, which obtain data from `contentService`.
