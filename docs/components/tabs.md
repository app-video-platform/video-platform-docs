---
title: GalTabs
---

### GalTabs (quick notes)
- **Location:** `src/components/gal-tabs/`
- **Props:**
  - `items`: `TabItem[]` — array of `{ label: string; content: ReactNode }`
  - `defaultIndex?`: number — the index of the tab open by default
- **Usage:**
  - Simple tab switcher UI for organizing related content in a compact view.
  - Used in library pages, dashboards, and forms with grouped sections.
- **A11y:**
  - Each tab is rendered as a `<button>`.
  - Consider adding `role="tablist"` to the header and `role="tabpanel"` to the content.
  - Add `aria-selected` and `aria-controls` attributes for improved accessibility.

### Example
```tsx
import GalTabs, { TabItem } from '@/components/gal-tabs/gal-tabs.component';

const items: TabItem[] = [
  { label: 'Overview', content: <p>This is the overview section.</p> },
  { label: 'Details', content: <p>More detailed information goes here.</p> },
  { label: 'Reviews', content: <p>User reviews and comments.</p> },
];

function ProductTabs() {
  return <GalTabs items={items} defaultIndex={0} />;
}
```


### Notes
- The active tab is controlled internally via state.
- Styling handled through `gal-tabs.styles.scss`, typically defining:
    - `.gal-tabs` — wrapper
    - `.gal-tabs-header` — flex container for buttons
    - `.gal-tab-button` — base tab styles
    - `.gal-tab-button__active` — active tab highlight
    - `.gal-tab-content` — panel area
- To extend:
    - Add props like `onTabChange(index: number)` for parent callbacks.
    - Support keyboard navigation (`ArrowLeft`/`ArrowRight`).
    - Animate transitions with `framer-motion`.

> Owner: @aleb, el Hijo del Diablo · Last reviewed: 2025-10-20