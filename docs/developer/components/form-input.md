---
title: Input
---

### Input (quick notes)
- **Location:** `src/shared/ui/input/`
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
<Input
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
- Multiline fields use the separate Textarea component rather than a legacy auto-resize input helper.
- CSS class structure:
    - `.group`
    - `.form-input`
    - `.form-input-label`
    - `.password-rules`
    - `.toggle-password-btn`
- Used in forms like [`ContactForm`](contact-form.md) or onboarding steps.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025

### Onboarding validation associations

Onboarding Title, Bio, Tagline / Mission and Website pass `label`, a stable `name`, and `error={fieldState.error?.message}` through the shared Input/Textarea components. Labels use `htmlFor` with the control ID; error text has a matching name-based error ID and is included in `aria-describedby`. An error sets `aria-invalid`; correction clears validation through React Hook Form. Do not render standalone unassociated labels/error paragraphs instead.

`multi-step-form.component.test.tsx` checks labels, invalid state, description targets and field correction across profile steps. These DOM assertions do not establish screen-reader announcements or full browser E2E behavior. See [User API](../api/user.md#onboarding-profile-save-lifecycle) for save sequencing and verification scope.
