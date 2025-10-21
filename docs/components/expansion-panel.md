---
title: GalExpansionPanel
---

### GalExpansionPanel (quick notes)
- **Location:** `src/components/gal-expansion-panel/`
- **Props:** 
  - `header` — string, displayed as the clickable header.
  - `children` — content rendered inside the panel when expanded.
  - `defaultExpanded?` — opens panel by default.
  - `disabled?` — disables toggle behavior.
  - `onToggle?` — callback fired when expanded/collapsed.
- **Usage:**
  - Used to show and hide detailed content like FAQs, product details, or collapsible sections in settings or dashboards.
- **A11y:**
  - Uses a `<button>` as the toggle for keyboard and screen reader accessibility.
  - Implements `aria-expanded`, `aria-controls`, and `role="region"`.
  - Disabled state reflected with both `aria-disabled` and `disabled`.

### Example
```tsx
<GalExpansionPanel header="More information" defaultExpanded>
  <p>This section contains additional details for advanced users.</p>
</GalExpansionPanel>
```


### Notes
- Internal state managed via `useState`, starting from `defaultExpanded`.
- Smooth expansion achieved by adjusting `maxHeight` via `ref.scrollHeight`.
- Use `onToggle` if you need to track open/close state externally.
- Style classes:
    - `.expansion-panel__header`
    - `.expansion-panel__content`
    - .`.expanded` / `.collapsed`
    - `.disabled`

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025