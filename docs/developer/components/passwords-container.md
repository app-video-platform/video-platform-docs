---
title: PasswordsContainer
---

### PasswordsContainer (quick notes)
- **Location:** `src/domains/app/components/passwords-container/`
- **Props:**
  - `passwordInput: string` — controlled value of the main password field
  - `confirmPasswordInput: string` — controlled value of the confirmation field
  - `passwordErrors: string` — validation or server error message for password
  - `confirmPasswordErrors: string` — validation or server error message for confirm password
  - `handleChange(e)` — change handler for both fields (shared in parent form)
- **Usage:**
  - Renders **two password fields** with:
    - Visibility toggles supplied by PasswordInput using `FaEye` / `FaEyeSlash`
    - Live validation checklist (uppercase, number, special char, etc.)
    - Error messages below each field
  - Typically used in sign-up, password-reset, and onboarding flows.
- **A11y:**
  - Labels are linked to inputs via `htmlFor`.
  - PasswordInput keeps its rules mounted while `showRules` is true, including focus/blur and submission, so guidance does not move the action.
  - Icons are hidden from assistive tech (`aria-hidden` via icon SVG defaults).

### Example
```tsx
import { PasswordsContainer } from '@/domains/app/components';

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
    <PasswordsContainer
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
- Wraps PasswordInput, which uses shared [`Input`](form-input.md). Each visibility button exposes Show/Hide plus its field label and pressed state, preserving the value on toggle. The container still renders its supplied errors separately; M4 sign-in/signup use PasswordInput error props directly, so do not infer that every form now has identical error wiring.
- Password rules (like “At least 8 characters”) are dynamically colored:
    - `green` → valid rule
    - `red` / `grey` → still unmet
- CSS structure:
    - `.password-group`
    - `.toggle-password-btn`
    - `.password-rules`
    - `.error-text-red`
- Use this instead of separate inputs to maintain consistent UX and validation rules across the app.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025
