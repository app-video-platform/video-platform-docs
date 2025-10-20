---
title: GalGoogleSignInButton
---

### GalGoogleSignInButton (quick notes)
- **Location:** `src/components/gal-google-sign-in-button/`
- **Props:** *(none — all handled internally)*
- **Usage:**
  - Renders the Google Sign-In button using the **Google Identity Services (GSI)** SDK.
  - Handles user login with Google → dispatches `googleSignInUser` → fetches profile via `getUserProfile` → redirects to `/app`.
  - Requires `REACT_APP_GOOGLE_CLIENT_ID` set in your `.env` file.
- **A11y:**
  - The GSI button rendered by Google already handles focus and accessibility standards.
  - Ensure the parent page has a clear heading context and doesn’t hide the button behind overlays.

### Example
```tsx
<GalGoogleSignInButton />
```

### Notes
- Depends on:
- `google.accounts.id.initialize()` and `renderButton()` from the global Google API script.
    - Redux actions: `googleSignInUser`, `getUserProfile`.
    - `useNavigate` from React Router for post-login redirection.
- Make sure to include the Google SDK in your `index.html`:
```html
<script
  src="https://accounts.google.com/gsi/client"
  async
  defer
  onload="window.dispatchEvent(new Event('gsi-loaded'))"
></script>
```
- Environment variable required:
```bash
REACT_APP_GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
```
- The `<div ref={googleButton}>` is where Google injects its button.
- You can style the outer container for layout but not the button itself (Google guidelines restrict it).

> Owner: @aleb, el Hijo del Diablo · Last reviewed: 2025-10-20
