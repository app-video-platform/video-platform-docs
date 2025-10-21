---
title: GalSocialMediaInput
---

### GalSocialMediaInput (quick notes)
- **Location:** `src/components/gal-social-media-input/`
- **Props:**
  - `initialSocialLinks?: SocialMediaLink[]` — prefilled links (e.g., from user profile)
  - `onChange(links: SocialMediaLink[])` — fired whenever the internal list changes
- **Usage:**
  - Circular icons for each platform (Facebook, Instagram, X, YouTube, TikTok).
  - Clicking an icon opens an inline input panel to add/update/remove the URL.
  - Persists a local list of `{ platform, url }` and emits it via `onChange`.
- **A11y:**
  - Icons are buttons visually; consider `role="button"` + `aria-label` or using a real `<button>`.
  - The inline input is auto-focused; ensure visible focus ring.
  - Add `aria-live="polite"` to the “completed/removed” state if you want status spoken.

### Example
```tsx
import GalSocialMediaInput from '@/components/gal-social-media-input/gal-social-media-input.component';
import { SocialPlatforms } from '@/api/models/socials/social-media-link';

export default function SocialsSection() {
  return (
    <GalSocialMediaInput
      initialSocialLinks={[
        { id: null, platform: SocialPlatforms.IG, url: 'https://instagram.com/myhandle' },
        { id: null, platform: SocialPlatforms.YT, url: 'https://youtube.com/@mychannel' },
      ]}
      onChange={(links) => console.log('Updated links:', links)}
    />
  );
}
```


### Notes
- Animations: Uses `framer-motion`’s `motion` + `AnimatePresence` for circle hover, check/close overlays, and the expanding input panel.
- State helpers:
    - `completed[id]` shows a green check when a non-empty URL is saved.
    - `removed[id]` shows a red X if cleared after previously set.
    - `initialValuesById` is used to determine whether the new value equals the original (then a minus icon is shown).
- Events:
    - Press Enter or click the action button to confirm add/update/remove per platform.
- Styling hooks:
    - `.animated-circle-input`, `.circles`, `.circle`, `.check-overlay`, `.input-panel`
- Extensibility:
    - Validate URLs per platform before saving.
    - Swap text input for a platform-specific helper (e.g., only allow usernames, build full URL).
    - Persist to profile via API in the parent on `onChange`.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025