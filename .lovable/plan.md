

# Footer Newsletter + Site-Wide CTA Optimization

## Overview
Add a newsletter subscription section to the footer and strategically place data-capture CTAs, inline email captures, and conversion links across every page where opportunities are currently missing.

## 1. Footer Newsletter Section

Add an interactive email subscription block in the footer, positioned as a full-width row above the existing footer columns.

**Design:**
- Headline: "Stay ahead of sovereign AI."
- Subtitle: "Monthly insights on PDPL, enterprise AI governance, and product updates."
- Inline email input + "Subscribe" button (gold accent), side by side on desktop, stacked on mobile
- Success state: animated checkmark with "You're in!" message
- Small trust text below: "No spam. Unsubscribe anytime."

**File:** `src/components/layout/Footer.tsx`

## 2. Page-by-Page CTA Gap Analysis and Additions

### Homepage (`Index.tsx`)
- **Gap:** FinalCTA has only one button, no email capture
- **Fix:** Add a secondary CTA "Get the PDPL Guide" linking to `/resources/pdpl-guide`; add an inline email signup row above FinalCTA ("Get weekly AI governance insights")

### Blog (`Blog.tsx`)
- **Gap:** Newsletter section (Section 5) has headline and text but NO actual email input
- **Fix:** Add email input + subscribe button to the existing newsletter section

### About (`About.tsx`)
- **Gap:** Section 5 "Join Us" has text but no CTA button
- **Fix:** Add "View Open Roles" button linking to `/company/careers` and a "Contact Us" secondary link

### Leadership (`Leadership.tsx`)
- **Gap:** Section 5 "We're building something exceptional" has text about joining but no button
- **Fix:** Add "View Open Positions" button to `/company/careers` and "Request a Meeting" link to `/contact`

### Careers (`Careers.tsx`)
- **Gap:** Open role cards have no "Apply" or action links
- **Fix:** Add "Apply Now" button on each role card linking to `mailto:careers@aliphai.ai?subject=[Role Title]`

### Platform (`Platform.tsx`)
- **Gap:** 8 sections of technical content, only 1 CTA at the very end
- **Fix:** Add a MidPageCTA after Section 4 (Privacy Shield layer): "See the Control Plane live" with "Book a Demo" + "Download Architecture Brief"

### PDPL Guide (`PDPLGuide.tsx`)
- **Gap:** Section 5 "Not sure where you stand?" has text but no email capture or CTA button
- **Fix:** Add inline email capture: "Get a free PDPL compliance checklist" with email input + download button; add "Book a Free Assessment" button

### Industries (all 3 pages)
- **Gap:** No mid-page CTA between sections; only end CTA
- **Fix:** Add a MidPageCTA component after the Capabilities section (Section 3) with "See how [industry] leaders use Aliph" and dual buttons

### Contact (`Contact.tsx`)
- **Currently good** -- has form + details. No changes needed.

### Demo (`Demo.tsx`)
- **Currently good** -- comprehensive form. No changes needed.

### Product Pages (6 pages)
- **Already optimized** from previous redesign with multiple CTAs. No changes needed.

## 3. New Reusable Component: InlineEmailCapture

Create a small, reusable inline email capture component used in Blog newsletter section, PDPL Guide, Homepage, and Footer.

**Props:** `title`, `subtitle`, `buttonText`, `placeholder`, `onSubmit`

**Design:**
- Input + button side-by-side (responsive)
- Animated success state with checkmark
- "No spam" micro-text
- Gold accent button matching site CTAs

**File:** `src/components/sections/InlineEmailCapture.tsx`

## 4. Sticky "Book a Demo" Bar (Optional Enhancement)

Add a subtle sticky bar that appears after the user scrolls past the hero section on key pages (Homepage, Platform, Product pages). Shows on scroll-down, hides on scroll-up.

- Small bar at bottom of screen: "Ready to see Aliph in action?" + "Book a Demo" button
- Dismissible with X button (remembers dismissal per session)
- Only shows after 40% scroll depth

**File:** `src/components/sections/StickyDemoBar.tsx`
**Updated:** `src/components/layout/Layout.tsx` (conditionally render on key routes)

## Summary of All Files

**New files:**
- `src/components/sections/InlineEmailCapture.tsx` -- reusable email capture component
- `src/components/sections/StickyDemoBar.tsx` -- scroll-triggered sticky CTA bar

**Updated files:**
- `src/components/layout/Footer.tsx` -- add newsletter section
- `src/components/layout/Layout.tsx` -- add StickyDemoBar
- `src/pages/Index.tsx` -- add email capture row + secondary CTA on FinalCTA
- `src/pages/Blog.tsx` -- add email input to newsletter section
- `src/pages/About.tsx` -- add CTA buttons to "Join Us" section
- `src/pages/Leadership.tsx` -- add CTA buttons to "We're building" section
- `src/pages/Careers.tsx` -- add Apply button on role cards
- `src/pages/Platform.tsx` -- add MidPageCTA after Layer 2
- `src/pages/PDPLGuide.tsx` -- add email capture + CTA button to assessment section
- `src/pages/Industries.tsx` -- add MidPageCTA after capabilities section

## Technical Notes
- All email captures store to local state with success animation (no backend yet -- ready for API integration)
- InlineEmailCapture uses basic email validation via HTML5 `type="email"` + `required`
- StickyDemoBar uses IntersectionObserver for scroll detection and sessionStorage for dismissal
- No new dependencies required
- All components use existing design tokens (accent colors, font families, spacing)
