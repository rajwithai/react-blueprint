

# Hero Section Visual Redesign — Full Content, Beautiful Layout

## Problem
The current hero has two issues visible in the screenshot:
1. **Right side appears empty** — the Control Plane diagram is too faint (accent/10 backgrounds, 0.15 opacity lines) to create any visual impact
2. **Left side is a text wall** — badge, headline, two dense paragraphs, two CTAs, and a trust bar all stacked vertically creates visual fatigue

## Proposed Layout — Centered-Top + Split-Bottom Approach

Instead of cramming everything into a left column, restructure the hero into **two visual zones** while keeping all content:

```text
+------------------------------------------------------------------+
|                                                                    |
|          FOR ENTERPRISES IN SAUDI ARABIA & GCC  (badge)           |
|                                                                    |
|              Your teams already use AI.                            |
|         You just don't govern it yet.  (centered headline)        |
|                                                                    |
|        [See it in action]    [Get the PDPL Guide]  (centered)     |
|   PDPL Compliant · SAMA Aligned · Vision 2030 · Azure · Arabic   |
|                                                                    |
+------------------------------------------------------------------+
|                                                                    |
|  +---------------------------+   +----------------------------+   |
|  | Shield Icon               |   | Layers Icon                |   |
|  | THE PRIVACY LAYER         |   | THE PLATFORM POWER         |   |
|  | Aliph sits between your   |   | But Aliph isn't just a     |   |
|  | employees and global AI   |   | safety net. It's a         |   |
|  | models like ChatGPT...    |   | sovereign AI platform...   |   |
|  +---------------------------+   +----------------------------+   |
|                                                                    |
+------------------------------------------------------------------+
```

### Zone 1 — Top: Centered Impact Block
- Badge, headline, CTAs, and trust bar are **centered on the page**
- Headline gets full width to breathe — no competing right column
- CTAs sit directly under the headline for immediate conversion
- Trust bar right below CTAs as a confidence strip
- This follows the Apple product page pattern (centered hero text, no split)

### Zone 2 — Bottom: Two Value Proposition Cards
- The two subtext paragraphs ("The Privacy Layer" and "The Platform Power") become **two side-by-side glass cards** in a 2-column grid
- Each card has: a subtle icon (Shield for privacy, Brain/Layers for platform), the bold label, and the paragraph text
- Cards use `bg-card border border-border` with subtle hover effect
- On mobile, they stack vertically
- This separates the "what is it" explanation from the "grab attention" headline

### Visual Enhancements
- Add a subtle animated gradient orb behind the headline (larger, more visible than current blurs)
- The trust bar items get small checkmark icons instead of plain dots for more visual weight
- Cards get a very subtle entrance animation (fade-in-up with stagger)

## Technical Changes

**File:** `src/components/sections/HeroSection.tsx`

### Removals
- Remove the entire right-side Control Plane diagram (the `lg:grid-cols-2` split layout)
- Remove the SVG lines and orbital node positioning logic

### Structure Changes
- Change the grid from `lg:grid-cols-2` to a single centered column
- Move headline, badge, CTAs, trust bar into a centered block with `text-center` and `max-w-4xl mx-auto`
- Create two value proposition cards below in a `grid md:grid-cols-2 gap-6` layout
- Each card: `rounded-2xl bg-card border border-border p-8` with icon + label + paragraph

### Content (unchanged)
- Badge: "FOR ENTERPRISES IN SAUDI ARABIA & GCC"
- Headline: "Your teams already use AI. / You just don't govern it yet."
- Privacy Layer paragraph (full text)
- Platform Power paragraph (full text)
- CTAs: "See it in action" + "Get the PDPL Guide"
- Trust bar: all 5 items

### Icons
- Privacy Layer card: `Shield` icon from lucide-react (already imported)
- Platform Power card: `Brain` icon from lucide-react (new import)
- Trust bar: `Check` icon from lucide-react for each item

### Animations
- Badge: fade-in-up (0s delay)
- Headline: fade-in-up (0.1s delay)
- CTAs: fade-in-up (0.2s delay)
- Trust bar: fade-in (0.3s delay)
- Left card: fade-in-up (0.4s delay)
- Right card: fade-in-up (0.5s delay)

### Mobile Behavior
- Everything centered and stacked
- Cards stack to single column
- Full-width CTAs on small screens
- Headline scales down to `text-3xl` on mobile

