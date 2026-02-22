

# Product Pages Redesign: Salesforce-Style Landing Pages

## Vision

Redesign all 6 product pages (AliphChat, GRC Platform, Privacy Shield, Organization Memory, Global LLM, Agentic AI) as serious, conversion-focused product landing pages modeled after Salesforce's product marketing pages. Each page should feel like it exists to convince a decision-maker to sign up for a demo -- not just inform.

## Salesforce Landing Page Pattern (Applied to Every Page)

Each product page will follow this 8-section structure:

```text
+--------------------------------------------------+
| 1. HERO: Bold value prop + dual CTA              |
|    "Watch Demo" + "Start Free Trial/Request Demo" |
|    + product screenshot/mockup right-aligned      |
+--------------------------------------------------+
| 2. SOCIAL PROOF: Customer logos or stats bar      |
|    "Trusted by X enterprises" or impact metrics   |
+--------------------------------------------------+
| 3. PRODUCT SHOWCASE: Full-width product image     |
|    with parallax + overlay stat or quote           |
+--------------------------------------------------+
| 4. FEATURE PILLARS: 3-4 key capabilities          |
|    Icon + title + description + "Learn more" link  |
|    Alternating left/right image-text layout        |
+--------------------------------------------------+
| 5. ROI / IMPACT NUMBERS: Big stat cards           |
|    "80% faster" / "5x reduction" style metrics     |
+--------------------------------------------------+
| 6. HOW IT WORKS: Numbered step flow               |
|    Visual pipeline or process diagram              |
+--------------------------------------------------+
| 7. COMPARISON / OBJECTION HANDLING                |
|    "Why not just use X?" table or FAQ accordion    |
+--------------------------------------------------+
| 8. FINAL CTA: Full-width conversion banner        |
|    Headline + subtitle + dual buttons              |
|    + small trust indicators beneath                |
+--------------------------------------------------+
```

## Key Design Changes from Current Pages

**Current problems:**
- Pages feel informational, not sales-driven
- No social proof or trust indicators
- No ROI/impact metrics prominently displayed
- Sections are text-heavy without product imagery
- CTAs appear only at top and bottom
- No urgency or conversion optimization
- Missing "product in action" visuals

**Salesforce-inspired fixes:**
- Hero gets a split layout: text left, product mockup/screenshot right
- Add a trust/social proof bar immediately after hero (customer count, industry stats)
- Feature sections use alternating image+text layout (image left, text right, then swap)
- Big bold impact numbers in their own section (large font, colored stat, short label)
- Mid-page CTA banners inserted between sections (not just top/bottom)
- Comparison tables styled as competitive differentiators
- FAQ/objection handling accordion at the bottom
- Every section ends with a subtle "Learn more" or "See it in action" link
- Product screenshots/mockups replace abstract imagery

## Page-by-Page Sections

### 1. AliphChat (6 products page -- `/products/chat`)

| # | Section | Type | Key Content |
|---|---------|------|-------------|
| 1 | Hero | Split hero | "Ask anything. Expose nothing." + product UI mockup right side + dual CTA |
| 2 | Trust Bar | Logo/stats | "Deployed across X enterprises" + key stats (queries processed, languages, uptime) |
| 3 | Product Showcase | Parallax image | Full-width chat UI screenshot with overlay quote |
| 4 | Feature Pillars | Alternating image-text | 4 features: Sovereign Search, Privacy Engine, Inherited Permissions, Enterprise Ready -- each with image left/right alternating |
| 5 | Impact Numbers | Stat cards | "95%+ accuracy", "2 languages", "Zero PII exposure", "Days to deploy" |
| 6 | How It Works | 3-step process | Connect -> Ask -> Get Cited Answers |
| 7 | Comparison Table | vs ChatGPT | Competitive comparison table (keep existing but enhance styling) |
| 8 | Mid-page CTA | Conversion | "See AliphChat in action" + dual buttons |
| 9 | Use Cases | Card grid | Real scenarios: Legal research, Onboarding, Policy lookup, Audit prep |
| 10 | Final CTA | Full-width | "Give your team world-class AI without the risk" + trust badges |

