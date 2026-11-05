---
title: Footer
---

### Footer (quick notes)
- **Location:** `src/domains/marketing/shared/components/footer/`
- **Props:** *(none — static layout component)*
- **Usage:**
  - Displays footer navigation links grouped by category: *Pages*, *Help*, and *Company*.
  - Contains social media icons and copyright.
  - Used globally at the bottom of the app and public pages.
- **A11y:**
  - Uses semantic elements (`<ul>`, `<li>`, `<h3>`) for link grouping.
  - Consider adding `aria-label` attributes for social links and external anchors.
  - Ensure visible focus states for all `<Link>` components.

### Example
```tsx
import { Footer } from '@/domains/marketing/shared';

function Layout() {
  return (
    <>
      {/* main content */}
      <Footer />
    </>
  );
}
```


### Notes
- Routes use `react-router-dom`’s `<Link>` for internal navigation.
- Organized into 4 logical sections:
    1. **Pages** (general navigation)
    2. **Help** (support resources)
    3. **Company** (legal and about)
    4. **Socials** (external links)
- Extendable: add real social media links or icons (e.g., `<a href="https://twitter.com/...">`).
- Uses `.vp-footer` as the root class with BEM-style child classes such as `.vp-footer__inner`.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025

### Contact FAQ fragment (M15)

The existing FAQ Link remains `/contact#faq`. M15 supplies `id="faq"` on Contact's
FAQ section and a location-hash effect: on mount/hash change to exactly `#faq`,
Contact looks up that element and calls its native `scrollIntoView()`. The target
uses `scroll-margin-top: 90px` for a navigation offset. This is target-specific
handling, not a global scroll manager or a new fragment-link API; it does not
move keyboard focus to the heading.

`contact.component.test.tsx` mounts `/contact#faq`, checks the matching section
ID and a mocked scroll call; ContactForm/CTA are mocked. The handoff reports a
synthetic Creator direct fragment load and footer Enter navigation positioning
the heading in view. Pointer, reload/Back/Forward, same-fragment revisit, narrow
header clearance and other roles still need browser checks. Other footer anchors
were not audited by this fix. See [M15 interaction scope](../architecture/application-structure.md#marketing-interactions-and-animation-ownership-m15).
