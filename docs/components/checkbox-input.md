---
title: GalCheckboxInput
---

### GalCheckboxInput (quick notes)
- **Location:** `src/components/gal-checkbox-input/`
- **Props:** `label`, `name`, `checked`, `onChange`, `disabled`
- **Usage:** 
  - Standard checkbox input with a label, styled using Tailwind classes.
  - Used in settings, product configuration forms, and filter panels.
- **A11y:**
  - Properly associates `<label>` with `<input>` via `htmlFor` / `id`.
  - Uses native checkbox semantics, ensuring full keyboard and screen-reader support.
  - Adds visible focus outline automatically via Tailwind’s form-checkbox defaults.

### Example
```tsx
<GalCheckboxInput
  label="Receive notifications"
  name="notifications"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>
```


### Notes
- Always keep `name` unique within a form.
- The `checked` prop is fully controlled — manage state via `onChange`.
- To disable interaction, use `disabled={true}`.
- For accessibility, avoid removing the label; if hidden visually, still provide it for screen readers.

> Owner: @aleb, el Hijo del Diablo · Last reviewed: 2025-10-20