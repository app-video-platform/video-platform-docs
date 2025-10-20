---
title: GalFormInput
---

### GalFormInput (quick notes)
- **Location:** `src/components/gal-form-input/`
- **Props:**  
  - `label?` — field label text  
  - `value` — string or number  
  - `required?` — marks input as required  
  - `inputType?` — `'text' | 'textarea' | 'number'` (default `'text'`)  
  - `isMaxLengthShown?` — shows live character counter  
  - `passwordField?` — `{ isFieldPassword?: boolean; isMainField?: boolean }`  
  - `maxLength?` — limits input length  
  - `...otherProps` — forwarded to underlying `<input>` or `<textarea>`  
- **Usage:**  
  - A flexible form input that can render text fields, textareas, and password inputs with visibility toggling and live validation.
  - Commonly used in sign-up, login, and product creation forms.
- **A11y:**
  - Each field is labeled via `<label htmlFor>`.
  - Uses semantic `<input>` and `<textarea>` elements.
  - Password rules list is visible on focus; can be announced to assistive tech with `aria-live` if needed.

### Example
```tsx
<GalFormInput
  label="Password"
  name="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
  inputType="text"
  passwordField={{ isFieldPassword: true, isMainField: true }}
  maxLength={40}
  isMaxLengthShown
/>
```


### Notes
- When `passwordField.isMainField` is `true`, the component displays validation hints (min length, upper/lowercase, number, symbol).
- When `passwordField.isFieldPassword` is `true`, it adds a toggle button using icons from `lucide-react`.
- `GalAutoResizeTextarea` is used for `inputType="textarea"` to auto-grow message fields.
- CSS class structure:
    - `.group`
    - `.form-input`
    - `.form-input-label`
    - `.password-rules`
    - `.toggle-password-btn`
- Used in forms like [`GalContactForm`](contact-form.md) or onboarding steps.

> Owner: @aleb, el Hijo del Diablo · Last reviewed: 2025-10-20