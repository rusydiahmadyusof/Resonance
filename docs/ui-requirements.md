# Resonance MVP – UI Requirements

Source screens: `Reference/Homepage.png`, `Reference/Homepage - Mobile.png`, `Reference/Tech Specs.png`, `Reference/Tech Specs - Mobile.png`, `Reference/Compare.png`, `Reference/Compare - Mobile.png`.

## Shared Experience
- Typography: Bold rounded display face for headlines, geometric sans for body. Default palette uses creamy sand background, clay/brown text, olive/sage highlights, and warm gradients.
- Navigation: Logo left, links (`Home`, `Tech Specs`, `Compare`) center/right, CTA button. Mobile uses hamburger sheet.
- Footer CTA: Large centered copy “Sound. Presence. Purpose.” with two pill buttons (`Aura Pro II`, `Flow II`) plus footer nav + social icons.
- Buttons: Rounded pills, solid brown primary, ghost/outlined secondary. Focus ring visible.
- Imagery: Provided PNG renders; hero/product/feature/detial/dreamlike background exactly from assets folder.

## Homepage Sections
1. **Hero**
   - Gradient background (#f4ede3 → #dbd0c1). Giant headphones centered; overlapping typography “Resonance” + “Aura Pro II”.
   - Copy block: headline, supporting text, CTA buttons (`Buy Now`, `Compare`).
   - Color dots (yellow, sage, wine) under hero to hint variations.
2. **Tagline**
   - Centered headline “Your Style. Your Sound.” with short paragraph.
3. **Color Selector**
   - Medium-size headphone render, three swatches below with labels. Each swatch updates product image and accent color.
4. **Feature Cards**
   - Left: text card with gradient background, right: portrait image of person wearing headphones. Reverse stack on mobile.
5. **Detail Grid**
   - Four rounded cards showcasing close-up images + captions (“Every Detail Matters”). 2x2 grid desktop, vertical stack mobile.
6. **Dreamlike CTA**
   - Full-width desert photo background, white headline “Dreamlike Sound”, price copy, `Buy Now` button.
7. **Footer CTA / Footer**
   - Tagline, supporting text, pair of pills. Footer row with logo, nav, social icons.

## Tech Specs Page
1. **Hero / Color**
   - Product render left with “Color” heading, swatches underneath identical to homepage.
2. **Spec Sections**
   - Categories: Audio Technology, Intelligence, Power, Controls, Built For The Elements, Battery, Connectivity, Materials, Sustainability & Materials.
   - Layout: two-column alternating blocks with heading on left, bullet copy on right; mobile collapses stacked.
   - Subtle dividers and spacing consistent with mock.

## Compare Page
1. **Hero**
   - Title “Compare Resonance Models”, subtitle, minimal background.
2. **Product Cards**
   - Two rounded cards side-by-side (Aura Pro II, Flow II) with images, price, `Buy Now`.
3. **Feature Table**
   - Vertical list of features with icons (chip, noise cancellation, audio, etc.). Each column shows availability text (value, “None”, etc.).
   - Light separators between rows, consistent padding.

## Interaction & Accessibility
- Color swatches = radio buttons with `aria-pressed` and keyboard support.
- Buttons accessible labels, `tabIndex=0` on interactive cards that trigger actions.
- Scroll animations subtle, non-blocking (Framer Motion fade/slide).
- Responsive breakpoints: base mobile-first, `md` ~768px, `lg` ~1024px, `xl` ~1280px.
- Ensure `prefers-reduced-motion` respects (disable heavy animations).

