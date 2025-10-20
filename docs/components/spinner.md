---
title: GalSpinner
---

### GalSpinner (quick notes)
- **Location:** `src/components/gal-spinner/`
- **Props:** _(none)_
- **Usage:**
  - Minimal visual loading indicator used across the app (buttons, modals, and pages).
  - Centralized spinner component to maintain a consistent loading style.
- **A11y:**
  - Should always include `role="status"` and optionally an `aria-label` or visually hidden text when used inline, e.g. `"Loading..."`.
  - Consider wrapping it in a container that informs users of ongoing operations.

### Example
```tsx
import GalSpinner from '@/components/gal-spinner/gal-spinner.component';

function LoadingSection() {
  return (
    <div className="centered-container">
      <GalSpinner />
      <p>Loading your content...</p>
    </div>
  );
}
```


### Notes
- Style is defined in `gal-spinner.styles.scss `using a CSS animation for rotation (typically `@keyframes spin`).
- Keeps logic minimal: no props or states.
- To adapt:
  - Add size or color props if needed (`small`, `medium`, `large`, `color`).
  - Use CSS variables (`--spinner-size`, `--spinner-color`) for flexibility.
- Example CSS (simplified):
```css
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

> Owner: @aleb, el Hijo del Diablo · Last reviewed: 2025-10-20