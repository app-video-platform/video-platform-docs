---
title: GalButton
---

### GalButton (quick notes)
- **Location:** `src/components/gal-button/`
- **Props:** `text`, `type`, `htmlType`, `onClick`, `customClassName`, `disabled`
- **Usage:** Core button used across flows like Wishlist, Cart, and Product forms.
- **A11y:**
  - Semantic `<button>` ensures keyboard + screen reader support.
  - Use `disabled` instead of removing the button from DOM.
  - Add `aria-busy="true"` if a loading spinner is introduced later.

### Example
```tsx
<GalButton 
  text="Add to Cart"
  type="primary"
  onClick={() => alert('Item added!')}
/>
```

### Notes
- `type`: visual style (`neutral`, `primary`, `secondary`).
- `htmlType`: HTML attribute (`button`, `submit`, `reset`).
- Consider creating a `loading` prop for future async states.

<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025
