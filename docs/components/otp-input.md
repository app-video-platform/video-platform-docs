---
title: GalOTPInput
---

### GalOTPInput (quick notes)
- **Location:** `src/components/gal-otp-input/`
- **Props:**
  - `value?` — the current OTP string (controlled input)
  - `onChange(otp: string)` — callback when digits change
  - `numInputs?` — number of input boxes (default from library, typically 4 or 6)
- **Usage:**
  - Used for email or phone verification steps.
  - Renders a series of inputs that accept one character each and automatically focus next/previous fields.
  - Built on top of the [`react-otp-input`](https://www.npmjs.com/package/react-otp-input) library.
- **A11y:**
  - Each input is a native `<input>` with proper focus behavior.
  - Use clear instructions and labels near the component (e.g., “Enter 6-digit verification code”).
  - Ensure that the OTP input has sufficient contrast and focus outline.

### Example
```tsx
import GalOTPInput from '@/components/gal-otp-input/gal-otp-input.component';

function VerifyEmail() {
  const [otp, setOtp] = useState('');

  return (
    <div>
      <p>Enter the verification code sent to your email:</p>
      <GalOTPInput value={otp} onChange={setOtp} numInputs={6} />
      <button disabled={otp.length < 6}>Verify</button>
    </div>
  );
}
```



### Notes
- Styling classes:
    - `otp-input` — applied to each input
    - `otp-container` — wraps all inputs
- Supports any number of digits through `numInputs`.
- You can prefill the OTP programmatically via `value` prop.
- Commonly used in:
    - Sign-up verification flows
    - Password reset
    - Two-factor authentication (2FA)

> Owner: @aleb, el Hijo del Diablo · Last reviewed: 2025-10-20