### 2. GRC Platform (`/products/grc`)

| # | Section | Type | Key Content |
|---|---------|------|-------------|
| 1 | Hero | Split hero | "Months of compliance work. Done in days." + dashboard mockup |
| 2 | Trust Bar | Stats | Impact metrics: "SAR 500K+ saved", "Hours not days", regulatory count |
| 3 | Product Showcase | Parallax | Dashboard screenshot with overlay |
| 4 | Before/After Impact | Stat cards | 4 cards showing before vs after (enhanced from current) |
| 5 | Feature Pillars | Alternating | Compliance Engine, Document Intelligence, Precedent Intelligence |
| 6 | Agentic Workflow | Process steps | Research -> Draft -> Validate -> Learn pipeline |
| 7 | Regulatory Coverage | Badge grid | PDPL, SAMA, CMA, NCA, GDPR |
| 8 | Mid-page CTA | Conversion | "See the platform live" |
| 9 | Enterprise Features | Feature cards | Data Sovereignty, Risk Scoring, Team Workflows |
| 10 | Who It's For | Persona cards | Compliance Officers, Legal Teams, Advisory Firms, Internal Audit |
| 11 | Final CTA | Full-width | With trust indicators |

### 3. Privacy Shield (`/products/privacy-shield`)

| # | Section | Type | Key Content |
|---|---------|------|-------------|
| 1 | Hero | Split hero | "Your data never leaves. The AI never knows." + visual of masking flow |
| 2 | Trust Bar | Stats | "95%+ NER accuracy", "8+ entity types", "Zero PII transmitted" |
| 3 | Product Showcase | Parallax | Privacy architecture visual |
| 4 | Before/After Demo | Side-by-side | "What you write" vs "What the AI sees" (enhanced visual) |
| 5 | Entity Detection | Tile grid | 8 entity types detected |
| 6 | How It Works | 3-step | Detect -> Mask -> Restore |
| 7 | Compliance Grid | Feature cards | PDPL, GDPR, UAE PDPL, SAMA/NCA |
| 8 | Mid-page CTA | Conversion | "Protect every query" |
| 9 | Technical Specs | Feature cards | Bilingual NER, On-Premise, Audit Trail |
| 10 | Final CTA | Full-width | With trust indicators |

### 4. Organization Memory (`/products/organization-memory`)

| # | Section | Type | Key Content |
|---|---------|------|-------------|
| 1 | Hero | Split hero | "Twenty years of expertise. Available in seconds." + knowledge graph visual |
| 2 | Trust Bar | Stats | "Millions of documents indexed", "Sub-second retrieval", integrations count |
| 3 | Product Showcase | Parallax | Knowledge network visual |
| 4 | The Problem | Centered text | "When people leave, their knowledge doesn't" |
| 5 | Connected Systems | Integration tiles | Google Drive, Local Files, M365, Salesforce |
| 6 | Permissions Demo | Split layout | CEO vs Analyst query results |
| 7 | Core Capabilities | Feature cards | Semantic Indexing, NL Search, Zero Exposure |
| 8 | Mid-page CTA | Conversion | "Stop losing what your organization knows" |
| 9 | Intelligence Compounds | Feature cards | Learns, Captures, Strengthens |
| 10 | How It Works | 4-step | Connect -> Index -> Query -> Learn |
| 11 | Final CTA | Full-width | With trust indicators |

### 5. Global LLM Connectivity (`/products/global-llm`)

