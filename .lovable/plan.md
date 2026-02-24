

## Fix: Make "How It Actually Works" Section Visually Attractive

### Problem
The right content panel currently shows a plain icon in a small box alongside text. It feels flat and utilitarian. You want something more visually appealing -- gradients, imagery, or decorative elements instead of simple Lucide icons.

### Solution
Replace the small icon box in the right content panel with a large, visually rich gradient banner/hero area unique to each tab. Each tab gets its own signature gradient and a larger decorative icon treatment, creating a premium, Apple-inspired feel.

### Changes (single file: `PlatformPillars.tsx`)

**1. Add unique gradient definitions per tab**

Each tab gets a distinct gradient palette:
- **Privacy Shield** -- Deep blue-to-indigo gradient (conveys security/trust)
- **Organization Memory** -- Amber-to-orange gradient (conveys knowledge/warmth)
- **Governance & Auditability** -- Emerald-to-teal gradient (conveys compliance/clarity)
- **Governed Model Connectivity** -- Purple-to-violet gradient (conveys connectivity/innovation)

**2. Replace the small icon box with a gradient banner**

In the right panel, instead of the current 48x48 icon box, render a large rounded card (~160-200px tall) with:
- The tab's gradient as background
- A large, semi-transparent white icon (48px) centered or offset
- Subtle decorative circles/orbs in the background for depth (CSS-only, no images needed)
- A soft glow/shadow matching the gradient color

**3. Update mobile accordion**

Add a smaller version of the gradient banner inside each expanded accordion item for visual consistency on mobile.

**4. Keep left tabs as-is**

The left tab icons remain small and functional -- only the right panel content area gets the visual upgrade.

### Technical Details

- Gradients are defined as inline styles or Tailwind arbitrary values per tab in the `tabs` array (e.g., `gradient: "from-blue-600 to-indigo-700"`)
- Decorative orbs use absolutely positioned `div` elements with `rounded-full`, `opacity`, and `blur` classes
- No new dependencies or images required -- pure CSS/Tailwind gradients
- All existing content (titles, body text), animation behavior (`AnimatePresence`), and interaction logic remain unchanged

