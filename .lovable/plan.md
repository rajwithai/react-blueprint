

# Website Audit -- Creative & Sales Head Review
## Preparing Aliph for Enterprise Sales, Partnerships & Investment

---

## EXECUTIVE SUMMARY

The site is architecturally solid and the messaging is strong for a sovereign AI startup. However, there are 23 specific issues that need to be addressed before presenting to enterprise buyers, investors, or partners. These fall into three categories: **credibility gaps** that will make CISOs and CFOs skeptical, **conversion friction** that loses warm leads, and **content gaps** that weaken the narrative at critical moments.

---

## CRITICAL ISSUES (Must Fix Before Production)

### 1. Homepage Hero -- Right Side Is Completely Empty
The hero section is left-aligned text with the entire right half of the screen blank on desktop. For a platform company selling to enterprise, this is the single most important real estate on the site. It needs a product visual, architecture diagram, or interactive element. Right now it looks unfinished.

**Fix:** Add a hero visual on the right -- either a product screenshot, the Control Plane diagram, or an animated architectural schematic similar to what the Platform page has.

### 2. No Customer Logos or Named References Anywhere
The site claims "Trusted by enterprises across Saudi Arabia" and shows "Live Production Pilot: Reve Consult, Riyadh" -- but there are zero customer logos, no case study links, and no testimonial quotes. Enterprise buyers need social proof from recognizable names. Investors need evidence of traction.

**Fix:** Add a logo bar (even 3-4 logos) on the homepage. If NDAs prevent named logos, use descriptive placeholders like "Top 3 Saudi Bank" or "Leading Healthcare Provider" with anonymized quotes.

### 3. Blog Articles Are Not Clickable -- Dead Content
All 6 blog article cards on /resources/blog have no links. They show titles and excerpts but clicking does nothing. This makes the company look like it has no actual published content. For investors and enterprise buyers, a blog with zero actual articles signals the company is not yet operational.

**Fix:** Either (a) create individual blog post pages for at least the top 3 articles, or (b) make them link to a "Coming soon" state with email capture, or (c) link to external Medium/LinkedIn articles.

### 4. Demo Page Uses `alert()` for Form Submission
The Demo page -- the most important conversion page -- uses a browser `alert()` on submit. This is unprofessional for an enterprise product. The Contact page has a beautiful animated success state, but the Demo page does not.

**Fix:** Apply the same `AnimatePresence` success state from the Contact page to the Demo page form.

### 5. Footer Missing Key Links
The footer Products column only lists 3 products (AliphChat, GRC, Agentic AI) but the navbar has 6 product/platform entries (also Privacy Shield, Organization Memory, Global LLM under Platform). The footer also has no link to the Platform page, PDPL Guide, or Demo page.

**Fix:** Add "Platform" link and "PDPL Guide" link to the footer. Consider adding a "Platform" column or expanding Products to include the platform capabilities.

### 6. Navbar Product Structure Is Confusing
Products dropdown shows AliphChat, GRC Platform, Agentic AI. But Privacy Shield, Organization Memory, and Global LLM are under `/platform/` routes and not in the navbar at all. A CISO or CTO visiting the site has no way to find these three capability pages unless they happen to scroll through the Platform page. These are major product capabilities hidden behind a technical architecture page.

**Fix:** Either add these under the Products dropdown or create a "Platform" dropdown with these capabilities listed as sub-items.

---

## HIGH-PRIORITY ISSUES (Fix Before Enterprise Demos)

### 7. Leadership Page -- Anonymous Co-Founder Is a Red Flag
"Co-Founder" with "Name disclosed under NDA -- full commitment upon funding" reads as a risk to investors and enterprise buyers. It suggests the co-founder has not committed. For an investor pitch, this needs to be handled very differently.

**Fix:** Either name the person, or remove the "full commitment upon funding" language and simply state "Profile available under NDA during due diligence."

