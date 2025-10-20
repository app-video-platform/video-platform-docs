---
title: GalPriceSelector
---

### GalPriceSelector (quick notes)
- **Location:** `src/components/gal-price-selector/`
- **Props:**
  - `price: 'free' | number` — current selected price or `'free'` for free mode
  - `setPrice(price)` — callback to update the price value in the parent component
- **Usage:**
  - Provides a simple toggle between **Free** and **Paid** options.
  - When **Paid** is selected, displays a numeric input for entering the price (via [`GalFormInput`](form-input.md)).
- **A11y:**
  - Uses native `<input type="radio">` elements for correct accessibility and keyboard navigation.
  - Labels (“Free”, “Paid”) are associated directly with the inputs.
  - The price input uses a labeled [`GalFormInput`](form-input.md).

### Example
```tsx
import GalPriceSelector from '@/components/gal-price-selector/gal-price-selector.component';

function ProductPricing() {
  const [price, setPrice] = useState<'free' | number>('free');

  return (
    <div>
      <h3>Set product pricing</h3>
      <GalPriceSelector price={price} setPrice={setPrice} />
      <p>
        Current value: {price === 'free' ? 'Free' : `$${price.toFixed(2)}`}
      </p>
    </div>
  );
}
```

### Notes
- Internally uses `useState` to track the current mode (`free` or `paid`).
- When the mode changes to `'free'`, it automatically resets the price state to `'free'`.
- When the mode is `'paid'`, a controlled [`GalFormInput`](form-input.md) is rendered for numeric entry.
- CSS hooks:
    - `.price-selector`
    - `.price-radio-group`
    - `.price-input`
- Common use cases:
    - Product creation / editing forms
    - Course pricing
    - Service tiers or add-ons

> Owner: @aleb, el Hijo del Diablo · Last reviewed: 2025-10-20