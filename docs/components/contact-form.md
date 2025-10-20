---
title: GalContactForm
---

### GalContactForm (quick notes)
- **Location:** `src/components/gal-contact-form/`
- **Props:** *(none — manages its own state)*
- **Usage:** 
  - A fully controlled contact form that collects user details and a message.
  - Uses [`GalFormInput`](form-input.md), [`GalCheckboxInput`](checkbox-input.md), and [`GalButton`](button.md) components.
  - Handles local state with `useState` and a controlled `onChange` handler.
- **A11y:**
  - Each field has an explicit label via [`GalFormInput`](form-input.md)’s `label` prop.
  - Checkbox uses a semantic input and label association.
  - The submit button (`htmlType="submit"`) is focusable and triggers form submission via keyboard.

### Example
```tsx
<GalContactForm />
```

### Notes
- The form manages state internally (`formData`) for all inputs.
- `handleSubmit` currently just prevents page reload; extend it to send data via API or email.
- Reuses:
    - [`GalFormInput`](form-input.md) for text fields and textareas.
    - [`GalCheckboxInput`](checkbox-input.md) for consent.
    - [`GalButton`](button.md) for submission.
- To reset fields after submit, set `formData` back to its initial state.
- When adding validation, prefer native constraints (`required`) or React Hook Form for complex rules.

> Owner: @aleb, el Hijo del Diablo · Last reviewed: 2025-10-20