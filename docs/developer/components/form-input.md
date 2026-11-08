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
  - `error?` — associated field error; `suffixAriaLabel?` and `suffixPressed?` describe an interactive suffix
  - `maxLength?` — limits input length  
  - `disabled?`, `readOnly?` — native input states
  - `...otherProps` — forwarded to the underlying `<input>`
- **Usage:**  
  - A labeled input with associated errors and optional prefix/suffix icons. PasswordInput composes it for password visibility and guidance; multiline fields use Textarea.
  - Commonly used in sign-up, login, and product creation forms.
- **A11y:**
  - Supply a unique Input `name` so `<label htmlFor>` resolves to its control ID.
  - Input uses a semantic `<input>`; the separate Textarea uses `<textarea>`.
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
/>
```


### Notes
- PasswordInput supplies the native input type, visibility handler, suffix icon/name/pressed state and optional guidance list. Input does not interpret a `passwordField` configuration.
- Multiline fields use the separate Textarea component rather than a legacy auto-resize input helper.
- CSS class structure:
    - `.input-wrapper`, `.input-label`, `.input-row`
    - `.input-field`, `.input-error-message`
    - `.input-prefix`, `.input-suffix`
- Used in forms like [`ContactForm`](contact-form.md) or onboarding steps.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025

### Onboarding validation associations

Onboarding Title, Bio, Tagline / Mission and Website pass `label`, a stable `name`, and `error={fieldState.error?.message}` through the shared Input/Textarea components. Labels use `htmlFor` with the control ID; Input error text has a matching name-based error ID; Textarea error IDs derive from its effective field ID. Both are included in `aria-describedby`. An error sets `aria-invalid`; correction clears validation through React Hook Form. Do not render standalone unassociated labels/error paragraphs instead.

`multi-step-form.component.test.tsx` checks labels, invalid state, description targets and field correction across profile steps. These DOM assertions do not establish screen-reader announcements or full browser E2E behavior. See [User API](../api/user.md#onboarding-profile-save-lifecycle) for save sequencing and verification scope.

### Authentication errors and visibility controls

SignIn passes custom email/password errors through Input/PasswordInput `error` props rather than separate paragraphs. Shared Input creates matching name-based error IDs, `aria-describedby` and `aria-invalid`; correcting sign-in values revalidates existing errors. This is field association, not verified screen-reader speech or new server-error handling.

Input suffix buttons accept `suffixAriaLabel` and `suffixPressed`. PasswordInput supplies Show/Hide names derived from the field label and `aria-pressed` reflecting visible text. It preserves the value when toggling. Password guidance belongs to PasswordInput and stays mounted whenever `showRules` is true, independent of focus; it is not a sign-in complexity gate. See [Auth API verification scope](../api/auth.md#m4-verification-scope).

### Native field states and Textarea identity (M12)

Input forwards `disabled` and `readOnly` to the actual `<input>` in addition to
styling classes. Native disabled controls are skipped by Tab/Shift+Tab; read-only
controls remain focusable and readable while preventing editing. Choose the prop
for the intended interaction rather than using visual styling as a substitute.
The optional suffix button also receives `disabled`. Controlled values, change
handlers, required/max-length attributes and validation associations remain.

For Input, supply a unique `name`: it supplies the control ID, label target and
name-based error ID. Textarea is separate (`src/shared/ui/textarea/`): it uses an
explicit `id` when supplied, otherwise a stable instance-specific `useId` value.
Its visible label targets that ID; validation uses `${inputId}-error`, combines
existing `aria-describedby`, and sets `aria-invalid` when an error exists. Do not
hardcode a generated ID or expect Textarea errors to use `${name}-error`. Explicit
IDs must remain unique. `isMaxLengthShown` belongs to Textarea.

Landing Builder's **Marketing description** uses this labeled Textarea, including
when customization is in a Drawer. Shared tests find two same-labeled fields by
name, verify distinct IDs and label-click focus. Input tests verify disabled Tab
skipping and focusable read-only values; onboarding tests retain accessible error
descriptions. Browser Landing Builder label/Save/Reset and screen-reader behavior
remain pending. Settings login email and social-prefix inputs use native disabled
state; this does not change M9 profile validation or persistence.
