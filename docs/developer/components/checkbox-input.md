---
title: CheckboxInput
---

### CheckboxInput (quick notes)
- **Location:** `src/shared/ui/checkbox-input/`
- **Props:** native React input attributes, including `name`, `id`, `checked`, `onChange`, `disabled`, and `aria-label`; optional `label` accepts ReactNode.
- **Usage:** 
  - Native checkbox inside a wrapping label, with SCSS styling and a visible custom indicator.
  - Used in settings, product configuration forms, and filter panels.
- **A11y:**
  - The wrapping `<label>` supplies implicit association when visible label content is provided.
  - `checked` and `disabled` reach the native input. Enabled inputs remain focusable; Space toggles the native control, while disabled controls follow native focus/interaction semantics.
  - The input is visually reduced to a transparent 1px control rather than `display: none`; `:focus-visible` outlines the adjacent `.checkbox-box`.
  - DOM/keyboard tests do not establish manual screen-reader output or complete accessibility compliance.

### Example
```tsx
<CheckboxInput
  label="Receive notifications"
  name="notifications"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>
```


### Notes
- Always keep `name` unique within a form.
- When supplying `checked`, keep boolean state synchronized through `onChange` using `event.target.checked`; string `event.target.value` is not the selected state.
- To disable interaction, use `disabled={true}`.
- Give every checkbox a meaningful accessible name: visible `label` content or an `aria-label` for a compact indicator. Do not remove the name to save layout width.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025

### Compact Product selection (M14)

ProductPicker uses `aria-label` with the value `Select ${getProductTitle(product)}` instead of
a long visible selection label. Its content column still renders the complete
Product title, type/status and available description. The existing grid remains
`3rem minmax(0, 1fr) auto`; the checkbox no longer makes its automatic column as
wide as the full title. Picker/identity containers can shrink, and titles and
descriptions use `overflow-wrap: anywhere`. The removed mobile grid override no
longer relocates the checkbox across the row. No new public Checkbox API was
introduced.

`product-picker.component.test.tsx` focuses a checkbox named **Select** plus a
long unbroken title, uses Space to select it, verifies the full title remains in
the DOM, and confirms the existing selected ID. That proves naming/selection,
not actual drawer geometry. The historical long-title Membership picker was not
browser-tested because the local Membership had no eligible Products. Check
ordinary, multiword and unbroken titles with keyboard and pointer input before
claiming the original layout reproduction passes. See [long-content conventions](../architecture/application-structure.md#long-content-and-media-layout-m14).
