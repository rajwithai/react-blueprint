

# Footer Newsletter Repositioning + Contact Experience Overhaul

## Overview
Two main improvements: (1) Move the newsletter from a separate full-width banner above footer columns into the right-side column of the footer grid, and (2) Upgrade the Contact page and site-wide contact experience to make reaching out feel effortless from any page.

## 1. Footer Redesign -- Newsletter on the Right

Currently the newsletter is a full-width section above the footer columns. Based on your screenshot, there's a big empty space on the right side of the footer grid.

**New layout (4-column grid on desktop):**
- Column 1: Logo, tagline, compliance badges (existing)
- Column 2: Products links (existing)
- Column 3: Company links (existing)
- Column 4: **Newsletter subscription** (moved here)

The newsletter will use the existing `InlineEmailCapture` component but in `compact` mode -- left-aligned, smaller heading, fitting naturally as a footer column. The full-width newsletter banner above the columns will be removed.

**File:** `src/components/layout/Footer.tsx`

## 2. Contact Page Overhaul -- Make It Special

The current Contact page is functional but basic. Here's the upgrade to make it feel premium and convenient:

**Enhancements:**
- **Animated success state on form submit:** Instead of a browser `alert()`, show an elegant inline success message with a checkmark animation (similar to the newsletter capture) that replaces the form
- **Quick-connect cards above the form:** Three clickable cards -- "Email Us", "Call Us", "WhatsApp" -- each with an icon, one-tap action, and hover animation. Makes contacting instant without filling the form
- **Live availability indicator:** A small green dot with "Typically responds within 2 hours" next to contact details to build confidence
- **Social proof near the form:** Add a subtle line like "Trusted by enterprises across Saudi Arabia" with the compliance badges
- **Simpler form:** Remove the "Job Title" field (optional friction), keep only Name, Email, Organization, Inquiry Type, and Message

**File:** `src/pages/Contact.tsx`

## 3. Site-Wide "Quick Contact" Strategy

Instead of every CTA just linking to `/contact` (which loses context), enhance the approach:

- **CTA buttons that pass context:** When a user clicks "Contact Sales" from the Platform page, the link will include a query parameter like `/contact?inquiry=demo&source=platform`. The Contact page will auto-select the inquiry type and pre-fill a contextual message placeholder based on the source
- **Update CTABanner component:** Add optional `inquiryType` and `source` props that get appended as URL params when linking to `/contact`
- **Contact page reads URL params:** On load, auto-selects the inquiry type dropdown and shows a contextual subtitle like "You're reaching out about our Platform. We'll connect you with the right team."

**Files:** `src/pages/Contact.tsx`, `src/components/sections/CTABanner.tsx`, `src/components/sections/MidPageCTA.tsx`

## Summary of Changes

**Updated files:**
- `src/components/layout/Footer.tsx` -- move newsletter into right column, remove full-width banner
- `src/pages/Contact.tsx` -- animated success state, quick-connect cards, URL param auto-fill, remove Job Title field, add availability indicator
- `src/components/sections/CTABanner.tsx` -- pass inquiry context in links to /contact
- `src/components/sections/MidPageCTA.tsx` -- pass inquiry context in links to /contact

## Technical Notes
- URL params use `useSearchParams` from react-router-dom (already installed)
- Form success animation uses framer-motion `AnimatePresence` (already installed)
- WhatsApp link uses `https://wa.me/966569678421` format for direct chat
- No new dependencies needed
- All existing CTA links to `/contact` or `/demo` across pages will automatically benefit from the contextual params once CTABanner and MidPageCTA are updated