### 8. No Pricing or Engagement Model Information
Enterprise buyers always want to understand the commercial model before booking a demo. There is no indication anywhere whether Aliph is SaaS, per-seat, per-query, or implementation-based pricing. This creates friction.

**Fix:** Add a simple "How We Work" or "Engagement Models" section on the Platform or Contact page. Even just "Enterprise licensing. Custom deployment. Contact for pricing." would help.

### 9. Homepage "Conglomerates" and "PIF Portfolio & Government" Links Go Nowhere
In the Solutions Teaser section, "Conglomerates" and "PIF Portfolio & Government" are listed as badges but there are no corresponding industry pages. Clicking them does nothing or leads to a 404.

**Fix:** Either create these industry pages or remove these badges until pages exist.

### 10. Contact Page -- No Physical Address
For enterprise buyers and investors in Saudi Arabia, a physical office address is essential for credibility. The contact page says "Riyadh, Kingdom of Saudi Arabia" but gives no street address, building, or district.

**Fix:** Add a proper office address (even a co-working space address) and consider embedding a Google Maps iframe.

### 11. About Page Has No Team Size or Funding Information
Investors and enterprise buyers want to know team size, funding stage, and growth trajectory. The About page mentions "Founded: 2024" but nothing about team composition, funding, or growth plans.

**Fix:** Add a section with "Team of X" / "Pre-seed / Seed stage" / "Backed by [names]" -- whatever is appropriate to disclose.

---

## MEDIUM-PRIORITY ISSUES (Improve Before Scale)

### 12. Product Page Images Are Generic Stock Photos
The parallax images on product pages (AliphChat hero showing "Privacy" text overlapping content, generic office shots) feel stock and undermine the premium positioning. The privacy image on AliphChat partially overlaps with the "Enterprise AI that knows your business" text.

**Fix:** Replace with custom product screenshots, mockups, or abstract visuals. Even clean gradient backgrounds would be better than stock photos with text overlay issues.

### 13. 404 Page Uses Legacy Styling
The NotFound page uses `hero-gradient`, `grid-pattern`, `glass`, and `glow-border` CSS classes that appear to be from an older design system. It looks visually disconnected from the rest of the site.

**Fix:** Redesign the 404 page to match the current clean, minimal aesthetic.

### 14. No Social Media Links in Footer or Anywhere
There are no LinkedIn, Twitter/X, or any social links on the entire site. For a company targeting enterprise, LinkedIn presence is essential. Investors will look for this.

**Fix:** Add social icons in the footer (at minimum LinkedIn and X/Twitter).

### 15. "Watch Demo" Button on AliphChat Links Nowhere
The AliphChat product page has a "Watch Demo" button with a "LIVE" badge, but it does not appear to link to an actual video or demo. This is a false promise.

**Fix:** Either link to an actual demo video/recording, or remove the button until one exists.

### 16. No Downloadable Assets
The PDPL Guide page mentions a "compliance checklist" email capture but there is no actual downloadable PDF, whitepaper, or one-pager anywhere. Enterprise sales requires leave-behind collateral.

**Fix:** Create at least one downloadable PDF (PDPL compliance one-pager or platform overview) and gate it behind email capture.

### 17. Statistics Need Source Citations
Pages show stats like "78% Saudi enterprises using unauthorized AI tools" and "SAR 5M maximum PDPL penalty" without sources. Enterprise buyers and especially investors will question uncited statistics.

**Fix:** Add small source citations (e.g., "Source: SDAIA 2025 Report") below key statistics.

### 18. Demo Page CTA at Bottom Links to Itself
The Demo page ends with a CTABanner that says "Ready to see it live?" with a "Book a Demo" button that links to `/demo` -- the page the user is already on. This is redundant.

**Fix:** Change to a "Contact Sales" CTA linking to `/contact` or remove the bottom CTA entirely.

---

## POLISH ITEMS (Nice to Have)

