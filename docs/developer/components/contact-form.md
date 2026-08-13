---
title: ContactForm
---

### ContactForm (quick notes)
- **Location:** `src/domains/marketing/shared/components/contact-form/`
- **Props:** *(none — manages its own state)*
- **Usage:** 
  - A fully controlled contact form that collects user details and a message.
  - Uses [`Input`](form-input.md), [`CheckboxInput`](checkbox-input.md), and [`Button`](button.md) components.
  - Handles local state with `useState` and a controlled `onChange` handler.
- **A11y:**
  - Each field has an explicit label via [`Input`](form-input.md)’s `label` prop.
  - Checkbox uses a semantic input and label association.
  - The submit button (`htmlType="submit"`) is focusable and triggers form submission via keyboard.

### Example
```tsx
<ContactForm />
```

### Notes
- The form manages state internally (`formData`) for all inputs.
- `handleSubmit` currently just prevents page reload; extend it to send data via API or email.
- Reuses:
    - [`Input`](form-input.md) for text fields and textareas.
    - [`CheckboxInput`](checkbox-input.md) for consent.
    - [`Button`](button.md) for submission.
- To reset fields after submit, set `formData` back to its initial state.
- When adding validation, prefer native constraints (`required`) or React Hook Form for complex rules.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025