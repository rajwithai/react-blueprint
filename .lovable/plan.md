

# UI/UX Theme Overhaul: Apple/Google-Inspired Light Design

## Vision
Transform the entire website from the current dark navy-heavy aesthetic to a clean, minimal, white-first design inspired by Apple and Google's enterprise product pages. Brand colors (midnight navy and petroleum gold) will be reserved for interactive elements like buttons, links, and subtle accents -- not for large background areas.

## Design Principles

- **White-first**: All section backgrounds are white (`#FFFFFF`) or very light gray (`#F9FAFB` / `#F5F5F7`)
- **Black/dark text on white**: Headlines in near-black (`#1D1D1F`), body text in medium gray (`#6E6E73`) -- Apple's exact approach
- **Brand color discipline**: Navy and gold appear ONLY in buttons, links, badges, icons, and small accent elements
- **Generous whitespace**: Sections get more vertical padding, content areas breathe
- **Typography shift**: Replace IBM Plex Serif headlines with a clean sans-serif (SF Pro-inspired) -- Inter for everything, or keep serif only for the main hero headline
- **No dark sections**: Remove all `hero-gradient-navy`, `bg-navy-deep`, `bg-midnight` section backgrounds
- **Subtle cards**: Light borders, no heavy shadows, rounded corners (12-16px like Apple)
- **Minimal motion**: Reduce animation intensity, keep only gentle fade-ups

---

## File-by-File Changes

### 1. `src/index.css` -- Design Token Overhaul
- Update CSS variables to Apple-like values:
  - `--foreground`: near-black `#1D1D1F`
  - `--muted-foreground`: `#6E6E73` (Apple's secondary text)
  - `--border`: very light `#E5E5E7`
  - `--muted` / `--secondary`: `#F5F5F7` (Apple's light gray)
  - `--primary`: keep navy for buttons
  - `--accent`: keep gold for accent buttons
- Remove or simplify: `hero-gradient-navy`, `glass`, `glass-card`, `light-beam`, `gradient-border` animation, `shimmer`, `pulse-gold`
- Keep only subtle utilities: `fade-in-up`, `section-divider`, `bento-card`
- Update body font to Inter with Apple-like weight/tracking
- Remove IBM Plex Serif from headings -- use Inter (weight 600) for a clean look, or keep serif only for page title (h1)

### 2. `tailwind.config.ts` -- Simplified Palette
- Remove `navy`, `midnight`, `gold` custom colors from Tailwind (use CSS variables or keep as accent-only tokens)
- Update `fontFamily` to use Inter for both heading and body

### 3. `src/components/sections/HeroSection.tsx` -- Clean White Hero
- Replace dark navy background with white/light gray
- Remove all SVG schematic patterns, aurora blobs, X-ray spotlight effect
- Use dark text on white background
- Keep "Book a Demo" button in gold, "Explore the Platform" as outlined/ghost button
- Right side: simple, clean illustration or product screenshot mockup (or leave minimal)
- Remove `SchematicPattern` component entirely

### 4. `src/components/sections/RiskCards.tsx` -- Light Cards
- Replace `bg-midnight` with white background
- Cards: white with light border, no red glow effects
- Red accent only on the icon, not the entire card hover state
- Clean, muted text colors

### 5. `src/components/sections/ControlPlaneDiagram.tsx` -- Already Light
- This section is already on `bg-slate-50` -- minor refinements only
- Ensure toggle buttons use brand colors appropriately
- Lighten hover effects

### 6. `src/components/sections/Outcomes.tsx` -- Light Background
- Replace `bg-navy-deep text-white` with white/light gray background
- Dark text, gold icons
- Clean card style with light borders

### 7. `src/components/sections/ProductShowcase.tsx` -- Already Light
- Minor refinements: softer shadows, consistent with new card style

### 8. `src/components/sections/SolutionsTeaser.tsx` -- Already Light
- Consistent styling pass

### 9. `src/components/sections/CredibilityProof.tsx` -- Light Theme
- Replace the dark dashboard mockup with a light-themed one
- Clean card styling

### 10. `src/components/sections/FinalCTA.tsx` -- Light CTA
- Replace `bg-navy-deep` with white or very light gray
- Dark headline text, gold CTA button
- Simple, clean layout like Apple's bottom CTA sections

### 11. `src/components/sections/TrustBand.tsx` -- Already Light
- Minor consistency pass

### 12. `src/components/sections/PageHero.tsx` -- Light Sub-page Hero
- Replace `bg-navy-deep text-white` with white background, dark text
- Gold CTA button preserved
- Clean, airy layout

### 13. `src/components/sections/CTABanner.tsx` -- Light Variant Default
- Default to light background instead of dark
- Dark text, gold primary button

### 14. `src/components/sections/Section.tsx` -- Remove Dark Mode
- Remove or simplify the `dark` prop handling
- Default all sections to white/light backgrounds

### 15. `src/components/layout/Navbar.tsx` -- Minimal Navbar
- Always white background (remove transparent-to-white scroll transition or make it white from start)
- Clean, minimal styling
- "Contact Sales" button in navy or gold (primary brand CTA)

### 16. `src/components/layout/Footer.tsx` -- Light Footer
- Replace dark navy footer with light gray (`#F5F5F7`) footer
- Dark text, subtle link colors
- Clean, minimal Apple-style footer

### 17. All Sub-pages (`AliphChat.tsx`, `GRCPlatform.tsx`, `AgenticAI.tsx`, etc.)
- Update `PageHero` usage (hero is now light by default)
- Replace any `dark` prop usage in `Section` components
- Ensure all pages follow the white-first theme

### 18. `src/pages/Platform.tsx` -- Already Technical
- Ensure consistent with new light theme
- Any remaining dark sections converted to light

---

## Color Usage Summary

| Element | Color |
|---|---|
| Page backgrounds | White `#FFFFFF` or `#F5F5F7` |
| Headlines | Near-black `#1D1D1F` |
| Body text | Medium gray `#6E6E73` |
| Primary buttons | Navy `#0B1426` with white text |
| Accent/CTA buttons | Gold `#B8860B` with white text |
| Card borders | `#E5E5E7` |
| Links | Navy, with gold hover |
| Icons (decorative) | Gold or light gray |
| Section dividers | Very subtle `#E5E5E7` |

---

## Technical Details

- **Files modified**: ~18 component/page files + `index.css` + `tailwind.config.ts`
- **No new dependencies** required
- **Typography**: Inter for all text (headings weight 600, body weight 400)
- **Border radius**: Increase to 12px for cards (Apple-like)
- **Shadows**: Use `shadow-sm` or `shadow-none` only -- no heavy shadows
- **Animations**: Keep only `fade-in-up` with framer-motion `whileInView`, remove shimmer/pulse/beam effects

