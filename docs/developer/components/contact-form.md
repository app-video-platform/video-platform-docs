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
  - The native submit button (`type="submit"`) invokes the local form handler; that handler prevents default submission without sending a message.

### Example
```tsx
<ContactForm />
```

### Notes
- The form manages state internally (`formData`) for all inputs.
- `handleSubmit` currently just prevents page reload; extend it to send data via API or email.
- Reuses:
    - [`Input` and Textarea](form-input.md) for single-line and multiline fields.
    - [`CheckboxInput`](checkbox-input.md) for the displayed agreement.
    - [`Button`](button.md) for submission.
- To reset fields after submit, set `formData` back to its initial state.
- When adding validation, prefer native constraints (`required`) or React Hook Form for complex rules.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025

### Agreement compatibility (M14)

The change handler reads `event.target.checked` for a native checkbox and
`event.target.value` for text controls. Its boolean `agree` value stays in sync
with controlled CheckboxInput, allowing the agreement to toggle both on and off.
`contact-form.component.test.tsx` verifies both pointer toggles and their native
checked state. This is a compatibility fix for the shared checkbox change; it
adds no Contact submission, backend handling, agreement validation or new legal
acceptance requirement. Other Contact behavior is unchanged.
