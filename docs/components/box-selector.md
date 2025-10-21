---
title: GalBoxSelector
---

### GalBoxSelector (quick notes)
- **Location:** `src/components/gal-box-selector/`
- **Props:** `selectedOption`, `onSelect`, `disabledOptions`, `availableOptions`
- **Usage:** 
  - Displays a list of selectable boxes for choosing a `ProductType` or `LessonType`.
  - Used in product and course creation flows to pick among available types or lessons.
- **A11y:**
  - Currently relies on clickable `<div>` elements — consider switching to `<button>` for keyboard and screen-reader support.
  - Add `aria-pressed` or `aria-selected` attributes to indicate state.
  - When disabled, use `aria-disabled="true"`.

### Example
```tsx
<GalBoxSelector
  selectedOption="Course"
  onSelect={(option) => console.log(option)}
  availableOptions={['Course', 'Lesson', 'Bundle']}
  disabledOptions={['Bundle']}
/>
```

### Notes
- Highlights the selected box with `.option-box__selected` class.
- Disabled boxes use `.option-box__disabled` and ignore clicks.
- Can be extended to render custom content instead of plain text (`option`).
- Consider memoizing `onSelect` for performance if used in large lists.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025