| # | Section | Type | Key Content |
|---|---------|------|-------------|
| 1 | Hero | Split hero | "Every model. Zero exposure." + model routing diagram |
| 2 | Trust Bar | Stats | "4+ models", "Zero-retention", "99.9% uptime" |
| 3 | Product Showcase | Parallax | Network/routing visual |
| 4 | Model Cards | Enhanced cards | Claude, GPT-4, Gemini, ALLAM -- with provider logos and specialties |
| 5 | Intelligent Routing | Alternating | Task-Based, Sensitivity, Failover |
| 6 | Security Controls | Checklist grid | 6 enterprise controls |
| 7 | Mid-page CTA | Conversion | "Access global AI safely" |
| 8 | Why Multi-Model | Feature cards | No Lock-in, Cost Optimization, Future-Proof |
| 9 | Infrastructure Ready | Centered | Deployment options |
| 10 | Final CTA | Full-width | With trust indicators |

### 6. Agentic AI (`/products/agentic-ai`)

| # | Section | Type | Key Content |
|---|---------|------|-------------|
| 1 | Hero | Split hero | "Autonomous AI. Sovereign by default." + agent workflow visual + "Coming Q2 2026" badge |
| 2 | Trust Bar | Stats | "4 protection layers", "Full audit trail", "Arabic + English" |
| 3 | Product Showcase | Parallax | Agent orchestration visual |
| 4 | The Gap | Centered text | Why open-source agents aren't enterprise-ready |
| 5 | Capabilities | 6-card grid | Multi-Step Reasoning, Workflow Orchestration, Privacy-First, etc. |
| 6 | Comparison Table | vs Open-Source | Enhanced competitive table |
| 7 | Mid-page CTA | Conversion | "Be among the first" |
| 8 | Use Cases | Card grid | Regulatory Research, Due Diligence, Contract Review |
| 9 | Early Access | Centered | Waitlist signup prompt |
| 10 | Final CTA | Full-width | "Join the Waitlist" |

## New Shared Components Needed

### 1. `SplitHero` -- Replace PageHero on product pages
- Left side: eyebrow, headline, subtitle, dual CTA buttons, trust micro-text ("No credit card required. Free demo.")
- Right side: product screenshot/mockup with subtle shadow and rounded corners
- Clean white background

### 2. `TrustBar` -- Social proof strip
- 3-4 big stat numbers in a row
- Light gray background
- Example: "95%+ | 2 Languages | Zero PII | Days to Deploy"

### 3. `ImpactStats` -- Big number section
- Large bold colored numbers with label beneath
- Grid of 3-4 stats
- Used for ROI / before-after metrics

### 4. `AlternatingFeature` -- Image + text alternating rows
- Even rows: image left, text right
- Odd rows: text left, image right
- Each row has: eyebrow, title, description, bullet points, "Learn more" link
- Salesforce's signature layout pattern

### 5. `MidPageCTA` -- Inline conversion banner
- Smaller than full CTABanner, appears mid-page
- Single headline + single button
- Subtle accent background

### 6. `ComparisonTable` -- Enhanced competitive table
- Styled header row
- Checkmark/X icons
- Brand-colored "Aliph" column highlighted
- Clean card-style container

## Technical Details

**Files to create (new components):**
- `src/components/sections/SplitHero.tsx`
- `src/components/sections/TrustBar.tsx` (refactor existing)
- `src/components/sections/ImpactStats.tsx`
- `src/components/sections/AlternatingFeature.tsx`
- `src/components/sections/MidPageCTA.tsx`
- `src/components/sections/ComparisonTable.tsx`

**Files to rewrite:**
- `src/pages/AliphChat.tsx`
- `src/pages/GRCPlatform.tsx`
- `src/pages/PrivacyShield.tsx`
- `src/pages/OrganizationMemory.tsx`
- `src/pages/GlobalLLM.tsx`
- `src/pages/AgenticAI.tsx`

**No new dependencies required** -- uses existing framer-motion, lucide-react, react-router-dom.

**Images:** Each page will use existing generated images from `src/assets/images/` plus the parallax component for immersive product showcases.

**Conversion elements on every page:**
- Dual CTA in hero ("Watch Demo" + "Request Demo")
- Mid-page CTA after features section
- Final full-width CTA with trust indicators ("No commitment. See it live.")
- Trust bar with impact numbers right after hero

