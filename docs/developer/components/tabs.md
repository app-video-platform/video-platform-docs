---
title: Tabs
---

### Tabs (quick notes)
- **Location:** `src/shared/ui/tabs/`
- **Props:**
  - `items`: `TabItem[]` — array of `{ label: string; content: ReactNode }`
  - `defaultIndex?`: number — the index of the tab open by default
- **Usage:**
  - Simple tab switcher UI for organizing related content in a compact view.
  - Used for grouped component content. Library uses its own route-backed links rather than this shared component.
- **A11y:**
  - Each tab is rendered as a `<button>`.
  - Consider adding `role="tablist"` to the header and `role="tabpanel"` to the content.
  - Add `aria-selected` and `aria-controls` attributes for improved accessibility.

### Example
```tsx
import { Tabs, TabItem } from '@/shared/ui';

const items: TabItem[] = [
  { label: 'Overview', content: <p>This is the overview section.</p> },
  { label: 'Details', content: <p>More detailed information goes here.</p> },
  { label: 'Reviews', content: <p>User reviews and comments.</p> },
];

function ProductTabs() {
  return <Tabs items={items} defaultIndex={0} />;
}
```


### Notes
- The active tab is controlled internally via state.
- Styling handled through `tabs.styles.scss`, typically defining:
    - `.tabs` — wrapper
    - `.tabs-header` — flex container for buttons
    - `.tab-button` — base tab styles
    - `.tab-button__active` — active tab highlight
    - `.tab-content` — panel area
- To extend:
    - Add props like `onTabChange(index: number)` for parent callbacks.
    - Support keyboard navigation (`ArrowLeft`/`ArrowRight`).
    - Animate transitions with `framer-motion`.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025

### Library route-backed navigation

`src/domains/app/pages/normal-user-specific/library-page/library-page.component.tsx` derives its active tab from the child pathname. NavLink styling, `aria-selected`, the Outlet content and URL stay aligned through direct entry and history changes. The selected link has `tabIndex=0`, others -1. ArrowLeft/ArrowRight wrap; Home/End select first/last, call navigate and focus the corresponding link. Do not maintain a separate default-selected index for this route tree or infer that shared Tabs gained this keyboard handler.

`library-page.component.test.tsx` checks each child route, ArrowRight focus/navigation and Back/Forward selection. Native screen-reader behavior and full live purchased-content journeys are not established by these component tests.