### 19. Homepage Email Capture Section Is Redundant with Footer
The homepage has an inline email capture section ("Get weekly AI governance insights") right above the Final CTA, and the footer immediately below also has a newsletter capture. The user sees two identical email captures within one scroll.

**Fix:** Remove the inline email capture from the homepage since the footer already handles it.

### 20. Careers Page -- No Location/Remote Information
Job listings show no location, salary range, or remote/hybrid status. Saudi enterprise talent expects this information.

**Fix:** Add location (Riyadh), work type (On-site/Hybrid), and optionally salary range to each role card.

### 21. Missing Meta Descriptions and OG Tags
When this site is shared on LinkedIn (critical for enterprise sales), it needs proper Open Graph tags with title, description, and image for each page.

**Fix:** Add proper OG meta tags in `index.html` and consider per-page meta using `react-helmet`.

### 22. No Arabic Language Support
The site mentions "Arabic & English" support throughout but the entire site is English-only. For Saudi enterprise buyers and government stakeholders, at least a basic Arabic landing page would demonstrate commitment.

**Fix:** Consider adding an Arabic version of the homepage or at minimum adding Arabic text samples in product demonstrations.

### 23. Chat Widget Has No Context
The chat widget in the bottom right corner appears to be a generic chatbot. For enterprise visitors, this should be positioned as "Talk to our team" or integrated with the Contact flow.

**Fix:** Ensure the chat widget is either connected to a real team or clearly labeled as an AI assistant powered by Aliph technology (dogfooding your own product is powerful).

---

## IMPLEMENTATION PRIORITY ORDER

**Week 1 (Blockers):**
1. Homepage hero visual (Issue 1)
2. Blog articles clickable or removed (Issue 3)
3. Demo page success state fix (Issue 4)
4. Hidden product pages in navigation (Issue 6)
5. Footer link completeness (Issue 5)

**Week 2 (Credibility):**
6. Customer logos or anonymized social proof (Issue 2)
7. Leadership page co-founder language (Issue 7)
8. Contact page physical address (Issue 10)
9. Social media links (Issue 14)
10. Statistics source citations (Issue 17)

**Week 3 (Conversion):**
11. Pricing/engagement model section (Issue 8)
12. Dead industry badges removed (Issue 9)
13. "Watch Demo" button fix (Issue 15)
14. Demo page self-linking CTA fix (Issue 18)
15. Downloadable collateral (Issue 16)

**Week 4 (Polish):**
16. 404 page redesign (Issue 13)
17. Stock photo replacements (Issue 12)
18. Duplicate email capture cleanup (Issue 19)
19. Careers location info (Issue 20)
20. OG meta tags (Issue 21)

---

## TECHNICAL CHANGES SUMMARY

| File | Changes |
|------|---------|
| `src/components/sections/HeroSection.tsx` | Add right-side visual/diagram |
| `src/components/layout/Navbar.tsx` | Add Privacy Shield, Org Memory, Global LLM to nav |
| `src/components/layout/Footer.tsx` | Add Platform, PDPL Guide links; add social icons |
| `src/pages/Blog.tsx` | Make article cards clickable (link to individual pages or external) |
| `src/pages/Demo.tsx` | Replace `alert()` with animated success state |
| `src/pages/Leadership.tsx` | Fix co-founder NDA language |
| `src/pages/NotFound.tsx` | Redesign to match current site aesthetic |
| `src/pages/Contact.tsx` | Add physical address |
| `src/pages/About.tsx` | Add team size/stage info |
| `src/pages/Industries.tsx` | Remove dead industry badges or create pages |
| `src/pages/Careers.tsx` | Add location/type to roles |
| `src/pages/AliphChat.tsx` | Fix "Watch Demo" button, fix image overlap |
| `src/pages/Index.tsx` | Remove redundant inline email capture |
| `index.html` | Add OG meta tags |
| Multiple product pages | Add source citations to statistics |

