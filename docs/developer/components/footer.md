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
