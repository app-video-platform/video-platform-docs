---
title: GalIcon
---

### GalIcon (quick notes)
- **Location:** `src/components/gal-icon/`
- **Props:**  
  - `icon` — React icon component from `react-icons` (required)  
  - `color?` — icon color (default: `'black'`)  
  - `size?` — icon size in pixels (default: `24`)  
  - `className?` — optional CSS class for additional styling  
- **Usage:**  
  - Wrapper around `react-icons` components for consistent rendering across the app.
  - Simplifies dynamic icon rendering when the icon type is passed as a prop.
- **A11y:**  
  - Icons are purely decorative by default — consider adding `aria-hidden="true"` or wrapping in an element with accessible text if meaningful.

### Example
```tsx
import { FaRegHeart } from 'react-icons/fa';
import GalIcon from '@/components/gal-icon/gal-icon.component';

<GalIcon icon={FaRegHeart} color="crimson" size={20} />;
```

### Notes
- Uses `React.createElement()` to dynamically render the provided icon component.
- Great for use in buttons, navigation, and cards.
- CSS hook class: `.icon-container`.
- You can control hover effects and sizing globally via `.icon-container` in SCSS.
- Example use cases: wishlist icons, feature lists, or dashboard controls.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025