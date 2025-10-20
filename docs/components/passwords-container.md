---
title: GalPasswordsContainer
---

### GalPasswordsContainer (quick notes)
- **Location:** `src/components/gal-passwords-container/`
- **Props:**
  - `passwordInput: string` — controlled value of the main password field
  - `confirmPasswordInput: string` — controlled value of the confirmation field
  - `passwordErrors: string` — validation or server error message for password
  - `confirmPasswordErrors: string` — validation or server error message for confirm password
  - `handleChange(e)` — change handler for both fields (shared in parent form)
- **Usage:**
  - Renders **two password fields** with:
    - Visibility toggles (`Eye` / `EyeOff` from `lucide-react`)
    - Live validation checklist (uppercase, number, special char, etc.)
    - Error messages below each field
  - Typically used in sign-up, password-reset, and onboarding flows.
- **A11y:**
  - Labels are linked to inputs via `htmlFor`.
  - Focus behavior ensures password rules appear only when editing.
  - Icons are hidden from assistive tech (`aria-hidden` via icon SVG defaults).

### Example
```tsx
import GalPasswordsContainer from '@/components/gal-passwords-container/gal-passwords-container.component';

function SignUpForm() {
  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <GalPasswordsContainer
      passwordInput={form.password}
      confirmPasswordInput={form.confirmPassword}
      passwordErrors={errors.password}
      confirmPasswordErrors={errors.confirmPassword}
      handleChange={handleChange}
    />
  );
}
```


### Notes
- Internally reuses [`GalFormInput`](form-input.md) for each field.
- Password rules (like “At least 8 characters”) are dynamically colored:
    - `green` → valid rule
    - `red` / `grey` → still unmet
- CSS structure:
    - `.password-group`
    - `.toggle-password-btn`
    - `.password-rules`
    - `.error-text-red`
- Use this instead of separate inputs to maintain consistent UX and validation rules across the app.

> Owner: @aleb, el Hijo del Diablo · Last reviewed: 2025-10-20