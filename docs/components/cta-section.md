---
title: GalCtaSection
---

### GalCtaSection (quick notes)
- **Location:** `src/components/gal-cta-section/`
- **Props:** `headerText`, `descriptionText`
- **Usage:** 
  - Displays a call-to-action banner with a header, description, and two buttons.
  - Used in landing and marketing pages to guide users to key routes (`/pricing` and `/about`).
- **A11y:**
  - Uses semantic `<section>` to denote a distinct page region.
  - Buttons are proper `<button>` elements via [`GalButton`](button.md), ensuring keyboard focus and ARIA support.

### Example
```tsx
<GalCtaSection
  headerText="Start creating today"
  descriptionText="Join hundreds of creators building and selling their digital content."
/>
```


### Notes
- Uses `useNavigate` to programmatically route within the app.
- Primary button → `/pricing`
- Secondary button → `/about`
- Can easily be extended to accept button labels or custom navigation targets as props.
- Styling handled in `gal-cta-section.styles.scss`.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025