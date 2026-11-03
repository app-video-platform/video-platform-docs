---
title: Input
---

### Input (quick notes)
- **Location:** `src/shared/ui/input/`
- **Props:**  
  - `label?` — field label text  
  - `value` — string or number  
  - `required?` — marks input as required  
  - `type?` — native input type (default `'text'`)
  - `isMaxLengthShown?` — shows live character counter  
  - `error?` — associated field error; `suffixAriaLabel?` and `suffixPressed?` describe an interactive suffix
  - `maxLength?` — limits input length  
  - `...otherProps` — forwarded to underlying `<input>` or `<textarea>`  
- **Usage:**  
  - A labeled input with associated errors and optional prefix/suffix icons. PasswordInput composes it for password visibility and guidance; multiline fields use Textarea.
  - Commonly used in sign-up, login, and product creation forms.
- **A11y:**
  - Each field is labeled via `<label htmlFor>`.
  - Uses semantic `<input>` and `<textarea>` elements.
  - PasswordInput owns password guidance and keeps it mounted when `showRules` is true; Input supplies accessible suffix button attributes.

### Example
```tsx
<Input
  label="Password"
  name="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
  type="password"
  maxLength={40}
  isMaxLengthShown
/>
```


### Notes
- PasswordInput supplies the native input type, visibility handler, suffix icon/name/pressed state and optional guidance list. Input does not interpret a `passwordField` configuration.
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

### Authentication errors and visibility controls

SignIn passes custom email/password errors through Input/PasswordInput `error` props rather than separate paragraphs. Shared Input creates matching name-based error IDs, `aria-describedby` and `aria-invalid`; correcting sign-in values revalidates existing errors. This is field association, not verified screen-reader speech or new server-error handling.

Input suffix buttons accept `suffixAriaLabel` and `suffixPressed`. PasswordInput supplies Show/Hide names derived from the field label and `aria-pressed` reflecting visible text. It preserves the value when toggling. Password guidance belongs to PasswordInput and stays mounted whenever `showRules` is true, independent of focus; it is not a sign-in complexity gate. See [Auth API verification scope](../api/auth.md#m4-verification-scope).
